const hljs = require('highlight.js');

module.exports = function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // console.log("代码块字符串::", str)
    // https://github.com/highlightjs/highlight.js/issues/2277

    const value = hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    // console.log("代码块html::", value)
    return `<pre class="prettyprint"><span class="lang">${lang}</span><code>${value}</code></pre>`
  }
  return '';
};
