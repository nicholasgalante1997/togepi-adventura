import React from 'react';
import { OverlayShell } from './views';
import { OptionsSection } from './overlay-option';

export function NavOverlay(props: { visible: boolean }) {
  if (!props.visible) {
    return null;
  }

  return (
    <OverlayShell>
      <OptionsSection />
      <hr style={{ width: '100%' }} />
    </OverlayShell>
  );
}
