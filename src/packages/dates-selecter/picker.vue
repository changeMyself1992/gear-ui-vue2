<template>
  <dl ref="dl">
    <dd v-for="(item, ind) in mydata" :key="ind">
      {{ item.label }}
    </dd>
  </dl>
</template>

<script>
import { TouchMixin } from '../../mixins/touch';
import { preventDefault } from '../../utils/index';
export default {
  name: 'gear-picker',
  props: {
    type: {
      type: String
    },
    change: {
      type: Function
    },
    outindex: {
      type: Number,
      default: 2
    },
    mydata: {
      type: Array
    }
  },
  mixins: [TouchMixin],
  watch: {
    outindex(newV, oldV) {
      this.index = newV;
      // this.initData();
      this.renderPosition(this.$props.outindex);
    }
  },
  data() {
    return {
      currentTop: 0,
      moveTop: 0,
      moveDis: 0,
      index: this.$props.outindex,
      height: 49,
      childrenLength: 0
    };
  },
  mounted() {
    this.bindTouchEvent(this.$refs.dl);
    this.initData();
  },
  updated() {
    this.renderPosition(this.$props.outindex);
  },
  methods: {
    initData() {
      var top = -(this.index * this.height);
      this.$refs.dl.style['-webkit-transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      this.$refs.dl.style['transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      this.$refs.dl.style['-webkit-transition-duration'] = '300ms';
      this.$refs.dl.style['transition-duration'] = '300ms';
      this.$refs.dl.style['-webkit-transform'] = `translate3d(0px, ${top}px,0px)`;
      this.$refs.dl.style['transform'] = `translate3d(0px, ${top}px,0px)`;

      var childrenes = this.$refs.dl.parentNode.parentNode.children;
      if (childrenes.length > 3) {
        for (var i = 0; i < childrenes.length; i++) {
          childrenes[i].style.width = 100 / childrenes.length + '%';
        }
      }

      this.$nextTick(() => {
        this.setIndex(this.$refs.dl);
      });
    },
    renderPosition: function () {
      var top = -(this.index * this.height);
      this.$refs.dl.style['-webkit-transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      this.$refs.dl.style['transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      this.$refs.dl.style['-webkit-transition-duration'] = '300ms';
      this.$refs.dl.style['transition-duration'] = '300ms';
      this.$refs.dl.style['-webkit-transform'] = `translate3d(0px, ${top}px,0px)`;
      this.$refs.dl.style['transform'] = `translate3d(0px, ${top}px,0px)`;

      var childrenes = this.$refs.dl.parentNode.parentNode.children;
      if (childrenes.length > 3) {
        for (var i = 0; i < childrenes.length; i++) {
          childrenes[i].style.width = 100 / childrenes.length + '%';
        }
      }

      this.$nextTick(() => {
        this.setIndex(this.$refs.dl);
      });
    },
    onTouchStart: function (ev) {
      preventDefault(ev, true);
      this.childrenLength = ev.target.parentNode.children.length;
      this.currentTop = ev.targetTouches[0].clientY;
      // console.log( 'currentTop:' + this.currentTop );
    },
    onTouchMove: function (ev) {
      preventDefault(ev, true);
      this.moveTop = ev.targetTouches[0].clientY;
      this.moveDis = Number(this.moveTop) - Number(this.currentTop);

      var top = -(this.index * this.height) + this.moveDis;

      ev.target.parentNode.style['-webkit-transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      ev.target.parentNode.style['transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      ev.target.parentNode.style['-webkit-transition-duration'] = '300ms';
      ev.target.parentNode.style['transition-duration'] = '300ms';
      ev.target.parentNode.style['-webkit-transform'] = `translate3d(0px, ${top}px,0px)`;
      ev.target.parentNode.style['transform'] = `translate3d(0px, ${top}px,0px)`;

      // console.log('moveTop:' + this.moveTop);
      // console.log('moveDis:' + this.moveDis);
    },
    onTouchEnd: function (ev) {
      preventDefault(ev, true);
      if (this.moveDis >= this.height / 2) {
        const num = Math.floor(this.moveDis / this.height) || 1;
        this.index = this.index - num;

        if (this.index < 1) {
          this.index = 0;
        }
      }

      if (this.moveDis <= -this.height / 2) {
        const num = -Math.floor(this.moveDis / this.height) || 1;

        this.index = this.index + num;
        if (this.index > this.childrenLength - 1) {
          this.index = this.childrenLength - 1;
        }
      }

      var top = -(this.index * this.height);

      ev.target.parentNode.style['-webkit-transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      ev.target.parentNode.style['transition-timing-function'] = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
      ev.target.parentNode.style['-webkit-transition-duration'] = '300ms';
      ev.target.parentNode.style['transition-duration'] = '300ms';
      ev.target.parentNode.style['-webkit-transform'] = `translate3d(0px, ${top}px,0px)`;
      ev.target.parentNode.style['transform'] = `translate3d(0px, ${top}px,0px)`;
      this.setIndex(ev.target.parentNode);

      // debugger;

      var changeObj = {};
      changeObj.type = this.$props.type;
      changeObj.index = this.index;

      this.$props.change && this.$props.change(changeObj);
    },
    setIndex: function (scrollBox) {
      var childrens = scrollBox.children;

      for (var i = 0; i < childrens.length; i++) {
        if (i === this.index) {
          childrens[i].className = 'focus';
        } else {
          childrens[i].className = '';
        }
      }
    }
  }
};
</script>
