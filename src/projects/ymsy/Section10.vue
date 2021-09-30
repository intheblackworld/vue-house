<template>
  <div class="section10">
    <img loading="lazy" src="./s10/cloud_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    <img loading="lazy" src="./s10/cloud_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
    <img loading="lazy" src="./s10/style_1.png" :alt="`${info.caseName}_img`" class="hill2"  data-aos-delay="0">
    <img loading="lazy" src="./s10/style_2.png" :alt="`${info.caseName}_img`" class="hill3"  data-aos-delay="0">
    <img loading="lazy" src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
    <img loading="lazy" src="./mobile/01/logo_m.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
    <img loading="lazy" src="./s1/text_box.png" :alt="`${info.caseName}_img`" class="text-box" data-aos="fade-up" data-aos-delay="0">
   
    <div class="title3" data-aos="fade-up" data-aos-delay="400">
      人生幾何 能夠如此心動
    </div>
    <div class="title4" data-aos="fade-up" data-aos-delay="600">
      2897-9888
    </div>

    <div class="new-text">銷售企劃：興益發建設自建自售</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080); 
  overflow: hidden;
  position: relative;
  background-image: url('./s1/bg.jpg');
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
  top:calc(40% + ( 1000 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  z-index: 10;
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
  @include img_c_pc(400, 350);
}

.bird {
  @include img_r_pc(530, 0, 60);
  top: auto;
  bottom: 0;
  z-index: 9;
}

@keyframes cloud {
  to {
    transform: translateX(-40px);
  }
}
.cloud1 {
  @include img_r_pc(622, 30, 80);
  animation: cloud 2.5s ease-in-out alternate infinite;
  z-index: 5;
}
.cloud2 {
  @include img_l_pc(1057, 750, 0);
  animation: cloud 4s ease-in-out alternate infinite;
  z-index: 5;
}
.hill3 {
  @include img_l_pc(1656, 0, 0);
  top: auto;
  bottom: 0;
}
.hill2 {
  @include img_r_pc(970, 0, 0);
}
.logo {
  @include img_c_pc(600, 320);
}
.text-box {
  @include img_l_pc(71, 560, 690);
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
  @include img_c_pc(410, 578);
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
  @include img_c_pc(520, 490);
  font-size: size(30);
  font-family: 'Noto Sans TC';
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(20);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.title4 {
  @include img_l_pc(764, 543, 610);
  font-size: size(78.6);
  font-family: 'Noto Sans TC';
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #F5F4C4;
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
    background-image: url('./mobile/01/bg_m.jpg');
    min-height: sizem(752);
    max-height: sizem(667);
    height: sizem(667);
    // margin: 0 0 -12vw 0;
     background-size: auto size-m(850);
     background-position:center center;
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
  z-index: 10;
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
    @include img_c_m(250, 220);
  }

  .bird {
    @include img_c_m(280, 350);
  }

  @keyframes cloud {
    to {
      transform: translateX(-40px);
    }
  }
  .cloud1 {
    @include img_r_m(400, 10, -40);
    animation: cloud 2.5s ease-in-out alternate infinite;
  }
  .cloud2 {
    @include img_l_m(400, 630, 80);
    animation: cloud 4s ease-in-out alternate infinite;
  }
    .hill2 {
    @include img_r_m(500, -50, 0);
    top:calc(50% + ( -50 - 667 * 0.5) * 100vw / 375);
  }
    .hill3 {
    @include img_l_m(850, 600, 0);
    top:calc(50% + ( 600 - 667 * 0.5) * 100vw / 375);
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
  .text-box {
  @include img_l_m(35, 425, 45);
}

  .title2 {
    @include img_c_m(161, 220);
    font-size: sizem(8);
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
    @include img_c_m(300, 380);
    font-size: sizem(20);
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
    @include img_r_m(200, 415, 80);
    text-shadow: 0 0 5px #1b4a20;
    font-family: 'Noto Sans TC';
    font-weight: bold;
    font-size: sizem(41);
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.73);
    text-align: center;
    color: #F5F4C4;
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
