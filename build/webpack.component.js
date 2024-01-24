const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
var nodeExternals = require('webpack-node-externals');
// 提取 css 到单独的文件中，为每个包含 css 的 js 文件创建一个 css 文件。
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 引入项目文件属性
const config = require('../config/webpack.config');
const {
  initNodeEnv,
  createLoader,
  createLoaders,
  isDir
} = require('./utils');

// 获取所有组件入口
const packagesEnry = {};
const dir = path.join(__dirname, '../src/packages/');
const files = fs.readdirSync(dir);
const targetPath = path.join(__dirname, '../lib/');

files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    packagesEnry[file] = `./src/packages/${file}/index`
  }
})

packagesEnry.gear = path.resolve(__dirname, '../src/index.js');
// console.log(packagesEnry);

// 初始化 node Env
initNodeEnv()

// 输出
const outputConfig = () => {
  const output = {
    path: targetPath,
    filename: ({ chunk }) => {
      // console.log('~~~~~~~~~', chunkData.chunk.name);
      if (chunk.name === 'gear') {
        return 'index.js'
      } else {
        return '[name]/index.js'
      }
    },
    library: 'gear-vue',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: false
  };

  return output;
};

// plugins
const pluginsConfig = () => {
  const plugins = [
    new ProgressBarPlugin({
      format: `${
        chalk.blue.bold('  构建中 [:bar] ') + chalk.green.bold(':percent')
      } (:elapsed seconds)`,
      clear: false,
      width: 100
    }),
    new webpack.DefinePlugin({
      // 'process.env': config.dev.env,
      'process.env.VUE_APP_BUILD_ENV': JSON.stringify(process.env.VUE_APP_BUILD_ENV)
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      experimentalUseImportModule: true,
      // filename: '[name].[chunkhash:8].css',
      // chunkFilename: 'styles/[id].[chunkhash:8].css',
      // 移除 Order 警告
      ignoreOrder: true,
      filename: ({ chunk }) => {
        if (chunk.name === 'gear') {
          return 'index.css'
        } else {
          return '[name]/index.css'
        }
      }
    })
  ];

  return plugins;
};

/**
 * 优化配置【构建组件不需要优化，方便用户修改源码】
 * @returns 
 */
const optimizationConfig = () => {
  const optimization = {
    minimize: false,
  };
  return optimization;
};

// 模块
const modulesConfig = () => ({
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
      use: createLoader('babel')
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
      exclude: /node_modules/,
      include: [
        /sites\/demo/, /sites\/doc/
      ],
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[hash][ext][query]'
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: createLoaders(['css', 'postcss', 'sass'], true)
    },
    {
      test: /\.less$/,
      use: createLoaders(['css', 'postcss', 'less'], true)
    }
  ]
})

// 解析
const resolveConfig = () => ({
  modules: ['node_modules'],
  extensions: ['.js', '.jsx', '.vue', '.json', '.ts', '.tsx', '.css', '.scss', '.less'],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '..', 'src'),
    '@@': path.resolve(__dirname, '..', 'joyer-components')
  }
})

// 模块
// const modulesConfig = () => {
//   const modules = {
//     rules: [
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: createLoaders(['css', 'postcss', 'sass'], true)
//       },
//       {
//         test: /\.less$/,
//         use: createLoaders(['css', 'postcss', 'less'], true)
//       }
//     ]
//   };
//   return modules;
// };

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
  // devtool: config.build.devtool,
  entry: packagesEnry,
  output: outputConfig(),
  externalsPresets: { node: true }, // TODO: webpack 5 为了忽略诸如path、fs等内置模块。
  externals: [ nodeExternals() ], // TODO: 以忽略节点\模块文件夹中的所有模块
  plugins: pluginsConfig(),
  resolve: resolveConfig(),
  optimization: optimizationConfig(),
  module: modulesConfig(),
  // 性能提示
  // performance: performanceConfig(),
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true
  }
};

module.exports = webpackProdConf;