import React from 'react';

export type ServiceTab = 'grade' | 'trade' | 'purchase' | 'sell' | 'cards';

export const serviceTabs: readonly ServiceTab[] = [
  'grade',
  'purchase',
  'trade',
  'sell',
  'cards',
] as const;

export type HamburgerMenuProps = {
  className?: string;
  id?: string;
  height?: string;
  width?: string;
};

export function HamburgerMenuIcon(props: HamburgerMenuProps) {
  return (
    <svg
      {...props}
      width={props.width ?? '24px'}
      height={props.height ?? '24px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke="#fff"
        stroke-width="1.15"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#fff"
        stroke-width="1.15"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#fff"
        stroke-width="1.15"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function FixedNav() {
  return (
    <div className="fixed-nav">
      <HamburgerMenuIcon />
    </div>
  );
}
