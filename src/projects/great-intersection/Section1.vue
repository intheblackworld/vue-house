<template>
  <article class="section1">
    <img class="a1" src="./s1/pc.jpg" alt="" /><!--   -->

<div class="img">
      <img src="./s1/o2.png" data-aos="fade-left" data-aos-duration="1000" class="o3" alt="" loading="lazy">
      <img src="./s1/o1.png" data-aos="fade-right" data-aos-duration="1600"  class="o1" alt="" loading="lazy">
      <img src="./s1/o1.png" data-aos="fade-right" data-aos-duration="1000" class="o2" alt="" loading="lazy">
      <img src="./s1/f1.png" data-aos="fade-left" data-aos-duration="1600" class="f1" alt="" loading="lazy">
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
  min-height: size(1080);
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
  width:size(246);}
  .o2{
    top: -1.4vw;
    right: 11.9vw;
  width:size(186);}
  .o3{
    top: -7.2vw;
    right: -5.6vw;
  width:size(392);}
  .f1{
    bottom: -2.5vw;
    left: -3vw;
  width:size(391);}
  .img1{
    bottom: -1.7vw;
    right: -1vw;
  width:size(626);}
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
  &::before{
    
  height: sizem(750);
  bottom:calc(50% + (0 - 302 - 750) * 100vw / 375);}
}
.bg-img{width: 120%;left: -10%;
  bottom:calc(50% + (0 - 302) * 100vw / 375);}
  
.img{width: 200%;
animation: img 8s ease-in-out infinite alternate;
  .img1{
    left: 3.1vw;
    width: 47vw;
    top: 46.6vw;}
  .img2{left: 32.5vw;
    width: 37.3vw;
    top: 21vw;}
  .img3{
    right: 28.5vw;
    width: 61.1vw;
    top: 28.6vw;}
  .img4{ 
    right: -1.3vw;
    width: 28.4vw;
    top: 8.8vw;;}
}

@keyframes img{
  
 0% {transform:translate(0%);}
 40% {transform:translate(0%);}
 60% {transform:translate(-50%);}
  100% {transform:translate(-50%);}
}
.bird{ .bird1 {
    left: -70vw;
    width: 70vw;
    top: 24.5vw;
    animation:bird 8s linear infinite;
    }}
  
@keyframes bird{
  50% {transform:translate(85vw,-50%);}
  to {transform:translate(170vw,0);}
}

.txt{
  width: 100%;
  left: 0;
  font-size:sizem(20.8);
  top: calc(60% + (85 -  604 * .6) * 100vw / 375);
  filter:drop-shadow(0 0 5vw #8d4e8d66); 
}
.t1{
font-size: 2.75em;line-height: 1.2;
span{padding: 0.3em 0;
b{
 font-size: 1.13em;
 margin: 0;
}}
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
