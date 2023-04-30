import type { Request, Response, NextFunction } from 'express';

const MARKETPLACE_MAP = {
  'http://localhost:3000/': 'development',
  'http://localhost:3001/': 'development',
} as const;

export function marketplace() {
  return function marketplaceMiddleware(req: Request, _res: Response, next: NextFunction) {
    (req as any).marketplace = MARKETPLACE_MAP[req.url as keyof typeof MARKETPLACE_MAP];
    next();
  };
}
