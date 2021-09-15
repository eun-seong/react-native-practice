import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';
// import authMiddleware from '../middlewares/auth.middleware';
import wrapAsync from '../utils/wrapAsync';

const authRouter: Router = express();

authRouter.get('/naver', wrapAsync(AuthController.loginWithNaver));

export default authRouter;
