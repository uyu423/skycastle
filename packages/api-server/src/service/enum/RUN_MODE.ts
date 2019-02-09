/** API 서버의 구동 환경, 개발 환경은 dev, 라이브 환경은 prod, NODE_ENV 와는 별개의 값이다. */
export enum RUN_MODE {
  DEV = 'dev',
  PROD = 'prod',
}

export enum RUN_MODE_REVERSE {
  dev = 'DEV',
  prod = 'PROD',
}
