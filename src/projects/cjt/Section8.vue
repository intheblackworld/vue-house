<template>
  <div class="section3">
    <div class="bg">
      <div v-if="!isMobile">
        <!-- <img src="./s8/bg.jpg" alt class="bg-img" /> -->
        <div :class="`text ${slideIndex === 3 ? 'hide': ''}`">
          <div class="subtitle">紅樹林保留地、景觀公園 水岸廊帶</div>
          <h3 class="title">生態休閒 加值健康</h3>
        </div>
        <div :class="`text ${slideIndex === 3 ? 'special': 'hide'}`">
          <div class="subtitle">九份子國中小生態學校 預計2021年招生</div>
          <h3 class="title">國家級綠校園 視界更大</h3>
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="400"
          @slideChangeTransitionEnd="slideChanged"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./s8/arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./s8/arrow-right.png" alt />
          </div>
        </swiper>
      </div>
      <div v-else>
        <div :class="`text ${slideIndex === 3 ? 'hide': ''}`">
          <div class="subtitle">紅樹林保留地、景觀公園 水岸廊帶</div>
          <h3 class="title">生態休閒 加值健康</h3>
        </div>
        <div :class="`text ${slideIndex === 3 ? 'special': 'hide'}`">
          <div class="subtitle">九份子國中小生態學校 預計2021年招生</div>
          <h3 class="title">國家級綠校園 視界更大</h3>
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="400"
          @slideChangeTransitionEnd="slideChanged"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./s8/arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./s8/arrow-right.png" alt />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s10/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  // padding-top: 220px;
  width: 100vw;
  height: calc(100vw * 1080 / 1920);
  background-attachment: fixed;

  > div {
    display: flex;
  }
}

.bg-img {
  width: 100vw;
  height: calc(100vw * 1080 / 1920);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.item-img {
  &:nth-child(1) {
    position: relative;
  }
  width: 100%;
  position: absolute;
}

.swiper-container {
  width: calc(100vw * (1322 / 1920));
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  .item-img {
    margin: 0 auto;
    width: calc(100vw * (1192 / 1920));
  }
}

.swiper-button-prev img,
.swiper-container-rtl .swiper-button-next img,
.swiper-button-next img,
.swiper-container-rtl .swiper-button-prev img {
  width: 36px;
  transform: translateY(-50%);
}

.text {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (100 / 1920));

  &.hide {
    opacity: 0;
  }

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 4px;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 4.4px;
    text-align: center;
    color: #ffffff;
  }
}

.special {
  .subtitle {
    letter-spacing: 6.6px;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .text {
    .title {
      font-size: calc(100vw * (82 / 1920));
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    padding: 180px 0;
  }

  .bg-img {
    top: 0;
    bottom: 0;
    height: auto;
  }

  .desc {
    margin-bottom: calc(100vw * 20 / 1920);
  }

  .item-desc {
    width: 400px;
    margin-bottom: calc(100vw * 10 / 1920);
  }

  .text {
    .title {
      font-size: calc(100vw * (83 / 1920));
    }
  }

  .swiper-container {
    width: calc(100vw * (1422 / 1920));
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    .item-img {
      margin: 0 auto;
      width: calc(100vw * (1192 / 1920));
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: 100% 100%;
    background-image: url('./s8/mo/bg.jpg');
    padding-top: 0;
    padding-bottom: 0;
    height: auto;

    > div {
      display: block;
      position: relative;
      z-index: 1;
    }
  }

  .text {
    position: relative;
  }

  .text {
    top: calc(100vw * (50 / 375));
    &.hide {
      display: none;
    }
    .title {
      font-size: 34.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 13px;
      letter-spacing: 5.5px;
    }
  }

  .special {
    .title {
      font-size: 31.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 12px;
      letter-spacing: 6px;
    }
  }

  .swiper-container {
    position: relative;
    width: 100vw;
    margin-top: 85px;
  }

  .item-img {
    &:nth-child(1) {
      position: relative;
    }
    width: 100vw !important;
    position: absolute;
  }

  .swiper-button-prev img,
  .swiper-container-rtl .swiper-button-next img,
  .swiper-button-next img,
  .swiper-container-rtl .swiper-button-prev img {
    width: 30px;
    transform: translateY(-40%);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section3',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          src: require('./s8/1.jpg'),
        },
        {
          src: require('./s8/2.jpg'),
        },

        {
          src: require('./s8/3.jpg'),
        },
        {
          src: require('./s8/4.jpg'),
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(this.slideIndex)
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },
}
</script>
