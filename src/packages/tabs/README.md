# 标签栏

让用户在不同的视图中进行切换。

## 引入

```javascript
import Vue from 'vue'
import Tabs from '@ueip/gear-vue/lib/tabs'
import Tab from '@ueip/gear-vue/lib/tab'
import '@ueip/gear-vue/lib/tabs/index.css'
import '@ueip/gear-vue/lib/tab/index.css'
Vue.use(Tabs)
Vue.use(Tab)

// joyer
import  {Tabs, Tab}  from '@@ueip-gear-vue/master/index';
```

## vue用法

### 置顶标签固定2类目

```javascript
<template>
  <div class="demo-tabs1">
    <gear-tabs v-model="curTag" @tabClick="tabClick" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2]" :key="`标题-${index}`" :title="`标题${index}`">
          <div class="tabs1-cont">
            <div class="box-3" :style="{ 'background-color' : index == 1? '#ffdddd' : '#f8ffdd' }"></div>
            <div class="box-1">
              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div v-if="index === 1" class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>
            </div>
          </div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs1',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标题1',
      contentStyle: {
        width: '100vw',
      },
      swipeable: false,
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title, index) {
      console.log(title, index);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs1 {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 400px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .box-1 {
    width: 100%;
    .box-2 {
      width: 100%;
      height: 70px;
      background: white;
      border-radius: 4px;
      padding-left: $padding-sm;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 10px;
      box-sizing: border-box;
      .banner-1 {
        width: 140px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
      .banner-2 {
        width: 100px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
    }
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs1 .gear-tab {
  flex: none;
}
.demo-tabs1 .gear-tabs__nav {
  justify-content: space-evenly;
}
.demo-tabs1 .tabs1-cont{
  padding: 10px 12px;
}
</style>

```

### 置顶标签固定3类目

```javascript
<template>
  <div class="demo-tabs2">
    <gear-tabs v-model="curTag" @tabClick="title => this.tabClick(title)" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2, 3]" :key="`标签-${index}`" :title="`标签 ${index}`">
          <div class="tabs2-cont">
            <div class="box-3"></div>

            <div class="box-1">
              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>
            </div>
          </div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs2',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标签 1',
      contentStyle: {
        width: '100vw',
      },
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {}
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs2 {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 400px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .box-1 {
    width: 100%;
    .box-2 {
      width: 100%;
      height: 70px;
      background: white;
      border-radius: 4px;
      padding-left: $padding-sm;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 10px;
      box-sizing: border-box;
      .banner-1 {
        width: 140px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
      .banner-2 {
        width: 100px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
    }
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs2 .gear-tab {
  flex: none;
}
.demo-tabs2 .gear-tabs__nav {
  justify-content: space-evenly;
}
.demo-tabs2 .tabs2-cont {
  padding: 10px 12px;
}
</style>

```

### 置顶标签多类目

```javascript
<template>
  <div class="demo-tabs3">
    <gear-tabs v-model="curTag" @tabClick="title => this.tabClick(title)" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2, 3, 4, 5, 6, 7, 8]" :key="`标签-${index}`" :title="`标签 ${index}`">
          <div class="tabs3-cont">
            <div class="box-3"></div>

            <div class="box-1">
              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>

              <div class="box-2">
                <div class="banner-1"></div>
                <div class="banner-2"></div>
              </div>
            </div>
          </div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs3',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标签 1',
      contentStyle: {
        width: '100vw',
      },
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {}
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs3 {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-3 {
    border-radius: 4px;
    width: 100%;
    height: 400px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .box-1 {
    width: 100%;
    .box-2 {
      width: 100%;
      height: 70px;
      background: white;
      border-radius: 4px;
      padding-left: $padding-sm;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 10px;
      box-sizing: border-box;
      .banner-1 {
        width: 140px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
      .banner-2 {
        width: 100px;
        height: 16px;
        background: rgba(244, 245, 247, 1);
      }
    }
  }
  .tabs3-cont {
    padding: 10px 12px;
  }
}
</style>

```

### 独立楼层标签切换

