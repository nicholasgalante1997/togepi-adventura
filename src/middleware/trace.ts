import type { NextFunction, Request, Response } from 'express';
import { l } from '../utils';

export function trace() {
  return function traceRunner(req: Request, res: Response, next: NextFunction) {
    l(`hit path: ${req.path}`);
    l(`Status: ${req.statusCode ?? 'Not Present On Request'}`);
    l(`timestamp: ${Date.now()}`);
    next();
  };
}
