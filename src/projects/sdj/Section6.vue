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
          <img
            :src="slide.src"
            :class="`item-img2`"
          />
          <div class="slide-title absolute">{{slide.title}}</div>
          <div class="txt">3D示意圖僅供參考</div>
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
  height:100vh;
  overflow: hidden;

  &::v-deep {
    .swiper-pagination {
      width:100%;
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
  height:100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  img {
    display: block;
  }
}

.slide-title {
  padding: 3px 50px 3px 25px;
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
  bottom: size(10);
}
.txt{
  color: #ffffff;
  right: 0;
  bottom: size(10);}
.item-img {top: 0;left: 0;
  width: 100vw;
  height:100vh;
  object-fit: cover;
  object-position: center;
  -webkit-filter:blur(5px)brightness(.5);
}
.item-img2 {top: 0;left: 0;
  position: absolute;
  width: 100vw;
  height:100vh;
  object-fit: contain;
  object-position: center;z-index: 2;
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
  height:calc(177.8666666667vw - 63px);

    &::v-deep {
      .swiper-pagination {
        width: 280px;
        left: auto;
        bottom: 10px;
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
.item-img {top: 0;left: 0;
  width: 100vw;
  height:calc(177.8666666667vw - 63px);
  object-fit: cover;
  object-position: center;
  -webkit-filter:blur(5px)brightness(.5);
}
.item-img2 {top:50%;left: 0;transform: translateY(-50% );
  position: absolute;
  width: 100vw;
  height:auto;
  object-fit: contain;
  object-position: center;z-index: 2;
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
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_角度1大廳_1090117_.jpg'),
          title: '大廳',
        },
        {
          src: require('./s6/大廳2.jpg'),
          title: '大廳',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_多功能教室_1090203_.jpg'),
          title: '媽媽教室',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_交誼廳_1090206_.jpg'),
          title: '交誼廳',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_水景步道_1090206_.jpg'),
          title: '水景步道',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_中庭景觀_1090206_.jpg'),
          title: '中庭景觀',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_兒童室_1090203_.jpg'),
          title: '兒童室',
        },
        {
          src: require('./s6/8運動休閒區.jpg'),
          title: '運動休閒區',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_健身房_1090203_.jpg'),
          title: '健身房',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_中庭泳池_1090219_.jpg'),
          title: '中庭泳池',
        },
        {
          src: require('./s6/上揚實業_達麗_上東京(鼎力案)_RF觀星午茶區_1090103_.jpg'),
          title: 'RF觀星午茶區',
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
