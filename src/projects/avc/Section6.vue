<template>
  <div class="section6">
    <img src="./s6/bg.jpg" alt="" class="bg-img">
    <h3 class="label flex-c">
      漾建築
    </h3>
    <h3 class="title1">
      純粹49戶豪宅規格
    </h3>
    <h3 class="title2">
      新手成家輕價格
    </h3>
    <hr>
    <h3 class="desc">
      石材氣派基座、挑高6米大廳，精品旅店式休閒設施--健身房、空中花園、親子遊戲室…，全棟僅精選49戶優質好鄰，與億元豪宅同享尊榮居住禮遇。
    </h3>
    <h3 class="txt">
      3D參考示意圖
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
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

.label {
  @include div_l_pc(184, 81, 67 + 90, 191);
  border: solid 1.2px #6e3a1d;
  font-size: size(45);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #6e3a1d;
  border-radius: 40px / 40px;
}

.title1 {
  @include img_l_pc(440, 171 + 90, 880);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title2 {
  @include img_l_pc(440, 233 + 90, 1055);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

hr {
  @include img_r_pc(687, 396, 444);
  border: solid 2px #ffffff;
}

.desc {
  @include img_r_pc(581, 330 + 90, 460);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(28);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.66;
  letter-spacing: size(3.53);
  text-align: left;
  color: #ffffff;
}

.txt {
  @include img_r_pc(187, 980, 25);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.61);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
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
    height: calc(100vh - 63px);
    min-height: calc(100vh - 63px);
    max-height: auto;
  }

  .bg-img {
    width: sizem(375);
    height: calc(100vh - 63px);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .label {
    @include div_r_m(145, 64, 14, 30);
    border: solid 1.2px #6e3a1d;
    font-size: sizem(34);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #6e3a1d;
    border-radius: 40px / 40px;
  }

  .title1 {
    @include img_l_m(229, 96, 32);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title2 {
    @include img_l_m(229, 134, 148);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  hr {
    @include img_r_m(310, 180, 32);
    border: solid 1px #ffffff;
  }

  .desc {
    @include img_r_m(310, 208, 33);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.66;
    letter-spacing: sizem(1.83);
    text-align: left;
    color: #ffffff;
  }

  .txt {
    @include img_r_m(87, 640, 20);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.61);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: isMobile ? require('./mo/6/bg.jpg') : require('./s6/1.jpg'),
      //     mode: 'dark',
      //     // name: '成功大學',
      //   },
      //   {
      //     img: isMobile ? require('./mo/6/bg2.jpg') : require('./s6/2.jpg'),
      //     mode: 'light',
      //     // name: '崑山科技大學',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
