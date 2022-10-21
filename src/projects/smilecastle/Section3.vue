<template>
  <div>
    <div class="section3">
      <div class="pic">
        <div class="box" v-if="!isMobile"></div>
        <img src="./s3/1.jpg" alt="" />
        <img src="./s3/1.png" alt="" class="img2" />
        <div class="name">台74線串聯大台中，正環內優質生活</div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200" >74環內 最後黑馬補漲</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">大臺中裡碩果僅存的超值補漲重劃區，不僅位於74環內，同時享有成熟生活機能與順暢交通機能，一線可抵高鐵台中站與市政特區，【新光特區】大台中最後一匹黑馬，絕對值得。</div>
      </div>
   <div class="img" data-aos="zoom-in" data-aos-delay="0" >
    <img src="./all/f6.png" class="f3" v-if="isMobile" />
    <img src="./all/f3.png" class="f2" />
    <img src="./all/f1.png" class="f1" />
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 3vw 0 5vw;
&::after{content: "";clear: both;display: block;}
}

.img{position:absolute;top: 50%;left:0;transform-origin: 100% 50%;
  
img{position:absolute;pointer-events: none;}
.f1{width:size(220);top:size(20);left:size(-260);transform-origin: 90% 100%;transform: rotate(76deg);
animation: an 3s ease-in-out infinite alternate;}
.f2{width:size(100);top:size(-10);left:size(-300);transform-origin: 90% 100%;transform: rotate(84deg);
animation: an 3s -.4s ease-in-out infinite alternate-reverse;}

}

@keyframes an{
    to{
   transform: rotate(81deg);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin: 1em auto 3em auto;
  z-index: 2;
  @include txt(size(18));
  }

  .pic{
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(845);
  .box{position: absolute;top: 0;left: 0;right: 0;bottom: 0;border:3px solid #fff;transform: translate(1vw , -1vw);
  &::before{content: "";position: absolute;display: block;
  right: 0;top: 0;width: size(60);height:size(60);border:3px solid #fff;transform: translate(1vw , -1vw);}
  }
  img{width: 100%;position: relative;
    height: 100%;
    object-fit: cover;
    &.img2{position: absolute;top: 0;left: 0;
    filter: drop-shadow(.1vw .1vw .2vw rgba(0, 0, 0, 1));
  }
  }
  .name {
    position: absolute;
    right:1em;
    bottom:0.5em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.06em;
    text-align: left;
   text-shadow:0 0.1em 0.3em #000;
}

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
  .section3 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }
.img{bottom: 0;top:auto;
.f1{width:sizem(88);top:auto;bottom:sizem(-10);left:sizem(-110);}
.f2{width:sizem(39);top:auto;bottom:sizem(-10);left:sizem(-60);}
.f3{width:sizem(113);top:sizem(50);left:sizem(-60);
  transform-origin: 0% 0%;transform: rotate(-80deg);
 animation: an1 3s -.6s ease-in-out infinite alternate;
}

}
@keyframes an1{
  to{
    transform: rotate(-85deg);
  }
}
  .txt{
    position: relative;
    width: sizem(320);
    margin:2em auto 6em;
    font-size: sizem(15);
  }
.pic{
width:100%;
  height: sizem(230);}

}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      /*
      slideList: [
        {
          img: isMobile?require('./s3/1m.jpg'):require('./s5/1.jpg'),
          name: '區域與建築外觀3D示意',
        },
      ],
      */
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
