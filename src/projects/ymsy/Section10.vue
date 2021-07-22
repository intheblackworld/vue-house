<template>
  <div class="section10">
    <img src="./s1/bird.png" :alt="`${info.caseName}_img`" class="bird">
    <img src="./s1/cloud_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1" v-if="isPC">
    <img src="./s1/cloud_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2" v-if="isPC">
    <img src="./mobile/01/cloud_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1" v-if="isMobile">
    <img src="./mobile/01/cloud_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2" v-if="isMobile">
    <img src="./s1/hill.png" :alt="`${info.caseName}_img`" class="hill1" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
    <img src="./s1/hill_2.png" :alt="`${info.caseName}_img`" class="hill2" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
    <img src="./mobile/01/hill.png" :alt="`${info.caseName}_img`" class="hill1" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
    <img src="./mobile/01/hill_2.png" :alt="`${info.caseName}_img`" class="hill2" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1166.9 46.06'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity:0.3;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='圖層_2' data-name='圖層 2'%3E%3Cg id='圖層_1-2' data-name='圖層 1'%3E%3Cg class='cls-1'%3E%3Cpath class='cls-2' d='M46.21.41,26,26.2V45.59H19.14V26.32L0,.41H7.84L16.59,13C19,16.42,21,19.33,22.86,22.59h.25c1.73-3,3.87-6.11,6.35-9.61L38.54.41Z'/%3E%3Cpath class='cls-2' d='M203.15,45.59h-7.26l-6.77-14.65H167.25l-6.6,14.65h-7L174.43.41h7.93ZM187.72,27l-6.19-13.4A89,89,0,0,1,178.31,5h-.25c-.82,2.73-2,5.57-3.13,8.42L168.66,27Z'/%3E%3Cpath class='cls-2' d='M363.89,45.59H357L337,21.81a132.77,132.77,0,0,1-11.3-15l-.33.06A180.67,180.67,0,0,1,326,25.67V45.59h-6.44V.41h7.18l20.3,23.78A133.65,133.65,0,0,1,358,39l.16-.06a169.59,169.59,0,0,1-.82-18.79V.41h6.52Z'/%3E%3Cpath class='cls-2' d='M530,43.75a69.23,69.23,0,0,1-17.9,2.31c-24.68,0-30.54-13.22-30.54-22.76C481.54,9.54,494,0,513.73,0a49.09,49.09,0,0,1,14.52,1.9L526.44,6a39.77,39.77,0,0,0-12.88-1.84C498.71,4.15,488.72,11,488.72,23c0,12.21,9.49,19,23.85,19,5.28,0,8.83-.59,10.65-1.3V26.26H510.51v-4H530Z'/%3E%3Cpath class='cls-2' d='M708.71,45.59h-6.77l-1.57-20.34c-.49-6.46-1.15-14.82-1.07-19.44h-.25c-2.06,5.1-4.62,10.67-7.67,17L680.16,45.41h-5L664.64,23.24a164.79,164.79,0,0,1-7.18-17.43h-.25c-.16,5.51-.66,13-1.23,19.92l-1.74,19.86h-6.52L652.1.41h8.42l11.05,23c2.64,5.63,4.71,10.43,6.36,15.11h.24a141.69,141.69,0,0,1,6.52-15.11L696.16.41h8.59Z'/%3E%3Cpath class='cls-2' d='M828.26.41h6.85V45.59h-6.85Z'/%3E%3Cpath class='cls-2' d='M1000.8,45.59H994L973.9,21.81a131.59,131.59,0,0,1-11.3-15l-.33.06a183.47,183.47,0,0,1,.66,18.85V45.59h-6.44V.41h7.18L984,24.19a133.46,133.46,0,0,1,11,14.76l.17-.06a169.5,169.5,0,0,1-.83-18.79V.41h6.52Z'/%3E%3Cpath class='cls-2' d='M1166.9,43.75A69.25,69.25,0,0,1,1149,46.06c-24.67,0-30.53-13.22-30.53-22.76,0-13.76,12.46-23.3,32.18-23.3a49.16,49.16,0,0,1,14.53,1.9L1163.35,6a39.65,39.65,0,0,0-12.87-1.84c-14.86,0-24.84,6.88-24.84,18.85,0,12.21,9.49,19,23.85,19,5.28,0,8.83-.59,10.64-1.3V26.26h-12.7v-4h19.47Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" :alt="`${info.caseName}_img`" class="title-en" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/style_1.png" :alt="`${info.caseName}_img`" class="grass style1" v-if="isPC">
    <img src="./s1/style_2.png" :alt="`${info.caseName}_img`" class="grass style2" v-if="isPC">
    <img src="./s1/style_3.png" :alt="`${info.caseName}_img`" class="style3">
    <img src="./s1/style_4.png" :alt="`${info.caseName}_img`" class="grass style4" v-if="isPC">
    <img src="./mobile/01/style_1.png" :alt="`${info.caseName}_img`" class="grass style1" v-if="isMobile">
    <img src="./s1/title.png" :alt="`${info.caseName}_img`" class="title1" data-aos="fade-up" data-aos-delay="100">
    <div class="title2" data-aos="fade-up" data-aos-delay="200">
      北投で理想の未来を築く
    </div>
    <div class="title3" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
      天涯海角，還是回家最好
    </div>
    <div class="title3" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
      天涯海角<br />還是回家最好
    </div>
    <div class="title4" data-aos="fade-up" data-aos-delay="600">
      景觀︱捷運︱<span>2-3</span>房
    </div>

    <div class="new-text">銷售企劃：興益發建設自建自售</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: green;
  overflow-x: hidden;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0
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
  // opacity: 0.5;
}