```javascript
<template>
  <div class="demo-tabs4">
    <div class="box-1"></div>
    <gear-tabs
      class="custom-style-tab1"
      v-model="curTag"
      @tabClick="title => this.tabClick(title)"
      background="#F4F5F7"
      :contentStyle="contentStyle"
      :lineWidth="16"
      :sticky="true"
      :offsetTop="0"
      :swipeable="true"
      :isShowLine="false"
      swipeThreshold="4"
    >
      <template slot="content">
        <gear-tab title="推荐"><div class="tabs4-cont" style="background: rgb(190 227 236); "></div></gear-tab>
        <gear-tab title="标签文案"><div class="tabs4-cont" style="background: rgb(255, 214, 221); "></div></gear-tab>
        <gear-tab title="文案1"><div class="tabs4-cont" style="background: rgb(255, 255, 193); "></div></gear-tab>
        <gear-tab title="文案2"><div class="tabs4-cont" style="background: rgb(255, 226, 226); "></div></gear-tab>
        <gear-tab title="文案3"><div class="tabs4-cont" style="background: rgb(255, 205, 205); "></div></gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs4',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '推荐',
      contentStyle: {
        width: '100vw',
      },
      curTag4: '全部',
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {},
    tabClick4(title) {}
  }
};
</script>

<style lang="scss">
.demo-tabs4 {
  margin: 0;
  padding: 0;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-1 {
    width: calc(100vw - 24px);
    height: 85px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-top: 10px;
  }
  .tabs4-cont {
    width: calc(100vw - 24px);
    margin: 0 auto;
    height: 454px;
    border-radius: 4px 4px 0 0
  }
}
</style>


<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap {
  width: 100vw;
  height: 60px;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav {
  justify-content: flex-start;
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab {
  flex: none;
  padding: 0;
  margin: 16px 8px 0 0;
  font-size: 0;
  height: 32px;
  padding: 0 15px;
  background: #ffffff;
  border-radius: 16px;
  box-sizing: border-box;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab:first-child {
  margin-left: 12px;
}
.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab.gear-tab--active {
  border: 1px solid rgba(245, 49, 55, 1);
  background: rgba(254,245,246,1);
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab > .gear-tab__text {
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: normal;
  margin-top: 0;
  color: rgba(0, 0, 0, 1);
}

.demo-tabs4 .custom-style-tab1.gear-tabs > .gear-tabs__wrap > .gear-tabs__nav > .gear-tab.gear-tab--active > .gear-tab__text {
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  margin-top: 0;
  color: #F53137;
}
</style>

```

### 独立楼层标题切换

```javascript
<template>
  <div class="demo-tabs5">
    <div class="box-1"></div>
    <gear-tabs v-model="curTag" @tabClick="title => this.tabClick(title)" background="#F4F5F7" :contentStyle="contentStyle" :lineWidth="16" :sticky="true" :offsetTop="0" :swipeable="true">
      <template slot="content">
        <gear-tab v-for="index in [1, 2, 3]" :key="`标题文案${index}`" :title="`标题文案${index}`">
          <div style="width: calc(100% - 24px); margin: 0 auto; height: 1000px; background: #ffffff; border-radius: 4px"></div>
        </gear-tab>
      </template>
    </gear-tabs>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  mixins: [Px2VwMixin],
  name: 'demo-tabs5',
  components: {},
  data() {
    return {
      curTag: '标题文案1',
      contentStyle: {
        width: '100vw',
      },
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {}
  }
};
</script>

<style lang="scss">
@import '../../assets/css/demo';
.demo-tabs5 {
  margin: 0 0 10px 0;
  padding: 0;
  // min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-1 {
    width: calc(100vw - 24px);
    height: 85px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-top: 10px;
  }
}
</style>

<style >
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap {
  width: calc(100vw - 22px);
  margin: 0 auto;
  height: 60px;
}
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav {
  justify-content: flex-start;
}
.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab {
  flex: none;
  padding: 0;
  margin-right: 25px;
  align-items: flex-start;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab .gear-tab__text {
  line-height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium;
  margin-top: 20px;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div.gear-tabs__nav .gear-tab.gear-tab--active .gear-tab__text {
  font-family: PingFangSC-Semibold;
}

.demo-tabs5 .gear-tabs.gear-tabs--line > div.gear-tabs__wrap > div > div.gear-tabs__line{
  bottom: 10px;
}
</style>

```

### 标题切换

