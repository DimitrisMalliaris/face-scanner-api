import knex from 'knex';

const dataBase = knex({
    client: 'pg',
    connection: {
        ssl: true,
        host: process.env.DATABASE_URL
    }
})

export default dataBase;