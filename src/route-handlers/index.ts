import { landingPageRouteHandler } from './landing-page';
import { pokemonCardShowHandler } from './card-show';
import { deckBuilderPageHandler } from './deck-builder';
import { cardSearchPageHandler } from './card-search';

export const ROUTING_HANDLER_MAP = {
  landingPage: landingPageRouteHandler,
  cardShow: pokemonCardShowHandler,
  deckBuilder: deckBuilderPageHandler,
  cardSearch: cardSearchPageHandler,
} as const;
