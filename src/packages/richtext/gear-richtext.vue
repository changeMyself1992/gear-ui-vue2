<template>
  <div class="richtext" ref="richtext"></div>
</template>
<script>
export default {
  name: 'GearRichtext',
  props: {
    richData: {
      type: Object,
      default: () => {
        return {
          message: '',
          richMessage: []
        };
      }
    }
  },
  data() {
    return {
      msg: ''
    };
  },

  computed: {},
  mounted() {
    const { message, richMessage } = this.richData;
    const msgArray = message.split('');
    if (Array.isArray(msgArray) && msgArray.length && Array.isArray(richMessage) && richMessage.length) {
      for (let i = 0; i < richMessage.length; i++) {
        const { start, end, fontSize, fontFamily, fontWeight, color, click, callback, textImg, width, height, imgStyleStr } = richMessage[i];
        const str = msgArray.slice(start, end + 1).join('');
        let id = this.uuid();
        let html = '';
        if (textImg) {
          id += '_img';
          html = `<img  ${click ? `id=${id}` : ''}  src="${textImg}" style="${width ? `width:${width}; ` : ''}${height ? `height:${height};` : ''} ${imgStyleStr ? imgStyleStr : ''}"/>`;
        } else {
          id += '_text';
          html = `
          <span 
            ${click ? `id=${id}` : ''} 
            style="${color ? `color: ${color};` : ''} ${fontSize ? `font-size: ${fontSize};` : ''} ${fontFamily ? `font-family: ${fontFamily};` : ''} ${
            fontWeight ? `font-weight: ${fontWeight};` : ''
          } -webkit-tap-highlight-color: transparent;"
          >${str}</span>`;
        }
        this.$refs.richtext.innerHTML += html;
        if (click) {
          this.$nextTick(() => {
            document.getElementById(id).onclick = e => {
              e.stopPropagation();
              callback();
            };
          });
        }
      }
    }
  },
  methods: {
    uuid() {
      var s = [];
      var hexDigits = '0123456789abcdef';
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-';

      var uuid = s.join('');
      return uuid;
    }
  }
};
</script>
