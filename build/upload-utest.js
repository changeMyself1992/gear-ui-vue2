const path = require('path');
// node.js 自定义命令插件
// const { program } = require('commander')
const utils = require('./utils');

// 上传至 utest
const utest = utils.upload({
  cloudSpace: '/ueip',
  cloudUrl: 'http://utest.jr.jd.com/upload/single'
});

const res = 'gear';
const global = {
  // 项目名称
  appName: 'jdjr-ui-v2',
  // 构建之后的路径
  builtDir: path.resolve(__dirname, `../dist`),
  tempZip: `${res}.zip`
};

utest.run(global);