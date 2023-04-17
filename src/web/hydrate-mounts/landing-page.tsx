import React from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { hydrateRoot } from 'react-dom/client';
import { LandingPage } from '../pages';

type ReactQueryExtendedWindow = typeof window &
  typeof globalThis & { __REACT_QUERY_STATE__: string };

function hydrateHomeMarketplace() {
  const dehydratedState =
    window && (window as ReactQueryExtendedWindow).__REACT_QUERY_STATE__;
  const client = new QueryClient();
  hydrateRoot(
    document.getElementById('production-root')!,
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <LandingPage />
      </Hydrate>
    </QueryClientProvider>
  );
}

hydrateHomeMarketplace();
