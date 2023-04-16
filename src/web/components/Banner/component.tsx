import React from 'react';

import { BannerContainer, BannerContainerProps } from './views';

type BannerProps = BannerContainerProps & {
  children: string;
  action: { text: string; href: string; target?: '_self' | '_blank' };
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
      <p>
        {props.children}
        <a href={props.action.href} target={props.action.target}>
          {props.action.text}
        </a>
      </p>
      {props.bannerBuddy && renderBannerBuddy()}
    </BannerContainer>
  );
}
