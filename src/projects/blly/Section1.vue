<template>
  <div>
    <div class="section1" v-if="isPC">
      <img src="./s1/bgbottom.jpg" alt="" class="bg-img">
      <div class="cloud absolute flex">
        <img src="./s1/cloud.png" alt="" class="cloud-item">
        <img src="./s1/cloud.png" alt="" class="cloud-item">
      </div>

      <img src="./s1/bgtop.png" alt="" class="bg-img">
      <img src="./s1/hr.png" alt="" class="hr absolute" data-aos="fade-right" data-aos-delay="400">
      <img src="./s1/logo.png" alt="" class="logo absolute" data-aos="fade-down" data-aos-delay="200">
    </div>
    <div class="section1" v-if="isMobile">
      <img src="./m/1/bgbottom.jpg" alt="" class="bg-img">
      <div class="cloud absolute flex">
        <img src="./m/1/cloud.png" alt="" class="cloud-item">
        <img src="./m/1/cloud.png" alt="" class="cloud-item">
      </div>

      <img src="./m/1/bgtop.png" alt="" class="bg-img">
      <img src="./m/1/hr.png" alt="" class="hr absolute" data-aos="fade-right" data-aos-delay="400">
      <img src="./s1/logo.png" alt="" class="logo absolute" data-aos="fade" data-aos-delay="200">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.cloud {
  animation: move 50s 0s linear infinite;
  top: 0;
  left: 0;
}

.cloud-item {
  width: 100vw;
}

@keyframes move {
  to {
    left: -100vw;
  }
}

.hr {
  width: 100vw;
  height: auto;
  left: 0;
  bottom: size(-300);
}

.logo {
  width: size(483);
  left: size(134);
  top: size(462);
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
    min-height: 0;
    max-height: 500vh;
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(230);
    left: sizem(40);
    top: sizem(360);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
