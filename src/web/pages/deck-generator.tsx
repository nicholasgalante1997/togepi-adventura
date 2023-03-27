import React from 'react';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/nav';
import { DeckGeneratorPageComponent } from '../components';
import { Footer } from '../components/footer';

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
