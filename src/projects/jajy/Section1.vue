<template>
  <div class="section1">
    <img src="./s1/pc.jpg" class="t0" /><!--   -->
    <img src="./s1/bg.png" class="bg" />
    <img src="./s1/light.png" class="light1" />
    <div class="txt">
    <img src="./s1/light.png" class="light2" />
      <img src="./s1/logo.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
      <div class="t1"  data-aos="zoom-in" data-aos-delay="600">嘉義 璀璨登場</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="800">VAF活氧系統<span></span>市心重劃區<b>2-3</b>房</div>
    </div>

    <!-- 
    <div class="img" data-aos="zoom-in-left">
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
      <div class="t2" data-aos="zoom-in" data-aos-delay="800"><span>玩美2-3房</span>台大竹東分院旁</div>
      <img src="./s1/035957999.png" data-aos="zoom-in" data-aos-delay="1000" alt="035957999" class="phone">
    </div>
      -->
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
  background: url("./s1/bg.jpg") center;
  background-size:100% auto;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:-2.6vw;
  left:0;object-fit: cover;
  opacity: .0;
  }
.bg{
  position: absolute;
  width: 100%;height:auto;
  top:calc(50% + (986 - 540) * 100vw / 1920);
  left:0;object-fit: cover;
  z-index: 1;
  }
.light1{
  position: absolute;
  top: calc(50% + 15.9vw);
  width:size(160);
  left:54.5%;
  z-index: 3;
  animation: light1 3s linear infinite;
  }
.light2{
  position: absolute;
  top: size(55);
  width:size(75);
  left:46.5%;
  z-index: 3;
  transform: rotate(360deg);
      animation: light1 3s linear infinite;
  }
@keyframes light1{
    0%{
      transform: rotate(180deg) scale(.3);
    }
    50%{
      transform: rotate(0) scale(1);
    }
    100%{
      transform: rotate(-180deg)scale(.3);
    }
}
.txt{
  position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
 top: size(124);
 top:calc(37% + (124 - 1080 * 0.37) * 100vw / 1920);
  font-size: size(45);
  line-height: 1.35;
  color: transparent;
  text-align: center;
 // width:size(850);
    letter-spacing:0.02em;
  font-weight: 700;
  filter: drop-shadow(0 0 7px #eff);
.logo{
  position: relative;
  margin:0 auto 0.35em;
  top: calc(50% - 19vw);
  width:size(397);
  }
  
  .t1{
  background: linear-gradient(135deg, #006180 38%,#2180a4 44%,#006180 50%,#2180a4 56%,#006180 62%);//#006180 #2180a4
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.43em;font-weight: 900;
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: 2px;
    width: 1.6em;
    background: #006180;
    vertical-align: middle;
    margin:-0.2em 0.55em 0;
    }
    }
  .t2{font-weight: 900;
  background: linear-gradient(135deg, #006180 38%,#2180a4 44%,#006180 50%,#2180a4 56%,#006180 62%);//#006180 #2180a4
  background-clip: text;
  span{display: inline-block;
  &::after{
    content: "";
    display: inline-block;
    width: 2px;
    height: 0.82em;
    background: #006180;
    vertical-align: middle;
    margin:-0.2em 0.45em 0;
  }
  }
  b{font-size: 1.2em;font-weight: 900;
    vertical-align: -.05em;}
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
  }
.img{top:calc(50% + 10vw);
  width:sizem(208);
  right:sizem(-48);
    .img2{
    top: -13%;
    left: 30%;
    width: 25.2%;

    }
    .img3{
    top: -18%;
    left: 16%;
    width: 51.9%;

    }
}


.logo{
  width:sizem(287);
  top: calc(50% - 35vw);
  }
.txt{
  font-size: sizem(24);
  top:calc(50% + (220 - 302) * 100vw / 375);
  left:sizem(-62);
  .t1{
  font-size: 0.73em;

  }
  .t2{

  span{display: block;
    width: sizem(165);
    margin: auto;
  border: 1px solid currentColor;
  &::after{
    display: none;
  }
  }

    }
  .phone{
        margin:0em auto 0;
    width: sizem(165);}
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
