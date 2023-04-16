import React from 'react';
import {
  Button,
  ButtonContainer,
  CallToActionContainer,
  LPContainer,
  LPTrainerPokemonImage,
  LPTrainerPokemonImageContainer,
  Subtitle,
  Title,
  WidgetTwoContainer,
  CardContainer,
  TextContainer,
} from './views';
import { Banner } from '../Banner';
import { withFadeUpAnimation } from '../HOCs';
import { getAsset, getString } from '../../contexts';

const PAGE_PREFIX = 'landingPage' as const;

function Heading({ children, ...rest }: any) {
  return <h2 {...rest}>{children}</h2>;
}

const FadeUpHeading = withFadeUpAnimation(Heading);

export function LandingPageComponent() {
  const titleOrUndefined = getString(PAGE_PREFIX + '_title');
  const subtitleOrUndefined = getString(PAGE_PREFIX + '_subtitle');
  const trainerImgAssetOrUndefined = getAsset(
    PAGE_PREFIX + '_trainerWithPikachu'
  );

  React.useEffect(() => {
    if (
      typeof titleOrUndefined === 'undefined' ||
      typeof trainerImgAssetOrUndefined === 'undefined'
    ) {
      window && window.location.replace('');
    }
  }, [titleOrUndefined, trainerImgAssetOrUndefined]);

  function renderWidgetOne() {
    return (
      <LPContainer>
        <LPTrainerPokemonImageContainer>
          <LPTrainerPokemonImage
            src={'/' + trainerImgAssetOrUndefined}
            alt="Pokemon Trainer w Pikachu"
          />
        </LPTrainerPokemonImageContainer>
        <CallToActionContainer>
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
        </CallToActionContainer>
      </LPContainer>
    );
  }

  function renderBanner() {
    return (
      <Banner
        bannerBuddy="eevee"
        backgroundColor="#3a0960"
        textColor="white"
        hoverColor="red"
        withAction
        action={{ href: '/sp/scarlet-violet', text: 'Learn More' }}
      >
        Check out the new Scarlet and Violet Card Drop!
      </Banner>
    );
  }

  function renderWidgetTwo() {
    return (
      <WidgetTwoContainer>
        <TextContainer>
          <FadeUpHeading>
            Check Out the Hottest Singles in Scarlet and Violet
          </FadeUpHeading>
        </TextContainer>
        <CardContainer></CardContainer>
      </WidgetTwoContainer>
    );
  }

  return (
    <React.Fragment>
      {renderWidgetOne()}
      {renderBanner()}
      {renderWidgetTwo()}
    </React.Fragment>
  );
}
