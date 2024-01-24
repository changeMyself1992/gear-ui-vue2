<template>
  <div class="demo-searchbar">
    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick" />

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick">
      <template slot="hot">
        <div class="hot1"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案，文案长度如果很长就打打打打打打打打打打打打打打" @click="onClick">
      <template slot="hot">
        <div class="hot1"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20" placeholder="引导搜索的文案，文案长度如果很长就打打打打打打打打打打打打打打" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <gear-searchbar class="marginBottom20 searchbar1" placeholder="引导搜索的文案，文案文案文案文案文案文案文案" @click="onClick">
      <template slot="hot">
        <div class="hot2"></div>
      </template>
    </gear-searchbar>

    <div class="searchbar-box0">
      <gear-searchbar
        placeholder="引导搜索的文案"
        @click="onClick"
        :searchbarStyle="{
          background: '#FFFFFF',
          border: '1px solid #FFFFFF'
        }"
      />

      <gear-searchbar
        placeholder="引导搜索的文案"
        @click="onClick"
        :searchbarStyle="{
          background: '#FFFFFF',
          border: '1px solid #FFFFFF'
        }"
      >
        <template slot="hot">
          <div class="hot1"></div>
        </template>
      </gear-searchbar>
    </div>

    <div class="searchbar-box1">
      <gear-searchbar
        placeholder="搜索股票/板块/指数/ETF"
        @click="onClick"
        :searchbarStyle="{
          background: 'rgba(255,255,255,0.16)',
          border: '1px solid rgba(255,255,255,0.24)'
        }"
        :searchIconStyle="{
          color: 'rgba(255,255,255,0.9)'
        }"
        :placeholderStyle="{
          color: 'rgba(255,255,255,0.8)'
        }"
        :lineStyle="{
          background: 'rgba(255,255,255,0.24)'
        }"
        :textStyle="{
          color: '#FFFFFF'
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-searchbar',
  components: {},
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$toast('搜索框点击，具体功能使用者去实现');
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-searchbar {
  padding: 20px 12px 0 12px;
  min-height: 100vh;
  .marginBottom20 {
    margin-bottom: 20px;
  }
  .hot1 {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background-image: url(https://img11.360buyimg.com/imagetools/jfs/t1/219935/40/31583/1727/64897605Fed028212/19fcab4165473048.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .hot2 {
    width: 26px;
    height: 16px;
    margin-right: 5px;
    background-image: url(https://img14.360buyimg.com/imagetools/jfs/t1/133734/10/39165/3203/64897605F4190e24c/201614035d50b611.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .searchbar1 {
    width: 270px;
  }

  .searchbar-box0 {
    width: 100vw;
    position: relative;
    left: -12px;
    height: 124px;
    padding: 12px;
    margin-bottom: 20px;
    background-image: url(https://img14.360buyimg.com/imagetools/jfs/t1/164829/29/37960/114270/64d09244F641a2c51/782cb4f2adcbb0b3.png);
    background-size: 100% auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
  }

  .searchbar-box1 {
    width: 100vw;
    position: relative;
    left: -12px;
    height: 72px;
    background: rgba(245, 49, 55, 1);
    display: flex;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
  }
}
</style>
