import { landingPageRouteHandler } from './landing-page';
import { pokemonCardShowHandler } from './card-show';
import { deckBuilderPageHandler } from './deck-builder';
import { cardSearchPageHandler } from './card-search';
import { authPageHandler } from './auth';

export const ROUTING_HANDLER_MAP = {
  landingPage: landingPageRouteHandler,
  cardShow: pokemonCardShowHandler,
  deckBuilder: deckBuilderPageHandler,
  cardSearch: cardSearchPageHandler,
  auth: authPageHandler,
} as const;
