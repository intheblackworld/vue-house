<template>
  <div class="section1">
<img src="./s1/top.png" alt="" class="t0" /><!--  -->

<div class="oy" data-aos="zoom-in" data-aos-delay="0"></div>
<div class="txt">
<img src="./s1/b.png" alt="" class="b" data-aos="zoom-in" data-aos-delay="200" />
<img src="./s1/t1.png" alt="" class="t1" data-aos="zoom-in" data-aos-delay="400" />
<img src="./s1/t2.png" alt="" class="t2" data-aos="zoom-in" data-aos-delay="600" />
<img src="./s1/t3.png" alt="" class="t3" data-aos="zoom-in" data-aos-delay="800" />
<img src="./s1/t4.png" alt="" class="t4" data-aos="zoom-in" data-aos-delay="1000" />
<img src="./s1/t5.png" alt="" class="t5" data-aos="zoom-in" data-aos-delay="0" />
</div>

<div class="o" data-aos="zoom-in" data-aos-delay="300"></div>
<img src="./s1/img.png" alt="" class="img" data-aos="zoom-in" />
<svg xmlns="http://www.w3.org/2000/svg" class="w" viewBox="0 0 2652 236">
<path d="M2652,236C2634.6,106.8,2400.1,0,2091,0c-241.4,0-523.6,160.4-765,160.4S802.4,0,561,0 C251.9,0,17.4,106.8,0,236H2652z"/>
<path class="st1" d="M2029.9,49.5c-221.1,0-482.8,117.3-703.9,117.3S852.6,49.6,631.6,49.6C322.5,49.6,69.3,149.6,41.5,236h2569.1C2583.7,149.6,2338.9,49.5,2029.9,49.5z"/>
</svg>
<div class="leaf">
<img src="./s1/leaf1.png" alt="" class="leaf1" data-aos="fade" data-aos-delay="0" />
<div class="leaf2" data-aos="fade" data-aos-delay="150"><img src="./s1/leaf2.png" alt=""/></div>
<img src="./s1/leaf2.png" alt="" class="leaf3" data-aos="fade" data-aos-delay="600" />
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
.oy{
  position: absolute;
  border-radius: 50%;
  width:size(610);height:size(570);
  left: calc(50% - 610 * 50vw / 1920);
  top:calc(25% + (75 - 950 * .25) * 100vw / 1920);
  background: #ffe673;
  
}
.txt{
  position: absolute;
  width:size(610);
  left: calc(50% - 610 * 50vw / 1920);
  top:calc(50% + (65 - 950 * .5) * 100vw / 1920);
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
    .t4{margin: 0;
    width: 67%;}
    .t5{
  position: absolute;
    right: 17%;
    bottom: -9%;
    width: 7.3%;}
}
.o{
  position: absolute;
  border-radius:size(850) size(850) 0 0;
  width:size(850);height:size(385);
  left: calc(50% - 850 * 50vw / 1920);
  bottom:calc(39% + (0 - 950 * .39) * 100vw / 1920);
  background: #fff;
  transform-origin: 50% 130%;
  
}

.img{
  position: absolute;
  width:size(800);
  bottom:calc(39% + (0 - 950 * .39) * 100vw / 1920);
  left: calc(50% - 800 * 50vw / 1920);
  transform-origin: 50% 100%;
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

.leaf{
  position: absolute;
  top: 50%;
  left: 50%;
  
  .leaf1{
    position: absolute;width:size(75);
  top:size(210);
  left: size(320);
  transform: scale(.5) translate(200%,-300%) rotate(-20deg);
  }
  .leaf2{
    position: absolute;width:size(70);
  top:size(-270);
  left: size(-320);
  transform: scale(.5) translate(50%,-300%) rotate(-30deg);
  img{width: 100%;transform: rotate(50deg);}
  }
  .leaf3{
    position: absolute;width:size(125);
  transform: scale(.5) translate(-10%,-200%) rotate(30deg);
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
    min-height: sizem(667);
    max-height: sizem(667);
    height:100vh;
    margin: 0;
  }
  .oy{
  width:sizem(420);height:sizem(400);
  left: calc(50% - 420 * 50vw / 375);
  top:calc(25% + (70 - 667 * .25) * 100vw / 375);
  }
  .txt{
    width:sizem(460);
    left: calc(50% - 460 * 50vw / 375);
    top:calc(50% + (80 - 667 * .5) * 100vw / 375);
    .t5{
    right: 23%;
  }
  }
  .o{
    border-radius:sizem(440) sizem(440) 0 0;
    width:sizem(440);height:sizem(200);
    left: calc(50% - 440 * 50vw / 375);
    bottom:calc(39% + (20 - 667 * .39) * 100vw / 375);
  }

  .img{
    width:sizem(410);
    left: calc(50% - 410 * 50vw / 375);
    bottom:calc(39% + (20 - 667 * .39) * 100vw / 375);
  }
  .w{
    left: -50%;
    width: 200%;
  }
  
.leaf{
  .leaf1{width:sizem(35);
  top:sizem(140);
  left: sizem(140);
  }
  .leaf2{width:sizem(35);
  top:sizem(-210);
  left: sizem(-182);
  }
  .leaf3{width:sizem(55);
  top:sizem(230);
  left: sizem(-190);
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
