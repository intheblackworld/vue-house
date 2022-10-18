<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   -->
   
   <div class="img">
    <img src="./s1/1.png" class="img1" />
    <img src="./s1/light1.png" class="light8" />
    </div>
    <div class="txt">
      <div class="logo" data-aos="zoom-in" data-aos-delay="0" >
      <img src="./s1/light3.png" class="light3">
      <img src="./s1/light3.png" class="light4">
      <img src="./s1/light3.png" class="light5">
      <img src="./s1/light3.png" class="light6">
      <img src="./s1/light3.png" class="light7">
      <img src="./s1/logo.png" class="logo1">
      <img src="./s1/light1.png" class="light1">
      <img src="./s1/light2.png" class="light2">
    </div>
      <div class="t1"  data-aos="zoom-in" data-aos-delay="600">人生幾何<span> </span>能夠如此心動</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="800">七期生活圈<span></span>文心大道<span></span>雙捷恆鑽地段</div>
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
  background: url("./s1/bg.jpg") center;
  background-size: 100% auto;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
  opacity: .5;
  }
  .img{
    position: absolute;
    bottom:6%;left: calc(50% + 5vw);
    height:65%;
  }
  .img1{
    position: relative;
    height: 100%;
  }
  .light8{
  position: absolute;
    width: 20%;
    bottom: 38%;
    left: 25%;
    animation: light3 2s linear infinite;
  }
@keyframes light3{
    0%{
      transform:rotate(-90deg) scale(0);opacity: 1;
    }
    50%{
      transform:rotate(0deg)  scale(1.5,.8);opacity: 1;
    }
    100%{
      transform:rotate(90deg)  scale(.8,1.5);opacity: 0;
    }
}

.txt{
  position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
 top:calc(37% + (200 - 1080 * 0.37) * 100vw / 1920);
  font-size: size(34);
  line-height: 1.35;
  color: #fff;
  text-align: center;
 // width:size(850);
    letter-spacing:0.02em;
    padding: 0 16em 0 0;
  font-weight: 300;
  //filter: drop-shadow(0 0 7px #eff);
.logo1{
  position: relative;
  width:100%;
  }
.logo{
  position: relative;
  margin:0 auto -6em 3.5em;
  width:size(1410);
  }
.logo2{
  position: absolute;
  width:100%;
  top: 0;
  left: 0;opacity: 0;
  width:size(1410);
  }
@keyframes light1{
    0%{
      transform: scale(0) translateY(-5vw);opacity: 1;
    }
    40%{
      transform: scale(1) translateY(0);;opacity: 1;
    }
    60%{
      transform:  scale(2)  translateY(1vw);;opacity: 0;
    }
    100%{
      transform:  scale(2)  translateY(1vw);;opacity: 0;
    }
}
@keyframes light2{
    0%{
      transform: scale(0);opacity: 1;
    }
    60%{
      transform: scale(1);opacity: 1;
    }
    100%{
      transform: scale(3,1);opacity: 0;
    }
}

  .light1{
  position: absolute;
    width: 10%;
    top: 28%;
    left: 43%;
      transform: scale(0);
      transform-origin: 50% 0%;opacity: 1;
      animation: light1 2s linear infinite;
  }

  .light2{
  position: absolute;
    width: 71%;
    top: 38.5%;
    left: 8.5%;transform: scale(0);opacity: 1;
      animation: light2 2s linear infinite;
  }
.light3{
  position: absolute;
    width: 16%;
    top: 39%;
    left: 42.5%;
      animation: light3 2s linear infinite;
  }
.light4{
  position: absolute;
    width: 16%;
    top: 35.5%;
    left: 45.5%;
      animation: light3 2s linear infinite;
  }
.light5{
  position: absolute;
    width: 16%;
    top: 34.5%;
    left: 48.6%;
      animation: light3 2s linear infinite;
  }
.light6{
  position: absolute;
    width: 16%;
    top: 35.5%;
    left: 52%;
      animation: light3 2s linear infinite;
  }
.light7{
  position: absolute;
    width: 16%;
    top: 39%;
    left: 55%;
      animation: light3 2s linear infinite;
  }

  
  .t1{
  font-size: 1.6em;
  font-weight: 700;
    }
  .t2{
  font-size: 0.94em;
  span{display: inline-block;
  &::after{
    content: "";
    display: inline-block;
    width: 2px;
    height: 0.82em;
    background: #fff;
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
  background-size: 250% auto;
  }
  .img{
    bottom:calc(40% - 60vw);left: 7%;
    height:auto;width: 63%;
  }
  .img1{
    position: relative;
    width: 100%;
    height: auto;
  }
.txt{
  font-size: sizem(14);
  top:calc(50% + (15 - 302) * 100vw / 375);
  line-height: 1.1;
.logo{
  width:sizem(620);
  margin:0 auto -6em sizem(-55);
  }
  .t1{font-size: 1.50em;
    position: absolute;
    top:sizem(200);
    right: sizem(65);
    width: 1.2em;
    span{
    display:block;
    height:1px;width: 1;
    margin:0.2em 0;}
  }

  .t2{
    position: absolute;
    top:sizem(230);
    right: sizem(95);
    width: 1.2em;
    span{
    display:block;
  &::after{
    background: #fff0;
    height:2px;
    display:block;
    margin:0.2em 0;
  }
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
