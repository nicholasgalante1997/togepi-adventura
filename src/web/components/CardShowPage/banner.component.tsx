import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardTitle,
  SetImage,
  SetImageContainer,
  CardActionButton,
  CardActionContainer,
} from './views';

export function CardShowBanner(props: { card: Card }) {
  console.log('**************');
  console.log(props);
  console.log('**************');
  return (
    <BannerContainer>
      <CardImageContainer>
        <CardImage src={props.card.images.large} />
      </CardImageContainer>
      <CardInfoContainer>
        <SetImageContainer>
          <SetImage zIndex={0} src={props.card.set.images.logo} />
        </SetImageContainer>
        <CardTitle
          types={[
            ...props.card.types,
            ...(props.card.subtypes ? props.card.subtypes : []),
          ]}
        >
          {props.card.number}. {props.card.name}
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
