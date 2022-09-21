<template>
  <article class="section1">
    <!-- <img class="a1" src="./s1/mo2.jpg" alt="">  -->
<div  data-aos="fade">
<img src="./s1/bg.png" v-if="!isMobile" class="bg-img" alt="" loading="lazy">
<img src="./s1/bgm.png" v-else class="bg-img" alt="" loading="lazy"></div>
<img src="./s1/synlogo.png" class="synlogo" alt="" loading="lazy">
<img src="./s1/style.png"  v-if="!isMobile" class="style" alt="" loading="lazy">
<img src="./s1/style.png" v-if="!isMobile" class="style2" alt="" loading="lazy">
<div class="bird">
      <img src="./s1/bird.png" class="bird1" alt="" loading="lazy">
   <!--  <img src="./s1/bird.png" v-if="!isMobile" class="bird2" alt=""> -->
</div>
<div class="txt">
 <img src="./s1/logo.png" v-if="!isMobile" data-aos="fade-left" data-aos-duration="1600" class="logo" alt="" loading="lazy">
 <img src="./s1/logom.png" v-if="isMobile" data-aos="fade-left" data-aos-duration="1600" class="logo" alt="" loading="lazy">
<h2 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000"><span>雙公園 會呼吸的家</span></h2>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">安南中心｜綠浪2-3房｜<span><font>06</font> 283-5866</span></h3>
</div>


</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
 // background-image: url('~@/projects/anan/s1/bg.jpg');
 background:#00797f;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
}
.a1{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}
.synlogo{
  position: absolute;
  right:size(20);
  top:size(20);
  width: size(350);
}
.style{
  position: absolute;
   opacity : 0.5 ;
  left:size(-250);
  bottom:size(150);
  width: size(800);
  z-index: 0;
  animation: anx1 2s ease-in-out infinite alternate;
}

.style2{
  position: absolute;
   opacity : 0.5 ;
  right:size(-250);
  bottom:size(150);
  width: size(800);
  z-index: 0;
  animation: anx2 2s ease-in-out infinite alternate;
  transform:scaleX(-1);
}

.bg-img{

  position: absolute;
  width:size(2000);
  height:auto;
  left:size(-40);
  bottom:0;
  z-index: 1;
  transform:skewX(2deg);
  transform-origin: 50% 100%;
  animation: anx 2s ease-in-out infinite alternate;
}
@keyframes anx{
  to {transform:skewX(-2deg);}
}
@keyframes anx1{
  to {transform:skewY(-2deg);}
}
@keyframes anx2{
  to {transform:skewY(-2deg) scaleX(-1);
  }
  
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
  top: 5%;
  img{position: absolute}
  .bird1{
    left: -20vw;
    width:20vw;
    top: 3vw;
    animation:bird 10s linear infinite;
    }
  .bird2{left: 42vw;
    width: 19.4vw;
    top: 8.1vw;}
}

@keyframes bird{
  50% {transform:translate(60vw,-50%);}
  to {transform:translate(120vw,0);}
}
.txt{
  @include img_c_pc(1800, 271);
  top: calc(50% + (350 - 540) * 100vw / 1920);
  font-size:size(73);
  line-height: 1.59;
  letter-spacing: 0;
  z-index: 3;
  color:#FFF;}

 .logo{
  left: 42vw;
  width:size(650);
  top: 8.1vw;
  -webkit-filter: drop-shadow(0em 0em 0.2em rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0em 0em 0.2em rgba(0, 0, 0, 0.4));
 }
 
.t1{
font-size: size(60);
font-family: "Noto Sans TC", sans-serif;
//border-radius: .9em;
letter-spacing: 0em;
font-weight: 700;
line-height: 1.78;
text-shadow: 0em 0em 0.2em rgba(0, 0, 0, 0.4);
margin: auto;
span{
  display: inline-block;
  

b{
 margin: 0 0.5em 0 0;
}
}}

.t2{
  font-weight:700;
  letter-spacing: 0.05em;
  text-indent: 0.1em;
  font-family: "Noto Sans TC", sans-serif;
  font-size: size(40);
  padding: 0.14em 0 0;
  color: #ffffff;
  text-shadow: 0em 0em 0.2em rgba(0, 0, 0, 0.4);

  span{
  color: #fff100; 

   font{ font-size: size(30); } 
  }
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
.synlogo{
  width: sizem(200);
  top:sizem(10);
  right:sizem(10);
  z-index: 99;
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
    top: 0vw;
    animation:bird 8s linear infinite;
    }}
  
@keyframes bird{
  50% {transform:translate(85vw,-50%);}
  to {transform:translate(170vw,0);}
}

.txt{
  width: 100%;
  left: 0;
  font-size:size-m(20.8);
  top: calc(60% + (100 -  604 * .6) * 100vw / 375);
  filter:drop-shadow(0 0 5vw #8d4e8d66); 
}
.logo{
  left: 42vw;
  width:size-m(230);
  top: 8.1vw;
  -webkit-filter: drop-shadow(0em 0em 0.2em rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0em 0em 0.2em rgba(0, 0, 0, 0.4));
 }

.t1{
font-size: size-m(30);line-height: 1.2;
span{padding: 0.3em 0;
b{
 font-size: 1.13em;
 margin: 0;
}
}
}

.t2{
font-size: size-m(20);

span{
  font{
    font-size: size-m(15);
  }
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
