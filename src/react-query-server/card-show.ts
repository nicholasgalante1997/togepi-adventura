import { type Card } from '@nickgdev/larvitar-types';
import { cardService } from '../services/card';

export const CARD_SHOW_QUERY_KEY = 'card_show_' as const;

export async function getCardShowAsyncProps(id: string): Promise<Card | null> {
  try {
    const data = await cardService.getCard(id);
    return data.data;
  } catch (e: any) {
    console.error((e as Error).message);
    console.error((e as Error).stack);
    return null;
  }
}
