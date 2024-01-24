
import './index.scss'
// Utils
import { createNamespace } from '../../utils/common';
import { on, off } from '../../utils/dom/event';

// Mixins
import { PortalMixin } from '../../mixins/portal';
import { ChildrenMixin } from '../../mixins/relation';
import moment from "moment";

// Components
import Cell from '../cell/index';
import FreePopup from '../free-popup';
import Radio from '../radio';
import DatesSelecter from '../dates-selecter';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
  mixins: [PortalMixin({ ref: 'wrapper' }), ChildrenMixin('gearDropdownMenu')],

  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: () => [],
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
    /**筛选方式  vertical竖向筛选， equalizationLayout均分布局，adaptiveLayout自适应布局, datetimerange 日期范围布局*/
    screeningMode: {
      type: String,
      default: 'vertical',
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {}
      },
    }
  },

  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false,
      currentDate1: '',
      currentDate2: '',
      pickerValue: ''
    };
  },

  computed: {
    displayTitle() {
      if (this.title) {
        return this.title;
      }

      const match = this.options.filter(
        (option) => option.value === this.value
      );
      return match.length ? match[0].text : '默认';
    },
  },

  watch: {
    showPopup(val) {
      this.bindScroll(val);
    },
    value: {
      immediate: true,
      handler(val) {
        if (Array.isArray(val) && val[0]) { this.currentDate1 = val[0] }
        if (Array.isArray(val) && val[1]) { this.currentDate2 = val[1] }
      }
    }
  },

  beforeCreate() {
    const createEmitter = (eventName) => () => this.$emit(eventName);

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },

  methods: {
    // @exposed-api
    toggle(show = !this.showPopup, options = {}) {
      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    },

    bindScroll(bind) {
      const { scroller } = this.parent;
      const action = bind ? on : off;
      action(scroller, 'scroll', this.onScroll, true);
    },

    onScroll() {
      this.parent.updateOffset();
    },

    onClickWrapper(event) {
      // prevent being identified as clicking outside and closed when use get-contaienr
      if (this.getContainer) {
        event.stopPropagation();
      }
    },
    handlerClick: function (picker) {
      this.$refs[picker].open();
    },
  },

  render() {
    const {
      zIndex,
      offset,
      overlay,
      duration,
      direction,
      activeColor,
      closeOnClickOverlay,
    } = this.parent;

    const style = { zIndex };
    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }

    let Options = null
    if (this.screeningMode === 'vertical') {
      const cellSlots = {
        default: (paramter) => {
          const active = paramter.slotProps.value === this.value;
          return (
            <p class={bem('text', { active })}>{paramter.slotProps.text}</p>
          )
        }
      };
      Options = (
        <Cell
          class={bem('option')}
          options={this.options}
          value={this.value}
          scopedSlots={cellSlots}
          onselect-item={(option) => {
            console.log("select-item事件触发")
            this.showPopup = false;
            if (option.value !== this.value) {
              this.$emit('input', option.value);
              this.$emit('change', option.value);
            }
          }}
          throttleTime={800}
        >
        </Cell >
      )
    } else if (this.screeningMode === 'equalizationLayout' || this.screeningMode === 'adaptiveLayout') {
      const cellSlots = {
        default: (paramter) => {
          const active = paramter.slotProps.value === this.value;
          return (
            <p class={bem('equalizationText', { active })}>{paramter.slotProps.text}</p>
          )
        }
      };
      Options = (
        <Radio
          class={bem(this.screeningMode)}
          options={this.options}
          value={this.value}
          onselect-item={(option) => {
            console.log("select-item事件触发")
            this.showPopup = false;
            if (option.value !== this.value) {
              this.$emit('input', option.value);
              this.$emit('change', option.value);
            }
          }}
          scopedSlots={cellSlots}
          radioType={this.screeningMode}
        >
        </Radio>
      )
    } else if (this.screeningMode === 'datetimerange') {
      const cellSlots = {
        default: (paramter) => {
          const active = paramter.slotProps.value === this.pickerValue;
          return (
            <p class={bem('equalizationText', { active })}>{paramter.slotProps.text}</p>
          )
        }
      };
      style.zIndex = 2 + zIndex,
        Options = (
          <div class={bem(this.screeningMode)}>
            <div class={bem('timeTitle')}>自定义时间</div>

            <div class={bem('timeRange')}>
              <div class={bem('inputBox')}>
                <input
                  autocomplete="off"
                  placeholder="开始时间"
                  class={bem('timeInput')}
                  readonly
                  value={this.currentDate1 && moment(this.currentDate1).format('YYYY年MM月DD日')}
                  onClick={() => {
                    this.handlerClick('picker1')
                  }} />
              </div>
              <span class={bem('zhi')}>至</span>
              <div class={bem('inputBox')}>
                <input
                  autocomplete="off"
                  placeholder="结束时间"
                  class={bem('timeInput')}
                  readonly
                  value={this.currentDate2 && moment(this.currentDate2).format('YYYY年MM月DD日')}
                  onClick={() => {
                    this.handlerClick('picker2')
                  }} />
              </div>
            </div>

            {this.pickerOptions && this.pickerOptions.shortcuts && Array.isArray(this.pickerOptions.shortcuts) && this.pickerOptions.shortcuts.length > 0 && (
              <Radio
                class={bem('pickerOptionsLayout')}
                options={this.pickerOptions.shortcuts}
                value={this.pickerValue}
                onselect-item={(option) => {
                  console.log("select-item事件触发:", option)
                  this.pickerValue = option.value
                  if (Array.isArray(option.timeRange) && option.timeRange.length === 2) {
                    this.currentDate1 = moment(option.timeRange[0]).format('YYYY-MM-DD')
                    this.currentDate2 = moment(option.timeRange[1]).format('YYYY-MM-DD')
                    this.$emit('input', [this.currentDate1, this.currentDate2]);
                    this.$emit('change', [this.currentDate1, this.currentDate2]);
                  }
                  // this.showPopup = false;
                }}
                scopedSlots={cellSlots}
                radioType='equalizationLayout'
              >
              </Radio>

            )}

          </div>
        )
    }

    const DatesSelecterBox = (
      <div>
        <DatesSelecter
          class="gear-datetime-picker"
          ref="picker1"
          onconfirm={
            e => {
              this.currentDate1 = e
              this.$emit('input', [this.currentDate1, this.currentDate2]);
              this.$emit('change', [this.currentDate1, this.currentDate2]);
            }
          }
          type="YMD"
          currentDate={this.currentDate1}
        >
        </DatesSelecter>
        <DatesSelecter
          class="gear-datetime-picker"
          ref="picker2"
          onconfirm={
            e => {
              this.currentDate2 = e
              this.$emit('input', [this.currentDate1, this.currentDate2]);
              this.$emit('change', [this.currentDate1, this.currentDate2]);
            }
          }
          type="YMD"
          currentDate={this.currentDate2}
        >
        </DatesSelecter>
      </div>
    )




    return (
      <div>
        <div
          vShow={this.showWrapper}
          ref="wrapper"
          style={style}
          class={bem([direction])}
          onClick={this.onClickWrapper}
        >
          <FreePopup
            vModel={this.showPopup}
            overlay={overlay}
            class={bem('content')}
            position={direction === 'down' ? 'top' : 'bottom'}
            round={true}
            duration={this.transition ? duration : 0}
            lazyRender={this.lazyRender}
            overlayStyle={{ position: 'absolute' }}
            closeOnClickOverlay={closeOnClickOverlay}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onOpened={this.onOpened}
            onClosed={() => {
              this.showWrapper = false;
              this.$emit('closed');
              this.pickerValue = ''
            }}
          >
            {Options}

            {this.slots('default')}
          </FreePopup>

        </div>
        {this.screeningMode === 'datetimerange' && DatesSelecterBox}
      </div>
    );
  },
});

