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
          <img
            v-lazy="require('./s1/cloud1.png')"
            alt=""
            class="cloud2-1 absolute"
          >
          <img
            v-lazy="require('./s1/cloud2.png')"
            alt=""
            class="cloud2-2 absolute"
          >
          <img
            src="./s1/line.png"
            alt=""
            class="line1 absolute"
          >
          <img
            src="./s1/line.png"
            alt=""
            class="line2 absolute"
          >
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

.cloud2-1 {
  width: size(495);
  top: size(0);
  right: size(-220);
  left: auto !important;
  animation: cloud 35s linear infinite alternate-reverse;
}

.cloud2-2 {
  width: size(394);
  top: size(150);
  right: auto !important;
  left: size(150);
  animation: cloud 35s linear infinite alternate-reverse;
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
    opacity: 0.8;
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
    // overflow: hidden;
    background: #eee4cb;
    //margin-top: 60px;
  }

  .bg-img {
    width: auto;
    top: 0;
    height: size-m(929);
    margin-left: size-m(-550);
  }

  // s1
  .doll1 {
    width: size-m(189);
    top: size-m(405);
    left: 0;
  }

  .doll2 {
    width: size-m(264);
    top: size-m(483);
    right: 0;
  }

  .cloud1-2 {
    // width: size-m(394);
    // top: size-m(767);
    // left: size-m(300);
    // animation: cloud 25s linear infinite alternate-reverse;
    display: none;
  }

  .logo {
    width: size-m(228);
    top: size-m(145);
    left: size-m(61);
  }

  .light {
    // width: size-m(750);
    // top: size-m(536);
    // left: size-m(254);
    // animation: light 2s alternate infinite;
    display: none;
  }

  .s2 {
    // height: auto;
    // min-height: size-m(0);
    // overflow: auto;
    top: size-m(-200);
    margin-bottom: size-m(-205);
    background: transparent;
    z-index: 13;
    position: relative;
  }

  // s2
  .ball1 {
    width: size-m(164);
    height: auto;
    top: size-m(0);
    right: auto !important;
    left: size-m(930) !important;
    animation: ball 12s alternate infinite;
  }

  .ball2 {
    width: size-m(84);
    top: size-m(130);
    right: auto !important;
    left: size-m(750) !important;
    animation: ball 12s alternate infinite;
  }

  .line1 {
    width: size-m(78);
    top: size-m(150);
    right: auto !important;
    left: size-m(980) !important;
    transform-origin: bottom;
    animation: line1 12s alternate infinite;
  }

  .line2 {
    width: size-m(42);
    top: size-m(240);
    right: auto !important;
    left: size-m(778) !important;
    transform-origin: bottom;
    animation: line2 12s alternate infinite;
  }

  .cloud2-1 {
    // width: size-m(495);
    // top: size-m(0);
    // right: size-m(-220);
    // left: auto !important;
    // animation: cloud 35s linear infinite alternate-reverse;
    display: none;
  }

  .cloud2-2 {
    // width: size-m(394);
    // top: size-m(150);
    // right: auto !important;
    // left: size-m(150);
    // animation: cloud 35s linear infinite alternate-reverse;
    display: none;
  }

  .location {
    width: size-m(1500);
    height: auto;
    z-index: 2;
    left: 0;
    top: size-m(-375 * 2.49 + 200);
    animation: location 1s ease-in-out alternate infinite;
    // transform-origin: 50% 100%;
  }
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
