// import env from '../config/env';
// import qs from 'qs';
// import fetch from 'node-fetch';
// import * as jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// import User from '../models/user.model';
// import CreateUserRequest from '../requests/auth/createUser.request';
// import LoginRequest from '../requests/auth/login.request';
// import UpdateProfileRequest from '../requests/auth/updateProfile.request';
// import { JwtPayload } from 'jsonwebtoken';
// import AuthError, { AuthErrorType } from '../errors/auth.error';

// const OAUTH_ENDPOINT = 'https://github.com/login/oauth';
// const API_ENDPOINT = 'https://api.github.com';

// interface IGitAccessTokenResult {
//   access_token: string;
//   token_type: string;
//   scope: string;
// }

// interface IGithubLoginResult {
//   login: string;
// }

// export interface IUserJwtPayload extends JwtPayload {
//   userId?: string;
// }

// interface IGithubUser {
//   email?: string;
//   name?: string;
//   login: string;
// }

// class AuthService {
//   public async createUser(req: CreateUserRequest) {
//     const { password } = req;

//     const hashedPassword = await bcrypt.hash(password, parseInt(env.BCRYPT_SALT_ROUNDS));
//     await User.create({
//       ...req,
//       password: hashedPassword,
//     });
//   }
// }

// export default new AuthService();
