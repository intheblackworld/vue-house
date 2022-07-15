<template>
  <article class="section1">
  <!--  <img class="a1" src="./s1/mo.jpg" alt="" />  -->
<div class="txt">
    <img data-aos="zoom-in" src="./s1/logo.png" alt="" class="logo">
<h2 class="t1" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">2022中悦全新耑作！</h2>
<h3 class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">116‧122坪｜03-356 6677</h3>
</div>
<div class="t3" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">ONLY FOR TOP</div>
</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  background: url('./s1/bg.jpg') center;
  background-size: cover; 
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
 // overflow: hidden;
 //background: #0006;
}
.a1{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}

.txt{
 // top: calc(50% + (271 - 540) * 100vw / 1920);
 position: absolute;
 top:calc(50% + (350 - 535) * 100vw / 1920);
 left: 0;
 width: 100%;
 text-align: center;
  font-size:size(35);
  line-height: 1.7;
  letter-spacing: -.05em;
  z-index: 3;
  color:#1F2539;}
  .logo{width:10.43em;}
.t1{
font-size: 1.3em;
font-weight: 700;
line-height: 1.4;
text-indent: 0.3em;
margin:.4em auto 0;
  color: #06348D;

  }

.t2{
font-weight:700;
font-size: 1em;
padding: 0.15em 0 0;
}

.t3{font-size:size(32);
font-weight:700;
  color:#1F2539;
  position: absolute;
  bottom:1em;
  left:0;
  width: 100%;
  text-align: center;
  letter-spacing: 3.4em;
  text-indent: 3.4em;
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
}
.txt{
  font-size:sizem(20);
  top: calc(30% + (222 -  604 * .3) * 100vw / 375);
}
.t3{font-size:sizem(15);
  letter-spacing: 1em;
  text-indent: 1em;
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
