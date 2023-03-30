import styled from 'styled-components';
import { getPokemonPaletteByPokemonName } from '../../utils';

export const CardSearchPageContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${getPokemonPaletteByPokemonName('porygon')
    .backgroundColor};
  color: ${getPokemonPaletteByPokemonName('porygon').primaryTextColor};
`;

export const CardSearchLabel = styled.label`
  line-height: 1.5;
  font-size: 16px;
  font-weight: 700;
`;

export const CardSearchInput = styled.input`
  min-width: 600px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  background-color: white;
  text-align: left;

  &::placeholder {
    color: rgba(0, 0, 0, 5);
  }
`;

export const CardSearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${getPokemonPaletteByPokemonName('porygon').starkContrast};
  width: 220px;
`;

export const CardSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
  height: 200px;
  justify-content: space-evenly;
`;

export const CardSearchContainerInnerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 160px;
  justify-content: space-evenly;
  min-width: 1024px;
`;
