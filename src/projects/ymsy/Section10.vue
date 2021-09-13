<template>
  <div class="section10">
     <img src="./s1/main.png" :alt="`${info.caseName}_img`" class="bird">
    <img src="./s1/cloud_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    <img src="./s1/cloud_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
    <img src="./s1/style.png" :alt="`${info.caseName}_img`" class="hill2"  data-aos-delay="0">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
   
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
  top:calc(40% + ( 950 - 1080 * 0.4) * 100vw / 1920);
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
  @include img_l_pc(430, 150, 200);
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
  @include img_l_pc(700, 220 , 155);
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
  @include img_l_pc(1084, 420, 150);
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
  @include img_l_pc(764, 550, 140);
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
     background-size: auto size-m(890);
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
    @include img_c_m(250, 90);
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
    @include img_r_m(550, 480, -200);
    animation: cloud 2.5s ease-in-out alternate infinite;
  }
  .cloud2 {
    @include img_l_m(600, 560, -50);
    animation: cloud 4s ease-in-out alternate infinite;
  }
  .hill1 {
    @include img_l_m(375, 0, 0);
    top: auto;
    bottom: 0;
  }
    .hill2 {
    @include img_l_m(1100, 0, -700);
    top:calc(50% + ( 475 - 667 * 0.5) * 100vw / 375);
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
    @include img_c_m(256, 170);
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
    @include img_c_m(268, 280);
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
