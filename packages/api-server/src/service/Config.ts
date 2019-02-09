import configDev from '../config/config.dev';
import configProd from '../config/config.prod';
import debugWrap from '../util/debugWrap';
import { isDefine } from '../util/isDefine';
import { RUN_MODE, RUN_MODE_REVERSE } from './enum/RUN_MODE';
import { IConfig } from './interface/IConfig';

const log = debugWrap('Config');

/** 전역 config variable 클래스, *RUN_MODE* 에 따라 다른 설정을 불러온다. *NODE_ENV* 는 아무 연관이 없음을 주의한다. */
export class Config {
  public static bootstrap() {
    const mode: RUN_MODE = (() => {
      if (isDefine(process.env.RUN_MODE)) {
        return RUN_MODE[RUN_MODE_REVERSE[process.env.RUN_MODE as keyof typeof RUN_MODE_REVERSE]];
      }
      return RUN_MODE.DEV;
    })();

    const config: IConfig = (() => {
      if (mode === RUN_MODE.PROD) {
        return configProd;
      }
      return configDev;
    })();

    Config._config = config;
    Config._mode = mode;

    log('Config boostrap done.');
  }
  private static _config: IConfig;
  private static _mode: RUN_MODE;

  public static get mode(): RUN_MODE {
    return Config._mode;
  }
  public static get app(): IConfig['app'] {
    return Config._config.app;
  }
}
