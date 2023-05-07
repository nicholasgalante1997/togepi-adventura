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
import { Hydrate, type QueryClient, QueryClientProvider } from 'react-query';
import { type ApolloClient, ApolloProvider } from '@apollo/client';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import { ServerStyleSheet } from 'styled-components';
import path from 'path';
import fs from 'fs';
import { l } from './log';

export interface HeadTagConfig {
  content: string;
  name: string;
}

export interface EmbedOptions {
  bundleName: string;
  headTags?: HeadTagConfig[];
  queryConfig?: {
    queryClient: QueryClient;
    dehydratedState: any;
  };
  apolloConfig?: {
    apolloClient: ApolloClient<any>;
  };
  props?: Record<string, any>;
}

function withQueryClient(
  config: {
    queryClient: QueryClient;
    dehydratedState: any;
  },
  tree: JSX.Element
): JSX.Element {
  return (
    <QueryClientProvider client={config?.queryClient}>
      <Hydrate state={config.dehydratedState}>{tree}</Hydrate>
    </QueryClientProvider>
  );
}

function withApolloClientProvider(config: { apolloClient: ApolloClient<any> }, tree: JSX.Element): JSX.Element {
  return <ApolloProvider client={config.apolloClient}>{tree}</ApolloProvider>;
}

export async function embed(Component: React.ComponentType<any>, options: EmbedOptions) {
  let html: string;
  let pageString: string;
  let error: Error | undefined;

  const sheet = new ServerStyleSheet();

  try {
    l('retrieving html template...');
    html = fs.readFileSync(path.resolve(process.cwd(), 'html', 'prod.template.html'), { encoding: 'utf-8' });

    l('Setting up reactNode for dehydration...');
    let reactNode: JSX.Element = <Component {...(options.props != null ? options.props : {})} />;
    if (options.queryConfig != null) {
      reactNode = withQueryClient({ ...options.queryConfig }, reactNode);
    }
    if (options.apolloConfig != null) {
      reactNode = withApolloClientProvider({ ...options.apolloConfig }, reactNode);
      const graphQLHydratedPageString = await renderToStringWithData(reactNode);
      reactNode = <div id="apollo-hydration-container" dangerouslySetInnerHTML={{ __html: graphQLHydratedPageString }}></div>;
    }

    l('Dehydrating styled-components on server...');
    pageString = renderToString(sheet.collectStyles(reactNode));
    const styleTags = sheet.getStyleTags();
    html = html.replace('<!-- __style_mount__ -->', styleTags);
  } catch (e: any) {
    l(e, 'error');
    error = e as Error;
    throw e;
  } finally {
    l(`operation ended: status "${error != null ? 'failed' : 'successful'}"`, error != null ? 'error' : 'info');
    sheet.seal();
  }

  if (options.headTags != null && options.headTags?.length > 0) {
    let metaTagString = '';
    for (const metaTag of options.headTags) {
      metaTagString += `<meta name="${metaTag.name}" content="${metaTag.content}">`;
    }
    html = html.replace('<!-- __head_mount__ -->', metaTagString);
  } else {
    html = html.replace('<!-- __head_mount__ -->', '');
  }

  if (options.props != null && Object.keys(options.props).length > 0) {
    const componentStateElement = `<div id="component-state-mount">${JSON.stringify({ props: options.props }).replace(
      /</g,
      '\\u003c'
    )}</div>`;
    html = html.replace('<!-- __data_state_mount__ -->', componentStateElement);
  } else {
    html = html.replace('<!-- __data_state_mount__ -->', '');
  }

  if (options.queryConfig != null && options.queryConfig.dehydratedState) {
    const reactQueryScriptTag = `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(options.queryConfig.dehydratedState).replace(
      /</g,
      '\\u003c'
    )};</script>`;
    html = html.replace('<!-- __react_query_script_mount__ -->', reactQueryScriptTag);
  } else {
    html = html.replace('<!-- __react_query_script_mount__ -->', '');
  }

  if (options.apolloConfig != null) {
    const apolloClientCache = options.apolloConfig.apolloClient.extract();
    const apolloClientScriptTag = `<script>window.__APOLLO_STATE__=${JSON.stringify(apolloClientCache).replace(/</g, '\\u003c')};</script>`;
    html = html.replace('<!-- __apollo_client_script_mount__ -->', apolloClientScriptTag);
  } else {
    html = html.replace('<!-- __apollo_client_script_mount__ -->', '');
  }

  const scriptTag = `<script src="/${options.bundleName}.bundle.js" defer></script>`;
  html = html.replace('<!-- __client_js_mount__ -->', scriptTag);

  return html.replace('<div id="production-root"></div>', `<div id="production-root">${pageString}</div>`);
}
