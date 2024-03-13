<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   -->

    <a href="https://lin.ee/Ek7kHw1" target="_blank" v-if="!isMobile">
    <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
    </a>

    <div class="imglt" data-aos="zoom-in" data-aos-delay="0" >
    <img src="./s1/f1.png" class="f1" />
    <img src="./s1/f2.png" class="f2" />
    </div>
   <div class="imgrc" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/f3.png" class="f3" />
    <img src="./s1/img.png" class="img" />
    <img src="./s1/name.png" class="name" />
    <img src="./s1/b.png" data-aos="zoom-in" data-aos-delay="300" class="b" />
    </div>
    <img src="./s1/txt.png" class="txt" v-if="!isMobile" />
    <img src="./s1/txtm.png" class="txt" v-else />
    <!-- 
    <div class="txt">
    </div>
    <img src="./s1/t1.png" class="t1" />
      <img src="./s1/light2.png" class="light" />
      <img src="./s1/logo.png" class="logo" />
   -->

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  background: linear-gradient(to bottom, #f45a72, #f55754);
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.lineicon{
  position: fixed;
  width: size(80);
  height: size(80);
  right: size(20);
  bottom: size(120);
  z-index: 99;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
   opacity: .2;
  }
.img0{
    position: absolute;left:size(-120);;width:size(820);
  bottom:size(-520);transform-origin: 0% 50%;
  }

.imglt{position:absolute;top: 0;left: 0;transform-origin: 0% 0%; z-index: 2;height: 100%;
img{position:absolute;}
.f1{width:size(700);
  left:size(-100);
  top:calc(40% + #{size(-20 - 1080*.4)});
  transform: rotate(3deg);
  transform-origin: 10% 10%;
animation: an 3s -.5s ease-in-out infinite alternate;
}
.f2{width:size(570);
  left:size(140);
  top:calc(60% + #{size(410 - 1080*.6)});
  transform: rotate(-5deg);
  transform-origin: 50% 50%;
animation: an 3s -1s ease-in-out infinite alternate;
}
}
.imgrc{position:absolute;top: 0%;right: 0;transform-origin: 100% 50%; z-index:2;height: 100%;
img{position:absolute;}
.f3{width:size(1030);right:size(-180);
  top:calc(60% + #{size(150 - 1080*.6)});
  transform: rotate(2deg);
  transform-origin: 90% 90%;
animation: an 3s  ease-in-out infinite alternate;
}
.img{left:size(-593);
  height:100%;
  max-height:size(980);
  top:calc(20% + #{size(180 - 1080*.2)});
}
.name{width:size(210);right:size(605);
  top:calc(20% + #{size(688 - 1080*.2)});
  filter:drop-shadow(0px 0px 5px #dd423f);
}
.b{width:size(225);right:size(600);
  top:size(95);
}

}
@keyframes an{
  to{
    transform: rotate(0deg);
  }
}
.txt{
  position: absolute;
  left:size(388);
  top:calc(10% + #{size(333 - 1080*.1)});
  width:size(873);
  margin: auto;z-index: 3;

}

.t1{
  position: absolute;
  width:size(906);
  top: size(190);
  left:size(458);
}
.logo{
  position: absolute;
  width:size(495);
  top: size(709);
  left:size(701);
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
  background-size: 250% auto;
  }

  .img0{left:sizem(-150);;width:sizem(390);
  bottom:sizem(-230);transform-origin: 0% 50%;
  }
.imglt{
.f1{width:sizem(250);left:sizem(-30);
  top:calc(10% + #{sizem(-30 - 604*.1)});
}
.f2{width:sizem(240);left:sizem(15);
  top:calc(40% + #{sizem(120 - 604*.4)});}

}
.imgrc{
.f3{width:sizem(420);right:sizem(-150);
  top:calc(90% + #{sizem(200 - 604*.9)});}
.img{left:sizem(-80);
  height:63%;
  //min-height:sizem(375);
  max-height:sizem(1375);
  top:sizem(235);
  transform: translateX(-30%);
}
.name{width:sizem(110);top:sizem(505);right:sizem(105);
  top:calc(50% + #{sizem(505 - 604*.5)});
}
.b{width:sizem(115);top:sizem(130);right:sizem(30);
  top:sizem(130);
}
}
.txt{
  top:calc(50% + (130 - 302) * 100vw / 375);
  width:sizem(214);
  left:sizem(34);
}


.t1{
  width:sizem(300);
  top: sizem(170);
  left:sizem(25);
}
.logo{
  position: absolute;
  width:sizem(200);
  top: sizem(340);
  left:sizem(88);
}

.light{
  position: absolute;
  width:sizem(250);
  top: sizem(305);
  right:sizem(-35);
  z-index: 2;

}

.style{
  width:sizem(580);
  top: sizem(120);
  left:sizem(-130);
  transform: rotate(0.75turn);
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
