const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
// 压缩 JS 插件
const TerserPlugin = require('terser-webpack-plugin');
// 提取 css 到单独的文件中，为每个包含 css 的 js 文件创建一个 css 文件。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 优化 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 基础 webpack 配置
const webpackBaseConf = require('./webpack.base');
// 引入项目文件属性
const config = require('../config/webpack.config')
const { createLoaders } = require('./utils')

// 入口
const entry = {
  'demo-mobile': path.resolve(__dirname, '../sites/demo/app.js'),
  'demo-doc': path.resolve(__dirname, '../sites/doc/app.js')
}

// 输出
const outputConfig = () => {
  const output = {
    chunkFilename: 'js/[name].[hash].js',
    // publicPath: '/',
    // filename: '[name].js',
    // 性能优化1
    pathinfo: false
  };

  return output;
};

// plugins
const pluginsConfig = () => {
  const plugins = [
    new MiniCssExtractPlugin({
      experimentalUseImportModule: true,
      filename: 'styles/[name].[chunkhash:8].css',
      chunkFilename: 'styles/[id].[chunkhash:8].css',
      // 移除 Order 警告
      ignoreOrder: true
    }),
    // 复制自定义的不需要build的静态资源
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../static'),
    //       to: 'static'
    //       // ignore: ['.*']
    //     }
    //   ]
    // })
  ];

  return plugins;
};

// 优化
const optimizationConfig = () => {
  const optimization = {
    minimize: config.build.minimize,
    minimizer: [
      // 压缩js插件 覆盖默认压缩工具
      new TerserPlugin({
        parallel: true, // 使用多进程提高构建速度
        // sourceMap: false,   
        terserOptions: {
          parse: {},
          compress: {
            pure_funcs: process.env.VUE_APP_BUILD_ENV === 'prod' ? ['console.log', 'debugger'] : []
          }
        },
        extractComments: false // 是否将注释提取到单独的文件中
      }),
      // 优化压缩 css 插件 覆盖默认压缩工具
      new CssMinimizerPlugin({
        parallel: true
      })
    ],
    concatenateModules: config.build.concatenateModules,
    // moduleIds: 'hashed',
    // splitChunks: {
    //   chunks: 'all', // 需要优化的模块 
    //   // minSize: 30000,         // 生成的块的最小大小（字节单位）
    //   minSize: {
    //     javascript: 50000,
    //     webassembly: 50000
    //   },
    //   minChunks: 1, // 分割前必须共享模块的最小块数
    //   // maxSize: 0,
    //   maxSize: {
    //     javascript: 200000,
    //     webassembly: 500000
    //   },
    //   maxAsyncRequests: 8, // 按需加载时的最大并行请求数
    //   maxInitialRequests: 8, // 入口点处的最大并行请求数
    //   cacheGroups: { // 缓存组可以继承/覆盖任何选项
    //     // 相同代码提取
    //     // common: {
    //     //     name:'common',
    //     //     chunks: 'async',   // 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all
    //     //     minChunks: 2,   // 模块引用两次以上的抽到 common 中
    //     //     priority: -20
    //     // },
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'async', // 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all
    //       priority: -10
    //     },
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'async',
    //       enforce: true
    //     }
    //   }
    // }
  };
  return optimization;
};

// 模块
const modulesConfig = () => {
  const modules = {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: createLoaders(['css', 'postcss', 'sass'], true)
      },
      {
        test: /\.less$/,
        use: createLoaders(['css', 'postcss', 'less'], true)
      }
    ]
  };
  return modules;
};

// 性能
const performanceConfig = () => {
  const performance = {
    // 创建超过400kb 警告
    hints: config.build.hints,
    maxEntrypointSize: config.build.maxEntrypointSize,
    maxAssetSize: config.build.maxAssetSize,
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  };

  return performance;
};

const webpackProdConf = {
  mode: config.build.mode,
  devtool: config.build.devtool,
  entry,
  output: outputConfig(),
  plugins: pluginsConfig(),
  optimization: optimizationConfig(),
  module: modulesConfig(),
  // 性能提示
  performance: performanceConfig()
};

// 合并 webpack 配置文件
const webpackConfig = merge({ mode: 'production' }, webpackBaseConf, webpackProdConf);

module.exports = webpackConfig;
