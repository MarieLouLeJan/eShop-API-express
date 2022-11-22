import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const Order_type_adress = sequelize.define('order_type_adress',
    {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        adress_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        adress_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'order_type_adress',
        timestamps: false,
    }
);

Order_type_adress.removeAttribute('id');


export default Order_type_adress;
