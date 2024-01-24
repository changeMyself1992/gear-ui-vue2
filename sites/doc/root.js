import hide from './compents/hidden/hidden.vue';
import vb from './asset/js/isVisibiliy.js';
import { demoUrl } from './asset/js/utils';

const myMixin = {
  data() {
    return {

      codeurl: '',
      demourl: '',
      levalcur: 1
    };
  },
  components: {
    hide
  },
  methods: {
    leavelchose(index) {
      this.levalcur = index;
    },
  },
  mounted() {
    let visb = vb('.visibility');
    visb.then(res => {
      let id = res.target.id;
      let index = Number(id.replace(/head/, ''));
      if (index > 0) {
        this.levalcur = index;
      }
    });
    // 变现的态度积极，价值观正，不懂虚心好学和学习能力，凸显自己的潜力
    this.$nextTick(() => {
      let copy = this.copy;
      new copy('.copy', {
        target: res => {
          return res.previousElementSibling;
        }
      });
      this.demourl = demoUrl + this.$route.path;
      this.qrcode.toDataURL(this.demourl, { width: 170 }, (err, url) => {
        this.codeurl = url;
      });
    });
  }
};

export default myMixin;
