import './index.scss'
import { createNamespace, addUnit } from '../../utils/common';
import { ParentMixin } from '../../mixins/relation';

const [createComponent, bem] = createNamespace('grid');

export default createComponent({
  mixins: [ParentMixin('gearGrid')],

  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    columnNum: {
      type: [Number, String],
      default: 4,
    },
    center: {
      type: Boolean,
      default: true,
    }
  },

  computed: {
    style() {
      const { gutter } = this;

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter),
        };
      }
    },
  },

  render() {
    return (
      <div
        style={this.style}
        class={[bem()]}
      >
        {this.slots()}
      </div>
    );
  },
});
