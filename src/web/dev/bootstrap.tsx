import React from 'react';
import styled from 'styled-components';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { LandingPage, CardSearchPage, CardShowPage, DeckBuilderPage, Error404Page, Error500Page } from '../pages';

import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import '../styles/global.css';

const mockCard = {
  id: 'swsh10-120',
  name: 'Hoothoot',
  supertype: 'Pokémon',
  subtypes: ['Basic'],
  hp: '50',
  types: ['Colorless'],
  evolvesTo: ['Noctowl'],
  abilities: [
    {
      name: 'Stand Sentry',
      text: "Basic Energy attached to your Benched Pokémon can't be discarded by an effect of your opponent's Item or Supporter cards.",
      type: 'Ability',
    },
  ],
  attacks: [
    {
      name: 'Flap',
      cost: ['Colorless', 'Colorless'],
      convertedEnergyCost: 2,
      damage: '20',
      text: '',
    },
  ],
  weaknesses: [{ type: 'Lightning', value: 'x2' }],
  resistances: [{ type: 'Fighting', value: '-30' }],
  retreatCost: ['Colorless'],
  convertedRetreatCost: 1,
  set: {
    id: 'swsh10',
    name: 'Astral Radiance',
    series: 'Sword & Shield',
    printedTotal: 189,
    total: 216,
    legalities: { unlimited: 'Legal', standard: 'Legal', expanded: 'Legal' },
    ptcgoCode: 'ASR',
    releaseDate: '2022/05/27',
    updatedAt: '2022/05/27 09:45:00',
    images: {
      symbol: 'https://images.pokemontcg.io/swsh10/symbol.png',
      logo: 'https://images.pokemontcg.io/swsh10/logo.png',
    },
  },
  number: '120',
  artist: 'Pani Kobayashi',
  rarity: 'Common',
  flavorText: 'It always stands on one foot. It changes feet so fast, the movement can rarely be seen.',
  nationalPokedexNumbers: [163],
  legalities: { unlimited: 'Legal', standard: 'Legal', expanded: 'Legal' },
  regulationMark: 'F',
  images: {
    small: 'https://images.pokemontcg.io/swsh10/120.png',
    large: 'https://images.pokemontcg.io/swsh10/120_hires.png',
  },
  tcgplayer: {
    url: 'https://prices.pokemontcg.io/tcgplayer/swsh10-120',
    updatedAt: '2023/03/29',
    prices: {
      normal: {
        low: 0.01,
        mid: 0.05,
        high: 40.0,
        market: 0.02,
        directLow: 0.02,
      },
      reverseHolofoil: {
        low: 0.05,
        mid: 0.18,
        high: 1.2,
        market: 0.15,
        directLow: 0.11,
      },
    },
  },
  cardmarket: {
    url: 'https://prices.pokemontcg.io/cardmarket/swsh10-120',
    updatedAt: '2023/03/29',
    prices: {
      averageSellPrice: 0.03,
      lowPrice: 0.01,
      trendPrice: 0.03,
      germanProLow: 0.0,
      suggestedPrice: 0.0,
      reverseHoloSell: 0.12,
      reverseHoloLow: 0.02,
      reverseHoloTrend: 0.13,
      lowPriceExPlus: 0.01,
      avg1: 0.02,
      avg7: 0.03,
      avg30: 0.03,
      reverseHoloAvg1: 0.15,
      reverseHoloAvg7: 0.1,
      reverseHoloAvg30: 0.14,
    },
  },
};

const routes = [
  {
    path: '/',
    component: <LandingPage />,
  },
  {
    path: '/cards/search',
    component: <CardSearchPage />,
  },
  {
    path: '/card/swsh10-120',
    component: <CardShowPage card={mockCard} />,
  },
  {
    path: '/deck/builder',
    component: <DeckBuilderPage />,
  },
  {
    path: '/404',
    component: <Error404Page />,
  },
  {
    path: '/500',
    component: <Error500Page />,
  },
];

const ReactRouterNavigationBar = styled.div`
  height: 40px;

  padding: 16px;

  background-color: white;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-top: 100px;
`;

const ReactRouterCurrentRoute = styled.p`
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.15;
  margin-right: 8px;
`;

const ReactRouterPathInput = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 2px;
`;

const ReactRouterPushButton = styled.button`
  border-radius: 4px;
  border: 1px solid black;
  background-color: chartreuse;
  color: black;
  margin-left: 8px;
`;

function App() {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const [pathState, setPathState] = React.useState(pathname);

  return (
    <React.Fragment>
      <Switch>
        {routes.map((r) => (
          <Route exact path={r.path}>
            {r.component}
          </Route>
        ))}
      </Switch>
      <ReactRouterNavigationBar>
        <ReactRouterCurrentRoute>
          React Router DOM /// Current Path is <span style={{ color: 'red' }}>{pathname}</span>
        </ReactRouterCurrentRoute>
        <ReactRouterPathInput value={pathState} onChange={(e) => setPathState(e.target.value)} />
        <ReactRouterPushButton onClick={() => push(pathState)}>Go</ReactRouterPushButton>
      </ReactRouterNavigationBar>
    </React.Fragment>
  );
}

function mountApp() {
  const root = createRoot(document.getElementById('devroot')!);
  const queryClient = new QueryClient();
  root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

mountApp();
