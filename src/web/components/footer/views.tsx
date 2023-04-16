import styled from 'styled-components';
import ColorScale from 'color-scales';
import { PokemonName, getPokemonPaletteByPokemonName } from '../../utils';

export const FooterContainer = styled.div<{ pokemon: PokemonName }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const FooterPokemonContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
`;

export const FooterLinkContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const LinkSilo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 14px;
  transition: font-size 400ms;
  &:hover {
    font-size: 16px;
    text-decoration: underline;
  }
`;

export const PokemonImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: cover;
`;
