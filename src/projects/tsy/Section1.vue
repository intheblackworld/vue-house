<template>
  <div class="section1">
    <div v-if="!isMobile">
      <div class="bubble-bg">

      </div>
      <div class="bling-bg">
        <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
        <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_2`" class="bling_2">
        <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_3`" class="bling_3">
        <img src="./s1/style_3.png" :alt="`${info.caseName}_bling_4`" class="bling_4">
        <img src="./s1/style_2.png" :alt="`${info.caseName}_bling_5`" class="bling_5">
        <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_6`" class="bling_6">
      </div>
      <div class="child-bg">
        <img src="./s1/child_1.png" :alt="`${info.caseName}_child_1`" class="child_1">
        <img src="./s1/child_2.png" :alt="`${info.caseName}_child_2`" class="child_2">
        <img src="./s1/child_3.png" :alt="`${info.caseName}_child_3`" class="child_3">
        <img src="./s1/child_4.png" :alt="`${info.caseName}_child_4`" class="child_4">
        <img src="./s1/child_5.png" :alt="`${info.caseName}_child_5`" class="child_5">
        <img src="./s1/child_6.png" :alt="`${info.caseName}_child_6`" class="child_6">
      </div>
      <div class="content">
        <img src="./s1/logo_noleaf.png" :alt="`${info.caseName}_logo`" class="logo">
        <div class="title1">新店站</div>
        <div class="title2">300秒</div>
        <div class="title3">房價省一半</div>
        <div class="area flex-ac flex-jb">
          <div class="area-title">23坪</div>
          <div class="hr"></div>
          <div class="area-title">30坪</div>
          <div class="hr"></div>
          <div class="area-title">57坪</div>
        </div>
        <img src="./s1/btn_class.png" :alt="`${info.caseName}_btn`" class="btn">
      </div>
    </div>
    <div v-else>
      <!-- <img src="./s1/t1.png" :alt="`${info.caseName}_t1`" class="t1" data-aos="fade" data-aos-delay="400"> -->
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
  // overflow: hidden;
  position: relative;
  background-size: auto;
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

// .f1 {
//   @include img_r_pc(1016, 76, 0);
//   top:calc(50% + 100vw * (76 - 540) / 1920);
//   transform-origin:100% 80%;
//   animation: flow1 3s 0s ease-in-out infinite alternate;
//     transform: skewY(2deg);
// }

// .f2 {
//   @include img_l_pc(479, 656, 0);
//   top:calc(50% + 100vw * (656 - 540) / 1920);
//   transform-origin:0% 90%;
//   animation: flow1 3s ease-in-out infinite alternate;
//     transform: skewY(2.5deg);
//   filter: drop-shadow(0 0 .5em #d67f76);
// }

// @keyframes flow1 {
//   to {
//     transform: skewY(0);
//   }
// }

.logo {
  @include img_r_pc(623, 149, 178);
  // top: calc(70% + 100vw * (707 - 1080 * .7) / 1920);
  // filter: drop-shadow(0 0 .5em #d67f76);
}

.title1 {
  @include img_r_pc(144, 445, 651);
  font-size: size(48.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title2 {
  @include img_r_pc(195, 425, 432);
  font-size: size(69.1);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title3 {
  @include img_r_pc(241, 445, 172);
  font-size: size(48.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.area {
  @include img_r_pc(623, 542, 178);
  .area-title {
    font-size: size(70);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .hr {
    width: size(2.3);
    background-color: #fff;
    height: size(70);
  }
}

.btn {
  @include img_r_pc(780, 701, 84);
  cursor: pointer;
  &:hover {
    
  }
}

.child-bg {
  @for $i from 1 through 10 {
    $randomNum: random(4) + 1;
    > img:nth-child(#{$i}) {
      transform: translateY((random(10) - 50) + px);
      animation: an ($randomNum + s) 1s infinite alternate;
    }
  }
}

.bling-bg {
  @for $i from 1 through 10 {
    $randomNum: random(3) + 1;
    > img:nth-child(#{$i}) {
      transform: translateY((random(10) - 30) + px);
      animation: an ($randomNum + s) 1s infinite alternate;
    }
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

// ----- child

.child_1 {
  @include img_l_pc(532, 74, 266);
  z-index: 6;
}

.child_2 {
  @include img_l_pc(229, 554, 740);
}

.child_3 {
  @include img_l_pc(225, 549, 114);
}

.child_4 {
  @include img_l_pc(200, 663, 540);
}

.child_5 {
  @include img_l_pc(179, 383, 659);
}

.child_6 {
  @include img_l_pc(199, 232, 808);
}

// ------------ bling

.bling_1 {
  @include img_l_pc(29, 259, 102);
}

.bling_2 {
  @include img_l_pc(51, 65, 1024);
}

.bling_3 {
  @include img_r_pc(35, 81, 109);
}

.bling_4 {
  @include img_l_pc(43, 885, 128);
}

.bling_5 {
  @include img_r_pc(129, 778, 784);
}

.bling_6 {
  @include img_r_pc(25, 232, 114);
  top: auto;
  bottom: 0;
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
    min-height: sizem(720);
    max-height: sizem(850);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .f1 {
    @include img_r_m(202, 0, 0);
    top: calc(26.7% - 100vw * 220 / 375);
    transform-origin: 100% 0;
    transform: skewX(2.5deg);
    filter: drop-shadow(0 0 0.5em #d67f76);
  }

  .f2 {
    @include img_l_m(146, 540, 0);
    top: calc(80% + 100vw * (525 - 667 * 0.8) / 375);
    transform-origin: left;
    animation: flow1 2.7s 2s ease-in-out infinite alternate-reverse;
    filter: drop-shadow(0 0 0em #d67f7600);
  }

  .t1 {
    @include img_l_m(79, 39, 47);
    top: calc(20% + 100vw * (29 - 667 * 0.2) / 375);
  }

  .t2 {
    @include img_r_m(250, 291, 33);
    top: calc(80% + 100vw * (240 - 667 * 0.8) / 375);
  }
  .desc {
    @include img_r_m(250, 291, 30);
    top: calc(80% + 100vw * (235 - 667 * 0.8) / 375);
    font-size: sizem(12);
    width: auto;
    text-align: right;
    line-height: 1.8;
  }

  .logo {
    @include img_r_m(145, 291, 39);
    top: calc(85% + 100vw * (548 - 667 * 0.85) / 375);
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
