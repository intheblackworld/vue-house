<template>
  <div class="section1">
    <div class="bubble-bg" v-if="isPC">
      <img src="./s1/bg_style_2.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
      <img src="./s1/bg_style_3.png" :alt="`${info.caseName}_bubble_2`" class="bubble_2">
      <img src="./s1/bg_style_1.png" :alt="`${info.caseName}_bubble_3`" class="bubble_3">
      <img src="./s1/bg_style_4.png" :alt="`${info.caseName}_bubble_4`" class="bubble_4">
    </div>
    <div class="bubble-bg" v-if="isMobile">
      <img src="./mobile/m_bg_style_class_1.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
    </div>
    <div class="bling-bg" v-if="isPC">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_2`" class="bling_2">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_3`" class="bling_3">
      <img src="./s1/style_3.png" :alt="`${info.caseName}_bling_4`" class="bling_4">
      <img src="./s1/style_2.png" :alt="`${info.caseName}_bling_5`" class="bling_5">
      <img src="./s1/style_1.png" :alt="`${info.caseName}_bling_6`" class="bling_6">
    </div>
    <div class="bling-bg" v-if="isMobile">
      <img src="./mobile/m_style_class_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
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
      <img src="./s1/btn_class.png" :alt="`${info.caseName}_btn`" class="btn" v-if="isPC" v-scroll-to="{ element: `#contact` }">
      <img src="./mobile/m_btn_class.png" :alt="`${info.caseName}_btn`" class="btn" v-if="isMobile" v-scroll-to="{ element: `#contact` }">
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
//   animation: flow1 3s 0s ease-in-out infinite alternate-reverse;
//     transform: skewY(2deg);
// }

// .f2 {
//   @include img_l_pc(479, 656, 0);
//   top:calc(50% + 100vw * (656 - 540) / 1920);
//   transform-origin:0% 90%;
//   animation: flow1 3s ease-in-out infinite alternate-reverse;
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
      animation: an ($randomNum + s) 1s infinite alternate-reverse;
    }
  }
}

.bling-bg {
  @for $i from 1 through 10 {
    $randomNum: random(3) + 1;
    > img:nth-child(#{$i}) {
      transform: translateY((random(10) - 30) + px);
      animation: an ($randomNum + s) 1s infinite alternate-reverse;
    }
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

.bubble-bg {
  @for $i from 1 through 10 {
    $randomNum: random(3) + 4;
    > img:nth-child(#{$i}) {
      opacity: 0;
      transform: translateY((random(20) - 40) + px);
      animation: an2 ($randomNum + s) 1s infinite alternate-reverse;
    }
  }
}

@keyframes an2 {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ----- bubble
.bubble_1 {
  @include img_l_pc(433, 134, -100);
  // z-index: 6;
}

.bubble_2 {
  @include img_l_pc(372, 436, 410);
}

.bubble_3 {
  @include img_r_pc(563, -70, 0);
}

.bubble_4 {
  @include img_r_pc(324, 819, 651);
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
    min-height: sizem(604);
    max-height: sizem(850);
    height: sizem(604);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    @include img_c_m(292, 45);
    // top: calc(70% + 100vw * (707 - 1080 * .7) / 1920);
    // filter: drop-shadow(0 0 .5em #d67f76);
  }

  .title1 {
    @include img_l_m(63, 175, 47);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(82, 170, 170);
    font-size: sizem(29);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title3 {
    @include img_r_m(105, 175, 49.4);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .area {
    @include img_c_m(292, 211);
    .area-title {
      font-size: sizem(30);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.17;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    .hr {
      width: sizem(2.3);
      background-color: #fff;
      height: sizem(34);
    }
  }

  .btn {
    @include img_c_m(302, 267);
    cursor: pointer;
    &:hover {
    }
  }

  .bling-bg {
    @for $i from 1 through 10 {
      $randomNum: random(3) + 1;
      > img:nth-child(#{$i}) {
        transform: translateY((random(8) - 20) + px);
        animation: an ($randomNum + s) 1s infinite alternate-reverse;
      }
    }
  }
  // ----- bling mobile
  .bling_1 {
    @include img_c_m(335, 260);
  }

  .bubble-bg {
    @for $i from 1 through 10 {
      $randomNum: random(3) + 2;
      > img:nth-child(#{$i}) {
        opacity: 0;
        transform: translateY((random(8) - 20) + px);
        animation: an2 ($randomNum + s) 1s infinite alternate-reverse;
      }
    }
  }
  // ----- bubble mobile
  .bubble_1 {
    @include img_c_m(375, 0);
  }

  .child-bg {
    @for $i from 1 through 10 {
      $randomNum: random(3) + 1;
      > img:nth-child(#{$i}) {
        transform: translateY((random(4) - 20) + px);
        animation: an ($randomNum + s) 1s infinite alternate-reverse;
      }
    }
  }
  // ----- child mobile

  .child_1 {
    @include img_l_m(158, 384, 130);
    z-index: 6;
  }

  .child_2 {
    @include img_r_m(57, 372, 50);
  }

  .child_3 {
    @include img_l_m(73, 491, 44);
  }

  .child_4 {
    @include img_r_m(70, 478, 44);
  }

  .child_5 {
    @include img_l_m(64, 383, 72);
  }

  .child_6 {
    @include img_l_m(50, 502, 193);
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
