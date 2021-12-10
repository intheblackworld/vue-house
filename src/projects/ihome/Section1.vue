<template>
  <div class="section1">
    <div>
	<!--	<img src="./s1/pc.jpg" alt="" class="t0">  -->
		<img src="./s1/imgbg.png" alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="0" class="imgbg">
		<img src="./s1/img.png" alt="" data-aos="fade" data-aos-duration="800" data-aos-delay="700" class="img">
<div class="txt">
		<img src="./s1/logo.png" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="200" class="logo">
		<div class="title" data-aos="fade" data-aos-duration="1500" data-aos-delay="400"><b>雙</b>北悠居 <b>雙</b>捷遊心<br><b>愛</b>在土城 <b>2</b>房家入</div>
		<div class="stitle" data-aos="fade" data-aos-duration="1500" data-aos-delay="600">真情不二價給您!</div>
		<div class="desc" data-aos="fade" data-aos-duration="1500" data-aos-delay="800">土城區青雲路252號  02-2263-5666</div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background:#f8dee1;
  z-index: 2;
}
.imgbg{
  position: absolute;
  bottom: size(-5);
  right:size(-382);
  width: size(1068);
  transform: translateX(-10%);
  }
.img{
  position: absolute;
  bottom: 0;
  right: 0;
  width: size(636);
  transform: translate(10%,5%);
  }
.txt{
  position: absolute;
  top:calc(50% - 12.5vw);
  left: size(400);
  width:23.793em;
  font-size: size(29);
  font-weight: 700;
  line-height: 1.53;
  color: #000;
  letter-spacing: 0.1em;
.logo{
  width:100%;
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.3em auto;
  }
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
  transform: translateX(-10%);
  }
.img{
  width: sizem(165);
  transform: translate(10%,5%);
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
