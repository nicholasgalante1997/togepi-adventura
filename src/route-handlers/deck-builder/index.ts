import { Request, Response } from 'express';
import { embed, l } from '../../utils';
import { DeckBuilderPage } from '../../web/pages';

export async function deckBuilderPageHandler(req: Request, res: Response) {
  res.send(
    embed(DeckBuilderPage, {
      bundleName: 'deckGenerator',
    })
  );
}
