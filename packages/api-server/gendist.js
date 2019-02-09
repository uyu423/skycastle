#!node
// 배포 가능한 artifact 를 생성한다.
// tslint:disable-next-line:no-implicit-dependencies
const shelljs = require('shelljs');
const packageJson = require('./package.json');

const { version, name } = packageJson;

shelljs.mkdir('dist');
shelljs.cd('build');
shelljs.exec(`zip -r ../dist/${name}-${version}.zip .`);
