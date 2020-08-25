<template>
  <div>
    <div class="section2">
      <img
        src="./s2/img.jpg"
        alt=""
        class="img absolute"
        data-aos="fade-up" data-aos-delay="0"
      >
      <img
        src="./s2/icon.png"
        alt=""
        class="icon absolute"
        data-aos="fade-up-left" data-aos-delay="1000"
      >
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400">食衣住行育樂遊</div>
      <div class="subtitle absolute" data-aos="fade-down" data-aos-delay="600">機能豐盛 繁華近靜</div>
      <div class="desc absolute" data-aos="fade-down" data-aos-delay="800">人文薈萃與商業豐盛的大同區，未來將因「大同再生計畫」都市更新蓬勃發展，周遭建設規劃豐富水綠、產業、交通、文化歷史及創意氛圍資源，文化觀光及特色商圈整合行銷，循東京車站特區模式，打造台北「丸之內」。</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(931);
  background-image: url('./s2/bg.png');
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.img {
  width: size(1568);
  top: size(116);
  left: size(176);
}
.icon {
  width: size(78);
  top: size(184);
  left: size(235);
}
.title {
  width: size(286);
  top: size(224);
  left: size(293);
  font-size: size(39);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 2.33px;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}
.subtitle {
  width: size(307);
  top: size(279);
  left: size(293);
  font-size: size(32);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 5.17px;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;
}
.desc {
  width: size(650);
  top: size(353);
  left: size(293);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.2;
  letter-spacing: 1.92px;
  text-align: left;
  color: #4d4d4d;
}

// .bg-img {
//   width: 100vw;
//   height: size(592);
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   object-fit: cover;

//   &:nth-child(1) {
//     position: relative;
//   }
// }

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
  .section2 {
    width: 100vw;
    height: sizem(78 + 476);
    // height: size-m(804);
    // background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .tree {
    width: sizem(117);
    right: sizem(0);
    top: sizem(190);
    z-index: 2;
  }

  .leaf {
    width: sizem(132);
    right: sizem(0);
    top: sizem(-45);
    z-index: 2;
  }

  .butterfly {
    width: sizem(86);
    left: sizem(5);
    top: sizem(0);
    z-index: 2;
  }

  .title {
    writing-mode: initial;
    text-orientation: initial;
    width: sizem(250);
    right: sizem(80);
    top: sizem(78);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    writing-mode: initial;
    text-orientation: initial;
    width: sizem(290);
    right: sizem(37);
    top: sizem(152);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: normal;
    text-align: left;
    color: #8e8a74;
  }

  .border {
    width: sizem(340);
    height: sizem(224);
    top: sizem(50);
    right: sizem(17);
    opacity: 0.38;
    border: sizem(5) solid #8e8a74;
  }

  .txt {
    width: sizem(131);
    bottom: sizem(52);
    right: sizem(191);
  }

  .map-img {
    width: sizem(340);
    bottom: sizem(50);
    left: sizem(18);
  }

  .button {
    background-color: #3aa7c299;
    border-radius: 50%;
    position: absolute;
    width: 20vw;
    height: 20vw;
    bottom: calc(50vh - 60vw);
    left: calc(50% - 10vw);
    color: #fff;
    &:before {
      content: '';
      background: currentColor;
      width: 6%;
      height: 60%;
      position: absolute;
      top: 20%;
      left: 47%;
    }
    &:after {
      content: '';
      background: currentColor;
      width: 60%;
      height: 6%;
      position: absolute;
      top: 47%;
      left: 20%;
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .slide-content {
      left: 0;
    }

    .dialog-map {
      width: auto;
      height: 100vh;
      background-color: #fff;
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
import { isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

  data() {
    return {
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
