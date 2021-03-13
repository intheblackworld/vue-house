<template>
  <div class="section1">
    <img src="./s1/bg.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo">
    <div class="title">
      10-27坪｜金融聚富核心 潮流居所｜行天宮站200米
    </div>
    <div class="phone">
      2966-8888
    </div>
    <div class="btn">
      即刻預約
    </div>
    <img src="./s1/logos.png" :alt="`${info.caseName}_img`" class="logos">
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

.logo {
  @include img_r_pc(766, 330, 272);
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

  .img-1 {
    @include img_c_m(180, 200);
  }

  .title-1 {
    @include img_c_m(320, 300);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #ffffff;
  }

  .img-2 {
    @include img_l_m(375, 0, 0);
height: auto;
transform-origin: 100% 100%;
transform: skewY(5deg);
  }

  .logo {
    @include img_l_m(50, 91, 62);
  }

  .info1 {
    @include img_l_m(375 - 58, 380, 58);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.9;
    letter-spacing: sizem(0.15);
    text-align: left;
    color: #ffffff;
  }

  .info2 {
    @include img_l_m(375 - 58, 423, 58);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.66;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .logo2 {
    @include img_r_m(62, 473, 58);
  }

  .btn {
    // @include div_r_pc(280, 77, 863, 375);
    @include div_r_m(180, 48, 465, 135);
    border: 1px solid #fff;
    font-size: sizem(17);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      color: #004471;
    }
  }

  .view {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // animation: fade_out 3s 0s ease-in-out forwards;
  }

  .view-1 {
    opacity: 1;
    animation: fade_out 4s 2s ease-in-out forwards;
  }

  .view-2 {
    opacity: 0;
    animation: fade_left 2.5s 4s ease-in-out forwards;
  }

  .view-3 {
    opacity: 0;
    animation: fade_right 2.5s 4s ease-in-out forwards;
  }

  .scroll-indigator {
    @include div_c_m(1, 150, 555);

    &::before,
    &::after {
      width: sizem(1);
      height: sizem(150);
    }
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
