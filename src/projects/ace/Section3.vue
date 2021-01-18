<template>
  <div class="section3">
    <img src="./s3/bg.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isPC">
    <img src="./mo/b.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile">
    <img src="./s3/img_r.png" :alt="`${info.caseName}_img_r`" class="img_r" data-aos="fade-down" data-aos-delay="100">
    <img src="./s3/img_l.jpg" :alt="`${info.caseName}_img_l`" class="img_l" data-aos="fade-down" data-aos-delay="400">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      地段王牌
    </div>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="200">
      雙和正中心‧享受富饒生活
    </h1>
    <div class="desc flex-c" data-aos="fade-down" data-aos-delay="300">
      富貴線正中心 一高二捷三快五商圈六大橋
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg {
  @include img_r_pc(1843, 0, 0);
  height: 100%;
}

.img_r {
  @include img_r_pc(1015, 79, 128);
  top:calc(50% - 25vw);
}

.img_l {
  @include img_l_pc(518, 461, 243);
  top:calc(50% - 0.5vw);
}

.title {
  @include img_l_pc(518, 239, 186);
  font-size: size(45);
  top:calc(50% - 12.5vw);
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
  top:calc(50% - 9vw);
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
  top:calc(50% - 4vw);
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
    height: sizem(674);
    min-height: sizem(674);
    max-height: sizem(900);
    overflow-x: scroll;
  }

  .bg {
    @include img_r_m(373, 0, 0);
  }

  .img_r {
    @include img_r_m(375, 20, 0);
  }

  .img_l {
    @include img_l_m(310, 447, 33);
  }

  .title {
    @include img_l_m(96, 328, 33);
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
    @include img_l_m(300, 362, 34);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: normal;
    text-align: left;
    color: #685335;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(309, 27, 409, 34);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: sizem(0.3);
    text-align: center;
    color: #ffffff;
    background-color: #685335;
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
