const path = require('path');
// const buildConfig = require('./index');

module.exports = {
  // 生产环境配置
  build: {
    mode: 'production',
    // ! 根据项目情况而定
    // devtool: 'source-map',
    minimize: true,
    concatenateModules: true,
    // 性能提示
    hints: 'warning',
    // 最大体积
    maxEntrypointSize: 400000,
    // 单个资源体积
    maxAssetSize: 100000,
    // 是否开启 Gzip
    productionGzip: false,
    assetsPublicPath: '../'
  },
  // 开发环境 配置项
  dev: {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    },
    // devServer 配置
    useLocalIp: false,
    // host: '0.0.0.0',ƒ
    host: 'dev.jr.jd.com',
    port: 8080,
    // staticDir: path.resolve(__dirname, `../dist/${buildConfig.basePath}`),
    staticDir: path.resolve(__dirname, '../sites/demo/'),
    compress: true,
    hot: true,
    https: false,
    // open: true,
    open: 'Google Chrome',
    noInfo: true,
    inline: true,
    watchContentBase: true,
    allowedHosts: ['.jd.com'],
    proxy: {
      '/gw/generic/': {
        target: 'https://ms.jr.jd.com',
        ws: true,
        secure: false,
        debug: true,
        // 下面这俩方法没有在webpack文档中体现，他们是http-proxy-middleware 这个代理中间件实现的
        onProxyReq(proxyReq, req) {
          // console.log('------------------------onProxyReq--------------------');
          Object.keys(req.headers).forEach(key => {
            proxyReq.setHeader(key, req.headers[key]);
          });

          proxyReq.setHeader('Origin', 'http://minner.jr.jd.com');
          proxyReq.setHeader('Referer', 'https://ms.jr.jd.com');
          proxyReq.setHeader('Host', 'https://ms.jr.jd.com'.replace('https://', '').replace('http://', ''));
          // console.log(proxyReq);
        },
        onProxyRes(proxyRes, req, res) {
          // console.log('---------------------onProxyRes-----------------------');
          Object.keys(proxyRes.headers).forEach(key => {
            // console.log(key, proxyRes.headers[key]);
            res.append(key, proxyRes.headers[key]);
          });
        }
      }
    },
    // V4 新增
    logging: 'none',
    overlay: true,
    progress: true
  }
};
