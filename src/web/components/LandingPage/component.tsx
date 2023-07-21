import React from 'react';
import { LPHeroWidget, LPBanner, LPHighlightCardsWidget } from './widgets';
import { withLazyComponent } from '../Loadable';
import { type Card } from '@nickgdev/larvitar-types';
import { HeroImage } from '../HeroImage/views';
import { HeroCarouselProps } from '../HeroCarousel/component';

const PAGE_PREFIX = 'landingPage' as const;

/** Lazy load expensive component render/hydration */
const LazyHeroCarousel = withLazyComponent<HeroCarouselProps>(
  React.lazy(() => import('@web/components/HeroCarousel').then((mod) => ({ default: mod.HeroSectionCarousel }))),
  <p>loading...</p>,
  <b>error</b>
);

export interface LandingPageProps {
  layout: {
    banner: {
      cards: Array<Pick<Card, 'images' | 'name' | 'id' | 'set'>>;
    };
  };
}

export function LandingPageComponent(props: LandingPageProps) {
  const items = React.useMemo(() => [<HeroImage className="enter-in" src="/jungle.webp" alt="grovyle in a tree in the jungle." />], []);
  return (
    <React.Fragment>
      <LPHeroWidget pagePrefix={PAGE_PREFIX} />
      <LPBanner pagePrefix={PAGE_PREFIX} />
      <LPHighlightCardsWidget pagePrefix={PAGE_PREFIX} {...props} />
      <LazyHeroCarousel items={items} />
    </React.Fragment>
  );
}
