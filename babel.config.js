const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        browsers: ['safari >= 7', 'ie >= 9', 'last 6 versions']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  [
    '@vue/babel-preset-jsx',
    {
      functional: false
    }
  ],
  [
    '@babel/preset-typescript' // 用来编译ts文件
  ]
  // ["es2015", { "modules": false }]
];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-syntax-dynamic-import',
  'istanbul',
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ]
];

if (process.env.DOC_TYPE === 'true') {
  presets[0][1].modules = 'umd';
}

module.exports = { presets, plugins };
