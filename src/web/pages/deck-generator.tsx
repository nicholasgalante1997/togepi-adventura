import React from 'react';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/FixedNav';
import { DeckGeneratorPageComponent } from '../components';
import { Footer } from '../components/Footer';

export function DeckBuilderPage() {
  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <div className="page deck-builder-page">
          <FixedNav />
          <DeckGeneratorPageComponent />
        </div>
        <Footer pokemon="gengar" />
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
