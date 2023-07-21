import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HeroSectionCarousel } from './component';
import { HeroImage } from '@web/components/HeroImage';

const meta: Meta<typeof HeroSectionCarousel> = {
    title: 'components/hero-carousel',
    component: HeroSectionCarousel,
    args: {},
    decorators: [],
    parameters: {}
};

export default meta;

type HeroSectionCarouselStory = StoryObj<typeof HeroSectionCarousel>;

export const HeroSectionPlayground: HeroSectionCarouselStory = {
    render: () => <HeroSectionCarousel items={[<HeroImage className="enter-in" src="https://www.pexels.com/photo/2662116/download/" alt="grovyle in a tree in the jungle." />]} />
};