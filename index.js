import './app/helpers/loadenv.js';
import express from 'express';
// import compression from 'compression';
const app = express();
import http from 'http';
import logger from './app/helpers/logger.js';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import router from './app/routers/index.js';
import { UI_ROOT_URI } from './app/services/googleAuthConfig.js';

const PORT = process.env.PORT || 8000;

// CORS policy
// Fix the error "No 'access-Control-Allow-Origin'"
// Allow a request to come from other URL (localhost:3000 >> localhost:8080)
app.use(
  cors({
    origin: UI_ROOT_URI,
    credentials: true,
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
        url: `http://localhost:${PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./app/services/swagger/*.js'],
};

const swaggerSpecs = swaggerJsDoc(options);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

// app.use(compression());
app.use(express.json());

app.use(router);

export default app;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Listening on http://localhost:${PORT}`);
});
