<template>
  <div class="section1">
    <!--   
    <img src="./s1/mo.jpg" alt="`${info.caseName}_bg" class="t0" v-if="isMobile">
 <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/3.png" alt="3" class="c4">
      <div class="c3"><img src="./all/3.png" alt="3"></div>
      <img src="./all/2.png" alt="2" class="c2">
      <img src="./all/1.png" alt="1" class="c1">
    </div>  -->
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="txt">
      <img src="./s1/logo.png" v-if="!isMobile" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
      <img src="./s1/t.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="t1">
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">新店平面別墅  ｜  82、91坪</div>
      <img src="./s1/logo_m.png" v-if="isMobile" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
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
  //overflow: hidden;
  position: relative;
  z-index: 2;
  background: url("./s1/bg.jpg") center;
  background-size: cover;
}
.bg{
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
  span{display: inline-block;
    &:nth-child(1){background:url("./s1/bg1.png") 100% 100%;background-size: cover;
  width:79.8%;
  height: 87.4%;}
    &:nth-child(2){background:url("./s1/bg2.jpg") 0% 100%;background-size: cover;
  width:20.2%;
  height: 87.4%;}
    &:nth-child(3){background:url("./s1/bg3.jpg") 50% 0%;background-size: cover;
  width: 100%;
  height:12.6%;}
  }
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: absolute;
    top:calc(50% + (320 - 540) * 100vw / 1920);
  left:size(400);
  font-size: size(24);
  line-height: 1.6;
  color: #0083ca;
  text-align: center;
  width:size(515);
    letter-spacing:0.09em;
  font-weight: 800;
.logo{
      width:size(157);float: left;
  }
  .t1{
      width:size(325);
      margin-top:size(70) ;
    }
  .t2{
    text-indent: 0.2em;
    }
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
  margin: 0 0 0;
  background-image: url("./s1/bgm.jpg");
  }

.txt{
   left:sizem(0);
   top:calc(40% + (56 - 650 * .4) * 100vw / 375);
   width: 100%;
  font-size: sizem(16.1);
.logo{
   width:sizem(203);float:none;
   margin:1.2em 0 0 2em;
  }
  .t1{ 
      width:sizem(219);}
}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
