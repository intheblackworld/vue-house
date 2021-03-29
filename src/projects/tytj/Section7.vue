<template>
  <div class="relative section7">
    <img
      src="./s1/wlogo.png"
      alt=""
      class="logo absolute"
    >
    <swiper
      :options="swiperOption"
      ref="mySwiper7"
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
        <h3
          class="absolute item-title"
          v-html="slide.title"
        ></h3>
        <h3
          class="absolute item-subtitle"
          v-html="slide.subtitle"
        ></h3>
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
  //height: size(1080);
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
    height: size-m(375 + 204);
  }

  .logo,
  .title,
  .subtitle {
    display: block;
  }

  .logo {
    width: size-m(212);
    top: size-m(-(212 / 2));
    right: 0;
    left: 0;
    margin: 0 auto;
    opacity: 0.5;
  }



  .swiper-container {
    width: 100vw;
    height: size-m(590);
    position: absolute;
    top: size-m(104);
    left: 0;
  }

  .swiper-slide {background-image: linear-gradient(to right, #edbd5b, #edbc5b 29%, #d6a045 66%, #bf842e);}
  .item-img {
    margin-top: size-m(100);
    width: 100vw;
    height: size-m(375);
  }

.item-title {
    font-size: size-m(27);
  text-shadow: 0 3px 12px rgba(35, 24, 21, 0.4);
  font-weight: bold;
    line-height: 2.44;
  letter-spacing:0.14em;
    text-align: center;
  color: #ffffff;
    top: size-m(0);
    left: 0;
    right: 0;
    margin: 0 auto;
}
.item-subtitle {
    font-size: size-m(15);
    letter-spacing: 0.16em;
    text-align: center;
  color: #ffffff;
    top: size-m(48);
    left: 0;
    right: 0;
    margin: 0 auto;
}
  /* .relative {
    background-image: url('./mo/6/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: size-m(375 + 304);
  }

  .swiper-container {
    width: 100vw;
    height: size-m(375);
    position: absolute;
    top: 0;
    left: 0;
  }

  .desc {
    text-shadow: none;
    top: size-m(42 + 375);
    right: size-m(31);
    width: size-m(316);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
    z-index: 3;
  }
  */
}

</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
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
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
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
          img: require('./s7/public_1.jpg'),
          title: '精華公設',
          subtitle: '1F交誼廳',
        },
        {
          img: require('./s7/public_2.jpg'),
          title: '精華公設',
          subtitle: '3F宴會廳',
        },
        {
          img: require('./s7/public_3.jpg'),
          title: '精華公設',
          subtitle: '3F宴會廳',
        },
        {
          img: require('./s7/public_4.jpg'),
          title: '精華公設',
          subtitle: '3F閱讀室',
        },
        {
          img: require('./s7/public_5.jpg'),
          title: '精華公設',
          subtitle: '頂樓酒吧',
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
