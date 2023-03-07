import React from 'react';
import { LandingPageComponent } from '../components/landing-page';
import { LocalizedContextProvider } from '../contexts';
import { FixedNav } from '../components/nav';
import { CardService } from '../../services';

const cardService = new CardService();

export function LandingPage() {
  React.useEffect(() => {
    (async () => {
      const res = await cardService.getCards();
      console.log(res);
    })();
  }, [])
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
