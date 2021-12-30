<template>
  <div class="section1">
   <!-- <img src="./s1/0.jpg" alt="bg" class="img0">  -->
    <div class="txt">
      <div class="title1" uk-parallax="viewport:0.5;blur:0,10;x:0,500;scale:1,3;opacity:1,0">流傳建築圈 &nbsp;0.3公分的堅持</div>
      <div class="title2" uk-parallax="viewport:0.5;blur:0,10;x:0,500;scale:1,3;opacity:1,0">這次不再是聽說⋯⋯</div>
    </div>
    <div class="txt2" uk-parallax="viewport:0.5;blur:0,10;x:0,200;opacity:1,0">
      <span>DON’T<br>DREAM IT,<br>BE IT!</span>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  z-index: 3;
  margin: 0;
  background: url("./s1/bg.jpg") center;
  background-size: cover;
}

.img0 {
  @include img_c_pc(1920,-80);opacity:1;width: 100%;
}

.title1{
  transform: translateX(150%)scaleX(3)scaleY(.5);filter: blur(6px);
  opacity: 0;
  transition: all 2s 0.5s;
}
.title2{
  transform: translateX(150%)scaleX(3)scaleY(.5);filter: blur(6px);
  opacity: 0;
  transition: all 2s 1s;
}
.txt{
  @include img_l_pc(1000, 395,430);
  top: calc(50% + (390 - 540) * 100vw / 1920);
  font-size:size(65);
  line-height: 1.4;
  letter-spacing: 0.0em;
  color: #FFF;
  transform:scaleX(0.9);
  transform-origin: 0 0;
  text-align: left;
}
.txt2{
  @include img_r_pc(1000, 330,-5);
  top: calc(50% + (325 - 540) * 100vw / 1920);
  font-family: Arial;
  font-weight: 700;
  color: #FFF;
  font-size:size(155);
  line-height: 1.04;
  text-align: right;
  transform: translateX(100%);filter: blur(6px);
  transition: all 2s 1.8s;
  span{
  transform:scaleX(0.9);
  transform-origin: 100% 0;
  opacity: 0.05;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
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
