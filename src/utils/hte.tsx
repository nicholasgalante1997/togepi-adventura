/**
 * @abstract
 * HTML Templating Engine
 * This function accepts two arguments: A React Component that you wish to dehydrate into
 * 'static' markup, and an options object that assists in driving the Component configuration.
 * The function loads a public template html file - html.production.template, and then
 * embeds the result of dehydrating the component into a mounting element within the
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import path from 'path';
import fs from 'fs';
import { l } from './log';

export type HeadTagConfig = {
  content: string;
  name: string;
};

export type EmbedOptions = {
  headTags?: HeadTagConfig[];
  bundleName: string;
  props?: Record<string, any>;
};

export function embed(Component: React.ComponentType, options: EmbedOptions) {
  let html: string;
  let pageString: string;
  let error: Error | undefined;

  const sheet = new ServerStyleSheet();

  try {
    l('retrieving html template...');
    html = fs.readFileSync(
      path.resolve(process.cwd(), 'html', 'prod.template.html'),
      { encoding: 'utf-8' }
    );
    l('Dehydrating styled-components on server...');
    pageString = renderToString(
      sheet.collectStyles(
        <Component {...(options.props ? options.props : {})} />
      )
    );
    const styleTags = sheet.getStyleTags();
    html = html.replace('<!-- __style_mount__ -->', styleTags);
  } catch (e: any) {
    l(e, 'error');
    error = e as Error;
    throw e;
  } finally {
    l(
      `operation ended: status "${error ? 'failed' : 'successful'}"`,
      error ? 'error' : 'info'
    );
    sheet.seal();
  }

  if (options.headTags && options.headTags?.length > 0) {
    let metaTagString = '';
    for (const metaTag of options.headTags) {
      metaTagString += `<meta name="${metaTag.name}" content="${metaTag.content}">`;
    }
    html = html.replace('<!-- __head_mount__ -->', metaTagString);
  } else {
    html = html.replace('<!-- __head_mount__ -->', '');
  }

  const scriptTag = `<script src="${options.bundleName}.bundle.js" defer></script>`;
  html = html.replace('<!-- __client_js_mount__ -->', scriptTag);

  return html.replace(
    '<div id="production-root"></div>',
    `<div id="production-root">${pageString}</div>`
  );
}
