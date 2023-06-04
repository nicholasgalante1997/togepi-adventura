import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { locale, marketplace, trace, userAgent } from './middleware';
import { ROUTING_HANDLER_MAP } from './route-handlers';

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(trace());
expressServer.use(userAgent());
expressServer.use(locale());
expressServer.use(marketplace());

expressServer.use(express.static(path.resolve(process.cwd(), 'build', 'static')));

expressServer.get('/', ROUTING_HANDLER_MAP.landingPage);
expressServer.get('/cards/search', ROUTING_HANDLER_MAP.cardSearch);
expressServer.get('/card/:pkId', ROUTING_HANDLER_MAP.cardShow);
expressServer.get('/deck/builder', ROUTING_HANDLER_MAP.deckBuilder);
expressServer.get('/registrar', ROUTING_HANDLER_MAP.auth);

export const server = createServer(expressServer);
