import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import User from './user.model';

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = {
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
};

const options: SequelizeOptions = {
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  logging: !(process.env.NODE_ENV === 'production'),
  dialect: 'mysql',
  timezone: '+09:00',
  models: [User],
};

const sequelize = new Sequelize(options);

export default sequelize;
