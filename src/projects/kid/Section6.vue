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
      <img src="./s6/free.png" :alt="`${info.caseName}_title`" class="logo1">
      <img src="./s6/free.png" :alt="`${info.caseName}_title`" class="logo2">
      <img src="./s6/p5.png" :alt="`${info.caseName}_p5`" class="p5">
      <img src="./s6/p6.png" :alt="`${info.caseName}_p6`" class="p6">
      <div class="child-jump">
        <img src="./s6/p4.png" :alt="`${info.caseName}_p1`" class="p1" data-aos="child-jump" data-aos-delay="1200" data-aos-duration="3000">
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
            <div class="btn" @click="changeAct(index)" v-scroll-to="{element: '#contact'}">
              >>我要報名
            </div>
          </div>
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

.logo1 {
  @include img_l_pc(322, 239, 375);
}

.logo2 {
  @include img_l_pc(129, 550, 935);
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

.p5 {
  @include img_l_pc(310, 440, 403);
}

.p6 {
  @include img_l_pc(294, 620, 856);
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
  @include img_r_pc(217, 235, 223);
  top: auto;
}

.p2 {
  @include img_r_pc(211, 516, 445);
  top: auto;
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
  &:hover {
    .mask {
      opacity: 0.85;
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
    width: 1036px;
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
  width: 48.5%;
  height: 100%;
  background-color: #f5f0ec;
  opacity: 0;
  transition: all 0.3s;
}

.slide-title {
  @include img_r_pc(473, 265, 52);
  font-size: size(53.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #40834d;
  cursor: pointer;
}

.btn {
  @include img_r_pc(176, 438, 107);
  font-size: size(33.6);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #606060;
  cursor: pointer;
}

.pagination {
  position: absolute;
  width: 100vw;
  right: 0;
  left: 0;
  bottom: size(100);
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

.child-jump {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
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

  .logo1 {
    @include img_l_m(96, 170, 0);
    z-index: 4;
  }

  .logo2 {
    @include img_l_m(38, 262, 147);
    z-index: 4;
  }

  .title-img {
    @include img_l_m(108, 123, 93);
    z-index: 4;
  }

  .tbg {
    @include img_l_m(220, 82, 33);
    z-index: 3;
  }

  .o {
    @include img_r_m(163, 34, 0);

    &.high {
      z-index: 2;
    }
  }

  .p5 {
    @include img_l_m(92, 230, 0);
    z-index: 3;
  }

  .p6 {
    @include img_l_m(88, 284, 123);
    z-index: 3;
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
    @include img_r_pc(217, 235, 223);
    top: auto;
  }

  .p2 {
    @include img_r_pc(211, 516, 445);
    top: auto;
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
        opacity: 0.85;
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
      width: 274px;
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
  }

  .pagination {
    position: absolute;
    width: 100vw;
    right: 0;
    left: 0;
    bottom: size(100);
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

  .child-jump {
    width: size(1920);
    height: size(1080);
    min-height: size(1080);
    max-height: size(1080);
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
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
          title: '前20名報名者，將獲得瑪莎限量拍照牌！1',
          img: require('./s7/1.jpg'),
        },
        {
          title: '前20名報名者，將獲得瑪莎限量拍照牌！2',
          img: require('./s7/1.jpg'),
        },
        {
          title: '前20名報名者，將獲得瑪莎限量拍照牌！3',
          img: require('./s7/1.jpg'),
        },
      ],
      videoWidth: 900,
      videoHeight: 483,
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
      this.videoWidth = 800
      this.videoHeight = 450
    }
    if (this.isMobile) {
      this.videoWidth = 274
      this.videoHeight = 127
    }
  },

  computed: {},
}
</script>
