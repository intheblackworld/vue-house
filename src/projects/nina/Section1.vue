<template>
  <div class="section1">
    <!-- <img src="./s1/0m.jpg" :alt="`${info.caseName}_bg`" class="t0">  -->
      <img src="./all/nina.jpg" :alt="`${info.caseName}`" class="nina">
      <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile" data-aos="fade" data-aos-delay="100" data-aos-duration="1700">
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
  //overflow: hidden;
  position: relative;
  z-index: 2; 
  margin: 0 0 5vw;
}
/*
  */
  .nina{
      position: absolute;
      top:0;
      left: 0;
      transform: translate(-100%,-100%);}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
    img{
      position: absolute;
      animation:an 5s ease-in-out infinite alternate;}
    .c1{width:size(451);top:size(230);left: size(-150);transform: translateX(-8%);animation-delay: -1s;}
    .c2{width:size(319);top:size(170);left: size(600);transform: translateX(-20%);animation-delay: -2s;}
    .c3{width:size(434);top:size(145);right:size(5);transform: translateX(-10%);}
    .c4{width:size(633);top:size(650);right:size(-180);transform: translateX(-15%);animation-delay: -1s;}
    .c5{width:size(316);top:size(820);left: size(840);transform: translateX(-20%);animation-delay: -1s;}
    .c6{width:size(275);top:size(760);left: size(680);transform: translateX(-15%);}
    .c7{width:size(126);top:size(120);right:size(310);transform: translate(-15%,-10%)rotate(10deg);}
  }


@keyframes an{
    to{
      transform: translateX(0);
    }
}
.logo{
  position: absolute;left: size(200);
      top:calc(50% + (455 - 540) * 100vw / 1920);
      width:size(389);
    .logo1{
      width:100%;
    }
    .logo2{
      position: absolute;
      width:66.3239%;top:-58%;left:41.1311%;
    }
  }
.txt{
  position: absolute;
      top:calc(50% + (370 - 540) * 100vw / 1920);
  left:size(870);
  font-size: size(34);
  font-weight: 500;
  line-height: 1.6;
  color: #444;
  text-align: center;
  .t1{
     width:size(744);
    }
  .t2{
    letter-spacing: 0.1em;
        margin:0.3em 0 0.2em;
    b{vertical-align: middle;
    display: inline-block;width:2px;height: 0.7em;background:#52b559;margin: auto 0.5em .1em 0.5em;}
  }
  .t3{
    font-size:2.3em;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;
    .button{
    font-size:0.68em;
      cursor: pointer;
      display: inline-block;
      border:2px solid #52b559;
      width: 5.2em;
      vertical-align: middle;
      margin: 0 0.5em 0.2em 0;
      padding: 0 0 0.1em 0;
      transition: all 0.3s;
      &:hover{
        background:#52b559cc;
        color: #FFF;
      }
    }
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
