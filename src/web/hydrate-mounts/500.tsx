import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Error500Page } from '../pages';

function hydrate500Page() {
  hydrateRoot(document.getElementById('production-root')!, <Error500Page />);
}

hydrate500Page();
