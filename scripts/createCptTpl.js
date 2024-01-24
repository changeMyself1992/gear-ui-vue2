const conf = require('../src/config.json');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const copy = require('copy');

let sorts = [...conf.sorts];

let newCpt = {};

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Demo英文名(每个单词的首字母都大写，如Demo)：',
        validate(value) {
          const repeat = conf.packages.find(item => {
            return item.name === value;
          });
          if (repeat) {
            return '该Demo名已存在！';
          }
          const pass = value && value.match(/^[A-Z]/);
          if (pass) {
            return true;
          }
          return '不能为空，且每个单词的首字母都要大写，如Demo';
        }
      },
      {
        type: 'input',
        name: 'chnName',
        message: 'Demo中文名(十个字以内)：',
        validate(value) {
          const pass = value && value.length <= 10;
          if (pass) {
            return true;
          }
          return '不能为空，且不能超过十个字符';
        }
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Demo描述(五十个字以内)：'
      },
      {
        type: 'rawlist',
        name: 'sort',
        message: '请选择Demo分类(输入编号)：',
        choices: sorts,
        validate(value) {
          const pass = /^[1-7]$/.test(value);
          if (pass) {
            return true;
          }
          return '输入有误！请输入选项前编号';
        }
      },
      {
        type: 'input',
        name: 'author',
        message: 'Demo作者ERP:'
      }
    ])
    .then(answers => {
      answers.sort = String(sorts.indexOf(answers.sort));
      newCpt = Object.assign(newCpt, answers);
      newCpt.showDemo = true;
      createDir();
    });
}

function createVue() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = `<template>
    <div class="ug-${nameLc}"></div>
</template>
<script>
export default {
    name:'ug-${nameLc}',
    props: {
    },
    data() {
        return {};
    },
    methods: {
    }
}
</script>`;

    const content2 = `<template>
    <div class="ug-${nameLc}"></div>
</template>
<script>
import defaultPorps from './_props';

export default {
  name:'ug-${nameLc}',
  props: {
  },
  data() {
    return { ...defaultPorps };
  },
  watch: {
    visible(val) {
      if (val) {
        this.show();
      }
    }
  },
  methods: {
    show(){},
    hide(){}
  }
}
</script>`;

    if (newCpt.type == 'method') {
      content = content2;
    }

    const dirPath = path.join(__dirname, `../src/packages/${nameLc}`);
    const filePath = path.join(dirPath, `${nameLc}.vue`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`生成${newCpt.name}.vue文件成功`);
    });
  });
}

function createDir() {
  const nameLc = newCpt.name.toLowerCase();
  const destPath = path.join(__dirname, '../src/packages/' + nameLc);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  copy(path.join(__dirname, './__template__/**.*'), destPath, function(err, file) {
    if (err) {
      console.log('拷贝__template__目录失败！');
    }
    createNew();
  });
}

function addToPackageJson() {
  return new Promise((resolve, reject) => {
    conf.packages.push(newCpt);
    const dirPath = path.join(__dirname, `../src/`);
    const filePath = path.join(dirPath, `config.json`);
    fs.writeFile(filePath, JSON.stringify(conf, null, 2), err => {
      if (err) throw err;
      resolve(`修改config.json文件成功`);
    });
  });
}

function createNew() {
  addToPackageJson().then(() => {
    console.log('Demo模板生成完毕，请开始你的表演~');
    process.exit();
  });
}

init();
