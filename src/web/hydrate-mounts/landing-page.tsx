import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { LandingPage } from '../pages';
import React from 'react';
import { type ServerConfig } from '../../types/server-props';
import { hydrateRoot } from 'react-dom/client';

type ReactQueryExtendedWindow = typeof window & typeof globalThis & { __REACT_QUERY_STATE__: string };

function hydrateHomeMarketplace() {
  const propStateElement = document.getElementById('component-state-mount');
  const componentPropString = propStateElement?.innerText;
  let propData: any;
  if (componentPropString) {
    propData = JSON.parse(componentPropString)?.props;
  }
  if (propStateElement != null) {
    propStateElement.remove();
  }
  const dehydratedState = window && (window as ReactQueryExtendedWindow).__REACT_QUERY_STATE__;
  const client = new QueryClient();
  hydrateRoot(
    document.getElementById('production-root')!,
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <LandingPage serverConfig={propData.serverConfig as ServerConfig} />
      </Hydrate>
    </QueryClientProvider>
  );
}

hydrateHomeMarketplace();
