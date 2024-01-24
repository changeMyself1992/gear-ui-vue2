const MarkdownIt = require('markdown-it');
const highlight = require('./highlight');

const parser = new MarkdownIt({
  html: true,
  highlight
});

// 覆盖官方得code渲染规则
const fence = parser.renderer.rules.fence
parser.renderer.rules['fence'] = (...args) => {
  const [tokens, idx] = args
  const token = tokens[idx]
  // console.log("idx::", idx)
  // console.log("token:::", token)
  let rawCode = fence(...args)
  rawCode = rawCode.replace(/{/gi, '<span>{</span>').replace(/}/gi, '<span>}</span>');
  // console.log("rawCode:::", rawCode)
  return `<hide str="${encodeURIComponent(token.content)}">${rawCode}</hide>`
}
module.exports = parser;


