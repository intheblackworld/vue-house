<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <h1 class="title">熱銷建案</h1>
    <h1 class="subtitle">以真心，推薦好建築</h1>
    <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="title-img">
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(1200);
  overflow: hidden;
  position: relative;
  background-image: #008fbb;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include div_l_pc(274, 86, 805, 1089);
  font-size: size(58);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(18.54);
  text-align: left;
  color: #ffe900;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(351, 55, 813, 158);
  font-size: size(37);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.48;
  letter-spacing: size(2.22);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title-img {
  @include img_l_pc(548, 745, 181);
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(300) size(3020);
  border-color: transparent transparent #fff transparent;
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
    min-height: sizem(320);
    max-height: sizem(812);
    height: sizem(320);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include div_r_m(118, 37, 196, 32);
    font-size: sizem(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.2;
    letter-spacing: sizem(6);
    text-align: left;
    color: #ffe900;
    white-space: nowrap;
  }

  .subtitle {
    @include div_r_m(168, 29, 255, 32);
    font-size: sizem(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.59;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #444444;
    z-index: 10;
  }

  .title-img {
    @include img_l_m(180, 208, 33);
  }

  .bottom {
    @include div_r_m(375, 50, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 sizem(50) sizem(700);
    border-color: transparent transparent #fff transparent;
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

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
