<template>
  <div class="section6">
    <img src="./s6/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <!-- <img src="./mo/b.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <img src="./s6/img.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s6/logoall.png" :alt="`${info.caseName}_logoall`" class="logoall" data-aos="fade-down" data-aos-delay="800">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      結構王牌
    </div>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="200">
      強度比肩台北101<br />ACE級雙制震建築
    </h1>
    <ul class="desc">
      <li data-aos="fade-down" data-aos-delay="300">柱內萬磅灌漿 101同級制震</li>
      <li data-aos="fade-down" data-aos-delay="400">SC鋼骨 SN耐震鋼材 雙S級抗震高標準</li>
      <li data-aos="fade-down" data-aos-delay="500">全建築144支BRB制震器 層層降震保平安</li>
      <li data-aos="fade-down" data-aos-delay="600">業界領導品牌加持 101同級萬磅混凝土</li>
      <li data-aos="fade-down" data-aos-delay="700">地基深扎岩盤 達到最佳耐震力</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
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
  left:50%;transform: translateX(-50%)
}

.title {
  @include img_l_pc(180, 168, 679);
  left: calc(50% + 5vw);
  top: calc(50% - 19vw);
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.36;
  letter-spacing: normal;
  text-align: left;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(390, 245, 469);
  left: calc(50% + 5vw);
  top: calc(50% - 14vw);
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #685335;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(538, 400, 0);
  left: calc(50% + 5vw);
  width: auto;
  top: calc(50% - 6.5vw);
  font-size: size(27);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.15;
  letter-spacing: normal;
  text-align: left;
  color: #284e62;
  li::before{content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 9' fill='%23c7a578'%3E%3Crect x='0' y='0' width='5' height='5' transform='translate(4 0) rotate(45)'/%3E%3C/svg%3E");
    width: 0.7em;height: 0.7em;display: inline-block;margin: 0 0.3em 0 0;
  }

}

.img {
  @include img_l_pc(646, 0, 328);
  width:auto;
  height: 90%;
  top: 5%;
  left: auto;
  right: 49%;
  max-height: size(968.5);
}

.logoall {
  @include img_l_pc(384, 743, 478);
  left: calc(50% + 5vw);
  top: calc(50% + 11vw);
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
    height: sizem(990);
    min-height: sizem(990);
    max-height: sizem(990);
  }
/*
  .bg {
    @include img_r_m(375, 0, 0);
    transform: skewX(0.5deg);
    transform-origin: bottom;
    height: sizem(992);
  } */
  .bg {
    @include img_r_m(360, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }

  .title {
    @include img_l_m(96, 515, 33);
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.33;
    letter-spacing: normal;
    text-align: left;
    color: #285065;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(252, 567, 33);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #685335;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 27, 650, 25);
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #284e62;
    // background-color: #685335;
  }

  .img {
    @include img_l_m(310, 35, 28);
  height:auto;
  max-height: sizem(2000);
  }

  .logoall {
    @include img_r_m(310, 850, 32);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

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
