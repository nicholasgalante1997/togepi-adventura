import type { Request, Response, NextFunction } from 'express';
import { l } from '../utils';

export function trace(){
    return function traceRunner(req: Request, res: Response, next: NextFunction) {
        l(`beckoned path: ${req.path}`);
        l(`requester headers ${req.headers}`);
        l(`timestamp: ${Date.now()}`);
        next();
    }
} 