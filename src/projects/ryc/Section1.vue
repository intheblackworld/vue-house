<template>
  <div class="section1">
  <!--
    <img src="./s1/02.jpg" class="t0" alt="">
  -->
    <img src="./s1/k.png" class="img2" alt="睿暘沁_k"
          data-aos="fade"
          data-aos-delay="100">
    <img src="./s1/l.png" class="img1" alt="睿暘沁_l"
          data-aos="fade"
          data-aos-delay="100">
    <img src="./s1/logo.png" class="logo" alt="睿暘沁_LOGO"
          data-aos="fade"
          data-aos-delay="200">
    <div class="txt">
          <div class="t1"
          data-aos="fade"
          data-aos-delay="200">三重新都心微型飯店宅</div>
          <div class="t2"
          data-aos="fade"
          data-aos-delay="300">
          <span>總價</span><b>588</b><span>萬起</span><b class="t2_bo">10-17</b>坪</div>
          <div class="t3"
          data-aos="fade"
          data-aos-delay="400">租金價買新房<span></span>送全室裝修</div>
    </div>
<div class="box_all">
  <span data-aos="fade" data-aos-delay="200"></span>
  <span data-aos="fade" data-aos-delay="300"></span>
  <span data-aos="fade" data-aos-delay="100"></span>
  <span data-aos="fade" data-aos-delay="200"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="300"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="100"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="200"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="300"></span>
  <span data-aos="fade" data-aos-delay="100"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="200"></span>
  <span data-aos="fade" data-aos-delay="100"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="200"></span>
  <span data-aos="fade" data-aos-delay="0"></span>
  <span data-aos="fade" data-aos-delay="300"></span>
  <span data-aos="fade" data-aos-delay="100" v-if="isPC"></span>
  <span data-aos="fade" data-aos-delay="0" v-if="isPC"></span>
  <span data-aos="fade" data-aos-delay="200" v-if="isPC"></span>
  <span data-aos="fade" data-aos-delay="100" v-if="isPC"></span>
</div>
  <div class="box1" data-aos="fade" data-aos-delay="100"></div>
  <div class="box2" data-aos="fade" data-aos-delay="100"></div>
  <div class="box3" data-aos="fade" data-aos-delay="100"></div>
  <div class="box4" data-aos="fade" data-aos-delay="100" v-if="isMobile"></div>
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
  margin: 0 0 8vw 0;
 // background: #000
}

.t0{
  @include img_r_pc(1920, 0,0);
opacity: 0.3;
}
.img1 {
  @include img_c_pc(476, 330);
top:calc(50% + 100vw * (330 - 540) / 1920);
transform: scale(0.5);
transform-origin: 50% 70%;
z-index: 5;
}
.img2 {
  @include img_c_pc(718, 340);
top:calc(50% + 100vw * (340 - 540) / 1920);
transform: scale(0.5);
transform-origin: 50% 70%;
z-index: 5;
}
.txt{
z-index: 5;
  font-size: size(61);
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.6;
  color: #000;
  @include img_c_pc(1910, 408);
  top:calc(50% + 100vw * (408 - 540) / 1920);
}
.t1{
transform: scale(0.5);
transform-origin: 50% 120%;
}
.t2{
  margin: 0.5em 0 0 -0.0em;
  font-size: 1.25em;
transform: scale(0.5);
transform-origin: 50% 70%;
  span{
    display:inline-block;width: 1em;line-height: 1;font-size: 0.52em
  }
  .t2_bo{
    margin: 0 -0.1em 0 0.1em;
    padding: 0 0 0 0.2em;position: relative;
    &::after{
      content: "";width: 0.03em;height: .8em;display: block;position: absolute;left: 0;top: calc(52% - 0.4em);
    background:#000;
    }
  }
  b{
    position: relative;
    font-size: 1.3em;display:inline-block;
    font-weight: 800;
    font-family: Arial;
    color: #3B84C5;
    letter-spacing: -0.05em;
    transform: scaleX(0.9);transform-origin: center;
  }
}
.t3{
  font-size:0.9em;margin: -.5em 0 0 0;
transform: scale(0.5);
transform-origin: 50% 70%;
}

