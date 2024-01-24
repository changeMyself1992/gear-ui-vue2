<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-left">
      <el-menu ref="menu" :default-active="activeMenu" :default-openeds="openeds" mode="vertical" background-color="#ffffff" active-text-color="#ef4034" @select="handleSelect">
        <SidebarItem v-for="route in firstLevelRoute.children" :key="route.path" :item="route" :base-path="firstLevelRoute.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { routes } from '../../../router';
import SidebarItem from './sidebar-item.vue';

export default {
  name: 'sidebar-left',
  data() {
    return {
      firstLevelRoute: {},
      openeds: []
    };
  },
  components: { SidebarItem },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path, name } = route;
      // // if set path, the sidebar will highlight the path you set
      // if (meta.activeMenu) {
      //   return meta.activeMenu;
      // }
      // return path;

      return name;
    }
  },
  watch: {
    $route: {
      handler() {
        this.fetchData();
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    fetchData() {
      let firstLevelRoute = routes.find(item => item.name && item.meta && item.meta.title && this.$route.path.includes(item.path));
      if (this.$route.path.includes('/jrui-component/v2')) {
        firstLevelRoute = firstLevelRoute.children[0];
      }
      if (this.$route.path.includes('/jrui-component/v3')) {
        firstLevelRoute = firstLevelRoute.children[1];
      }

      if (Object.keys(this.firstLevelRoute).length === 0 || this.firstLevelRoute.name !== firstLevelRoute.name) {
        this.firstLevelRoute = firstLevelRoute;
        const basePath = firstLevelRoute.path.includes('/') ? firstLevelRoute.path : `/${firstLevelRoute.path}`;
        this.openeds = this.firstLevelRoute.children.map(item => item.name);
      }
    },
    handleSelect(key) {
      const nameArray = key.split('/');
      const name = nameArray[nameArray.length - 1];
      if (name !== this.$route.name) {
        this.$router.push({ name });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden !important;
  width: 240px;
  font-size: 14px;
  border-right: 1px solid #eee;
}
</style>

<style >
.scrollbar-left {
  padding-top: 24px;
  box-sizing: border-box;
}
.sidebar-container .el-menu {
  border-right: none;
}
.sidebar-container .el-submenu__title {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: PingFangHK-Semibold;
  font-weight: 600;
  color: #000000;
  padding: 0 0 0 40px !important;
}

.sidebar-container .el-menu .el-menu-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: PingFangHK-Semibold;
  font-weight: 600;
  color: #000000;
  padding: 0 0 0 40px !important;
}
.sidebar-container .el-menu .el-submenu .el-menu-item {
  height: 44px;
  line-height: 44px;
  font-size: 13px;
  padding-right: 6px;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  color: #666666;
  padding: 0 0 0 54px !important;
}

.sidebar-container .el-menu-item.is-active {
  border-right: 4px solid #ef4034;
  color: #ef4034;
}
.sidebar-container .el-menu-item:hover {
  color: #ef4034 !important;
  background-color: #ffffff !important;
}

.sidebar-container .el-scrollbar__bar.is-vertical {
  right: 0px;
}

.sidebar-container .el-scrollbar {
  height: 100%;
}

.sidebar-container .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
