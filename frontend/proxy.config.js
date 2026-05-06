// https://angular.io/guide/build#proxying-to-a-backend-server

const GATEWAY = 'http://localhost:8080';

const PROXY_CONFIG = {
  '/users/**': {
    target: 'https://api.github.com',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
  },
  '/category/**': { target: GATEWAY, changeOrigin: true, secure: false },
  '/topic/**':    { target: GATEWAY, changeOrigin: true, secure: false },
  '/reply/**':    { target: GATEWAY, changeOrigin: true, secure: false },
  '/report/**':   { target: GATEWAY, changeOrigin: true, secure: false },
  '/badword/**':  { target: GATEWAY, changeOrigin: true, secure: false },
  '/resources/**':{ target: GATEWAY, changeOrigin: true, secure: false },
};

module.exports = PROXY_CONFIG;
