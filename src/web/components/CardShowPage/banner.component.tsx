import { type Card } from '@nickgdev/larvitar-types';
import React from 'react';
import {
  BannerContainer,
  CardActionButton,
  CardActionContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardTitle,
  SetImage,
  SetImageContainer,
} from './views';

export interface CardShowBannerProps {
  images?: {
    large?: null | string;
    small?: null | string;
  } | null;
  name?: null | string;
  number?: null | string;
  set?: {
    images?: {
      logo?: string | null;
    } | null;
  } | null;
}

export function CardShowBanner({ images, name, number, set }: CardShowBannerProps) {
  return (
    <BannerContainer>
      <CardImageContainer>
        <CardImage src={images?.large ?? ''} />
      </CardImageContainer>
      <CardInfoContainer>
        <SetImageContainer>
          <SetImage zIndex={0} src={set?.images?.logo ?? ''} />
        </SetImageContainer>
        <CardTitle>
          {number}. {name}
        </CardTitle>
        <CardActionContainer>
          <CardActionButton color="black" textColor="white">
            I own this card
          </CardActionButton>
          <CardActionButton color="blue" textColor="green">
            I want to buy this card
          </CardActionButton>
          <CardActionButton color="yellow" textColor="blue">
            I want to submit this card for grading
          </CardActionButton>
        </CardActionContainer>
      </CardInfoContainer>
    </BannerContainer>
  );
}
