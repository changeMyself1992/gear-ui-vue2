# 字体引用

项目中常用字体使用方法。

## 一、字体使用

数字：新京东金融数字体

```css
// css 引入字体 直接使用
// 粗体
@font-face {
  font-family: 'JR-Bold';
  src: url('https://storage.360buyimg.com/animate-assets/font/JR-Bold.otf');
}

// 中粗
@font-face {
  font-family: 'JR-Medium';
  src: url('https://storage.360buyimg.com/animate-assets/font/JR-Medium.otf');
}

// 常规
@font-face {
  font-family: 'JR-Regular';
  src: url('https://storage.360buyimg.com/animate-assets/font/JR-Regular.otf');
}
```

汉字：苹方字体

```css
// css 直接引用默认字体
font-family: 'PingFangSC';
```

特殊字体：[夸克平台生成]([夸克 | 设计资产平台](https://quark.jd.com/font/generate))

针对需要特殊化的字体进行转换生成字体包

![font-1](https://img10.360buyimg.com/imagetools/jfs/t1/108216/9/38450/553374/646752beF1145f1aa/41e378f59d457fbf.png)

复制代码，在项目中使用即可

![font-2](https://img14.360buyimg.com/imagetools/jfs/t1/192855/19/32437/672728/646752beF80324b92/745dce96f5cf2c04.png)