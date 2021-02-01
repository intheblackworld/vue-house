<template>
  <div class="section2">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s2/漂浮物件_分層/2_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
      <img src="./s1/mo1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
    <img src="./s2/2_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <h1 class="title">
      桃園新都心
    </h1>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  // overflow: hidden;
  position: relative;
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

.title {
  @include img_r_pc(444, 727, 173);
  text-shadow: 3px 3px 5px rgba(4, 0, 0, 0.75);
  // font-family: DFHeiStd-W3;
  font-size: size(82.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8.45);
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(333, 687, -60);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .video {
    width: sizem(300);
    height: sizem(530);
    top: sizem(34);
    right: sizem(37);
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    min-height: sizem(667);
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

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
