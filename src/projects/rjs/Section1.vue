<template>
  <article class="section1">
  <!-- <img class="a1" src="./s1/mo.jpg" alt="">
 -->
  <div class="img">
    <img src="./s1/img.jpg" class="imgv" alt="img" v-if="!isMobile">
    <img src="./s1/img_m.jpg" class="imgv" alt="img" v-else>
    <div class="rabbit">
      <img src="./s1/rabbit.gif" alt="rabbit" v-if="!isMobile">
      <img src="./s1/rabbit_m.gif" alt="rabbit" v-else>
      <img src="./s1/rabbit.png" alt="rabbit">
    </div>
    <div class="txt" data-aos="zoom-in-right">上學只要<span><b>1</b>分鐘</span></div>
  </div>
  <img src="./s1/leaf6.png" class="leaf6" alt="leaf">
  
  <div class="txtall">
    <img src="./s1/leaf1.png" data-aos="fade" data-aos-delay="300" class="leaf1" alt="leaf">
    <img src="./s1/leaf2.png" data-aos="fade" data-aos-delay="100" class="leaf2" alt="leaf">
    <img src="./s1/leaf3.png" data-aos="fade" class="leaf3" alt="leaf">
    <img src="./s1/leaf4.png" data-aos="fade" data-aos-delay="200" class="leaf4" alt="leaf">
    <img src="./s1/leaf5.png" data-aos="fade" data-aos-delay="400" class="leaf5" alt="leaf">
    <img src="./s1/book1.png" data-aos="fade-down" class="book1" alt="book">
    <img src="./s1/book2.png" data-aos="fade-down" data-aos-delay="300" class="book2" alt="book">

    <img src="./s1/logo.png" class="logo" alt="logo" v-if="!isMobile">
    <img src="./s1/logom.png" class="logo" alt="logo" v-else>
    <div class="txt">
      <h3><span class="t1">成州國小正對面<b>｜</b>均值3房</span>
      <span class="t2">｜書香水岸第一排 8295 3311｜</span></h3>
    </div>
    

  </div>
</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
 // background: url('./s1/pc.jpg') center center no-repeat;
  background-size: contain;

  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //z-index: 3;
}
.img{
  position: absolute;
  top:50%;
  left: 0;
  .imgv{
    width: size(770);
    position: absolute;
    top: size(40);
    left: 0;
  }
  .rabbit{
    position: absolute;
    top:size(-420);
    left: size(210);
    width: size(455);
    img{
      width: 100%;
      vertical-align: bottom;
    }
  }
  .txt{
    position: absolute;
    width:size(197);
    height:size(197);
    color: #fff;
    border-radius: 50%;
    background:#00B451;
    left: size(605);
    top:size(-155);
    font-size:size(30);
    padding: 1.6em 0 0 0;
    line-height: 1.3;
    transform-origin: 0 100%;
    &::before{
      content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2300B451' d='M32.2,0.3l20.8,27L6.2,52c-2.3,1.2-4.7-1.4-3.4-3.6L32.2,0.3z'/%3E%3C/svg%3E%");
      width:size(57);height: size(57);
      position: absolute;
      bottom:0;
      left:size(-15);
    }
    span{
      display: block;font-size: 1.5em;
      b{font-weight: 600;font-size: 1.15em;display: inline-block;vertical-align:-0.07em;}
    }
  }
}
.leaf1{
  position: absolute;
  top: size(130);
  right: size(200);
  width: size(70);
  transform: translate(-150%,-150%);
}
.leaf2{
  position: absolute;
  top: size(10);
  right: size(230);
  width: size(58);
  transform: translate(150%,-150%);
}
.leaf3{
  position: absolute;
  top: size(230);
  right: size(330);
  width: size(100);
  transform: translate(150%,-150%);
}
.leaf4{
  position: absolute;
  top: size(330);
  right: size(265);
  width: size(85);
  transform: translate(150%,-150%);
}
.leaf5{
  position: absolute;
  top: size(490);
  left:size(120);
  width: size(85);
  transform: translate(-150%,-150%);
}
.book1{
  position: absolute;
  top: size(280);
  left:size(170);
  width: size(190);
}
.book2{
  position: absolute;
  top: size(80);
  left:size(235);
  width: size(180);
}
.leaf6{
  position: absolute;
  top: 0;
  right: 0;
  width: size(439);
}

@keyframes ro{
  to {transform:rotate(360deg);}
}
.txtall{
  position: absolute;
  top:calc(50% + (175 - 540) * 100vw / 1920);
  right: 0;
  width: size(1200);
.logo{
  width: size(271);
}
.txt{
  //@include img_c_pc(1200, 140);
 //@extendtop:size(58); //calc(50% + (150 - 540) * 100vw / 1920);
  font-size:size(53);
  line-height: 1.6;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;
  color:#000;
  margin: 1.4em 0 0 0;
  }
h3{
  font-weight: 700;
  b{color: #00B451;}
}
.t1{font-size: 1.14em;display:block;}
.t2{display:inline-block;font-weight: 600;}
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
  background-image: url('./s1/mo.jpg');
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
