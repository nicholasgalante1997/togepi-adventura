import React from 'react';
import {
  LandingPageComponent,
  LandingPageProps as LPComponentProps,
} from '../components/LandingPage';
import { LocalizedContextProvider } from '../contexts';
import { useQueryLandingPageProps } from '../react-query-hooks';
import { FixedNav } from '../components/FixedNav';
import { Footer } from '../components/Footer';

export function LandingPage() {
  const { data } = useQueryLandingPageProps();

  console.log(data);

  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <div className="page landing-page">
          <FixedNav />
          <LandingPageComponent {...data!} />
          <Footer pokemon="totodile" />
        </div>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
