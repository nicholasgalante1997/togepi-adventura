import styled from 'styled-components';

export const HeroSlideshowContainer = styled.div`
  height: 500px;
  width: 100%;
  min-width: 100vw;
  position: relative;
  margin: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const FixedCarouselMicroDisplay = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px solid red;
  padding: 10px;
  bottom: 0;
  right: 0;
`;
