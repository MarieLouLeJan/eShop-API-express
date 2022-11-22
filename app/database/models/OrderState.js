import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';

const OrderState = sequelize.define('order_states',
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
    {
        sequelize,
        tableName: 'order_states',
        updatedAt: false,
    }
);


export default OrderState;
