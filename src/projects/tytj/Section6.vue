<template>
  <div class="section6">
    <!-- <div :class="`bg absolute`"></div> -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      class="bg absolute"
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
    <img
      src="./s6/g-banner.png"
      alt=""
      class="g-banner absolute"
    >
    <img
      src="./s6/w-banner.png"
      alt=""
      class="w-banner absolute"
    >
    <img
      src="./s6/logo.png"
      alt=""
      class="logo-b absolute"
    >
    <img
      src="./s1/logo.png"
      alt=""
      class="logo absolute"
    >
    <div class="hr absolute"></div>
    <div class="desc absolute">
      特聘知名建築師團隊以現代造型為設計發展架構，精心規劃整體垂直分段設計並結合都市景觀，展現新穎兼具人文特質之藝 建築，外觀採用丁 掛磚加石材搭配造型，線條創造出整體建築細膩感，提升大樓外觀價值。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  height: size(1080);
  // overflow: hidden;
  position: relative;
  //height: size(1080);
  z-index: 2;
}
.bg {
  width: 100vw;
  height: size(1080);
  // background-image: url('./s6/bg1.jpg');
  background-size: cover;
  background-attachment: fixed;
  // opacity: 0;
  // transition: all 0.3s;

  // &.active {
  //   opacity: 1;
  // }

  &.day {
    background-image: url('./s6/bg2.jpg');
  }
}

.item-img {
  width: 100vw;
  height: size(1080);
}
.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.g-banner {
  width: size(824);
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
.w-banner {
  width: size(824);
  height: 100%;
  width: size(792);
  top: 0;
  left: 0;
  object-fit: cover;
}

.logo-b {
  width: size(423);
  left: size(231 - 423);
  bottom: size(-(423 / 2));
}

.logo {
  width: size(251);
  top: size(275);
  left: size(274);
}

.hr {
  width: size(577);
  height: 1px;
  background-color: #68361a;
  top: size(541);
  left: size(110);
}

.desc {
  width: size(577);
  top: size(569);
  left: size(110);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.8px;
  text-align: left;
  color: #3e3a39;
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
  .section6 {
    // height: 100vh;
    overflow: visible;
    position: relative;
    height: size-m(453 + 355);
    background-image: url('./mo/6/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

  .bg {
    width: 100vw;
    height: size-m(907 / 2);
    top: size-m(355);
    // background-image: url('./mo/6/img.jpg');
    background-size: cover;
    background-attachment: initial !important;
  }

  .item-img {
    width: 100vw;
    height: size-m(453);
  }

  .g-banner,
  .w-banner,
  logo-b {
    display: none;
  }

  .logo {
    width: size-m(138);
    top: size-m(32);
    left: size-m(117);
  }

  .hr {
    width: size-m(316);
    height: 1px;
    background-color: #68361a;
    top: size-m(177);
    left: size-m(28);
  }

  .desc {
    width: size-m(316);
    top: size-m(193);
    left: size-m(28);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section6',

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerColumn: 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        // centeredSlides: true,
        lazy: true,
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
          img: isMobile ? require('./mo/6/img.jpg') : require('./s6/bg1.jpg'),
        },
        {
          img: isMobile ? require('./mo/6/img2.jpg') : require('./s6/bg2.jpg'),
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
