const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs-extra');
const { expand } = require('dotenv-expand');
// 提取 css 到单独的文件中，为每个包含 css 的 js 文件创建一个 css 文件。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// node.js 请求 后端请求不会跨域
const request = require('request');
// node.js 压缩文件插件
const archiver = require('archiver');

const __root = process.cwd()

/**
 * 初始化 Node Env
 */
exports.initNodeEnv = () => {
  const NODE_ENV = {
    ...dotenv.config({
      debug: process.env.DEBUG,
      path: path.join(__dirname, '../.env')
    }),
    ...dotenv.config({
      debug: process.env.DEBUG,
      path: path.join(__dirname, `../.env.${process.env.VUE_APP_BUILD_ENV}`)
    })
  }
  expand(NODE_ENV)
}

/**
 * 创建 loader
 * @param name
 * @returns {{}}
 */
const createLoader = name => {
  const loaderObj = {}

  if (name) {
    loaderObj.loader = `${name}-loader`
  }
  
  if (['vue'].includes(name)) {
    loaderObj.options = {
      compilerOptions: {
        preserveWhitespace: false
      },
      loaders: [
        createLoader('style'),
        createLoader('css'),
        createLoader('postcss'),
        createLoader('sass')
      ]
    }
  } else if (['babel'].includes(name)) {
    loaderObj.options = {
      rootMode: 'upward',
      configFile: path.resolve(__root, 'babel.config.js')
    }
  } else if (['postcss'].includes(name)) {
    // TODO: 问题：按道理会自动找到配置文件的
    loaderObj.options = require('../postcss.config')
  }

  return loaderObj
}
exports.createLoader = createLoader

/**
 * 创建 loader
 * @param {*} names 
 * @param {*} isBuild 
 * @returns 
 */
exports.createLoaders = (names, isBuild) => {
  const loaders = [];

  if (Array.isArray(names) && names.length > 0) {
    if (isBuild) {
      loaders.push({
        loader: MiniCssExtractPlugin.loader
      });
    }

    names.map(name => {
      const loaderObj = {};

      loaderObj.loader = `${name}-loader`;
      if (name === 'css') {
        loaderObj.options = {
          // modules: true,
          importLoaders: 1
        };
      }

      loaders.push(loaderObj);
      return name;
    });
  }

  return loaders;
};

exports.isDir = (dir) => {
  return fs.lstatSync(dir).isDirectory()
};

exports.upload = config => ({
  // config: {
  //   // TODO： 这里需要修改
  //   cloudSpace: '/release',
  //   cloudUrl: 'http://utest.jr.jd.com/upload/single'
  // },
  config,
  // 压缩文件
  compress(srcDir, outZip, rootDir) {
    return new Promise(resolve => {
      const output = fs.createWriteStream(outZip);
      const archive = archiver('zip');
      archive.pipe(output);

      output.on('close', () => {
        console.log(`${archive.pointer()} total bytes`);
        console.log('文件压缩已完成.');
      });
      archive.on('error', err => {
        resolve(false, err);
      });
      // 监听压缩、传输数据结束
      output.on('close', () => { // 压缩完成
        resolve(true);
      });
      archive.directory(srcDir, rootDir);
      archive.finalize();
    });
  },
  // 请求上传
  uploader(localZip, url, dir) {
    const file = fs.createReadStream(localZip);
    return new Promise(resolve => {
      // TODO: 这里需要替换
      request.post({ url, formData: { my_file: file, my_field: dir } }, resolve);
    });
  },
  // 跑起来
  async run(global) {
    const Conf = this.config;
    if (await this.compress(global.builtDir, global.tempZip, global.appName)) {
      const err = await this.uploader(global.tempZip, Conf.cloudUrl, Conf.cloudSpace);
      if (err) {
        console.error(' minner upload failed: ', err);
      } else {
        const uploadUrl = config.cloudUrl.search('minner.jr.jd.com') !== -1
          ? `minner upload success: https://minner.jr.jd.com${Conf.cloudSpace}/${global.appName}/`
          : `utest upload success: https://utest.jr.jd.com${Conf.cloudSpace}/${global.appName}/`;
        console.log(uploadUrl);
      }
      // 删除临时文件
      fs.unlinkSync(global.tempZip);
    }
  }
});
