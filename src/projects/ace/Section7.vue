<template>
  <div class="section7">
    <img src="./s7/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img">
    <img src="./s7/1.png" :alt="`${info.caseName}_img1`" class="img1">
    <img src="./s7/2.png" :alt="`${info.caseName}_img2`" class="img2">
    <img src="./s7/3.png" :alt="`${info.caseName}_img3`" class="img3">
    <img src="./s7/4.png" :alt="`${info.caseName}_img4`" class="img4">
    <img src="./s7/5.png" :alt="`${info.caseName}_img5`" class="img5">
    <img src="./s7/6.png" :alt="`${info.caseName}_img6`" class="img6">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img1 {
  @include img_l_pc(422, 124, 178);
}

.img2 {
  @include img_l_pc(86, 560, 507);
}

.img3 {
  @include img_l_pc(128, 330, 669);
}

.img4 {
  @include img_l_pc(86, 573, 859);
}

.img5 {
  @include img_l_pc(322, 233, 812);
}

.img6 {
  @include img_r_pc(353, 111, 248);
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
    width: 100vw;
    height: sizem(453 + 28);
    min-height: sizem(453 + 28);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .map {
    width: auto;
    height: sizem(453);
    top: 0;
    left: 0;
  }

  .icon {
    //  @include img_l_m(50, 199, 290);
    height: sizem(70);
    left: sizem(300);
    top: sizem(210);
    z-index: 2;
    animation: none;
  }

  .b1 {
    @include img_l_m(55, 250, 110);
    z-index: 5;
    transform: translate(10%, 10%);
  }

  .b2 {
    @include img_l_m(100, -150, 100);
    z-index: 5;
    transform: translate(0, 20%);
  }

  .b3 {
    display: none;
  }

  .b4 {
    display: none;
  }

  .img1 {
    display: none;
  }

  .img2 {
    display: none;
  }

  .logobg1 {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(144, 156, 149, 119);
    // background-image: url('./s1/logobg.png');
    background-size: cover;
    z-index: 1;
    color: #000;
    h3 {
      margin-top: sizem(-20);
      margin-left: sizem(-10);
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: #f3e12b;
    overflow: scroll;
    .dialog-content {
      height: 100%;
      width: sizem(1138);
      position: relative;
    }
    .dialog-map {
      width: sizem(1138);
      height: 100%;
      background-color: #f3e12b;
    }
    .dialog-icon {
      width: auto;
      height: sizem(119);
      position: absolute;
      top: 46%;
      left: 40%;
      animation: heartbeat 0.5s ease-in alternate infinite;
      // background-color: #fff;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

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

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