```javascript
<template>
  <div class="demo-tabs6">
    <div class="box-1"></div>
    
    <div class="tabs6-cont">
      <gear-tabs
        class="custom-style-tab1"
        v-model="curTag"
        @tabClick="title => this.tabClick(title)"
        background="#ffffff"
        :contentStyle="contentStyle"
        :lineWidth="16"
        :sticky="true"
        :offsetTop="0"
        :swipeable="true"
      >
        <template slot="content">
          <gear-tab title="标题文案1">
            <div class="tab-content">
              <div class="tab-content-item1"></div>
              <div class="tab-content-right">
                <div class="tab-content-item2"></div>
                <div class="tab-content-item2"></div>
              </div>
            </div>
          </gear-tab>
          <gear-tab title="标题文案2">
            <div class="tab-content"></div>
          </gear-tab>
          <gear-tab title="标题文案3">
            <div class="tab-content">
              <div class="tab-content-item1"></div>
              <div class="tab-content-right">
                <div class="tab-content-item2"></div>
                <div class="tab-content-item2"></div>
              </div>
            </div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>

    <div class="box-1"></div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs6',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag: '标题文案1',
      contentStyle: {
        width: '100%',
      },
      curTag4: '全部',
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {},
    tabClick4(title) {}
  }
};
</script>

<style lang="scss">
.demo-tabs6 {
  margin: 0;
  padding: 0;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; /* CSS3属性 */
  .box-1 {
    width: calc(100vw - 24px);
    height: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin: 10px 0;
  }
  
  .tabs6-cont{
    width: calc(100vw - 22px);
    border-radius: 4px;
    margin: 0 auto;
    overflow: hidden;
  }

  .tab-content {
    width: 100%;
    height: 194px;
    padding: 0 12px 12px 12px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .tab-content-item1 {
      width: 160px;
      height: 182px;
      background: rgba(245, 49, 55, 1);
      border-radius: 4px;
    }
    .tab-content-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tab-content-item2 {
        width: 160px;
        height: 87px;
        background: rgba(244, 245, 247, 0.6);
        border: 1px solid rgba(237, 238, 240, 1);
        border-radius: 4px;
        box-sizing: border-box;
      }
    }
  }
}
</style>

```

### 标签切换

```javascript
<template>
  <div class="demo-tabs7">
    <div class="box-1"></div>
    <div class="box-2">
      <gear-tabs class="custom-style-tab2" v-model="curTag4" @tabClick="title => this.tabClick4(title)" :isShowLine="false" :swipeable="true">
        <template slot="content">
          <gear-tab title="全部">
            <div style="width: 100%; height: 350px; background: rgb(255, 220, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="1个月内">
            <div style="width: 100%; height: 330px; background: rgb(255, 249, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="1-6个月">
            <div style="width: 100%; height: 310px; background: rgb(221, 255, 220); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
          <gear-tab title="6个月+">
            <div style="width: 100%; height: 290px; background: rgb(220, 248, 255); padding: 0 12px; box-sizing: border-box"></div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs7',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag4: '全部'
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {},
    tabClick4(title) {}
  }
};
</script>

<style lang="scss">
.demo-tabs7 {
  padding: 10px 12px 100px 12px;
  overflow: hidden;

  .box-1 {
    height: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .box-2 {
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    border-radius: 4px;
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs7 .custom-style-tab2 {
  overflow: hidden;
}
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap {
  height: 30px;
  margin: 14px 12px 14px 12px;
}
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab {
  background-color: #f4f5f7;
  border-radius: 20px;
  color: #666666;
  height: 30px;
  flex: 0 0 auto;
  padding: 0 16px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: normal;
  font-family: PingFangSC-Regular;
}
.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab:last-child {
  margin-right: 0;
}

.demo-tabs7 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab--active {
  font-family: PingFangSC-Medium;
  background-color: #ffe8e7;
  color: $redTheme;
  font-weight: bold;
}
</style>

```

### 标题+标签切换

