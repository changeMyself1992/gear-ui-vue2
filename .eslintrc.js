module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-undef': ['off'], // 不能有未定义的变量 (开启后正确的语法会给你报错 export type OverlayProps = {}，根本没法提交代码，要不就在下面globals做变量配置，要不就在变量的地方加注释，这俩个办法接受不了————所以关闭)
    'no-restricted-globals': ['off'], // 此规则允许您指定不想在应用程序中使用的全局变量名称。 (全局Event变量用不了————所以关闭)
    'no-unused-vars': ['off'], // 禁止未使用的变量( 明明导入后使用过的类型，它给你报错....————所以关闭)
    eqeqeq: ['off'],
    'guard-for-in': ['off'],
    'linebreak-style': ['off', 'windows'],
    'no-unused-expressions': ['off'],
    'no-restricted-syntax': ['off'],
    // don"t require .vue extension when importing
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['off'],
    'consistent-return': ['off'],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js']
      }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // custom
    indent: ['error', 2],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1
      }
    ],
    'no-plusplus': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': ['off'],
    'no-else-return': ['off'],
    // 使用分号
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    quotes: ['error', 'single'],
    'no-tabs': 0,
    'no-new': 0,
    'comma-dangle': ['error', 'never'],
    // 要去在函数参数的（ 前面有一个空格
    'space-before-function-paren': ['error', 'never'],
    'no-trailing-spaces': 0,
    'one-var': ['error', 'never'],
    'no-var': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['-', '+']
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true
      }
    }],
    'max-len': ['error', {
      code: 300
    }],
    'no-underscore-dangle': ['off'],
    'no-console': ['off'],
    'no-mixed-operators': ['off'],
    'global-require': ['off'],
    'func-names': ['off'],
    // 数组解构
    'prefer-destructuring': 'off',
    // try catch 中 finally 不能有 return 的问题
    'no-unsafe-finally': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {
        'vue/script-indent': 'off'
      }
    }
  ],
  globals: {
    MPing: 'readonly',
    WebViewJavascriptBridge: 'readonly'
  }
};
