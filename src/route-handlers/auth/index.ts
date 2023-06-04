import { type Request, type Response } from 'express';
import { embed } from '../../utils';
import { AuthPage } from '../../web/pages';

export async function authPageHandler(_req: Request, res: Response) {
  const page = await embed(AuthPage, { bundleName: 'auth' });
  res.send(page);
}
