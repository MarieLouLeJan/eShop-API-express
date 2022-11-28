import * as url from 'url';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));


console.log(`${dirname}../../logs/error.log`)