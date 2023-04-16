import React from 'react';
import styled from 'styled-components';

export function withBoxShadowRaiseAnimation(Component: any) {
  return styled(Component)`
    &:hover {
      box-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75),
        0px 0px 19.2px #523df1;
      transform: translateY(-6px);
      transition: transform 0.2s;
    }
  `;
}
