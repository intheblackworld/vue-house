<template>
  <div class="section4">
    <img src="./s4/balloon.png" :alt="`${info.caseName}_img`" class="balloon">
    <img src="./s4/map.png" :alt="`${info.caseName}_img`" class="map">
    <img src="./s4/style.png" :alt="`${info.caseName}_img`" class="style1">
    <img src="./s4/mouse.png" :alt="`${info.caseName}_img`" class="mouse">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background: #bccf00;
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.balloon {
  @include img_l_pc(228, 92, 45);
}
.map {
  @include img_c_pc(1458, 0);
}
.mouse {
  @include img_l_pc(325, 0, 85);
  top: auto;
  bottom: 0;
}

.style1 {
  @include img_r_pc(416, 577, -208);
  opacity: 0.3;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section4 {
    width: 100vw;
    min-height: sizem(666);
    max-height: sizem(750);
    height: sizem(666);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .logo {
    @include img_c_m(184, 126);
  }

  .linear-dark {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  }

  .partical-bg {
    @include div_l_m(375, 667, -320, 100);
    transform: rotate(-65deg);
    overflow: hidden;

    > div {
      position: absolute;
      width: 100%;
      height: sizem(667);
    }
  }
  .title {
    @include img_c_m(254, 244);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.8);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(302, 312);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_c_m(303, 35, 372);
    text-shadow: none;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #253a7e;
    background-color: rgba(255, 255, 255, 0.82);
  }

  .label {
    @include div_c_m(239, 61, 487);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    font-size: sizem(16);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.42;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    background-color: #0097e2;
  }

  .btn {
    @include img_c_m(168, 526);
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    background-color: #0097e2;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section4',

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
