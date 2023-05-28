import React from 'react';
import { StyledPlaceholder } from './views';

interface PlaceholderProps {
  height: string;
  width: string;
}

export function Placeholder(props: PlaceholderProps) {
  return <StyledPlaceholder {...props} />;
}
