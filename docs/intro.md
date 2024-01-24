# 快速上手

## 安装

```javascript
  // npm方式
  // vue版本
  npm install -S @ueip/gear-vue
  // react版本
  npm install -S @ueip/gear-react

  //joyer-cli 方式
  joyer install ueip-gear-vue

```

## 使用说明

### vue版本

全量引入

```javascript
  本地需要安装，axios：^0.21.1，lottie-web：^5.9.6

  //npm
  import Gear from '@ueip/gear-vue';
  import "@ueip/gear-vue/lib/index.css";
  Vue.use(Gear);

  // joyer
  import Gear from '@@/ueip-gear-vue/master/index'
  Vue.use(Gear);
```

按需引入

```javascript
  // 按需引入 npm
  import  PullRefresh  from '@ueip/gear-vue/lib/pull-refresh';
  import "@ueip/gear-vue/lib/pull-refresh/index.css";

  // joyer
  import  {PullRefresh}  from '@@ueip-gear-vue/master/index';
```

使用插件按需引入（npm）

```javascript
  npm install -D babel-plugin-import;

  // 修改babel.config.js
  plugins: [
    ['import', {
      libraryName: '@ueip/gear-vue',
      style: (name) => {
        console.log('name', name)
        return `${name}/index.css`
      }
    }, '@ueip/gear-vue']
  ]

  // 业务组件中使用就无须手动引入css文件了
  import { PullRefresh } from '@ueip/gear-vue';
```

### react版本

全量引入

```javascript
  // 全量引入
  import { PullRefresh } from '@ueip/gear-react';
  // 在App.css
  @import "@ueip/gear-react/lib/index.css";
```

使用插件按需引入

```javascript
  npm install -D babel-plugin-import;
  // 修改babel.config.js
  plugins: [
    ['import', {
      libraryName: '@ueip/gear-react',
      style: (name) => {
        console.log('name', name)
        return `${name}/index.css`
      }
    }, '@ueip/gear-react']
  ]

  // 业务组件中使用就无须手动引入css文件了
  import { PullRefresh } from '@ueip/gear-react';
```

## 适配

### rem适配

postcss.config.js

```javascript
npm install -S amfe-flexible postcss-pxtorem

plugins: {
   'postcss-pxtorem': {
     rootValue ({ file }) {
       return file.indexOf('gear') !== -1 ? 37.5 : 75
     }, 
     propList: ['*'], 
     unitPrecision: 5, // 保留rem小数点多少位
     // selectorBlackList: ['.radius'], 
     mediaQuery: false, // 媒体查询( @media screen 之类的)中不生效
   }
 }
```

### Viewport 布局

postcss.config.js

```javascript
Gear 默认使用 px 作为样式单位，如果需要使用 viewport 单位 (vw, vh, vmin, vmax)，推荐使用 postcss-px-to-viewport 进行转换。

postcss-px-to-viewport 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

PostCSS PostCSS 示例配置
下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

如果是webpack项目，要配置postcss-loader

```javascript
/** px 转 vw, 375 是设置的屏幕宽度,这个方法用设置标签样式的px */
export const px2vw = (px) => `${Number(px / (375 / 100)).toFixed(3)}vw`
这是loader的配置
{
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require("postcss-px-to-viewport")({
                    viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度.
                    viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
                    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
                    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
                    mediaQuery: false, // 允许在媒体查询中转换`px`,
                    exclude: [/[\/|\\]node_modules[\/|\\]/, /[\/|\\]sites[\/|\\]doc/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {}
            }
          ]
        }
```