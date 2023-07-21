import React, { memo } from 'react';
import { Banner } from '@web/components/Banner';
import { getString } from '@web/contexts/localization';
import { LPBannerProps } from './types';

function LPBannerComponent(props: LPBannerProps) {
    const checkOutDropText = getString(props.pagePrefix + '_banner_check_out_this_drop');
    const linkText = getString(props.pagePrefix + '_banner_link');
    return (
      <Banner>
        <p>
          {checkOutDropText}{' '}
          <a href="/cards/search?q=set.name:sv1" target="_self">
            {linkText}
          </a>
        </p>
      </Banner>
    );
  }

export const LPBanner = memo(LPBannerComponent);
