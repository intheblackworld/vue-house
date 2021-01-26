<template>
  <div class="section3">
    <div class="bg-img"></div>
    <div class="parallax-img">
      <img src="./s3/img.jpg" alt="" v-rellax="{
          // Rellax Options
          // See: https://github.com/dixonandmoe/rellax#features
          speed: 1,
        }">
    </div>
    <img src="./s3/title.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isPC">
    <img src="./s3/title_m.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isMobile">
    <img src="./s3/logo.png" :alt="`${info.
    caseName}_logo`" class="logo">
    <h1 class="title">
      騎士堡 夢幻樂園
    </h1>
    <div class="desc">
      不再煩惱要去哪邊放電了！<br />
      全台最受歡迎的室內樂園，<br />
      把「多元設施」及「情境體驗」搬來，<br />
      打造城市探險，全場免費，親子嗨玩！
    </div>
    <div class="animate-bg">
      <img src="./s1/bubb (3).png" :alt="`${info.caseName}_bubble3`" class="bubble3">
      <img src="./s1/bubb (5).png" :alt="`${info.caseName}_bubble4`" class="bubble4">
    </div>
  </div>
</template>

<style lang="scss">
.Masthead {
  overflow: visible !important;
  z-index: 1 !important;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(756 + 357);
  min-height: size(756 + 357);
  max-height: size(756 + 357);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  background-color: #fff;

  &:nth-child(1) {
    position: relative;
  }
}

.title-img {
  @include img_l_pc(114, 81, 359);
}

.logo {
  @include img_r_pc(365, 29, 698);
}

.title {
  @include img_l_pc(452, 100, 527);
  font-size: size(37);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(552, 170, 536);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.p1 {
  @include img_r_pc(217, 235, 223);
  top: auto;
}

.p2 {
  @include img_r_pc(211, 516, 445);
  top: auto;
}

@keyframes jump {
  to {
    margin-top: -20px;
    // transform: translateY(-30px);
  }
}
.animate-bg {
  .bubble3 {
    @include img_l_pc(600, 689, -148);
    animation: jump 2s 0s ease-in-out alternate-reverse infinite;
  }

  .bubble4 {
    @include img_r_pc(282, 135, 248);
    animation: jump 1s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }
}

.parallax-img {
  width: 100vw;
  height: size(756);
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  img {
    width: 100%;
  }
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
  .section3 {
    width: 100vw;
    height: sizem(184 + 317);
    min-height: sizem(184 + 317);
    max-height: sizem(900);
    overflow: visible;
    position: relative;
  }

  .title-img {
    @include img_l_m(304, 44, 33);
    z-index: 10;
  }

  .logo {
    @include img_r_m(143, 94, 10);
    z-index: 5;
  }

  .title {
    @include img_l_m(179, 123, 33);
    font-size: sizem(24);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 179, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .p1 {
    @include img_r_m(90, 578, 93);
    top: auto;
  }

  .p2 {
    @include img_r_m(87, 697, 186);
    top: auto;
  }

  @keyframes jump {
    to {
      margin-top: -20px;
      // transform: translateY(-30px);
    }
  }
  .animate-bg {
    .bubble3 {
      @include img_l_m(140, 409, -70);
      animation: jump 2s 0s ease-in-out alternate-reverse infinite;
    }

    .bubble4 {
      @include img_r_m(83, 278, 10);
      animation: jump 1s 0s ease-in-out alternate-reverse infinite;
      z-index: 5;
    }
  }

  .parallax-img {
    width: 100vw;
    height: sizem(184);
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    img {
      width: 100%;
      margin-top: sizem(150);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import Parallax from 'vue-parallaxy'

export default {
  name: 'section3',

  // components: {
  //   Parallax,
  // },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },
  methods: {
    showDialog() {
      if (this.isMobile) {
        this.isDialog = true
      }
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
