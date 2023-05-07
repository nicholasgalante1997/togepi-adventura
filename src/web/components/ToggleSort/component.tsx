import React from 'react';
import { ToggleContainer, ToggleSpan } from './views';

interface ArrowSvgProps {
  d: 'up' | 'down';
}

const ArrowSvg = (props: ArrowSvgProps) => {
  let className = '';
  if (props.d === 'up') {
    className += 'flip ';
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={className}>
      <path fill="#ffffff" fillOpacity={0.5} d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
    </svg>
  );
};

export function ToggleSort() {
  return (
    <ToggleContainer>
      <ToggleSpan active>
        <ArrowSvg d="up" />
      </ToggleSpan>
      <ToggleSpan>
        <ArrowSvg d="down" />
      </ToggleSpan>
    </ToggleContainer>
  );
}
