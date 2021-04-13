<template>
  <div class="section7">
    <img src="./s7/w.jpg" :alt="`${info.caseName}_img`" class="bg-img bg1" v-if="isPC" key="day1">
    <img src="./s7/d.jpg" :alt="`${info.caseName}_img`" class="bg-img bg2" v-if="isPC" key="day2">
    <div class="bg-img bg1" v-if="isMobile">
      <img src="./s7/w_m.jpg" :alt="`${info.caseName}_img`">
    </div>
    <div class="bg-img bg2" v-if="isMobile">
      <img src="./s7/d_m.jpg" :alt="`${info.caseName}_img`">
    </div>
    <!-- <img src="./mo/s7/m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile"> -->
    <div class="m-title" v-if="isMobile">
      ARCHITECTURE
    </div>
    <h1 class="title" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="400">
      建築新體驗
    </h1>
    <h1 class="subtitle" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="600">
      全新風潮，新時代鉅獻
    </h1>
    <div class="big-title" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="800">
      STRUCTURE
    </div>
    <img src="./s5/style_arrow_2.png" :alt="`${info.caseName}_style_arrow`" class="arrow" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="200">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s7/漂浮物件_分層/7_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <!-- <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2"> -->
      <img src="./mo/s7/漂浮物件_分層/m_7_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.bg1 {
  opacity: 1;
  // animation: block 4s ease-in-out alternate infinite;
}

.bg2 {
  opacity: 0;
  animation: block 5s 0s ease-in-out alternate infinite;
}

@keyframes block {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.title {
  @include img_r_pc(431, 320, 268);
  font-size: size(82.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.17);
  text-align: right;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(537, 423, 160);
  font-size: size(53.4);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-0.91);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.arrow {
  @include img_r_pc(77.5, 348, 184);
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(300, 722, -100);
    // z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

.big-title {
  @include img_r_pc(1070, 782, 166);
  top: auto;
  bottom: size(20);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
  font-size: size(189.8);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.57);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 3;
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
    height: sizem(427);
    min-height: auto;
    max-height: sizem(1100);
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    // overflow: hidden;
  }

  .bg-img {
    height: auto;
    img {
      width: 100vw;
    }
  }

  .m-title {
    @include img_r_m(300, 189 - 100, 39);
    font-size: sizem(41);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.8;
    letter-spacing: sizem(0.12);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .arrow {
    @include img_r_m(24, 269 - 100, 34);
    z-index: 2;
    opacity: 1 !important;
  }

  .big-title {
    display: none;
    // @include img_r_m(191, 268 - 100, 62);
    // top: auto;
    // bottom: size(20);
    // text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    // font-size: size(189.8);
    // font-weight: 300;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.2;
    // letter-spacing: size(0.57);
    // text-align: center;
    // color: #ffffff;
    // white-space: nowrap;
    // z-index: 3;
  }
  .title {
    @include img_r_m(191, 268 - 100, 62);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.78;
    letter-spacing: sizem(1.45);
    text-align: right;
    color: #fff;
    white-space: nowrap;
    z-index: 2;
    opacity: 1 !important;
  }

  .subtitle {
    @include img_r_m(150, 302 - 100, 33);
    font-size: sizem(14.8);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(-0.25);
    text-align: left;
    color: #fff;
    white-space: nowrap;
    z-index: 2;
    opacity: 1 !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  // mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      blockIndex: 0,
      // isDialog: false,
      // imgIndex: 0,
      // isDialog: false,
    }
  },

  methods: {
    // openDialog(index) {
    //   this.imgIndex = index
    //   this.isDialog = true
    // },
    // closeDialog() {
    //   this.isDialog = false
    // },
  },

  created() {},

  mounted() {
    setInterval(() => {
      this.blockIndex = this.blockIndex === 0 ? 1 : 0
    }, 2000)
  },

  computed: {},

  watch: {},
}
</script>
