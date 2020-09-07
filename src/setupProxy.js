const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/assets',
      createProxyMiddleware({
        target: 'https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos',
        changeOrigin: true
      })
    );
    app.use(
        '/entities',
        createProxyMiddleware({
          target: 'https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos',
          changeOrigin: true
        })
      );
  };