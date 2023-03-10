import { TCGService } from './tcg-service';
import {
  CARDS_ENDPOINT,
  Card,
  CARDS_ENDPOINT_OPTIONS,
} from '@nickgdev/larvitar-types';

class CardService extends TCGService {
  constructor() {
    super(CARDS_ENDPOINT);
  }

  public async getCard(cardId: string) {
    const { data, status, statusText } = await this.axiosInstance.get<{
      data: Card;
    }>(`/${cardId}`);
    if (status < 200 || status > 299) {
      console.warn(
        '[WARN]: Request failed with issue code ' + status + '\n' + statusText
      );
    }
    return data;
  }

  public async getCards(queryObj?: CARDS_ENDPOINT_OPTIONS) {
    const { data, status, statusText } = await this.axiosInstance.get<
      { data: Card[] } & Record<string, any>
    >(queryObj ? `?${queryObj.q}` : '');
    if (status < 200 || status > 299) {
      console.warn(
        '[WARN]: Request failed with issue code ' + status + '\n' + statusText
      );
    }
    return data;
  }
}

const cardService = new CardService();

export { cardService };
