<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item :index="item.name" @click="menuItemClick(item)">{{ item.meta.title }}</el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.name" popper-append-to-body>
      <span slot="title">{{ item.meta.title }}</span>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(item.path)" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path';

export default {
  name: 'SidebarItem',
  components: {},
  mixins: [],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    menuItemClick(item) {
      if (item.meta && item.meta.showDemo) {
        window.__qd__.click({
          cls: 'G015|129796',
          v: {
            serid: item.meta.title
          }
        });
      }
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
