import { Color } from '@web/styles/models';
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Color.Tint100};
`;

const CardImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 32px;
`;

const CardImage = styled.img`
  height: 360px;
  width: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const SetImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 90px;
`;

const SetImage = styled.img<{ zIndex: number }>`
  height: 90px;
  width: auto;
  object-fit: cover;
  z-index: ${(props) => props.zIndex};
`;

const CardInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 32px;
`;

const CardTitle = styled.h1`
  font-family: 'Raleway', serif;
  margin-block-start: 0.25rem;
  margin-block-end: 0.4rem;
  color: ${Color.Text};
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7);
`;

const CardInfoItem = styled.p`
  margin-block-start: 0.25rem;
  margin-block-end: 0.25rem;
  color: ${Color.Text};
`;

const CardActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  box-sizing: border-box;
`;

const CardActionButton = styled.button<{ color: string; textColor: string }>`
  width: 100%;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.15;
  min-height: 36px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    transform: translateY(-4px);
    transition: transform 100ms, box-shadow 300ms;
  }
`;

const CardPriceComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  BannerContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardInfoItem,
  CardTitle,
  SetImageContainer,
  SetImage,
  CardActionButton,
  CardActionContainer,
};
