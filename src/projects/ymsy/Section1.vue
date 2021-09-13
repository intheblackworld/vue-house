<template>
  <div class="section1">
    <img src="./s1/main.png" :alt="`${info.caseName}_img`" class="bird">
    <img src="./s1/cloud_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    <img src="./s1/cloud_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
    <img src="./s1/style.png" :alt="`${info.caseName}_img`" class="hill2"  data-aos-delay="0">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/text_box.png" :alt="`${info.caseName}_img`" class="text-box" data-aos="fade-up" data-aos-delay="0">
    <div class="title3" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
      北投生活圈 李天鐸莊園
    </div>
    <div class="title3" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
      北投生活圈 李天鐸莊園
    </div>
    <div class="title4" data-aos="fade-up" data-aos-delay="600">
      2897-9888
    </div>
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080); 
  overflow: hidden;
  position: relative;
  background-image: url('./s1/bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;
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
  top:calc(40% + ( 990 - 1080 * 0.4) * 100vw / 1920);
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
  @include img_l_pc(430, 150, 30);
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
  @include img_r_pc(1434, 700, 200);
  animation: cloud 2.5s ease-in-out alternate infinite;
}
.cloud2 {
  @include img_l_pc(926, 860, 0);
  animation: cloud 4s ease-in-out alternate infinite;
}
.hill1 {
  @include img_l_pc(1665, 0, 0);
  top: auto;
  bottom: 0;
}
.hill2 {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-30);
}
.logo {
  @include img_l_pc(880, 220 , 155);
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
  @include img_l_pc(770, 450, 150);
  font-size: size(80);
  font-stretch: normal;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.35);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(50.1);
    letter-spacing: size(5.01);
    color: #fff100;
  }
}

.title4 {
  @include img_l_pc(1000, 540, 310);
  text-shadow: 0 0 5px #1b4a20;
  font-family: 'Noto Sans TC';
  font-size: size(150);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-2.15);
  text-align: left;
  color: #f9f8c7;
}
.text-box {
  @include img_l_pc(120, 580, 155);
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(680);
    max-height: sizem(680);
    height: sizem(680);
    // margin: 0 0 -12vw 0;
    background-size: auto size-m(750);
    overflow: hidden;
    position: relative;
  }

  .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 640 - 667 * 0.5) * 100vw / 375);
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
    @include img_c_m(304, 50);
  }

  .bird {
    @include img_c_m(280, 250);
  }

  @keyframes cloud {
    to {
      transform: translateX(-40px);
    }
  }
  .cloud1 {
    @include img_r_m(550, 420, -200);
    animation: cloud 2.5s ease-in-out alternate infinite;
  }
  .cloud2 {
    @include img_l_m(600, 500, -50);
    animation: cloud 4s ease-in-out alternate infinite;
  }
  .hill1 {
    @include img_l_m(500, 0, 0);
    top: auto;
    bottom: 0;
  }
  .hill2 {
    @include img_l_m(1100, 0, -700);
    top:calc(50% + ( 440 - 667 * 0.5) * 100vw / 375);
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
    @include img_c_m(150, 59);
  }

  .title2 {
    @include img_c_m(210, 150 - 52);
    font-size: sizem(15);
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
    @include img_c_m(350, 130);
    font-size: sizem(28);
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.14);
    text-align: center;
    color: #fff;
    white-space: normal;

    > span {
      display: block;
      margin-top: sizem(20);
      font-size: sizem(31.6);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: sizem(3.16);
      text-align: center;
      color: #ffffff;
      white-space: nowrap;
      > span {
        font-size: sizem(36.4);
        font-weight: 900;
        letter-spacing: sizem(2.62);
        color: #fff;
      }
    }
  }

  .title4 {
    @include img_r_m(218, 170, 50 );
    text-shadow: 0 0 5px #1b4a20;
    font-family: 'Noto Sans TC';
    font-size: sizem(50);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-1.08);
    text-align: left;
    color: #f9f8c7;
    white-space: nowrap;
  }
  .text-box {
  @include img_l_m(50, 177, 35);
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

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
