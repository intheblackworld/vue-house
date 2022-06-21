<template>
  <article class="section1">
  <!-- <img class="a1" src="./s1/mo.png" alt=""> -->
  <div class="o">
    <div class="o1" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"> 
      <img src="./s1/o1.png" alt="圈圈">
      <div class="l"><img src="./s1/l.png" alt="光"></div>
      <img src="./s1/o1.png" alt="圈圈">
      <img src="./s1/ol.png" alt="圈圈">
    </div>
    <div class="o2" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"> 
      <img src="./s1/o2.png" alt="圈圈">
      <div class="l"><img src="./s1/l.png" alt="光"></div>
      <img src="./s1/o2.png" alt="圈圈">
      <img src="./s1/ol.png" alt="圈圈">
    </div>
  </div>
<!--     <div class="bg-img">
     <div>
      <img src="./s1/bg2.jpg" alt="">
      <img src="./s1/bg2.jpg" alt="">
     </div>
    </div>
  -->
<div class="txt">
<h2 class="logo">
  <span class="logotxt" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
    你還在<span></span>看我嗎
  </span>
</h2>
<h3 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">當他人還在觀望,你早已搶得先機</h3>
</div>
<div class="txt2">最挺雙和　即將登場　賞屋豪禮　搶先登記</div>
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
// .a1{width: 100%;height: 100%; object-fit: contain; opacity: 0.5;}
.o{
  
  position: absolute;
  width: 100%;
  top: 50%;left: 0;
  z-index: 2;
.o1,.o2{
  position: absolute;
  height: size(750);
  top:size(-750 * .57);
  img{
  z-index:-1;
    height: 100%;
    &:nth-child(1){
      filter: blur(1.7vw);
    }
    &:nth-child(3){
  position: absolute;
  top: 0;left: 0;
  z-index: 1;
    }
    &:nth-child(4){
  position: absolute;
  top: 0;left: 0;
  animation: 5s ro infinite linear;
  z-index: 3;
    }
  }
  .l{
  position: absolute;
  top:-4%;left:57%;
  animation: 5s ro infinite linear;
  transform-origin:-48% 370%;
  
  height:14.6%;
  img{
      filter: blur(0);
  height:100%;
  animation : 5s ro infinite linear reverse;
  }
  }
}
.o1{right:calc(50% - 6vw);
   img:nth-child(3){
  z-index: 3;}
   img:nth-child(4),
   .l,
   .l img{
  animation: 5s -3.5s ro infinite linear;
  }
    }
.o2{left:calc(50% - 6vw);}

}

@keyframes ro{
  to {transform:rotate(360deg);}
}
.txt{
  @include img_c_pc(1800, 140);
 top: calc(50% + (325 - 540) * 100vw / 1920);
  font-size:size(70);
  line-height: 1.6;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;
  color:#FFF;}
.logo{
  font-weight: 900;
font-size: 2.2em;
  color: #fff;
  line-height: 1.7;
  letter-spacing: -.05em;
  .logotxt span{margin: 0 1em;}
}
.t1{
font-weight: 200;
 margin: 0em auto;
 text-shadow: 0 0 0.7em #069,0 0 0.3em #000,0 0 0.2em #000,0 0 0.1em #000;
}
.txt2{background: linear-gradient(90deg, #E33A8E 0%, #BB2B89 22.92%, #94358B 47.92%, #7A6195 75.52%, #3FB4AA 100%);
color: #FFF;
position: absolute;
width: 100%;
left: 0;bottom: 0;
  font-size:size(53);
  line-height: 2.1;
  font-weight: 900;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
.a1 {width: 100%;position: absolute;left: 0;opacity: 0.50; object-fit: cover;height: 160vw;}
  .section1 {
    width: 100%;
    min-height: sizem(604);
    max-height: sizem(750);
    height:calc(100vh - 63px);
}
.o{
  
.o1,.o2{
  
  height: sizem(210);
  top:sizem(-210 * .57);
}
.o1{right:calc(50% - 8vw);}
.o2{left:calc(50% - 8vw);}
}

.txt{
  width: 100%;
  left: 0;
  font-size:sizem(19);
  top: calc(50% + (225 -  604 * .5) * 100vw / 375);
  line-height: 1.3;
}
.logo{
font-size: 2.2em;
}
.t1{
 margin: .4em auto;
}
.txt2{
  font-size:sizem(18.5);
  line-height: 2.7;bottom:5vw;
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
