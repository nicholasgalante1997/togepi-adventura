import React from 'react';
import {
  CallToActionContainer,
  LPContainer,
  LPTrainerPokemonImage,
  LPTrainerPokemonImageContainer,
  Title,
} from './views';
import { getAsset, getString } from '../../contexts';
import { getStaticResourceUrl } from '../../utils';

const PAGE_PREFIX = 'landingPage' as const;
const URL_PREFIX = getStaticResourceUrl();

export function LandingPageComponent() {
  const titleOrUndefined = getString(PAGE_PREFIX + '_title');
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
          src={URL_PREFIX + trainerImgAssetOrUndefined}
          alt="Pokemon Trainer w Pikachu"
        />
      </LPTrainerPokemonImageContainer>
      <CallToActionContainer>
        <Title>The Pokemon Trading Card Company</Title>
      </CallToActionContainer>
    </LPContainer>
  );
}
