import type { NextFunction, Request, Response } from 'express';

export function locale() {
  return function localeMiddleware(req: Request, _res: Response, next: NextFunction) {
    (req as any).locale = req.headers['accept-language'];
    next();
  };
}
