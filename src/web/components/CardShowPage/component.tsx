import React from 'react';
import { type Card } from '@nickgdev/larvitar-types';
import { CardShowBanner, type CardShowBannerProps } from './banner.component';

export function CardShowPageComponent(props: CardShowBannerProps) {
  return (
    <div className="show-page-content-frame">
      <CardShowBanner {...props} />
    </div>
  );
}
