import styled from 'styled-components';
import { HeroImageComponentProps } from './types';

type StyledHeroImageProps = Partial<Pick<HeroImageComponentProps, 'height' | 'minWidth' | 'width'>>;

export const HeroImageContainer = styled.div<StyledHeroImageProps>`
  position: relative;
  height: ${props => props.height ?? '500px'};
  margin: 0px;
  width: ${props => props.width ?? '100%'};
  min-width: ${props => props.minWidth ?? '100vw'};
`;

export const HeroImage = styled.img<StyledHeroImageProps>`
  height: ${props => props.height ?? '500px'};
  width: ${props => props.width ?? '100%'};
  min-width: ${props => props.minWidth ?? '100vw'};
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16 / 9;
`;
