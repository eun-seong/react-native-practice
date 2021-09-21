import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
dotenv.config();

import rootRouter from './routers';

import env from './config/env';
import sequelize from './models';

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', rootRouter);

app.listen(PORT, async () => {
  console.log(`server is listening at ${PORT}`);
  await sequelize.sync();
});
