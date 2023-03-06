import type { Request, Response, NextFunction } from 'express';
import { l } from '../utils';

export function trace() {
  return function traceRunner(req: Request, res: Response, next: NextFunction) {
    l(`hit path: ${req.path}`);
    l(`Status: ${req.statusCode}`);
    l(`timestamp: ${Date.now()}`);
    next();
  };
}
