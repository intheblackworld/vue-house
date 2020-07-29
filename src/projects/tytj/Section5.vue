<template>
  <div class="relative section5">
    <div
      class="frame absolute"
      data-aos="fade-down-right"
      data-aos-delay="400"
    ></div>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      class="slide-container absolute"
    >
      <swiper-slide
        v-for="(slide, index) in slideList"
        :index="index"
        :key="slide.img"
      >
        <img
          :src="slide.img"
          alt=""
          class="item-img"
        >
      </swiper-slide>
      <div
        v-if="isMobile"
        class="swiper-button-prev"
        slot="button-prev"
      >
        <img
          src="./mo/arrow-left.png"
          alt
        />
      </div>
      <div
        v-if="isMobile"
        class="swiper-button-next"
        slot="button-next"
      >
        <img
          src="./mo/arrow-right.png"
          alt
        />
      </div>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: 100vh;
  overflow: hidden;
  position: relative;
  //height: size(1080);
}
.frame {
  width: size(1413);
  height: size(788);
  background-color: #c88f36;
  top:calc(50% - 38vw * 0.5);
  left: size(276);
}
.swiper-container {
  width: size(1410);
  height: size(792);
  left: size(230);
  top:50%;
  transform: translateY(-50%);
}

.item-img {
  width: size(1410);
  height: size(792);
}

.section5 {
  &::v-deep {
    .swiper-pagination {
      // display: none;
      width: 200px;
      left: 0;
      bottom: 20px;
      right: 0;
      margin: 0 auto;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 6px !important;
      background-color: transparent;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    background: #fff;
    height: size-m(750);
  }

  .frame {
    width: size-m(375);
    height: size-m(750);
    background-color: #c88f36;
    top: 0;
    left: 0;
  }
  .swiper-container {
    width: size-m(375);
    height: size-m(750);
    top: 0;
    left: 0;
    transform: translateY(-0%);
  }

  .item-img {
    width: size-m(375);
    height: size-m(750);
  }

  .section5 {
    &::v-deep {
      .swiper-pagination {
        // display: none;
        width: 200px;
        left: 0;
        bottom: 20px;
        right: 0;
        margin: 0 auto;
      }
      .swiper-pagination-bullet {
        width: 21px;
        height: 21px;
        box-shadow: 0 0 0 1px #fff;
        margin: 0 6px !important;
        background-color: transparent;
        opacity: 1 !important;
      }

      .swiper-pagination-bullet-active {
        background-color: #fff;
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
        loop: false,
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
      slideList: [
        {
          img: isMobile ? require('./mo/5/1.jpg' ): require('./s5/1.jpg'),
        },
        {
          img: isMobile ? require('./mo/5/2.jpg' ): require('./s5/2.jpg'),
        },
        {
          img: isMobile ? require('./mo/5/3.jpg' ): require('./s5/3.jpg'),
        },
        {
          img: isMobile ? require('./mo/5/4.jpg' ): require('./s5/4.jpg'),
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
