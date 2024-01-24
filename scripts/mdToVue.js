/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
const nodeFilelist = require('node-filelist');
const debounce = require('lodash.debounce');
const CHANGE_DELAY = 300;
let { hashElement } = require('folder-hash');
let { version } = require('../package.json');

let marked = require('marked');
let contrast = require('./contrast');
let rimraf = require('rimraf');
if (!marked) {
  console.log('you need npm i marked -D!');
}
class mdVue {
  constructor(options) {
    let defaultSetting = {
      watch: true,
      isbuild: true,
      hasMarkList: true, // 文档是否要有锚点跳转功能
      jumpRepository: true// 是否有跳转仓库的功能
    };
    this.options = Object.assign(defaultSetting, options);
    this.rendererMd = new marked.Renderer();
    this.marked = marked;

    this.run();

    if (this.options.watch) {
      this.startWatcher();
    }
  }
  startWatcher() {
    const watcher = chokidar.watch(path.join(this.options.entry, '/**/*.md'), {});
    watcher.on('ready', () => {
      watcher.on(
        'all',
        debounce(() => {
          console.log('********************run md to Vue *********************');
          this.run();
        }, CHANGE_DELAY)
      );
    });
  }
  run() {
    let _that = this;
    this.Articlehead = '';
    this.Articleheadcount = 0;
    this.needHandleFiles = null;
    this.cachePath = path.join('./cache', this.options.entry.split(path.sep).pop() + '.cache');

    this.codeHandle();
    this.headHandle();
    this.markHandle();

    this.checkSelf().then(res => {
      // 检查要编译的文件
      let ct = new contrast({
        entry: this.options.entry
      })
        .run()
        .then(res => {
          _that.needHandleFiles = res;
          _that.ishasOutFile(_that.options.output).then(res => {
            // console.log("输出路径是否可用：", _that.options.output, res)
            _that.star();
          });
        });
    });
  }
  checkSelf() {
    let _that = this;
    return new Promise((resolve, reject) => {
      new contrast({
        entry: path.join(__dirname, 'mdToVue.js'),
        include: ['*.js']
      })
        .run()
        .then(res => {
          if (JSON.stringify(res) != '{}') {
            // 有变动清除当前entry缓存,重新渲染
            rimraf(_that.cachePath, err => {
              console.log(err);
              resolve();
            });
          } else {
            resolve();
          }
        });
    });
  }
  apply() { }
  star() {
    let _that = this;
    hashElement(_that.options.entry, {
      folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },
      files: { include: ['README.md'] },
      matchBasename: true
    }).then(hash => {
      console.log("开始在输入路径查找md文件:", _that.options.entry)
      nodeFilelist.read([_that.options.entry], { ext: 'md' }, res => {
        // console.log(`${_that.options.entry} 读取结果:`, res)
        res.map((item, index) => {
          if (index == 30) {}
          let fileSplits = item.path.split(path.sep);
          let fileName = fileSplits.pop();
          if (_that.isDoc(fileName)) {
            fileName = fileSplits.pop();
          } else {
            fileName = fileName.replace(/\.md/, '');
          }
          if (_that.needHandleFiles[fileName]) { }
          _that.read(item.path).then(res => {
            // console.log("文件流读md文件：", res)
            let html = _that.marked(res);
            html = this.markdownCardWrapper(html)
            // console.log("marked插件处理过后写文件：", html)
            // console.log(` 写文件路径：${_that.options.output}`)
            _that.write({
              outsrc: _that.options.output,
              name: fileName + '.vue',
              html: html
            });
          });
        });


      });
    });
  }
  isDoc(name) {
    return name == 'README.md' ? true : false;
  }
  read(src) {
    return new Promise((resolve, reject) => {
      fs.readFile(src, 'utf-8', (err, data) => {
        resolve(data);
      });
    });
  }
  write(param) {
    let _that = this;
    return new Promise((resolve, reject) => {
      let outPath = path.join(param.outsrc, param.name);
      const link = `<el-link 
                      class="gitLink"
                      type="primary"
                      href="http://xingyun.jd.com/codingRoot/growth-private/gear-ui-doc/" 
                      target="_blank"
                      clstag="G015|129798"
                    >
                      打开 Git 仓库 <div class="gitIcon"></div>
                    </el-link>`
      const docUpdateTime = `<div class="updateTime">最后更新时间：{{ $route && $route.meta && $route.meta.docUpdateTime }}</div>`
      let contexts = `
          <template>
              <div>
                  ${param.html}
                  ${_that.options.hasMarkList ? `<ul class="markList">${_that.Articlehead}</ul>` : ''}
                  <div class="footInfoBox">
                    ${ param.name != 'update-log.vue' ? docUpdateTime : ''}
                    ${_that.options.jumpRepository ? link : ''}
                  </div>
                  <nut-backtop :right="50" :bottom="50"></nut-backtop>
              </div>
          </template>
          <script>
              import root from '../root.js';
              export default {
                  mixins: [root]
              }
          </script>
      `;
      _that.Articlehead = '';
      _that.Articleheadcount = 0;
      fs.writeFile(outPath, contexts, 'utf8', (err, res) => { });
    });
  }
  ishasOutFile(outPath) {
    return new Promise((resolve, reject) => {
      fs.stat(outPath, (err, res) => {
        if (err) {
          fs.mkdir(outPath, err => {
            if (err) {
              reject(err);
            } else {
              resolve(true);
            }
          });
        } else {
          resolve(true);
        }
      });
    });
  }
  headHandle() {
    let _that = this;
    _that.rendererMd.heading = function (text, level) {
      // console.log("level：", level)
      // console.log("text", text)
      let normal = `<h${level}>${text}</h${level}>`;
      if (level == 2) {
        _that.Articleheadcount++;
        const link = `<el-link 
                        class="gitLink"
                        type="primary"
                        href="http://xingyun.jd.com/codingRoot/growth-private/gear-ui-doc/" 
                        target="_blank"
                        clstag="G015|129798"
                      >
                        打开 Git 仓库 <div class="gitIcon"></div>
                      </el-link>`

        const h2 = `<h2 ${_that.options.hasMarkList ? `id="head${_that.Articleheadcount}"` : ''} ${_that.options.jumpRepository && _that.Articleheadcount === 1 ? `class="h2box"` : ''}>
                      ${text}
                      ${_that.options.jumpRepository && _that.Articleheadcount === 1 ? link : ''}
                    </h2>`

        // 把锚点跳转 li标签，拼出来
        if (_that.options.hasMarkList) {
          _that.Articlehead +=
            `<li :class="['level${_that.Articleheadcount}',levalcur===${_that.Articleheadcount} && 'cur']" @click="leavelchose(${_that.Articleheadcount})" >
              <a href="#head${_that.Articleheadcount}">${text}</a>
           </li>`
        }

        return h2
      }
      return normal
    };
  }
  codeHandle() {
    this.rendererMd.code = function (code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];
      var str = ''
      if (this.options.highlight) {
        var out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out.value;
          str = out.code;
        }
      }
      debugger
      if (!lang) {
        return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
      }
      if (lang === 'html') {
        code = code.replace(/@latest/g, '@' + version);
      }

      code = code.replace(/{/gi, '<span>{</span>').replace(/}/gi, '<span>}</span>');

      return (
        `<hide str="${encodeURIComponent(str)}}"><pre class="prettyprint"><span class="lang">` +
        lang +
        '</span><div class="code-wrapper"><code class="' +
        this.options.langPrefix +
        escape(lang, true) +
        '">' +
        (escaped ? code : escape(code, true)) +
        '</code></div></pre></hide>\n'
      );
    };
  }

  markdownCardWrapper(htmlCode) {
    // 设计要求更新日志要定制样式...........
    if (htmlCode.includes('<h1>更新日志</h1>')) {
      const group = htmlCode.replace(/<h3/g, ':::<h3').split(':::');
      let htmlString = group.map((fragment) => {
        if (fragment.indexOf('<h3') !== -1) {
          const insertStart = '<div class="left-box">';
          const insertEnd = '</div>';
          const startIndex = fragment.indexOf('<h3>');
          const endIndex = fragment.indexOf('</p>') + '</p>'.length;
          const newFragment = fragment.slice(0, startIndex) + insertStart + fragment.slice(startIndex, endIndex) + insertEnd + fragment.slice(endIndex);
          return `<div class="gear-doc-card">${newFragment}</div>`;
        }
        return fragment;
      }).join('');
      return htmlString
    }
    return htmlCode
  }



  markHandle() {
    let _that = this;
    this.marked.setOptions({
      renderer: _that.rendererMd,
      highlight: function (code) {
        // return require('highlight.js').highlightAuto(code).value;
        return require('highlight.js').highlight(code, { language: 'javascript' });
      },
      tables: true
    });
  }
}
module.exports = mdVue;
