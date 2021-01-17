<template>
  <div class="section3">
    <img src="./s3/bg.png" :alt="`${info.caseName}_bg`" class="bg">
    <img src="./s3/img_r.png" :alt="`${info.caseName}_img_r`" class="img_r">
    <img src="./s3/img_l.jpg" :alt="`${info.caseName}_img_l`" class="img_l">
    <div class="title">
      地段王牌
    </div>
    <h1 class="subtitle">
      雙和正中心‧享受富饒生活
    </h1>
    <div class="desc flex-c">
      富貴線正中心 一高二捷三快五商圈六大橋
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg {
  @include img_r_pc(1843, 0, 0);
}

.img_r {
  @include img_r_pc(1015, 79, 128);
}

.img_l {
  @include img_l_pc(518, 461, 243);
}

.title {
  @include img_l_pc(518, 239, 186);
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
  @include img_l_pc(518, 295, 186);
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.22;
  letter-spacing: normal;
  text-align: left;
  color: #685335;
  white-space: nowrap;
}

.desc {
  @include div_l_pc(574, 43, 392, 187);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: size(-1.2);
  text-align: left;
  color: #ffffff;
  background-color: #685335;
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
  .section3 {
    width: 100vw;
    height: sizem(730);
    min-height: sizem(0);
    max-height: sizem(900);
    overflow-x: scroll;
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .top {
    @include img_l_m(375, 182, 0);
    height: sizem(79);
    // z-index: ;
  }

  .vr {
    // position: absolute;
    margin-top: sizem(230);
    left: -50vw;
    height: sizem(500);
    width: 200vw;
  }

  .vr-mask {
    height: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    width: 30vw;
  }
  .vr-mask2 {
    height: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    width: 30vw;
  }

  .title1 {
    @include img_l_m(224, 16, 33);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #c61b1f;
    white-space: nowrap;
  }

  .title2 {
    @include img_l_m(224, 66, 119);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #c61b1f;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(310, 120, 32);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(1.05);
    text-align: left;
    color: #231815;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
