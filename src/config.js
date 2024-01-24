export default {
  sorts: [
    '指南',
    '基础组件',
    '展示组件',
    '操作反馈',
    '导航组件',
    '数据录入'
  ],
  packages: [
    {
      name: 'intro',
      'ui-specified-english-name': 'Introduce',
      chnName: '介绍',
      desc: '描述',
      sort: '0',
      author: 'ext.menghao1',
      showDemo: false
    },
    {
      name: 'join',
      'ui-specified-english-name': 'Join',
      chnName: '共建方案',
      desc: '描述',
      sort: '0',
      author: 'haoliang6',
      showDemo: false
    },
    {
      name: 'Button',
      'ui-specified-english-name': 'Button',
      chnName: '按钮',
      desc: '按钮组件',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Form',
      'ui-specified-english-name': 'Form',
      chnName: '表单',
      desc: '',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'form-card',
          chnName: '卡片表单'
        },
        {
          router: 'form-banner',
          chnName: '通栏表单'
        }
      ]
    },
    {
      name: 'show-demo',
      'ui-specified-english-name': 'Label',
      chnName: '红点、标签、气泡',
      desc: '这儿展示的是三个组件，徽标，标签，和气泡卡片',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Swipe',
      'ui-specified-english-name': 'PageBrek',
      chnName: '分页符',
      desc: '',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Dialog',
      'ui-specified-english-name': 'Dialog',
      chnName: '弹窗',
      desc: '对话框组件',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'overlay',
      'ui-specified-english-name': 'Mask',
      chnName: '遮罩',
      desc: '遮罩組件',
      sort: '1',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'grid',
      'ui-specified-english-name': 'QuickLink',
      chnName: '图标宫格',
      desc: '宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'grid-dome1',
          chnName: '金刚区样式'
        },
        {
          router: 'grid-dome2',
          chnName: '卡片样式'
        }
      ]
    },
    {
      name: 'bully-screen-icon',
      'ui-specified-english-name': 'Suspended',
      chnName: '悬浮图标',
      desc: '固定屏幕的角标显示',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'searchbox',
      'ui-specified-english-name': 'SearchBar',
      chnName: '搜索框',
      desc: '搜索框',
      sort: '2',
      author: 'mengmeiqi',
      showDemo: true
    },
    {
      name: 'Notice',
      'ui-specified-english-name': 'Notice',
      chnName: '公告',
      desc: '用于循环播放展示一组消息通知。',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'steps',
      'ui-specified-english-name': 'Progress',
      chnName: '进度',
      desc: '用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'steps-dome1',
          chnName: '竖向样式'
        },
        {
          router: 'steps-dome2',
          chnName: '横向样式'
        }
      ]
    },
    {
      name: 'consent-agreement',
      'ui-specified-english-name': 'Agreement',
      chnName: '同意协议',
      desc: '同意协议',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'image-compress',
      'ui-specified-english-name': 'DefaultImage',
      chnName: '兜底图',
      desc: '图片组件(新) - 在Image组件基础上添加了对京东云图片进行压缩格式转换',
      sort: '2',
      author: 'zhangjinglei6',
      showDemo: true
    },
    {
      name: 'Footer',
      'ui-specified-english-name': 'Footer',
      chnName: '页脚',
      desc: '统一页脚组件',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'footer-type1',
          chnName: '品牌+业务利益点+业务说明'
        },
        {
          router: 'footer-type2',
          chnName: '品牌+业务说明'
        },
        {
          router: 'footer-type3',
          chnName: '品牌 A'
        },
        {
          router: 'footer-type4',
          chnName: '品牌 B'
        }
      ]
    },
    {
      name: 'countDown',
      'ui-specified-english-name': 'CountDown',
      chnName: '倒计时',
      desc: '倒计时组件',
      sort: '2',
      author: 'mengmeiqi',
      showDemo: true
    },
    {
      name: 'paragraph',
      'ui-specified-english-name': 'Paragraph',
      chnName: '文本省略',
      desc: '文本省略。',
      sort: '2',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Empty',
      'ui-specified-english-name': 'EmptyState',
      chnName: '空状态',
      desc: '',
      sort: '2',
      author: 'furuixing1',
      showDemo: true,
      subPage: [
        {
          router: 'network',
          chnName: '无网络'
        },
        {
          router: 'default',
          chnName: '加载失败'
        },
        {
          router: 'no-comment',
          chnName: '无评论'
        },
        {
          router: 'no-goods',
          chnName: '购物车为空'
        },
        {
          router: 'no-coupon',
          chnName: '无优惠券'
        },
        {
          router: 'activity-end',
          chnName: '活动结束'
        },
        {
          router: 'no-btn',
          chnName: '无按钮'
        },
        {
          router: 'one-btn',
          chnName: '有一个按钮'
        },
        {
          router: 'two-btn',
          chnName: '有两个按钮'
        }
      ]
    },
    {
      name: 'pull-refresh',
      'ui-specified-english-name': 'PullToRefresh',
      chnName: '下拉刷新',
      desc: '下拉刷新组件',
      sort: '3',
      author: 'furuixing1',
      showDemo: true,
      subPage: [
        {
          router: 'pull-refresh-0',
          chnName: '深色背景'
        },
        {
          router: 'pull-refresh-1',
          chnName: '浅色背景'
        }
      ]
    },
    {
      name: 'Loading',
      'ui-specified-english-name': 'TransitionLoading',
      chnName: '转场加载',
      desc: '转场loading',
      sort: '3',
      author: 'furuixing1',
      showDemo: true
    },
    {
      name: 'slide-load',
      'ui-specified-english-name': 'FeedLoading',
      chnName: '信息流加载',
      desc: '上拉加载',
      sort: '3',
      author: 'furuixing1',
      showDemo: true
    },
    {
      name: 'Toast',
      'ui-specified-english-name': 'Toast',
      chnName: '轻提示',
      desc: '提示組件',
      sort: '3',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Popup',
      'ui-specified-english-name': 'DropDown',
      chnName: '底部弹出菜单',
      desc: '',
      sort: '3',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'tab-bar',
      'ui-specified-english-name': 'TabBar',
      chnName: '底部导航栏',
      desc: '底部导航栏',
      sort: '4',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Tabs',
      'ui-specified-english-name': 'Tab',
      chnName: '切换标签',
      desc: '',
      sort: '4',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'tabs-dome1',
          chnName: '固定2类目tab签居中展示'
        },
        {
          router: 'tabs-dome2',
          chnName: '固定3类目tab签居中展示'
        },
        {
          router: 'tabs-dome3',
          chnName: '多类目tab签滑动展示'
        },
        {
          router: 'tabs-dome4',
          chnName: '楼层标题切换'
        },
        {
          router: 'tabs-dome5',
          chnName: '楼层标题切换+次要标题切换'
        }
      ]
    },
    {
      name: 'dropdown-menu',
      'ui-specified-english-name': 'DropdownMenu',
      chnName: '下拉菜单',
      desc: '向下弹出的菜单列表。',
      sort: '4',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'index-bar',
      'ui-specified-english-name': 'IndexBar',
      chnName: '索引序列',
      desc: '索引栏组件',
      sort: '4',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'indexBar-dome1',
          chnName: '基础用法'
        },
        {
          router: 'indexBar-dome2',
          chnName: '自定义索引用法'
        }
      ]
    },
    {
      name: 'dates-selecter',
      'ui-specified-english-name': 'TimePicker',
      chnName: '时间选择',
      desc: '支持年月日时间选择',
      sort: '5',
      author: 'ext.menghao1',
      showDemo: true
    },
    {
      name: 'Input',
      'ui-specified-english-name': 'Input',
      chnName: '输入框',
      desc: '对原生input的封装',
      sort: '5',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'input-card',
          chnName: '卡片输入框'
        },
        {
          router: 'input-banner',
          chnName: '通栏输入框'
        }
      ]
    },
    {
      name: 'uploader',
      'ui-specified-english-name': 'ImageUploader',
      chnName: '图片上传',
      desc: '用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。',
      sort: '5',
      author: 'ext.menghao1',
      showDemo: true,
      subPage: [
        {
          router: 'uploader-dome1',
          chnName: '普通图片'
        },
        {
          router: 'uploader-dome2',
          chnName: '证件图片'
        }
      ]
    }
  ]
};
