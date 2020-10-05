<template>
  <div>
    <div class="section1">
      <img src="./s1/bg2.jpg" alt="" class="bg-img" v-if="!isMobile">
      <img src="./mo/1/bg2.jpg" alt="" class="bg-img" v-if="isMobile">
      <img src="./s1/MyVideo.gif" alt="" class="bg-img light" v-if="!isMobile">
      <img src="./mo/1/MyVideo_2.gif" alt="" class="bg-img light" v-if="isMobile">      
      <img src="./s1/l_t.png" alt="" class="img2 absolute" data-aos="fade-down" data-aos-delay="2400" v-if="!isMobile">
      <img src="./s1/r.png" alt="" class="r absolute" data-aos="fade-left" data-aos-delay="2800" v-if="!isMobile">
      <div class="txt absolute">
        <img src="./s1/logo.png" alt="" class="logo" data-aos="fade-down" data-aos-delay="2600">
        <img src="./s1/t1.png" alt="" class="t1" data-aos="fade-down" data-aos-delay="2800">
        <img src="./s1/t2.png" alt="" class="t2" data-aos="fade-down" data-aos-delay="3000">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(850);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
    height: auto;
  }
}
.light {
  mix-blend-mode: screen;
  // opacity: .1;
  // animation: light 3s linear 0s infinite alternate-reverse;
}

.img1 {
  width: size(405);
  left: 0;
  bottom: 0;
}

.img2 {
  width: size(500);
  left: 0;
  top: 0;
}

.txt{height: 100%;text-align: center;
  width: size(752);
  right: 41%;
  top: calc(50% - 15vw);}
.logo {
  width: size(543);
 // height: calc(100% * 289 / 1080);
}

.r {
  height: 100%;
  min-height: size(850);
  right: size(83);
  top: size(0);
}

.t1 {
  width: size(752);
  left: size(293);
  top: size(507);
}

.t2 {
  width: size(751);
  left: size(294);
  top: size(820);
}


// @keyframes light {
//   to {
//     opacity: .3;
//   }
// }

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
  height: calc(100vh - 63px);
  min-height: sizem(604);
  max-height: sizem(812);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      top: 0;
      bottom: auto;
      left: auto;
      right: 0;
      height:100%;
    }
  }

.txt{height: auto;text-align: center;
  width:100%;
  right: 0%;
  top: calc(50% - 30vw);}
  .logo {
    width: sizem(310);
  }

  .t1 {
    width: sizem(310);
  }

  .t2 {
    width: sizem(310);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
