<template>
  <div class="section7">
  <!--  <img loading="lazy" src="./s7/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img"> -->
   <!-- <img loading="lazy" src="./s7/360山河美景.png" :alt="`${info.caseName}_img`" class="title-img"  data-aos="fade" data-aos-delay="200">  -->

    <v-pannellum :src="require('./s7/100M.jpg')" :autoLoad="true" :hfov="isMobile ? 90 : 120" :autoRotate="true" class="vr"></v-pannellum>
    <div class="vr-mask" v-if="isMobile"></div><div class="vr-mask2" v-if="isMobile"></div>
    <div class="txt">
    <div class="img"><img src="./s7/img.png" :alt="`${info.caseName}_img`"></div>
    <!-- <div class="line"  data-aos="fade-down" data-aos-delay="400"></div> -->
    <h3 class="title"  data-aos="fade" data-aos-delay="400"><span>360°城市浮島</span></h3>
    <h3 class="stitle"  data-aos="fade" data-aos-delay="600">洲子洋視界奇蹟 <br v-if="isMobile"/>層峰景觀貴賓席</h3>
    <p class="desc"  data-aos="fade" data-aos-delay="800">
      「天空之邑」以區域稀有24層地標，獨佔洲子洋極景制高點，<br v-if="isPC"/>觀音山、大台北都會公園山河美景360°環繞，彷如坐擁景觀貴賓席，無限風光盡入眼簾。
    </p>
    <div class="h360"><img src="./s7/360.png" :alt="`${info.caseName}_img`"><img src="./s7/360h.png" :alt="`${info.caseName}_img`"></div>
    </div>
    <div class="name">高樓層景觀 實景拍攝</div>

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative; 
}

  .vr {
    // position: absolute;
    margin-top: sizem(0);
    left: 0;
    height:100%;
    width: 100%;
  }

  .vr-mask {
  height: 100%;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
    width:30vw;
  }
  .vr-mask2 {
  height: 100%;
  position: absolute;
  z-index: 4;
  top: 0;
  right:0;
 width:30vw;
  }

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: fixed;
    z-index: -1;
    top: auto;bottom: 0
  }
}

.title-img {
  @include img_c_pc(132, 286);
}

.line {
  @include div_c_pc(1, 224, 652);
  background-color: #036EB7;
}

.txt{
  @include img_l_pc(1050, 0, 150);
  top: calc(50% - 19vw);
  font-size: size(18);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing:0.06em;
  text-align: justify;
  text-shadow: 0 0 0.5em #036EB7,0 0 0.3em #004e81;
  color: #fff;}
.img {
  width: size(270);
  float: left;
  margin: -3em 1em 0 0;
  img{width: 100%;}
}
.title {
  font-size:4em;
  font-weight: 900;
  letter-spacing:0;
  margin: 0 0 0.3em 0;
  span{transform:scaleX(0.95);transform-origin: 20% 0;position: relative;display: block;}
}
.h360{ @include img_r_pc( 172, 40, -500);pointer-events:none;
img{width: 100%;
&:last-child{@include img_r_pc( 60,15,45);
animation: ro 1s ease-in-out infinite alternate;
transform: rotate(-40deg);
transform-origin:30% 90%;
}
}
&:hover{opacity: 0;}
}

@keyframes ro{
  to {
    transform: rotate(0);
  }
}

.stitle {
  font-size:1.5em;
  font-weight: 700;
  margin: 0 0 0.3em 0;
  color: #FFF000;
}
.name{
  position: absolute;
  right: 1em;
  bottom:4em;
  z-index:2;
  font-size: size(15);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.1em;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  text-shadow:0 0 1em #000,0 0 0.5em #000,0 0 0.2em #000;
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
  .section7 {
    width: 100%;
    height:calc(100vh - 63px);
    min-height: calc(66700vw / 375 - 63px);
    max-height: calc(81200vw / 375 - 63px);
    overflow: hidden;
  }

.txt{
  @include img_c_m(375, 0);
  width:100%;
  top: calc(21% - 5vw);
  font-size: sizem(14);
  line-height: 1.6;
  letter-spacing:0.02em;
  padding:0 1.5em;
 // overflow: hidden;
}
.img {
  width: sizem(130);
  float: right;
  margin:-6.5em -1em -1em 0;
  img{transform: scaleX(-1);}
}
.title {
  font-size:1.6em;
  span{transform-origin: 10% 0;}
  }
.stitle {
  font-size:1.3em;
  letter-spacing:0.06em;
}

.h360{ @include img_c_m( 86, 200);
//top: auto;bottom:size(10);
img{
&:last-child{@include img_r_m( 30,15,22.5);
}
}
}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },
  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
