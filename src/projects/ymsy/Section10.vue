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
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1700.19 46.71'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity:0.3;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='圖層_2' data-name='圖層 2'%3E%3Cg id='圖層_1-2' data-name='圖層 1'%3E%3Cg class='cls-1'%3E%3Cpath class='cls-2' d='M46.32.71,26.06,26.57V46H19.19V26.69L0,.71H7.86l8.77,12.66c2.4,3.39,4.38,6.3,6.28,9.57h.25c1.74-3,3.89-6.12,6.37-9.63L38.63.71Z'/%3E%3Cpath class='cls-2' d='M170.57,46h-7.28l-6.78-14.68H134.59L128,46h-7L141.79.71h7.94ZM155.1,27.4,148.9,14a90.55,90.55,0,0,1-3.23-8.62h-.25c-.82,2.73-2,5.59-3.14,8.44L136,27.4Z'/%3E%3Cpath class='cls-2' d='M298.63,46h-6.87l-20.1-23.83a133.25,133.25,0,0,1-11.33-15.1l-.33.06a181.79,181.79,0,0,1,.66,18.9V46h-6.45V.71h7.19l20.35,23.84a133.82,133.82,0,0,1,11,14.79l.17-.05a170.38,170.38,0,0,1-.83-18.85V.71h6.54Z'/%3E%3Cpath class='cls-2' d='M432.06,44.16a69.52,69.52,0,0,1-17.95,2.32c-24.74,0-30.61-13.26-30.61-22.83C383.5,9.87,396,.3,415.76.3a49.34,49.34,0,0,1,14.56,1.9L428.5,6.3a39.86,39.86,0,0,0-12.9-1.84c-14.89,0-24.9,6.89-24.9,18.9,0,12.24,9.51,19.07,23.9,19.07,5.3,0,8.85-.59,10.67-1.3V26.63H412.54v-4h19.52Z'/%3E%3Cpath class='cls-2' d='M578.14,46h-6.78l-1.57-20.38c-.5-6.48-1.16-14.86-1.08-19.5h-.24c-2.07,5.11-4.64,10.7-7.7,17l-11.25,22.7h-5L534,23.59a161.22,161.22,0,0,1-7.19-17.47h-.25c-.17,5.53-.66,13-1.24,20L523.55,46H517L521.4.71h8.44l11.08,23a162.29,162.29,0,0,1,6.37,15.16h.25a140.29,140.29,0,0,1,6.53-15.16l11.5-23h8.6Z'/%3E%3Cpath class='cls-2' d='M664.92.71h6.87V46h-6.87Z'/%3E%3Cpath class='cls-2' d='M804.81,46h-6.87l-20.1-23.83a133.25,133.25,0,0,1-11.33-15.1l-.33.06a184.62,184.62,0,0,1,.66,18.9V46h-6.45V.71h7.19l20.35,23.84a133.82,133.82,0,0,1,11,14.79l.17-.05a170.38,170.38,0,0,1-.83-18.85V.71h6.54Z'/%3E%3Cpath class='cls-2' d='M938.24,44.16a69.59,69.59,0,0,1-18,2.32c-24.74,0-30.61-13.26-30.61-22.83C889.68,9.87,902.17.3,921.94.3A49.34,49.34,0,0,1,936.5,2.2l-1.82,4.1a39.89,39.89,0,0,0-12.91-1.84c-14.88,0-24.89,6.89-24.89,18.9,0,12.24,9.51,19.07,23.9,19.07,5.3,0,8.85-.59,10.67-1.3V26.63H918.71v-4h19.53Z'/%3E%3Cpath class='cls-2' d='M1178.05,46h-6.79l-1.57-20.38c-.49-6.48-1.16-14.86-1.07-19.5h-.25c-2.07,5.11-4.63,10.7-7.69,17l-11.25,22.7h-5l-10.5-22.23a163.53,163.53,0,0,1-7.2-17.47h-.25c-.16,5.53-.66,13-1.24,20L1123.45,46h-6.53L1121.3.71h8.44l11.08,23a162.29,162.29,0,0,1,6.37,15.16h.25A138.58,138.58,0,0,1,1154,23.71l11.49-23h8.61Z'/%3E%3Cpath class='cls-2' d='M1309.91,46h-7.28l-6.78-14.68h-21.92L1267.31,46h-7L1281.12.71h7.94Zm-15.47-18.6L1288.24,14A87.91,87.91,0,0,1,1285,5.35h-.25c-.83,2.73-2,5.59-3.14,8.44l-6.29,13.61Z'/%3E%3Cpath class='cls-2' d='M1438,46h-6.86L1411,22.17a133.38,133.38,0,0,1-11.34-15.1l-.33.06A181.5,181.5,0,0,1,1400,26V46h-6.46V.71h7.2l20.35,23.84a136.41,136.41,0,0,1,11,14.79l.16-.05a170.48,170.48,0,0,1-.82-18.85V.71H1438Z'/%3E%3Cpath class='cls-2' d='M1576.85,22.94c0,15.93-12.41,23.77-27.29,23.77-15.64,0-26.72-8.85-26.72-23C1522.84,9,1534.5,0,1550.3,0,1566.43,0,1576.85,9.27,1576.85,22.94Zm-46.82.65c0,9.63,7,19,19.77,19,13,0,19.86-9.09,19.86-19.43,0-9.09-6.21-19.08-19.69-19.08C1536.07,4.1,1530,14,1530,23.59Z'/%3E%3Cpath class='cls-2' d='M1686.3,24.31c4.88,1.13,7.77,4.52,9.26,9.45,2,6.53,3.39,10.52,4.63,12.24h-7.11c-1-1.31-2.4-5.29-4-10.93-1.82-6.3-5.3-9.1-12.74-9.1h-7.7V46h-6.86V1.37a102.23,102.23,0,0,1,14.31-1c8.19,0,13.56,1.18,17.29,3.68a10.08,10.08,0,0,1,4.71,8.44c0,6-5,9.87-11.74,11.59Zm-9.6-2.14c8.77,0,14.39-3.57,14.39-9,0-6.71-7-8.79-14.72-8.79a52.3,52.3,0,0,0-7.78.47V22.17Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" :alt="`${info.caseName}_img`" class="title-en" data-aos="fade-up" data-aos-delay="0">
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
  @include img_c_pc(1702, 5);
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
    @include img_l_m(337, 15, 0);
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
