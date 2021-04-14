<template>
  <div class="section2">
    <div class="container">
      <div class="cloud absolute flex">
        <img src="./s2/bgcc.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
        <img src="./s2/bgcc.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
      </div>
      <img src="./s2/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
      <img src="./s2/bg_m.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
    <div class="content">
      <div class="line" data-aos="fade-down" data-aos-delay="0"></div>
      <div class="label" data-aos="fade-down" data-aos-delay="100">
        ｜大竹崛起｜
      </div>
      <div class="title" data-aos="fade-down" data-aos-delay="300">
        並肩青埔 舉目藝文<br />
        大竹未來拭目以待
      </div>
    </div>
      <div class="desc" v-if="isPC" data-aos="fade-down" data-aos-offset="-600" data-aos-delay="500">
        放眼青埔未來、跟進藝文價值，大竹地段潛力正在躍升。<br />
        十分鐘車程，前進全台最大名品城、IKEA、Xpark享受時尚氛圍；<br />
        享受藝文特區展演活動、市圖總館的城市書香氛圍。<br />
        大竹並肩桃園地段價值雙引擎，成長動能無與倫比
      </div>
      <div class="desc" v-if="isMobile" data-aos="fade-down" data-aos-delay="500">
        放眼青埔未來、跟進藝文價值，大竹地段潛力正在躍升。十分鐘車程，前進全台最大名品城、IKEA、Xpark享受時尚氛圍；享受藝文特區展演活動、市圖總館的城市書香氛圍。大竹並肩桃園地段價值雙引擎，成長動能無與倫比
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: calc(100vh - 20px);
  min-height: calc(46.875vw - 20px);
  max-height: calc(56.25vw - 20px);
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
  max-height: 85%;
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

.content{ @include img_r_pc(640, 0, 103);
font-size: size(30);
padding: 0.8em 0 0 1.5em;
  font-stretch: normal;
  font-style: normal;
  color: #ffffff;
  text-align: left;
  line-height: 1.5;
  z-index: 2;
}

.line {
  @include div_l_pc(14, 180, 0, 0);
  width: 0.5em;
  height: 100%;
  z-index: 2;
  background-color: #ff8700;
}
.label {
  position: relative;
  font-size: 1em;
  font-weight: 400;
  letter-spacing:0.16em;
  left: -0.3em;
}
.title {
  font-size: 2.2em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0.3em 0;
}

.subtitle {
  font-size: 1.23em;
  font-weight: 300;
  letter-spacing:0.4em;
}

.desc {
  @include img_l_pc(615, 660, 75);
  top: auto;
  bottom:  size(50);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: size(1.2);
  text-align: left;
  color: #FFF;
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
    min-height: sizem(604);
    max-height: sizem(760);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .bg-img {
    top: auto;
    height: auto;
    min-height: 100%;
    width: 108%;
    left: -4%;
    bottom: 0;
  }
  .container {
    @include div_c_m(375, 667, 0);
    overflow: hidden;
    height: 100%;
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
  
  .content{@include img_l_m(7, 44, 20);
width: auto;
    font-size: sizem(17);
    position: relative;
padding: 0 0 0 1.5em;
  }
  .title {
    font-size: 1.47em;
  }

  .desc {
    @include img_c_m(320, 475);
    top: auto;
    bottom: sizem(30);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing:0.03em;
    text-align: justify;
    color: #ffffff;
    white-space: normal;
    z-index: 3;
    text-shadow: 0 0 0.5em #140, 0 0 0.1em #140;
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
