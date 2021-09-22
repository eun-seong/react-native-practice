import loadEnvironment from './loadEnviroment';

const env = {
  PORT: loadEnvironment('PORT'),
  JWT_SECRET: loadEnvironment('JWT_SECRET'),
  JWT_EXPIRES_IN: loadEnvironment('JWT_EXPIRES_IN'),
  NAVER_CLIENT_ID: loadEnvironment('NAVER_CLIENT_ID'),
  NAVER_CLIENT_SECRET: loadEnvironment('NAVER_CLIENT_SECRET'),
};

export default env;
