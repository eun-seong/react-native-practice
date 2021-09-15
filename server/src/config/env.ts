import loadEnvironment from './loadEnviroment';

const env = {
  PORT: loadEnvironment('PORT'),
  NAVER_CLIENT_ID: loadEnvironment('NAVER_CLIENT_ID'),
  NAVER_CLIENT_SECRET: loadEnvironment('NAVER_CLIENT_SECRET'),
};

export default env;
