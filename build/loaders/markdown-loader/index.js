const path = require('path');
const loaderUtils = require('loader-utils');// 这个库用来获取传入的参数
const parser = require('./md-parser');

// 设计要求更新日志要定制样式...........
function changeLogHandle(htmlCode) {
  if (htmlCode.includes('<h1>更新日志</h1>')) {
    const group = htmlCode.replace(/<h3/g, ':::<h3').split(':::');
    let htmlString = group.map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        // console.log("fragment::",fragment)
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


function wrapper(content) {
  let htmlCode = changeLogHandle(content);
  // console.log("htmlCode:", htmlCode)
  return `
            <template>
              <section v-once>
                ${htmlCode}
                <ul class="markList"></ul>
                <div class="footInfoBox">
                  <div class="updateTime">最后更新时间：{{ $route && $route.meta && $route.meta.docUpdateTime }}</div>
                  <el-link 
                    v-if="$route && $route.meta && $route.meta.jumpRepository"
                    class="gitLink"
                    type="primary"
                    href="http://xingyun.jd.com/codingRoot/growth-private/gear-ui-doc/" 
                    target="_blank"
                    clstag="G015|129798"
                  >
                    打开 Git 仓库 <div class="gitIcon"></div>
                  </el-link>
                </div>
                <nut-backtop :right="50" :bottom="50"></nut-backtop>
              </section>
            </template>
            <script>
              import root from '@@@/doc/root.js';
              export default {
                mixins: [root]
              }
            </script>
          `;
}

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || {};
  this.cacheable && this.cacheable();

  options = {
    wrapper,
    ...options,
  };
  return options.wrapper.call(this, parser.render(source));
};
