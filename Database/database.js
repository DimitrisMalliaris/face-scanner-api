import knex from 'knex';

const dataBase = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
        host: 'postgresql-flat-04327',
        user: 'api',
        password: '',
        database: 'facescanner'
    }
})

export default dataBase;