<template>
  <div class="section1">
    <div>
      <img src="./s1/1.jpg" alt="" class="t0">
   	<!--   <img src="./s1/bg.jpg" alt="" class="bg">
	<img src="./s1/pc.jpg" alt="" class="t0">
		<img src="./s1/imgbg.png" alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="0" class="imgbg">
		<img src="./s1/img.png" alt="" data-aos="fade" data-aos-duration="800" data-aos-delay="700" class="img">  -->
<div class="txt">
		<img src="./s1/logo.png" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="200" class="logo">
		<img src="./s1/t.png" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="200" class="t">
    </div>
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
  overflow: hidden;
  position: relative;
  //background:#f8dee1;
  z-index: 2; 
}
.t0{
  position: absolute;
  width: 100%;height: 100%;
  top: 0;left: 0;object-fit: cover;
  }
.bg{
  position: absolute;
  width: 100%;height: 100%;
  top: 0;left: 0;object-fit: cover;
  }
.txt{
  position: absolute;
  top:calc(50% - 15.3vw);
  right: size(235);
  width:size(437);
  font-size: size(29);
  font-weight: 700;
  line-height: 1.53;
  color: #000;
  letter-spacing: 0.1em;
.logo{
  width:size(387);
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.15em auto;
  }
.t{
  width:size(437);
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.3em auto;
  }
  /*
  .title{font-size:2.1em;
 display: block;position: relative;
  transform: translateY(-10%)scale(1.5);
 b{color: #d03636;} 
&::after,
&::before{content: "";border: 0.1em solid #000;
border-width: .1em .1em .1em 0;
display: block;
width: .5em;position: absolute;right: 0;top: calc(50% - 1.4em);height: 2.8em;}
&::before{
border-width: .1em 0 .1em .1em;left: 0;}
  }
  .stitle{
	  width: 100%;
	  background: #000;
	  color: #fff;
 margin: 1.7em 0 .8em;
  transform: scale(1.5);
  }
  .desc{
  font-size:1.31em;
  transform: translateY(10%)scale(1.5);
	  color: #666;}
*/
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
  }
  .logo {
    width: sizem(308);
  }
.imgbg{
  bottom: sizem(-1);
  right:sizem(-90);
  width: sizem(280);
  height: auto;
  transform: translateX(-10%);
  }
.img{
  width: sizem(165);
  transform: translate(10%,5%);
  height: auto;
  }
.txt{
	position: absolute;
  font-size: sizem(15);
  width:22em;
  top:calc(40% - 42vw);
  left: sizem(22);
  margin: auto;
  .desc{
  font-size:1.2em;}

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
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
