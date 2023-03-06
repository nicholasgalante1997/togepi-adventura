import React from 'react';
import styled from 'styled-components';

export const LPContainer = styled.div`
  box-sizing: border-box;
  background: inherit;
  padding: 4px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
  height: 90vh;
`;

export const LPTrainerPokemonImageContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LPTrainerPokemonImage = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
`;

export const CallToActionContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1``;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-variant: small-caps;
`;
