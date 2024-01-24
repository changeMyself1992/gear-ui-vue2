# 基础组件库共建方案

#### 背景：为了更好的提升基础组件库的使用率，提高日常编码效率，完善组件功能与质量，特制定共建编码方案。

## 一、组件库架构图

![](https://img13.360buyimg.com/imagetools/jfs/t1/122534/12/22554/219281/643f86edF25722fb9/b9f2438325c8983a.png)

## 二、组件共建标准与流程

![flowsheet](https://img12.360buyimg.com/imagetools/jfs/t1/122092/22/33359/268623/646c59ecF840b9637/b264c5ad7f161286.png)

#### 1.	组件共建均需要经过与设计沟通，并出具UI共建组件功能

#### 2.	组件开发中严格遵循 eslint 格式开发，并切加好关键注释

#### 3.	组件开发遵循独立原则，尽可能最小化防止代码冲突，共建组件不可干扰其他组件，组件要绝对独立包括一些方法抽离也都归属于自己的组件内部

#### 4.	组件开发后需经过严格测试后可提交PR审核后发版

#### 5.	严格执行整体回归，验收后打包发版

## 三、共建方法详解

#### 1.	fork 仓库到本地（仓库地址URL：http://xingyun.jd.com/codingRoot/growth-private/gear-ui-doc/）

![frok-1](https://img11.360buyimg.com/imagetools/jfs/t1/189771/19/34032/582387/64658c00Fe6fdf5eb/f4311a3771f86698.png)

#### 2.	clone （fork 后的本地仓库）指定分支（dev-join）进行开发

![fork-2](https://img10.360buyimg.com/imagetools/jfs/t1/148879/25/33496/614939/64658cfaF19d95548/914b3fc6155a252b.png)

#### 3.	执行命令创建属于自己的组件，填写内容进入组件开发；

```
// 1. 安装依赖
npm install
// 2. 创建新组件
npm run add
```

#### 创建组件步骤1：

![创建组件1](https://img14.360buyimg.com/imagetools/jfs/t1/106882/2/35113/112117/645a43fbFc474eecf/a2d14b276ea88881.png)

#### 创建组件步骤2：

![创建组件2](https://img10.360buyimg.com/imagetools/jfs/t1/114254/24/31534/136586/645a43fbF807ccc2f/9b7a249aee21ba46.png)

#### 创建组件步骤3：

![创建组件3](https://img13.360buyimg.com/imagetools/jfs/t1/164915/4/34611/133809/645a43fbFf72bdea9/28b69bfd79d6dc4c.png)

#### 创建组件步骤4：（如需要增加分类，联系erp：jinlaiqiang）

![创建组件4](https://img10.360buyimg.com/imagetools/jfs/t1/196989/20/34221/169590/645a43fbFb4647f9c/66fa6143f411e3cf.png)

#### 创建组件步骤5：

![创建组件5](https://img11.360buyimg.com/imagetools/jfs/t1/64038/32/20068/153711/645a43fbF6110987f/5126ae1d4728a2de.png)

#### 创建组件步骤6

![创建组件6](https://img13.360buyimg.com/imagetools/jfs/t1/197963/19/32785/671675/645a454cF5c6b2d3a/426a7ce2aab06df5.png)

#### 4.	进行开发；

```
// 1.	依赖安装
npm install

// 2. 本地启动项目，
// 配置host: 127.0.0.1	dev.jr.jd.com
npm run dev:md

// 3. 组件库文档实例网站构建
npm run build

// 4. 组件构建
npm run build:comp // webpack build 配置
npm run rollup // rollup build 配置

```

#### 5.	代码提交：

#### 本项目采用严格管理模式，把控提交 commit 信息以及代表规范，eslint 规范详见配置

#### 请提前在vscode 装好 eslint 插件

#### commit 提交信息详见 commitlint.config.js

```
// 1. 代码提交到自己的远程分支；
git add .
git commit -m"feat: xxxxx"
git push origin 自己的分支
```

#### 用 commitizen 规范代码提交，更加简洁轻便

```
// 全局安装 commitizen ，必须是全局安装，否则无法执行插件的命令
npm install commitizen -g
```

#### 通过命令使用 commitizen 插件

```
// 选择提交文件
git add .
// 使用 git cz 命令提交代码
git cz
```

#### 步骤1：选择提交类型

![步骤1](https://img11.360buyimg.com/imagetools/jfs/t1/88900/20/35519/175706/645a4099F5b9af0c9/c2a596db6c0ac70b.png)

#### 步骤2：填写提交描述（必填）

![步骤2](https://img14.360buyimg.com/imagetools/jfs/t1/104539/13/35786/137965/645a4099Fcae95541/1fa2f8bcc5d96846.png)

#### 步骤3：确认提交信息

![步骤3](https://img12.360buyimg.com/imagetools/jfs/t1/89229/14/21721/162812/645a4099F1a88d191/c1ab8e201d6715e4.png)

#### 步骤4：commitlint 校验过程

![步骤4](https://img14.360buyimg.com/imagetools/jfs/t1/115779/23/37850/266003/645a4099F5e6947ae/a2c18713d33913f6.png)

### 步骤5：git push 远程分支

![步骤5](https://img10.360buyimg.com/imagetools/jfs/t1/543/12/22378/270082/645a4099F43b9b13b/d2ef095ade23248c.png)

### 步骤6：git提交完成

![步骤6](https://img10.360buyimg.com/imagetools/jfs/t1/157672/24/32008/340585/645a4099Fbb418b03/21d63f1e57cf1611.png)

#### 6.	创建合并分支PR

#### 步骤1：先同步源项目的最新更新

```
// 源项目是指，fork前的项目的源项目（git@coding.jd.com:growth-private/gear-ui-doc.git）
// 1.	查看项目远程仓库配置，如果没有源项目地址则新增
git remote -v
// 2.	添加源项目地址
git remote add originFork git@coding.jd.com:growth-private/gear-ui-doc.git
// 3. 确认是否添加成功
git remote -v
// 4.	获取源项目的更新
git fetch originFork
// 5.	查看所有分支
git branch -a
// 6. 合并 originFork/master 分支的更新内容到本地 master 分支或本地其他分支
git merge originFork/master
// 7. 目前仅仅将 fork 源仓库更新到了本地仓库，还需要向远程仓库 push 一次
git push origin master (或其他分支)
```

![fork-5](https://img12.360buyimg.com/imagetools/jfs/t1/214351/13/30809/282412/646c282dF9a4b56d9/844b6e6a4b40b67f.png)

#### 步骤2：git 创建 PR(Pull Request)

![PR-1](https://img14.360buyimg.com/imagetools/jfs/t1/95116/14/34650/397097/6461e6c2F67c72a88/04cea21822c6af35.png)

#### 步骤3：选择目标分支与源分支

![PR-2](https://img14.360buyimg.com/imagetools/jfs/t1/91493/31/35111/470653/6461e6c3F256d9394/a7e501cbf15e0b73.png)

#### 步骤4：提交 PR 请求

![PR-3](https://img14.360buyimg.com/imagetools/jfs/t1/124516/26/32912/609898/6461e6c3Fc9d14a2a/29938837a8851782.png)



## 四、未来规划

#### 1.	md 转 html plugin 更改为 loader plugin，解决两次编译问题。

#### 2.	增加 vite 调试工具，提高开发效率。
