import { landingPageRouteHandler } from './landing-page';
import { pokemonCardShowHandler } from './card-show';

export const ROUTING_HANDLER_MAP = {
  lp: landingPageRouteHandler,
  card: pokemonCardShowHandler
} as const;
