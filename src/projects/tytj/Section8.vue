<template>
  <div class="relative section7">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      data-aos="fade"
      data-aos-delay="200"
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
      <div
        v-if="!isMobile"
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: 100vh;
  overflow: hidden;
  position: relative;
  // height: size(1080);
  background-image: linear-gradient(
    to right,
    #edbd5b,
    #edbc5b 29%,
    #d6a045 66%,
    #bf842e
  );
  background-attachment: fixed;
}

.swiper-container {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.section7 {
  &::v-deep {
    .swiper-pagination {
      // display: none;
      width: 200px;
      left: auto;
      bottom: 20px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 6px !important;
      background-color: transparent;
      opacity: 1 !important;

      &:nth-child(4), &:nth-child(5) {
        display: none;
      }
    }

    .swiper-pagination-bullet-active {
      background-color: #190000;
    }
  }
}

.item-title {
  font-size: size(65);
  text-shadow: 0 3px 12px rgba(35, 24, 21, 0.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 9.1px;
  text-align: left;
  color: #ffffff;
  top: size(74);
  right: size(94);
}

.item-subtitle {
  font-size: size(26);
  text-shadow: 2px 3px 12px rgba(35, 24, 21, 0.4);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing: 4.16px;
  text-align: left;
  color: #ffffff;
  top: size(165);
  right: size(102);
}

.desc {
  text-shadow: 2px 3px 5px rgba(35, 24, 21, 0.4);
  top: size(82);
  right: size(79);
  width: size(660);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.8px;
  text-align: left;
  color: #ffffff;
  z-index: 3;
}

.item-img {
  width: 100vw;
  height: 100%;
  object-fit: cover;
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
    background-image: url('./mo/6/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: size-m(375);
  }

  .swiper-container {
    width: 100vw;
    height: size-m(375);
    position: absolute;
    top: 0;
    left: 0;
  }

  .item-img {
    width: 100vw;
    height: size-m(375);
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
  name: 'section7',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 20,
        slidesPerColumn: 1,
        // allowSlidePrev: isMobile ? true : true,
        // allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        lazy: true,
        // effect: 'slide',
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
          img: require('./s8/SLL_5930.jpg'),
        },
        {
          img: require('./s8/SLL_5957.jpg'),
        },
        {
          img: require('./s8/SLL_6024.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {
    if (this.isMobile) {
      this.slideList = [
        {
          img: require('./s8/SLL_5930.jpg'),
        },
        {
          img: require('./s8/SLL_5957.jpg'),
        },
        {
          img: require('./s8/SLL_6024.jpg'),
        },
      ]
    }
  },

  computed: {},
}
</script>
