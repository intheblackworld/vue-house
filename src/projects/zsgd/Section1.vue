<template>
  <div class="section1">
    <img src="./s1/pc.jpg" class="t0"><!--   -->
    <div class="img">
      <img src="./s1/1.png" alt="img" class="img1">
      <img src="./s1/2.png" alt="img" class="img2">
      <img src="./s1/butterfly.gif" alt="img" class="img3">
    </div>
    <div class="logo">
      <img src="./s1/logo1.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo1">
      <img src="./s1/logot.png" data-aos="zoom-in" data-aos-delay="200" alt="logo" class="logot">
      <img src="./s1/logof.png" data-aos="fade" data-aos-delay="400" alt="logo" class="logof">
    </div>

    <div class="txt">
      <div class="t1"  data-aos="zoom-in" data-aos-delay="600">居高美地 風尚生活宅</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="800">玩美2-3房｜<span>台大竹東分院旁</span></div>
      <img src="./s1/035957999.png" data-aos="zoom-in" data-aos-delay="1000" alt="035957999" class="phone">
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
 // overflow: hidden;
  position: relative;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
.img{
      position: absolute;right:0;top:calc(50% + 3.5vw);
      width:size(730);
    // top:calc(50% + (0 - 540) * 100vw / 1920);
    .img1{
      width:100%;
      transform:skewY(-5deg);
      transform-origin: 100% 90%;
      animation: an 5s linear alternate infinite;

      }
    .img2{
      position: absolute;
      top: -5%;
      left: 46%;
      width: 22.2%;
      transform:translateY(10%);
      animation: an 5s linear alternate infinite;
      }
    .img3{
      position: absolute;
      top: -11%;
      left: 33%;
      width: 43.9%;
      transform: rotate(10deg)translateY(3%) ;
      animation: an 3s linear alternate infinite;
      }

  }


@keyframes an{
    to{
      transform: translateX(0);
    }
}
.logo{
  position: relative;
  margin: auto;
  top: calc(50% - 19vw);
  width:size(994);
  .logo1{width: 70.8%;margin: auto auto 1%;}
  .logot{width: 100%;}
  .logof{width: 10.1%;position: absolute;
    bottom: 2%;
    right: 14.3%;
    }
  }
.txt{
  position: absolute;
      top:calc(50% + (618 - 540) * 100vw / 1920);
  left:size(382);
  font-size: size(47);
  line-height: 1.6;
  color: #fff;
  text-align: center;
 // width:size(850);
    letter-spacing:0.02em;
  font-weight: 700;

  .t1{
  color: #717071;
  font-size: 1.38em;
    }
  .t2{
  span{font-weight: 900;}
  }
  .phone{
        margin:0.5em auto 0;
    width: size(600);}

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
&::before{
  background-size:sizem(700);
}
  }

.c{
   top:calc(50% + (0 - 302) * 100vw / 375);
    .c1{width:sizem(245);top:sizem(422);left: sizem(70);}
    .c2{width:sizem(230);top:sizem(310);left: sizem(-5);}
    .c3{width:sizem(161);top:sizem(309);left:sizem(130);}
    .c4{width:sizem(182);top:sizem(420);left:sizem(186);}
}

.logo{
   width:sizem(276);  margin-left:sizem(25);
  }
.txt{
   left:sizem(0);
   top:calc(50% + (76 - 302) * 100vw / 375);
   width: 100%;
  font-size: sizem(20);
  .t1{ 
        margin:0.5em 0 0; }
  .t2{
    letter-spacing: 0.04em;
        margin:0;
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
