import React from 'react';
import styled from 'styled-components';

export const LPContainer = styled.div`
  margin: 32px;
  background: inherit;
  padding: 4px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
`;

export const LPTrainerPokemonImageContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1``;
