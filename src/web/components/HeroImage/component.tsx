import React, { memo } from 'react';
import { HeroImage as StyledHeroImage, HeroImageContainer } from './views';
import { HeroImageComponentProps } from './types';


function HeroImageComponent(props: HeroImageComponentProps) {
  return (
    <HeroImageContainer className={props.className} id={props.id}>
      <StyledHeroImage alt={props.alt} src={props.src} />
    </HeroImageContainer>
  );
}

export const HeroImage = memo(HeroImageComponent);
