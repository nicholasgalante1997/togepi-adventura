import { Request, Response } from 'express';
import { embed, l } from '../../utils';
import { CardSearchPage } from '../../web/pages';

export async function cardSearchPageHandler(req: Request, res: Response) {
  res.send(
    embed(CardSearchPage, {
      bundleName: 'deckGenerator',
    })
  );
}
