<template>
  <div class="relative">
    <div class="s1">
      <img
        v-lazy="require('./s1/1.jpg')"
        alt="bg"
        class="bg-img"
      >
      <img
        v-lazy="require('./s1/2.jpg')"
        alt="bg"
        class="bg-img light"
      >
      <img
        v-lazy="require('./s1/o.png')"
        alt="bg"
        class="bg-img light"
      >
      <img
        v-lazy="require('./s1/3.png')"
        alt="bg"
        class="bg-img a"
        data-aos="fade-up"
        data-aos-delay="600"
      >
      <div class="bg-img cloud">
        <img
          v-lazy="require('./s1/cloud.png')"
          alt="bg"
        >
        <img
          v-lazy="require('./s1/cloud.png')"
          alt="bg"
        >
      </div>
      <img
        v-lazy="require('./s1/cloud2.png')"
        alt="bg"
        class="bg-img"
      >
      <img
        v-lazy="require('./s1/g.png')"
        alt="bg"
        class="bg-img g"
      >
      <img
        v-lazy="require('./s1/b.png')"
        alt="bg"
        class="bg-img b"
      >
      <img
        v-lazy="require('./s1/logo.png')"
        alt=""
        class="bg-img logo"
      >
      <!--<img
        src="./s1/area1_bg.png"
        alt=""
        class="bg-img city"
      >
      <img
        src="./s1/area1_cover.png"
        alt=""
        class="bg-img cover"
      >
      <img
        src="./s1/area1_title.png"
        alt=""
        class="title absolute"
        data-aos="fade"
        data-aos-delay="400"
      >
      <img
        src="./s1/area1_loocation.png"
        alt=""
        class="location absolute"
        data-aos="fade"
        data-aos-delay="600"
      > -->
      <!-- <img src="./s1/menu_logo.png" alt="" class="menu"> -->
    </div>
    <div class="s2">
      <Map :bgSrc="require('./s1/map.jpg')">
        <div slot="main">
          <img
            src="./s1/l1.png"
            alt="bg"
            class="bg-img light2"
          >
          <img
            src="./s1/l2.png"
            alt="bg"
            class="bg-img light2 l2"
          >
          <img
            src="./s1/area1_loocation.png"
            alt="bg"
            class="bg-img location"
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
  overflow: hidden;
  background: #eee4cb;
}
.s1 {
  position: relative;
  height: 100vh;
}
.s2 {
  position: relative;
  height: 100vh;
  min-height: size(1000);
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
  &.light {
    animation: light 2s alternate infinite;
    opacity: 1;
  }
  &.logo {
    height: size(250);
    max-height: calc(100vh - 33vw);
    width: auto;
    left: 51.5%;
    top: 20%;
    transform: translate(-50%, -35%);
    //height:auto;
  }
  &.b {
    height: auto;
    top: auto;
    bottom: 0;
    animation: xx 3s 3s ease-in-out alternate infinite;
    transform: translateX(-2%);
  }
  &.g {
    height: auto;
    animation: xx 3s ease-in-out alternate infinite;
    transform: translateX(-2%);
  }
  &.a {
    top: auto;
    bottom: 0;
    min-height: size(900);
  }
  &.cloud {
    width: 200vw;
    animation: cloud 35s linear infinite;
    img {
      width: 100vw;
      object-fit: cover;
      height: 100vh;
    }
  }
  &.map {
    width: 100%;
    height: auto;
    //animation: map 20s linear alternate infinite;left: 50%;transition: all 0.3s;
  }
  &.light2 {
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: auto;
    animation: light 1s alternate infinite;
    opacity: 1;
  }
  &.light2.l2 {
    animation-delay: 1s;
  }
  &.location {
    width: size(130);
    height: auto;
    z-index: 2;
    left: 52%;
    top: size(250);
    transform: translateX(-50%);
    animation: location 1s ease-in-out alternate infinite;
    transform-origin: 50% 100%;
  }
}
.city {
  margin-top: size(700);
}

.title {
  width: size(560);
  top: size(351);
  left: size(243);
}
@keyframes light {
  to {
    opacity: 0;
    //  transform: rotate(5deg);
  }
}

@keyframes xx {
  to {
    transform: translateX(2%);
    //  transform: rotate(5deg);
  }
}
@keyframes cloud {
  to {
    transform: translateX(-50%);
    //  transform: rotate(5deg);
  }
}
@keyframes location {
  to {
    transform: translateX(-50%) scale(1.2);
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
