<template>
<div class="section1">

<div class="txt">
<div class="logo" data-aos="zoom-in" data-aos-delay="200" >
<img src="./s1/t1.png" />	
</div>
<div class="t1" data-aos="zoom-in" data-aos-delay="200" >
<img src="./s1/t2.png" />	
</div>
</div>

<div class="t3" data-aos="zoom-in" data-aos-delay="200" >
<img src="./s1/t3.png" />	
</div>

<div class="leafstyle">
	<div class="leaf1">
	<img src="./s1/leaf1.png" />		
	</div>
	<div class="leaf2">
	<img src="./s1/leaf2.png" />		
	</div>
</div>

<div class="main">
	<img class="child" src="./s1/child.png" />

	
<div class="floorstyle">
	<img class="floor" src="./s1/floor.png" />	
	<img class="shadow" src="./s1/shadow.png" />		
	</div>
</div>




</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
 // overflow: hidden;
position: relative;
overflow: hidden;
background: url("./s1/pc.jpg") center;
  // background-size: 100% auto;
}



.txt{
  position: absolute;
  top:size(175);
  right:size(235);
  z-index: 10;
  

.logo{
  width:size(531);
  margin: 0px auto;
}
.t1{
   width:size(815);
   margin-top:size(30);
}
}

.t3{
  width:size(660);
  position: absolute;
  right: size(100);
  bottom:size(50);
  z-index: 10;
}

.leafstyle{
z-index: 1;
.leaf1{
	position: absolute;
	width: size(1176);
	left: size(-195);
 	bottom: size(-300);
}
.leaf2{
	position: absolute;
	width: size(1428);
	bottom: size(-90);
	left: size(-140);
}
}

.main{
position: absolute;
bottom: size(0);
width: size(1920);

.child{
	z-index: 10;
	position: absolute;
	width: size(380);
	bottom: size(55);
	left: size(410);
}



.shadow{
	z-index: 5;
	position: absolute;
	width: size(446);
	bottom: size(30);
	left: size(320);
	mix-blend-mode: multiply;
}



.floor{
	z-index: 3;
	position: absolute;
	width: size(1920);
	bottom: size(0);
	left: size(0);
	right: size(0);

}
}






/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(667);
    max-height: sizem(812);
    height:100vh;
  }
  .img1{bottom:auto;top: sizem(-345);width:auto;height: sizem(345);
    transform: rotate(90deg);transform-origin: 0 100%;}
    .img11{bottom:auto;top: sizem(-345);width:sizem(199.19);height: sizem(345);
      transform: rotate(90deg);transform-origin: 0 100%;

    }

.img2{left: 0;bottom: sizem(214);width:auto;height: sizem(375);
    transform: rotate(90deg);transform-origin: 0 100%;}
.img22,
.img23{
  left: 0;bottom: sizem(214);width:sizem(402.77);height: sizem(375);
  transform: rotate(90deg);transform-origin: 0 100%;
}
    .box{position: absolute;
      width: 100%;height:sizem(200);bottom:sizem(-100);background: linear-gradient(to bottom, #A4D2D900 0%,#A4D2D9 50%,#A4D2D900 100%);display: block;}

.txt{
  font-size: sizem(25);
  top:calc(50% + (174 - 667 * .5) * 100vw / 375);
  width:100%;
.logo{
  width:sizem(286);
  margin: 0 auto 0.2em;
}
.t1{
  font-size: 1em;
  line-height: 1.48;
  margin: 0 auto -.5em auto;
  span{display: block;font-size:0.95em;}
    }
  .t2{
  width:sizem(238);
    }
  .t3{
  font-size: 1em;
  margin: .2em auto 1.2em auto;
  &::after,
  &::before{
    content: "";
    width: 2.1em;
    margin: 0 .4em .1em;
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
  components: {},

  props: ['title', 'cls'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    init() {},},

  mounted() {},

  created() {},

  computed: {},
}
</script>
