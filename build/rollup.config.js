import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import postcssScss from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import url from 'postcss-url'
import json from '@rollup/plugin-json'
import cssnano from 'cssnano'
import progress from 'rollup-plugin-progress'
import fileSize from 'rollup-plugin-filesize'
import image from '@rollup/plugin-image'
import atImport from 'postcss-import'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import jsx from 'acorn-jsx';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}

const packages = {}
const dir = path.join(__dirname, '../src/packages/')
const files = fs.readdirSync(dir)
files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    packages[file] = fs.existsSync(path.join(absolutePath, 'index.tsx')) ? path.join(absolutePath, 'index.tsx') : `src/packages/${file}/index.js`
  }
})

// 打包总入口
const allEntry = '@ueip/gear-vue.common'
packages[allEntry] = 'src/index.js'

function createRollupConfig(file, name) {
  const config = {

    input: file,
    output: {
      file: name === allEntry ? 'lib/index.js' : `lib/${name}/index.js`,
      format: 'cjs',
      name: name,
      sourcemap: false,
      globals: {
        axios: 'axios',
        vue: 'Vue'
      }
    },
    strictDeprecations: true,
    plugins: [
      typescript(),
      // terser(),
      commonjs({
        include: /node_modules/
      }),
      nodeResolve(),
      vue(),
      babel({
        exclude: 'node_modules/**',
        // runtimeHelpers: true,
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.tsx', '.es6', '.es', '.mjs', '.vue'],
      }),
      json(),
      image(),
      postcss({
        extract: true,
        parser: postcssScss,
        // modules: true,
        plugins: [
          atImport({

            resolve: function (id) {
              if (id.indexOf('~@') == 0) {
                return path.resolve(__dirname, '../src/assets/font/iconfont.css');
              }
              return id;
            },
          }),
          url({
            url: 'inline',
            maxSize: 10
          }),

          autoprefixer({ add: true }),
          cssnano(),

        ]
      }),
      progress(),
      fileSize()
    ],
    external: ['vue', 'lottie-web', 'axios'],
    acornInjectPlugins: [jsx()]
  }
  return config
}

const buildPackages = []
for (const name in packages) {
  const file = packages[name]
  buildPackages.push(createRollupConfig(file, name))
}

export default buildPackages
