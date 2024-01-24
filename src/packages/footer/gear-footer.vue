<template>
  <div class="footer-box">
    <div class="footer-box__title">
      <img v-if="typeof title === 'string'" :src="title" class="footer-box__title__img" />
      <gear-richtext v-if="typeof title === 'object'" :richData="title" />
    </div>

    <div v-if="optison.length > 0" class="footer-box__options">
      <div class="footer-box__options__item" v-for="item in optison" :key="item.id">
        <img class="footer-box__options__item__icon" :src="item.icon" />
        <span class="footer-box__options__item__title">{{ item.title }}</span>
        <span class="footer-box__options__item__desc">{{ item.desc }}</span>
      </div>
    </div>

    <div v-if="descs.length > 0" class="footer-box__desc">
      <template v-for="(item, index) in descs">
        <div v-if="typeof item === 'string'" :key="index" class="footer-box__desc__label">{{ item }}</div>
        <gear-richtext v-else-if="typeof item === 'object'" :key="index" :richData="title" />
      </template>
    </div>
  </div>
</template>
<script>
import GearRichtext from '../richtext/index.js';
export default {
  name: 'GearFooter',
  components: { GearRichtext },
  props: {
    // 可以是一个字符串，也可以是一个richtext富文本对象
    title: {
      type: String | Object,
      default: () => {
        return '';
      }
    },
    // 业务利益点
    optison: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 描述列表
    descs: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>
