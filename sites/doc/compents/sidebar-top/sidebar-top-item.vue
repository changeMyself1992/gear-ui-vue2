<template>
  <el-menu-item v-if="item.meta.sidebarTopDeepestLevel" class="custom-menu-item" :index="item.name">
    <div v-if="item.meta.groupTitle" class="groupTitle">
      <span>{{ item.meta.groupTitle }}</span>
    </div>
    <gear-richtext v-if="item.meta.richData" class="custom-richtext" :richData="item.meta.richData" />
    <span v-else> {{ item.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="item.name" :popper-append-to-body="false">
    <span slot="title">{{ item.meta.title }}</span>
    <sidebar-top-item v-for="child in item.children" :key="child.name" :item="child" class="nest-menu" />
  </el-submenu>
</template>

<script>
export default {
  name: 'SidebarTopItem',
  components: {},
  mixins: [],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.custom-menu-item.el-menu-item.nest-menu {
  display: block;
  height: auto;
  .groupTitle {
    height: 29px;
    box-sizing: content-box;
    border-bottom: 1px solid #f1f1f1ff;
    margin-bottom: 10px;
    span {
      line-height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: normal;
      color: #000000;
    }
  }
}
</style>

<style lang="scss">
.customize-menu-1 .el-submenu {
  position: relative;
}
.customize-menu-1 .el-submenu .el-menu--horizontal {
  top: 61px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}
.customize-menu-1 .el-submenu .el-menu--horizontal .el-menu .el-menu-item.custom-menu-item {
  min-width: 177px;
  box-sizing: border-box;
}

.customize-menu-1 .custom-richtext:hover{
  background-color: rgb(239, 238, 238);
  border-radius: 4px;
}

.customize-menu-1 .custom-richtext.richtext {
  position: relative;
  height: 30px;
  line-height: 30px;
  margin-bottom: 6px;
  padding-right: 35px;
}

.customize-menu-1 .custom-richtext.richtext::after {
  content: ' ';
  position: absolute;
  width: 6px;
  height: 10px;
  background-image: url(https://img11.360buyimg.com/imagetools/jfs/t1/173317/29/38094/266/64c36a4dF67b30886/245c657840094330.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 50%;
  transform: translateY(-50%);
  right: 9px;
}

.customize-menu-1 .custom-richtext.richtext > img {
  margin-right: 5px;
  margin: 0 5px 0 3px;
}

.customize-menu-1 .custom-richtext.richtext > span:nth-child(2) {
  margin-right: 4px;
}
.customize-menu-1 .custom-richtext.richtext > span:nth-child(3) {
  padding: 0 3px;
}

#app > div > div.gear-header > div > div.nav > ul > li:nth-child(3) > div.el-menu--horizontal > ul > li:nth-child(2) > div {
  margin-bottom: 0;
}
.richtext.custom-richtext > span:nth-child(3) {
  border-radius: 2px;
}
#app > div > div.gear-header > div > div.nav > ul > li:nth-child(3) > div.el-menu--horizontal > ul > li:nth-child(1) > div.richtext.custom-richtext > span:nth-child(3) {
  background-color: rgb(215, 239, 228);
}

#app > div > div.gear-header > div > div.nav > ul > li:nth-child(3) > div.el-menu--horizontal > ul > li:nth-child(2) > div > span:nth-child(3) {
  background-color: rgb(220, 208, 233);
}
#app > div > div.gear-header > div > div.nav > ul > li:nth-child(4) > div.el-menu--horizontal > ul > li:nth-child(1) > div.richtext.custom-richtext > span:nth-child(3) {
  background-color: rgb(220, 208, 233);
}
#app > div > div.gear-header > div > div.nav > ul > li:nth-child(4) > div.el-menu--horizontal > ul > li:nth-child(2) > div > span:nth-child(3) {
  background-color: rgb(220, 208, 233);
}
</style>
