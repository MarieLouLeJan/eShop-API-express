import './app/helpers/loadenv.js'
import express from 'express';
const app = express();
import http from 'http';

import router from './app/routers/index.js';

app.use(express.json())

app.use(router);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));