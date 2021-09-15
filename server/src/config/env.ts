import loadEnvironment from './loadEnviroment';

const env = {
  PORT: loadEnvironment('PORT'),
};

export default env;
