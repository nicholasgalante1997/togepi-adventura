import React from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { hydrateRoot } from 'react-dom/client';
import { CardShowPage } from '../pages';

const client = new QueryClient();
const dehydratedState = window && (window as (typeof window & typeof globalThis & { __REACT_QUERY_STATE__: string })).__REACT_QUERY_STATE__;

function hydrateCardShowPage() {
  
  const href = window.location.href;
  const url = new URL(href);
  const { pathname } = url;
  const pkID = pathname.split('/')[pathname.split('/').length - 1];

  console.log('[web/hydrate-mounts/card-show] Im being rendered.')

  hydrateRoot(
    document.getElementById('production-root')!,
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <CardShowPage pkId={pkID} />
      </Hydrate>
    </QueryClientProvider>
  );
}

hydrateCardShowPage();
