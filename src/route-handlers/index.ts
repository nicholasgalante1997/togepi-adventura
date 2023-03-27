import { landingPageRouteHandler } from './landing-page';
import { pokemonCardShowHandler } from './card-show';
import { deckBuilderPageHandler } from './deck-builder';

export const ROUTING_HANDLER_MAP = {
  lp: landingPageRouteHandler,
  card: pokemonCardShowHandler,
  deckBuilder: deckBuilderPageHandler,
} as const;
