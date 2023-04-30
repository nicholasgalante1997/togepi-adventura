import type { Request, Response, NextFunction } from 'express';

export function userAgent() {
  return function userAgentMiddleware(req: Request, _res: Response, next: NextFunction) {
    (req as any).userAgent = req.headers['user-agent'];
    next();
  };
}
