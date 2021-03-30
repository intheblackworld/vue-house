<template>
  <div class="section1">
    <div v-if="!isMobile">
      <img src="./s1/01_bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
      <img src="./s1/01_flower_r.png" :alt="`${info.caseName}_f1`" class="f1">
      <img src="./s1/01_logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200">
      <img src="./s1/01_text.png" :alt="`${info.caseName}_img`" class="text" data-aos="fade-up" data-aos-delay="400">
      <img src="./s1/01_title_1.png" :alt="`${info.caseName}_img`" class="title_1" data-aos="fade-up" data-aos-delay="600">
      <!--<img src="./s1/01_title_2.png" :alt="`${info.caseName}_img`" class="title_2" data-aos="fade-up" data-aos-delay="700">-->
      <img src="./s1/01_title_3.png" :alt="`${info.caseName}_img`" class="title_3" data-aos="fade-up" data-aos-delay="800">
      <img src="./s1/01_title_4.png" :alt="`${info.caseName}_img`" class="title_4" data-aos="fade-up" data-aos-delay="900">
    </div>
    <div v-else>
      <img src="./mobile/01/01_bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img">
      <img src="./mobile/01/01_flower_m.png" :alt="`${info.caseName}_f1`" class="f1">
      <img src="./mobile/01/01_logo_m.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade" data-aos-delay="200">
      <img src="./mobile/01/01_title_1_m.png" :alt="`${info.caseName}_img`" class="title_1" data-aos="fade" data-aos-delay="400">
      <img src="./mobile/01/01_title_2_m.png" :alt="`${info.caseName}_img`" class="title_2" data-aos="fade" data-aos-delay="600">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
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

}

.f1 {
  @include img_r_pc(800, 197, -150);
  top: calc(50% + 100vw * (177 - 540) / 1920);
  transform-origin: 100% 80%;
  animation: flow1 3s 0s ease-in-out infinite alternate;
  transform: skewY(2deg);
}

@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.logo {
  @include img_c_pc(620, 367);
  top: calc(50% + 100vw * (340 - 540) / 1920);
  z-index: 6;
}

.text {
  @include img_l_pc(118, 272, 254);
  top: calc(50% + 100vw * (260 - 540) / 1920);
  z-index: 6;
}

.title_1 {
  @include img_c_pc(380, 299 - 20);
  top: calc(50% + 100vw * (259 - 540) / 1920);
  z-index: 6;
}

.title_2 {
  @include img_c_pc(450, 745 - 20);
  top: calc(50% + 100vw * (695 - 540) / 1920);
  z-index: 6;
}

.title_3 {
  @include img_c_pc(460, 831 - 20);
  top: calc(50% + 100vw * (710 - 540) / 1920);/*765 */
  z-index: 6;
}

.title_4 {
  @include img_c_pc(460, 916 - 20);
  top: calc(50% + 100vw * (800 - 540) / 1920);/*860 */
  z-index: 6;
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
    height: 100vh;
    min-height: sizem(667);
    max-height: sizem(812);
    background-size: cover;
    background-attachment: scroll;
  }

.bg-img {
  object-fit: cover;
}


  .f1 {
    @include img_r_m(170, 223, -20);
  top: calc(50% + 100vw * (233 - 333.5) / 375);
    transform-origin: 100% 80%;
    animation: flow1 3s 0s ease-in-out infinite alternate;
    transform: skewY(2deg);
  }

  @keyframes flow1 {
    to {
      transform: skewY(0);
    }
  }

  .logo {
    @include img_l_m(140, 84, 45);
  top: calc(50% + 100vw * (84 - 333.5) / 375);
  }

  // .text {
  //   @include img_l_pc(118, 272, 254);
  // }

  .title_1 {
    @include img_r_m(44, 95, 70);
  top: calc(50% + 100vw * (95 - 333.5) / 375);
  }

  .title_2 {
    @include img_c_m(263, 481);
  top: calc(50% + 100vw * (481 - 333.5) / 375);
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
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
