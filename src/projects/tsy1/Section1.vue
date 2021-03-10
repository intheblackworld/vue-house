<template>
  <div class="section1">
    <img src="./s1/01_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <!-- <div class="bubble-bg" v-if="isPC">
      <img src="./s1/bg_style_2.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
      <img src="./s1/bg_style_3.png" :alt="`${info.caseName}_bubble_2`" class="bubble_2">
      <img src="./s1/bg_style_1.png" :alt="`${info.caseName}_bubble_3`" class="bubble_3">
      <img src="./s1/bg_style_4.png" :alt="`${info.caseName}_bubble_4`" class="bubble_4">
    </div>
    <div class="bubble-bg" v-if="isMobile">
      <img src="./mobile/m_bg_style_class_1.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
    </div> -->
    <div class="bling-bg" v-if="isPC">
      <img src="./s1/01_style_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
      <img src="./s1/01_style_2.png" :alt="`${info.caseName}_bling_2`" class="bling_2">
      <img src="./s1/01_style_3.png" :alt="`${info.caseName}_bling_3`" class="bling_3">
      <img src="./s1/01_style_4.png" :alt="`${info.caseName}_bling_4`" class="bling_4">
      <img src="./s1/01_style_5.png" :alt="`${info.caseName}_bling_5`" class="bling_5">
      <img src="./s1/01_style_6.png" :alt="`${info.caseName}_bling_6`" class="bling_6">
    </div>
    <!-- <div class="bling-bg" v-if="isMobile">
      <img src="./mobile/m_style_class_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
    </div> -->
    <div class="child-bg">
      <img src="./s1/child_1.png" :alt="`${info.caseName}_child_1`" class="child_1">
      <img src="./s1/child_2.png" :alt="`${info.caseName}_child_2`" class="child_2">
      <img src="./s1/child_3.png" :alt="`${info.caseName}_child_3`" class="child_3">
      <img src="./s1/child_4.png" :alt="`${info.caseName}_child_4`" class="child_4">
      <img src="./s1/child_5.png" :alt="`${info.caseName}_child_5`" class="child_5">
      <img src="./s1/01_balloon_1.png" :alt="`${info.caseName}_ballon`" class="balloon_1">
      <img src="./s1/01_balloon_2.png" :alt="`${info.caseName}_ballon`" class="balloon_2">
    </div>
    <img src="./s1/logo_noleaf.png" :alt="`${info.caseName}_logo`" class="logo" v-if="isPC">
    <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" v-if="isMobile">
    <img src="./s1/01_text_1.png" :alt="`${info.caseName}_title`" class="title_1">
    <img src="./s1/01_text_2.png" :alt="`${info.caseName}_title`" class="title_2">
    <img src="./s1/01_btn.png" :alt="`${info.caseName}_btn`" class="btn" v-scroll-to="{element: '#contact'}">
    <img src="./s1/leaf.png" :alt="`${info.caseName}_float`" data-aos="float1" data-aos-delay="0" data-aos-duration="1100" class="float1 absolute" v-if="isPC">
    <img src="./s1/leaf_2.png" :alt="`${info.caseName}_float`" data-aos="float2" data-aos-delay="0" data-aos-duration="1000" class="float2 absolute" v-if="isPC">
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
  @include img_l_pc(651, 148, 266);
  // top: calc(70% + 100vw * (707 - 1080 * .7) / 1920);
  // filter: drop-shadow(0 0 .5em #d67f76);
}

.title_1 {
  @include img_l_pc(681, 444, 251);
}

.title_2 {
  @include img_l_pc(533, 539, 321);
}

.btn {
  @include img_l_pc(301, 688, 430);
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
  @include img_r_pc(486, 328, 346);
  z-index: 6;
}

.child_2 {
  @include img_r_pc(190, 554, 84);
  top: auto;
  bottom: size(11);
}

.child_3 {
  @include img_r_pc(205, 549, 805);
  top: auto;
  bottom: size(11);
}

.child_4 {
  @include img_r_pc(198, 663, 386);
  top: auto;
  bottom: 0;
}

.child_5 {
  @include img_r_pc(197, 608, 229);
}

.balloon_1 {
  @include img_r_pc(106, 129, 804);
}

.balloon_2 {
  @include img_r_pc(115, 390, 155);
}

// ------------ bling

.bling_1 {
  @include img_r_pc(28, 393, 313);
}

.bling_2 {
  @include img_l_pc(27, 741, 389);
}

.bling_3 {
  @include img_l_pc(27, 919, 764);
}

.bling_4 {
  // @include img_l_pc(43, 885, 128);
  display: none;
}

.bling_5 {
  @include img_r_pc(66, 196, 774);
}

.bling_6 {
  @include img_l_pc(66, 943, 636);
  top: auto;
  bottom: 0;
}

.float1 {
  @include img_l_pc(81, 257, 821);
  opacity: 0;
}

.float2 {
  @include img_l_pc(109, 871, 640);
  opacity: 0;
  z-index: 3;
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
    background-image: url('./bg_m.png');
    background-size: 100% 100%;
    background-attachment: fixed;
    // background-size: cover;
    // background-attachment: scroll;
  }
  .logo {
    @include img_c_m(292, 45);
    // top: calc(70% + 100vw * (707 - 1080 * .7) / 1920);
    // filter: drop-shadow(0 0 .5em #d67f76);
  }

  .title_1 {
    @include img_c_m(335, 204);
  }

  .title_2 {
    @include img_c_m(258, 251);
  }

  .btn {
    @include img_c_m(138, 267);
    top: auto;
    bottom: sizem(8);
    cursor: pointer;
    z-index: 2;
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
    @include img_c_m(335, 180);
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
    @include img_l_m(150, 309, 66);
    z-index: 1;
  }

  .child_2 {
    @include img_r_m(76, 451, 29);
  }

  .child_3 {
    @include img_l_m(73, 483, 37);
  }

  .child_4 {
    @include img_r_m(80, 383, 104);
  }

  .child_5 {
    @include img_r_m(71, 336, 37);
  }

  .child_6 {
    display: none
  }

  .balloon_1 {
    @include img_l_m(49, 317, 25);
  }

  .balloon_2 {
    @include img_r_m(36, 313, 20);
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
