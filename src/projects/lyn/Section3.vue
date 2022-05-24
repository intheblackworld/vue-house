<template>
  <article class="section1">
  <img class="a1" src="./s1/pc.jpg" alt="">
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
    雙和人<br>照過來
  </span>
</h2>
<h3 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">不是史上第一次<span v-if="isPC">,</span><br v-else>但是難得的一次</h3>
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
.a1 {width: 100%;position: absolute;left: 0;top: 0;opacity: 0.1;}
.section1 {
 // background-image: url('~@/projects/lyn/s1/bg.jpg');
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
}
.o{
  
  position: absolute;
  width: 100%;
  top: 50%;left: 0;
  z-index: 2;
.o1,.o2{
  position: absolute;
  height: size(870);
  top:size(-870*.5);
  img{
    height: 100%;
    &:nth-child(1){
      filter: blur(1.7vw);
    }
    &:nth-child(3){
  position: absolute;
  top: 0;left: 0;
    }
    &:nth-child(4){
  position: absolute;
  top: 0;left: 0;
  animation: 5s ro infinite linear;
    }
  }
  .l{
  position: absolute;
  top:-4%;left:57%;
  animation: 5s ro infinite linear;
  transform-origin:-47% 368%;
  img{
      filter: blur(0);
  height: size(127);
  animation : 5s ro infinite linear reverse;
  }
  }
}
.o1{left:size(-470);}
.o2{right:size(-470);}

}

@keyframes ro{
  to {transform:rotate(360deg);}
}
.txt{
  filter:drop-shadow(0 0 3vw #8d4e8d66);
  @include img_c_pc(1200, 140);
 top: calc(50% + (150 - 540) * 100vw / 1920);
  font-size:size(58);
  line-height: 1.6;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;
  color:#FFF;}
.logo{
  font-weight: 900;
font-size: 4.85em;
  color: #fff;
  line-height: 1.1;
}
.t1{
font-weight: 200;
 margin: .75em auto;
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
