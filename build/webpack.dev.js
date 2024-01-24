const path = require('path')
const { merge } = require('webpack-merge')
const webpackBaseConf = require('./webpack.base')
// 引入工具方法
const { createLoader } = require('./utils')
// 引入项目文件属性
const config = require('../config/webpack.config')

// 入口
const entry = {
  'demo-mobile': path.resolve(__dirname, '../sites/demo/app.js'),
  'demo-doc': path.resolve(__dirname, '../sites/doc/app.js')
}

// 输出
const output = {
  chunkFilename: '[name].js',
  // publicPath: '/',
  // filename: '[name].js',
  // 性能优化1
  pathinfo: false
}

// 模块
const moduleConfig = () => ({
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        createLoader('style'),
        createLoader('css'),
        createLoader('postcss'),
        createLoader('sass')
      ]
    }
  ]
})

/**
 * dev 环境配置
 */
const webpackDevConf = {
  mode: config.dev.mode,
  devtool: config.dev.devtool,
  entry,
  output,
  module: moduleConfig(),
  // 性能优化2
  optimization: config.dev.optimization,
}

let defaultConf = {
  plugins: []
}

// if (process.env.MD_TO_VUE_ENV) {
//   const MdtohtmlPlugins = require('./mdtohtml.plugins.js')
//   defaultConf.plugins = MdtohtmlPlugins
// } 

// 合并配置文件
const newConf = merge(defaultConf, webpackBaseConf, webpackDevConf)

module.exports = newConf