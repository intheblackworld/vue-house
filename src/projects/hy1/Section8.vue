<template>
  <div class="section8">
    <img src="./s8/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <!-- <img src="./s7/bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile"> -->
    <img src="./s8/bottom.png" :alt="`${info.caseName}_img`" class="bottom">
    <img src="./s8/top.png" :alt="`${info.caseName}_img`" class="top">
    <h1 class="subtitle" data-aos="fade-up" data-aos-delay="200">
      星級飯店會館
    </h1>
    <h1 class="title" data-aos="fade-up" data-aos-delay="400">
      風華耀眼 名流相聚
    </h1>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(1064);
  min-height: size(1064);
  max-height: size(1064);
  position: relative;
  overflow: hidden;
  // background: linear-gradient(to bottom, #c40000, #000);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after,
  // &::before {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.top {
  @include img_c_pc(1920, 0);
  width: 100vw;
}

.bottom {
  @include img_c_pc(800, 0);
  width: 100vw;
  top: auto;
  bottom: 0;
}

.title {
  @include img_c_pc(454, 130);
  font-size: size(55.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(254, 84);
  font-size: size(38.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(5.33);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
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
  .section8 {
    width: 100vw;
    height: sizem(374);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .bg-img {
    height: sizem(295);
    top: auto;
    bottom: 0;
    position: absolute !important;
  }

  .top {
    @include img_c_m(375, 0);
    width: 100vw;
    height: sizem(137);
  }

  .bottom {
    @include img_c_m(375, 0);
    width: 100vw;
    height: sizem(10);
    top: auto;
    bottom: 0;
  }

  .title {
    @include img_c_m(272, 43);
    font-size: sizem(33);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(140, 13);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: sizem(2.94);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section8',

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

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
