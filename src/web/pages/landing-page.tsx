import React from 'react';
import { LandingPageComponent } from '../components/landing-page';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/nav';
import { Footer } from '../components/footer';

export function LandingPage() {
  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <div className="page landing-page">
          <FixedNav />
          <LandingPageComponent />
          <Footer pokemon="totodile" />
        </div>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
