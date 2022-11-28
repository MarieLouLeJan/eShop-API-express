import './app/helpers/loadenv.js'
import express from 'express';
const app = express();
import http from 'http';
import logger from './app/helpers/logger.js';


import router from './app/routers/index.js';

app.use(express.json())

app.use(router);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Listening on http://localhost:${PORT}`);
});