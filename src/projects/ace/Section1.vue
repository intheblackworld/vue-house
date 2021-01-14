<template>
  <div>
    <div class="section1">
      <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
      <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo">
      <img src="./s1/p2.png" :alt="`${info.caseName}_p2`" class="p2">
      <img src="./s1/p12.png" :alt="`${info.caseName}_p12`" class="p12">
      <img src="./s1/預約紐.png" :alt="`${info.caseName}_order_btn`" class="order-btn" v-scroll-to="{ element: `#contact` }">
      <!-- <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800"> -->
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
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  // background-color:#d1c6b7;
  background-size: cover;
  background-attachment: fixed;
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

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_r_pc(331, 227, 317);
}

.p2 {
  @include img_r_pc(202, 113, 806);
}

.p12 {
  @include img_l_pc(528, 113, 116);
}

.order-btn {
  @include img_r_pc(45, 803, 69);
  cursor: pointer;
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
    min-height: sizem(484);
    max-height: sizem(812);
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

  .img {
    @include img_r_m(1700, 1027, -800);
  @include img_c_m(600, calc(50% - 32vw), sizem(220));
  }

  .logo {
    @include img_c_m(216,calc(42% - 22vw), sizem(73))
  }

  .logobg {
    // 圖片位置：width: size(712), top: size(201), left: size(118)
    @include img_c_m(306,calc(42% - 40vw), sizem(45))
  }

  .t1 {
    @include img_c_m(310,calc(73% - 2vw), sizem(33))
  }

  .t2 {
    @include img_c_m(310,calc(73% + 12vw), sizem(33))
  }

  .b1 {
    @include img_l_m(140, -38, -20); 
  }

  .b2 {
    @include img_c_m(107,calc(50% - 45vw), sizem(320));
  }

  .b3 {
    @include img_c_m(74,calc(75% + 18vw), sizem(22));
       z-index:initial;
  }

  .b4 {
    display: none;
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
