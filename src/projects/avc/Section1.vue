<template>
  <div>
    <div class="section1">
      <!-- <img src="./s1/bg.png" alt="" class="bg-img"> -->

      <img src="./s1/b.png" alt="" class="b1">
      <img src="./s1/b.png" alt="" class="b2">
      <img src="./s1/b.png" alt="" class="b3">
      <img src="./s1/b.png" alt="" class="b4">

      <img src="./s1/img.png" alt="" class="img" data-aos="fade" data-aos-delay="0">
      <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="logobg" data-aos="fade" data-aos-delay="200">
      <img src="./s1/logo.png" alt="睿暘水漾LOGO" class="logo" data-aos="fade" data-aos-delay="400">
      <img src="./s1/t1.png" alt="三重CP值最高水岸宅" class="t1" data-aos="fade" data-aos-delay="600">
      <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800">
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

.img {
  @include img_r_pc(1700, 1027, -800);
  transform-origin: center;
  transform: rotate(45deg);
}

.logo {
  @include img_r_pc(502, 347, 267);
}

.logobg {
  // 圖片位置：width: size(712), top: size(201), left: size(118)
  @include img_r_pc(712, 201, 118);
}

.t1 {
  @include img_l_pc(871, 394, 129);
}

.t2 {
  @include img_l_pc(871, 519, 129);
}

.b1 {
  @include img_l_pc(198, 58, 720);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(308, 767, 429);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_l_pc(169, 764, 1141);
  animation: an 2.5s infinite alternate;
}

.b4 {
  @include img_r_pc(671, 0, -300);
  animation: an 4.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
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
    min-height: sizem(600);
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
    transform-origin: center;
    transform: rotate(45deg);
  }

  .logo {
    @include img_r_m(216, 190, 88);
  }

  .logobg {
    // 圖片位置：width: size(712), top: size(201), left: size(118)
    @include img_r_m(306, 126, 23);
  }

  .t1 {
    @include img_l_m(320, 445, 33);
  }

  .t2 {
    @include img_l_m(310, 491, 33);
  }

  .b1 {
    @include img_l_m(140, -58, -20);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_r_m(154, 148, -50);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(74, 527, 22);
    animation: an 2.5s infinite alternate;
  }

  .b4 {
    display: none;
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

  created() {},

  mounted() {},

  computed: {},
}
</script>
