import React, { memo } from 'react';
import { LPContainer, LPTrainerPokemonImageContainer, LPTrainerPokemonImage, Title, Subtitle, ButtonContainer, Button, FadeUpActionBlock } from '../../views';
import { getString, getAsset } from '@web/contexts/localization';
import { LPHeroWidgetProps } from './types';

function LPHeroWidgetComponent(props: LPHeroWidgetProps) {
    const titleOrUndefined = getString(props.pagePrefix + '_title');
    const subtitleOrUndefined = getString(props.pagePrefix + '_subtitle');
    const trainerImgAssetOrUndefined = getAsset(props.pagePrefix + '_trainerWithPikachu');
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

export const LPHeroWidget = memo(LPHeroWidgetComponent);
