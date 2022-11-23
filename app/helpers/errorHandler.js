// eslint-disable-next-line no-unused-vars
export default (displayType) => (err, _, res, next) => {

    let status = 500;

    console.log(err)

    let { message } = "";


    if (status === 500) {
        message = 'Internal Server Error, please retry again later…';
    }

    if (err.isJoi) {
        status = 500;
        message = err.message
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 500;
        message = err.parent.detail
    }

    if (err.name === 'SequelizeForeignKeyConstraintError') {
        status = 500;
        message = err.parent.detail
    }

    if (err.status) {
        status = err.status;
        message = err.message
    }

    if (displayType === 'json') {
        res.status(status).json({ error: message });
    } else {
        res.status(status).render('error', { title: `Error status ${status}`, content: message });
    }
};
