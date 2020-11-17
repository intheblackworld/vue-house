<template>
  <div>
    <div class="section1">
      <img src="./s1/bg.png" alt="" class="bg-img">
      <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="absolute logobg">
      <img src="./s1/logo.png" alt="睿暘水漾LOGO" class="absolute logo">
      <img src="./s1/t1.png" alt="三重CP值最高水岸宅" class="absolute t1">
      <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="absolute t2">
      
      <div class="animate-bg">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

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

.logo {
  width: size(502);
  top: size(347);
  right: size(267);
}

.logobg {
  @include img_r_pc(712, 201, 118);
}

.t1 {
  @include img_l_pc(871, 394, 129);
}

.t2 {
  @include img_l_pc(871, 519, 129);
}



.fly1 {
  width: size(74);
  top: size(345);
  right: size(239);
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
