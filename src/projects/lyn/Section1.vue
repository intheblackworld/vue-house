<template>
  <article class="section1">
<img class="a1" src="./s1/pc.jpg" alt="">
<div class="txt">
<h2 class="logo">
  <span class="logobg">
    <img src="./s1/o1.png" alt="logo背景"><img src="./s1/o2.png" alt="logo背景">
  </span>
  <span class="logotxt">
    龍瑩建設<br>小宅大作
  </span>
</h2>
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
  max-height: size(1075);
  position: relative;
  z-index: 3;
  &::after{
    content: "";
    position: absolute;
    bottom:calc((100% - 56vw) * .5);
    left: 0;
    width: 100%;
    height:11vw;
background: linear-gradient(to bottom, #312A3D00 0%,#312A3DFF 98%);
  }
}
h1{opacity: 0;}
.a1{
position: absolute;
top: 0;
left: 0;
width: 100%;
opacity: .5;
}
.bg{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}
.moon{
  @include img_c_pc(423, 460);
  top: calc(50% + (460 - 540) * 100vw / 1920);
}
.bg-img{
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
width: 100%;
height: auto;
}
.logobg2{position: absolute;top: 0;left:0;width:100%;opacity:0.6;
font-size: 20vw;
img{position: absolute;animation: op 2s ease-in-out infinite alternate;opacity: 1;
&:nth-child(1){top: 0.19em;left:0.06em;animation-delay: .6s;width:1.93em;}
&:nth-child(2){top: 0.06em;left:0.15em;animation-delay: .0s;width:1.75em;}
&:nth-child(3){top: 0.3em;left:0em;animation-delay: 1.2s;width:1.94em;}
&:nth-child(4){top: 0.29em;right:0em;animation-delay: .0s;width:1.93em;}
&:nth-child(5){top: 0.16em;right:0.1em;animation-delay: .8s;width:1.75em;}
&:nth-child(6){top: 0.1em;right:0.06em;animation-delay: 1.5s;width:1.94em;}
&:nth-child(7){top: 0em;left:1.56em;animation-delay: 1s;width:1.93em;}
&:nth-child(8){top: 0.3em;left:1.25em;animation-delay: 1.6s;width:1.75em;}
&:nth-child(9){top: -0.15em;left:0.5em;animation-delay: .1s;width:1.94em;}
&:nth-child(10){top: 0.19em;right:1em;animation-delay: 1.4s;width:1.93em;}
&:nth-child(11){top: 0.26em;right:1.1em;animation-delay: .3s;width:1.75em;}
&:nth-child(12){top: -0.1em;right:.56em;animation-delay: 2s;width:1.94em;}
}
}
@keyframes op {
    50% {opacity: 1;}
    100% {opacity: 0;}
}
.logo{
  @include img_l_pc(404, 195, 449);
  top: calc(50% + (195 - 540) * 100vw / 1920);
  font-weight: 900;
  font-size:36px;
  color: #fff;
}
.txt{
  @include img_l_pc(900, 250, 776);
  top: calc(50% + (250 - 540) * 100vw / 1920);
  font-size:size(37);
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.01em;
  color:#CC9856;}
.t1{color:#fff;
  letter-spacing: -0.035em;
font-size: 1.8em;}

.t2{
  span{position: absolute;top: 2.1em;left:0;width: 100%;font-size: .6em;letter-spacing: 0.1em;padding: 0 0 0 1em;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    min-height: sizem(667);
    max-height: sizem(780);
    height:100vh;
  &::after{
    bottom:0;
    height:15vw;
  }
  }
.moon{
  @include img_c_m(183, 392);
  width: auto;
  height: calc(100% * 183 / 667) ;
  top: calc(50% + (392 - 667 * .5) * 100vw / 375);
}
.logobg2{
font-size:53vw;
img{
&:nth-child(1){top: 0em;left:0.06em;}
&:nth-child(2){top: 0.1em;left:0.3em;}
&:nth-child(3){top: 0.35em;left:0.5em;}
&:nth-child(4){top: 0.5em;right:0.0em;}
&:nth-child(5){top: -0.1em;right:0.1em;}
&:nth-child(6){top: 0.7em;right:1.06em;}
&:nth-child(7){top: 0.8em;left:0.8em;}
&:nth-child(8){top: 0.9em;left:0.15em;}
&:nth-child(9){top: 1em;left:0.5em;}
&:nth-child(10){top: 1.3em;right:0.6em;}
&:nth-child(11){top: 1.15em;right:0.1em;}
&:nth-child(12){top: 1.3em;right:-0.5em;}

  }
  }
.logo{
  @include img_l_m(199, 81, 50);
  top: calc(25% + (81 - 667 * .25) * 100vw / 375);
}
.bg-img{
width:auto;
height:100%;;
}

.txt{
  width: 100%;
  left: 0;
  font-size:sizem(17);
  top: calc(25% + (310 -  667 * .25) * 100vw / 375);
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
