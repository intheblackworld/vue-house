<template>
  <div class="section1">
    <!--  -->
    <img src="./s1/0.jpg" :alt="`${info.caseName}_bg`" class="t0">
  
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div>
    <img src="./s1/img.png" data-aos="fade" data-aos-delay="100" :alt="`${info.caseName}_img`" class="img">
    
    <div class="txt">
      <img src="./s1/logo.png" :alt="`${info.caseName}_時光淬鍊．豐釀生活`" class="logo" data-aos="fade-down" data-aos-delay="300">
      <div class="t2" data-aos="fade" data-aos-delay="400">北歐莊園城堡</div>
      <div class="t3" data-aos="fade" data-aos-delay="400">中壢COSTCO SRC安心地標</div>
    </div>
    <!--   <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile" data-aos="fade" data-aos-delay="100" data-aos-duration="1700">
    <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/7.png" :alt="`${info.caseName}_bg`" class="c7">
      <img src="./all/6.png" :alt="`${info.caseName}_bg`" class="c6" v-if="!isMobile">
      <img src="./all/5.png" :alt="`${info.caseName}_bg`" class="c5">
      <img src="./all/4.png" :alt="`${info.caseName}_bg`" class="c4">
      <img src="./all/8.png" :alt="`${info.caseName}_bg`" class="c3" v-if="isMobile">
      <img src="./all/3.png" :alt="`${info.caseName}_bg`" class="c3" v-if="!isMobile">
      <img src="./all/2.png" :alt="`${info.caseName}_bg`" class="c2">
      <img src="./all/1.png" :alt="`${info.caseName}_bg`" class="c1">
    </div>
    <div class="logo">
      <img src="./s1/logo1.png" data-aos="fade-down" data-aos-delay="0" :alt="`${info.caseName}_logo`" class="logo1">
      <img src="./s1/logo2.png" data-aos="fade-down" data-aos-delay="100" :alt="`${info.caseName}_logo`" class="logo2">
    </div>
    <div class="txt">
      <img src="./s1/t.png" :alt="`${info.caseName}_時光淬鍊．豐釀生活`" class="t1" data-aos="fade-down" data-aos-delay="300">
      <div class="t2" v-if="!isMobile" data-aos="fade-down" data-aos-delay="400">日式前院美墅<b></b>高規精品建材<b></b>國際雙語學區</div>
      <div class="t2" v-if="isMobile" data-aos="fade-down" data-aos-delay="400"><b></b>日式前院美墅<b></b>03-3855000<b></b></div>
      <div class="t3" v-if="!isMobile" data-aos="fade-down" data-aos-delay="500"><span class="button" v-scroll-to="{ element: `#contact`, offset: 0 }">立即預約</span>03-3855000</div>
    </div>  -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  z-index: 2; 
  margin: 0;
  background:url("./s1/bg.jpg");
  background-size: cover;
}
/*
  */
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.1;
  }

.img{
  position: absolute;left: size(80);
      top:calc(50% + (110 - 540) * 100vw / 1920);
      width:size(630);}

.logo{
      width:size(480);
  }
.txt{
  position: absolute;
  top:calc(50% + (285 - 540) * 100vw / 1920);
  right: size(0);
  font-size: size(64);
  width: size(1100);
  font-weight: 500;
  line-height: 1.45;
  color: #FFF;
  text-align: center;
  .t2{
    letter-spacing: 0.01em;
    margin:0.5em 0 0em;
  }
  .t3{
  font-size:.8em;
  font-weight: 800;
  letter-spacing:0em;
  transform: scaleX(0.95);
  }
}
.box {
position: absolute;
top: 0;
  left:size(235);
div{
position: absolute;
top: 0;opacity:.5;
background: linear-gradient(to bottom,  #007e80 10%,#549d80 24%,#007e80 48%,#549d80 72%,#007e80 95%);
animation: an infinite;
      transform: translateY(-100%);
}
.box1{
  left: 0;
width: size(12);
height:size(515);
animation-duration:5s;
animation-delay:-1s;}

.box2{
  left:  size(130);
width: size(32);
height:size(377);
animation-duration:6s;
animation-delay:-3s;}
.box3{
  left:  size(180);
width: size(15);
height:size(600);
animation-duration:8s;
animation-delay:-2s;}
.box4{
  left:  size(340);
width: size(23);
height:size(423);
animation-duration:5s;
animation-delay:-0s;}
.box5{
  left:  size(400);
width: size(32);
height:size(377);
animation-duration:7s;}


}


@keyframes an{
    to{
      transform: translateY(200%);
      opacity: 0;
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
  margin: 0 0 25vw;
  }

.bg{
  position: absolute;
  width:100%;
  top:calc(50% - 43vw);
  left: 0;
  }
.c{
   top:calc(50% + (0 - 302) * 100vw / 375);
    .c1{width:sizem(230);top:sizem(570);left: sizem(-60);}
    .c2{width:sizem(280);top:sizem(573);left: sizem(210);}
    .c3{width:sizem(208);top:sizem(180);right:sizem(-140);}
    .c4{width:sizem(200);top:sizem(369);right:sizem(275);}
    .c5{width:sizem(170);top:sizem(85);left: sizem(270);}
    .c7{width:sizem(70);top:sizem(574);right:sizem(83);}
}

.logo{
   width:sizem(190);
   top:calc(50% + (222 - 302) * 100vw / 375);
   left:sizem(85);
  }
.txt{
   left:sizem(0);
   top:calc(50% + (470 - 302) * 100vw / 375);
   width: 100%;
  font-size: sizem(20);
  .t1{
     width:sizem(283);
    }
  .t2{
    letter-spacing: 0.04em;
        margin:0;
        b{margin: auto 0.4em .1em 0.4em;
    }
    }
}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
