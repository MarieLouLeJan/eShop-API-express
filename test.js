import query from './app/services/queries/categoryQueries.js'

async function getAll () {
    console.log(await query.getAllShop())
}

console.log( getAll())