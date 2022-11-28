import logger from "./logger.js";

// eslint-disable-next-line no-unused-vars
export default (err, _, res, next) => {

    let status = 500;

    console.log(err)

    let { message } = "";


    if (status === 500) {
        message = 'Internal Server Error, please retry again later…';
    }

    if (err.isJoi) {
        status = 400;
        message = err.message
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 400;
        message = err.parent.detail
    }

    if (err.name === 'SequelizeForeignKeyConstraintError') {
        status = 400;
        message = err.parent.detail
    }

    if (err.status) {
        status = err.status;
        message = err.message
    }

    if(status === 500){
        message = 'Internal Server Error, please try again later...';
        logger.error(err)
    }

    res.status(status).send({ error: message });
};
