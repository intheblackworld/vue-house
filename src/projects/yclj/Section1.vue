<template>
  <div class="section1">
<img class="main" data-aos="zoom-in" src="./s1/main.png" alt="">   
<img class="main-bg" data-aos="zoom-in" data-aos-delay="300" src="./s1/main-bg.png" alt="">
 <img class="logo" data-aos="zoom-in" data-aos-delay="800" src="./s1/logo.png" alt="">
 <img class="coming-soon" data-aos="zoom-in" data-aos-delay="800" src="./s1/coming-soon.png" alt="">

     <!-- <img src="./s1/mo.jpg" class="t0" alt="">
    <div v-if="isPC">
      <div class="f">
        <img class="img6" src="./s1/6.png" alt="青青_6">
        <div class="img8"><img src="./s1/8.png" alt="青青_8"></div>
        <div class="img7"><img src="./s1/7.png" alt="青青_7"></div>
        <div class="img5"><img src="./s1/5.png" alt="青青_5"></div>
        <div class="img3"><img src="./s1/3.png" alt="青青_3"></div>
        <div class="img4"><img src="./s1/4.png" alt="青青_4"></div>
      </div>
      <img src="./s1/2.gif" class="img2" alt="青青_2" uk-parallax="x: 0,50,150">
      <img src="./s1/1.png" class="img1" alt="青青_1" uk-parallax="x: 0,50,150">
      <img src="./s1/logo.png" class="logo" alt="青青_logo" uk-parallax="x: 0,50,150">
      
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
      <div class="img2"><img src="./s1/2m.gif" alt="青青_6"
            data-aos="fade"
            data-aos-delay="100"></div>
    </div>  -->

</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  background-image: url('~@/projects/yclj/s1/bg.jpg');
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  z-index: 3;
  //margin: 0 0 25vw 0;
 // background: #000
}
.main{
  @include img_l_pc(710, 30, 40);
  top: calc(50% + (30 - 540) * 100vw / 1920);
  z-index: 2;
}

.main-bg{
  @include img_l_pc(372, 0, 240);
  top: calc(50% + (0 - 540) * 100vw / 1920);
  z-index: 1;
}

.coming-soon{
  @include img_r_pc(625, 0, 290);
  top: calc(50% + (520 - 540) * 100vw / 1920);
}

.img0 {
  @include img_c_pc(1920,0);opacity: 0.5;
}



.logo{
  @include img_r_pc(480, 275, 350);
  top: calc(50% + (275 - 540) * 100vw / 1920);

  fill:#C79F62;
	.st1{fill:none;stroke:#C79F62;stroke-width:4;stroke-miterlimit:10;stroke-dasharray: 188 !important;
stroke-dashoffset: 130;
  transition: all 1s 1s;
  }
	.st2{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;stroke-dasharray: 188 !important;
  transition: all 1s 1s;
stroke-dashoffset: 130;
  }
	.st3{fill:none;stroke:#E95513;stroke-width:9;stroke-miterlimit:10;stroke-dasharray: 188 !important;
  transition: all 1s 1s;
stroke-dashoffset: 130;
  }
  }
.title1{
  @include img_r_pc(0, 200,740);
  top: calc(50% + (200 - 540) * 100vw / 1920);
  width: 1em;
  font-size:size(30);
  line-height: 1.3;
  color: #E95513;
  transform: translateY(-50%)scaleY(1.2);filter: blur(6px);
  transition: all 1s 1s;
}
.title2{
  @include img_r_pc(410, 370,665);
  top: calc(50% + (370 - 540) * 100vw / 1920);
  width: 1em;
  font-size:size(30);
  line-height: 1.2;
  color: #000;
  transform: translateY(-50%)scaleY(1.2);filter: blur(6px);
  transition: all 1s 1.5s;
  span{width: 1em;height: 1.5em;display:flex;position: relative;
  align-items: center;justify-content:center;
  &::after{content: "";width: 0.3em;height: 0.3em;display: block;background: #E95513;transform: rotate(45deg);}
  }
}
.txt{
  @include img_c_pc(1000, 1200);
  top: calc(50% + (1200 - 540) * 100vw / 1920);
  font-size:size(28);
  line-height: 1.2;
  letter-spacing: 0.25em;
  color: #000;
  li{padding:0 0 1.9em;}
  span{width: 3.5em;height: 1em;display:inline-flex;position: relative;
  align-items: center;justify-content:center;
  &::after{content: "";width: 0.3em;height: 0.3em;display: block;background: #C79F62;transform: rotate(45deg);}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 32vw;
  }

.logo {
  @include img_l_m(200, 108,48);
top:calc(50% + 100vw * (140 - 667 * .5) / 375);
}
.title1{
  top: calc(50% + (110 - 333.5) * 100vw / 375);
  right:sizem(85);
  font-size:sizem(16);
  line-height: 1.25;
}
.title2{
  top: calc(50% + (190 - 333.5) * 100vw / 375);
  right:sizem(50);
  font-size:sizem(16);
  line-height: 1.25;
}
.txt{
  width: 100%;
  font-size:sizem(15);
  top: calc(50% + (585 - 333.5) * 100vw / 375);
  letter-spacing: 0.2em;
  span{width: 2em}
  

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      UIkit,
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
