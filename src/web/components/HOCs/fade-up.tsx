import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export function withFadeUpAnimation(Component: any) {
  return styled(Component)`
    animation: 2s ease-out 0s 1 ${fadeUp};
  `;
}
