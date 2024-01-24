# 兜底图
图片加载中或加载失败的兜底图片。


### 在原图片组件基础上，增加了对京东云图片质量压缩处理，减少图片大小，提高页面加载性能。图片质量压缩参数参考文档：[京东图片系统使用说明文档](http://st.jd.local/doc/jd-image.pdf)

## 引入

```javascript
import Vue from 'vue'
import ImageCompress  from '@ueip/gear-vue/lib/image-compress'
import '@ueip/gear-vue/lib/image-compress/index.css'

Vue.use(ImageCompress)

// joyer
import  {ImageCompress}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript
<!--  -->
<template>
  <div class="gear-image-compress-box">
    <p>显示默认占位图</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="imgUrl"></gear-image-compress>
    <p>不显示默认占位图</p>
    <gear-image-compress class="gear-img-style" :src="imgUrl"></gear-image-compress>
    <p>图片背景</p>
    <gear-image-compress class="gear-img-style" :src="imgUrl" type="bg" @load="loadFn" @error="errorFn">
      <div>这里是内容部分...</div>
      <div>这里是内容部分...</div>
      <div>这里是内容部分...</div>
    </gear-image-compress>
    <p>默认降质70, 大小48.7kb</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="imgUrl" quality="70"></gear-image-compress>
    <p>降质：50，大小37.2kb （在不影响清晰度的情况下可以适当调整降质参数）</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="imgUrl" quality="50"></gear-image-compress>
    <p>缩放: 10x560</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="imgUrl" scale="400x560"></gear-image-compress>
    <p>cover</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="imgUrl" type="bg" fit="cover"></gear-image-compress>
     <p>失败（显示默认图片）</p>
    <gear-image-compress class="gear-img-style" :show-default-icon="true" :src="errImgUrl"></gear-image-compress>
    <p>失败（不显示默认图片）</p>
    <gear-image-compress class="gear-img-style" :src="errImgUrl"></gear-image-compress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: '',
      errImgUrl: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.imgUrl = 'https://img14.360buyimg.com/imagetools/jfs/t1/93533/30/24191/494733/62273b9cEf48fc7a6/8b49fd035fbfd09f.jpg';
      this.errImgUrl = 'asdasd';
    }, 3000);
  }
};
</script>

<style lang='scss' scoped>
.gear-image-compress-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gear-img-style {
  width: 10rem;
  height: 8rem;
  font-size: 1rem;
}
p {
  border: none;
}
</style>
```

## props

| 字段              | 说明                                                         | 类型      | 默认值   |
| --------------- | ---------------------------------------------------------- | ------- | ----- |
| src             | 图片的url 同原生img的src属性一样                                      | string  |       |
| showDefaultIcon | 是否显示默认兜底图片,默认不显示。推荐商品/feed流图片设置显示兜底图                       | boolean | false |
| quality         | 图片降质参数，1-99以内整数                                            | number  | 70    |
| scale           | 图片缩放参数，格式 宽x高 如：200x200                                    | string  |       |
| type            | 图片类型，值为 'src'和'bg', src表示img标签的src属性，bg表示普通标签的background属性 | string  | 'src' |
| fit             | 图片的background-size属性值，type字段为'src'时不用传                     | string  |       |

## method

| 事件名   | 说明      | 参数        |
| ----- | ------- | --------- |
| load  | load事件  | e(原生事件对象) |
| error | error事件 | e(原生事件对象) |