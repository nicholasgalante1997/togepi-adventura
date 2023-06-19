import React from 'react';
import {
  Button,
  ButtonContainer,
  CallToActionContainer,
  CardContainer,
  CardImage,
  LPContainer,
  LPTrainerPokemonImage,
  LPTrainerPokemonImageContainer,
  LinkWrapper,
  Subtitle,
  TextContainer,
  Title,
  WidgetTwoContainer,
} from './views';
import { Banner } from '../Banner';
import { withBoxShadowRaiseAnimation, withFadeUpAnimation } from '../HOCs';
import { withLazyComponent } from '../Loadable';
import { getAsset, getString } from '../../contexts';
import { type Card } from '@nickgdev/larvitar-types';
import { HeroImage } from '../HeroImage/views';
import { HeroCarouselProps } from '../HeroCarousel/component';

const PAGE_PREFIX = 'landingPage' as const;

function Heading({ children, ...rest }: any) {
  return <h2 {...rest}>{children}</h2>;
}

const FadeUpHeading = withFadeUpAnimation(Heading);
const FadeUpActionBlock = withFadeUpAnimation(CallToActionContainer);
const ImageWithBoxShadow = withBoxShadowRaiseAnimation(CardImage);

function ImageLink(props: { href: string; imageSrc: string; imageAlt: string; className?: string }) {
  return (
    <LinkWrapper href={props.href} target="_self" tabIndex={1} className={props.className}>
      <ImageWithBoxShadow src={props.imageSrc} alt={props.imageAlt} />
    </LinkWrapper>
  );
}

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
  const titleOrUndefined = getString(PAGE_PREFIX + '_title');
  const subtitleOrUndefined = getString(PAGE_PREFIX + '_subtitle');
  const trainerImgAssetOrUndefined = getAsset(PAGE_PREFIX + '_trainerWithPikachu');

  React.useEffect(() => {
    if (typeof titleOrUndefined === 'undefined' || typeof trainerImgAssetOrUndefined === 'undefined') {
      window && window.location.replace('');
    }
  }, [titleOrUndefined, trainerImgAssetOrUndefined]);

  function renderWidgetOne() {
    return (
      <LPContainer className="enter-in">
        <LPTrainerPokemonImageContainer>
          <LPTrainerPokemonImage src={'/' + trainerImgAssetOrUndefined} alt="Pokemon Trainer w Pikachu" />
        </LPTrainerPokemonImageContainer>
        <FadeUpActionBlock>
          <Title>{titleOrUndefined}</Title>
          <Subtitle>{subtitleOrUndefined}</Subtitle>
          <ButtonContainer>
            <Button>
              Deck Builder{' '}
              <span
                style={{
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '10px',
                }}
              >
                Powered By ChatGPT
              </span>
            </Button>
            <Button>Shop Cards</Button>
            <Button>Claim Cards / Tokens</Button>
          </ButtonContainer>
        </FadeUpActionBlock>
      </LPContainer>
    );
  }

  function renderBanner() {
    return (
      <Banner>
        <p>
          Check out the new{' '}
          <a href="/cards/search?q=set.name:sv1" target="_self">
            Scarlet and Violet Card Drop!
          </a>
        </p>
      </Banner>
    );
  }

  function renderWidgetTwo() {
    return (
      <WidgetTwoContainer className="enter-in">
        <TextContainer>
          <FadeUpHeading style={{ color: 'white' }}>Check Out the Hottest Singles in Scarlet and Violet</FadeUpHeading>
        </TextContainer>
        <CardContainer>
          {props.layout.banner.cards.map((cardProps) => (
            <ImageLink imageSrc={cardProps.images.large} imageAlt={cardProps.name} href={`/card/${cardProps.id}`} />
          ))}
        </CardContainer>
      </WidgetTwoContainer>
    );
  }

  const items = [<HeroImage className="enter-in" src="/jungle.webp" alt="grovyle in a tree in the jungle." />];

  return (
    <React.Fragment>
      {renderWidgetOne()}
      {renderBanner()}
      {renderWidgetTwo()}
      <LazyHeroCarousel items={items} />
    </React.Fragment>
  );
}
