import React from 'react';
import { HamburgerMenuIcon } from './hamburger-menu.icon';
import { NavOverlay } from './overlay';

export type ServiceTab = 'grade' | 'trade' | 'purchase' | 'sell' | 'cards';

export const serviceTabs: readonly ServiceTab[] = [
  'grade',
  'purchase',
  'trade',
  'sell',
  'cards',
] as const;

export function FixedNav() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="fixed-nav"
    >
      <HamburgerMenuIcon />
      <NavOverlay visible={visible} />
    </div>
  );
}
