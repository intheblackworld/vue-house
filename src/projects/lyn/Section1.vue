<template>
  <article class="section1">
  <!-- <img class="a1" src="./s1/mo.jpg" alt=""> -->
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
  transform-origin:-48% 370%;
  
  height:14.6%;
  img{
      filter: blur(0);
  height:100%;
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
.a1 {width: 100%;position: absolute;left: 0;top:sizem(-63);opacity: 0.50;}
  .section1 {
    width: 100%;
    min-height: sizem(604);
    max-height: sizem(750);
    height:calc(100vh - 63px);
}
.o{
  
.o1,.o2{
  
  height: sizem(293);
  top:sizem(-293*.5);
}
.o1{left:sizem(-230);}
.o2{right:sizem(-230);}
}

.txt{
  width: 100%;
  left: 0;
  font-size:sizem(31);
  top: calc(60% + (165 -  604 * .6) * 100vw / 375);
  line-height: 1.3;
}
.logo{
font-size: 2.4em;
}
.t1{
 margin: .4em auto;
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
