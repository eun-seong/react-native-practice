import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

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

    const user = await AuthService.getUserInfoWithNaver(token.access);

    return res.status(200).json({
      ok: true,
      user,
    });
  }
}

export default new AuthController();
