import NodeCache from 'node-cache';

const cache = new NodeCache();

const Cache = duration => (req, res, next) => {
    
    if(req.method !== 'GET') {
        console.error('Cannot cache non-GET methods!');
        return next();
    }

    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    if(cachedResponse) {
        console.log(`Cache hit fot ${key}`);
        res.send(cachedResponse)
    } else {
        console.log(`Cache missed fot ${key}`)
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration)
        };
        next();
    }
};

export default Cache;