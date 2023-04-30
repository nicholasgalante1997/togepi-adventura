import React from 'react';
import { CardContainer, CardImage, CardImageContainer, CardInfoContainer, CardTitle } from './views';
import { Card } from '@nickgdev/larvitar-types';

type CardInfoProps = Card;

export function CardInfoCard(props: CardInfoProps) {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={props.images.large} alt={props.name} />
      </CardImageContainer>
      <CardInfoContainer>
        <CardTitle>{props.name}</CardTitle>
      </CardInfoContainer>
    </CardContainer>
  );
}
