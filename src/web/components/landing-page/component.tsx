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
} from './views';
import { getAsset, getString } from '../../contexts';
import { getStaticResourceUrl } from '../../utils';

const PAGE_PREFIX = 'landingPage' as const;

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