.new-text {
  @include img_r_pc(500, 1010, 30);
  top:calc(40% + ( 1010 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

.grass {
  @include img_r_pc(1600, 0, -50);
  top: auto;
  bottom: 0;
  transform-origin: bottom;
  animation: grass 2s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(-5deg);
  }
}

.logo {
  @include img_l_pc(430, 150, 200);
}

.bird {
  @include img_r_pc(494, 0, 0);
  top: auto;
  bottom: 0;
}

@keyframes cloud {
  to {
    transform: translateX(-40px);
  }
}
.cloud1 {
  @include img_l_pc(1009, 171, 0);
  animation: cloud 2.5s ease-in-out alternate infinite;
}
.cloud2 {
  @include img_r_pc(926, 270, -40);
  animation: cloud 2s ease-in-out alternate infinite;
}
.hill1 {
  @include img_l_pc(1665, 0, 0);
  top: auto;
  bottom: 0;
}
.hill2 {
  @include img_r_pc(1338, 0, 0);
  top: auto;
  bottom: size(-80);
}
.logo {
  @include img_c_pc(836, 243);
}
.style1 {
  @include img_l_pc(438, 0, -40);
  top: auto;
  bottom: 0;
}
.style2 {
  @include img_l_pc(481, 0, -40);
  top: auto;
  bottom: 0;
}
.style3 {
  @include img_r_pc(494, 0, 0);
  top: auto;
  bottom: 0;
}
.style4 {
  @include img_r_pc(1045, 0, -100);
  top: auto;
  bottom: 0;
}
.title1 {
}

.title-en {
  @include img_c_pc(1166, 5);
}

.title1 {
  @include img_c_pc(235, 169);
}

.title2 {
  @include img_c_pc(410, 478);
  font-size: size(28.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(9.89);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title3 {
  @include img_c_pc(1084, 576);
  font-size: size(83.4);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(16.67);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title4 {
  @include img_c_pc(764, 692);
  font-size: size(78.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.86);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(90.6);
    letter-spacing: size(9.06);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section10 {
    width: 100vw;
    min-height: sizem(752);
    max-height: sizem(752);
    height: sizem(752);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    overflow: hidden;
    position: relative;
  }

    .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 670 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

  .grass {
    // @include img_r_pc(1600, 0, -50);
    top: auto;
    bottom: 0;
    transform-origin: bottom;
    animation: grass 2s ease-in-out alternate infinite;
  }

  @keyframes grass {
    to {
      transform: skewX(-5deg);
    }
  }

  .logo {
    @include img_c_m(304, 143);
  }

  .bird {
    display: none;
  }

  @keyframes cloud {
    to {
      transform: translateX(-40px);
    }
  }
  .cloud1 {
    @include img_l_m(375, 228, -40);
    animation: cloud 2.5s ease-in-out alternate infinite;
  }
  .cloud2 {
    @include img_r_m(375, 24, -40);
    animation: cloud 2s ease-in-out alternate infinite;
  }
  .hill1 {
    @include img_l_m(375, 0, 0);
    top: auto;
    bottom: 0;
  }
  .hill2 {
    @include img_l_pc(375, 0, 0);
    top: auto;
    bottom: size(-80);
  }

  .style1 {
    @include img_r_m(368, 0, -20);
    top: auto;
    bottom: 0;
  }
  .style2 {
    @include img_l_pc(481, 0, -40);
    top: auto;
    bottom: 0;
  }
  .style3 {
    @include img_r_m(238, 0, 0);
    top: auto;
    bottom: 0;
  }
  .style4 {
    @include img_r_pc(1045, 0, -100);
    top: auto;
    bottom: 0;
  }

  .title-en {
    @include img_l_m(337, 15, 18);
  }

  .title1 {
    @include img_c_m(92, 115);
  }

  .title2 {
    @include img_c_m(161, 220);
    font-size: sizem(11.1);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.89);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title3 {
    @include img_c_m(256, 325);
    font-size: sizem(36.5);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(7.3);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .title4 {
    @include img_c_m(268, 425);
    text-shadow: 0 0 5px #1b4a20;
    font-family: 'Noto Sans TC';
    font-size: sizem(27.3);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.73);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(31.5);
      font-weight: 900;
      letter-spacing: sizem(3.15);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section10',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
