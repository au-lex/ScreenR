const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://video-api.up.railway.app/api/videos',
      changeOrigin: true,
    })
  );
};
