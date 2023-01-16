// html template engine

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

export function embed(pageString: string, options: EmbedOptions) {
  let html: string;
  let error: Error | undefined;

  try {
    l('retrieving html template...');
    html = fs.readFileSync(
      path.resolve(process.cwd(), 'html', 'prod.template.html'),
      { encoding: 'utf-8' }
    );
  } catch (e: any) {
    l(e, 'error');
    error = (e as Error);
    throw e;
  } finally {
    l(`operation ended: status "${error ? "failed" : "successful"}"`, error ? 'error' : 'info');
  }

  if (options.headTags && options.headTags?.length > 0) {
    let metaTagString = '';
    for (const metaTag of options.headTags) {
      metaTagString += `<meta name="${metaTag.name}" content="${metaTag.content}">`;
    }
    html = html.replace('<!-- __head_mount__ -->', metaTagString);
  } else {
    html = html.replace('<!-- __head_mount__ -->', '')
  }

  const scriptTag = `<script src="${options.bundleName}.bundle.js" defer></script>`;
  html = html.replace('<!-- __client_js_mount__ -->', scriptTag);

  return html.replace('<div id="production-root"></div>', pageString);
}
