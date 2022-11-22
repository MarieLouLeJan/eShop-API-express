import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const Role = sequelize.define('roles',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unicode: true,
            unique: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    },
    {
        sequelize,
        updatedAt: false,
        tableName: 'roles',
    }
);

export default Role;
