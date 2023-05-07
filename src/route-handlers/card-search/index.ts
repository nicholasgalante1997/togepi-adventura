import { type Request, type Response } from 'express';
import { embed, l } from '../../utils';
import { CardSearchPage } from '../../web/pages';

export async function cardSearchPageHandler(_req: Request, res: Response) {
  const page = await embed(CardSearchPage, { bundleName: 'cardSearch' });
  res.send(page);
}
