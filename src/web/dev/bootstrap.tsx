import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  LandingPage,
  CardSearchPage,
  CardShowPage,
  DeckBuilderPage,
  Error404Page,
  Error500Page,
} from '../pages';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
  flavorText:
    'It always stands on one foot. It changes feet so fast, the movement can rarely be seen.',
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
    path: '/card/:cardId',
    component: <CardShowPage card={mockCard} />,
  },
  {
    path: '/deck/builder',
    component: (<DeckBuilderPage />)
  },
  {
    path: '/404',
    component: (<Error404Page />)
  },
  {
    path: '/500',
    component: (<Error500Page />)
  }
];

function mountApp(){
    const root = createRoot(document.getElementById('devroot')!);
    root.render(
      <BrowserRouter>
        <Switch>
          {routes.map(r => <Route path={r.path}>
            {r.component}
          </Route>)}
        </Switch>
      </BrowserRouter>
    );
};

mountApp();