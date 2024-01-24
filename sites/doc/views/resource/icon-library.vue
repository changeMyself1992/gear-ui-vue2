<template>
  <div class="detail-content">
    <div class="detail-right">
      <div class="detail-right-icons">
        <div class="icons-name">使用规则</div>
        <div class="icons-sub-title">选择想要使用的ICON，复制SVG后直接在Sketch粘贴即可</div>
        <div class="icons-title">常用元素</div>
        <div class="svg-bg">
          <div class="svg-content" v-for="(item, index) in svgs" :key="index" @click="svgCopyClick(item)">
            <div class="svg-content-red">{{ showTitle }}</div>
            <div class="svg-item" style="width: 32px; height: 32px" v-html="item"></div>
            <div class="svg-name">{{ normalSVG[index] }}</div>
          </div>
        </div>
        <div class="icons-title">功能服务</div>
        <div class="svg-bg">
          <div class="svg-content" v-for="(item, index) in channelSvgFiles" :key="index" @click="svgCopyClick(item)">
            <div class="svg-content-red">{{ showTitle }}</div>
            <div class="svg-item" style="width: 32px; height: 32px" v-html="item"></div>
            <div class="svg-name">{{ channelSvg[index] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'icon-library',
  data() {
    // console.log(require('../../asset/icons/test.svg'));
    return {
      showTitle: '复制SVG',
      svgs: [
        'shu',
        'shuqian',
        'jingdou',
        'ren',
        'yuanbao',
        'yiyuan',
        'danquan',
        'shangdian',
        'shou',
        'gouwudai',
        'hongbao',
        'jiangbei',
        'jiangpai',
        'kefu',
        'gongjuxiang',
        'jianzhu',
        'xin',
        'gantanhao',
        'shoujichongzhi',
        'touzixinjihui',
        'touziribao',
        'yun',
        'paihang',
        'qihuo',
        'huizhang',
        'shuye',
        'qipao',
        'shuidi',
        'huo',
        'niu',
        'huangguan',
        'mubiao',
        'zhibo',
        'dunpai',
        'libao',
        'yangjiaofu',
        'gupiao',
        'jisuanqi',
        'zhangdan',
        'gouwuche',
        'che',
        'youxi',
        'qianbao',
        'zuanshi',
        'tongqian',
        'yinhang',
        'yinhangka',
        'shandian',
        'lingquanzhongxin',
        'huangjin'
      // eslint-disable-next-line import/no-dynamic-require
      ].map(name => require(`../../asset/icons/normal/${name}.svg`)),
      normalSVG: [
        '书',
        '书签',
        '京豆',
        '人',
        '元宝',
        '医院',
        '单券',
        '商店',
        '手',
        '购物袋',
        '红包',
        '奖杯',
        '奖牌',
        '客服',
        '工具箱',
        '建筑',
        '心',
        '感叹号',
        '手机充值',
        '投资新机会',
        '投资日报',
        '云',
        '排行',
        '期货',
        '徽章',
        '树叶',
        '气泡',
        '水滴',
        '火',
        '牛',
        '皇冠',
        '目标',
        '直播',
        '盾牌',
        '礼包',
        '羊角符',
        '股票',
        '计算器',
        '账单',
        '购物车',
        '车',
        '游戏',
        '钱包',
        '钻石',
        '铜钱',
        '银行',
        '银行卡',
        '闪电',
        '领券中心',
        '黄金'
      ],
      channelSvgFiles: [
        'ETF',
        'ETFzhishutu',
        'zhongyiyuan',
        'jiaoyidan',
        'jingdonggongyi',
        'jingdongjindian',
        'jingxuanhaoji',
        'youhuiquan',
        'tiyanjin',
        'baoxian',
        'xinyongka',
        'xinyongkahuankuan',
        'jiekuan',
        'jiankangjin',
        'mianxigou',
        'yanglaobaozhang',
        'fenqimianxi',
        'quanshanglicai',
        'yiliaobaoxiao',
        'dandanfan',
        'huikuanzhuanqu',
        'guozhainihuigou',
        'quanziguangchang',
        'zaixiankefu',
        'jijin',
        'jijinPK',
        'jijintiyanjin',
        'jijinpaihang',
        'jijinzuhe',
        'jijinzixuan',
        'jijinzhenduan',
        'duohuaduozan',
        'haowujinbang',
        'zinvwuyou',
        'anxinhuan',
        'dingtouzhuanqu',
        'dingtoujiayouzhan',
        'baobaojin',
        'shishijinjia',
        'shipandasai',
        'shipanjianghu',
        'jiatingyingjijin',
        'xiaobaijijin',
        'xiaobaishouyue',
        'xiaojinbao',
        'xiaojinka',
        'xiaojinku',
        'xiaojinkuVIP',
        'gongju',
        'gongzilicai',
        'gongzijisuanqi',
        'nianjin',
        'xinyuanjihua',
        'huiminbao',
        'yiwaixian',
        'wodedingtou',
        'shoujichongzhi',
        'touzixinjihui',
        'touziribao',
        'touziqingyubiao',
        'touzijinnang',
        'baojiayouli',
        'zhishujinhualun',
        'zhishuxuanji',
        'zhibiaoxuangu',
        'zanqianhua',
        'shouyimingxi',
        'shouyijilu',
        'shuzixiaojinka',
        'xinfajijin',
        'xinkelicai',
        'xingushengou',
        'nuanxinbao',
        'qihuo',
        'quanyiying',
        'chakanbaodan',
        'mengxiangjihua',
        'monidasai',
        'monichaogu',
        'huikuanzhuanru',
        'qingcangjilu',
        'qianliji',
        'chaogudasai',
        'remenbankuai',
        'remenhuodong',
        'niuguxuanji',
        'caizhangdie',
        'licaiTV',
        'licaichanpin',
        'licaiyoupin',
        'licaizhoubaogao',
        'licaiyuebao',
        'licainiuren',
        'licaifulishe',
        'licaijin',
        'licaiheika',
        'baitiaotie',
        'baitiaobaike',
        'panzhongzhibo',
        'mubiaodingtou',
        'mubiaoying',
        'mubiaojihua',
        'zhiboguangchang',
        'miaowenjingyi',
        'jicunjin',
        'congmingtouzizhe',
        'gupiao',
        'gupiaokaihu',
        'zidongchong',
        'dingdangongyi',
        'zhangdanfenqi',
        'chaoyibao',
        'chedidai',
        'zhuanrangpingtai',
        'huankuanzhushou',
        'huanbaitiao',
        'huanjintiao',
        'zhongjixian',
        'jinjiatixing',
        'jinku+',
        'jinrongbaike',
        'yinhangjingxuan',
        'shandiantuikuan',
        'wendabeifen',
        'fangaixian',
        'xianedingtou',
        'yuyuechexian',
        'gaoduanlicai',
        'huangjin',
        'huangjinT+D',
        'huangjinhuishou',
        'huangjindingtou',
        'huangjindou',
        'longhubang'
      // eslint-disable-next-line import/no-dynamic-require
      ].map(name => require(`../../asset/icons/channel/${name}.svg`)),
      channelSvg: [
        'ETF',
        'ETF指数图',
        '中医院',
        '交易单',
        '京东公益',
        '京东金店',
        '京选好基',
        '优惠券',
        '体验金',
        '保险',
        '信用卡',
        '信用卡还款',
        '借款',
        '健康金',
        '免息购',
        '养老保障',
        '分期免息',
        '券商理财',
        '医疗报销',
        '单单返',
        '回款专区',
        '国债逆回购',
        '圈子广场',
        '在线客服',
        '基金',
        '基金PK',
        '基金体验金',
        '基金排行',
        '基金组合',
        '基金自选',
        '基金诊断',
        '多花多攒',
        '好物金榜',
        '子女无忧',
        '安心还',
        '定投专区',
        '定投加油站',
        '宝宝金',
        '实时金价',
        '实盘大赛',
        '实盘江湖',
        '家庭应急金',
        '小白基金',
        '小白守约',
        '小金保',
        '小金卡',
        '小金库',
        '小金库VIP',
        '工具',
        '工资理财',
        '工资计算器',
        '年金',
        '心愿计划',
        '惠民保',
        '意外险',
        '我的定投',
        '手机充值',
        '投资新机会',
        '投资日报',
        '投资晴雨表',
        '投资锦囊',
        '报价有礼',
        '指数进化论',
        '指数选基',
        '指标选股',
        '攒钱花',
        '收益明细',
        '收益记录',
        '数字小金卡',
        '新发基金',
        '新客理财',
        '新股申购',
        '暖心宝',
        '期货',
        '权益盈',
        '查看保单',
        '梦想计划',
        '模拟大赛',
        '模拟炒股',
        '汇款转入',
        '清仓记录',
        '潜力基',
        '炒股大赛',
        '热门板块',
        '热门活动',
        '牛股选基',
        '猜涨跌',
        '理财TV',
        '理财产品',
        '理财优品',
        '理财周报告',
        '理财月报',
        '理财牛人',
        '理财福利社',
        '理财金',
        '理财黑卡',
        '白条提额',
        '白条百科',
        '盘中直播',
        '目标定投',
        '目标盈',
        '目标计划',
        '直播广场',
        '秒问京医',
        '积存金',
        '聪明投资者',
        '股票',
        '股票开户',
        '自动充',
        '订单公益',
        '账单分期',
        '超医保',
        '车抵贷',
        '转让平台',
        '还款助手',
        '还白条',
        '还金条',
        '重疾险',
        '金价提醒',
        '金库+',
        '金融百科',
        '银行精选',
        '闪电退款',
        '问答备份',
        '防癌险',
        '限额定投',
        '预约车险',
        '高端理财',
        '黄金',
        '黄金T+D',
        '黄金回收',
        '黄金定投',
        '黄金豆',
        '龙虎榜'
      ]
    };
  },
  methods: {
    svgCopyClick(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      this.copyToClip(text);
    },
    copyToClip(contents, message) {
      const textarea = document.createElement('textarea');
      textarea.value = contents;
      document.body.appendChild(textarea);
      textarea.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      document.body.removeChild(textarea);
      if (message == null) {
        this.showTitle = '复制成功';
        setTimeout(() => {
          this.showTitle = '复制SVG';
        }, 1800);
      } else {
        // 其他
      }
    }
  },
  components: {
    // test
  }
};
</script>

<style lang="scss" scoped>
.detail-content {
  display: flex;
  flex-direction: row;
  // height: calc(100vh - 80px);
  background-color: #ffffff;
  // width: 100%;

  .detail-right {
    flex: 1;
    // height: calc(100vh - 80px);
    // overflow: scroll;
    box-sizing: border-box;

    .detail-right-title {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 42px;
      margin-bottom: 10px;
    }

    .detail-right-subtitle {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: normal;
      color: rgba(136, 136, 136, 1);
      line-height: 30px;
    }

    .detail-right-line {
      width: 1040px;
      height: 1px;
      background: rgba(232, 232, 232, 1);
      margin-top: 32px;
    }

    .detail-right-content {
      display: flex;
      margin-top: 40px;
      box-sizing: border-box;

      .detail-right-content-item {
        width: 340px;
        height: 110px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(232, 232, 232, 1);
        border-radius: 4px;
        display: flex;
        margin-right: 40px;
        align-items: center;
        cursor: pointer;

        &:hover {
          // background: #fff;
          -webkit-box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.08);
        }

        .detail-right-content-item-icon {
          width: 50px;
          height: 50px;
          background-color: red;
          margin-left: 24px;
          background-size: 100% 100%;
        }

        .detail-right-content-item-content {
          margin-left: 24px;
          display: flex;
          flex-direction: column;

          .detail-right-content-item-title {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: normal;
            color: rgba(0, 0, 0, 1);
          }

          .detail-right-content-item-subtitle {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: normal;
            color: rgba(136, 136, 136, 1);
            margin-top: 4px;
          }
        }
      }
    }
  }
}

.detail-right-icons {
  width: 100%;
  height: 100%;

  .icons-name {
    font-size: 32px;
    font-family: PingFang HK;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    line-height: 54px;
  }

  .icons-sub-title {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
  }

  .icons-title {
    margin-top: 30px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
  }
}

.svg-bg {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  flex-wrap: wrap;

  .svg-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 88px;
    height: 88px;
    .svg-content-red {
      display: none;
    }
    &:hover {
      .svg-content-red {
        content: '复制SVG';
        background-color: red;
        width: 88px;
        height: 88px;
        background: rgba(239, 64, 52, 1);
        border-radius: 8px;
        opacity: 0.95;
        position: absolute;
        top: -16px;
        left: 0px;
        font-size: 14px;
        font-family: PingFang HK;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .svg-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // width: 40px !important;
    // height: 40px !important;
  }

  .svg-name {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: normal;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 6px;
  }
}
</style>
