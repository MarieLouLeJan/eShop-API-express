import { DataTypes } from 'sequelize';
import sequelize from '../dbConfig.js';

const Category = sequelize.define('categories',
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
        },
    },
    {
        sequelize,
        tableName: 'categories',
        updatedAt: false,
    }
)

export default Category;
