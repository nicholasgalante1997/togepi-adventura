import styled from 'styled-components';

export const HeroImageContainer = styled.div`
  position: relative;
  height: 500px;
  margin: 0px;
  width: 100%;
  min-width: 100vw;
`;

export const HeroImage = styled.img`
  height: 500px;
  width: 100%;
  min-width: 100vw;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16 / 9;
`;

export const TitleContainerBlur = styled.div`
  position: absolute;
  top: 40px;
  right: 24px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  border-radius: 6px;
`;

export const TitleContainer = styled.div`
  position: relative;
  z-index: 4;
  border-radius: 6px;
`;

export const Title = styled.h1`
  color: white;
  z-index: 4;
`;
