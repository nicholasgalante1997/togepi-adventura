import React from 'react';
import { LandingPageComponent } from '../components/LandingPage';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/FixedNav';
import { Footer } from '../components/Footer';

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
