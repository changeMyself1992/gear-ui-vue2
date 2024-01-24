import './index.scss';
import { createNamespace, isDef } from '../../utils/common';
import GearField from '../field/index.js';
import LocalLoading from '../local-loading';

const [createComponent, bem] = createNamespace('switch');
export default createComponent({
  mixins: [],
  props: {
    /** *****Field的属性***********************start***** */
    title: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'row'
    },
    border: {
      type: String,
      default: ''
    },
    /** *****Field的属性***********************end******* */
    value: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // large大  small小 
    size: {
      type: String,
      default: 'large'
    },
    // 是否要返回一个简洁的开关组件（不被field包裹）
    isSuccinct: {
      type: Boolean,
      default: false
    },
    // 不传的话默认是主题红
    themeColor: {
      type: String,
      default: ''
    },
    // 是否为加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 自定义loading图标
    loadingIcon: {
      type: Boolean,
      default: false
    }

  },

  data() {
    return {

    };
  },

  watch: {
 
  },

  computed: {
    switchStyle() {
      if (this.value && this.themeColor) {
        return {
          'border-color': this.themeColor,
          'background-color': this.themeColor
        };
      }
      return {};
    }
  },

  created() { },
  mounted() {

  },

  methods: {
    onClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    },
    genLoading() {
      if (this.loading) {
        let iconUrl = '';
        if (this.value) iconUrl = this.loadingIcon ? this.loadingIcon : 'https://img13.360buyimg.com/imagetools/jfs/t1/146339/33/37699/3523/64a23808F6aac7ed4/e055dc22d283e2a4.png';
        else iconUrl = 'https://img14.360buyimg.com/imagetools/jfs/t1/110334/6/39925/3508/64a23808F6fb03cd3/3bb41faad374bd41.png';

        return <LocalLoading class={bem('loading')} iconUrl={iconUrl} />;
      }
    }
  },
  render() {
    const Switch = (
      <label
        class={[
          bem([this.size, this.disabled && 'disable', this.value && 'checked', this.loading && 'loading'])
        ]}
        onClick={this.onClick}
      >
        <span class={bem('show')} style={this.switchStyle}>
          <span class={bem('node')}>{this.genLoading()}</span>
        </span>
      </label>
    );
    if (this.isSuccinct) {
      return (Switch);
    } else {
      return (
        <GearField label={this.title} state={true} direction={this.direction} border={this.border} flexDirection="row">
          <div class={['gear-field-switch']}>
            {Switch}
          </div>
        </GearField>
      );
    }
  }
});
