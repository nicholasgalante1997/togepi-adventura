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
    html = html.replace('<!-- __head_mounting_point__ -->', metaTagString);
  }

  return html.replace('<div id="production-root"></div>', pageString);
}
