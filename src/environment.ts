export const RELEASE_VERSION = '1.0.0'

export const _Environments = {
  production: {
    env: "production",
    baseUrl: '',
    release: RELEASE_VERSION,
  },
  development: {
    env: "production",
    baseUrl: 'http://localhost:5000/',
    release: RELEASE_VERSION,
    logs: true,
  },
}


export default () => {
  const env = 'development';
  return _Environments[env];
}

