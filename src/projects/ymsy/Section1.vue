<template>
  <div class="section1">
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
    <img src="./mobile/01/title_en.png" :alt="`${info.caseName}_img`" class="title-en" data-aos="fade-up" data-aos-delay="0">
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
      <span>北市稀有 近三千坪大基地</span><br />
      李天鐸大樹莊園│景觀 捷運│ 2-3房
    </div>
    <div class="title3" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
      北市稀有 近三千坪大基地<br />
      <span>李天鐸大樹莊園<br />景觀│捷運 <span>2-3</span>房</span>
    </div>
    <div class="title4" data-aos="fade-up" data-aos-delay="600">
      2897-9888
    </div>
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
  background: green;
  // background-image: url('./s1/01_bg.jpg');
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
  @include img_c_pc(770, 603);
  font-size: size(43.5);
  font-weight: 500;
  font-stretch: normal;
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
  @include img_c_pc(436, 721);
  text-shadow: 0 0 5px #1b4a20;
  font-family: 'Noto Sans TC';
  font-size: size(86.2);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-2.15);
  text-align: left;
  color: #fff100;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
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
    @include img_c_m(304, 163);
  }

  .bird {
    @include img_r_m(238, 0, 0);
    top: auto;
    bottom: 0;
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
    @include img_l_pc(337, 15, 0);
  }

  .title1 {
    @include img_l_m(92, 59, 17);
  }

  .title2 {
    @include img_c_m(161, 139);
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
    @include img_c_m(280, 250);
    font-size: sizem(21.4);
    font-weight: 500;
    font-family: 'Noto Sans TC';
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.14);
    text-align: center;
    color: #fff100;
    white-space: normal;

    > span {
      display: block;
      margin-top: sizem(45);
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
    @include img_c_m(218, 425);
    text-shadow: 0 0 5px #1b4a20;
    font-family: 'Noto Sans TC';
    font-size: sizem(43.1);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-1.08);
    text-align: left;
    color: #fff100;
    white-space: nowrap;
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
