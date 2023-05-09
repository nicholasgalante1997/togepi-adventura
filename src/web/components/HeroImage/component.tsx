import React from 'react';
import { HeroImage, HeroImageContainer } from './views';

interface HeroImageComponentProps {
  src: string;
  alt: string;
  withLink?: string;
}

export function HeroImageComponent(props: HeroImageComponentProps) {
  return (
    <HeroImageContainer>
      <HeroImage alt={props.alt} src={props.src} />
    </HeroImageContainer>
  );
}
