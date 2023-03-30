import ColorScale from 'color-scales';
import React from 'react';
import styled from 'styled-components';
import { getPokemonPaletteByPokemonName } from '../../utils';

export const LPContainer = styled.div`
  box-sizing: border-box;
  background: inherit;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  overflow: visible;
  min-height: 600px;
  max-height: 800px;
  width: 100%;
  background-color: ${getPokemonPaletteByPokemonName('totodile')
    .backgroundColor};
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
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${getPokemonPaletteByPokemonName('totodile').starkContrastOffset};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-variant: small-caps;
  color: ${getPokemonPaletteByPokemonName('totodile').primaryTextColor};
`;

export const ButtonContainer = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: visible;
`;

export const Button = styled.button`
  background-color: ${getPokemonPaletteByPokemonName('totodile')
    .starkContrastOffset};
  color: black;
  border-radius: 6px;
  border: 1px solid black;
  height: 36px;
  width: 140px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.15;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${new ColorScale(0, 100, [
      getPokemonPaletteByPokemonName('totodile').backgroundColor,
      '#000000',
    ])
      .getColor(30)
      .toHexString()};
    color: #ffffff;
    box-shadow: 2px 2px 6px rgb(0, 0, 0);
  }

  &:active {
    color: rgba(255, 255, 255, 0.7);
  }
`;
