<template>
  <div class="section6">
    <div class="bg fullscreen">
      <div class="absolute text">
        <div class="subtitle">好市多、和緯、文賢、海佃、國安商圈</div>
        <h3 class="title">5大商圈 悠閒享樂</h3>
      </div>
      <carousel-3d
        ref="mycarousel"
        :width="isMobile ? window.innerWidth : window.innerWidth * (width / 1920)"
        :height="isMobile ?window.innerWidth * (240 / 375) : window.innerWidth * (height / 1920)"
        :perspective="0"
        :disable3d="isMobile ? true : false"
        :border="0"
        :display="isMobile ? 1 : 3"
        :space="isMobile ? 'auto' : 'auto'"
        @after-slide-change="onAfterSlideChange"
        data-aos="fade" data-aos-delay="200"
      >
        <slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="video-slide"
        >
          <!-- <img
            src="./s3/play_btn.png"
            alt
            :class="`play-btn absolute-c ${slide.isPlay ? 'hide' : ''}`"
            @click="handlePlay(index)"
          />-->
          <img :src="slide.img" :class="`video-img absolute-c ${slide.isPlay ? 'hide' : ''}`" />
        </slide>
      </carousel-3d>
      <div class="btn-group flex-jb flex-ac flex-mobile-jb" v-if="isMobile">
        <img @click="goToSlide(currentIndex - 1)" src="./s6/mo/arrow-left.png" alt />
        <img @click="goToSlide(currentIndex + 1)" src="./s6/mo/arrow-right.png" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: url('./s6/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.text {
  top: calc(100vw * (100 / 1920));
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 9.2px;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 1.2px;
    text-align: center;
    color: #ffffff;
  }
}

.carousel-3d-container {
  margin-top: calc(100vw * (260 / 1920));
}
// .video-slide {
//   border: 1px solid #e6b048 !important;
//   cursor: pointer;
//   transition: all 0.3s;
//   &:hover {
//     border-color: #fff !important;
//   }

//   .play-btn {
//     width: 125px;
//     cursor: pointer;
//     z-index: 2;

//     display: block;

//     &.hide {
//       display: none;
//     }
//   }

//   .video-img {
//     width: calc(100vw * (950 / 1920));
//     display: block;

//     &.hide {
//       display: none;
//     }
//   }
// }

@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
    min-height: 750px;
  }

  .text {
    .title {
      font-size: calc(100vw * (76 / 1920));
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .video-slide {
    .play-btn {
      width: 125px;
      cursor: pointer;
      z-index: 2;

      display: block;

      &.hide {
        display: none;
      }
    }

    .video-img {
      width: 800px;
      display: block;

      &.hide {
        visibility: hidden;
      }
    }

    video {
      width: 100%;
    }
  }
  // .fullscreen {
  //   height: auto;
  // }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: center;
    display: block;
    background: #00578e;
  }

  .bg.fullscreen {
    height: auto !important;
  }

  // .img1 {
  //   top: 0;
  //   left: 0;
  //   width: 30vw;
  // }

  .img2 {
    position: relative;
  }

  .text {
    position: relative;
    left: 0;
    right: 0;
    top: auto;
    margin: 0 auto;
    margin-top: 30px;
    width: 90vw;

    .title {
      font-size: 36px;
      letter-spacing: 1.44px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 2px;
    }
  }

  .carousel-3d-container {
    margin-bottom: 0;
  }

  .video-slide {
    width: 100vw;
    // position: relative;
    z-index: 15;
    // .play-btn {
    //   width: 80px;
    //   cursor: pointer;
    //   z-index: 15;

    //   display: block;

    //   &.hide {
    //     display: none;
    //   }
    // }

    .video-img {
      width: 100vw;
      display: block;

      &.hide {
        display: none;
      }
    }

    video {
      width: 100%;
    }
  }

  .btn-group {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 10%;
    z-index: 12;

    img {
      width: 35px;
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',
  components: {
    Carousel3d,
    Slide,
  },

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      currentIndex: 0,
      width: 950,
      height: 620,
      window: window,
      slideList: [
        {
          img: require('./s6/1.jpg'),
        },
        {
          img: require('./s6/2.jpg'),
        },
        {
          img: require('./s6/3.jpg'),
        },
        {
          img: require('./s6/4.jpg'),
        },
      ],
    }
  },

  mounted() {
    if (this.isTablet) {
      this.videoWidth = 800
      this.videoHeight = 450
    }
    if (this.isMobile) {
      this.videoWidth = window.screen.width
      this.videoHeight = window.screen.width * (450 / 800)
    }
  },

  methods: {
    // pauseAll() {
    //   this.slideList[0].isPlay = false
    //   this.$refs[`video${0}`][0].pause()
    //   this.slideList[1].isPlay = false
    //   this.$refs[`video${1}`][0].pause()
    //   this.slideList[2].isPlay = false
    //   this.$refs[`video${2}`][0].pause()
    // },
    // // pausePlay(index) {
    // //   this.slideList[index].isPlay = false
    // //   this.$refs[`video${index}`][0].pause()
    // // },
    // handlePlay(index) {
    //   if (this.slideList[index].isPlay) {
    //     this.slideList[index].isPlay = false
    //     this.$refs[`video${index}`][0].pause()
    //   } else {
    //     this.slideList[index].isPlay = true
    //     this.$refs[`video${index}`][0].play()
    //   }
    // },

    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },

    onAfterSlideChange(index) {
      this.currentIndex = index
      // this.pauseAll()
    },
  },
}
</script>
