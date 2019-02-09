# SkyCastle API Server

---

## server

개발 서버를 띄운다.

```bash
npx cross-env DEBUG="api:*" NODE_ENV=production npx nodemon --exec ./node_modules/.bin/ts-node src/app.ts
```

## start

Production 환경으로 *app.js* 를 실행한다.

```bash
npm run start
```

## build

Run tasks `lint` `clean` before this

*ts* -> *js* 로 Build 한다. `./dist` 하위에 빌드 파일이 생성된다.

```bash
npm install
tsc
cp ./package.json ./package-lock.json ./build
cp ./pm2.config.js ./build
```

## dist

Run tasks `build` before this

배포 가능한 *artifact* 를 생성한다. `./dist` 하위에 생성된다.

```bash
node ./gendist.js
```

## clean

`./dist` 디렉토리를 삭제한다.

```bash
rm -rf ./build/* || true
rm -rf ./build/.* || true
rm -rf ./dist/*
```

## lint

tslint 검사를 한다.

```bash
npx tslint -c tslint.json -p tsconfig.json
```