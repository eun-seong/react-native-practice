import env from '../config/env';
import fetch from 'node-fetch';
import paramsBuilder from '../utils/paramsBuilder';

const URL_GETTING_TOKEN_NAVER = `https://nid.naver.com/oauth2.0/token`;
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
  }
}

export default new AuthService();
