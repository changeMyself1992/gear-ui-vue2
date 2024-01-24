<template>
  <div class="svg-logo-wrapper">
    <svg viewBox="0 0 720 250" class="svg-logo">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">API</text>
      </symbol>
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SvgLogo',
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
$colors: #5396ff, rgba(245, 108, 108, 0.8), rgba(103, 194, 58, 0.8);
$max: length($colors);
$dash: 70;
$dash-gap: 10;
$dash-space: $dash * ($max - 1) + $dash-gap * $max;
$time: 6s;
$time-step: $time/$max;

@import url(https://storage.jd.com/opensans/css.css);

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -($dash + $dash-gap) * $max;
  }
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -($dash + $dash-gap) * $max;
  }
}

.svg-logo-wrapper {
  font: 5em/1 Open Sans, Impact;
  text-transform: uppercase;
  font-size: 240px;
  margin: 0;

  .svg-logo {
    position: absolute;
    height: 100%;

    /* Main styles */
    .text {
      fill: none;
      stroke-width: 6;
      stroke-linejoin: round;
      stroke-dasharray: $dash $dash-space;
      stroke-dashoffset: 0;
      -webkit-animation: stroke $time infinite linear;
      animation: stroke $time infinite linear;

      @for $item from 1 through $max {
        &:nth-child(#{$max}n + #{$item}) {
          $color: nth($colors, $item);
          stroke: $color;
          -webkit-animation-delay: -($time-step * $item);
          animation-delay: -($time-step * $item);
        }
      }
    }
  }
}
</style>
