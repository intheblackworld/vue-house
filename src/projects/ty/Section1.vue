<template>
  <div class="section1">
  <!-- <img src="./s1/1.jpg" alt="bg" class="img0">-->
    <div class="txt">
      <div class="title1" uk-parallax="viewport:1;blur:0,10;x:0,500;scale:1,3;opacity:1,0">流傳建築圈 &nbsp;0.3公分的堅持</div>
      <div class="title2" uk-parallax="viewport:1;blur:0,10;x:0,500;scale:1,3;opacity:1,0">這次不再是聽說⋯⋯</div>
    </div>
    <div class="txt2" uk-parallax="viewport:1;blur:0,10;x:0,200;opacity:1,0">
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
  margin: 0;
  background: url("./s1/bg.jpg") center;
  background-size: cover;
}

.img0 {
  @include img_c_pc(1920,0);opacity:0.5;width: 100%;
  z-index: 10;
  top: size-m(-130);
}

.title1{
  transform: translateX(150%)scaleX(3)scaleY(.5);filter: blur(6px);
  opacity: 0;
  transition: all 1s 0s;
}
.title2{
  transform: translateX(150%)scaleX(3)scaleY(.5);filter: blur(6px);
  opacity: 0;
  transition: all 1s .2s;
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
  transition: all 1s .5s;
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
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
  background-image: url("./s1/bg-m.jpg");
  }
.txt{
  @include img_l_m(375, 200,40);
  top: calc(46% - 26vw);
 //top: calc(50% + (390 - 540) * 100vw / 1920);
  font-size:sizem(27);
}
.txt2{
  @include img_r_m(375, 0,0);
  font-size:sizem(59);
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
