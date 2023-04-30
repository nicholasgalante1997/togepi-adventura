import React from 'react';
import { getPokemonPaletteByPokemonName, PokemonName } from '../../utils';
import { FooterContainer, FooterLinkContainer, FooterPokemonContainer, Link, LinkSilo, PokemonImage } from './views';

const pokemonImageMap: Record<PokemonName, string> = {
  gengar: 'https://static.pokemonpets.com/images/monsters-images-800-800/94-Gengar.webp',
  growlithe: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
  porygon: 'https://static.pokemonpets.com/images/monsters-images-800-800/137-Porygon.webp',
  rayquaza: 'https://static.pokemonpets.com/images/monsters-images-800-800/384-Rayquaza.webp',
  togepi: 'https://static.pokemonpets.com/images/monsters-images-800-800/175-Togepi.webp',
  typhlosion: 'https://archives.bulbagarden.net/media/upload/thumb/1/13/0157Typhlosion.png/1200px-0157Typhlosion.png',
  totodile: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png',
};

export function Footer(props: { pokemon: PokemonName }) {
  return (
    <FooterContainer pokemon={props.pokemon}>
      <FooterPokemonContainer>
        <h5>Johto Trading Co. &copy;</h5>
        <p>
          This page was inspired by{' '}
          <span
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: getPokemonPaletteByPokemonName(props.pokemon).starkContrast,
              textTransform: 'capitalize',
              fontVariant: 'small-caps',
            }}
          >
            {props.pokemon}
          </span>
        </p>
        <PokemonImage src={pokemonImageMap[props.pokemon]} />
      </FooterPokemonContainer>
      <FooterLinkContainer>
        <LinkSilo>
          <h4>Shop</h4>
          <Link>Scarlet and Violet</Link>
        </LinkSilo>
      </FooterLinkContainer>
    </FooterContainer>
  );
}
