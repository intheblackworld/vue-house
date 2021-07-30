<template>
  <div class="section7">
    <img src="./s7/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s7/360山河美景.png" :alt="`${info.caseName}_img`" class="title-img">
    <div class="line"></div>
    <h3 class="title">洲子洋史上最強    層峰景觀頭等艙</h3>
    <h3 class="desc">
      「天空之邑」以區域稀有24層地標，獨佔洲子洋極景制高點，<br />觀音山、大台北都會公園山河美景360°環繞，彷如坐擁景觀頭等艙，美景無界盡在您視線。
    </h3>

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(1500);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  //  overflow: hidden;
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
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.title-img {
  @include img_c_pc(132, 286);
}

.line {
  @include div_c_pc(1, 224, 652);
  background-color: #003177;
}

.title {
  @include img_c_pc(372, 919);
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: center;
  color: #003177;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(1342, 964);
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: center;
  color: #636363;
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
  .section7 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_c_m(220, 22);
    font-size: sizem(26);
    letter-spacing: normal;
    z-index: 9;
  }

  .hr {
    @include img_c_m(325, 104);
    z-index: 9;
  }

  .desc {
    @include img_c_m(320, 119);
    font-size: sizem(12);
    line-height: 1.88;
    letter-spacing: normal;
    white-space:normal;
    z-index: 9;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },
  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
