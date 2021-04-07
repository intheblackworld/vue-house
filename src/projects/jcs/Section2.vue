<template>
  <div class="section2">
    <div class="container">
      <div class="cloud absolute flex">
        <img src="./s2/bgcc.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
        <img src="./s2/bgcc.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
      </div>
      <img src="./s2/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
      <img src="./s2/bg_m.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
      <div class="line"></div>
      <div class="label" data-aos="fade" data-aos-delay="300">
        ｜大竹崛起｜
      </div>
      <div class="title" data-aos="fade" data-aos-delay="200">
        並肩青埔 舉目藝文<br />
        大竹未來拭目以待
      </div>
      <div class="desc" v-if="isPC" data-aos="fade" data-aos-delay="400">
        放眼青埔未來、跟進藝文價值，大竹地段潛力正在躍升。<br />
        十分鐘車程，前進全台最大名品城、IKEA、Xpark享受時尚氛圍；<br />
        享受藝文特區展演活動、市圖總館的城市書香氛圍。<br />
        大竹並肩桃園地段價值雙引擎，成長動能無與倫比
      </div>
      <div class="desc" v-if="isMobile" data-aos="fade" data-aos-delay="400">
        放眼青埔未來、跟進藝文價值，大竹地段潛力正在躍升。十分鐘車程，前進全台最大名品城、IKEA、Xpark享受時尚氛圍；享受藝文特區展演活動、市圖總館的城市書香氛圍。大竹並肩桃園地段價值雙引擎，成長動能無與倫比
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: calc(100vh - 40px);
  min-height: calc(46.875vw - 40px);
  max-height: calc(56.25vw - 40px);
  background-color: #fff;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  z-index: 2;
}

.container {
  @include div_c_pc(1714, 866, 111);
  max-height: 90%;
  top:50%;
  transform: translateY(-50%);
  overflow: hidden;
}

.cloud {
  animation: move 50s 0s linear infinite;
  top: 0;
  left: 0;
  height: 100%;
  // z-index: 2;
}

.cloud-item {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

@keyframes move {
  to {
    transform: translateX(-50%);
  }
}
.line {
  @include div_r_pc(12.6, 226, 0, 638);
  background-color: #ff8700;
}
.label {
  @include img_r_pc(208, 21, 400);
  font-size: size(30.5);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.89);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 2;
}
.title {
  @include img_r_pc(544, 65, 63);
  font-size: size(66.1);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 2;
}

.desc {
  @include img_l_pc(615, 660, 75);
  top: auto;
  bottom: 0;
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: size(1.2);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 3;
}

/*
.logo2 {
  width: size(483);
  left: size(134);
  top: size(462);
}
*/

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
    min-height: sizem(630);
    max-height: sizem(700);
    height: sizem(667);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .bg-img {
    top: auto;
    height: auto;
    min-height: 100%;
    bottom: 0;
  }
  .container {
    @include div_c_m(375, 667, 0);
    overflow: hidden;
  max-height: 100%;
  top:0%;
  transform: translateY(0%);
  }


  .cloud {
    animation: move 50s 0s linear infinite;
    top: 0;
    left: 0;
    height: 100%;
    // z-index: 2;
  }

  .cloud-item {
    width: sizem(1920);
    height: 100%;
    object-fit: cover;
  }

  @keyframes move {
    to {
      transform: translateX(-50%);
    }
  }
  .line {
    @include div_l_m(7, 118, 33, 39);
    background-color: #ff8700;
  }
  .label {
    @include img_l_m(208, 43, 56);
    font-size: sizem(17);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(2.72);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 2;
  }
  .title {
    @include img_l_m(310, 70, 56);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 2;
  }

  .desc {
    @include img_l_m(310, 475, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.9);
    text-align: left;
    color: #ffffff;
    white-space: normal;
    z-index: 3;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
