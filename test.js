import { Category } from "./app/database/models";

const cat = async () => {
    return await Category.findAll({
        include: 'products'
    });
}

console.log(cat)