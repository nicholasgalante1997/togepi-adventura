import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ItemCard } from './component';
import { withApolloWrapper } from '@web/utils/storybook';

const meta: Meta = {
  component: ItemCard,
  title: 'components/ItemCard',
  decorators: [withApolloWrapper],
};

export default meta;

type StoryType = StoryObj<typeof ItemCard>;

export const Basic: StoryType = {
  render: () => <ItemCard cardId="sv1-156" />,
};
