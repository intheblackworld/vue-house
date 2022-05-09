<template>
  <article class="section1">
   <div class="bg-img">
     <div>
      <img src="./s1/bg2.jpg" alt="">
      <img src="./s1/bg2.jpg" alt="">
     </div>
    </div>
<!--  <img class="a1" src="./s1/mo.jpg" alt="">  -->
<div class="txt">
<h2 class="logo">
    <img src="./s1/o1.png" alt="logo背景" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">
    <img src="./s1/o2.png" alt="logo背景" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">
  <span class="logotxt" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
    龍瑩建設<br>小宅大作
  </span>
</h2>
<h3 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" v-scroll-to="{ element: `#contact`, offset: 0 }">我想搶先賞屋</h3>
<p class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">預約成功享有「成家福袋」抽獎資格</p>
</div>
<!-- <img class="bg" src="./s1/bg.jpg" loading="lazy" :alt="`${info.caseName}_bg`"  v-if="isPC"> 
<img class="bg" src="./s1/bgm.jpg" loading="lazy" :alt="`${info.caseName}_bg`" v-if="isMobile">

<img class="moon" src="./s1/moon.png" loading="lazy" :alt="`${info.caseName}_moon`" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">   
<img class="bg-img" src="./s1/bg.png" loading="lazy" :alt="`${info.caseName}_外觀`" v-if="isPC">   
<img class="bg-img" src="./s1/bgm.png" loading="lazy" :alt="`${info.caseName}_外觀`" v-if="isMobile">   

<div class="txt">
<h3 class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">面水岸 近捷運 鄰公園</h3>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="900">蘆洲站5分鐘｜888萬起｜8292-2333<span>(須另購車位)</span></h3>
</div>   -->
</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
 // background-image: url('~@/projects/lyn/s1/bg.jpg');
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
}
.bg-img{
  position: fixed;
  width: 100%;
  height:auto;
  left: 0;
  z-index: 0;
  animation: 5s anx infinite linear;
  div{
    position: relative;
    top: -3vw;
  left: -5%;filter: blur(2vw);
    width: 110%;}
  img{width: 100%;vertical-align:bottom;
  
  }
}
@keyframes anx{
  to {transform:translateY(-50%);}
}
/*
@keyframes op {
    50% {opacity: 1;}
    100% {opacity: 0;}
}
*/
.logo{
  font-weight: 900;
  font-size:size(145);
  color: #fff;
  img{
    position: absolute;
    right: 0;
    top: 0;
    width:size(511);
    &:nth-child(1){
      left: 0;
    }
  }
  .logotxt{position: relative;z-index: 1;display: block;
  padding: .69em 0 1.3em;
  line-height: 1.03;
  letter-spacing: -0.05em
  }
}
.txt{
  filter:drop-shadow(0 0 3vw #8d4e8d66);
  @include img_c_pc(900, 150);
  top: calc(50% + (150 - 540) * 100vw / 1920);
  font-size:size(33);
  line-height: 1.6;
  letter-spacing: 0.01em;
  z-index: 3;
  color:#FFF;}
.t1{

font-size: 1.8em;
background: #e51373;
border-radius: .9em;
font-weight: 800;
width:61%;
margin: auto;
    transition: all 0.3s !important;
&:hover{
background: #0b85cc;}
}

.t2{
  font-weight:500;
 padding: .5em 0 0;
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
    height:100vh;
}
.bg-img{
  
  img{height:sizem(830);
  
  }
  }
.logo{
  font-size:sizem(67);
  img{
    width:sizem(199);}
  .logotxt{
    padding: .4em 0 1.4em;
  }
}

.txt{
  width: 94%;
  left: 0;
  font-size:sizem(18);
  top: calc(60% + (120 -  604 * .6) * 100vw / 375);
  filter:drop-shadow(0 0 5vw #8d4e8d66);
}
.t1{
font-size: 2.1em;
width:100%;
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
