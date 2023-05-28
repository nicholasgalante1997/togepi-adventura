import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
`;

export const StyledPlaceholder = styled.div<{ height: string; width: string }>`
  max-width: ${(props) => props.width};
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  height: ${(props) => props.height};
  background-color: #eeeeee;
  border-radius: 6px;

  &.animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: calc(${(props) => props.width} + 400px) calc(${(props) => props.height} + 10px);
    height: ${(props) => props.height};
    position: relative;
  }
`;
