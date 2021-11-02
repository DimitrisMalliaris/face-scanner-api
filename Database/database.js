import knex from 'knex';

const dataBase = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '7mwjdef8',
        database: 'facescanner'
    }
})

export default dataBase;