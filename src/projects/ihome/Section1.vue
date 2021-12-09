<template>
  <div class="section1">
    <div>
	<!--	<img src="./s1/pc.jpg" alt="" class="t0">  -->
		<img src="./s1/imgbg.png" alt="" data-aos="fade" data-aos-duration="1500" class="imgbg">
		<img src="./s1/img.png" alt="" data-aos="fade" data-aos-duration="1500" class="img">
		<img src="./s1/logo.png" alt="" data-aos="fade" data-aos-duration="1500" class="logo">
<div class="txt">
		<div class="title" data-aos="fade" data-aos-duration="1500"><b>雙</b>北悠居 <b>雙</b>捷遊心<br><b>愛</b>在土城 <b>2</b>房家入</div>
		<div class="stitle" data-aos="fade" data-aos-duration="1500">真情不二價給您!</div>
		<div class="desc" data-aos="fade" data-aos-duration="1500">土城區青雲路252號  02-2263-5666</div></div>
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
  background-size: auto;
}
.t0{width: 100%; opacity: 0.2;}
.logo{
  position: absolute;
  width: size(690);
  top: calc(50% - 12.5vw);
  left: size(400);
  }
.imgbg{
  position: absolute;
  bottom: size(-5);
  right:size(-382);
  width: size(1068);
  }
.img{
  position: absolute;
  bottom: 0;
  right: 0;
  width: size(636);
  }
.txt{
  position: absolute;
  top: calc(50% - 2.5vw);
  left: size(400);
  width: size(690);
  font-size: size(29);
  font-weight: 700;
  line-height: 1.53;
  color: #000;
  letter-spacing: 0.1em;
  .title{font-size:2.1em;
 display: block;position: relative;
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
  }
  .desc{
  font-size:1.31em;
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
    min-height: sizem(470);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(308);
    top: sizem(243);
    left: sizem(35);
  }

  .t1 {
    width: sizem(308);
    top: sizem(309);
    left: sizem(35);
  }

  .t2 {
    width: sizem(308);
    top: sizem(403);
    left: sizem(35);
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
