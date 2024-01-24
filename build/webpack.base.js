const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const process = require('process')
// 引入工具方法
const { initNodeEnv, createLoader } = require('./utils')
// const MdtohtmlPlugins = require('./mdtohtml.plugins.js');
// 引入项目文件属性
// const config = require('../config/devServer.config')

// 初始化 node Env
initNodeEnv()

// 模块
const moduleConfig = () => ({
  rules: [
    {
      test: /\.svg$/,
      use: createLoader('raw')
    },
    {
      test: /\.vue$/,
      use: createLoader('vue')
    },
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: [
        createLoader('cache'),
        createLoader('babel'),
      ]
    },
    {
      test: /\.(png|jpg|gif|webp)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[hash][ext][query]'
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      // exclude: /node_modules/,
      // include: [
      //   /sites\/demo/, /sites\/doc/
      // ],
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[hash][ext][query]'
      }
    },
    {
      test: /\.md$/,
      use: [
        createLoader('cache'),
        createLoader('vue'),
        // path.resolve(__dirname, 'loaders', 'markdown-loader/index.js')
        {
          loader: path.resolve(__dirname, 'loaders', 'markdown-loader/index.js')
        }
      ],
    },
  ]
})

// 解析
const resolveConfig = () => ({
  modules: ['node_modules'],
  extensions: ['.js', '.jsx', '.vue', '.json', '.ts', '.tsx', '.css', '.scss', '.less'],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '..', 'src'),
    '@@': path.resolve(__dirname, '..', 'joyer-components'),
    '@@@': path.resolve(__dirname, '..', 'sites')
  }
})

/**
 * 生成 HtmlWebpackPlugin
 * @param {*} src 
 * @param {*} name 
 * @returns 
 */
const setHTMLPlugin = (src = '../sites/doc/index.html', name = 'desktop', fileName = 'index.html') => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, src),
    title: 'doc page',
    filename: fileName,
    hash: true, //防止缓存
    inject: true,
    // publicPath: './',
    chunks: ['chunks', name],
    scriptLoading: 'blocking',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      // multihtmlCache: true, // 解决多页打包的关键！
      // minifyJS: true,
      // minifyCSS: true,
      // removeAttributeQuotes: true //压缩 去掉引号
    }
  })
}

const HTMLPlugin = [
  // mobile htmlplugin
  setHTMLPlugin('../sites/demo/index.html', 'demo-mobile', 'demo.html'),
  // doc htmlplugin
  setHTMLPlugin('../sites/doc/index.html', 'demo-doc', 'index.html'),
]

// plugins
const pluginsConfig = () => {
  const basePlugin = [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('  构建中 [:bar] ') + chalk.green.bold(':percent')
        } (:elapsed seconds)`,
      clear: false,
      width: 100
    }),
    new webpack.DefinePlugin({
      // 'process.env': JSON.stringify(process.env),
      'process.env.VUE_APP_BUILD_ENV': JSON.stringify(process.env.VUE_APP_BUILD_ENV)
    }),
    // TODO: 
    new webpack.ProvidePlugin({
      process: 'process/browser.js'
    }),
    new VueLoaderPlugin()
  ]

  const allPlugin = [].concat(HTMLPlugin, basePlugin)
  return allPlugin
}

const webpackBaseConf = {
  // mode: config.dev.mode,
  // devtool: config.dev.devtool,
  // entry,
  module: moduleConfig(),
  resolve: resolveConfig(),
  plugins: pluginsConfig(),
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true
  }
}

module.exports = webpackBaseConf