import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { LandingPage } from '../pages';

function hydrateHomeMarketplace() {
  hydrateRoot(document.getElementById('production-root')!, <LandingPage />);
}

hydrateHomeMarketplace();
