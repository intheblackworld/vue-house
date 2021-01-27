<template>
  <div class="section6">
    <div class="block-1">
      <div class="bg-img"></div>
      <img src="./s6/bg.jpg" :alt="`${info.
    caseName}_grass`" class="grass" v-if="isPC">
      <img src="./s6/bg_m.jpg" :alt="`${info.
    caseName}_grass`" class="grass" v-if="isMobile">
      <img src="./s6/1.png" :alt="`${info.
    caseName}_o`" class="o high">
      <img src="./s6/2.png" :alt="`${info.
    caseName}_o`" class="o">
      <div class="title">
        全新生活平台 祕境歡樂一整天
      </div>
      <img src="./s6/tbg.png" :alt="`${info.
    caseName}_tbg`" class="tbg">
      <img src="./s6/title.png" :alt="`${info.
    caseName}_logo`" class="title-img">
    <div class="p2">
      <img src="./s6/free.png" :alt="`${info.caseName}_title`" class="logo1">
      <img src="./s6/p5.png" :alt="`${info.caseName}_p5`" class="p5">
      </div>
    <div class="p3">
      <img src="./s6/free.png" :alt="`${info.caseName}_title`" class="logo2">
      <img src="./s6/p6.png" :alt="`${info.caseName}_p6`" class="p6">
      </div>
      
      
      <div class="child-jump">
        <img src="./s6/p4.png" :alt="`${info.caseName}_p1`" class="p1">
      </div>
    </div>
    <div class="block-2">
      <div class="title2">
        活動消息
      </div>
      <carousel-3d class="swipe relative" ref="mycarousel" :width="videoWidth" :height="videoHeight" :perspective="0" :disable3d="false" :border="0" :display="3" :space="isMobile ? 300 : 300" @before-slide-change="onBeforeSlideChange">
        <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img + index" class="video-slide">
          <img :src="slide.img" :class="`video-img absolute`" />
          <div class="mask" v-if="!isMobile">
            <div class="slide-title" v-html="slide.title">
            </div>
            <div class="btn">
              >>我要報名
            </div>
          </div>
          <div @click="changeAct(index)" v-scroll-to="{element: '#contact'}" class="box100"></div>
        </slide>
      </carousel-3d>
      <div class="slide-title" v-html="slideList[slideIndex].title" v-if="isMobile">
      </div>
      <div class="btn" v-if="isMobile" @click="changeAct(slideIndex)" v-scroll-to="{element: '#contact'}">
        >>我要報名
      </div>
      <div class="pagination">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goToSlide(index)"><span :class="`flex-c ${slideIndex === index ? 'active' : ''}`">{{index + 1}}</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(2130);
  min-height: size(2130);
  max-height: size(2130);
  background-size: cover;
  background-attachment: fixed;
  //  overflow: hidden;
}

.block-1 {
  width: 100vw;
  height: size(1156);
  position: relative;
}

.block-2 {
  background-color: #71943a;
  position: relative;
  width: 100vw;
  height: size(2130 - 1156);
}
.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  background-color: #fff;

  // &:nth-child(1) {
  //   position: relative;
  // }
}


.title-img {
  @include img_c_pc(290, 320);
}

.tbg {
  @include img_c_pc(588, 208);
}

.o {
  @include img_r_pc(648, -82, -30);

  &.high {
    z-index: 2;
  }
}

.p2 {
  @include img_l_pc(310, 440, 403);
  animation: jump2 1.5s 0s ease-in infinite alternate;
}
.p3 {@include img_l_pc(294, 620, 856);
  animation: jump2 1.7s -1.7s ease-in infinite alternate;
}
.logo1 {
  @include img_l_pc(322, -180, -25);
  animation: jump5 .8s ease-in infinite alternate;
  transform-origin: 65% 100%;
}

.logo2 {
  @include img_l_pc(129, -80, 85);
  animation: jump5 .6s -.6s ease-in infinite alternate;
  transform-origin: 65% 100%;
}
.p5 {
  width:100%;
// @include img_l_pc(310, 440, 403);
}

.p6 {
  width:100%;
//  @include img_l_pc(294, 620, 856);
}
@keyframes jump2{
  to{transform: translateX(-15%);}
}
@keyframes jump5{
  to{transform:scale(0.8);}
}

.title {
  @include img_c_pc(680, 100);
  font-size: size(51.4);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}
.p1 {
  @include img_r_pc(198, 130, 292);
  animation: jump1 3s 0s linear  infinite;
  font-size: 1vw;
}
@keyframes jump1{
  0%{transform: translateY(0);opacity:1}
  30%{transform: translateY(27em);opacity:1}
  78%{transform: translateY(27em);opacity:1}
  80%{transform: translateY(30em);opacity: 0}
  100%{transform: translateY(30em);opacity: 0}
}



.grass {
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
}

.title2 {
  @include img_c_pc(206, 0);
  font-size: size(51.4);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.swipe {
  position: absolute;
  top: size(120);
  left: 0;
  right: 0;
  margin: 0 auto;
}
.video-slide {
  cursor: pointer;
  transition: all 0.3s;
  
  .box100{position: absolute;top: 0;left: 0;width: 0;height: 0;}
  &:hover {
    .mask {
      opacity:0.6;
      .slide-title,.btn{opacity:0;}
    }
  }
  &.current:hover {
    .mask {
      opacity:1;
      .slide-title,.btn{opacity:1;}
    }
    .box100{width: 100%; height: 100%;}
  }


  .play-btn {
    width: 125px;
    cursor: pointer;
    z-index: 2;

    display: block;

    &.hide {
      display: none;
    }
  }

  .video {
  }

  .video-img {
    width: 100%;
    display: block;

    &.hide {
      display: none;
    }
  }
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 55.3%;
  height: 100%;
  background-color: #f5f0eccc;
  opacity: 0;
  transition: all 0.3s;
  padding:size(60);
  display: flex;align-items: center;
}

.slide-title {
  //@include img_r_pc(473, 265, 0);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: justify;
  color: #40834d;text-shadow: 0 0 0.5em #fff;
  cursor: pointer;opacity:0;
}

.btn {
  @include img_r_pc(176, 438, 107);
  width: auto;
  top: auto;bottom: 0.5em;
  right: 0.5em;
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #606060;
  cursor: pointer;opacity:0;
}

.pagination {
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  top: size(630);
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 10px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1.8em;
    height: 1.8em;
    border-radius:50%;
    color: #fff;
    position: relative;
    transition: all 0.5s;
    font-size: size(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height:1.8;
    letter-spacing: normal;
    text-align: center;
    background-color: #fff3;

    &::before {
      // content: '';
      // width: 60%;
      // height: 60%;
      // display: block;
      // background: #fff;
      // border-radius: 20px;
      // opacity: 1;
      // position: absolute;
      // top: 20%;
      // // transform: translateY(-50%);
      // left: 20%;
      // transition: all 0.3s;
      // transform-origin: center;
      // transform: scale(0);
    }
    &.active {
      color: #709339;
      background-color: #fff;
      &::before {
        // content: '';
        // width: 100%;
        // height: 100%;
        // display: block;
        // background: #fff;
        // border-radius: 20px;
        // opacity: 1;
        // position: absolute;
        // top: 0%;
        // // transform: translateY(-50%);
        // left: 0%;
        // transform: scale(1);
      }
    }
  }
}

.child-jump {
  width:100%;
  height:100%;
 // overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
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
  .section6 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: sizem(900);
    max-height: sizem(900);
    background-size: cover;
    background-attachment: scroll;
    position: relative;
    // z-index: 1;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .bg {
    @include img_r_m(375, 0, 0);
  }

  .block-1 {
    width: 100vw;
    height: sizem(437);
    position: relative;
  }

  .block-2 {
    background-color: #71943a;
    position: relative;
    width: 100vw;
    height: sizem(900 - 437);
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    background-color: #fff;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .title-img {
    @include img_l_m(108, 123, 93);
    z-index: 4;
  }

  .tbg {
    @include img_l_m(220, 82, 33);
    z-index: 1;
  }

  .o {
    @include img_r_m(163, 34, 0);

      z-index: 2;
    &.high {
      z-index: 3;
    }
  }
  
  .p2{
    @include img_l_m(92, 230, 20);
    z-index: 3;
  }

  .p3 {
    @include img_l_m(88, 284, 143);
    z-index: 3;
  }

  .logo1 {
    @include img_l_m(96, -60, -20);
    z-index: 4;
  }

  .logo2 {
    @include img_l_m(38, -25, 20);
    z-index: 4;
  }


  .title {
    @include img_c_m(290, 24);
    font-size: sizem(22);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
    z-index: 4;
  }

  .p1 {
    @include img_r_m(60, 170, 66);
  font-size: 1vw; 
  z-index: 2;
  }

  .grass {
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .title2 {
    @include img_c_m(140, 0);
    font-size: sizem(35);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  .swipe {
    position: absolute;
    top: sizem(80);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .video-slide {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      .mask {
        opacity: 1;
      }
    }

    .play-btn {
      width: 125px;
      cursor: pointer;
      z-index: 2;

      display: block;

      &.hide {
        display: none;
      }
    }

    .video {
    }

    .video-img {
      display: block;

      &.hide {
        display: none;
      }
    }
  }

  .mask {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 48.5%;
    height: 100%;
    background-color: #f5f0ec;
    opacity: 0;
    transition: all 0.3s;
  }

  .slide-title {
    @include img_r_m(310, 250, 32);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #faee00;
    cursor: pointer;
    text-shadow: 0 0 0.2em #0006;
    opacity: 1;
  }

  .btn {
    @include img_r_m(130, 350, 32);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    opacity: 1;
  }

  .pagination {
    position: absolute;
    width: 100vw;
    right: 0;
    left: 0;
    top:sizem(400);
    //bottom: size(100);
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      color: #fff;
      position: relative;
      transition: all 0.5s;
      font-size: size(18.2);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 20px;
      letter-spacing: normal;
      text-align: center;

      &::before {
        // content: '';
        // width: 60%;
        // height: 60%;
        // display: block;
        // background: #fff;
        // border-radius: 20px;
        // opacity: 1;
        // position: absolute;
        // top: 20%;
        // // transform: translateY(-50%);
        // left: 20%;
        // transition: all 0.3s;
        // transform-origin: center;
        // transform: scale(0);
      }
      &.active {
        color: #709339;
        background-color: #fff;
        &::before {
          // content: '';
          // width: 100%;
          // height: 100%;
          // display: block;
          // background: #fff;
          // border-radius: 20px;
          // opacity: 1;
          // position: absolute;
          // top: 0%;
          // // transform: translateY(-50%);
          // left: 0%;
          // transform: scale(1);
        }
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import main from '@/main.js'
import { isPC, isMobile, isTablet } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'
import info from '@/info'

export default {
  name: 'section6',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // currentIndex: 0,
      slideList: [
        {
          title: '前20名報名者，將獲得瑪莎限量拍照牌！',
          img: require('./s7/1.jpg'),
        },
        {
          title: '透過唱跳遊戲及手作的方式，讓孩子更加認識過年。',
          img: require('./s7/2.jpg'),
        },
        {
          title: '聽說海底王國裡有許多故事，跟著海底探險家出發吧！',
          img: require('./s7/3.jpg'),
        },
        {
          title: '讓姊姊說好聽好玩的故事，感受不同的週末親子時光。',
          img: require('./s7/4.jpg'),
        },
        {
          title: '國語日報特製闖關遊戲，結合閱讀，玩樂中兼具學習！',
          img: require('./s7/5.jpg'),
        },
        {
          title: '透過繪本、唱跳和動手玩創作，一起來迎接春天吧～',
          img: require('./s7/6.jpg'),
        },
        {
          title: '邀請親子同樂，一起透過讀報來認識世界，創造驚喜。',
          img: require('./s7/7.jpg'),
        },
        {
          title: '激發孩子創造力，活動筋骨，擁有開心健康的兒童節！',
          img: require('./s7/8.jpg'),
        },
        {
          title: '一杯口感馥郁香氣的黑色飲料，蘊藏著多少功夫細節？',
          img: require('./s7/9.jpg'),
        },
      ],
      videoWidth: isMobile?window.innerWidth * 350 / 375:window.innerWidth * 1036 / 1920,
      videoHeight:isMobile?window.innerWidth * 163 / 375: window.innerWidth * 483 / 1920,
    }
  },

  methods: {
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },

    onBeforeSlideChange(index) {
      this.slideIndex = index
    },

    changeAct(index) {
      main.$emit('changeAct', index)
    }
  },

  created() {},

  mounted() {
    if (this.isTablet) {
      this.videoWidth = window.innerWidth * 1036 / 1920
      this.videoHeight = window.innerWidth * 483 / 1920
    }
    if (this.isMobile) {
      this.videoWidth = window.innerWidth * 350 / 375
      this.videoHeight = window.innerWidth * 160 / 375
    }
  },

  computed: {},
}
</script>
