<template>
  <div class="section1">
     <!--      <img src="./s1/pc.jpg" alt="`${info.caseName}_bg" class="t0">

 <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/3.png" alt="3" class="c4">
      <div class="c3"><img src="./all/3.png" alt="3"></div>
      <img src="./all/2.png" alt="2" class="c2">
      <img src="./all/1.png" alt="1" class="c1">
    </div>  -->
    
 <div class="c">
      <img src="./s1/c2.png" alt="2" class="c2">
      <img src="./s1/c2.png" alt="2" class="c3">
      <img src="./s1/c1.png" alt="1" class="c1">
    </div> 
    <img src="./s1/bg.png" v-if="!isMobile" alt="1" class="bg">
    <img src="./s1/bgm.png" v-if="isMobile" alt="1" class="bg">
    <div class="txt">
      <div class="o"></div>
      <div class="img"><img src="./all/img.png" alt="img"></div>
      <img src="./s1/logo_m.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
      <div class="t1" data-aos="zoom-in" data-aos-delay="400">擁有城市中的寧靜</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">新店平面別墅｜45-64坪</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  z-index: 2;
// background: url("./s1/bg.jpg") center;
 // background-size: cover;
background: linear-gradient(to bottom, rgba(79,139,242,1) 0%,rgba(118,202,247,1) 22%,rgba(163,233,247,1) 34%,rgba(198,243,255,1) 42%,rgba(224,251,255,1) 52%,rgba(255,255,255,1) 100%);
}
.bg{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height:100%;
  object-fit: cover;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
  position: absolute;
  top: 50%;
  left: 50%;
  img{position: absolute;
  left: 0%;
  }
  .c1{width: size(720);
  transform: translateX(25vw);
  animation: an 40s -10s linear infinite;opacity: 0.9;
  top: -10vw;}
  .c2{width: size(903);
  transform: translateX(-9vw);opacity: 0.8;
  animation: an 25s linear infinite;
  top: 6vw;}
  .c3{width: size(800);
  transform: translateX(1vw);opacity: 0.8;
  animation: an 25s -13s linear infinite;
  top: 6vw;}
  }
@keyframes an{
    to{
      transform: translateX(calc(-50vw - 100%));
    }
}
.txt{
  position: absolute;
    top:calc(50% + (320 - 540) * 100vw / 1920);
  right:size(180);
  font-size: size(24);
  line-height: 1.6;
  color: #0083ca;
  text-align: center;
      width:13.2em;
    letter-spacing:0.09em;
  font-weight: 800;
  .o{position: absolute;
  top:size(-525);left:size(-175);
  width:90vw;
  height:90vw;
  border-radius: 50%;
  background: #fff;
  &::after{content: ""; 
  display: block;
  position: relative;
  top:size(20);left:size(13);
  border-radius: 50%;
  width: 100%;
  height: 100%;background: #b8e0f2}
  }
.img{
      width:100%;
    border-bottom: 2px solid #002840;padding: 0 1.5em 0 0;
    img{vertical-align:bottom;width:size(99);}
    }
.logo{
      width:100%;
      margin:1.5em auto .5em;
  }
  .t1{
      width:100%;
  color: #002840;
  font-size: 1.6em;
    letter-spacing:0em;
    border-bottom: 2px solid #002840;
    }
  .t2{
      width:100%;
  font-size: 1.05em;
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

   background:linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(179,204,232,1) 60%,rgba(114,149,204,1) 100%);
 // background-image: url("./s1/bgm.jpg");background-size: cover;

  }

.c{
  .c1{width: sizem(300);
  transform: translateX(50vw);
  top: 0vw;}
  .c2{width: sizem(400);
  transform: translateX(50vw);
  top: 30vw;}
  .c3{width: sizem(350);
  transform: translateX(45vw);
  top:39vw;}

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
