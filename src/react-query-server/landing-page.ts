import { cardService } from '../services/card.service';
import { type LandingPageProps } from '../web/components/LandingPage';

const bannerCardIds = ['sv1-251', 'sv1-244', 'sv1-248'] as const;

export const LANDING_PAGE_QUERY_KEY = 'landing_page_query' as const;

export async function getLandingPageAsyncProps(): Promise<LandingPageProps | null> {
  try {
    const bannerCards: LandingPageProps['layout']['banner']['cards'] = [];
    for (const bannerCardId of bannerCardIds) {
      const data = await cardService.getCard(bannerCardId);
      const card = {
        name: data.data.name,
        images: data.data.images,
        id: data.data.id,
        set: data.data.set,
      };
      bannerCards.push(card);
    }
    return {
      layout: {
        banner: {
          cards: bannerCards,
        },
      },
    };
  } catch (e: any) {
    console.error((e as Error).message);
    console.error((e as Error).stack);
    return null;
  }
}
