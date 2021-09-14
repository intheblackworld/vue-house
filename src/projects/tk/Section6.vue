<template>
  <div class="section6 flex-ac">
    <div class="animate-slide">
      <img src="./s6/bg.jpg" :alt="`${info.caseName}_logo`" class="">
      <img src="./s6/bg.jpg" :alt="`${info.caseName}_logo`" class="">
    </div>
    <!-- <img src="./s6/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img"> -->
    <div class="title">
      國際視野高空泳池<br />
      城市之上我獨享
    </div>
    <h3 class="subtitle">
      達麗給您無邊際想像！晨泳、消暑、池畔PARTY…會館人生。
    </h3>
    <h3 class="name">
      空中泳池3D外觀合成模擬圖
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(910);
  max-height: size(1080);
  position: relative;
  background-size: cover;
  background-position: 100%;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.animate-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 200vw;
  display: flex;
  animation: an 30s 1s linear infinite alternate;
}

@keyframes an {
  to {
    transform: translateX(-100%);
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_r_pc(320, 104, 318);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
  font-size: size(42);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(3);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(283, 240, 318);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(1.2);
  text-align: right;
  color: #fff;
}

.name {
  @include img_r_pc(1100, 0, 20);
  top: auto;
  bottom: size(20);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: right;
  color: #fff;
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
    height: sizem(480);
    min-height: auto;
    max-height: initial;
    background-image: url('./s3/bg.jpg');
    background-position: initial;
    background-size: cover;
    background-attachment: fixed;
  }

  .animate-slide {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 200vw;
    height: sizem(249);
    display: flex;
    animation: an 30s 1s linear infinite alternate;
    img {
      height: 100%;
    }
  }

  .border {
    @include div_c_m(335, 602, 30);
    border: 2px solid #c9a063;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: sizem(34) sizem(34) 0 0;
      border-color: #c9a063 transparent transparent transparent;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 sizem(34) sizem(34);
      border-color: transparent transparent #c9a063 transparent;
    }
  }

  .border-bottom {
    @include img_c_m(335, 0);
    top: auto;
    bottom: size(20);
    border: 2px solid #c9a063;
  }

  .line {
    @include img_c_m(306, 157);
  }

  .title {
    @include img_l_m(268, 39, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.88);
    text-align: left;
    color: #c8a064;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 124);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(0.45);
    text-align: left;
    color: #fff;
    white-space: normal;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  // mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s6/slider_3-1.jpg'),
      //     name: '家樂福商圈',
      //   },
      //   {
      //     img: require('./s6/slider_3-2.jpg'),
      //     name: '桃園藝文展演中心',
      //   },
      //   {
      //     img: require('./s6/slider_3-3.jpg'),
      //     name: '南崁COSTCO',
      //   },
      //   {
      //     img: require('./s6/slider_3-4.jpg'),
      //     name: '特力屋',
      //   },
      //   {
      //     img: require('./s6/slider_3-5.jpg'),
      //     name: '台茂購物中心',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
