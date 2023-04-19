import logger from "./logger.js";

// eslint-disable-next-line no-unused-vars
export default (err, _, res, next) => {

    let status = 500;

    console.log(err)

    let { message } = "";


    if (status === 500) {
        message = 'Internal Server Error, please retry again later…';
        logger.error(err);
    }

    if (err.isJoi) {
        console.log('joi')
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

    if (err.name === 'SequelizeDatabaseError') {
        status = 500;
        message = err.parent.detail
    }

    if (err.status) {
        status = err.status;
        message = err.message
    }

    const error = { message, status }
    res.status(status).send(error);
};
