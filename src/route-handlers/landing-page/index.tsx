import { Request, Response } from 'express';
import { embed } from '../../utils';
import { LandingPage } from '../../web/pages';

export function landingPageRouteHandler(_req: Request, res: Response) {
  res.send(
    embed(LandingPage, { bundleName: 'landingPage' })
  );
}
