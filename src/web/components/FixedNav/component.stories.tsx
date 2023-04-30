// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { FixedNav } from './component';

const meta: Meta<typeof FixedNav> = {
  title: 'components/global/SiteHeader',
  component: FixedNav,
};

export default meta;

type Story = StoryObj<typeof FixedNav>;

export const Primary: Story = {
  render: () => <FixedNav />,
};
