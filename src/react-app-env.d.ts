/// <reference types="react-scripts" />
declare namespace NodeJS {
  // ProcessEnv interface mustn't be prefixed or the types wont be taken into account
  // when using the `process.env` global
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API_URL: string;
  }
}
