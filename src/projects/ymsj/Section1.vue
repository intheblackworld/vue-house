<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/mask.png" :alt="`${info.caseName}_img`" class="mask">
    <h1 class="title"  data-aos="fade-up" data-aos-delay="400">
      層峰富豪夢想 一生難得一遇
    </h1>
    <h3 class="subtitle"  data-aos="fade-up" data-aos-delay="600">
      即將與您相逢
    </h3>
    <img src="./s1/btn.png" :alt="`${info.caseName}_img`" class="btn" v-scroll-to="{ element: `#contact`, offset: 0 }" data-aos="fade-up" data-aos-delay="800">
    <div class="cloud-bg">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
      <img src="./s1/style_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
      <img src="./s1/style_3.png" :alt="`${info.caseName}_img`" class="cloud cloud3">
      <img src="./s1/style_4.png" :alt="`${info.caseName}_img`" class="cloud cloud4">
      <img src="./s1/style_5.png" :alt="`${info.caseName}_img`" class="cloud cloud5">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(900);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.logo {
  @include img_c_pc(406, 266);
}

.btn {
  @include img_c_pc(290, 644);
  cursor: pointer;
}

.mask {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-165);
  z-index:2;
}

.title {
  @include img_c_pc(702, 468);
  font-size: size(51.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.58);
  text-align: center;
  color: #cc8b00;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(190, 555);
  font-size: size(29.9);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.24);
  text-align: center;
  color: #686868;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    @include img_l_pc(254, 18, -265);
    border-top: 1px solid #686868;
  }

  &::before {
    content: '';
    position: absolute;
    @include img_r_pc(254, 18, -265);
    border-top: 1px solid #686868;
  }
}

.cloud-bg {
  .cloud {
    animation: cloud 5s ease-in-out alternate infinite;
  }

  .cloud1 {
    @include img_l_pc(173, 181, -30);
    transform: translateX(-10%);
  }

  .cloud2 {
    @include img_r_pc(460, 286, -50);
    transform: translateX(-15%);
  }

  .cloud3 {
    @include img_r_pc(537, 234, 150);
    transform: translateX(-8%);
  }

  .cloud4 {
    @include img_r_pc(747, 680, 0);
    transform: translateX(20%);
		animation: none;
  }

  .cloud5 {
    @include img_l_pc(1112, 716, -120);
    transform: translateX(-5%);
  }
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
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
    @include img_c_m(236, 177);
  }

  .btn {
    @include img_c_m(216, 416);
    cursor: pointer;
  }

  .mask {
    @include img_c_m(375, 0);
    top: auto;
    bottom: sizem(-35);
  }

  .title {
    @include img_c_m(300, 328);
    font-size: sizem(22);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: sizem(1.96);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(102, 373);
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #686868;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      @include img_l_m(90, 8, -100);
      border-top: 1px solid #686868;
    }

    &::before {
      content: '';
      position: absolute;
      @include img_r_m(90, 8, -100);
      border-top: 1px solid #686868;
    }
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(76, 118, -20);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(286, 79, -50);
      transform: translateX(-15%);
    }

    .cloud3 {
      @include img_r_m(151, 104, 20);
      transform: translateX(-8%);
    }

    .cloud4 {
      @include img_r_m(209, 499, -40);
      transform: translateX(20%);
    }

    .cloud5 {
      @include img_l_m(322, 561, -50);
      transform: translateX(-5%);
    }
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
