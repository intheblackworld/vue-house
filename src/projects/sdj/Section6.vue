<template>
  <div class="section5">
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
            :src="slide.src"
            :class="`item-img`"
          />
          <div class="slide-title absolute">{{slide.title}}</div>
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
  height: size(1080);
  overflow: hidden;


  &::v-deep {
    .swiper-pagination {
      width: 360px;
      left: auto;
      bottom: 20px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      background-color: transparent;
      opacity: 1 !important;
      margin: 0 8px;
    }

    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
}

.swiper-container {
  width: 100vw;
  height: size(1080);
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  img {
    display: block;
  }
}

.slide-title {
  padding: 3px 25px;
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  z-index: 10;
  right: 0;
  bottom: size(80);
}

.item-img {
  width: 100vw;
  height: size(1080);
  object-fit: cover;
  object-position: center;
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
  name: 'section5',
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
        // centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        effect: 'fade',
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_RF觀星午茶區_1090103_.jpg'),
          title: 'RF觀星午茶區',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_中庭景觀_1090206_.jpg'),
          title: '中庭景觀',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_中庭泳池_1090219_.jpg'),
          title: '中庭泳池',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_交誼廳_1090206_.jpg'),
          title: '交誼廳',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_健身房_1090203_.jpg'),
          title: '健身房',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_兒童室_1090203_.jpg'),
          title: '兒童室',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_多功能教室_1090203_.jpg'),
          title: '多功能教室',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_水景步道_1090206_.jpg'),
          title: '水景步道',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_角度1大廳_1090117_.jpg'),
          title: '角度1大廳',
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
