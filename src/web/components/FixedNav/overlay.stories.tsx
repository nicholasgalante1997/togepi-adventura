import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { NavOverlay } from './overlay';

export default {
  title: 'components/nav/overlay',
  component: NavOverlay,
} as ComponentMeta<typeof NavOverlay>;

const T: ComponentStory<typeof NavOverlay> = (args: { visible: boolean }) => <NavOverlay {...args} />;

export const Default = T.bind({});
Default.args = { visible: true };
