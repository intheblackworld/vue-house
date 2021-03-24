<template>
  <div class="section1">
    <img src="./s1/c1.png" :alt="`${info.caseName}_cloud`" class="cloud c1">
    <img src="./s1/c2.png" :alt="`${info.caseName}_cloud`" class="cloud c2">
    <div class="c5">
    <img src="./s1/c2.png" :alt="`${info.caseName}_cloud`" class="cloud"></div>
    <img src="./s1/c4.png" :alt="`${info.caseName}_cloud`" class="cloud c4">
    <img src="./s1/c3.png" :alt="`${info.caseName}_cloud`" class="cloud c3">
    <img src="./s1/01_bg_light.png" :alt="`${info.caseName}_img`" class="bg-img light">
    <div>
      <img src="./s1/top_logo.png" :alt="`${info.caseName}_top`" class="top-logo" v-if="isPC" data-aos="fade-top" data-aos-delay="200">
        <h3 class="title1" v-if="isPC" data-aos="fade-top" data-aos-delay="400">
          洲子洋<span>24</span>層雙塔地標
        </h3>
        <h3 class="title2" v-if="isPC" data-aos="fade-top" data-aos-delay="400">
          千坪日式莊園｜捷運<span>2</span>-<span>3</span>房
        </h3>
        <img src="./s1/top_logo_m.png" :alt="`${info.caseName}_top`" class="top-logo" v-if="isMobile" data-aos="fade-top" data-aos-delay="200">
        <img src="./s1/top_title_1_m.png" :alt="`${info.caseName}_top`" class="top-title1" v-if="isMobile" data-aos="fade-top" data-aos-delay="400">
        <img src="./s1/top_title_2_m.png" :alt="`${info.caseName}_top`" class="top-title2" v-if="isMobile" data-aos="fade-top" data-aos-delay="600">
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
  //overflow: hidden;
  position: relative;
  background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  // margin: 0 0 size(400) 0;
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

  &:nth-child(1) {
    position: relative;
  }
}

.light {
  opacity: 0;
  animation: light 2s ease-in-out alternate infinite;
}

.top-logo {
  @include img_c_pc(623, 165);
  top: calc(50% + 100vw * (298 - 540) / 1920);
}

@keyframes light {
  to {
    opacity: 1;
  }
}

.title1 {
  @include img_c_pc(583, 505);
  top: calc(50% + 100vw * (505 - 540) / 1920);
  font-size: size(61.6);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff000;
  white-space: nowrap;
  span {
    font-size: size(70.8);
  }
}

.title2 {
  @include img_c_pc(604, 586);
  top: calc(50% + 100vw * (586 - 540) / 1920);
  font-size: size(51.5);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  span {
    font-size: size(56);
  }
}

.cloud {
  position: absolute;
  animation: cloud 5s ease-in-out alternate infinite;
}

.c1 {
  left: -0.5vw;
  top: calc(50% + 100vw * (658 - 540) / 1920);
  width: size(262);
  transform: translateX(-10%);
  z-index: 2;
}
.c2 {
  left: -6.7vw;
  top: calc(50% + 100vw * (865 - 540) / 1920);
  width: size(918);
  transform: translateX(-8%);
  z-index: 2;
}
.c3 {
  right: 33vw;
  top: calc(50% + 100vw * (885 - 540) / 1920);
  width: size(401);
  transform: translateX(30%);
  animation-direction: alternate-reverse;
  z-index: 2;
}
.c4 {
  right: -0.5vw;
  top: calc(50% + 100vw * (803 - 540) / 1920);
  width: size(1117);
  transform: translateX(5%);
  animation-direction: alternate-reverse;
  z-index: 2;
}
.c5 {
  position: absolute;
  right: size(-500);
  top: calc(50% + 100vw * (482 - 540) / 1920);
  width: size(918);left: auto;
  transform:scaleX(-1);
  img{width: 100%;
  top: 0;left: 0;
  transform: translateX(5%);
  z-index: 2;
  animation-direction: alternate;}
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
    margin: 0 0 -12vw 0;
     background-size: auto size-m(750);
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
