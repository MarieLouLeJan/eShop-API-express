import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const TVA = sequelize.define('tva',
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        value: {
            type: DataTypes.NUMBER,
            allowNull: false,
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
        tableName: 'tva',
        updatedAt: false
    }
);

export default TVA;