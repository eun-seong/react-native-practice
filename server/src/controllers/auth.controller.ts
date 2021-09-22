import { Request, Response } from 'express';
import AuthService from '../services/auth.service';
import { NaverUser } from '../types';

interface LoginWishNaverRequest extends Request {
  query: {
    code: string;
  };
}

class AuthController {
  async loginWithNaver(req: LoginWishNaverRequest, res: Response) {
    // TODO: state 값 일치하는지 확인
    const { code } = req.query;

    const token = await AuthService.getAccessTokenWithNaver(code);
    if (!token) {
      return res.status(400).json({
        ok: false,
      });
    }

    const user: NaverUser = await AuthService.getUserInfoWithNaver(token.access);
    const [registeredUser, isCreated] = await AuthService.getUser(user, 'naver');

    const accessToken = await AuthService.generateJWT(user.id);

    return res.status(200).json({
      ok: true,
      data: {
        id: registeredUser.id,
        accessToken,
      },
    });
  }
}

export default new AuthController();
