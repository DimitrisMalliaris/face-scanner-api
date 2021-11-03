import knex from 'knex';

const dataBase = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
})

export default dataBase;