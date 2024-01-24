import Vue from 'vue';
import VueRouter from 'vue-router';
import { packages } from '../../src/config.json';

const Index = () => import('./view/index.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    components: {
      main: Index
    }
  }
];

// 组件示例页面
packages.map(item => {
  if (item.showDemo === false) return;
  const pkgName = item.name.toLowerCase();
  routes.push({
    path: `/${item.name}`,
    components: {
      main: () => import(/* webpackChunkName: "chunk-[request][index]" */ `../../src/packages/${pkgName}/demo.vue`)
    },
    name: item.chnName
  });
  item.subPage && item.subPage.map(subItem => {
    routes.push({
      path: `/${subItem.router}`,
      components: {
        main: () => import(/* webpackChunkName: "chunk-[request][index]" */ `../../src/packages/${pkgName}/${subItem.router}.vue`)
      },
      name: subItem.chnName || ''
    });

    return subItem;
  });
  return item;
});

// 解决跳转时新页面没有置顶
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition && to.meta.keepAlive) {
    return savedPosition;
  }
  return { x: 0, y: 0 };
};

const router = new VueRouter({
  routes,
  scrollBehavior
});

export default router;
