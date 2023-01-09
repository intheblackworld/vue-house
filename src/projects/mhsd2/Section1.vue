<template>
<div class="section1">

<div class="txt">
<img loading="lazy" src="./s1/t1.png" class="logo" data-aos="zoom-in" data-aos-delay="200"/>	
<img loading="lazy" src="./s1/t2.png" class="t1" data-aos="zoom-in" data-aos-delay="200" />
</div>	

<img loading="lazy" class="t3" src="./s1/t3.png" data-aos="zoom-in" data-aos-delay="200"  />	

<div class="leafstyle">
	<img loading="lazy" class="leaf1" src="./s1/leaf1.png" />		
	<img loading="lazy" class="leaf2" src="./s1/leaf2.png" />		
</div>

<div class="main">
	<img loading="lazy" class="child" src="./s1/child.png" />

	
<div class="floorstyle">
	<img loading="lazy" class="floor" src="./s1/floor.png" />	
	<img loading="lazy" class="shadow" src="./s1/shadow.png" />		
	</div>
</div>
<img loading="lazy" class="train" src="./s1/train.png" />	




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
background: url("./s1/bg.jpg") center;
  // background-size: 100% auto;
}



.txt{
  position: relative;
  top:size(115);
  right:size(20);
  z-index: 10;
  

.logo{
  position: absolute;
  width:size(531);
  right:size(280);
}
.t1{
  position: absolute;
  width:size(815);
  top:size(180);
}
}

.t3{
  width:size(660);
  position: absolute;
  right: size(100);
  bottom:size(50);
  z-index: 10;
}


.leaf1{
  z-index: 1;
	position: absolute;
	width: size(1176);
	left: size(-195);
 	bottom: size(-300);
  animation: tree1 5s ease-in-out alternate infinite;
  transform-origin: 0% 100%;
  transform: skew(5deg);
}
.leaf2{
  z-index: 1;
	position: absolute;
	width: size(1428);
	bottom: size(-90);
	left: size(-140);
  animation: tree2 3s ease-in-out alternate infinite;
  transform-origin: 0% 100%;
  transform: skew(2deg);
}

@keyframes tree1{
    to {
    transform:skew(-5deg);
    }
}

@keyframes tree2{
    to {
    transform:skew(-2deg);
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

.train{
  z-index: 2;
  position: absolute;
	width: size(2533);
  bottom: size(140);
  right: size(-1330);
  transform: translate(100%, 0%);
  animation: train 3s ease-out forwards;
  transform-origin: 0% 100%;
}

@keyframes train{
    to {
    transform:translate(0px, 0%);
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
    background: url("./s1/bg_m.jpg") top center;
    background-size:100% ;
  }

.txt{
  top:sizem(78);
  right:auto;
  

.logo{
  width:sizem(210);
  right:sizem(82);
}
.t1{
  width:sizem(320);
  top:sizem(68);
  right:sizem(28);
}
}

.t3{
  width:sizem(224);
  right: sizem(75);
  bottom:auto;
  top:sizem(200);
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3))
}


.leaf1{
  width:sizem(417);
  left: sizem(-117);
  bottom: sizem(-20);
}
.leaf2{
  width:sizem(506);
  bottom: sizem(55);
  left: sizem(-95);
}

.main{
width: sizem(375);
.child{
	width: sizem(160);
	bottom: sizem(85);
	left: sizem(30);
}



.shadow{
	width: sizem(190);
	bottom: sizem(75);
	left: sizem(0);
}



.floor{
	width: auto;
  height: sizem(159);
  left: sizem(-150);

}
}

.train{
  width: sizem(672);
  bottom: sizem(130);
  right: sizem(-280);
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
