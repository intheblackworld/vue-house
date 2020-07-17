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
              :alt="slide.title"
          />
          <img
            :src="slide.src"
            :class="`item-img2`"
              :alt="slide.title"
          />
          <div class="slide-title absolute">{{slide.title}}</div>
          <div class="absolute txt">樣品屋圖片僅供示意參考，依實際合約附圖為準。</div>
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
  height: 100vh;
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      width: 100vw;
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
  //height: size(1080);
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
  background-color: rgba(0, 0, 0, 0.4);
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
  bottom: size(30);
}

.txt {
  color: #ffffff;
  z-index: 2;
  right: size(30);
  opacity: 0.8;
  bottom: size(10);
}
.item-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  -webkit-filter: blur(5px) brightness(0.5);
}
.item-img2 {
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  object-position: center;
  z-index: 2;
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
    height: calc(177.8666666667vw - 63px);

    &::v-deep {
      .swiper-pagination {
        width: 100vw;
        left: auto;
        bottom: size-m(20);
        right: 0px;
        left: 0;
        margin: 0 auto;
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
    width: 100vw;
    height: calc(177.8666666667vw - 63px);
    object-fit: cover;
    object-position: center;
    -webkit-filter: blur(5px) brightness(0.5);
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
          src: require('./s8/1.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/2.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/3.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/4.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/5.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/6.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/7.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/8.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/9.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/10.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/11.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/12.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/13.jpg'),
          title: '空間饗宴',
        },
        {
          src: require('./s8/14.jpg'),
          title: '空間饗宴',
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
