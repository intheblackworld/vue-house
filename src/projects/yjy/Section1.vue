<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   -->
   
   <div class="img">
    <img src="./s1/1.png" class="img1" />
    </div>
    <div class="txt">
      <div class="logo" data-aos="zoom-in" data-aos-delay="0" >
      <img src="./s1/logo.png" class="logo1">
    </div>
      <div class="t1"  data-aos="zoom-in" data-aos-delay="600">樹林市心壓軸2字頭</div>

      <div class="t2" v-if="isPC" data-aos="zoom-in" data-aos-delay="800">萬大線捷運預定站<span></span>雙併73-76坪<span></span>02-7709-2200</div>
      <div class="t2" v-else data-aos="zoom-in" data-aos-delay="800">萬大線捷運預定站<br>雙併73-76坪<span></span>02-7709-2200</div>
      
    </div>
      <div class="t3" >● 本案為乙種工業用地</div>
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
    bottom:0;
    right: size(-100);
    height:65%;
  }
  .img1{
    position: relative;
    height: 100%;
  }
  .t3{
  position: absolute;
  font-size: size(20);
  bottom: size(50);
  left:size(220) ;
  font-weight: 500;
  color:#fff;
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
  height: 100%;
  //filter: drop-shadow(0 0 7px #eff);
.logo1{
  position: relative;
  width:100%;
  }
.logo{
  position: absolute;
  top: size(37);
  left:size(340) ;
  width:size(515);
  }
.logo2{
  position: absolute;
  width:100%;
  top: 0;
  left: 0;opacity: 0;
  width:size(1410);
  }

  
  .t1{
  position: absolute;
  font-size: size(41);
  top: size(445);
  left:size(420) ;
  font-weight: 700;
  color:#FFF000;
  }

  

  .t2{
  position: absolute; 
  font-size: size(30);
  top: size(515);
  left:size(220) ; 
  font-weight: 500;


  span{display: inline-block;
  &::after{
    content: "";
    display: inline-block;
    width: 2px;
    height: 0.82em;
    background: #fff;
    vertical-align: middle;
    margin:-0.2em 1em 0;
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

    background: url("./s1/bg_m.jpg") center;
  }
  .img{
    position: absolute;
    width: 100%;
    height: auto;
    right: 0;
  }
  .img1{
    bottom:sizem(-25);
    width:sizem(470);
    height: auto;
    left: sizem(-95);

  }
.txt{
  font-size: sizem(14);
  top:calc(50% + (48 - 302) * 100vw / 375);
  line-height: 1.1;
  padding: 0;

.logo{
  width:sizem(250);
  top:sizem(10);
  }

  .t1{
    font-size: sizem(26);
    position: absolute;
    top:sizem(210);
    left: sizem(75);
  }

  .t2{
    position: absolute;
    line-height: sizem(30);
    font-size: sizem(20);
    top:sizem(250);
    left: sizem(40);

    span{
    display: inline-block;
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
