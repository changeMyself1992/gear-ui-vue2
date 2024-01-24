const mdtohtml = require('../scripts/mdToVue');
const isDev = process.env.NODE_ENV === 'development';

module.exports = [
  new mdtohtml({
    entry: './src/packages',
    output: './sites/doc/view/',
    // template: './doc-site/template.html',
    nav: 'left',
    needCode: true,
    isbuild: isDev,
    watch: isDev,
    hasMarkList: false,
    jumpRepository: true
  }),
  new mdtohtml({
    entry: './docs',
    output: './sites/doc/page/',
    // template: './doc-site/template.html',
    nav: 'left',
    needCode: false,
    isbuild: isDev,
    watch: isDev,
    hasMarkList: true,
    jumpRepository: false
  })
];
