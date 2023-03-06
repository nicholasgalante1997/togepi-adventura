import React from 'react';
import { LandingPageComponent } from '../components/landing-page';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/nav';

export function LandingPage() {
  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <div className="page">
          <FixedNav />
          <LandingPageComponent />
        </div>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
