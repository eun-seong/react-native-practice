import env from '../config/env';
import fetch from 'node-fetch';
import * as jwt from 'jsonwebtoken';

import paramsBuilder from '../utils/paramsBuilder';
import User from '../models/user.model';
import { NaverUser, UserJwtPayload } from '../types';

const URL_GETTING_TOKEN_NAVER = `https://nid.naver.com/oauth2.0/token`;
const URL_GETTING_USER_NAVER = `https://openapi.naver.com/v1/nid/me`;
class AuthService {
  async getAccessTokenWithNaver(code: string): Promise<{ access: string; refresh: string } | undefined> {
    const url = paramsBuilder(
      URL_GETTING_TOKEN_NAVER,
      { grant_type: 'authorization_code' },
      { client_id: env.NAVER_CLIENT_ID },
      { client_secret: env.NAVER_CLIENT_SECRET },
      { code: code },
      { state: 'STATE_STRING' }
    );

    const result = await fetch(url).then((res) => res.json());

    if (result) {
      const { access_token, refresh_token } = result;
      return { access: access_token, refresh: refresh_token };
    }
    return;
  }

  async getUserInfoWithNaver(access_token: string) {
    const result = await fetch(URL_GETTING_USER_NAVER, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    }).then((res) => res.json());

    if (result.resultcode === '00') {
      const user: NaverUser = result.response;
      return user;
    } else {
      throw Error('[ERROR] 네이버 유저 정보 가져오기 실패');
    }
  }

  async getUser(user: NaverUser, social_type: string): Promise<[User, boolean]> {
    return User.findOrCreate({
      where: { social_id: user.id, social_type },
      defaults: { email: user.email, name: user.name, profile_image: user.profile_image },
    });
  }

  public async generateJWT(userId: string) {
    const token = jwt.sign({ userId }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });

    return token;
  }

  public async verifyJWT(token: string) {
    return jwt.verify(token, env.JWT_SECRET) as UserJwtPayload;
  }
}

export default new AuthService();
