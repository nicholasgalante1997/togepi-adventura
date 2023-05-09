import type { NextFunction, Request, Response } from 'express';
import { l } from '../utils';

export function trace() {
  return function traceRunner(req: Request, res: Response, next: NextFunction) {
    l(`hit path: ${req.path}`);
    l(`sent from: ${req.headers.origin}`);
    l(`device: ${req.headers['user-agent']}`);
    l(`timestamp: ${Date.now()}`);
    next();
  };
}
