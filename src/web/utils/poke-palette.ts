export type PokemonName = 'gengar' | 'porygon' | 'growlithe' | 'typhlosion' | 'togepi' | 'rayquaza' | 'totodile';

export function getPokemonPaletteByPokemonName(pokemon: PokemonName) {
  const pokemonColorMap: Record<PokemonName, Record<string, string>> = {
    gengar: {
      backgroundColor: '#5a4a9c',
      primaryTextColor: '#fff6ff',
      starkContrast: '#ff5a5a',
      starkContrastOffset: '#ff9494',
    },
    growlithe: {
      backgroundColor: '#c55252',
      primaryTextColor: '#fffff6',
      starkContrast: '#fff6a4',
      starkContrastOffset: '#6a6a6a',
    },
    porygon: {
      backgroundColor: '#ff6262',
      primaryTextColor: '#ffffff',
      starkContrast: '#c5395a',
      starkContrastOffset: '#8bd5ee',
    },
    typhlosion: {
      backgroundColor: '#20416a',
      primaryTextColor: '#ffffff',
      starkContrast: '#de0000',
      starkContrastOffset: '#ffee94',
    },
    togepi: {
      backgroundColor: '#ffffff',
      primaryTextColor: '#000000',
      starkContrast: '#c54141',
      starkContrastOffset: '#3162ac',
    },
    rayquaza: {
      backgroundColor: '#295241',
      primaryTextColor: '#ffffff',
      starkContrast: '#f6de00',
      starkContrastOffset: '#9c2952',
    },
    totodile: {
      backgroundColor: '#3183c5',
      primaryTextColor: '#ffffff',
      starkContrast: '#cd4120',
      starkContrastOffset: '#ffc552',
    },
  };

  return pokemonColorMap[pokemon];
}
