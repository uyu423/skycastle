import express, { Express, Request, Response } from 'express';
import debugWrap from '../util/debugWrap';
import { Config } from './Config';

const log = debugWrap('Server');

/** express app 객체를 품은 서버 클래스 */
export class Server {
  public static async bootstrap() {
    const app = express();

    // Config Bootstrap
    Config.bootstrap();

    // 미들 웨어

    // 라우팅
    app.get('/', (request: Request, response: Response) => {
      // test controller
      response.json({
        message: 'SkyCastle is JTBC Drama (2018~2019)',
      });
    });

    return new Server(app);
  }

  constructor(private readonly _app: Express) {
    _app.listen(Config.app.port, () => {
      log('RUN_MODE', Config.mode);
      log(`SkyCastle API Sever on http://localhost:${Config.app.port}`);
    });
  }
}
