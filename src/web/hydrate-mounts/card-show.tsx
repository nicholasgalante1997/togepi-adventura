import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { hydrateRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CardShowPage } from '../pages';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache:
    window && (window as typeof window & typeof globalThis & { __APOLLO_STATE__: string }).__APOLLO_STATE__
      ? new InMemoryCache().restore((window as any).__APOLLO_STATE__)
      : new InMemoryCache(),
});

const queryClient = new QueryClient();
const dehydratedState = window && (window as typeof window & typeof globalThis & { __REACT_QUERY_STATE__: string }).__REACT_QUERY_STATE__;

function hydrateCardShowPage() {
  const href = window.location.href;
  const url = new URL(href);
  const { pathname } = url;
  const pkID = pathname.split('/')[pathname.split('/').length - 1];

  hydrateRoot(
    document.getElementById('production-root')!,
    <div id="apollo-hydration-container">
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydratedState}>
            <CardShowPage pkId={pkID} />
          </Hydrate>
        </QueryClientProvider>
      </ApolloProvider>
    </div>
  );
}

hydrateCardShowPage();
