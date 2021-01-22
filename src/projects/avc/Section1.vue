<template>
  <div>
    <div class="section1">
      <!-- <img src="./s1/bg.png" alt="" class="bg-img"> -->

      <img src="./s1/b.png" alt="氣泡" class="b1">
      <img src="./s1/b.png" alt="氣泡" class="b2">
      <img src="./s1/b.png" alt="氣泡" class="b3">
      <img src="./s1/b.png" alt="氣泡" class="b4">

      <div class="img" data-aos="fade" data-aos-delay="0"><div class="an"><img src="./s1/img.png" alt="水漾"></div></div>
      <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="logobg" data-aos="fade" data-aos-delay="200">
      <img src="./s1/logo.png" alt="睿暘水漾LOGO" class="logo" data-aos="fade" data-aos-delay="400">
      <img src="./s1/t1.png" alt="三重CP值最高水岸宅" class="t1" data-aos="fade" data-aos-delay="600">
      <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800">

      <div class="s1"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1{background: url("./s1/w.jpg") center;
background-size: cover;
width: 100%;height: 100%;position: absolute;top: 0;left: 0;}

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
  @include img_c_pc(1700, calc(50% - 5vw), size(1540));
  img{width: 100%;
  transform-origin: 0 0;
  transform: rotate(45deg);
 }
  .an{width: 100%;
  animation: an 2.5s linear infinite alternate;
  transform-origin: 0 0;
  transform:translate(-10%,-20%);
 }
}

.logo {
  @include img_c_pc(502, calc(50% - 8vw) ,calc(50% + 11.5vw));
}

.logobg {
  // 圖片位置：width: size(712), top: size(201), left: size(118)
  @include img_c_pc(712,calc(50% - 16vw) ,calc(50% + 8vw));
}

.t1 {
  @include img_c_pc(871, calc(50% - 3.5vw), size(129));
}

.t2 {
  @include img_c_pc(871,calc(50% + 3.5vw), size(129));
}

.b1 {
  @include img_c_pc(198,calc(50% - 25vw), size(720));
  animation: an 3s infinite alternate;
  transform: translateY(-30%);
}

.b2 {
  @include img_c_pc(308,calc(50% + 15vw), size(429));
  animation: an 2.5s infinite alternate;
  transform: translateY(-19%);
}

.b3 {
  @include img_c_pc(169,calc(50% + 13vw), size(1141));
  z-index: 3;
  animation: an 2s infinite alternate;
  transform: translateY(-10%);
}

.b4 {
  @include img_c_pc(900,calc(50% - 40vw), size(1350));
  animation: an 4.5s infinite alternate;
  transform: translateY(-4%);
}

@keyframes an {
  to {
    transform: translate(0);
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
.s1{background-image:url("./s1/mo.jpg") ;}
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
