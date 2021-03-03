<template>
  <div class="section3">
    <img src="./s3/1.jpg" :alt="`${info.caseName}_img`" class="img">
    <div class="content">
      <img src="./s3/t_bg.png" alt="" class="t_bg">
    </div>
    <div class="border"></div>
    <div class="title">
      既在地，又當代<br />
      不分今昔，精彩永存
    </div>
    <div class="subtitle" v-if="isPC">
      華山，作為台北最熱鬧的創意之地，<br />
      匯聚了動與靜的文化藝術、日與夜的生活風格，<br />
      創作者都嚮往這裡，整個城市也都仰望這裡。
    </div>
    <div class="subtitle" v-if="isMobile">
      華山，作為台北最熱鬧的創意之地，匯聚了動與靜的文化藝術、日與夜的生活風格，創作者都嚮往這裡，整個城市也都仰望這裡。
    </div>
    <div class="desc">
      1914年，華山文創園區為當年台灣最大的民營日本清酒廠「芳釀社」，光復後改為臺灣省菸酒公賣局臺北第一酒廠；1987年，酒廠遷至林口，舊廠房改作為展演活動的場地，與其說是新世代活絡了舊空間，不如說是舊空間釋放了新世代的騷動。<br />
      人文風華環繞華山，融會古今精彩陳釀，即使不醉，其無比魅力也叫人微醺迷戀。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #fff;
  // background-size: cover;
  // background-position: 100%;
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
}

.img {
  @include img_l_pc(1920, 0, 0);
  height: size(890);
  object-fit: cover;
}

.content {
  @include div_l_pc(654, 325, 0, 179);
  top: auto;
  bottom: size(30);
  background-color: #100b09;

  .t_bg {
    @include img_r_pc(254, 0, 0);
    top: auto;
    bottom: 0;
  }
}

.border {
  @include div_l_pc(654, 325, 0, 189);
  top: auto;
  bottom: size(20);
  border: 2px solid #866231;
}

.title {
  @include img_l_pc(425, 0, 247);
  top: auto;
  bottom: size(193);
  font-size: size(46);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(1.38);
  text-align: left;
  color: #c3985b;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(556, 0, 249);
  top: auto;
  bottom: size(40);
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(3.68);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(777, 0, 180);
  top: auto;
  bottom: size(33);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(3.24);
  text-align: left;
  color: #333333;
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
    height: sizem(578 + 250);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img {
    @include img_l_m(375, 0, 0);
    height: sizem(250);
    object-fit: cover;
  }

  .content {
    @include div_l_m(346, 250, 240, 12);
    background-color: #100b09;

    .t_bg {
      @include img_r_m(220, 0, 0);
      top: auto;
      bottom: 0;
    }
  }

  .border {
    @include div_l_m(346, 250, 245, 17.8);
    border: 2px solid #866231;
  }

  .title {
    @include img_l_m(231, 265, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(310, 340, 33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #ffffff;
    white-space: normal;
  }

  .desc {
    @include img_c_m(310, 250 + 265);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.98;
    letter-spacing: sizem(2.7);
    text-align: left;
    color: #333333;
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
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
