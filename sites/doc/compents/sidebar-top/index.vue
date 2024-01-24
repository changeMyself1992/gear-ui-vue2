<template>
  <div class="nav">
    <el-menu class="customize-menu-1" ref="menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <SidebarTopItem v-for="route in firstLevelRoutes" :key="route.name" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import { routes } from '../../router';
import SidebarTopItem from './sidebar-top-item.vue';

export default {
  name: 'sidebar-top',
  components: {
    SidebarTopItem
  },
  data() {
    return {
      selected: 0,
      firstLevelRoutes: [],
      activeIndex: 'home-page',
      allIndexs: []
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(newVal, oldVal) {
        for (let i = 0; i < this.allIndexs.length; i++) {
          const index = this.allIndexs[i];
          if (newVal.path.includes(index)) this.activeIndex = index;
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.firstLevelRoutes = routes.filter(item => item.name && item.meta && item.meta.title);
    if (this.$refs?.menu?.items) {
      setTimeout(() => {
        const items = this.$refs.menu.items;
        this.allIndexs = Object.keys(items);
      }, 0);
    }
  },
  methods: {
    handleSelect(routerName) {
      function getObjectByName(routesArray, name) {
        for (let i = 0; i < routesArray.length; i++) {
          const route = routesArray[i];
          if (route.name === name) {
            return route;
          }
          if (route.children && route.children.length > 0) {
            const childResult = getObjectByName(route.children, name);
            if (childResult) {
              return childResult;
            }
          }
        }
        return null;
      }
      const routerItem = getObjectByName(this.firstLevelRoutes, routerName);

      if (routerItem?.meta?.status === '开发中') {
        this.$router.push({ name: 'deving' });
        return;
      }

      if (routerItem.openNewTab) {
        // 组件页面 在新标签中打开
        window.open(routerItem.redirect, '_blank');
        return;
      }

      if (this.isExternal(routerItem.path)) {
        window.open(routerItem.path, '_blank”');
      } else {
        this.$router.push({ name: routerName });
      }
      this.activeIndex = routerName;
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<style lang="scss">
.customize-menu-1.el-menu.el-menu--horizontal {
  border-bottom: none;
  height: 80px;
}

.customize-menu-1.el-menu.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 72px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  padding: 0 2px;
  margin-right: 50px;

  font-size: 16px;
  font-family: PingFangSC-Semibold;
  font-weight: normal;
  color: #000000;
}
.customize-menu-1.el-menu.el-menu--horizontal > li:last-child {
  margin-right: 0;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-menu-item.is-active {
  border-top: 4px solid #ef4034;
  color: #f53137;
  font-weight: bold;
}

.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 80px;
  line-height: 72px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  padding: 0 2px;
  margin-right: 52px;
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  font-weight: normal;
  color: #000000;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu.is-opened .el-submenu__title {
  color: #f53137;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-top: 4px solid #ef4034;
  color: #f53137;
  font-weight: bold;
}

.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu .el-submenu__title > i {
  margin: 0;
  margin-left: 8px;
  border-top: 4px solid #000000;
  border-bottom: none;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu.is-opened .el-submenu__title > i {
  border-top: 4px solid #f53137;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu.is-active .el-submenu__title > i {
  border-top: 4px solid #f53137;
}
.customize-menu-1.el-menu.el-menu--horizontal > .el-submenu .el-submenu__title > i::before {
  content: none;
}

.customize-menu-1 .el-submenu .el-menu--horizontal > ul {
  padding: 0 0 4px 0;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  overflow: hidden;
  min-width: 177px;
}
</style>
