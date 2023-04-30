import React from 'react';

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
      width={props.width ?? '36px'}
      height={props.height ?? '36px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 18L20 18" stroke="#ffffff" stroke-width="1.15" stroke-linecap="round" />
      <path d="M4 12L20 12" stroke="#ffffff" stroke-width="1.15" stroke-linecap="round" />
      <path d="M4 6L20 6" stroke="#ffffff" stroke-width="1.15" stroke-linecap="round" />
    </svg>
  );
}
