import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { CardSearchPage } from '../pages';

function hydrateCardSearchPage() {
  hydrateRoot(document.getElementById('production-root')!, <CardSearchPage />);
}

hydrateCardSearchPage();
