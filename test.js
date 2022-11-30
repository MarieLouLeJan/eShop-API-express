import { Category, Product } from './app/database/models/index.js';

const func = {

    async updateOne(){
        const category = await Category.findByPk(1);
        const cat = category.get({plain: true})
        console.log(cat)
        for(const c in cat) if(c !== "created_at" && c !== 'id' ) delete (cat[c]); 
        console.log(cat)
    },
}

func.updateOne()
