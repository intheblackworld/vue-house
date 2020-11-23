<template>
  <div class="section6">
    <img src="./s6/bg.jpg" alt="" class="bg-img">
    <img src="./s6/i1.png" alt="" class="bg-img">
    <img src="./s6/i2.png" alt="" class="bg-img">
    <img src="./s6/i3.png" alt="" class="bg-img">
    <img src="./s6/i4.png" alt="" class="bg-img">
    <h1 class="title">輕鬆入主 新北致富第一環</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
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

.lt {
  @include img_l_pc(302, 107, 288);
}

.title {
  @include div_l_pc(770, 90, 171, 575);
  text-shadow: 0 3px 11px #002565;
  font-size: size(60.8);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.08);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(182, 70, 174, 726);
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.8);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(713, 302, 352);
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.68);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.fade {
  opacity: 0;
  transition: opacity 1s;

  &.show {
    opacity: 1;
  }
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
  .section6 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: calc(100vh - 63px);
    min-height: calc(100vh - 63px);
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

  .img {
    @include img_l_m(201, 0, 0);
  }

  .logo {
    @include img_r_m(95, 47, 73);
  }

  .logo2 {
    @include img_l_m(65, 515, 69);
  }

  .title1 {
    @include img_r_m(239, 348, 72);
    font-size: sizem(32);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.2);
    text-align: left;
    color: #248184;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(239, 391, 71);
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .phone {
    @include img_r_m(239, 428, 71);
    font-size: sizem(54);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(-2.11);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .btn {
    @include div_r_m(114, 31, 513, 78);
    border: 1px solid #248184;
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(1.44);
    text-align: left;
    color: #248184;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #248184;
      color: #fff;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section6',

  data() {
    return {
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
