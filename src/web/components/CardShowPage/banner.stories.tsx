import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardShowBanner } from './banner.component';
import { Card } from '@nickgdev/larvitar-types';

export default {
  title: 'components/card page/card banner',
  component: CardShowBanner,
} as ComponentMeta<typeof CardShowBanner>;

const T: ComponentStory<typeof CardShowBanner> = (args: { card: Card }) => <CardShowBanner {...args} />;

export const Default = T.bind({});
Default.args = {
  card: {
    id: 'xy1-1',
    name: 'Venusaur-EX',
    supertype: 'Pokémon',
    subtypes: ['Basic', 'EX'],
    hp: '180',
    types: ['Grass'],
    evolvesTo: ['M Venusaur-EX'],
    rules: ['Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.'],
    attacks: [
      {
        name: 'Poison Powder',
        cost: ['Grass', 'Colorless', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '60',
        text: "Your opponent's Active Pokémon is now Poisoned.",
      },
      {
        name: 'Jungle Hammer',
        cost: ['Grass', 'Grass', 'Colorless', 'Colorless'],
        convertedEnergyCost: 4,
        damage: '90',
        text: 'Heal 30 damage from this Pokémon.',
      },
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: 'x2',
      },
    ],
    retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
    set: {
      id: 'xy1',
      name: 'XY',
      series: 'XY',
      printedTotal: 146,
      total: 146,
      ptcgoCode: 'XY',
      releaseDate: '2014/02/05',
      updatedAt: '2018/03/04 10:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/xy1/symbol.png',
        logo: 'https://images.pokemontcg.io/xy1/logo.png',
      },
    },
    number: '1',
    artist: 'Eske Yoshinob',
    rarity: 'Rare Holo EX',
    nationalPokedexNumbers: [3],
    images: {
      small: 'https://images.pokemontcg.io/xy1/1.png',
      large: 'https://images.pokemontcg.io/xy1/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/xy1-1',
      updatedAt: '2021/07/09',
      prices: [],
    },
  },
};