.logo {
  @include img_c_pc(607, 165);
  top:calc(50% + 100vw * (165 - 540) / 1920);
transform: scale(0.5);
transform-origin: 50% 70%;
z-index: 5;
// top:calc(50% + 100vw * (1230 - 540) / 1920);
}
.box_all{
  position: absolute;left: 0;bottom: -11vw;
width: 100%;
  //height:50vw;
display: flex; flex-wrap:wrap;
align-items:stretch;justify-content:center;
span{display: block;height: 8vw;background: #3A87C8;flex:1 1 8vw;transform: scale(.0);
&:nth-child(1){background: #3A87C8;border-radius: 0 100% 0 0 ;transform-origin: 0 100%;}
&:nth-child(2){background: #47A2DA;border-radius: 0 0 100% 0 ;transform-origin: 0 0;}
&:nth-child(3){background: #9ACFF0;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(4){background: #47A2DA;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(5){background: #A3D5C1;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(6){background: #47A2DA;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(7){background: #A8D4A3;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(8){background: #3A87C8;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(9){background: #D7EEFB;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(10){background: #47A2DA;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(11){background: #D7EEFB;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(12){background: #A8D4A3;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(13){background: #47A2DA;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(14){background: #9ACFF0;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(15){background: #A8D4A3;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(16){background: #9ACFF0;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(17){background: #47A2DA;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(18){background: #9ACFF0;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(19){background: #D7EEFB;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(20){background: #9ACFF0;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(21){background: #47A2DA;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(22){background: #A3D5C1;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(23){background: #9ACFF0;border-radius: 0 0 0 100%;transform-origin: 100% 0%;}
&:nth-child(24){background: #47A2DA;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
}
}
.box1{@include div_r_pc(520, 520, 0, 0);z-index: 0;background: #9ACFF0;border-radius: 0 0 0 100% ;top: auto;bottom:-48vw;transform: scale(0);transform-origin: 100% 0%;}
.box2{@include div_l_pc(520, 520, 0, 0);z-index: 0;background: #A3D5C1;border-radius: 0 100% 0 0 ;top: auto;bottom:-74vw;transform: scale(0);transform-origin: 0% 100%;}
.box3{@include div_r_pc(520, 520, 0, 0);z-index: 0;background: #D7EEFB;border-radius: 100% 0 0 0 ;top: auto;bottom:-107vw;transform: scale(0);transform-origin: 100% 0%;}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 sizem(0) 0;
  }
.img1 {
  @include img_c_m(284, 165);
  top:calc(50% + 100vw * (140 - 667 * .5) / 375);
}
.img2 {
  @include img_c_m(284, 175);
  top:calc(50% + 100vw * (165 - 667 * .5) / 375);
}
.txt{
  top:calc(50% + 100vw * (186 - 667 * .5) / 375);
  font-size: sizem(24);
}
.logo {
  @include img_c_m(241, 88);
top:calc(50% + 100vw * (88 - 667 * .5) / 375);
}
.box_all{
  position: absolute;left: 0;bottom: -55vw;
width: 100%;
  //height:50vw;
display: flex; flex-wrap:wrap;
align-items:stretch;justify-content:center;
span{display: block;height: 24vw;background: #3A87C8;flex:1 1 24vw;
&:nth-child(1){background: #A3D5C1;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(2){background: #47A2DA;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(3){background: #D7EEFB;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(4){background: #9ACFF0;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(5){background: #47A2DA;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(6){background: #9ACFF0;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(7){background: #47A2DA;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(8){background: #A3D5C1;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(9){background: #9ACFF0;border-radius: 0 0 0 100% ;transform-origin: 100% 0%;}
&:nth-child(10){background: #A8D4A3;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(11){background: #D7EEFB;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(12){background: #47A2DA;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(13){background: #47A2DA;border-radius: 0 100% 0 0 ;transform-origin: 0% 100%;}
&:nth-child(14){background: #9ACFF000;border-radius: 0 0 0 100% ;}
&:nth-child(15){background: #3A87C8;border-radius: 100% 0 0 0 ;}
&:nth-child(16){background: #9ACFF0;border-radius: 0 0 0 100% ;}
&:nth-child(17){background: #3A87C8;border-radius: 100% 0 0 0 ;transform-origin: 100% 100%;}
&:nth-child(18){background: #47A2DA;border-radius: 0 0 100% 0 ;transform-origin: 0% 0%;}
&:nth-child(19){background: #A8D4A3;border-radius: 0 100% 0 0 ;}
&:nth-child(20){background: #D7EEFB;border-radius: 0 0 100% 0 ;}

}

}
.box1{height: 75vw;width: 75vw;bottom:-81vw;}
.box2{height: 75vw;width: 75vw;bottom:-145vw;}
.box3{height: 75vw;width: 75vw;bottom:-350vw;}
.box4{
  position: absolute;z-index: 0;
  background: #A8D4A3;border-radius: 0 100% 0 0 ;top: auto;bottom:-125vw;
  height: 75vw;width: 75vw;bottom:-380vw;
  }

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
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
