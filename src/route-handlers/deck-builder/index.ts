import { Request, Response } from 'express';
import { embed, l } from '../../utils';
import { DeckBuilderPage } from '../../web/pages';

export async function deckBuilderPageHandler(_req: Request, res: Response) {
  const page = await embed(DeckBuilderPage, { bundleName: 'deckGenerator' });
  res.send(page);
}
