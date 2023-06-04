import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { AuthPage } from '../pages';

function hydrateAuthPage() {
  hydrateRoot(document.getElementById('production-root')!, <AuthPage />);
}

hydrateAuthPage();
