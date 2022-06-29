<template>
  <article class="section3">
  <div class="o" v-if="isPC">
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
<div class="txt">
<h4 class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
    龍瑩建設 小宅大作
</h4>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">我想搶先賞屋!</h3>
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
.section3 {
 // background-image: url('~@/projects/rjs/s1/bg.jpg');
  width: 100%;
  height:auto;
  position: relative;
  //z-index: 3;
}
.o{
  
  position: absolute;
  width: 100%;
  top:29vw;left: 0;
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
  position: relative;
  margin:3.0em auto 0em auto;
  font-size:size(45);
  line-height: 1.35;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;
  color:#FFF;}
.t1{
  font-weight: 100;
 margin: 0em auto;
}
.t2{
  font-size:2.05em;
  font-weight: 900;
 margin: 0em auto;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {

.txt{
  font-size:sizem(24);
  
  margin:0.7em auto 1em auto;
}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section3',

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
