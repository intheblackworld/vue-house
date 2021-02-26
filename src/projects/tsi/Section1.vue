<template>
  <div class="section1">
    <!--  <img src="./s1/bg.png" :alt="`${info.caseName}_mountain`" class="mountain" v-if="isPC" data-aos="fade" data-aos-delay="200">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_mountain`" class="mountain" v-if="isMobile" data-aos="fade" data-aos-delay="200">  -->
    <img src="./s1/c1.png" :alt="`${info.caseName}_cloud`" class="cloud c1">
    <img src="./s1/c2.png" :alt="`${info.caseName}_cloud`" class="cloud c2">
    <img src="./s1/c4.png" :alt="`${info.caseName}_cloud`" class="cloud c4">
    <img src="./s1/c3.png" :alt="`${info.caseName}_cloud`" class="cloud c3">

    <transition-group name="slide-fade" mode="out-in">
      <div v-if="blockIndex === 1" :key="1">
        <img src="./s1/top.png" :alt="`${info.caseName}_top`" class="top" v-if="isPC" data-aos="fade" data-aos-delay="200">
        <img src="./s1/top_m.png" :alt="`${info.caseName}_top`" class="top" v-if="isMobile" data-aos="fade" data-aos-delay="200">
        <img src="./s1/t.png" :alt="`${info.caseName}_t`" class="t" v-if="isPC" data-aos="fade" data-aos-delay="400">
        <img src="./s1/t_m.png" :alt="`${info.caseName}_t`" class="t" v-if="isMobile" data-aos="fade" data-aos-delay="600">
        <img src="./s1/o.png" :alt="`${info.caseName}_o`" class="o">
      </div>
      <div v-if="blockIndex === 0" :key="0">
        <img src="./s1/top_logo.png" :alt="`${info.caseName}_top`" class="top-logo" v-if="isPC" data-aos="fade" data-aos-delay="200">
        <img src="./s1/top_title_1.png" :alt="`${info.caseName}_top`" class="top-title1" v-if="isPC" data-aos="fade" data-aos-delay="400">
        <img src="./s1/top_title_2.png" :alt="`${info.caseName}_top`" class="top-title2" v-if="isPC" data-aos="fade" data-aos-delay="600">
        <img src="./s1/top_logo_m.png" :alt="`${info.caseName}_top`" class="top-logo" v-if="isMobile" data-aos="fade" data-aos-delay="200">
        <img src="./s1/top_title_1_m.png" :alt="`${info.caseName}_top`" class="top-title1" v-if="isMobile" data-aos="fade" data-aos-delay="400">
        <img src="./s1/top_title_2_m.png" :alt="`${info.caseName}_top`" class="top-title2" v-if="isMobile" data-aos="fade" data-aos-delay="600">
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background: url('./s1/bg.png') fixed;
  background-size: auto;
  margin: 0 0 size(400) 0;
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
  opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.mountain {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -28.125vw;
}
.top {
  position: absolute;
  width: size(1103);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(50% + 100vw * (203 - 540) / 1920);
}
.cloud {
  position: absolute;
  animation: cloud 5s ease-in-out alternate infinite;
}
.c1 {
  left: -0.5vw;
  top: calc(50% + 13.5vw);
  width: size(262);
  transform: translateX(-10%);
}
.c2 {
  left: -6.7vw;
  top: calc(50% + 13.5vw);
  width: size(918);
  transform: translateX(-8%);
}
.c3 {
  right: 33vw;
  top: calc(50% + 13.7vw);
  width: size(401);
  transform: translateX(30%);
  animation-direction: alternate-reverse;
}
.c4 {
  right: -0.5vw;
  top: calc(50% + 11.5vw);
  width: size(1117);
  transform: translateX(5%);
  animation-direction: alternate-reverse;
}

.t {
  position: absolute;
  width: size(1103);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(50% + 100vw * (1010 - 540) / 1920);
}
.o {
  position: absolute;
  width: 8.6vw;
  right: 28vw;
  margin: 0 auto;
  top: calc(50% + 100vw * (1108 - 540) / 1920);
  animation: o 2s alternate infinite;
  transform: rotate(10deg) scale(1.2);
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
@keyframes o {
  50% {
    transform: translateX(0);
  }
  to {
    transform: translateX(0);
  }
}

.top-logo {
  @include img_c_pc(954, 165);
  top: calc(50% - 18vw);
}

.top-title1 {
  @include img_c_pc(954, 527);
  top: calc(50%);
}

.top-title2 {
  @include img_c_pc(766, 675);
  top: calc(50% + 7.5vw);
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateY(50px) !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  // margin-top: 0
  // transform: translateY(0px) !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    margin: 0 0 50vw 0;
  }

  .mountain {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: auto;
    top: sizem(227);
  }
  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (70 - 302) / 375);
  }
  .c1 {
    left: 0;
    top: calc(50% - 77vw);
    width: sizem(97);
    transform: translateX(-10%);
  }
  .c2 {
    left: -6.7vw;
    top: calc(50% + 48vw);
    width: sizem(262);
    transform: translateX(-8%);
  }
  .c3 {
    right: 55vw;
    top: calc(50% + 72vw);
    width: sizem(132);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
  }
  .c4 {
    right: -1.5vw;
    top: calc(50% + 60vw);
    width: sizem(369);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
  }

  .t {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (650 - 302) / 375);
  }
  .o {
    width: sizem(40);
    right: 19.7vw;
    top: calc(50% + 100vw * (676 - 302) / 375);
  }

  .top-logo {
    @include img_c_m(315, 135);
  }

  .top-title1 {
    @include img_c_m(315, 274);
  }

  .top-title2 {
    @include img_c_m(312, 409);
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
      blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      this.blockIndex = 1
    }, 6000)
  },

  created() {},

  computed: {},
}
</script>
