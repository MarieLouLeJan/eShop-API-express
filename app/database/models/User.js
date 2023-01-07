import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const User = sequelize.define('users',
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        reset: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    },
    {
        updatedAt: false,
        sequelize,
        tableName: 'users',
    }
);

export default User;
