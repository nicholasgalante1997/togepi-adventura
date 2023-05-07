import { CardSearchPageComponent } from '../components/CardSearchPage';
import { FixedNav } from '../components/FixedNav';
import { Footer } from '../components/Footer';
import { LocalizedContextProvider } from '../contexts';
import React from 'react';

export function CardSearchPage() {
  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <div className="page card-search-page">
          <FixedNav />
          <CardSearchPageComponent />
          <Footer pokemon="porygon" />
        </div>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
