import { type Request } from 'express';

export type ExtendedRequest = Request & {
  userAgent?: string;
  locale?: string;
  marketplace?: string;
};
