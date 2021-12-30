<template>
  <div class="section3">
    <img src="./s1/bg3.jpg" alt="檀悦s3bg" class="bg" uk-parallax="target: #section3;y:-800,1100;easing: 1">
    <div class="txt" uk-parallax="viewport:0.3;y:-200,0;blur:10,0;scale:3,1;opacity: 0,1">
    <div class="title1">中悦建設機構Ｘ璞園真誠代言</div>
    <img src="./s1/logo.png" alt="檀悦logo" class="logo">
    </div>
    <div class="txt2" uk-parallax="viewport:0.3;blur:10,0;scale:3,1;opacity: 0,1"><span>定義你的成功，成就你的人生</span></div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3{
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  margin: 0;
}
.bg{position: absolute;top: 50%;left: 0;width: 100%;transform: translateY(-50%);}

.logo{width:size(514);}
.title1{
 // transform: translateY(-50%)scaleY(1.2);filter: blur(6px);
 // transition: all 1s 1s;
  transform:scaleX(0.9);
  transform-origin:50% 0;
  margin: 0 0 1em;
}
.txt{
  @include img_r_pc(800, 315,50);
  top: calc(50% + (315 - 540) * 100vw / 1920);
  font-size:size(49.5);
  line-height: 1.4;
  letter-spacing: 0.0em;
  color: #FFF;
  text-align: center;transition: all 0.8s;
}
.txt2{
  @include img_l_pc(1000, 490,310);
  top: calc(50% + (490 - 540) * 100vw / 1920);
  font-family: Arial;
  font-weight: 700;
  color: #FFF;
  font-size:size(66);
  line-height: 1.04;
  text-align: left;transition: all 1s;
  span{position: relative;display: block;
  transform:scaleX(0.9);
  transform-origin: 0 0;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100%;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 32vw;
  }

.logo {
  @include img_l_m(200, 108,48);
top:calc(50% + 100vw * (140 - 667 * .5) / 375);
}
.title1{
  top: calc(50% + (110 - 333.5) * 100vw / 375);
  right:sizem(85);
  font-size:sizem(16);
  line-height: 1.25;
}
.title2{
  top: calc(50% + (190 - 333.5) * 100vw / 375);
  right:sizem(50);
  font-size:sizem(16);
  line-height: 1.25;
}
.txt{
  width: 100%;
  font-size:sizem(15);
  top: calc(50% + (585 - 333.5) * 100vw / 375);
  letter-spacing: 0.2em;
  span{width: 2em}
  

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section2',

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
