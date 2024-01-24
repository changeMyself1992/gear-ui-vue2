import Vue from 'vue';
import Router from 'vue-router';
import cloneDeep from 'lodash/cloneDeep';
import config from '../../src/config.json';
import Layout from './compents/layout/index.vue';

Vue.use(Router);

const componentRouter = config.sorts.map((title, index) => {
  const array = config.packages.filter(item => item.sort === String(index));
  return {
    path: config.sortsEname[index],
    redirect: `/jrui-component/v2/${config.sortsEname[index]}/${array[0].name}`,
    name: config.sortsEname[index],
    meta: {
      title
    },
    component: () => import('./views/jrui-component/v2/index.vue'),
    children: array.map(item => ({
      path: item.name,
      name: item.name,
      meta: {
        title: `${item['ui-specified-english-name']} ${item.chnName}`,
        showDemo: true,
        showFoot: true,
        docUpdateTime: item.docUpdateTime,
        jumpRepository: true
      },
      // component: () => Promise.resolve(import(`./view/${item.name.toLowerCase()}.vue`)),
      component: () => Promise.resolve(import(`../../src/packages/${item.name.toLowerCase()}/README.md`))
    }))
  };
});

export const routes = [
  {
    path: '*',
    redirect: '/home-page'
  },
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/deving',
    name: 'deving',
    meta: {
      // title: '开发中',
      sidebarTopDeepestLevel: true
    },
    component: () => import('./views/deving/index.vue')
  },
  {
    path: '/home-page',
    name: 'home-page',
    meta: {
      title: '首页',
      sidebarTopDeepestLevel: true // 是否是顶部导航栏可渲染的最深层级
    },
    component: () => import('./views/home-page/index.vue')
  },
  {
    path: '/design-language',
    redirect: '/design-language/philosophy',
    name: 'design-language',
    meta: {
      title: '设计语言',
      sidebarTopDeepestLevel: true
    },
    component: Layout,
    children: [
      {
        path: 'philosophy',
        redirect: '/design-language/philosophy/core-idea',
        name: 'philosophy',
        meta: {
          title: '设计语言'
        },
        component: () => import('./views/design-language/index.vue'),
        children: [
          {
            path: 'core-idea',
            name: 'core-idea',
            meta: {
              title: '核心理念',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            // component: () => import('./page/core-idea.vue'),
            component: () => import('../../docs/core-idea.md')
          },
          {
            path: 'design-strategy',
            name: 'design-strategy',
            meta: {
              title: '设计策略',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            component: () => import('../../docs/design-strategy.md')
          }
        ]
      },

      {
        path: 'principle',
        redirect: '/design-language/principle/space-between',
        name: 'principle',
        meta: {
          title: '设计原则'
        },
        component: () => import('./views/design-language/index.vue'),
        children: [
          {
            path: 'space-between',
            name: 'space-between',
            meta: {
              title: '间距',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            component: () => import('../../docs/space-between.md')
          },
          {
            path: 'color',
            name: 'color',
            meta: {
              title: '颜色',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            component: () => import('../../docs/color.md')
          },

          {
            path: 'rounded-corner',
            name: 'rounded-corner',
            meta: {
              title: '圆角',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            component: () => import('../../docs/rounded-corner.md')
          },
          {
            path: 'font',
            name: 'font',
            meta: {
              title: '字体',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/5/23 10:09:48'
            },
            component: () => import('../../docs/font.md')
          },
          {
            path: 'kinetic-effect',
            name: 'kinetic-effect',
            meta: {
              title: '动效',
              showDemo: false,
              showFoot: true,
              docUpdateTime: '2023/8/31 17:22:41'
            },
            component: () => import('../../docs/kinetic-effect.md')
          }
        ]
      }
    ]
  },
  {
    path: '/jrui-component',
    name: 'jrui-component',
    meta: {
      title: '基础组件'
    },
    component: Layout,
    redirect: '/jrui-component/v2/guide/intro',
    children: [
      {
        path: 'v2',
        name: 'v2',
        redirect: '/jrui-component/v2/guide/intro',
        meta: {
          title: '组件库 Vue2.0',
          sidebarTopDeepestLevel: true,
          groupTitle: 'H5',
          richData: {
            message: '*组件库Vue2.0',
            richMessage: [
              {
                textImg: 'https://static-ftcms.jd.com/p/files/64f6ce67ef3d47404ece3b06.png',
                width: '20px',
                height: '20px',
                start: 0,
                end: 0
              },
              {
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 1,
                end: 3
              },
              {
                color: '#299F6A',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 4,
                end: 19
              }
            ]
          }
        },
        component: () => import('./views/jrui-component/v2/index.vue'),
        children: [
          {
            path: 'guide',
            name: 'guide',
            meta: {
              title: '指南'
            },
            component: () => import('./views/jrui-component/v2/index.vue'),
            redirect: '/jrui-component/v2/guide/intro',
            children: [
              {
                path: 'intro',
                name: 'intro',
                meta: {
                  title: '快速上手',
                  showDemo: false,
                  showFoot: true,
                  docUpdateTime: '2023/5/23 10:09:48'
                },
                component: () => import('../../docs/intro.md')
              },
              {
                path: 'font-quoter',
                name: 'font-quoter',
                meta: {
                  title: '字体引用',
                  showDemo: false,
                  showFoot: true,
                  docUpdateTime: '2023/5/23 10:09:48'
                },
                component: () => import('../../docs/font-quoter.md')
              },
              {
                path: 'update-log',
                name: 'update-log',
                meta: {
                  title: '更新日志',
                  showDemo: false,
                  showFoot: true,
                  docUpdateTime: '2023/7/31 10:09:48'
                },
                component: () => import('../../docs/update-log.md')
              }
            ]
          },
          ...componentRouter
        ]
      },
      {
        path: 'v3',
        name: 'v3',
        redirect: 'https://udc.jdfmgt.com/vue3/#/jrui-component/guide/intro',
        openNewTab: true,
        meta: {
          title: '组件库 Vue3.0',
          sidebarTopDeepestLevel: true,
          richData: {
            message: '*组件库Vue3.0',
            richMessage: [
              {
                textImg: 'https://static-ftcms.jd.com/p/files/64f6ce67b3d2080174d0a686.png',
                width: '20px',
                height: '20px',
                start: 0,
                end: 0
              },
              {
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 1,
                end: 3
              },
              {
                color: '#2D0D5B',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 4,
                end: 9
              }
            ]
          }
        }
      },
      {
        path: 'https://cn.bing.com/?mkt=zh-CN',
        name: 'ios-components',
        meta: {
          status: '开发中',
          title: '双端组件库',
          groupTitle: '原生',
          sidebarTopDeepestLevel: true,
          richData: {
            message: '*双端组件库',
            richMessage: [
              {
                textImg: 'https://static-ftcms.jd.com/p/files/64f6ce57ef3d47404ece3b05.png',
                width: '20px',
                height: '20px',
                start: 0,
                end: 0
              },
              {
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 1,
                end: 7
              }
            ]
          }
        }
      }
    ]
  },
  {
    path: '/business-components',
    name: 'business-components',
    meta: {
      title: '业务组件库'
    },
    component: Layout,
    children: [
      {
        path: 'https://cn.bing.com/?mkt=zh-CN',
        name: 'wealth-components',
        meta: {
          status: '开发中',
          title: '财富组件库',
          groupTitle: 'H5',
          sidebarTopDeepestLevel: true,
          richData: {
            message: '*财富组件库Vue3.0',
            richMessage: [
              {
                textImg: 'https://static-ftcms.jd.com/p/files/64f6ce5722e7430b5497f46e.png',
                width: '20px',
                height: '20px',
                start: 0,
                end: 0
              },
              {
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 1,
                end: 5
              },
              {
                color: '#2D0D5B',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 6,
                end: 11
              }
            ]
          }
        }
      },
      {
        path: 'https://www.baidu.com/',
        name: 'eliminateGold-components',
        meta: {
          status: '开发中',
          title: '消金组件库',
          sidebarTopDeepestLevel: true,
          richData: {
            message: '*消金组件库Vue3.0',
            richMessage: [
              {
                textImg: 'https://static-ftcms.jd.com/p/files/64f6ce57b3d2080174d0a685.png',
                width: '20px',
                height: '20px',
                start: 0,
                end: 0
              },
              {
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 1,
                end: 5
              },
              {
                color: '#2D0D5B',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Regular',
                fontWeight: 'normal',
                start: 6,
                end: 11
              }
            ]
          }
        }
      }
    ]
  },
  {
    path: '/resource',
    redirect: '/resource/icon-library',
    name: 'resource',
    meta: {
      title: '资源',
      sidebarTopDeepestLevel: true
    },
    component: Layout,
    children: [
      {
        path: 'icon-library',
        name: 'icon-library',
        meta: {
          title: '图标库'
        },
        component: () => import('./views/resource/icon-library.vue')
      },
      {
        path: 'design-resource',
        name: 'design-resource',
        meta: {
          title: '设计资源'
        },
        component: () => import('./views/resource/design-resource.vue')
      }
    ]
  }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  mode: 'hash',
  routes
});
const router = createRouter();
export default router;
