const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const chalk = require('chalk');
const fs = require('fs');
const webpackDevConfig = require('./webpack.dev');
const config = require('../config/webpack.config');
const process = require('process')

// webpack dev server 配置
const options = {
  compress: config.dev.compress, // 开启gzip
  host: config.dev.host,
  port: config.dev.port,
  client: {
    // logging: config.dev.logging, // 日志记录
    // overlay: config.dev.overlay, // 编译错误警告 是否显示全屏覆盖
    progress: config.dev.progress // 百分比显示编译进度
  },
  // 支持 history 路由模式
  // historyApiFallback: true,
  hot: config.dev.hot,
  // https: config.dev.https,
  liveReload: false,
  // open: {
  //   app: {
  //     name: 'Google Chrome',
  //     arguments: ['--incognito', '--new-window']
  //   }
  // },
  allowedHosts: config.dev.allowedHosts,
  proxy: config.dev.proxy
};
// console.log(1111, JSON.stringify(webpackDevConfig)  )

const compiler = webpack(webpackDevConfig);

const server = new DevServer(options, compiler);

server.startCallback(() => {
  // server start 事件
});

// 通过webpack自定义事件来监听server done事件
compiler.hooks.done.tap('webpack server done', stats => {
  if (stats.hasErrors()) {
    console.log();
    console.log(`       ${chalk.red('error')}!!!!  `);
    console.log();
    return;
  }

  const localUrl = `http://${config.dev.host}:${config.dev.port}`;

  console.log();
  console.log();
  console.log(`  ${chalk.green('success')}!!!!  `);
  console.log();
  console.log('  App 启动:');
  console.log(`  - 地址:   ${chalk.cyan(localUrl)}  `);
  console.log();
    
  const buildCommand = 'npm run build';
  // console.log(`  Note that the development build is not optimized. `)
  console.log(`  构建生产包, 执行 ${chalk.cyan(buildCommand)}.`);
  console.log();
});
