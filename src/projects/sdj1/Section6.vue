<template>
  <div class="section6">
    <div class="bg">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        swiper-no-swiping
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            v-lazy="slide.src"
            :class="`item-img`"
            :alt="slide.title"
          />
          <!-- <img
            v-lazy="slide.src"
            :class="`item-img2`"
            :alt="slide.title"
          /> -->
          <!-- <div class="slide-title absolute">{{slide.title}}</div> -->
          <!-- <div class="absolute txt">3D示意圖僅供參考</div> -->
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/function.scss';

.bg {
  position: relative;
  height: size(828);
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      width: 100%;
      left: auto;
      bottom: 0px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: size(18);
      height: size(18);
      box-shadow: 0 0 0 1px #fff;
      background-color: transparent;
      opacity: 1 !important;
      margin: 0 8px;
      float: right;
      background-color: #9e9e9e;
    }

    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
}

.swiper-container {
  width: size(1569);
  height: size(779);
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: 0 auto;

  img {
    display: block;
  }
}

.item-img {
  width: size(1569);
  height: size(739);
  object-fit: cover;
  object-position: center;
  top: 0;
  left: 0;
  background-color: #fff;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    height: size-m(700);
    background-color: #fff;
    padding-top: size-m(50);

    &::v-deep {
      .swiper-pagination {
        width: 100%;
        left: auto;
        bottom: 0;
        right: 0px;
        left: 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        box-shadow: 0 0 0 1px #fff;
        margin: 0 5px;
        background-color: #666666;
        opacity: 1 !important;
      }

      .swiper-pagination-bullet-active {
        background-color: #b70049;
      }
    }
  }

  .swiper-container {
    width: size-m(326);
    height: size-m(646);
    overflow: visible;
    position: absolute;
    left: 0;
    top: 0;

    img {
      display: block;
    }
  }
  .txt {
    font-size: size-m(12);
    top: calc(50% + 30vw);
  }
  .slide-title {
    width: 100vw;
    height: size-m(57 / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: #0000;
    color: #fff;
    font-size: size-m(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    z-index: 10;
    right: 0;
    bottom: size-m(50);
  }
  .item-img {
    top: 0;
    left: 0;
    width: size-m(326);
    height: size-m(626);
    object-fit: cover;
    object-position: center;
  }
  .item-img2 {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    position: absolute;
    width: 100vw;
    height: auto;
    object-fit: contain;
    object-position: center;
    z-index: 2;
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
  name: 'section6',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        centeredSlides: true,
        preloadImages: false,
        cssMode: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: isMobile ? [
        {
          src: require('./mo/6/a1.png')
        },
        {
          src: require('./mo/6/a2.png')
        },
        {
          src: require('./mo/6/a3.png')
        },
        {
          src: require('./mo/6/a4.png')
        },
        {
          src: require('./mo/6/a5.png')
        },
        {
          src: require('./mo/6/a6.png')
        },
        {
          src: require('./mo/6/a7.png')
        },
        {
          src: require('./mo/6/a8.png')
        },
        {
          src: require('./mo/6/a9.png')
        },
        {
          src: require('./mo/6/a10.png')
        },
        {
          src: require('./mo/6/a11.png')
        },
      ] :[
        {
          src: require('./s6/1.png'),
        },
        {
          src: require('./s6/2.png'),
        },
        {
          src: require('./s6/3.png'),
        },
        {
          src: require('./s6/4.png'),
        },
        {
          src: require('./s6/5.png'),
        },
        {
          src: require('./s6/6.png'),
        },
        {
          src: require('./s6/7.png'),
        },
        {
          src: require('./s6/8.png'),
        },
        {
          src: require('./s6/9.png'),
        },
        {
          src: require('./s6/10.png'),
        },
        {
          src: require('./s6/11.png'),
        },
      ],
    }
  },
  methods: {},

  created() {
    // @click="showIframeDialog(slide.link)"
  },
}
</script>
