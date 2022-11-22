// eslint-disable-next-line no-unused-vars
export default (displayType) => (err, _, res, next) => {
    let status = 500;
    if (err.isJoi) {
        status = 400;
    }

    if (err.status) {
        status = err.status;
    }

    let { message } = err;
    if (status === 500) {
        message = 'Internal Server Error, please retry again later…';
        console.log(err);
    }

    if (displayType === 'json') {
        res.status(status).json({ error: message });
    } else {
        res.status(status).render('error', { title: `Error status ${status}`, content: message });
    }
};
