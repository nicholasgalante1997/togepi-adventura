import React from 'react';
import { Card } from '@nickgdev/larvitar-types';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/CardShowPage';
import { Footer } from '../components/Footer';

type CardShowPageProps = {
  card: Card;
};
export function CardShowPage(props: CardShowPageProps) {
  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={props.card} />
      <Footer pokemon="togepi" />
    </div>
  );
}
