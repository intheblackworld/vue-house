<template>
  <div class="section5">
    <div class="bg">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
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
            :class="`item-img1`"
            alt="item-img"
          />
          <img
            v-lazy="slide.src"
            :class="`item-img2`"
            alt="item-img"
          />
        </swiper-slide>
        <div
          v-if="!isMobile"
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
  height: size(900);
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      display: none;
      width: 140px;
      left: auto;
      bottom: 20px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 8px;
      background-color: transparent;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
}

.swiper-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100vw;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    object-fit: contain;
    object-position: 0 0;
    &.item-img2 {
      left: 0;
    }
  }
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
    height: size-m(750);

    &::v-deep {
      .swiper-pagination {
        width: 80px;
        left: auto;
        bottom: 10px;
        right: 10px;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        box-shadow: 0 0 0 1px #fff;
        margin: 0 5px;
        background-color: transparent;
        opacity: 1 !important;
      }

      .swiper-pagination-bullet-active {
        background-color: #000;
      }
    }
  }
  .swiper-container {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    .item {
      background: #0082b4;
      &:last-child {
        background: #020e1f;
      }
    }
    img {
      width: auto;
      object-fit: cover;
      height: 100%;
      position: absolute;
      top: auto;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      object-fit: contain;
      display: none;
      object-position: 0 0;
      &.item-img2 {
        display: block;
        top: auto;
        bottom: 0;
        left: 50%;
      }
    }
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
          src: isMobile ? require('./mo/5/1.jpg') : require('./s5/1.jpg'),
        },
        {
          src: isMobile ? require('./mo/5/2.jpg') : require('./s5/2.jpg'),
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
