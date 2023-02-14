// html template engine

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
    pageString = renderToString(sheet.collectStyles(<Component />));
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

  return html.replace('<div id="production-root"></div>', `<div id="production-root">${pageString}</div>`);
}
