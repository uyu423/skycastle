import { Server } from './service/Server';
import debugWrap from './util/debugWrap';

const log = debugWrap('app');

(() => {
  log('SkyCastle API Server Bootstraping');
  Server.bootstrap();
})();
