import express from 'express';
import authRouter from './auth.router';

const rootRouter = express();

rootRouter.use('/auth', authRouter);
rootRouter.get('/test', () => console.log('test'));

export default rootRouter;
