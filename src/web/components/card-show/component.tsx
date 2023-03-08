import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardInfoItem,
  CardTitle,
} from './views';

export function CardShowPageComponent(props: { card: Card }) {
  console.log({ cspProps: props });
  return (
    <BannerContainer>
      <CardImageContainer>
        <CardImage src={props.card.images.large} />
      </CardImageContainer>
      <CardInfoContainer>
        <CardTitle>{props.card.name}</CardTitle>
        <CardInfoItem>{props.card.hp}</CardInfoItem>
      </CardInfoContainer>
    </BannerContainer>
  );
}
