import React from 'react';
import { Card } from '@nickgdev/larvitar-types';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/card-show';

type CardShowPageProps = {
  card: Card;
};
export function CardShowPage(props: CardShowPageProps) {
  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={props.card} />
    </div>
  );
}
