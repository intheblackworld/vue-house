<template>
  <div class="section1">
    <!-- <img src="./s1/bg.jpg" alt="" class="bg-img"> -->
    <img src="./s1/01_bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC" data-aos="fade" data-aos-delay="0">
    <img src="./m/01/01_bg_m.png" :alt="`${info.caseName}_img`" class="img" v-if="isMobile" data-aos="fade" data-aos-delay="0">
    <img src="./s1/01_arrow.png" :alt="`${info.caseName}_arrow`" class="arrow"  data-aos="fade-up" data-aos-delay="800" v-scroll-to="{ element: `#section2` }" >
    <img src="./s1/01_btn.png" :alt="`${info.caseName}_btn`" class="btn" v-scroll-to="{ element: `#contact` }" data-aos="fade" data-aos-delay="0">
    <img src="./s1/01_logo_box.png" :alt="`${info.caseName}_logo-box`" class="logo-box" data-aos="fade" data-aos-delay="0" data-aos-offset="-300">
    <img src="./s1/01_logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="0" data-aos-offset="-500">
    <img src="./s1/boutique_logo.png" :alt="`${info.caseName}_b-logo`" class="b-logo" data-aos="fade" data-aos-delay="0">
    <h1 class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">建築對味 幸福到位</h1>
    <h1 class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">建築對味<br />幸福到位</h1>
    <div class="subtitle" v-if="isPC">
      <h3 class="subtitle1 flex-ac" data-aos="fade-up" data-aos-delay="400">遇見鳳鳴特區<span class="flex-ac">Destiny That Brought You To Me</span></h3>
      <h3 class="subtitle2 flex-ac" data-aos="fade-up" data-aos-delay="600">北歐幸福生活<span class="flex-ac">Is Living A Happy Life</span></h3>
    </div>
    <div class="subtitle" v-if="isMobile">
      <h3 class="subtitle1 flex-ac wrap" data-aos="fade-up" data-aos-delay="400" >遇見鳳鳴特區<br /><span class="flex-ac">Destiny That Brought You To Me</span></h3>
      <h3 class="subtitle2 flex-ac wrap" data-aos="fade-up" data-aos-delay="600" >北歐幸福生活<br /><span class="flex-ac">Is Living A Happy Life</span></h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height:calc(100vh - 80px);
  min-height: size(950);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  margin: 0 0 5vw;
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

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_c_pc(1712, 156);
  top:10%;
  height:85%;
  object-fit: cover;
}

.arrow {
  @include img_l_pc(107, 556, 336);
  top:calc(50% + 100vw * (550 - 540) / 1920);
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
  top:calc(50% + 100vw * (712 - 540) / 1920);
  cursor: pointer;
}

.logo-box {
  @include img_r_pc(822, 591, 0);
  top:auto;
  bottom:calc(5% - 8.3vw);
}

.logo {
  @include img_r_pc(340, 845, 131);
  top:auto;
  bottom:calc(5% + 1.2vw);
}

.b-logo {
  @include img_r_pc(138, 211, 192);
  top:calc(50% + 100vw * (211 - 540) / 1920);
}

.title {
  @include img_l_pc(438, 327, 329);
  top:calc(50% + 100vw * (327 - 540) / 1920);
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

.subtitle{
  @include img_l_pc(438, 532, 474);
  top:calc(50% + 100vw * (532 - 540) / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-size: size(44.6);
  line-height: 2;
  letter-spacing:0.06em;
  color: #ffffff;
  white-space: nowrap;

}
.subtitle1,
.subtitle2 {
  font-size:1em;
  text-align: left;

  span {
    font-size: size(29.5);
    line-height: 2;
    letter-spacing:0.09em;
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
    min-height: sizem(540);
    max-height: sizem(750);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .img {
    @include img_c_m(335, 25);
    width: calc(100% - 50px);
    top: 25px;
    height: 90%;
  }

  .arrow {
    @include img_l_m(36.6, 380, 65);
    top: calc(48% + 100vw * (380 - 302) / 375);
  }

  .btn {
    display: none;
    // @include img_l_m(438, 712, 475);
  }

  .logo-box {
    @include img_r_m(340, 408, -40);
  top:auto;
  bottom:calc(10% - 25px - 17.2vw);
  }

  .logo {
    @include img_r_m(147, 509, 10);
  top:auto;
  bottom:calc(10% - 25px + 2vw);
  }

  .b-logo {
    @include img_r_m(68, 96, 54);
  }

  .title {
    @include img_l_m(161, 186, 69);
    top: calc(48% + 100vw * (186 - 302) / 375);
    font-size: sizem(39);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(1.56);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;justify-content: flex-end;
  }

  .subtitle{
  @include img_r_m(250, 280, 146);
    top: calc(48% + 100vw * (280 - 302) / 375);
    font-size: sizem(25);
    transform: scale(0.756);
    transform-origin: 100% 100%;
    display: block;

  }
  
  
  .subtitle1,
  .subtitle2 {
    width: 100%;
    font-weight:300;
    text-align: right;
    justify-content: flex-end;


    span {
      display: block;
      font-size:0.486em;
      line-height: 1.5;
      letter-spacing:0.09em;
      text-align: right;
      color: #ffffff;
      white-space: nowrap;
      margin-bottom:1em;
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
