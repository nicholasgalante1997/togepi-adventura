import React from 'react';
import { HeroSlideshowContainer, FixedCarouselMicroDisplay } from './views';

export type HeroCarouselProps = { 
  /** The visible element being rendered in HeroCarousel, we recommend <HeroImage /> */
  items: JSX.Element[];
  /** The delay in ms */
  delay?: number;
};

export function HeroSectionCarousel(props: HeroCarouselProps) {
  const [imgIndex, setImgIndex] = React.useState(0);
  function incrementHeroImage() {
    setImgIndex((previousIndex) => {
      if (previousIndex === props.items.length - 1) {
        return 0;
      } else {
        const nextIndex = previousIndex + 1;
        return nextIndex;
      }
    });
  }
  React.useEffect(() => {
    const interval = setInterval(incrementHeroImage, props.delay ?? 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <HeroSlideshowContainer>
      {props.items.at(imgIndex)}
      <FixedCarouselMicroDisplay />
    </HeroSlideshowContainer>
  );
}
