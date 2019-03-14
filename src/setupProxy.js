const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/yan", {
      target: "http://yanzihao.online",
      changeOrigin: true,
      pathRewrite: { // 自己配置代理必须加这句话
        '^/yan': ''
      }
    })
  );
};