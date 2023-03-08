import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { CardShowPage } from '../pages';

function hydrateCardShowPage() {
  const dataStateComponent: HTMLDivElement | null = document.querySelector('#hydrate-el');
  if (!dataStateComponent) {
    window && window.location.assign('/500');
    return;
  }
  const propsAsString = dataStateComponent?.dataset?.componentstate;
  if (!propsAsString) {
    window && window.location.assign('/500');
    return;
  }

  document.removeChild(dataStateComponent);
  const props = JSON.parse(propsAsString!)
  hydrateRoot(document.getElementById('production-root')!, <CardShowPage {...props} />);
}

hydrateCardShowPage();
