<template>
  <div class="section1">
    <!-- <img src="./s1/bg.jpg" alt="" class="bg-img"> -->
    <img src="./s1/01_bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC" data-aos="fade" data-aos-delay="0">
    <img src="./m/01/01_bg_m.png" :alt="`${info.caseName}_img`" class="img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
    <img src="./s1/01_arrow.png" :alt="`${info.caseName}_arrow`" class="arrow"  data-aos="fade-up" data-aos-delay="800" v-scroll-to="{ element: `#section2` }" >
    <img src="./s1/01_btn.png" :alt="`${info.caseName}_btn`" class="btn" v-scroll-to="{ element: `#contact` }" data-aos="fade" data-aos-delay="0">
    <img src="./s1/01_logo_box.png" :alt="`${info.caseName}_logo-box`" class="logo-box" data-aos="fade" data-aos-delay="0">
    <img src="./s1/01_logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="0">
    <img src="./s1/boutique_logo.png" :alt="`${info.caseName}_b-logo`" class="b-logo" data-aos="fade" data-aos-delay="0">
    <h1 class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">建築對味 幸福到位</h1>
    <h1 class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">建築對味<br />幸福到位</h1>
    <h3 class="subtitle1 flex-ac" v-if="isPC"  data-aos="fade-up" data-aos-delay="400">遇見鳳鳴特區<span class="flex-ac">Destiny That Brought You To Me</span></h3>
    <h3 class="subtitle2 flex-ac" v-if="isPC"  data-aos="fade-up" data-aos-delay="600">北歐幸福生活<span class="flex-ac">Is Living A Happy Life</span></h3>
    <h3 class="subtitle1 flex-ac wrap" v-if="isMobile"  data-aos="fade-up" data-aos-delay="400">遇見鳳鳴特區<br /><span class="flex-ac">Destiny That Brought You To Me</span></h3>
    <h3 class="subtitle2 flex-ac wrap" v-if="isMobile"  data-aos="fade-up" data-aos-delay="600">北歐幸福生活<br /><span class="flex-ac">Is Living A Happy Life</span></h3>
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
  animation: arrow 1s 0s ease-in-out alternate-reverse infinite;
  cursor: pointer;
}

@keyframes arrow {
  to {
    margin-top: 25px;
  }
}

.btn {
  @include img_l_pc(438, 712, 475);
  cursor: pointer;
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
    min-height: sizem(604);
    max-height: sizem(604);
    height: sizem(604);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .img {
    @include img_c_m(335, 25);
  }

  .arrow {
    @include img_l_m(36.6, 400, 60);
  }

  .btn {
    display: none;
    // @include img_l_m(438, 712, 475);
  }

  .logo-box {
    @include img_r_m(340, 408, -40);
  }

  .logo {
    @include img_r_m(147, 509, 10);
  }

  .b-logo {
    @include img_r_m(68, 96, 54);
  }

  .title {
    @include img_l_m(161, 186, 69);
    font-size: sizem(39);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(1.56);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle1 {
    @include img_l_m(120, 324, 109);
    font-size: sizem(18.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.13);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: sizem(9.2);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: sizem(0.82);
      text-align: left;
      color: #ffffff;
      white-space: nowrap;
      margin-left: 0px;
    }
  }

  .subtitle2 {
    @include img_l_m(119, 382, 109);
    font-size: sizem(18.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.13);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: sizem(9.2);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: sizem(0.82);
      text-align: left;
      color: #ffffff;
      white-space: nowrap;
      margin-left: 0px;
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
