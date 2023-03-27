import React from 'react';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/nav';
import { Footer } from '../components/footer';
import { CardSearchPageComponent } from '../components/card-search';

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
