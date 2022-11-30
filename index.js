import './app/helpers/loadenv.js'
import express from 'express';
import compression from 'compression';
const app = express();
import http from 'http';
import logger from './app/helpers/logger.js';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import router from './app/routers/index.js';



const PORT = process.env.PORT || 8000;


app.use(
    cors({
        origin: `http://127.0.0.1:${PORT}`,
        credentials: true
    })
);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'api-ecommerce',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ],
    },
    apis: ['./app/services/swagger/*.js'],
};

const swaggerSpecs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use(compression());
app.use(express.json());

app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Listening on http://localhost:${PORT}`);
});