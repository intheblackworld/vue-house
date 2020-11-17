<template>
  <div>
    <div class="section1">
      <!-- <img src="./s1/bg.png" alt="" class="bg-img"> -->

      <img src="./s1/b.png" alt="" class="b1">
      <img src="./s1/b.png" alt="" class="b2">
      <img src="./s1/b.png" alt="" class="b3">
      <img src="./s1/b.png" alt="" class="b4">

      <img src="./s1/img.png" alt="" class="img">
      <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="logobg">
      <img src="./s1/logo.png" alt="睿暘水漾LOGO" class="logo">
      <img src="./s1/t1.png" alt="三重CP值最高水岸宅" class="t1">
      <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2">
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
    background-color: #d2c5b8;
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-animate {
    display: none;
  }

  .logo {
    width: sizem(210);
    top: sizem(114);
    left: sizem(83);
  }

  .img-t {
    width: 100vw;
    top: 0;
    left: 0;
  }

  .img-b {
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .title {
    width: sizem(236);
    top: sizem(226);
    right: sizem(70);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(3.75);
    text-align: center;
    color: #af8680;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 1px;
    top: sizem(271);
    right: sizem(32);
    background-color: #af8680;
  }
  .desc {
    width: sizem(258);
    top: sizem(282);
    right: sizem(59);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.85);
    text-align: center;
    color: #595757;
    white-space: nowrap;
  }

  .btn-group {
    width: sizem(146.5 * 2 + 17);
    top: sizem(486);
    right: sizem(33);

    .btn {
      width: sizem(146.5);
      height: sizem(33.7);
      border: solid 2px #af8680;
      border-radius: 18px / 18px;
      cursor: pointer;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: sizem(1.65);
      text-align: center;
      color: #af8680;
      transition: all 0.3s;

      &:hover {
        background-color: #af8680;
        border-color: #af8680;
        color: #fff;
      }
    }
  }

  .fly1 {
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
