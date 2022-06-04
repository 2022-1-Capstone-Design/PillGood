const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", "/test", "/survey", "/product", "/myPage"], {
      target: "http://http://ec2-54-224-198-233.compute-1.amazonaws.com",
      changeOrigin: true,
    })
  );
};
