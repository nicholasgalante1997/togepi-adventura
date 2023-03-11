import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardInfoItem,
  CardTitle,
  SetImage,
  SetImageContainer,
} from './views';

export function CardShowBanner(props: { card: Card }) {
  return (
    <BannerContainer>
      <CardImageContainer>
        <CardImage src={props.card.images.large} />
      </CardImageContainer>
      <CardInfoContainer>
        <SetImageContainer>
          <SetImage zIndex={0} src={props.card.set.images.logo} />
        </SetImageContainer>
        <CardTitle types={[...props.card.types, ...(props.card.subtypes ? props.card.subtypes : [])]}>{props.card.number}. {props.card.name}</CardTitle>
        <CardInfoItem>{props.card.hp} HP</CardInfoItem>
        <CardInfoItem>{props.card.types.map(t => <span className="info-type">{t}</span>)}</CardInfoItem>
      </CardInfoContainer>
    </BannerContainer>
  );
}
