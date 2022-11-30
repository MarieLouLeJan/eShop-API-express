import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const Order_product = sequelize.define('order_product',
    {
        product_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        priceHT: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TVA_title: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true,
        },
        TVA_value: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: false,
        sequelize,
        tableName: 'order_product',
    }
);

Order_product.removeAttribute('id');


export default Order_product;
