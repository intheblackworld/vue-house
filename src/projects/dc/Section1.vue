<template>
  <div class="section1">
    <div class="bg"></div>
    <img src="./s1/0.jpg" alt="" class="img0">
    <img src="./s1/1.jpg" alt="" class="img1">
    <img src="./s1/2.jpg" alt="" class="img2">
    <img src="./s1/3.jpg" alt="" class="img3">
    <img src="./s1/4.jpg" alt="" class="img4">
    <img src="./s1/lt.png" alt="" class="lt">
    <h1 class="title">台北新東區樹海市心</h1>
    <h1 class="subtitle">聚富公園金店面</h1>
    <h1 class="label flex-c">公園特區金店面｜65坪｜2692-1155</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
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

.bg {
  @include div_l_pc(1877, 1005, 0, 0);
  background-image: url('./s1/bg.png');
  background-attachment: fixed;  
}

.img0 {
  @include img_l_pc(843, 0, 0);
}

.img1 {
  @include img_l_pc(322, 437, 553);
}

.img2 {
  @include img_l_pc(322, 308, 902);
}

.img3 {
  @include img_l_pc(322, 407, 1251);
}

.img4 {
  @include img_r_pc(320, 308, 0);
}

.lt {
  @include img_l_pc(302, 90, 0);
}

.label {
  @include div_r_pc(753, 78, 0, 0);
  top: auto;
  bottom: 0;
  background-color: #000000;
  font-size: size(36.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.7);
  text-align: left;
  color: #ffffff;
}

.title {
  @include div_l_pc(984, 154, 151, 85);
  text-shadow: 0 0 12px #000000;
  font-size: size(104.7);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.24);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(536, 113, 290, 85);
  text-shadow: 0 0 12px #000000;
  font-size: size(76.5);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
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
  .section1 {
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
  name: 'section1',

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
