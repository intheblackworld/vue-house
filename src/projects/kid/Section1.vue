<template>
  <div>
    <div class="section1">
      <!-- <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
      <img src="./mo/1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile"> -->
      <!-- <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800"> -->
      <img src="./s1/t1.png" :alt="`${info.caseName}_t1`" class="t1">
      <img src="./s1/t2.png" :alt="`${info.caseName}_t2`" class="t2">
      <img src="./s1/t3.png" :alt="`${info.caseName}_t3`" class="t3">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo">

      <img src="./s1/bottom.png" :alt="`${info.caseName}_bottom`" class="bottom">
      <div class="animate-bg">
        <img src="./s1/bubb (1).png" :alt="`${info.caseName}_bubble1`" class="bubble1">
        <img src="./s1/bubb (2).png" :alt="`${info.caseName}_bubble2`" class="bubble2">
        <img src="./s1/bubb (3).png" :alt="`${info.caseName}_bubble3`" class="bubble3">
        <img src="./s1/bubb (5).png" :alt="`${info.caseName}_bubble4`" class="bubble4">
        <img src="./s1/bubb (5).png" :alt="`${info.caseName}_bubble5`" class="bubble5">
        <img src="./s1/bubb (6).png" :alt="`${info.caseName}_bubble6`" class="bubble6">
        <img src="./s1/bubb (7).png" :alt="`${info.caseName}_bubble7`" class="bubble7">
        <img src="./s1/bubb (8).png" :alt="`${info.caseName}_bubble8`" class="bubble8">
        <img src="./s1/bubb (9).png" :alt="`${info.caseName}_bubble9`" class="bubble9">
        <img src="./s1/bubb (10).png" :alt="`${info.caseName}_bubble10`" class="bubble10">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// 新增 mixin 代表意義：
// @mixin img_r_pc($width, $top, $right) {
//   position: absolute;
//   width: size($width);
//   top: size($top);
//   right: size($right);
// }

// @mixin img_r_m($width, $top, $right) {
//   position: absolute;
//   width: sizem($width);
//   top: sizem($top);
//   right: sizem($right);
// }

// @mixin img_l_pc($width, $top, $left) {
//   position: absolute;
//   width: size($width);
//   top: size($top);
//   left: size($left);
// }

// @mixin img_l_m($width, $top, $left) {
//   position: absolute;
//   width: sizem($width);
//   top: sizem($top);
//   left: sizem($left);
// }

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  background-color: #e32271;
  // background-size: cover;
  // background-attachment: fixed;
  overflow: hidden;
  //animation: bg 5s 0s linear infinite alternate-reverse;
}

.bg-img {
  width: size(1920);
  height: 100%;
  //min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.logo {
  @include img_c_pc(755, 298);
}

.t1 {
  @include img_c_pc(468, 170);
}

.t2 {
  @include img_c_pc(794, 499);
}

.t3 {
  @include img_c_pc(535, 701);
}

.bottom {
  width: 100vw;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 1;
}

@keyframes jump {
  to {
    margin-top: -20px;
    // transform: translateY(-30px);
  }
}
.animate-bg {

  .bubble1 {
    @include img_r_pc(210, 670, 142);
    animation: jump 3s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }

  .bubble2 {
    @include img_l_pc(210, -40, -42);
    animation: jump 3s 0s ease-in-out alternate-reverse infinite;
  }
  
  .bubble3 {
    @include img_l_pc(271, 790, 121);
    animation: jump 3.5s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }

  .bubble4 {
    @include img_l_pc(210, 327, 257);
    animation: jump 1s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }

  .bubble5 {
    @include img_r_pc(139, 655, 452);
    animation: jump 2.3s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }

  .bubble6 {
    @include img_l_pc(577, 635, -82);
    animation: jump 2s 0s ease-in-out alternate-reverse infinite;
  }

  .bubble7 {
    @include img_l_pc(314, 741, 325);
    animation: jump 2.5s 0s ease-in-out alternate-reverse infinite;
  }

  .bubble8 {
    @include img_r_pc(425, 568, -142);
    animation: jump 4s 0s ease-in-out alternate-reverse infinite;
  }

  .bubble9 {
    @include img_r_pc(452, 864, 162);
    animation: jump 1.4s 0s ease-in-out alternate-reverse infinite;
  }

  .bubble10 {
    @include img_r_pc(410, -90, -142);
    animation: jump 3s 0s ease-in-out alternate-reverse infinite;
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    //min-height: 900px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .logo {
    @include img_r_m(163, 111, 116);
    top: calc(50% + ((111 - 302) * 0.266666vw));
  }

  .p2 {
    @include img_r_m(91, 143, 0);
    top: calc(50% + ((100 - 302) * 0.266666vw));
  }

  .p12 {
    @include img_r_m(129, 333, 240);
    top: auto;
    bottom: 0;
    width: auto;
    height: calc(50% - 20vw);
  }

  .order-btn {
    display: none;
  }

  .title {
    @include img_l_m(166, 336, 94);
    top: calc(50% + ((336 - 302) * 0.266666vw));
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: center;
    color: #685335;
    white-space: nowrap;
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

  created() {},

  mounted() {},

  computed: {},
}
</script>
