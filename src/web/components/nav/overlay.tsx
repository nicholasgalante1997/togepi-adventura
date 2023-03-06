import React from 'react';
import { OverlayShell } from './views';
import { OptionsSection } from './overlay.option';

export function NavOverlay(props: { visible: boolean }) {
  return (
    <OverlayShell>
      <OptionsSection />
      <hr style={{ width: '100%' }} />
      <UserSection />
    </OverlayShell>
  );
}
