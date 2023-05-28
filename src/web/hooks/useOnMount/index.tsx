import React from 'react';
import { l } from '@server/utils/log';

export function useTrackComponentMount(componentId: string) {
  React.useEffect(() => {
    l(`${componentId} mounted to the DOM and hydrated.`);
  }, []);
}
