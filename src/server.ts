import { createServer } from 'http';
import express from 'express';
import cors from 'cors';

import { trace } from './middleware';
import { HomeMarketplaceHandler } from './route-handlers';

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(trace());

expressServer.get('/', HomeMarketplaceHandler);

export const server = createServer(expressServer);
