const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", "/test", "/survey", "/product", "/myPage"], {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
