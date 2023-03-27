import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { DeckBuilderPage } from '../pages';

function hydrateDeckBuilderPage() {
  hydrateRoot(document.getElementById('production-root')!, <DeckBuilderPage />);
}

hydrateDeckBuilderPage();
