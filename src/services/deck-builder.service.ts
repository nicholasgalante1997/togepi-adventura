import axios from 'axios';
import { TCGService } from './tcg.service';

const PIKACHU_DECK_GEN_MICROSERVICE_ENDPOINT =
  process.env.X_PIKACHU_API_HOSTING_URL ?? 'http://localhost:4001/d';

export class DeckBuilderService extends TCGService {
  constructor() {
    super(PIKACHU_DECK_GEN_MICROSERVICE_ENDPOINT, {
      'x-pikachu-ai-service-key': 'johto',
    });
  }

  async query(
    pokemon: string,
    set: string
  ): Promise<{ openAiGeneratedDeck: string }> {
    const data = { pokemon, set };
    const result = await this.axiosInstance.post<{
      openAiGeneratedDeck: string;
    }>('/build', data);
    if (result.status >= 400) {
      console.warn(
        '[WARN]: Request failed with issue code ' +
          result.status +
          '\n' +
          result.statusText +
          '\n' +
          result.data
      );
      throw new Error(
        'PDB_Network_Exception: Check logs for response from api.'
      );
    }
    return result.data as { openAiGeneratedDeck: string };
  }

  static purge(markup: string): string {
    if (markup.toLowerCase().includes('language model')) {
      const splitResponses = markup.split('\n\n');
      const sanitizedResponses = splitResponses.filter(
        (str) => !str.includes('language model')
      );
      return sanitizedResponses.join('\n\n');
    }
    return markup;
  }
}

const deckBuilderService = new DeckBuilderService();

export { deckBuilderService };
