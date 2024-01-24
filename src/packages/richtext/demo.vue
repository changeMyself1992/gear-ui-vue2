<template>
  <div class="richtext-demo">
    <div style="margin-top: 20px">
      <gear-richtext class="desc" :richData="richData" />
    </div>

    <div style="margin-top: 20px">
      <gear-richtext class="desc1" :richData="richData1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-richtext',
  data() {
    return {
      richData: {
        message: '这是一段富文本',
        richMessage: [
          {
            color: 'rgba(0,0,0,0.8)',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 3,
            click: false
          },
          {
            color: '#43BE18',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 4,
            end: 6,
            callback: () => {
              this.clickHandle('点击测试1');
            }
          }
        ]
      },
      richData1: {
        message: '加企微助我得*津贴',
        richMessage: [
          {
            color: 'rgba(0,0,0,0.8)',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            start: 0,
            end: 5,
            click: false
          },

          {
            textImg: 'https://img13.360buyimg.com/imagetools/jfs/t1/106964/32/27962/74594/625fbc21E0562ff76/c7d270a0c80aa821.jpg',
            width: '40px',
            height: 'auto',

            start: 6,
            end: 6,
            click: true,
            callback: () => {
              this.clickHandle('点击测试2');
            }
          },

          {
            color: '#43BE18',
            fontSize: '14px',
            fontFamily: 'PingFangSC-Regular',
            fontWeight: 'normal',

            click: true,
            start: 7,
            end: 8,
            callback: () => {
              this.clickHandle('点击测试3');
            }
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    clickHandle(text) {
      this.$toast(text);
    }
  }
};
</script>

<style scoped>
.richtext-demo {
  padding: 20px 0;
}
.desc {
  text-align: center;
}
.desc1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
