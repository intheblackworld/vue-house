<template>
  <div class="section10">
    <div class="bg">
      <div v-if="!isMobile">
        <!-- <img src="./s10/bg.jpg" alt class="bg-img" /> -->
        <div :class="`text`">
        <h3 class="title">健康第一</h3>
        <h4 class="subtitle">大台南首座抗空污別墅社區</h4>
        <p>裝置抗空污VAF智慧淨流設備，為居家生活做好防護<br>
加上太陽能光電系統、BWT豪宅級淨水設備<br>
時時刻刻守護全家人健康</p>
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
        <div :class="`text`">
          <div class="subtitle">台南首座抗空汙別墅造鎮</div>
          <h3 class="title">樂活新指標</h3>
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
  background: transparent;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  // padding-top: 220px;
  width: 100vw;
  height: calc(100vw * (1250 / 1920));
  background-color: #fcf8f2;// url('./s6/bg.jpg');

  > div {
    display: flex;
  }
}

.bg-img {
  width: 100vw;
  // height: calc(100vw * 1280 / 1920);
  position: absolute;
  top: 0;
  left: 0;
  // height: auto;
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
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;

  .item-img {
    margin: 0 auto;
    width: calc(100vw * (1192 / 1920));
    height: calc(100vw * (800 / 1920));
    // object-fit: cover;
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
    color: #40220f;
    line-height: 1.6;
    width:100%;
    font-stretch: normal;
    font-style: normal;
    letter-spacing:0.1em;
    text-align: center;
    font-size: calc(100vw * (18 / 1920));

  &.hide {
    opacity: 0;
  }

  .title {
    font-size:4.44em;
    font-weight: bold;
    line-height: normal;
  }

  .subtitle {margin: 0.1em 0 0 0;
    font-size:1.67em;
    font-weight: 600;transform: scaleX(0.9);
  }
  p{margin: 0.5em 0 0 0;
    font-size:1em;}
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

  .text .title {
    font-size: calc(100vw * (75 / 1920));
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

  .swiper-container {
    width: calc(100vw * (1422 / 1920));
    position: absolute;
    bottom: 40px;
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
    background-image: none;
    //background-color: #00578e;
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
      letter-spacing: 7.42px;
      margin-left: 0;
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
    bottom: 0;
  }

  .item-img {
    &:nth-child(1) {
      position: relative;
    }
    width: 100vw !important;
    height: auto !important;
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
  name: 'section10',
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
          src: require('./s10/1.jpg'),
        },
        {
          src: require('./s10/2.jpg'),
        },
        {
          src: require('./s10/3.jpg'),
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
