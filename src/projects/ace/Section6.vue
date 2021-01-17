<template>
  <div class="section6">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <img src="./s6/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img">
    <img src="./s6/img.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s6/logoall.png" :alt="`${info.caseName}_logoall`" class="logoall">
    <div class="title">
      結構王牌
    </div>
    <h1 class="subtitle">
      強度比肩台北101<br />ACE級雙制震建築
    </h1>
    <div class="desc flex-c">
      CFT柱內萬磅灌漿 101同級制震<br />
      SC鋼骨 SN耐震鋼材 雙S級抗震高標準<br />
      全建築144支BRB制震器 層層降振保平安<br />
      業界領導品牌加持 101同級萬磅混凝土<br />
      地基深扎岩盤 達到最佳耐震力
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
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

.title {
  @include img_r_pc(180, 168, 679);
  font-size: size(45);
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
  @include img_r_pc(390, 245, 469);
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #685335;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(538, 393, 323);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.15;
  letter-spacing: normal;
  text-align: left;
  color: #284e62;
}

.img {
  @include img_l_pc(646, 45, 328);
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
  .section6 {
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
  name: 'section6',

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
