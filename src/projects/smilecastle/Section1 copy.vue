<template>
  <div class="section1">
    <img src="./s1/pc.jpg" class="t0" />
    <!-- 
   -->

    <a href="https://lin.ee/Ek7kHw1" target="_blank" v-if="!isMobile">
    <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
    </a>


      <img src="./s1/style1.png" class="style style1" />
      <img src="./s1/style2.png" class="style style2" />
      <img src="./s1/style3.png" class="style style3" />
    <div class="imglt" data-aos="zoom-in" data-aos-delay="0" >
    <img src="./all/f2.png" class="f2" />
    </div>
   <div class="imgrc" data-aos="zoom-in" data-aos-delay="0">
    <img src="./all/f1.png" class="f1" />
    </div>
    <div class="txt">
    </div>
    <img src="./s1/t1.png" class="t1" />
      <img src="./s1/light2.png" class="light" />
      <img src="./s1/logo.png" class="logo" />

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
   opacity: .5;
  }
.img0{
    position: absolute;left:size(-120);;width:size(820);
  bottom:size(-520);transform-origin: 0% 50%;
  }

.imglt{position:absolute;top: 0;left: 0;transform-origin: 0% 0%; z-index: 2;
img{position:absolute;}
.f1{width:size(227);top:size(-435);left:size(295);
  transform: rotate(-153.43deg);transform-origin: 90% 100%;
animation: an1 3s -.5s ease-in-out infinite alternate;
}
.f2{width:size(600);top:size(345);left:size(-90);
  transform-origin: -10% -10%;transform: rotate(4deg);
animation: an 3s ease-in-out infinite alternate;}
.f3{width:size(100);top:size(-390);left:size(150);
  transform: rotate(132.06deg);transform-origin: 90% 100%;
animation: an2 3s -.8s ease-in-out infinite alternate;}
.f4{width:size(444);top:size(-19);left:size(-155);
  transform-origin: 0% 0%;transform: rotate(3deg);
animation: an 3s -.2s ease-in-out infinite alternate;}
.f5{width:size(351);top:size(-70);left:size(51);transform-origin: 0% 0%;transform: rotate(5deg);
animation: an 3s -.4s ease-in-out infinite alternate;}
.f6{width:size(290);top:size(7);left:size(224);transform-origin: 0% 0%;transform: rotate(4deg);
animation: an 3s -.6s ease-in-out infinite alternate;}

}
.imgrc{position:absolute;top: 0%;right: 0;transform-origin: 100% 50%; z-index:2;
img{position:absolute;}
.f1{width:size(600);top:size(84);right:size(-273);transform-origin: 90% 100%;transform: rotate(-4deg);
animation: an 3s -.2s ease-in-out infinite alternate;}
.f2{width:size(145);top:size(195);right:size(-101);transform-origin: 90% 100%;transform: rotate(-3deg);
animation: an 3s -.4s ease-in-out infinite alternate;}
.f3{width:size(170);top:size(-370);right:size(-250);
transform: rotate(-29.76deg);transform-origin: 90% 100%;
animation: an3 3s ease-in-out infinite alternate;}

}
@keyframes an{
  to{
    transform: rotate(0deg);
  }
}
@keyframes an1{
  to{
    transform: rotate(-156.43deg);
  }
}
@keyframes an2{
  to{
    transform: rotate(129.06deg);
  }
}
@keyframes an3{
  to{
    transform: rotate(-27.76deg);
  }
}

.txt{
  position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
  top:calc(50% + (375 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(40);
  line-height: 1.7;
  color: #310;
  text-align: center;
  width:size(630);
    letter-spacing:0.07em;
    padding: 0;
  font-weight: 300;
  margin: auto;

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

.light{
  position: absolute;
  width:size(450);
  top: size(649);
  right:size(485);
  z-index: 2;
}
.style{
  position: absolute;
  width:size(1900);
  top: size(-180);
  left:size(-30);
  mix-blend-mode:plus-lighter;
  z-index: 2;
  opacity: 1;
  animation: style 1s ease-in-out infinite alternate;

}
.style2{animation-delay: -.5s;}
.style3{animation-delay: -1s;}

@keyframes style{
  to{
    opacity: 0;
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
  background-size: 250% auto;
  }

  .img0{left:sizem(-150);;width:sizem(390);
  bottom:sizem(-230);transform-origin: 0% 50%;
  }
.imglt{
.f1{width:sizem(183);top:sizem(-90);left:sizem(-40);}
.f2{width:sizem(230);top:sizem(-30);left:sizem(-50);}
.f3{width:sizem(50);top:sizem(-240);left:sizem(70);}
.f4{width:sizem(222);top:sizem(-62);left:sizem(-135);}
.f5{width:sizem(176);top:sizem(-68);left:sizem(-11);}
.f6{width:sizem(145);top:sizem(-26);left:sizem(73);}

}
.imgrc{
.f1{width:sizem(200);top:sizem(430);right:sizem(-65);}
.f2{width:sizem(45);top:sizem(255);right:sizem(-30);}
.f3{width:sizem(60);top:sizem(65);right:sizem(-110);}
}
.txt{
  font-size: sizem(20);
  top:calc(50% + (260 - 302) * 100vw / 375);
  width:sizem(300);
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
