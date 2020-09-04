<template>
  <div>
    <div class="section1">
    <div class="ovh absolute">
      <div 
        class="flower1 absolute"
        data-aos="fade-left"
        data-aos-delay="200">
        <img
          src="./s2/f1.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower2 absolute"
          data-aos="fade-right"
          data-aos-delay="400">
        <img
          src="./s2/3.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower3 absolute"
          data-aos="fade-up"
          data-aos-delay="200">
        <img
          src="./s2/4.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower5 absolute"
          data-aos="fade-up"
          data-aos-delay="400">
        <img
          src="./s2/4.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower4 absolute"
          data-aos="fade-up"
          data-aos-delay="300">
        <img
          src="./s2/2.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower7 absolute"
          data-aos="fade-up" v-if="!isMobile"
          data-aos-delay="600">
        <img
          src="./s2/f1.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower8 absolute"
          data-aos="fade-up" v-if="!isMobile"
          data-aos-delay="700">
        <img
          src="./s2/3.png"
          alt="flower"
        >
      </div>
    </div>
      <div 
          class="flower6 absolute"
          data-aos="fade-up"
          data-aos-delay="500">
        <img
          src="./s2/f1.png"
          alt="flower"
        >
      </div>
      <div 
          class="flower9 absolute"
          data-aos="fade-up"
          data-aos-delay="800">
        <img
          src="./s2/3.png"
          alt="flower"
        >
      </div>

      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
      >
      <img
        src="./s1/t.png"
        alt=""
        class="title absolute"
      >
      <img
        src="./s1/t2.png"
        alt=""
        class="subtitle absolute"
      >

      <img src="./s1/button.png" alt="" class="btn absolute" v-scroll-to="{ element: `#contact` }">

      <img
        src="./s1/butterfly1.gif"
        alt=""
        class="fly1 absolute"
        data-aos="fade-up-left"
        data-aos-delay="1000"
      >
      <img
        src="./s1/butterfly2.gif"
        alt=""
        class="fly2 absolute"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
      <!-- <img src="./s1/butterfly2.png" alt="" class="fly2 absolute">
      <img src="./s1/butterfly3.png" alt="" class="fly3 absolute">
      <img src="./s1/butterfly4.png" alt="" class="fly4 absolute"> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width:100%;
  height: 100vh;
  min-height:size(900);
  max-height:size(1080);
  background-color: #e95314;
  position: relative;
  z-index: 2;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(1014);
  top: calc(50% - 20vw);
  right: size(443);
}

.title {
  width: size(646);
  top: calc(50% - 3vw);
  right: size(627);
}

.subtitle {
  width: size(578);
  top: calc(50% + 2vw);
  right: size(661);
}
.ovh{position: absolute;top: 0;left: 0;width: 100%;height: 100%;
  overflow: hidden;}

.fly1 {
  width: size(200);
  top: calc(50% - 10vw);
  right: size(372);
}

.fly2 {
  width: size(245);
  bottom: size(105);
  right: size(1245);
}

.btn {
  width: size(402);
  top: calc(50% + 7vw);
  right: size(749);
  cursor: pointer;
}

.flower1 {
  width: size(300);
  top: size(-35);
  right: size(-40);
  img{width: 100%;transform: rotate(210deg);}
}
.flower2 {
  width: size(330);
  top: size(-60);
  left: size(-70);
  img{width: 100%;transform:rotate(100deg)scaleX(-1);}
}
.flower3 {
  width: size(400);
  bottom: size(-470);
  left: size(250);
  img{width: 100%;transform:rotate(-26deg)scaleX(-1);}
}
.flower4 {
    width: 17vw;
    bottom: -22vw;
    left: 42vw;
  img{width: 100%;transform:rotate(8deg);}
}
.flower5 {
  width: size(400);
  bottom: size(-470);left: 65.125vw;
  img{width: 100%;transform:rotate(34deg);}
}

.flower6 {
    width: 21vw;
    bottom: -7vw;
    left: -7vw;
  img{width: 100%;transform:rotate(34deg);}
}

.flower7 {
    width: 22vw;
    bottom: -7vw;
    left: 24.5vw;
  img{width: 100%;}
}

.flower8 {
    width: 22vw;
    bottom: -8vw;
    left: 56vw;
  img{width: 100%;}
}

.flower9 {
  width: 22vw;
    bottom: -5vw;
    left: 87vw;
  img{width: 100%;transform:rotate(-23deg);}
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
    height: calc(100vh - 63px);
    min-height:sizem(600);
    max-height:sizem(820);
  }

  .bg-animate {
    display: none;
  }

  .logo {
    width: sizem(310);
    top:calc(50% - 40vw);
    left: sizem(33);
  }

  .img-t {
    width: 100vw;
    top: 0;
    left: 0;
  }

  .img-b {
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .title {
    width: sizem(310);
    top:calc(50% - 13vw);
    left: sizem(33);
  }
  .subtitle  {
    width: sizem(310);
    top:calc(50% - 0vw);
    left: sizem(33);
  }
  .btn  {
    width: sizem(310);
    top:calc(50% + 19vw);
    left: sizem(33);
  }

  .fly1 {
    display: none;
  }
.fly2 {
  width: sizem(90);
  bottom: sizem(50);
  right: sizem(140);
}
.flower1 {
  width: sizem(200);
  top: sizem(-35);
  right: sizem(-40);z-index: 2;
}
.flower2 {
  width: sizem(200);
  top: sizem(-60);
  left: sizem(-70);
  img{width: 100%;transform:rotate(0deg)scaleX(-1);z-index: 2;}
}
.flower3 {
  width: sizem(180);
  top: sizem(-230);
  bottom: auto;
  left: sizem(120);z-index: 1;
  img{width: 100%;transform:rotate(180deg)scaleX(-1);}
}
.flower4 {
    width: 42vw;
    bottom: -53vw;
    left: 40vw;
  img{width: 100%;transform:rotate(8deg);}
}
.flower5 {
    width: 46vw;
    bottom: -52vw;
    left: 3vw;
  img{width: 100%;transform:rotate(34deg);}
}

.flower6 {
    width: 46vw;
    bottom: -7vw;
    left: -17vw;
  img{width: 100%;transform:rotate(34deg);}
}
.flower9 {
    width: 55vw;
    bottom: -9vw;
    right: -24vw;left: auto;
  img{width: 100%;transform:rotate(-40deg);}
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
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
