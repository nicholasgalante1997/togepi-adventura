import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/card-show/component';

type CardShowPageProps = {
  card: Card;
};
export function CardShowPage(props: CardShowPageProps) {
  console.log(props);
  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={props.card} />
    </div>
  );
}
