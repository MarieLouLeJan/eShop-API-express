import bunyan from 'bunyan';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const logger = bunyan.createLogger({
    name: 'eCommerce',
    streams: [
        {
            stream: process.stdout,
            level: 'info',
        },
        {
            level: 'error',
            path: `${dirname}../../logs/error.log`,
            type: 'rotating-file',
            period: '1d',
            count: 3,
        },
    ],
});

export default logger;
