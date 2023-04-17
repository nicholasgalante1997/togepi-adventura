import React from 'react';

import { BannerContainer, BannerContainerProps } from './views';

type BannerProps = BannerContainerProps & {
  children: React.ReactNode | JSX.Element;
  bannerBuddy?: 'eevee';
};

export function Banner(props: BannerProps) {
  function renderBannerBuddy() {
    return (
      <div>
        <img src="eevee.gif" height="50px" width="50px" alt="eevee running" />
      </div>
    );
  }

  return (
    <BannerContainer
      backgroundColor={props.backgroundColor}
      hoverColor={props.hoverColor}
      textColor={props.textColor}
    >
      {props.children}
      {props.bannerBuddy && renderBannerBuddy()}
    </BannerContainer>
  );
}
