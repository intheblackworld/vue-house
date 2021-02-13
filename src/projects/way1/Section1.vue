<template>
  <div class="section1">
    <!-- <img src="./s1/bg.jpg" alt="" class="bg-img"> -->
    <img src="./s1/01_bg.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s1/01_arrow.png" :alt="`${info.caseName}_arrow`" class="arrow">
    <img src="./s1/01_btn.png" :alt="`${info.caseName}_btn`" class="btn">
    <img src="./s1/01_logo_box.png" :alt="`${info.caseName}_logo-box`" class="logo-box">
    <img src="./s1/01_logo.png" :alt="`${info.caseName}_logo`" class="logo">
    <img src="./s1/boutique_logo.png" :alt="`${info.caseName}_b-logo`" class="b-logo">
    <h1 class="title">建築對味 幸福到位</h1>
    <h3 class="subtitle1 flex-ac">遇見鳳鳴特區<span class="flex-ac">Destiny That Brought You To Me</span></h3>
    <h3 class="subtitle2 flex-ac">北歐幸福生活<span class="flex-ac">Is Living A Happy Life</span></h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_c_pc(1712, 156);
}

.arrow {
  @include img_l_pc(107, 556, 336);
}

.btn {
  @include img_l_pc(438, 712, 475);
}

.logo-box {
  @include img_r_pc(822, 591, 0);
}

.logo {
  @include img_r_pc(340, 845, 131);
}

.b-logo {
  @include img_r_pc(138, 211, 192);
}

.title {
  @include img_l_pc(438, 327, 329);
  font-size: size(115.9);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle1 {
  @include img_l_pc(438, 532, 474);
  font-size: size(44.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.68);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(29.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: size(2.95);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    margin-left: 5px;
  }
}

.subtitle2 {
  @include img_l_pc(438, 598, 474);
  font-size: size(44.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.68);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(29.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: size(2.95);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    margin-left: 5px;
  }
}

// .b1 {
//   @include img_l_pc(712, 383, 214);
// }

// .b2 {
//   @include img_l_pc(720, 768, 210);
// }

.i1 {
  @include img_c(933, -55, -775, 1920);
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
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
  .section1 {
    width: 100vw;
    min-height: sizem(725);
    max-height: sizem(725);
    height: sizem(725);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    @include img_c_m(200, 55);
  }

  .b {
    @include img_r_m(300, 495, -35);
    .bimg {
      transform: scaleX(-1);
    }
  }

  // .b1 {
  //   @include img_l_m(712, 383, 214);
  // }

  // .b2 {
  //   @include img_l_m(720, 768, 210);
  // }

  .i1 {
    @include img_l_m(288, 603, 0);
  }

  .i2 {
    @include img_c_m(244, 188);
  }

  .i3 {
    @include img_c_m(259, 323);
  }

  .t {
    @include img_r_m(42, 371, 140);
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
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
