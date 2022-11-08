<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />


<div class="earth2" data-aos="fade-up" data-aos-delay="0">
  <div><div><img src="./s1/02.jpg" /></div></div>
  <div><img src="./s1/03.jpg" /><img src="./s1/03.jpg" /></div>
  <div><div><img src="./s1/01.jpg" /></div></div>
</div>   -->
<div class="earth1" data-aos="fade-up" data-aos-delay="0">
  <div><img src="./s1/map.png" /><img src="./s1/map.png" /></div>
</div>
<img src="./s1/logo.png" class="logo" data-aos="zoom-in" data-aos-delay="0" />

    <div class="txt">
<div class="t1" data-aos="zoom-in" data-aos-delay="200">台南現在 國際未來</div>
<div class="t2" data-aos="zoom-in" data-aos-delay="400">BEGINNING OF FUTURE<br />
站在台南，看見國際</div>
<div class="box" data-aos="zoom-in" data-aos-delay="600"></div>

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
  background: linear-gradient(0deg, #FFFFFF 11%, #0070C6 64%);
  // background: url("./s1/bg.jpg") center;
  // background-size: 100% auto;
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
   opacity: .5;
  }
  .earth1{
    position: absolute;
    right:size(48);
    bottom: size(-394);
      width:size(1068);
      height:size(1068);
      border-radius: 50%;
      overflow: hidden;
      background:linear-gradient(180deg, #002e7ca6 0%, #2877ff00 100%);
      -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-mask-image: -webkit-radial-gradient(white, black);

       div{position: relative;opacity: .2;transform: rotate(10deg);
        width: 100%;height: 100%;
        white-space: nowrap;
  img{width: 170%;height: 110%;margin:-10% 0 0 0;
    animation: earth 20s linear infinite;transform: translateX(-100%);}
      }

  &::before{content: "";
    position: absolute;left: 0;top: 0;
  display: block;width: 100%;height: 100%;background: url("./s1/1.png");opacity: .19;
}
  }
  
  @keyframes earth{
    to{
      transform: rotate(0deg);
    }
}
.logo{
  position: absolute;
  top:size(61);
  left:size(133);
  width:size(202);
  fill:#FFF;
  transform-origin: 0;
}


.txt{
  position: relative;
  top:calc(50% + (422 - 540) * 100vw / 1920);
 //  left:size(-260);
  font-size: size(28);
  line-height: 1.49;
  color: #fff;
  text-align: left;
  letter-spacing:0em;
  padding: 0;
  font-weight: 300;
  margin: 0 auto 0 4.7em;
  display: block;
  float: left;
  //filter: drop-shadow(0 0 7px #eff);

  
.t1{
  display: block;
  font-size: 2.39em;
  font-weight: 700;
  margin: 0;
  letter-spacing:0.04em;
  font-family:'Noto Serif TC',sans-serif;
  transform-origin: 0;
}
  .t2{
  font-weight: 400;
  margin:1.5em 0 0 0;
  padding: 0 .9em 0.1em 0;
  letter-spacing:0.1em;
  transform-origin: 0;
    }
.box{
  background: #FFF;
  height: 2px;
  width: 100%;
  display: block;
  transform-origin: 0;
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
    height: 100vh;
  }
  .earth1{
    right:sizem(-12.5);
    bottom: sizem(-153);
      width:sizem(400);
      height:sizem(400);
    }
.logo{
  top:calc(50% + (142 - 333.5) * 100vw / 375);
  left:sizem(59);
  width:sizem(112);
}

.txt{
  font-size: sizem(13);
  top:calc(50% + (221 - 333.5) * 100vw / 375);
  width:sizem(260);
  margin: 0 auto 0 sizem(58);

.t1{
  font-size: 2.32em;
    }
.t2{
  margin:1.2em 0 0 0;
    }
.box{
  height: 1px;
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
