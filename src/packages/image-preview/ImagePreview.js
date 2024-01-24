// Utils
import { bem, createComponent } from './shared';


// Mixins
import { TouchMixin } from '../../mixins/touch';
import { BindEventMixin } from '../../mixins/bind-event';
import { PopupMixin } from '../../mixins/popup';

// Components
import Swipe from '../swipe/index';
import ImagePreviewItem from './ImagePreviewItem';

export default createComponent({
  mixins: [
    PopupMixin({
      skipToggleEvent: true,
    }),
    TouchMixin,
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.resize, true);
      bind(window, 'orientationchange', this.resize, true);
    }),
  ],

  props: {
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    overlayStyle: Object,
    images: {
      type: Array,
      default: () => [],
    },
    loop: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3,
    },
    maxZoom: {
      type: [Number, String],
      default: 3,
    },
    transition: {
      type: String,
      default: 'gear-fade',
    },
    showIndex: {
      type: Boolean,
      default: true,
    },
    swipeDuration: {
      type: [Number, String],
      default: 500,
    },
    startPosition: {
      type: [Number, String],
      default: 0,
    },
    overlayClass: {
      type: String,
      default: bem('overlay'),
    },
    closeIcon: {
      type: String,
      default: 'clear',
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },

  data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null,
    };
  },

  mounted() {
    this.resize();
  },

  watch: {
    startPosition: 'setActive',

    value(val) {
      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(() => {
          this.resize();
          this.$refs.swipe.swipeTo(+this.startPosition, { immediate: true });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active],
        });
      }
    },
  },

  methods: {
    resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        const rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },

    emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },

    emitScale(args) {
      this.$emit('scale', args);
    },

    setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },

    genIndex() {
      if (this.showIndex) {
        return (
          <div class={bem('index')}>
            {this.slots('index', { index: this.active }) ||
              `${this.active + 1} / ${this.images.length}`}
          </div>
        );
      }
    },



    genImages() {
      const swipeSlots = {
        indicator: () => <div />,
      };

      if (this.images.length) {
        return (
          <Swipe
            ref="swipe"
            autoplay={0}
            loop={this.loop}
            class={bem('swipe')}
            duration={this.swipeDuration}
            initialSwipe={this.startPosition}
            indicatorColor="white"
            onChange={this.setActive}
            scopedSlots={swipeSlots}
          >
            {this.images.map((image) => (
              <ImagePreviewItem
                src={image}
                show={this.value}
                active={this.active}
                maxZoom={this.maxZoom}
                minZoom={this.minZoom}
                rootWidth={this.rootWidth}
                rootHeight={this.rootHeight}
                onScale={this.emitScale}
                onClose={this.emitClose}
              />
            ))}
          </Swipe>
        )
      }
    },


    onClosed() {
      this.$emit('closed');
    },

    // @exposed-api
    swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    },
  },

  render() {
    return (
      <transition name={this.transition} onAfterLeave={this.onClosed}>
        {this.shouldRender ? (
          <div vShow={this.value} class={[bem(), this.className]}>

            {this.genImages()}
            {this.genIndex()}

          </div>
        ) : null}
      </transition>
    );
  },
});
