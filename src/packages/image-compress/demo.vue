<template>
  <div class="gear-image-compress-box" clstag="E4P6|126795">
    <!-- 
      •	任何大小的默认图，图形切图大小固定226*226px（使用3倍切图）
      •	当图片显示区域最小边长≥226px 无缩放，默认图在图片显示面积中居中显示
      •	当图片显示区域最小边长＜226px 对默认图缩放至与最小边长一致即可，默认图在图片显示面积中居中显示 -->
    <gear-list class="item" title="≥226px 无缩放" :style="`margin-top: ${px2vw(24)};`">
      <div class="box">
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: 100%; height: ${px2vw(113)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: ${px2vw(173)}; height: ${px2vw(134)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: ${px2vw(173)}; height: ${px2vw(134)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: ${px2vw(113)}; height: ${px2vw(113)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: ${px2vw(113)}; height: ${px2vw(113)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(6)}; width: ${px2vw(113)}; height: ${px2vw(113)}`" :show-default-icon="true" />
      </div>
    </gear-list>

    <gear-list class="item" title="＜226px 有缩放（根据图形最短的边缩放）" :style="`margin-top: ${px2vw(16)};`">
      <div class="box" :style="`padding: ${px2vw(12)}; background-color: #ffffff`">
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(107)}; height: ${px2vw(64)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(107)}; height: ${px2vw(64)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(107)}; height: ${px2vw(64)}`" :show-default-icon="true" />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(50)}; height: ${px2vw(50)}`" :show-default-icon="true" />
        <gear-image-compress
          :src="errImgUrl"
          :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(50)}; height: ${px2vw(50)}; border-radius: ${px2vw(999)}; overflow: hidden`"
          :show-default-icon="true"
        />
        <gear-image-compress :src="errImgUrl" :style="`background-color: #f9f9f9; margin-bottom: ${px2vw(3)}; width: ${px2vw(219)}; height: ${px2vw(50)}`" :show-default-icon="true" />
      </div>
    </gear-list>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';

export default {
  name: 'ImageCompress',
  mixins: [Px2VwMixin],
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
  },
  methods: {
    loadFn(e) {
      console.log('加载成功', e);
    },
    errorFn(e) {
      console.error('出错了', e);
    }
  }
};
</script>

<style lang='scss' scoped>
.gear-image-compress-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12px 20px 12px;
}

.item {
  width: 100%;
  .box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f4f5f7;
  }
}
</style>

<style lang="scss">
/* 为了兼容设计图专门又写的覆盖样式***********start */

.gear-image-compress-box .gear-list-title {
  padding: 0px 0 9px 0;
  line-height: 20px;
}

/* 为了兼容设计图专门又写的覆盖样式***********end */
</style>
