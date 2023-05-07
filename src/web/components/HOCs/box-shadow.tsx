import type React from 'react';
import styled from 'styled-components';

export function withBoxShadowRaiseAnimation<P extends object = {}>(Component: React.ComponentType<P>) {
  return styled(Component)<P>`
    &:hover {
      box-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
      transform: translateY(-6px);
      transition: transform 0.4s;
    }
  `;
}
