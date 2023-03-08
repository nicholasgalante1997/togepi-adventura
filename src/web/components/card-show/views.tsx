import React from 'react';
import styled from 'styled-components';

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
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardImage = styled.img`
  height: 320px;
  width: auto;
  margin-left: 64px;
  object-fit: cover;
`;

const CardInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 32px;
`;

const CardTitle = styled.h1``;
const CardInfoItem = styled.p``;

export {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardInfoItem,
  CardTitle,
};
