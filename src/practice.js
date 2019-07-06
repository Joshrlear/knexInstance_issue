require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log(process.env.DB_URL);
console.log(knexInstance.select('product_id', 'name', 'price', 'category')
.from('amazong_products')
.where({ name: 'Point of view gun' }));
console.log('connection successful');

/* knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .where({ name: 'Point of view gun' })
    .then(result => {
        console.log(result)
    }) */