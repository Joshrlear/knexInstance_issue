require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

/* console.log('connection successful!')

function searchByWord(searchTerm) {
    knexInstance
        .select('id', 'name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result)
        })
}

searchByWord('fish') */

/* function paginateItems(page) {
    const itemsPerPage = 6
    const offset = itemsPerPage * (page - 1)
    knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .limit(itemsPerPage)
    .offset(offset)
    .then(result => {
        console.log(result)
    })
}

paginateItems(2) */

/* function daysAgo(days) {
    knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .where('date_added', '>', knexInstance.raw(`now() - '??days'::INTERVAL`, days))
    .orderBy([
        { column: 'name', order: 'ASC' },
        { column: 'date_added', order: 'DESC'},
    ])
    .then(result => {
        console.log(result)
    })
}

daysAgo(1) */

function totalCost() {
    knexInstance
    .select('category')
    .sum('price as fish')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log('COST PER CATEGORY')
      console.log(result)
    })
}

totalCost();