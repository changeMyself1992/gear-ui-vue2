# 贡献组件

## 1.开发命令

> 开发环境 node 8.12.0 ; joyer 上传 utest

```javascript
  // 新增组件命令
  npm run add
  // 开发
  npm run dev
  // 编译组件
  npm run build
  // 上传doc和demo到utest
  npm run utest
```

## 2.组件目录 src 结构


```javascript
.
├── assets
├── config.json // 在doc和demo页面中显示配置
├── locales // 支持多语言中，一般不用管
├── mixins // js minins，一般不用管
├── packages // 组件目录
├── styles // 用于主题设置，包括scss的mixin和抽象的初始值
└── utils // 公共实用方法
```

## 3.命令“一步”新增组件

```javascript
  npm run add
//  > node scripts/createCptTpl.js

// ? 组件英文名(每个单词的首字母都大写，如TextBox)： UnionBridge
// ? 组件中文名(十个字以内)： 桥文件demo
// ? 组件描述(五十个字以内)： 测试桥文件Demo功能
// ? 请选择组件分类(输入编号)： Joyer基础库
// ? 是否需要DEMO页面? Yes
// ? 组件作者ERP: majun36
// Demo模板生成完毕，请开始你的表演~
```
