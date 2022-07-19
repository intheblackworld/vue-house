<template>
  <div class="section1">
<img src="./s1/top.png" alt="" class="t0" /><!--  -->

<div class="txt">
<img src="./s1/b.png" alt="" class="b" />
<img src="./s1/t1.png" alt="" class="t1" />
<img src="./s1/t2.png" alt="" class="t2" />
<img src="./s1/t3.png" alt="" class="t3" />
<img src="./s1/t4.png" alt="" class="t4" />
<img src="./s1/t5.png" alt="" class="t5" />
</div>

<div class="o"></div>
<img src="./s1/img.png" alt="" class="img" />
<svg xmlns="http://www.w3.org/2000/svg" class="w" viewBox="0 0 2652 236">
<path d="M2652,236C2634.6,106.8,2400.1,0,2091,0c-241.4,0-523.6,160.4-765,160.4S802.4,0,561,0 C251.9,0,17.4,106.8,0,236H2652z"/>
<path class="st1" d="M2029.9,49.5c-221.1,0-482.8,117.3-703.9,117.3S852.6,49.6,631.6,49.6C322.5,49.6,69.3,149.6,41.5,236h2569.1C2583.7,149.6,2338.9,49.5,2029.9,49.5z"/>
</svg>
<div class="leaf">
<img src="./s1/leaf1.png" alt="" class="leaf1" />
<div class="leaf2"><img src="./s1/leaf2.png" alt="" /></div>
<img src="./s1/leaf2.png" alt="" class="leaf3" />
</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(950);
  max-height: size(1140);
  position: relative;
  z-index: 2;
}
.o{
  position: absolute;
  border-radius: 50%;
  width:size(860);height:size(860);
  left: calc(50% - 860 * 50vw / 1920);
  bottom:size(-470);
  background: #fff;
  
}

.img{
  position: absolute;
  width:size(800);
  bottom: 0;
  left: calc(50% - 800 * 50vw / 1920);
  
  }
.w{
  position: absolute;
  bottom: 0;
  left: -20%;
  width: 140%;
fill:#90C044;
.st1{fill:#50A71D;}

}
.t0{
  position: absolute;
  width: 100%;height:87%;
  top:10%;
  left: 0;object-fit: cover;
  opacity: 0.0;
  }

.txt{
  position: absolute;
  border-radius: 50%;
  width:size(610);height:size(570);
  left: calc(50% - 610 * 50vw / 1920);
  top:calc(50% + (135 - 1080 * .5) * 100vw / 1920);
  background: #fff3;
  display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .b{margin: 0 0 3% 0;
    width: 16.5%;}
    .t1{margin: 0 0 5% 0;
    width: 61.8%;}
    .t2{margin: 0 0 4% 0;
    width: 64.5%;}
    .t3{margin: 0 0 4% 0;
    width: 67.8%;}
    .t4{margin: 0 0 28% 0;
    width: 67%;}
    .t5{
  position: absolute;
    right: 17%;
    bottom: 14%;
    width: 7.3%;}
}
.leaf{
  position: absolute;
  top: 50%;
  left: 50%;
  
  .leaf1{
    position: absolute;width:size(75);
  top:size(210);
  left: size(320);
  }
  .leaf2{
    position: absolute;width:size(70);
  top:size(-270);
  left: size(-280);
  img{width: 100%;transform: rotate(50deg);}
  }
  .leaf3{
    position: absolute;width:size(125);
  top:size(250);
  left: size(-460);
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
    margin: 0;
  
  }
.greatminds{
  position: absolute;
   top:calc(35% + (298 - 650 * .35) * 100vw / 375);
  right:21%;
  height:auto;
  width:59%;
  fill: #FFF;
}
.img{
  bottom:calc(40% + (-7 - 650 * .4) * 100vw / 375);
  right:8%;
  height:auto;
  width:84%;
  .img5{
    width: 100%;
    height:auto;
    position: relative;
  }
}


.txt{
   left:sizem(0);
   top:calc(35% + (46 - 650 * .35) * 100vw / 375);
   width: 100%;
  font-size: sizem(15);
  line-height: 1.8;
.logo{
   width:sizem(222);float:none;
   margin:3em auto .4em auto;
  }
  .t2{width:sizem(225);
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
