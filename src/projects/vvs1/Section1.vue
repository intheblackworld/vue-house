<template>
  <div class="section1">
    
    <img src="./s1/pc.jpg" class="t0" />
    <!-- <img src="./s1/bg-m.png" class="bg" v-if="isMobile" />
    <img src="./s1/bg.png" class="bg" v-else />  -->
    <img src="./s1/1.png" class="img1" />
    <div class="txt">
      <img src="./s1/logo.png" data-aos="zoom-in" data-aos-delay="0" alt="logo" class="logo">
      <div class="t1"  data-aos="zoom-in" data-aos-delay="600">人生幾何<span> </span>能夠如此心動</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="800">市政特區<span></span>文心大道<span></span>雙捷恆鑽地段</div>
    </div>

    <!-- 
    <img src="./s1/light.png" class="light2" />
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
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
  opacity: .0;
  }
  .img1{
    position: absolute;
    bottom: 0;right: size(140);
    width: size(810);
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
.logo{
  position: relative;
  margin:0 auto -6em 3.5em;
  width:size(1410);
  }
  
  .t1{
  font-size: 1.6em;
  font-weight: 700;
    }
  .t2{
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
  }
  .img1{
    bottom: 0;right:auto;left: 0;
    width: sizem(305);
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
