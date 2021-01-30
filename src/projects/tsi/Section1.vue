<template>
  <div class="section1">
    <img src="./s1/bg.png" :alt="`${info.caseName}_mountain`" class="mountain" v-if="isPC" data-aos="fade" data-aos-delay="200">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_mountain`" class="mountain" v-if="isMobile" data-aos="fade" data-aos-delay="200">
    <img src="./s1/top.png" :alt="`${info.caseName}_top`" class="top" v-if="isPC" data-aos="fade" data-aos-delay="400">
    <img src="./s1/top_m.png" :alt="`${info.caseName}_top`" class="top" v-if="isMobile" data-aos="fade" data-aos-delay="400">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background: url('./s1/bg.png') fixed;
  background-size: auto;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.mountain {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -28.125vw;
}
.top {
  position: absolute;
  width: size(830);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(203);
}

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
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: sizem(665);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .mountain {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: auto;
    top: sizem(227);
  }
  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(157);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
