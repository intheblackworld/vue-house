<template>
  <div class="section9">
    <!-- <img src="./s9/bg.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s9/bg_m.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile"> -->
    <img src="./s3/icon.png" :alt="`${info.caseName}_img`" class="icon">
    <h1 class="title">
      古典融匯當代 一流名品 空間美學
    </h1>
    <carousel-3d ref="mycarousel" :width="slideWidth" :height="slideHeight" :perspective="61" :disable3d="isMobile ? true : false" :border="0" :display="isMobile ? 1 : 3" :inverseScaling="window.screen.width * (340 / 1920)" :space="isMobile ? 'auto' : window.screen.width * (830 / 1920)" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-slide">
        <img :src="slide.img" :class="`carousel-img absolute`" />
      </slide>
    </carousel-3d>
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goToSlide(index)"><span :class="`${currentIndex === index ? 'active' : ''}`"></span></div>
    </div>
    <div class="btn-group flex-jb flex-ac flex-mobile-jb" v-if="isMobile">
      <img @click="goToSlide(currentIndex - 1)" src="./all/prev-btn.png" alt />
      <img @click="goToSlide(currentIndex + 1)" src="./all/next-btn.png" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  // background: linear-gradient(to bottom, #c40000, #000);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after,
  // &::before {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: size(153);
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.carousel-3d-container {
  @include img_c_pc(1920, 265);
  overflow: visible !important;
}

.carousel-slide .current {
  // transform: none !important;
}

.carousel-slide {
  // transform: scaleY(1.75) !important;
}

.icon {
  @include img_c_pc(80, 92);
}

.title {
  @include img_c_pc(798, 183);
  font-size: size(55.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #6e0000;
  white-space: nowrap;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pagination {
  width: 100vw;
  top: size(983);
  right: 0;
  justify-content: center;
}

.pagination {
  width: size(500);
  bottom: size(64);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: size(20);
    height: size(20);
    border-radius: 0px;
    box-shadow: 0 0 0 1px #aa915e;
    position: relative;
    background-color: #aa915e;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #aa915e;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: 0 0 0 1px #6e0000;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #6e0000;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
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
  .section9 {
    width: 100vw;
    height: sizem(715);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .txt {
    @include img_l_m(330, 25, 25);
    height: auto;
    filter: drop-shadow(0 0 5px #036);
    display: block;
  }
  .title {
    // @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    letter-spacing: normal;
    line-height: 2;
    span {
      display: block;
      font-size: sizem(20);
      letter-spacing: 0.01em;
    }
  }

  .hr {
    //  @include img_r_m(230, 458, 102);
    height: sizem(1);
    margin: sizem(12) 0;
  }

  .desc {
    // @include img_r_m(292, 474, 40);
    font-size: sizem(14);
    font-weight: normal;
    letter-spacing: normal;
    white-space: normal;
    margin: 0 0 1.5em 0;
  }
  .item {
    .icon {
      width: sizem(39);
      margin-right: sizem(4);
    }

    .text {
      font-size: sizem(14);
      letter-spacing: size(0.9);
      line-height: 3.3;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(766);
    min-height: auto;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
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
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: sizem(370);
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',
  components: {
    Carousel3d,
    Slide,
  },
  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideWidth: 960,
      slideHeight: 536,
      currentIndex: 0,
      window,
      slideList: [
        {
          img: isMobile ? require('./s9/1_m.jpg') : require('./s9/1.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile ? require('./s9/2_m.jpg') : require('./s9/2.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile ? require('./s9/3_m.jpg') : require('./s9/3.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile ? require('./s9/4_m.jpg') : require('./s9/4.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile ? require('./s9/5_m.jpg') : require('./s9/5.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
      ],
    }
  },

  methods: {
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.currentIndex = index
    },
  },

  created() {},

  mounted() {
    if (this.isMobile) {
      this.slideWidth = window.screen.width
      this.slideHeight = window.screen.width * (450 / 800)
    } else {
      this.slideWidth = window.screen.width * (1217 / 1920)
      this.slideHeight = window.screen.width * (685 / 1920)
    }
  },

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
