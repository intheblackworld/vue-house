<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="frame1">
        <img
          src="./s7/1.png"
          alt=""
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="400"
        >
        <img
          src="./s7/2.png"
          alt=""
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="600"
        >
        <img
          src="./s7/3.png"
          alt=""
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="800"
        >
      </div>
      <div class="frame2">
        <h3 class="title"
          data-aos="fade-left"
          data-aos-delay="400">邁向5G 家的新生活版本！</h3>
        <img
          src="./s7/5.png"
          alt=""
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="600"
        >
        <img
          src="./s7/6.png"
          alt=""
          class="bg-img"
          data-aos="fade-left"
          data-aos-delay="800"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <div class="frame1">
        <img
          src="./mo/6/img.png"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="400"
        >
      </div>
      <div class="frame2">
        <h3 class="title"
          data-aos="fade-left"
          data-aos-delay="400">邁向5G<br>家的新生活版本!</h3>

        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="600"
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
          </swiper-slide>
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
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #fff;
}

.frame1 {
  position: relative;
  width: size(1562);
  height: size(642);
  margin: 0 auto;
  margin-top: size(130);
  margin-bottom: size(127);
}

.frame2 {
  position: relative;
  width: size(1563);
  height: size(791);
  margin: 0 auto;
  margin-bottom: size(184);
  font-size:size(15);
  text-align: justify;
  .title{
    border-left: size(190) solid currentColor;
padding:1.4em 0 0 0.6em;letter-spacing: 0.05em;margin: 0 0 0.8em 0;
    color:#036ea8;font-size:size(51);font-weight: 800;}
}
.bg-img {
  width: 100%;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
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
}

@media screen and (max-width: 767px) {
  .relative {
    // height: 100vh;
    overflow: hidden;
    background: #fff;

    &::v-deep {
      .swiper-pagination {
        width: 100vw;
        left: auto;
        bottom: 0px;
        right: 0px;
      }
      .swiper-pagination-bullet {
        width: size-m(16);
        height: size-m(16);
        box-shadow: 0 0 0 1px #fff;
        background-color: transparent;
        opacity: 1 !important;
        margin: 0 8px;
        background-color: #036ea7;
        float: right;
      }

      .swiper-pagination-bullet-active {
        background-color: #b70049;
      }
    }
  }
  .frame1 {
    position: relative;
    width: 90vw;
    height: size-m(950);
    margin: 0 auto;
    margin-top: size-m(40);
    margin-bottom: size-m(28);
  }

  .frame2 {
    position: relative;
    width: 90vw;
    height: size-m(800);
    margin: 0 auto;
    margin-bottom: size-m(30);
  .title{
    border-left: size-m(96) solid currentColor;
padding:1em 0 0 1em;letter-spacing: -0.01em;
line-height: 1.3;
    color:#036ea8;font-size:size-m(29);font-weight: 800;}
  }

  .title-img {
    width: 100%;
    height: auto;
    margin-bottom: size-m(20);
  }

  .swiper-container {
    width: 100%;
    height: size-m(820);

    .item-img {
      width: 100%;
      background-color: #fff;
      display: block;
    }
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
  name: 'section7',
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
        slidesPerColumn: 1,
        lazy: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        // effect: 'slide',
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
          src: require('./mo/7/1.png'),
        },
        {
          src: require('./mo/7/2.png'),
        },
        {
          src: require('./mo/7/5.png'),
        },
        {
          src: require('./mo/7/4.png'),
        },
        {
          src: require('./mo/7/3.png'),
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
