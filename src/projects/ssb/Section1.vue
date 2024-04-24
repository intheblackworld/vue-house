<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   -->
   <a href="https://line.me/R/ti/p/@666gkgdi" target="_blank" v-if="!isMobile">
    <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
    </a>
    <!--div class="bg">
    <img src="./s1/bg.jpg" data-aos="fade" />
   </div-->
   <img src="./s1/img1.png" class="img1" data-aos="zoom-in" data-aos-delay="200" /> 
   <img src="./s1/light3.png" class="light3" data-aos="zoom-in" data-aos-delay="200" /> 
    <!--div class="txt">
<div class="t1" data-aos="zoom-in" data-aos-delay="400">捷運府中站｜挑高3米6
</div>
      <div class="t2"  data-aos="zoom-in" data-aos-delay="600">炫曜31-45坪</div>
    </div-->

    <img src="./s1/title.png" class="titile" data-aos="zoom-in" data-aos-delay="500" /> 
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
   background: url("./s1/bg1.jpg") center;
  // background-size: 100% auto;
}

.lineicon{
  position: fixed;
  width: size(80);
  height: size(80);
  right: size(20);
  bottom: size(120);
  z-index: 99;
}
.bg{
  position: absolute;
  width:size(2000);height:auto;
  top:calc(50% + (-555 - 1080 * 0.5) * 100vw / 1920);
  right:size(-250);
  img{width: 100%;
  transform: rotate(20deg)scale(.8)translateX(10%);}
}

.img1{
  position: absolute;
  top:calc(50% + (250 - 1080 * 0.5) * 100vw / 1920);
  left:size(80);
  width: size(790);
}


.light3{
  position: absolute;
  top:calc(50% + (-20 - 1080 * 0.5) * 100vw / 1920);
  left:size(80);
  width: size(1110);
  mix-blend-mode: screen;
}

.titile{
  position: absolute;
  top:calc(50% + (260 - 1080 * 0.5) * 100vw / 1920);
  right:size(180);
  width: size(700);
}

.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
   opacity: .5;
   z-index: 5;
  }
.img{
  width:size(1068);left: size(-191);
  top:calc(50% + (-129 - 1080 * 0.5) * 100vw / 1920);
  margin: 0 auto 0em;
}

.txt{
  position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
  top:calc(50% + (335 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(50);
  line-height: 1.5;
  color: #fff;
  text-align: center;
  width:size(1140);
    letter-spacing:0em;
    padding: 0;
  font-weight: 900;
  margin: auto 0 auto auto;

  //filter: drop-shadow(0 0 7px #eff);

  .logo{
  width:size(630);
	.st0{fill:#FFF;filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.8));}
	.st1{fill:#DCBF8B;}
	.st2{fill:none;stroke:#DCBF8B;stroke-width:1;}
}
  
.t1{
    display: block;
  font-size: 1.13em;
    letter-spacing:0.07em;
  color: #E0C38F;
  margin: -0.1em 0 0 0 ;
    }
  .t2{
    display: inline-block;
  font-size: 1em;
  line-height: 1.2;
  border: 1px solid currentColor;
  margin:0.2em 0 0 0;
  padding: 0 0 0.1em 0;
  width:size(620);
    }
    

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    background: url("./s1/bgm.jpg") center;
    background-size: cover;
    min-height: sizem(667);
    max-height: sizem(667);
    height: calc(100vh - 63px);
  }
.bg{
transform: rotate(90deg);
  width: sizem(690);
  top:calc(50% + (60 - 667 * 0.5) * 100vw / 375);
  right:sizem(-190);
}
.img{
  width:sizem(270);left: 0;right: 0;
  top:calc(40% + (31 - 667 * 0.4) * 100vw / 375);
  margin: 0 auto 0em;
}

.img1{
  top:sizem(350);
  left:sizem(40);
  width: sizem(300);
}


.light3{
  top:sizem(230);
  right: sizem(-30);
  width: sizem(420);
  mix-blend-mode: screen;
}

.titile{
  top:sizem(80);
  right:sizem(30);
  width: sizem(320);
}


.txt{
  font-size: sizem(22.5);
  top:calc(50% + (331 - 667 * .5) * 100vw / 375);
  width:auto;
  margin: auto;
.logo{
  width:sizem(278);
}
  .t2{
  width:sizem(278);
    }
}
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import mimg from './m.vue'

export default {
  name: 'section1',
  components: {},

  props: ['title', 'cls'],
  components: {
    mimg,
  },

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
