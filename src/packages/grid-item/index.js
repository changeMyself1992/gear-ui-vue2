import './index.scss'
// Utils
import { createNamespace, addUnit } from '../../utils/common';

// Mixins
import { ChildrenMixin } from '../../mixins/relation';

// Components
import Image from '../image/index';
import Badge from '../badge/index';


const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('gearGrid')],

  props: {
    text: String,
    //图片链接
    icon: String,
    badgeProps: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  computed: {
    style() {
      const { square, gutter, columnNum } = this.parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent,
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },

    contentStyle() {
      const { square, gutter } = this.parent;

      if (square && gutter) {
        const gutterValue = addUnit(gutter);

        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto',
        };
      }
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event, this.$props);
    },

    genIcon() {
      if (this.icon) {
        if (Object.keys(this.badgeProps).length > 0) {
          return (
            <Badge {...{ props: this.badgeProps }}>
              <Image class={bem('icon')} src={this.icon} width={this.parent.iconSize} height={this.parent.iconSize} />
            </Badge>
          )
        } else {
          return (<Image class={bem('icon')} src={this.icon} width={this.parent.iconSize} height={this.parent.iconSize} />);
        }
      }
    },

    getText() {
      const textSlot = this.slots('text');

      if (textSlot) {
        return textSlot;
      }

      if (this.text) {
        return <span class={bem('text')}>{this.text}</span>;
      }
    },

    genContent() {
      const slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.genIcon(), this.getText()];
    },
  },

  render() {
    const {
      center,
      square,
      gutter,
      direction
    } = this.parent;

    return (
      <div class={[bem({ square })]} style={this.style}>
        <div
          style={this.contentStyle}
          class={[
            bem('content', [
              direction,
              {
                center,
                square
              },
            ])
          ]}
          onClick={(event) => { this.onClick(event) }}
        >
          {this.genContent()}
        </div>
      </div>
    );
  },
});
