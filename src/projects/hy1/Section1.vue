<template>
  <div class="section1">
    <div class="cloud absolute flex" data-aos="fade" data-aos-delay="100">
      <img src="./s1/bg.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
      <img src="./s1/bg.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
    </div>
    <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC" data-aos="fade" data-aos-delay="0">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
    <div class="logo absolute" data-aos="fade-up" data-aos-delay="200" data-aos-offset="-300">
      <img src="./s1/logo.png" :alt="`${info.caseName}_img`">
    </div>
    <h1 class="title" data-aos="fade-up" data-aos-delay="400">
      以中路之名 於風禾屏息
    </h1>
    <div class="hr" data-aos="zoom-in-right" data-aos-delay="600"></div>
    <h1 class="desc" data-aos="fade-up" data-aos-delay="800">
      26層ARTDECO摩天地標<br v-if="isMobile"> 62• 69坪 菁英專屬
    </h1>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
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
  z-index: 3;
}

.cloud {
  animation: move 50s 0s linear infinite;
  top: 0;
  left: 0;
  height: 100%;
  // z-index: 2;
}

.cloud-item {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

@keyframes move {
  to {
    transform: translateX(-50%);
  }
}

.logo {
  @include img_r_pc(252, 300, 274);
  top:calc(50% + 100vw * (310 - 540) / 1920);
  z-index: 4;
  img {
    width: 100%;
  }
}

.title {
  @include img_r_pc(442, 510, 182);
  top:calc(50% + 100vw * (520 - 540) / 1920);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.98;
  letter-spacing: size(3.2);
  text-align: center;
  color: #000000;
  z-index: 4;
  white-space: nowrap;
}

.hr {
  @include div_r_pc(540, 1, 591, 133);
  top:calc(50% + 100vw * (605 - 540) / 1920);
  background-color: #77623c;
  z-index: 4;
}

.desc {
  @include img_r_pc(534, 610, 137);
  top:calc(50% + 100vw * (610 - 540) / 1920);
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.59;
  letter-spacing: size(0.23);
  text-align: center;
  z-index: 4;
  color: #000000;
}
/*
.logo2 {
  width: size(483);
  left: size(134);
  top: size(462);
}
*/

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
    min-height: sizem(630);
    max-height: sizem(700);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
.bg-img {
  top: auto;
  height: auto;
  min-height: 100%;
  bottom: 0;
}
  .cloud-item {
    width: auto;
    height: 100%;
    object-fit: initial;
  }
  .logo {
    @include img_c_m(149, 100);
    z-index: 4;
    img {
      width: 100%;
    }
  }

  .title {
    @include img_c_m(360, 219);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.9;
    letter-spacing: sizem(1.68);
    text-align: center;
    color: #000000;
    z-index: 4;
    white-space: nowrap;
  }

  .hr {
    @include img_c_m(240, 258);
    height: sizem(1);
    background-color: #77623c;
    z-index: 4;
  }

  .desc {
    @include img_c_m(360, 263);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(0.2);
    text-align: center;
    color: #000000;
    z-index: 4;
    color: #000000;
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
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
