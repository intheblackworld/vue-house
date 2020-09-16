<template>
  <div>
    <div class="section1">
      <transition-group name="swipe-fade" mode="out-in">
        <img :src="slide" v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide" :class="`bg-img absolute`" />
      </transition-group>
      <img src="./s1/bg2.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="200">
      <img src="./s1/logo.png" alt="" class="logo-img absolute" data-aos="fade-down" data-aos-delay="400">
      <img src="./s1/txt.png" alt="" class="title-img absolute" data-aos="fade-down" data-aos-delay="800">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 3s ease;
}

.swipe-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}

.logo-img {
  width: size(724);
  top: size(103);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title-img {
  width: size(725);
  top: size(286);
  left: 0;
  right: 0;
  margin: 0 auto;
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
    min-height: auto;
    height: calc(100vh - 63px);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .logo-img {
    width: sizem(310);
    top: sizem(90);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .title-img {
    width: sizem(310);
    top: sizem(170);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      icPC,
      isMobile,
      isTablet,
      slideIndex: 0,
      slideList: isMobile
        ? [require('./mo/bg1.jpg'), require('./mo/bg2.jpg')]
        : [require('./s1/bg.jpg'), require('./s1/bg2.jpg')],
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      if (this.slideIndex === 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex = 1
      }
    }, 3000)
  },

  mounted() {},

  computed: {},
}
</script>
