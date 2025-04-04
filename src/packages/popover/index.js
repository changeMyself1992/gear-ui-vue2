import './index.scss'

import { createPopper, offsetModifier } from './popper';
import { createNamespace, isServer } from '../../utils/common';
// Mixins
import { ClickOutsideMixin } from '../../mixins/click-outside';
// Components
import Popup from '../free-popup';
import Badge from '../badge';
const [createComponent, bem] = createNamespace('popover');

export default createComponent({
  mixins: [
    ClickOutsideMixin({
      event: 'touchstart',
      method: 'onClickOutside',
    }),
  ],

  props: {
    value: Boolean,
    trigger: String,
    overlay: Boolean,
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    theme: {
      type: String,
      default: 'dark',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    getContainer: {
      type: [String, Function],
      default: 'body',
    },
    closeOnClickAction: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    value: 'updateLocation',
    placement: 'updateLocation',
  },

  mounted() {
    this.updateLocation();
  },

  beforeDestroy() {
    if (this.popper) {
      if (!isServer) {
        window.removeEventListener('animationend', this.updateLocation);
        window.removeEventListener('transitionend', this.updateLocation);
      }
      this.popper.destroy();
      this.popper = null;
    }
  },

  methods: {
    createPopper() {
      const popper = createPopper(this.$refs.wrapper, this.$refs.popover.$el, {
        placement: this.placement,
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
              gpuAcceleration: false,
            },
          },
          {
            ...offsetModifier,
            options: {
              offset: this.offset,
            },
          },
        ],
      });
      if (!isServer) {
        window.addEventListener('animationend', this.updateLocation);
        window.addEventListener('transitionend', this.updateLocation);
      }
      return popper;
    },

    updateLocation() {
      this.$nextTick(() => {
        if (!this.value) {
          return;
        }

        if (!this.popper) {
          this.popper = this.createPopper();
        } else {
          this.popper.setOptions({
            placement: this.placement,
          });
        }
      });
    },

    renderAction(action, index) {
      const { icon, text, disabled, className } = action;
      return (
        <div
          role="menuitem"
          class={[bem('action', { disabled, 'with-icon': icon }), className]}
          onClick={() => this.onClickAction(action, index)}
        >
          {icon &&
            <Badge class={bem('action-badge')} props={action.badgeProps || {}} >
              <img src={icon} class={bem('action-icon')} />
            </Badge>
          }
          <div class={[bem('action-text'), 'gear-hairline--bottom']}>{text}</div>
        </div>
      );
    },

    onToggle(value) {
      this.$emit('input', value);
    },

    onClickWrapper() {
      if (this.trigger === 'click') {
        this.onToggle(!this.value);
      }
    },

    onTouchstart(event) {
      event.stopPropagation();
      this.$emit('touchstart', event);
    },

    onClickAction(action, index) {
      if (action.disabled) {
        return;
      }

      this.$emit('select', action, index);

      if (this.closeOnClickAction) {
        this.$emit('input', false);
      }
    },

    onClickOutside() {
      this.$emit('input', false);
    },

    onOpen() {
      this.$emit('open');
    },

    /* istanbul ignore next */
    onOpened() {
      this.$emit('opened');
    },

    onClose() {
      this.$emit('close');
    },

    /* istanbul ignore next */
    onClosed() {
      this.$emit('closed');
    },
  },

  render() {
    return (
      <span ref="wrapper" class={bem('wrapper')} onClick={this.onClickWrapper}>
        <Popup
          ref="popover"
          value={this.value}
          class={bem([this.theme])}
          overlay={this.overlay}
          position={null}
          transition="gear-popover-zoom"
          lockScroll={false}
          getContainer={this.getContainer}
          onOpen={this.onOpen}
          onClose={this.onClose}
          onInput={this.onToggle}
          onOpened={this.onOpened}
          onClosed={this.onClosed}
          nativeOnTouchstart={this.onTouchstart}
        >
          <div class={bem('arrow')} />
          <div class={bem('content')} role="menu">
            {this.slots('default') || this.actions.map(this.renderAction)}
          </div>
        </Popup>
        {this.slots('reference')}
      </span>
    );
  },
});
