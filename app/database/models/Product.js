import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';


const Product = sequelize.define('products',
    {
        ref: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priceHT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        note: {
            type: DataTypes.NUMBER,
            allowNull: true
        }
    },
    {
        sequelize,
        updatedAt: false,
        tableName: 'products',
    }
);

export default Product;
