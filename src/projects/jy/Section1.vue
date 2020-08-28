<template>
  <div>
    <div class="section1" v-if="isPC">
      <img src="./s1/c1.png" alt="" class="bg-img cloud1" data-aos="fade" data-aos-delay="800">
      <img src="./s1/1.png" alt="" class="bg-img" data-aos="fade-up" data-aos-delay="0">
      <img src="./s1/2.png" alt="" class="bg-img" data-aos="fade-down" data-aos-delay="800">
      <img src="./s1/3.png" alt="" class="bg-img" data-aos="fade-right" data-aos-delay="300">
      <img src="./s1/4.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="400">
      <img src="./s1/5.png" alt="" class="bg-img img5" data-aos="fade-up" data-aos-delay="500">
      <img src="./s1/6.png" alt="" class="bg-img img6" data-aos="fade-right" data-aos-delay="600">
      
      <img src="./s1/c2.png" alt="" class="bg-img cloud2" data-aos="fade" data-aos-delay="1000">
    </div>
    <div class="section1" v-if="isMobile">
      <img src="./s1/c1.png" alt="" class="bg-img cloud1" data-aos="fade" data-aos-delay="800">
      <img src="./s1/c2.png" alt="" class="bg-img cloud2" data-aos="fade" data-aos-delay="1000">
      <img src="./s1/1.png" alt="" class="bg-img img1" data-aos="fade-up" data-aos-delay="0">
      <img src="./s1/3.png" alt="" class="bg-img img3" data-aos="fade-right" data-aos-delay="300">
      <img src="./s1/4.png" alt="" class="bg-img img4" data-aos="fade" data-aos-delay="400">
      <img src="./s1/資產 514.png" alt="" class="absolute logo">
      <img src="./s1/資產 2914.png" alt="" class="img absolute">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(900);
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(2200);
  height: size(900);
  position: absolute;
  top: 0;
  left: size((1920 - 2200) / 2);
  height: auto;
  display: block;
  object-fit: cover;
    margin-top:0;
/*
  &:nth-child(1) {
    position: relative;
  }*/
}
.img5{
    animation: cloud_t 5s 0s linear infinite alternate-reverse;
  }
.img6{
    animation: cloud_t 7s -2s linear infinite alternate-reverse;
  }

.cloud1 {
  animation: cloud 5s 0s linear infinite alternate-reverse;
}

.cloud2 {
  animation: cloud 8s 1s linear infinite alternate-reverse;
}

@keyframes cloud {
  to {
    margin-left: 150px;
  }
}
@keyframes cloud_t {
  to {
    top:-150px;
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
.img1{
   width: sizem(820);
    top:auto;
    left: sizem(-100);
    bottom: 0;
  }
.img3{
   width: sizem(820);
    top:auto;
    left: sizem(-50);
    bottom: 0;
  }
.img4{
   width: sizem(820);
    top:auto;
    left: sizem(-130);
    bottom: 0;
  }
.cloud1 {
   width: sizem(1100); 
    top:auto;
    left: sizem(-600);
    bottom:sizem(100);
 // animation: cloud 5s 0s linear infinite alternate-reverse;
}

.cloud2 {
   width: sizem(1100); 
    top:auto;
    left: sizem(-500);
    bottom:sizem(-50);
 // animation: cloud 8s 1s linear infinite alternate-reverse;
}
  .logo {
    width: sizem(260);
    top: sizem(143);
    left: sizem(58);
  }

  .img {
    width: sizem(160);
    top: sizem(-120);
    left: sizem(16);
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
