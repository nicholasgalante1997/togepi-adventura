import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import { CardShowBanner } from './banner.component';

export function CardShowPageComponent(props: { card: Card }) {
  return (
    <>
      <CardShowBanner {...props} />
    </>
  );
}
