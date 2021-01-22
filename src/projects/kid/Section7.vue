<template>
  <div class="section7">
    <img src="./s7/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <img src="./mo/w2.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile">
    <img src="./s7/1.png" :alt="`${info.caseName}_img1`" class="img1" data-aos="fade" data-aos-delay="100">
    <img src="./s7/2.png" :alt="`${info.caseName}_img2`" class="img2" data-aos="fade" data-aos-delay="300">
    <img src="./s7/3.png" :alt="`${info.caseName}_img3`" class="img3" data-aos="fade" data-aos-delay="500">
    <div data-aos="fade" data-aos-delay="700" class="img4"><img src="./s7/4.png" :alt="`${info.caseName}_img4`"></div>
    <img src="./s7/5.png" :alt="`${info.caseName}_img5`" class="img5" data-aos="fade" data-aos-delay="900">
    <img src="./s7/6.png" :alt="`${info.caseName}_img6`" class="img6" data-aos="fade" data-aos-delay="1100">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img1 {
  @include img_l_pc(422, 124, 178);
  top: calc(50% - 21.66vw);
  //(540 - 124)*100 / 1920
}

.img2 {
  @include img_l_pc(86, 560, 507);
  top: calc(50% + 1.04vw);
}

.img3 {
  @include img_l_pc(128, 330, 669);
  top: calc(50% - 11vw);
}

.img4 {
  @include img_l_pc(86, 573, 859);
  top: calc(50% + 1.719vw);
  img{width: 100%;}
}

.img5 {
  @include img_l_pc(322, 233, 812);
  top: calc(50% - 16vw);
}

.img6 {
  @include img_r_pc(353, 111, 248);
  top: calc(50% - 22vw);
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
  .section7 {
    width: 100vw;
    height: sizem(751);
    min-height: sizem(751);
  }

  .bg {
    @include img_r_m(375, 0, 0);
    height: sizem(751);
  }

  .img1 {
    @include img_l_m(153, 29, 53);
  }

  .img2 {
    @include img_l_m(31, 186, 172);
  }

  .img3 {
    @include img_l_m(45, 83, 233);
  }

  .img4 {
    @include img_l_m(31, 346, 172);
    img{transform: rotate(90deg);}
  }

  .img5 {
    @include img_l_m(116, 396,  33);
  }

  .img6 {
    @include img_r_m(145, 396, 51);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
