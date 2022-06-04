const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", "/test", "/survey", "/product", "/myPage"], {
      target: "54.224.198.233:5000",
      changeOrigin: true,
    })
  );
};
