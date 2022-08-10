<template>
  <article class="section1">
   <!--  <img class="a1" src="./s1/pc.jpg" alt="" />  -->

<div class="img">
      <img src="./s1/o2.png" data-aos="fade-left" data-aos-duration="1000" class="o3" alt="" loading="lazy">
      <img src="./s1/o1.png" data-aos="fade-right" data-aos-duration="1600"  class="o1" alt="" loading="lazy">
      <img src="./s1/o1.png" data-aos="fade-right" data-aos-duration="1000" class="o2" alt="" loading="lazy">
      
      <div class="f1"  data-aos="fade-right">
        <img src="./s1/f11.png" alt="" loading="lazy" />
        <img src="./s1/f12.png" alt="" loading="lazy" />
        <img src="./s1/f13.png" alt="" loading="lazy" />
        <img src="./s1/f14.png" alt="" loading="lazy" />
      </div>
      <img src="./s1/img.png" data-aos="fade-left" data-aos-duration="1600" class="img1" alt="" loading="lazy">
</div>
<div class="txt">
<h2 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">勝麗建設<br />台中海線鉅作</h2>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">即將公開</h3>
</div>
</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background: #42254E;
  /*
  &::before{
    content: "";
    display: block;
    position: absolute;
    bottom:calc(50% + (90 - 540 - 640) * 100vw / 1920 );
    left: 0;
    width: 100%;
    height: size(640);
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%);
  }
  */
}
.a1{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}

.img{
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  img{
  position: absolute;}
  .o1{
    top: 2.2vw;
    left: -7vw;
  width:size(246);
  animation: anx 3s ease-in-out infinite alternate;}
  .o2{
    top: -1.4vw;
    right: 11.9vw;
  width:size(186);
  animation: anx 4s ease-in-out infinite alternate;}
  .o3{
    top: -7.2vw;
    right: -5.6vw;
  width:size(392);
  animation: anx 3.5s ease-in-out infinite alternate;}
  .f1{
    position: absolute;
    bottom: -2.5vw;
    left: -3vw;
  width:size(391);
  img{
    &:first-child{position: relative;width: 100%;
  animation: an2 4s ease-in-out infinite alternate;
  transform-origin: 0 50%;}
    &:nth-child(2){width: 27%;
    top: 46%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 56%;}
    &:nth-child(3){width: 54.2%;top: 31%; left: 0%;
  animation: an3 4s ease-in-out infinite alternate;}
    &:nth-child(4){width: 46.5%;
    top: 7%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 55%;}
  }
  }
  .img1{
    bottom: -1.4vw;
    right: -1.5vw;
  width:size(654);}
}

@keyframes anx{
  to {transform:translateY(20%);}
}

@keyframes an2{
  to {transform:skewY(-3deg);}
}
@keyframes an3{
  to {transform:translateY(-10%);}
}


/*
.bg-img{
  position: absolute;
  width:size(2000);
  height:auto;
  left:size(-40);
  bottom:calc(50% + (90 - 540) * 100vw / 1920);
  z-index: 0;transform:skewX(2deg);
  transform-origin: 50% 100%;
  animation: anx 2s ease-in-out infinite alternate;
}
@keyframes anx{
  to {transform:skewX(-2deg);}
}

.img{position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  img{position: absolute}
  .img1{
    left: 6.1vw;
    width: 16vw;
    top: 12.6vw;}
  .img2{left: 17.8vw;
    width: 12.3vw;
    top: 4vw;}
  .img3{right: 14.5vw;
    width: 20.1vw;
    top: 6.6vw;}
  .img4{    right: 4.7vw;
    width: 9.4vw;
    top: -0.2vw;}
}
.bird{position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  img{position: absolute}
  .bird1{
    left: -20vw;
    width:20vw;
    top: 7.5vw;
    animation:bird 10s linear infinite;
    }
  .bird2{left: 42vw;
    width: 19.4vw;
    top: 8.1vw;;}
}

@keyframes bird{
  50% {transform:translate(60vw,-50%);}
  to {transform:translate(120vw,0);}
}
*/
.txt{
  @include img_c_pc(900, 198);
 // top: calc(50% + (271 - 540) * 100vw / 1920);
  font-size:size(101);
  line-height: 1.3;
  letter-spacing: 0;
  z-index: 3;
  color:#DDAC98;}
.t1{
font-size: 1.41em;
//border-radius: .9em;
  letter-spacing: 0em;
font-weight: 800;
  line-height: 1.29;
 // line-height: 1.78;
margin: auto auto 0.42em auto;}

.t2{
  font-weight:500;
  letter-spacing: 0.05em;
  text-indent: 0.1em;
font-size: 1.22em;
 padding: 0.14em 0 0;color: #FFF;
 &::before,
 &::after{
  content:"";width: 100%;height: 2px;display: block;
 background: linear-gradient(to right, #db9d88 0%,#e2bda9 4%,#da927b 15%,#824b40 34%,#da927b 61%,#e2bda9 71%,#da927b 81%,#824b40 100%);}
 &::after{margin: 0.1em 0 0 0;}
 }
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    min-height: sizem(604);
    max-height: sizem(750);
    height:calc(100vh  - 63px);
    }
.img{
  .o1{
    top: 19.2vw;
    left: -12vw;
  width:sizem(90);}
  .o2{
    top: 3.6vw;
    right: 20.9vw;
  width:sizem(68);}
  .o3{
    top: -7.2vw;
    right: -12.6vw;
  width:sizem(143);}
  .f1{
    bottom: -12.5vw;
    left: -8vw;
    z-index: 3;
  width:sizem(138);}
  .img1{
    bottom: -5.8vw;
    right: -4vw;
    z-index: 3;
  width:sizem(291);}
}


.txt{
  width: 100%;
  left: 0;
  font-size:sizem(33);
  top: calc(60% + (128 -  604 * .6) * 100vw / 375);
.t2{
  width:6.4em;
  margin: auto;
}
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
