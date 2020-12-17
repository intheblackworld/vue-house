<template>
  <div class="section2">
    <h1 class="title">關於立瑾</h1>
    <h1 class="subtitle">
      堅持<span>「確實、創新、執行」</span>三大使命
    </h1>
    <div class="imgs flex-ac flex-jb" v-if="isPC">
      <div class="img" @click="$router.push('/about')">
        <img src="./s2/1.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            確實
          </div>
        </div>
      </div>
      <div class="img" @click="$router.push('/about')">
        <img src="./s2/2.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            創新
          </div>
        </div>
      </div>
      <div class="img" @click="$router.push('/about')">
        <img src="./s2/3.jpg" alt="">
        <div class="mask">
          <div class="border flex-c">
            執行
          </div>
        </div>
      </div>
    </div>
    <carousel-3d v-if="isMobile" ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? false : false" :border="0" :display="isMobile ? 3 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        <div class="mask">
          <div class="border flex-c">
            {{slide.name}}
          </div>
        </div>
      </slide>
    </carousel-3d>
    <div class="btn flex-c" @click="$router.push('/about')">瞭解更多</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(780);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include div_r_pc(346, 112, 4, 787);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.2em;
  text-align: center;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(630, 55, 100, 645);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing:0.02em;
  text-align: center;
  color: #5d5d5d;
  white-space: nowrap;

  span {
    font-size: size(27);
    color: #ff8200;
  }
}

.btn {
  @include div_r_pc(182, 48, 620, 869);
  background-color: #565656;
  cursor: pointer;
  text-shadow: 0 0 0.3em rgba(0, 0, 0, 0.8);
  font-size: size(23.8);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.16em;
  text-align: center;
  color: #fffcfd;
  transition: all 0.3s;
  &:hover {
    background-color: #ff8200;
  }
}

.imgs {
  width: size(1386);
  top: size(200);
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  .img {
    width: size(433);
    height: size(376);
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: size(27);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: size(51.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(10.32);
    text-align: center;
    color: #ffffff;
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
  .section2 {
    width: 100vw;
    min-height: sizem(584);
    max-height: sizem(812);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include div_r_m(375, 41, 72, 0);
    font-size: sizem(28);
  }

  .subtitle {
    @include div_r_m(375, 24, 120, 0);
    font-size: sizem(15);

    span {
      font-size: sizem(16);
    }
  }

  .btn {
    @include div_r_m(140, 37, 476, 117);
    font-size: sizem(18);
    &:hover {
      background-color: #444;
    }
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(200) !important;
  }

  .carousel-3d-item {
    // position: relative;

    &:hover, &.current {
      .mask {
        opacity: 1;
      }
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: sizem(20);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: sizem(32);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(6.32);
    text-align: center;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section2',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      currentIndex: 0,
      imgWidth: 451,
      imgHeight: 393,
      slideList: [
        {
          img: require('./s2/1.jpg'),
          alt: '',
          name: '確實',
        },
        {
          img: require('./s2/2.jpg'),
          alt: '',
          name: '創新',
        },
        {
          img: require('./s2/3.jpg'),
          alt: '',
          name: '確實',
        },
      ],
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

  mounted() {
    if (this.isMobile) {
      this.imgWidth = window.screen.width * 0.75
      this.imgHeight = window.screen.width * 0.75 * (234 / 271)
    }
  },

  created() {},

  computed: {},
}
</script>
