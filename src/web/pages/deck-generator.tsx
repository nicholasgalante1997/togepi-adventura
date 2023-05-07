import { DeckGeneratorPageComponent } from '../components';
import { FixedNav } from '../components/FixedNav';
import { Footer } from '../components/Footer';
import { LocalizedContextProvider } from '../contexts';
import React from 'react';

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
