<template>
  <div class="section1">
    <!--  
    <img loading="lazy" src="./s1/0m.jpg" :alt="`${info.caseName}_bg`" class="t0">
  -->
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div>
    <img loading="lazy" src="./s1/img.png" data-aos="fade" data-aos-delay="100" :alt="`${info.caseName}_img`" class="img">
    
    <div class="txt">
      <img loading="lazy" src="./s1/logo.png" :alt="`${info.caseName}_時光淬鍊．豐釀生活`" class="logo" data-aos="fade" data-aos-delay="300">
      <div class="t2" data-aos="fade" data-aos-delay="400">北歐莊園城堡</div>
      <div class="t3" data-aos="fade" data-aos-delay="500">中壢COSTCO SRC安心地標</div>
    </div>
    <!--   <img loading="lazy" src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile" data-aos="fade" data-aos-delay="100" data-aos-duration="1700">
    <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img loading="lazy" src="./all/7.png" :alt="`${info.caseName}_bg`" class="c7">
      <img loading="lazy" src="./all/6.png" :alt="`${info.caseName}_bg`" class="c6" v-if="!isMobile">
      <img loading="lazy" src="./all/5.png" :alt="`${info.caseName}_bg`" class="c5">
      <img loading="lazy" src="./all/4.png" :alt="`${info.caseName}_bg`" class="c4">
      <img loading="lazy" src="./all/8.png" :alt="`${info.caseName}_bg`" class="c3" v-if="isMobile">
      <img loading="lazy" src="./all/3.png" :alt="`${info.caseName}_bg`" class="c3" v-if="!isMobile">
      <img loading="lazy" src="./all/2.png" :alt="`${info.caseName}_bg`" class="c2">
      <img loading="lazy" src="./all/1.png" :alt="`${info.caseName}_bg`" class="c1">
    </div>
    <div class="logo">
      <img loading="lazy" src="./s1/logo1.png" data-aos="fade-down" data-aos-delay="0" :alt="`${info.caseName}_logo`" class="logo1">
      <img loading="lazy" src="./s1/logo2.png" data-aos="fade-down" data-aos-delay="100" :alt="`${info.caseName}_logo`" class="logo2">
    </div>
    <div class="txt">
      <img loading="lazy" src="./s1/t.png" :alt="`${info.caseName}_時光淬鍊．豐釀生活`" class="t1" data-aos="fade-down" data-aos-delay="300">
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
      width:size(630);
      transform: translate(-20%, 10%) scale(0.8);
      }

.logo{
      width:size(480);
      transform: scale(1.2);
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
      transform: scale(3,.8);
  }
  .t3{
  font-size:.8em;
  font-weight: 800;
  letter-spacing:0em;
  transform: scaleX(0.95);
      transform: scale(3,.8); 
  }
}
.box {
position: absolute;
  top:calc(50% + (0 - 540) * 100vw / 1920);
  left:size(235);
  font-size: size(20);
div{
position: absolute;
top: 0;opacity:.5;
background: linear-gradient(to bottom,  #007e80 10%,#549d80 24%,#007e80 48%,#549d80 72%,#007e80 95%);
animation: an infinite;
      transform: translateY(-100%);
}
.box1{
  left: 0;
width: 0.48em;
height:25.75em;
animation-duration:5s;
animation-delay:-1s;}

.box2{
  left: 6.5em;
width:1.6em;
height:18.85em;
animation-duration:6s;
animation-delay:-3s;}
.box3{
  left:  9em;
width:0.75em;
height:30em;
animation-duration:8s;
animation-delay:-2s;}
.box4{
  left:   17em;
width: 1.15em;
height:21.15em;
animation-duration:5s;
animation-delay:-0s;}
.box5{
  left: 20em;
width: 1.6em;
height:19em;
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
    min-height: sizem(667);
    max-height: sizem(812);
    height:100vh;
  }
.txt{
  
      left:0;
      width: 100%;
      top:sizem(90);
  top:calc(50% + (90 - 333.5) * 100vw / 375);

  font-size: sizem(28);
  }

.img{
      width:sizem(193);
      top:sizem(310);
      left:sizem(90);
  top:calc(50% + (310 - 333.5) * 100vw / 375);

      }
.logo{
      width:sizem(251);
  }

.box {
  
div{

  top:calc(50% + (0 - 333.5) * 100vw / 375);
animation: an linear infinite;
}
  left: sizem(60);
  font-size: sizem(10);
}
}
@keyframes an{
    0%{
      transform: translateY(-100%);
      opacity: 0;
    }
    50%{
      transform: translateY(40%);
      opacity:.5;
    }
    100%{
      transform: translateY(180%);
      opacity: 0;
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
