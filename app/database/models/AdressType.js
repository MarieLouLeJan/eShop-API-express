import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const AdressType = sequelize.define('adress_types',
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
    {
        sequelize,
        tableName: 'adress_types',
        updatedAt: false,
    }
)

export default AdressType;
