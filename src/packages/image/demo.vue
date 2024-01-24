<!--  -->
<template>
  <div class="gear-image-box">
    <div>
      <p>px</p>
      <gear-image :src="imgUrl" width="100" height="100"></gear-image>
    </div>
    <div>
      <p>vw</p>
      <gear-image :src="imgUrl" width="20vw" height="20vw"></gear-image>
    </div>
    <div>
      <p>圆角</p>
      <gear-image :src="imgUrl" width="100" height="100" radius="50"></gear-image>
    </div>
    <div>
      <p>contain</p>
      <gear-image :src="imgUrl" width="100" height="100" fit="contain"></gear-image>
    </div>
    <div>
      <p>cover</p>
      <gear-image :src="imgUrl" width="100" height="100" fit="cover"></gear-image>
    </div>
    <div>
      <p>fill</p>
      <gear-image :src="imgUrl" width="100" height="100" fit="fill"></gear-image>
    </div>
    <div>
      <p>none</p>
      <gear-image :src="imgUrl" width="100" height="100" fit="none"></gear-image>
    </div>

    <!-- 
      •	任何大小的默认图，图形切图大小固定226*226px（使用3倍切图）
      •	当图片显示区域最小边长≥226px 无缩放，默认图在图片显示面积中居中显示
      •	当图片显示区域最小边长＜226px 对默认图缩放至与最小边长一致即可，默认图在图片显示面积中居中显示 -->
    <gear-list class="item" title="默认图- ≥226px 无缩放">
      <div class="box">
        <gear-image :src="errImgUrl" width="100%" height="113px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>

        <gear-image :src="errImgUrl" width="49%" height="134px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="49%" height="134px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>

        <gear-image :src="errImgUrl" width="113px" height="113px" alt="" style="margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="113px" height="113px" alt="" style="margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="113px" height="113px" alt="" style="margin-bottom: 20px"></gear-image>
      </div>
    </gear-list>

    <gear-list class="item" title="默认图- ＜226px 有缩放（根据图形最短的边缩放）">
      <div class="box">
        <gear-image :src="errImgUrl" width="107px" height="64px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="107px" height="64px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="107px" height="64px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>

        <gear-image :src="errImgUrl" width="50px" height="50px" alt="" style="margin-bottom: 20px"></gear-image>
        <gear-image :src="errImgUrl" width="50px" height="50px" alt="" style="margin-bottom: 20px"></gear-image>

        <gear-image :src="errImgUrl" width="219px" height="50px" alt="" style="background-color: pink; margin-bottom: 20px"></gear-image>
      </div>
    </gear-list>
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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px 0 10px;
  overflow: hidden;
  .item {
    width: 100%;
    .box {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
p {
  border: none;
  text-align: center;
}
</style>
