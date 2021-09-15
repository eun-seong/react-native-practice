import { Request, Response } from 'express';

class AuthController {
  async loginWithNaver(req: Request, res: Response) {
    // TODO: state 값 일치하는지 확인

    res.status(200).json({
      ok: true,
      code: req.query.code,
    });
  }
}

export default new AuthController();
