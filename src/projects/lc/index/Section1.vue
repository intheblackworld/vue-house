<template>
  <div class="section1">
    <div class="cloud">
    <img src="./s1/cloud1.png" alt="cloud" class="cloud1">
    <img src="./s1/cloud2.png" alt="cloud" class="cloud2">
    <img src="./s1/cloud3.png" alt="cloud" class="cloud3">
    <img src="./s1/cloud4.png" alt="cloud" class="cloud4">
    </div>
    <img src="./s1/bg.png" alt="bg" class="bg-img bg1" v-if="isPC">
    <img src="./s1/bg_m.png" alt="bg_m" class="bg-img bg1" v-if="isMobile">
    <img src="./s1/2.png" alt="2" class="bg-img bg2">
    <h1 class="title">立瑾建築機構</h1>
    <h1 class="desc">
      百年建築 將心構築<br /><br />

      以人為本，用心建設。<br />
      致力打造百年穩固、永世怡居的好建築。
    </h1>
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height:size(900);
  max-height:size(1080);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
background: linear-gradient(to bottom,  rgba(29,125,209,1) 0%,rgba(20,135,241,1) 21%,rgba(59,183,255,1) 65%,rgba(171,220,255,1) 99%);
}
.cloud{position: absolute;top: 0;left: 0;width:100%;height: 100%;
.cloud1{ @include img_l_pc(1193, 750, 0);transform: translateX(calc(100vw + 100%));animation: an 45s -14s linear infinite reverse;}  
.cloud2{@include img_l_pc(915, 160, 0);transform: translateX(calc(100vw + 100%));animation: an 30s -4s linear infinite reverse;}  
.cloud3{@include img_l_pc(878, 400, 0);transform: translateX(calc(100vw + 100%));animation: an 35s 0s linear infinite reverse;}  
.cloud4{@include img_l_pc(1020, 820, 0);transform: translateX(calc(100vw + 100%));animation: an 40s -20s linear infinite reverse;}  
}

@keyframes an {
  to {
    transform: translateX(-100%);
  }
}

.bg-img {
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &.bg1 {
    position: relative;
  }
  &.bg2 {
  width:auto;
  height:calc(50% - 5vw);
  top:auto;
  left:auto;
  bottom:10%;
  right: 0;
  }
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(230) size(1920);
  border-color: transparent transparent #fff transparent;
}

.title {
  @include div_r_pc(490, 103, 187, 402);
  font-size: size(70.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(13.94);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  text-shadow: 0 0 1em #1487F1,0 0 0.5em #1D7DD1,0 0 0.3em #1D7DD1;
}

.desc {
  @include div_r_pc(570, 192, 332, 355);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.78);
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 1em #1487F1,0 0 0.5em #1487F1,0 0 0.3em #1487F1;
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
    min-height: sizem(700);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

.cloud{position: absolute;top: 0;left: 0;width:100%;height: 100%;
.cloud1{ @include img_l_m(600, 370, 0);}  
.cloud2{@include img_l_m(460, 80, 0);}  
.cloud3{@include img_l_m(440, 200, 0);}  
.cloud4{@include img_l_m(510, 410, 0);}  
}
.bg-img {
  &.bg2 {
  width:auto;
  height:sizem(150);
  top:auto;
  left:auto;
  bottom:0%;
  right: -30%;
  }
}


  .bottom {
    @include div_r_m(375, 44, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 sizem(44) sizem(375);
    border-color: transparent transparent #fff transparent;
  }

  .title {
    @include div_r_m(196, 41, 40, 90);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.57);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_r_m(325, 192, 93, 27);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3);
    text-align: center;
    color: #ffffff;
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

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
