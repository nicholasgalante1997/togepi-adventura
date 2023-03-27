import styled from 'styled-components';
import ColorScale from 'color-scales';
import { PokemonName, getPokemonPaletteByPokemonName } from '../../utils';

export const FooterContainer = styled.div<{ pokemon: PokemonName }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  border-top: 1px solid black;
  background-color: ${(props) =>
    new ColorScale(0, 100, [
      getPokemonPaletteByPokemonName(props.pokemon).backgroundColor,
      '#000000',
    ])
      .getColor(30)
      .toHexString()};
  color: ${(props) =>
    getPokemonPaletteByPokemonName(props.pokemon).primaryTextColor};
`;

export const PokemonImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: cover;
`;
