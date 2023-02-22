import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { trace } from './middleware';
import { ROUTING_HANDLER_MAP } from './route-handlers';

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(trace());

expressServer.use(
  express.static(path.resolve(process.cwd(), 'build', 'static'))
);

expressServer.get('/', ROUTING_HANDLER_MAP.lp);

export const server = createServer(expressServer);
