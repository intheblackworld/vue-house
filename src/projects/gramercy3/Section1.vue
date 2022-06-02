<template>
  <div class="section1">
  <!--  <img src="./s1/pc.jpg" alt="`${info.caseName}_bg" class="t0">

  <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/3.png" alt="3" class="c4">
      <div class="c3"><img src="./all/3.png" alt="3"></div>
      <img src="./all/2.png" alt="2" class="c2">
      <img src="./all/1.png" alt="1" class="c1">
    </div>  -->
    
 <div class="c">
      <img src="./s1/c2.png" alt="2" class="c3" loading="lazy">
      <img src="./s1/c1.png" alt="2" class="c2" loading="lazy">
      <img src="./s1/c1.png" alt="1" class="c1" loading="lazy">
    </div> 
    <div class="bg"><img src="./s1/h.jpg" alt="1" class="bg-h" v-if="!isMobile" loading="lazy"></div>
    <img src="./s1/bgm.png" v-if="isMobile" alt="1" class="bg" loading="lazy">
    <div class="txt"> <!-- data-aos="zoom-in" -->
      <div class="o"></div>
      <div class="img" v-if="isMobile" data-aos="zoom-in" data-aos-delay="400"><img src="./all/img.png" alt="img" loading="lazy"></div>
      <img src="./s1/logo.png" v-if="!isMobile" data-aos="zoom-in" data-aos-delay="200" alt="logo" class="logo" loading="lazy">
      <img src="./s1/logo_m.png" v-if="isMobile" data-aos="zoom-in" data-aos-delay="200" alt="logo" class="logo" loading="lazy">
      <div class="img" v-if="!isMobile" data-aos="zoom-in" data-aos-delay="400" loading="lazy"><img src="./all/img.png" alt="img" loading="lazy"></div>
      <div class="t1" data-aos="zoom-in" data-aos-delay="400">華城路上唯一精品小豪宅</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">輕總價｜限量19戶｜新店緻美22-24坪</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1060);
  //overflow: hidden;
  position: relative;
  z-index: 2;
// background: url("./s1/bg.jpg") center;
 // background-size: cover;
background: linear-gradient(to bottom, rgb(79, 139, 242) 0%,rgba(118,202,247,1) 22%,rgba(163,233,247,1) 65%,rgba(255,255,255,1) 100%);
}
.bg{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:100%;
  object-fit: cover;
  &::before,
  &::after{
    content:"";
    display: block;
    width: 100%;height: 50%;background-size: cover;}
  &::before{background-image: url("./s1/bg_01.png");background-position: 50% 100%;}
  &::after{background-image: url("./s1/bg_02.jpg");background-position: 50% 0%;}
  .bg-h{
    position: absolute;
    top:calc(50% + (602 - 540) * 100vw / 1920);
    left: calc(50% - 258 * 50vw / 1920);
    width:size(257);
    z-index: 3;
    box-shadow: 1vw -1vw 1vw -.7vw #002840CC;
  }
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
  position: absolute;
  top: 50%;
  left: 0%;
  width: 100%;
  img{position: absolute;
  left: 0%;
  }
  .c1,.c2{width:100%;
  transform: translateX(0%);
  animation: an 25s 0s linear infinite;
  top: -18vw;}
  .c2{
  left: 100%;}
  .c3{width: size(1000);
  transform: translateX(200%);
  animation: an 50s linear infinite;
  top: -23vw;}
  }
@keyframes an{
    to{
  transform: translateX(-100%);
    }
}
.txt{
  position: absolute;
  top:calc(50% + (190 - 540) * 100vw / 1920);
  left:size(1056);
  font-size: size(19);
  line-height: 2.2;
  color: #0083ca;
  text-align: center;
      width:30em;
    letter-spacing:0.09em;
  font-weight: 800;
  .o{position: absolute;
  top:size(-155);left:size(-85);
  width:36.3vw;
  height:36.3vw;
  border-radius: 50%;
  background: #fff;
  &::after{content: ""; 
  display: block;
  position: relative;
  top:size(0);left:size(1);
  border-radius: 50%;
  width: 98%;
  height: 98%;background: #b8e0f2}
  }
.logo{
      width:size(160);
      margin:1.5em auto .5em;
      float: left;
  }
.img{
      width:66%;
    overflow: hidden;
    border-bottom: 2px solid #002840;padding: 6em 1.5em 0 0;
    img{vertical-align:bottom;width:size(99);}
    }
  .t1{
      width:66%;
  color: #002840;
  font-size: 1.7em;
    letter-spacing:0.05em;
    border-bottom: 2px solid #002840;
    overflow: hidden;
      text-align: center;
    }
  .t2{
      width:66%;
  font-size: 1em;
    overflow: hidden;
      text-align: center;
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
    margin: 0;
    background: linear-gradient(to bottom, rgb(79, 139, 242) 0%,rgba(118,202,247,1) 22%,rgba(163,233,247,1) 80%,rgba(255,255,255,1) 100%);
  }
.bg{

  height:auto;

}

.c{width:180%;
  
  .c1,.c2{
  top: -10vw;}
  /*
  .c1{width: sizem(300);
  transform: translateX(50vw);
  top: 0vw;}
  .c2{width: sizem(400);
  transform: translateX(50vw);
  top: 30vw;}
  .c3{width: sizem(350);
  transform: translateX(45vw);
  top:39vw;}
  */
@keyframes an{
    to{
  transform: translateX(-100%);
    }
}

  }
.txt{
   left:sizem(0);
   top:calc(35% + (46 - 650 * .35) * 100vw / 375);
   width: 100%;
  font-size: sizem(14);
  line-height: 1.8;


  .img{
    width:sizem(200);
    margin: 0px auto;    padding: 0em 1.5em 0 0;
    z-index: 3;
    position: relative;
  }

  .img img{
    width:sizem(70);
    margin-top: 1em;
  }
.logo{
   width:sizem(203);float:none;
   margin:1.8em 0 0 .7em;
  }
  .t1{ 
      width:sizem(280);
      margin: 0px auto;
      text-align: center;
      }
  .t2{
      width:100%;
      margin: .5em auto;
    }
  .o{
    top:sizem(-170);
    left:sizem(-88);
    width:sizem(550);
    height:sizem(550);
    &::after{
  width: 106%;
    top:sizem(-10);
    left:-3%;  

    }

  }  
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
