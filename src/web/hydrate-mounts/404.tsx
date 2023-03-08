import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Error404Page } from '../pages';

function hydrate404Page() {
  hydrateRoot(document.getElementById('production-root')!, <Error404Page />);
}

hydrate404Page();
