<template>
  <div class="relative">
    <div class="s1 relative">
      <img
        v-lazy="require('./s1/bg_01.jpg')"
        alt="bg"
        class="bg-img"
      >
      <img
        v-lazy="require('./s1/left.png')"
        alt=""
        class="doll1 absolute"
      >
      <img
        v-lazy="require('./s1/right.png')"
        alt=""
        class="doll2 absolute"
      >
      <img
        v-lazy="require('./s1/cloud2.png')"
        alt=""
        class="cloud1-2 absolute"
      >
      <img
        v-lazy="require('./s1/logo.png')"
        alt=""
        class="logo absolute"
      >
      <img
        v-lazy="require('./s1/light.png')"
        alt="bg"
        class="absolute light"
      >
    </div>
    <div class="s2 relative">
      <Map :bgSrc="require('./s1/bg_02.jpg')">
        <div slot="main">
          <img src="./s1/line.png" alt="" class="line1 absolute">
          <img src="./s1/line.png" alt="" class="line2 absolute">
          <img
            src="./s1/ball1.png"
            alt="map"
            class="ball1 absolute"
          >
          <img
            src="./s1/ball2.png"
            alt="map"
            class="ball2 absolute"
          >
          <img
            src="./s1/bg.png"
            alt="map"
            class="location absolute"
          >
        </div>
      </Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  // background: #eee4cb;
}

.bg-img {
  width: 100vw;
  height: size(1192);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

// s1
.doll1 {
  width: size(466);
  top: size(398);
  left: 0;
}

.doll2 {
  width: size(714);
  top: size(474);
  right: 0;
}

.cloud1-2 {
  width: size(394);
  top: size(767);
  left: size(300);
  animation: cloud 25s linear infinite alternate-reverse;
}

.cloud2-1 {
  width: size(394);
  top: size(767);
  left: size(300);
  animation: cloud 35s linear infinite alternate-reverse;
}

.cloud2-2 {
  width: size(394);
  top: size(767);
  left: size(300);
  animation: cloud 35s linear infinite alternate-reverse;
}

.logo {
  width: size(334);
  top: size(345);
  left: size(703);
}

.light {
  width: size(750);
  top: size(536);
  left: size(254);
  animation: light 2s alternate infinite;
}

// s2
.ball1 {
  width: size(209);
  top: size(-402);
  right: size(511) !important;
  left: auto !important;
  animation: ball 12s alternate infinite;
}

.ball2 {
  width: size(108);
  top: size(-100);
  right: size(846) !important;
  left: auto !important;
  animation: ball 12s alternate infinite;
}

.line1 {
  width: size(100);
  top: size(-130);
  right: size(558) !important;
  left: auto !important;
  transform-origin: bottom;
  animation: line1 12s alternate infinite;
}

.line2 {
  width: size(54);
  top: size(40);
  right: size(867) !important;
  left: auto !important;
  transform-origin: bottom;
  animation: line2 12s alternate infinite;
}

.map {
  width: 100%;
  height: auto;
  //animation: map 20s linear alternate infinite;left: 50%;transition: all 0.3s;
}

.location {
  width: 100vw;
  height: auto;
  z-index: 2;
  left: 0;
  top: size(-1192);
  animation: location 1s ease-in-out alternate infinite;
  // transform-origin: 50% 100%;
}
@keyframes light {
  to {
    opacity: 0;
    //  transform: rotate(5deg);
  }
}

@keyframes cloud {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes ball {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes line1 {
  0% {
    transform: skew(0);
  }

  50% {
    transform: skew(-4.2deg);
  }

  100% {
    transform: skew(0);
  }
}

@keyframes line2 {
  0% {
    transform: skew(0);
  }

  50% {
    transform: skew(-6.4deg);
  }

  100% {
    transform: skew(0);
  }
}

@keyframes location {
  to {
    opacity: .8;
    //  transform: rotate(5deg);
  }
}

@keyframes map {
  0% {
    left: 0;
    transform: translateX(0);
    //  transform: rotate(5deg);
  }
  100% {
    left: 100%;
    transform: translateX(-100%);
    //  transform: rotate(5deg);
  }
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .relative {
    // height: 100vh;
    overflow: hidden;
    background: #eee4cb;
    //margin-top: 60px;
  }

  .s2 {
    height: auto;
    min-height: size-m(0);
    overflow: auto;
  }
  .bg-img {
    &:nth-child(1) {
      position: absolute;
    }
    &.light {
    }
    &.logo {
      height: size-m(200);
      max-height: calc(100vh - 140vw);
      width: auto;
      left: 51.5%;
      top: 15%;
      transform: translate(-50%, -20%);
      //height:auto;
    }
    &.b {
      width: 140vw;
      right: -18vw;
      left: auto;
      bottom: 63px;
    }
    &.g {
      width: 140vw;
      left: -18vw;
      top: auto;
      bottom: 63px;
    }
    &.a {
      min-height: size-m(800);
    }
    &.cloud {
      width: 400vw;
      img {
        width: 200vw;
      }
    }
    &.map {
      width: 100%;
    }
    &.light2 {
      width: auto;
      height: 100%;
    }
    &.location {
      width: size-m(130);
      height: auto;
      z-index: 2;
      left: size-m(660);
      top: size-m(120);
      transform: translateX(-50%);
    }
  }
  .mapbox {
    height: auto;
    position: relative;
    width: size-m(1920);
  }
  /*
  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }
  .city {
    margin-top: size-m(160);
  }
  .location {
    width: size-m(52);
    top: size-m(180);
    left: size(750);
  }

  .title {
    width: size-m(150);
    top: size(351);
    left: size-m(23);
  }*/
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section1',

  components: {
    Map,
  },
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
