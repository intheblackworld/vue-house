<template>
  <div class="section11">
    <div class="title">
      樣品屋樣品屋
    </div>
    <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? true : false" :border="0" :display="isMobile ? 1 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
      </slide>
    </carousel-3d>
    <div class="desc" v-html="slideList[slideIndex].desc"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section11 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
}

.carousel-3d-slide {
  background-color: transparent;
}

.title {
  @include img_c_pc(360, -120);
  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffd300;
}

.desc {
  @include img_c_pc(360, 0);
  width: 100%;
  top: auto;
  bottom: size(50);
  font-size: size(40);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}

.carousel-3d-container {
  z-index: 3 !important;
  margin-top: 100px !important;
}

.indigator-group {
  margin: 0 auto;

  .indigator {
    margin: 0 10px;
    cursor: pointer;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    height: auto !important;
  }

  .title {
    width: 100vw;
  }

  .txt1 {
    width: 80vw;
  }

  .txt2 {
    width: 65vw;
  }

  .frame {
    width: 100vw;
    top: calc(-100vw * (200 / 750));
  }

  .icon {
    width: 20px;
    top: calc(100vw * (420 / 750));
  }

  .carousel-3d-container {
    z-index: 3;
    margin-top: 30px !important;
  }

  .indigator-group {
    margin: 0 auto;

    .indigator {
      width: 25px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'section11',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isMobile,
      slideList: [
        {
          img: require('./s11/img1.jpg'),
          desc: '標題標題標題標題標題標題',
        },
        {
          img: require('./s11/2.jpg'),
          desc: '標題標題標題標題標題標題',
        },
        {
          img: require('./s11/3.jpg'),
          desc: '標題標題標題標題標題標題',
        },
        // {
        //   img: require('./s2/7.png'),
        //   alt: '豪禮7 全室暖風機'
        // },
      ],
      currentIndex: 0,
      imgWidth: 995,
      imgHeight: 747,
    }
  },

  mounted() {
    if (this.isTablet) {
      this.imgWidth = 800
      this.imgHeight = 650
    }
    if (this.isMobile) {
      this.imgWidth = window.screen.width
      this.imgHeight = window.screen.width * (570 / 750)
    } else {
      this.imgWidth = window.screen.width * (995 / 1920)
      this.imgHeight = window.screen.width * (747 / 1920)
    }
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.currentIndex = index
    },
  },
}
</script>
