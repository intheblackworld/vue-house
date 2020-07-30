<template>
  <div class="section8">
    <div class="bg">
      <img
        src="./s8/1.jpg"
        alt=""
        class="item-img"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src"
          class="item"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
            :alt="slide.src"
          />
          <img
            :src="slide.src"
            :class="`item-img2`"
            :alt="slide.src"
          />
          <div
            class="slide-title flex-ac absolute"
            data-aos="fade-right"
            data-aos-delay="600"
          >{{slide.title}}</div>
          <div
            class="absolute txt"
            data-aos="fade-right"
            data-aos-delay="800"
          >樣品屋圖片僅供示意參考，依實際合約附圖為準。</div>
        </swiper-slide>
        <!-- <div
          v-if="!isMobile"
          class="swiper-pagination"
          slot="pagination"
        ></div> -->
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./all/箭頭2.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./all/箭頭1.png"
            alt
          />
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/function.scss';

.bg {
  position: relative;
  // min-height: size(1080);
  height: auto;
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      width: 100vw;
      left: auto;
      bottom: 20px;
      right: 20px;
      padding-right: size(180);
    }
    .swiper-pagination-bullet {
      width: size(16);
      height: size(16);
      box-shadow: 0 0 0 1px #fff;
      background-color: transparent;
      opacity: 1 !important;
      margin: 0 8px;
      background-color: #fff;
      float: right;
    }

    .swiper-pagination-bullet-active {
      background-color: #b70049;
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
  width: 100vw;
  height: size(78);
  padding: 3px 25px;
  padding-left: size(212);
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
  bottom: size(0);
}

.txt {
  color: #ffffff;
  z-index: 14;
  left: size(380);
  opacity: 1;
  bottom: size(27);
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
  object-fit: cover;
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
    height: size-m(467);
    background-color: #004a7f;

    &::v-deep {
      .swiper-pagination {
        width: 100vw;
        display: none;
        left: auto;
        bottom: size-m(32);
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

  .slide-title {
    width: 100vw;
    height: size-m(92);
    padding: size-m(5) size-m(25) size-m(5) size-m(30);
    padding-left: size-m(30);
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    z-index: 10;
    right: 0;
    bottom: size(0);
  }

  .txt {
    color: #ffffff;
    z-index: 14;
    left: auto;
    right: size-m(10);
    opacity: 1;
    bottom: size-m(27);
    font-size: size-m(12);
    width: 17em;
    text-align: left;
    line-height: 1.6;
    letter-spacing: 0.15em;
  }
  // .slide-title {
  //   width: 100vw;
  //   height: size-m(57 / 2);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   padding: 0;
  //   background-color: #0000;
  //   color: #ccc;
  //   font-size: size-m(16);
  //   font-weight: normal;
  //   font-stretch: normal;
  //   font-style: normal;
  //   line-height: 1.81;
  //   letter-spacing: normal;
  //   text-align: left;
  //   color: #ffffff;
  //   z-index: 10;
  //   right: 0;
  //   bottom: size-m(50);
  // }
  .item-img {
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(177.8666666667vw - 63px);
    object-fit: cover;
    object-position: center;
    //-webkit-filter: blur(5px) brightness(0.5);
  }
  .item-img2 {
    top: 0;
    left: 0;
    transform: translateY(0%);
    position: absolute;
    width: 100vw;
    height: size-m(375);
    object-position: center;
    z-index: 2;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section8',
  // mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerColumn: isMobile ? 1 : 2,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        // preloadImages: true,
        // cssMode: true,
        lazy: true,
        autoplay: {
          delay: 35000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
      ],
    }
  },
  methods: {},

  created() {
    // @click="showIframeDialog(slide.link)"
  },
}
</script>
