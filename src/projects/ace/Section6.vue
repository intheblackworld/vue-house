<template>
  <div class="section6">
    <img src="./s6/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <img src="./mo/b.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile">
    <img src="./s6/img.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s6/logoall.png" :alt="`${info.caseName}_logoall`" class="logoall">
    <div class="title">
      結構王牌
    </div>
    <h1 class="subtitle">
      強度比肩台北101<br />ACE級雙制震建築
    </h1>
    <div class="desc flex-c">
      CFT柱內萬磅灌漿 101同級制震<br />
      SC鋼骨 SN耐震鋼材 雙S級抗震高標準<br />
      全建築144支BRB制震器 層層降振保平安<br />
      業界領導品牌加持 101同級萬磅混凝土<br />
      地基深扎岩盤 達到最佳耐震力
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(1080);
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

.title {
  @include img_r_pc(180, 168, 679);
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
  @include img_r_pc(390, 245, 469);
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
  @include img_r_pc(538, 393, 323);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.15;
  letter-spacing: normal;
  text-align: left;
  color: #284e62;
}

.img {
  @include img_l_pc(646, 45, 328);
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
  }

  .bg {
    @include img_r_m(374, 0, 0);
    height: sizem(992);
  }

  .title {
    @include img_l_m(96, 525, 33);
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
    @include div_l_m(310, 27, 714, 25);
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
    @include img_l_m(310, 35, 33);
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
