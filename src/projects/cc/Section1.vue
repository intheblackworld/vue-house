<template>
  <div class="section1">
     <!-- <img src="./s1/mo.jpg" class="t0" alt="">  -->
    <div v-if="isPC">
      <div class="f">
        <img class="img6" src="./s1/6.png" alt="青青_6">
        <div class="img8"><img src="./s1/8.png" alt="青青_8"></div>
        <div class="img7"><img src="./s1/7.png" alt="青青_7"></div>
        <div class="img5"><img src="./s1/5.png" alt="青青_5"></div>
        <div class="img3"><img src="./s1/3.png" alt="青青_3"></div>
        <div class="img4"><img src="./s1/4.png" alt="青青_4"></div>
      </div>
      <img src="./s1/2.png" class="img2" alt="青青_2"
            data-aos="fade"
            data-aos-delay="100">
      <img src="./s1/1.png" class="img1" alt="青青_1">
      <img src="./s1/logo.png" class="logo" alt="青青_logo">
      
      <div class="f2">
      <div class="f">
        <img class="img6" src="./s1/6.png" alt="青青_6">
        <div class="img8"><img src="./s1/8.png" alt="青青_8"></div>
        <div class="img7"><img src="./s1/7.png" alt="青青_7"></div>
        <div class="img5"><img src="./s1/5.png" alt="青青_5"></div>
        <div class="img3"><img src="./s1/3.png" alt="青青_3"></div>
        <div class="img4"><img src="./s1/4.png" alt="青青_4"></div>
      </div>
      <img src="./s1/1.png" class="img9" alt="青青_2">
      </div>
    </div>
    <div v-if="isMobile">
      <img src="./s1/logom.png" class="logo" alt="青青_logo">
      <div class="img3"><img src="./s1/2m.png" alt="青青_2"></div>
      <div class="img1"><img src="./s1/1m.png" alt="青青_1"></div>
      <div class="img4"><img src="./s1/3m.png" alt="青青_3"></div>
      <div class="img5"><img src="./s1/4m.png" alt="青青_4"></div>
      <div class="img8"><img src="./s1/5m.png" alt="青青_5"></div>
      <div class="img2"><img src="./s1/6m.png" alt="青青_6"
            data-aos="fade"
            data-aos-delay="100"></div>
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
  position: relative;
  z-index: 3;
  margin: 0 0 0vw 0;
 // background: #000
}

.t0{
  @include img_r_pc(1920, 0,0);
opacity: 0.3;
}
.img1 {
  @include img_l_pc(473, 696, -270);
top:calc(50% + 100vw * (696 - 540) / 1920);
animation: ro 5s ease-in-out infinite alternate;
    transform-origin:0% 100%;transform:rotate(5deg);
}
.img2 {
  @include img_l_pc(574,255, 243);
top:calc(50% + 100vw * (255 - 540) / 1920);
transform: translateX(-30%);
//transform: scale(0.5);
//transform-origin: 50% 70%;
}
.f{
  @include div_l_pc(450,1350,97, 177);
top:calc(50% + 100vw * (97 - 540) / 1920);animation: ro 5s ease-in-out infinite alternate;
    transform-origin:100% 100%;transform:rotate(1deg);
    img{
    width: 100%;}
}
.f2{
  @include div_r_pc(450,1350,1000, 0);
top:calc(50% + 100vw * (1200 - 540) / 1920);
    transform-origin:100% 100%;transform:rotate(-19deg)scale(-.9,.9);
  
}
@keyframes ro {
    to {transform:rotate(0deg);}
}

.img3 {
  @include img_l_pc(363,0, 10);
  animation: ro 5s ease-in-out infinite alternate;
  transform:rotate(3deg);
  transform-origin:63% 100%;
}
.img4 {
  @include img_l_pc(528,42, 228);
}
.img5 {
  @include img_l_pc(280,272, 24);
  animation: ro 5s ease-in-out infinite alternate;
  transform:rotate(-4deg);
  transform-origin:100% 16%;
}
.img6 {
  @include img_l_pc(335,543, -160);
  animation: ro 5s ease-in-out infinite alternate;
  transform:rotate(3deg);
  transform-origin:100% 99%;
}
.img7 {
  @include img_l_pc(237,274, 230);
  animation: ro 5s ease-in-out infinite alternate;
  transform:rotate(4deg);
  transform-origin:1% 99%;
}
.img8 {
  @include img_l_pc(114,-35, 229);
  animation: ro 5s ease-in-out infinite alternate;
  transform:rotate(2deg);
  transform-origin:100% 100%;
}
.img9 {
  @include img_l_pc(473, 630, 230);
top:calc(50% + 100vw * (630 - 540) / 1920);
  animation: ro 5s ease-in-out infinite alternate;
    transform-origin:0% 100%;transform:rotate(5deg);
}
.logo {
  @include img_r_pc(610, 160, 260);
  top:calc(50% + 100vw * (160 - 540) / 1920);
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 0;
  }
.img1 {
  @include img_l_m(136, 490, -42);
  top:calc(50% + 100vw * (490 - 667 * .5) / 375);
  img{width: 100%;}
}
.img2 {
  @include img_r_m(187, 345, -125);
  top:calc(50% + 100vw * (345 - 667 * .5) / 375);
  img{width: 100%;}
}
.img3 {
  @include img_l_m(147, 490, 0);
  top:calc(50% + 100vw * (535 - 667 * .5) / 375);
  img{width: 100%;}
}
.img4 {
  @include img_r_m(125, 490, -40);
  top:calc(50% + 100vw * (150 - 667 * .5) / 375);
  img{width: 100%;}
}
.img5 {
  @include img_r_m(144, 490, -50);
  top:calc(50% + 100vw * (20 - 667 * .5) / 375);
  img{width: 100%;}
}
.img8 {
  @include img_r_m(223, 80, -50);
  top:calc(50% + 100vw * (80 - 667 * .5) / 375);
  img{width: 100%;}
}
.logo {
  @include img_l_m(200, 108,48);
top:calc(50% + 100vw * (135 - 667 * .5) / 375);
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
