import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { CardShowPage } from '../pages';

function hydrateCardShowPage() {
  const componentStateEl: HTMLDivElement | null = document.querySelector(
    '#component-state-mount'
  );
  if (!componentStateEl) {
    /** handle error */
    return;
  }

  const innerText = componentStateEl.innerText;

  const cardState = JSON.parse(innerText);

  hydrateRoot(
    document.getElementById('production-root')!,
    <CardShowPage card={cardState.props.card} />
  );

  componentStateEl.remove();
}

hydrateCardShowPage();
