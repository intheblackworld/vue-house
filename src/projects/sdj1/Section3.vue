<template>
  <div class="relative">
    <img
      src="./s3/txt.png"
      alt=""
      class="content absolute"
    >
    <swiper
      class="absolute"
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
      </swiper-slide>
      <div
        v-if="!isMobile"
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
        v-if="isMobile"
      >
        <img
          src="./all/箭頭2.png"
          alt
        />
      </div>
      <div
        class="swiper-button-next"
        slot="button-next"
        v-if="isMobile"
      >
        <img
          src="./all/箭頭1.png"
          alt
        />
      </div>
    </swiper>
    <img
      src="./mo/3/txt.png"
      alt=""
      class="txt-img absolute"
    >
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: size(850);
  overflow: hidden;
  background: #fff;

  &::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
    width: auto !important;
    right: 30px;
    bottom: 0px;
    left: auto;
  }
  &::v-deep .swiper-pagination-bullet {
    width: size(22);
    height: size(22);
    background-color: #036ea7;
    // box-shadow: inset 0 0 0 1px #fff;
    opacity: 1;
    margin: 0 11px !important;
    border-radius: 100% !important;

    &.swiper-pagination-bullet-active {
      background-color: #b70049;
    }
  }
}

.content {
  width: size(497);
  top: size(50);
  left: size(178);
}

.swiper-container {
  width: size(1028);
  height: size(681);
  top: size(50);
  right: size(178);

  .item-img {
    width: size(1028);
    height: size(641);
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
  .relative {
    height: size-m(1600 / 2);
    overflow: hidden;
    background: #fff;

    &::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
      width: auto !important;
      right: 30px;
      bottom: 0px;
      left: auto;
    }
    &::v-deep .swiper-pagination-bullet {
      width: size(22);
      height: size(22);
      background-color: #036ea7;
      // box-shadow: inset 0 0 0 1px #fff;
      opacity: 1;
      margin: 0 11px !important;
      border-radius: 100% !important;

      &.swiper-pagination-bullet-active {
        background-color: #b70049;
      }
    }
  }

  .content {
    display: none;
  }

  .swiper-container {
    width: size-m(313);
    height: size-m(370);
    top: size-m(68);
    right: size-m(31);

    .item-img {
      width: size-m(313);
      height: size-m(370);
    }
  }

  .txt-img {
    width: 100vw;
    height: auto;
    top: size-m(450);
    left: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section3',
  // mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: isMobile
        ? [
            {
              src: require('./mo/3/資產 28-801.jpg'),
            },
            {
              src: require('./mo/3/資產 29-801.jpg'),
            },
            {
              src: require('./mo/3/資產 30-801.jpg'),
            },
            {
              src: require('./mo/3/資產 31-801.jpg'),
            },
          ]
        : [
            {
              src: require('./s3/1.jpg'),
            },
            {
              src: require('./s3/2.jpg'),
            },
            {
              src: require('./s3/3.jpg'),
            },
          ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
