# 图片组件（默认有占位图）

## 引入

```javascript
import Vue from 'vue'
import Image from '@ueip/gear-vue/lib/image'
import '@ueip/gear-vue/lib/image/index.css'

Vue.use(Image)
```

## vue用法

```javascript

<!--  -->
<template>
  <div class="gear-image-box">
    <p>px</p>
    <gear-image :src="imgUrl" width="100" height="100"></gear-image>
    <p>vw</p>
    <gear-image :src="imgUrl" width="20vw" height="20vw"></gear-image>
    <p>圆角</p>
    <gear-image :src="imgUrl" width="100" height="100" radius="50"></gear-image>
    <p>contain</p>
    <gear-image :src="imgUrl" width="100" height="100" fit="contain"></gear-image>
    <p>cover</p>
    <gear-image :src="imgUrl" width="100" height="100" fit="cover"></gear-image>
    <p>fill</p>
    <gear-image :src="imgUrl" width="100" height="100" fit="fill"></gear-image>
    <p>none</p>
    <gear-image :src="imgUrl" width="100" height="100" fit="none"></gear-image>
    <p>alt（显示失败文案）</p>
    <gear-image :src="errImgUrl" width="100" height="100" alt="文案"></gear-image>

    <p>alt（不显示失败文案）</p>
    <gear-image :src="errImgUrl" width="100" height="100" alt=""></gear-image>
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
      this.imgUrl = 'https://img12.360buyimg.com/imagetools/jfs/t1/223675/24/1029/62329/61c31896Eeb211b75/17b64870f391b6d1.jpg';
      this.errImgUrl = 'asdasd';
    }, 3000);
  }
};
</script>

<style lang='scss' scoped>
.gear-image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  border: none;
}
</style>


```

## props

| 字段     | 说明                    | 类型             | 默认值    |
| ------ | --------------------- | -------------- | ------ |
| src    | 图片的url 同原生img的src属性一样 | string         |        |
| width  | 图片的宽度                 | string /number |        |
| height | 图片的高度                 | string /number |        |
| fit    | 图片的object-fit         | string         |        |
| radius | 图片的圆角                 | string /number |        |
| alt    | 图片的alt                | string         | '加载失败' |

## method

| 事件名   | 说明      | 参数        |
| ----- | ------- | --------- |
| load  | load事件  | e(原生事件对象) |
| error | error事件 | e(原生事件对象) |