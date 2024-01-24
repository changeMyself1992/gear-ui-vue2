<template>
  <div class="detail-content">
    <div class="detail-right">
      <div class="detail-right-download">
        <div class="detail-right-title">设计资源</div>
        <div class="detail-right-subtitle">这里提供与京东金融App 相关的设计资源下载，更多设计资源正在整理和完善中</div>
        <div class="detail-right-content">
          <div class="detail-right-content-item" v-for="(item, index) in contents" :key="'detail-right-content-item-' + index" @click="clickBtn(item)">
            <div class="detail-right-content-item-icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="detail-right-content-item-content">
              <div class="detail-right-content-item-title">{{ item.title }}</div>
              <div class="detail-right-content-item-subtitle">{{ item.subtitle }}</div>
            </div>
          </div>
        </div>
      </div>

      <el-dialog title="京东金融 APP UI 设计资源" :visible.sync="dialogVisible" width="50%" custom-class="custom-dialog">
        <p class="subtitle">Sketch 设计规范文件使用需发送邮件申请，具体邮件相关内容如下：</p>
        <div class="content">
          <div class="content__1">
            收件人：org.udc1@jd.com<br />
            抄送：业务方相关人员 + yangzhiyuan24@jd.com + chengzhuan@jd.com + gaishengping@jd.com<br />
            标题：【京东金融设计规范申请】XXX改版-APP设计规范申请提需<br />
            邮件内容:<br />
          </div>
          <div class="content__2">
            1、背景说明：请说明项目的情况以及为什么使用规范。 <br />
            例：因XXX需要增加XXX，在设计中需要与京东APP主站对齐，保持交互视觉规范一致，现向移动产品设计部申请京东主站APP的交互视觉设计规范文件。<br />
            2、上线位置：请说明具体上线的端（APP/PC/M）以及位置。 <br />
            例：京东金融APP-首页XXX，线上入口如下图所示 <br />
            3、所属部门：XXXX 例：京东集团-京东科技-市场与平台运营中心-平台产品部<br />
            4、附件：如有其他辅助说明资料可添加至附件。<br />
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <div class="custom-btn" @click="dialogVisible = false">知道了</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'design-resource',
  components: {},
  data() {
    return {
      // 设计资源列表 默认项
      contents: [
        {
          title: 'Sketch 设计规范',
          subTitle: '京东金融UI规范及组件',
          icon: 'https://static-ftcms.jd.com/p/files/64f04bd722e7430b5497f463.png'
        }
      ],
      dialogVisible: false
    };
  },
  mounted() {
    this.initResources();
  },
  methods: {
    initResources() {
      // 从内容配置平台获取 设计资源列表
      // 内容配置平台地址: http://text.jr.jd.com/schema/edit/100004355  ->  设计资源列表
      if (window?.data_source_100004355) {
        this.contents = window.data_source_100004355?.Resources;
      }
    },

    clickBtn(resourcesItem) {
      // 设计资源列表元素被点击时 判断是否有下载链接
      if (resourcesItem?.downURL) {
        window.open(resourcesItem.downURL);
      } else {
        this.dialogVisible = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-content {
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #ffffff;

  .detail-right {
    flex: 1;
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

    .detail-right-content {
      display: flex;
      margin-top: 40px;
      box-sizing: border-box;
      flex-wrap: wrap;

      .detail-right-content-item {
        width: 340px;
        height: 110px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(232, 232, 232, 1);
        border-radius: 4px;
        display: flex;
        margin-right: 40px;
        margin-bottom: 40px;
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
</style>

<style lang="scss" >
.custom-dialog {
  border-radius: 12px;

  // 这个强行定位其实不做完全该这么是为了满足ui样式，当对话框非常大的时候有问题***start
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  top: 50%;
  transform: translateY(-50%);
  // 这个强行定位其实不该这么做完全是为了满足ui样式，当对话框非常大的时候有问题***end
  .el-dialog__header {
    padding: 23px 20px 6px 29px;
    .el-dialog__title {
      line-height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #000000;
    }
  }
  .el-dialog__body {
    padding: 0 20px 0 20px;
  }

  .el-dialog__footer {
    padding: 16px 20px 16px 20px;
  }

  .subtitle {
    margin: 0 0 10px 9px;
    line-height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    color: #666666;
  }
  .content {
    padding: 16px;
    background: #f4f3f8;
    border-radius: 12px;

    &__1,
    &__2 {
      font-size: 14px;
      font-weight: normal;
      color: #000000;
      line-height: 26px;
      text-align: justify;
    }

    &__1 {
      font-family: PingFangSC-Medium;
    }
    &__2 {
      font-family: PingFangSC-Regular;
    }
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    .custom-btn {
      width: 148px;
      height: 52px;
      background: #f53137;
      border-radius: 35px;
      border: none;
      line-height: 52px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>
