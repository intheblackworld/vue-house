<template>
  <div class="section1">
  <!--
  -->
    <img src="./s1/01.jpg" class="t0" alt="">
    <img src="./s1/l.png" class="img1" alt="睿暘沁_l"
          data-aos="fade"
          data-aos-delay="0">
    <img src="./s1/k.png" class="img2" alt="睿暘沁_k"
          data-aos="fade"
          data-aos-delay="0">
    <img src="./s1/logo.png" class="logo" alt="睿暘沁_LOGO"
          data-aos="fade"
          data-aos-delay="0">
    <div class="txt">
          <div class="t1"
          data-aos="fade"
          data-aos-delay="100">三重新都心微型飯店宅</div>
          <div class="t2"
          data-aos="fade"
          data-aos-delay="100">
          <span>總價</span><b>588</b><span>萬起</span><b class="t2_bo">10-17</b>坪</div>
          <div class="t3"
          data-aos="fade"
          data-aos-delay="100">租金價買新房<span></span>送全室裝修</div>
    </div>
<div class="box_all">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
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
  margin: 0 0 0 0;
 // background: #000
}

.t0{
  @include img_r_pc(1920, 0,0);

}
.img1 {
  @include img_c_pc(476, 330);
top:calc(50% + 100vw * (330 - 540) / 1920);

}
.img2 {
  @include img_c_pc(718, 340);
top:calc(50% + 100vw * (340 - 540) / 1920);
}
.txt{
  font-size: size(61);
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.6;
  color: #000;
  @include img_c_pc(976, 408);
  top:calc(50% + 100vw * (408 - 540) / 1920);
}
.t2{
  margin: 0.5em 0 0 -0.0em;
  font-size: 1.25em;
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
}

.logo {
  @include img_c_pc(607, 165);
  top:calc(50% + 100vw * (165 - 540) / 1920);
// top:calc(50% + 100vw * (1230 - 540) / 1920);
}
.box_all{
  position: absolute;left: 0;bottom: 0;
width: 100%;
display: flex;
span{display: block;height: calc(100vw / 12);width: calc(100vw / 12);background: #3A87C8;flex-wrap:wrap;
&:nth-child(1){background: #3A87C8;border-radius: 0 100% 0 0 ;}
&:nth-child(2){}
&:nth-child(3){}
&:nth-child(4){}
&:nth-child(5){}
&:nth-child(6){}
&:nth-child(7){}
&:nth-child(8){}
&:nth-child(9){}

}

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 sizem(450) 0;
  }
.t1 {
  @include img_c_m(264, 75);
  top:calc(50% + 100vw * (75 - 667 * .5) / 375);
}
.t2{
  @include img_c_m(375, 485);
  font-size: sizem(29.5);
top:calc(50% + 100vw * (485 - 540) / 1920);
}
.t3 {
  @include img_c_m(254, 462);
top:calc(50% + 100vw * (462 - 667 * .5) / 375);
}

.logo {
  @include img_c_m(158, 750);
top:calc(50% + 100vw * (750 - 667 * .5) / 375);
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
