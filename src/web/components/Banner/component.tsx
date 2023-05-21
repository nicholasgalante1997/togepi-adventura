import React from 'react';

type BannerProps = {
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
    <div className="banner__container">
      {props.children}
      {props.bannerBuddy && renderBannerBuddy()}
    </div>
  );
}

/**
 * @addendum
 * > COORDINATE STYLESHEET <src/styles/components/Banner.css>
 */