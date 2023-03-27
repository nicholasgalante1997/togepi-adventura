import { Card } from '@nickgdev/larvitar-types';
import React from 'react';
import { CardShowBanner } from './banner.component';

export function CardShowPageComponent(props: { card: Card }) {
  return (
    <div className="show-page-content-frame">
      <CardShowBanner {...props} />
    </div>
  );
}
