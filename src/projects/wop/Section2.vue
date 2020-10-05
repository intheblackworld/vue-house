<template>
  <div>
    <div class="section2">
      <div class="bg-img"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(850);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  background-image: url('./s2/bg.jpg');
  background-size: cover;
  min-height: size(850);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   top: auto;
  //   bottom: 0;
  //   left: auto;
  //   right: 0;
  //   height: auto;
  // }
}

.img1 {
  width: size(405);
  left: 0;
  bottom: 0;
}

.img2 {
  width: size(500);
  left: 0;
  top: 0;
}

.logo {
  width: size(543);
  left: size(398);
  top: size(203);
}

.r {
  height: 100vh;
  min-height: size(850);
  right: size(83);
  top: size(0);
}

.t1 {
  width: size(752);
  left: size(293);
  top: size(507);
}

.t2 {
  width: size(751);
  left: size(294);
  top: size(820);
}

.light {
  mix-blend-mode: screen;
  // opacity: .1;
  // animation: light 3s linear 0s infinite alternate-reverse;
}

// @keyframes light {
//   to {
//     opacity: .3;
//   }
// }

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    min-height: auto;
    height: sizem(604 + 329);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
