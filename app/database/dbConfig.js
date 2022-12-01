import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PGURL, {
    logging: false,
    define: {
        createdAt: 'created_at',
    },
})

export default sequelize;
