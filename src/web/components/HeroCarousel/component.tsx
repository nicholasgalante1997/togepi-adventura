import React from 'react';
import { HeroImage, HeroImageContainer, HeroSlideshowContainer, Title, TitleContainer, TitleContainerBlur } from './views';

export function HeroImageCarousel() {
  return (
    <HeroSlideshowContainer>
      <HeroImageContainer>
        <HeroImage src="/jungle.jpg" />
      </HeroImageContainer>
      <TitleContainerBlur>
        <TitleContainer>
          <Title>Pokemon TCG Reaches New Heights</Title>
        </TitleContainer>
      </TitleContainerBlur>
    </HeroSlideshowContainer>
  );
}
