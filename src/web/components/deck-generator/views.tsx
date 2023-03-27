import styled from 'styled-components';
import React from 'react';
import { getPokemonPaletteByPokemonName } from '../../utils';
import ColorScale from 'color-scales';

const DeckGenPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 800px;
  margin: 0px;
  padding: 32px;
  background-color: ${getPokemonPaletteByPokemonName('gengar').backgroundColor};
  color: ${getPokemonPaletteByPokemonName('gengar').primaryTextColor};
  text-align: center;
`;

const ChatGPTBannerDisclaimer = styled.div`
    background-color: ${new ColorScale(0, 100, [getPokemonPaletteByPokemonName('gengar').backgroundColor, '#000000']).getColor(30).toHexString()};
    border-radius: 6px;
    border: 1px solid black;
    padding: 8px;
    min-height: 80px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff; 
    & > p {
        color: rgba(255,255,255,0.5);
        font-size: 14px;
        line-height: 1.15;
    }
`

const DeckGenInputContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
`;

const DeckGenInput = styled.input`
  height: 40px;
  min-width: 220px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.8);

  &::placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-style: italic;
    font-weight: 300;
    line-height: 1.15;
  }

  &:hover {
    border-radius: 4px;
  }

  &:active {
    border: 1px solid
      ${getPokemonPaletteByPokemonName('gengar').starkContrastOffset};
    border-radius: 4px;
  }
`;

const DeckGenButton = styled.button`
  border-radius: 4px;
  border: 1px solid ${getPokemonPaletteByPokemonName('gengar').primaryTextColor};
  background-color: ${getPokemonPaletteByPokemonName('gengar').starkContrast};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 4px;
  text-align: center;
  min-width: 220px;
  height: 36px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${getPokemonPaletteByPokemonName('gengar').starkContrast};
    background-color: ${getPokemonPaletteByPokemonName('gengar')
      .backgroundColor};
    color: white;
    box-shadow: 1px 1px 4px rgb(0, 0, 0);
  }
`;

export {
  DeckGenPageContainer,
  DeckGenInput,
  DeckGenInputContainer,
  DeckGenButton,
  ChatGPTBannerDisclaimer
};
