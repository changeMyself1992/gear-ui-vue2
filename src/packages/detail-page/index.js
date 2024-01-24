import './index.scss'
import { createNamespace } from '../../utils/common';
const [createComponent, bem] = createNamespace('detail-Page');
export default createComponent({
  mixins: [],
  props: {
    configList: {
      type: Array,
      default: function () {
        return [];
      }
    },
  },

  data() {
    return {

    };
  },

  watch: {

  },

  computed: {

  },

  created() { },
  mounted() {

  },

  methods: {

  },
  render() {

    return (
      <div class={bem()}>
        {this.configList.length && this.configList.map(pageItem => {
          return (
            <div class={bem('pageItem')}>
              <div class={bem('title')}>{pageItem.title}</div>
              {pageItem.paragraphs.length && pageItem.paragraphs.map((paragraphItem, index) => {
                const paragraphStyle = {}
                if (pageItem.paragraphMarginBottom && index !== pageItem.paragraphs.length - 1) paragraphStyle.marginBottom = pageItem.paragraphMarginBottom
                return (
                  <div class={bem('paragraphItem')} style={paragraphStyle}>{paragraphItem}</div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  },
});