```javascript
<template>
  <div class="demo-tabs8">
    <div class="box-1"></div>
    <div class="box-2">
      <div class="title">优选基金</div>
      <gear-tabs class="custom-style-tab2" v-model="curTag4" @tabClick="title => this.tabClick4(title)" :isShowLine="false" :swipeable="true">
        <template slot="content">
          <gear-tab title="全部">
            <div style="width: 100%; height: 350px; background: white; padding: 0 12px; box-sizing: border-box">全部1111</div>
          </gear-tab>
          <gear-tab title="1个月内">
            <div style="width: 100%; height: 330px; background: pink; padding: 0 12px; box-sizing: border-box">1个月内</div>
          </gear-tab>
          <gear-tab title="1-6个月">
            <div style="width: 100%; height: 310px; background: yellow; padding: 0 12px; box-sizing: border-box">1-6个月</div>
          </gear-tab>
          <gear-tab title="6个月+">
            <div style="width: 100%; height: 290px; background: blue; padding: 0 12px; box-sizing: border-box">6个月+</div>
          </gear-tab>
        </template>
      </gear-tabs>
    </div>
  </div>
</template>

<script>
import { Px2VwMixin } from '../../mixins/px2vw.js';
export default {
  name: 'demo-tabs8',
  mixins: [Px2VwMixin],
  components: {},
  data() {
    return {
      curTag4: '全部'
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  },
  methods: {
    tabClick(title) {},
    tabClick4(title) {}
  }
};
</script>

<style lang="scss">
.demo-tabs8 {
  padding: 10px 12px 100px 12px;
  overflow: hidden;

  .box-1 {
    height: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .box-2 {
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    border-radius: 4px;
    .title {
      line-height: 23px;
      font-size: 16px;
      font-family: PingFangSC-Semibold;
      font-weight: bold;
      color: #000000;
      padding: 14px 0 0 12px;
    }
  }
}
</style>

<style lang="scss">
@import '../../assets/css/demo';
/* 为了保持跟设计稿一致，需要覆盖一些样式 */
.demo-tabs8 .custom-style-tab2 {
  overflow: hidden;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap {
  height: 30px;
  margin: 14px 12px 14px 12px;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab {
  background-color: #f4f5f7;
  border-radius: 20px;
  color: #666666;
  height: 30px;
  flex: 0 0 auto;
  padding: 0 16px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: normal;
  font-family: PingFangSC-Regular;
}
.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab:last-child {
  margin-right: 0;
}

.demo-tabs8 .custom-style-tab2 .gear-tabs__wrap .gear-tabs__nav .gear-tab--active {
  font-family: PingFangSC-Medium;
  background-color: #ffe8e7;
  color: $redTheme;
  font-weight: bold;
}
</style>

```


## Tabs(Props)

| 字段              | 说明                              | 类型               | 默认值     | 是否必要 |
| --------------- | ------------------------------- | ---------------- | ------- | ---- |
| v-model         | 必须具有唯一性，并且要跟tab的title对应上        | string           | 空字符串    | 是    |
| background      | 标签栏背景色                          | string           | white   | 否    |
| isShowLine      | 是否显示标签栏底部线条                     | Boolean          | true    | 否    |
| lineColor       | 标签栏底部线条颜色                       | string           | #ee0a24 | 否    |
| lineWidth       | 标签栏底部线条宽度                       | Number           | 40      | 否    |
| lineHeight      | 标签栏底部线条高度                       | Number           | 3       | 否    |
| tabActiveStyle  | 自定义标签激活样式                       | Object           | 空对象     | 否    |
| tabDefaultStyle | 自定义标签默认样式                       | Object           | 空对象     | 否    |
| swipeThreshold  | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | [Number, String] | 5       | 否    |
| duration        | 滚动居中得时间                         | [Number, String] | 0.3     | 否    |
| contentStyle    | 自定义内容盒子样式                       | Object           | 空对象     | 否    |
| animated        | 是否开启切换标签内容时的转场动画                | Boolean          | true    | 否    |
| swipeable       | 是否开启手势滑动切换                      | Boolean          | true    | 否    |
| sticky          | 是否开启粘性布局                        | Boolean          | false   | 否    |
| offsetTop       | 吸顶时与顶部的距离,需要开启sticky            | Number           | 0       | 否    |
|                 |                                 |                  |         |      |
|                 |                                 |                  |         |      |

## Tab(Props)

| 字段    | 说明                                 | 类型     | 默认值  | 是否必要 |
| ----- | ---------------------------------- | ------ | ---- | ---- |
| title | 标签栏的标题，必须具有唯一性，并且要跟tabs的v-model对应上 | string | 空字符串 | 是    |

## Events

| 事件名      | 说明      | 回调参数                        |
| -------- | ------- | --------------------------- |
| tabClick | 点击标签时触发 | title：tab元素标题，index：tab元素索引 |