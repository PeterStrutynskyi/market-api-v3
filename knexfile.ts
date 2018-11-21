import knex from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

type KnexConfig = {
  development: knex.Config,
  production: knex.Config,
  staging: knex.Config,
};

const config: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'apiko-marketplace',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  staging: {
    client: 'ec2-54-246-117-62.eu-west-1.compute.amazonaws.com',
    connection: {
      database: 'd6lua7c21nhla5',
      user: 'pbqpwkthlnedzi',
      password: '4d1408c46a924b4e119217d6cf93c062dcba07d246f4cbc81bfe92539e5a43e5',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
};

export default config;
module.exports = config;
