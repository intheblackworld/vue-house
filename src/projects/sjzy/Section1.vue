<template>
  <div class="section1">
    <div class="txt">
      <img src="./s1/logo.png" class="logo">
      <!--div v-if="isPC" class="t1"  data-aos="zoom-in" data-aos-delay="600">聯發開發事業有限公司</div-->
    </div>
    <!--div v-if="isMobile" class="t1"  data-aos="zoom-in" data-aos-delay="600">聯發開發事業有限公司</div-->
      <img src="./s1/bg_mask.png" class="mask">
      <img v-if="isPC" src="./s1/srtye_1.png" class="style1">
      <img v-else src="./s1/srtye_1_m.png" class="style1">
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

.mask{
  position: absolute;
  width:size(1920);
  bottom:size(-30);
  left: 0;
  right:0;
} 
.style1{
  position: absolute;
  width:size(550);
  top:0;
  left: 0;
  mix-blend-mode: hard-light ;
} 

.txt{
position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
 top:calc(37% + (120 - 1080 * 0.37) * 100vw / 1920);
  font-size: size(34);
  line-height: 1.35;
  color: #fff;
  text-align: center;
 // width:size(850);
  letter-spacing:0.02em;
  font-weight: 300;
  //filter: drop-shadow(0 0 7px #eff);
.logo{
  position: relative;
  width:size(800);
  }
 .t1{
  font-size: size(20);
  position: absolute;
  right:size(150);
  z-index: 10;
  color: #000;
  bottom:size(30);
  font-weight: 700;
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
    background: url("./s1/bg_m.jpg") center;
    background-size: cover;
  }

.mask{
  width:sizem(375);
  bottom:sizem(0);
  z-index: 1;
} 


.style1{
  width:sizem(160);
  left: sizem(0);
  top: sizem(0)
} 

.t1{
  font-size: sizem(15);
  right:sizem(30);
  bottom:sizem(120);
  position: absolute;
  font-weight: 700;
  z-index: 11;
 }  

.txt{
  font-size: sizem(14);
  top:calc(50% + (100 - 302) * 100vw / 375);
  line-height: 1.1;

.logo{
  width:sizem(300);
  z-index: 10;
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
