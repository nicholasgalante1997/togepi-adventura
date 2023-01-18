import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { embed } from '../../utils';
import { LandingPage } from '../../web/pages';

export function HomeMarketplaceHandler(req: Request, res: Response) {
  res.send(
    embed(renderToString(<LandingPage />), { bundleName: 'landingPage' })
  );
}
