import React from 'react';
import styled from 'styled-components';
import { getShadowColorOffType } from '../../utils';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
`;

const CardImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardImage = styled.img`
  height: 440px;
  width: auto;
  margin-left: 64px;
  object-fit: cover;
`;

const SetImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 140px;
`

const SetImage = styled.img<{ zIndex: number }>`
  height: 140px;
  width: auto;
  object-fit: cover;
  z-index: ${props => props.zIndex};
`;

const CardInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 32px;
`;

const CardTitle = styled.h1<{ types: string[] }>`
  margin-block-start: 0.25rem;
  margin-block-end: 0.4rem;
  text-shadow: 2px 2px ${props => getShadowColorOffType(props.types)};
`;

const CardInfoItem = styled.p`
  margin-block-start: 0.25rem;
  margin-block-end: 0.25rem;
`;

export {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardInfoItem,
  CardTitle,
  SetImageContainer,
  SetImage
};
