<template>
  <div class="section2">
    <div
      v-if="!isMobile"
      class="full-bg"
    >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        class="left"
        v-if="showSlide"
        @slideChangeTransitionStart="slideChanged"
      >
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./all/l.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./all/r.png"
            alt
          />
        </div>
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.img"
            :class="`item-img`"
          />
          <div v-html="slide.name"></div>
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img
          v-lazy="require('./s4/timg.png')"
          alt=""
          class="right-img"
        >
      </div>
      <div class="content">
        <div class="title">
          BEST<br />LIFE
        </div>
        <div class="subtitle">
          暢享雙北的便利
        </div>
        <div class="desc">
          從中正紀念堂到大安森林公園，從中央行政特區到台大校園，人文、學院、藝術、行政、公園、商圈多種機能一次滿足。整個台北市，都是你的後花園。
        </div>
      </div>
      <img
        v-lazy="require('./s4/logo.png')"
        alt=""
        class="logo"
      >
    </div>
    <div
      v-else
      class="m-bg"
    >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        class="left"
        @slideChangeTransitionStart="slideChanged"
      >
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./all/l.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./all/r.png"
            alt
          />
        </div>
        <swiper-slide
          v-for="(slide, index) in slideListM"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.img"
            :class="`item-img`"
          />
          <div v-html="slide.name"></div>
        </swiper-slide>
        <!-- div
          class="swiper-pagination"
          slot="pagination"
        ></div -->
      </swiper>
      <div class="bottom">
        <div class="m-content">
          <div class="title">
            BEST<br />LIFE
          </div>
          <div class="subtitle">
            暢享雙北的便利
          </div>
          <div class="desc">
            人文、學院、藝術、行政、公園、商圈多種機能一次滿足。整個台北市，都是你的後花園。
          </div>
        </div>
      </div>
      <img
        v-lazy="require('./s4/mo/timg.png')"
        alt=""
        class="m-img"
        data-aos="fade-right"
        data-aos-delay="300"
      >
      <img
        v-lazy="require('./s4/mo/bglogo.png')"
        alt=""
        class="logo"
        data-aos="fade"
        data-aos-delay="300"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.full-bg {
  background-color: #112d81;
}

.swiper-container {
  position: absolute;
  z-index: 2;
}

.swiper-pagination {
  transform: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: -5%;
}

.left {
  width: 50%;
  height: size(889);
  left: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    + div {
      position: absolute;
      font-size: size(18);
      font-weight: bold;
      letter-spacing: 0.09em;
      bottom: size(20);
      right: size(20);
      color: #fff;
      text-shadow: 0 0 2px #000;
    }
  }
}

.right-img {
  width: auto;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  transform: translateX(50%);
}
.swiper-button-prev,
.swiper-button-next {
  border: 0px none #0000 !important;
  width: size(50);
  height: 100%;top: 0;padding: 0 size(10);display: flex;margin: 0;
  img{object-fit: contain;height: auto;}
}

.swiper-button-prev {left:0;}
.swiper-button-next {right:0;}

.swiper-fullscreen {
  width: auto;
  height: 100vh;
  img {
    width: auto;
    height: 100%;
  }
}

.content {
  position: absolute;
  width: size(350);
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateX(63%);
  top: 25%;
  > div {
    width: 100%;
  }
}

.title {
  opacity: 0.8;
  font-family: Impact;
  font-size: size(111);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.06em;
  text-align: left;
  color: #db364a;
  margin-bottom:0.14em;
}

.subtitle {
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.16em;
  text-align: left;
  color: #db364a;
  white-space: nowrap;
  margin-bottom: 0.6em;
}

.desc {
  font-size: size(17);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.09em;
  text-align: justify;
  color: #ffffff;
}

.logo {
  position: absolute;
  width: auto;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateX(75%);
}
.swiper-container {
  overflow:hidden;
}
.swiper-slide {
  overflow: hidden;
}
.swiper-slide-active {
  overflow: initial;
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
  .m-bg {
    background-color: #112d81;
    position: relative;overflow: hidden;
  }
  .left {
    width: size-m(330);
    height:auto;
    position: relative;
    top: 0;
    transform: translate(0, 0);
    img {
      height: 100%;
      &.left-img {
        width: size-m(87);
      }
    }
    > div {
      font-size: size-m(12);
    }
  }
  .bottom {
    width: size-m(330);
    margin: size-m(30) auto size-m(90) auto;
    display: flex;
    position: relative;
  }


.swiper-fullscreen {
  width: auto;
  height: 100vh;
  img {
    width: auto;
    height: 100%;
  }
}

  .m-img {
    width: 100vw;
    position: absolute;
    right: 0;
    bottom: 0;z-index: 2;
  }
  .m-content {
    width: size-m(145);
  }

  .title {
    font-size: size-m(47);
  }

  .subtitle {
    font-size: size-m(15);
  }

  .desc {
    font-size: size-m(12);
  }

  .logo {
    width: 100vw;
    height: auto;
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transform: none;
  }

  .item-img {
    width: 100%;
    height: auto;
  }

  .swiper-pagination {
    // transform: none;
    // width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // top: auto;
    bottom: 5%;
  }

.swiper-button-prev,
.swiper-button-next {
  width: size-m(30);
  padding:0 size-m(5);cursor: none;
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
  name: 'section1',
  mixins: [slider],
  props: ['showSlide'],

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
          // disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
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
          img: require('./s4/img1.jpg'),
          name: '中正紀念堂',
        },
        {
          img: require('./s4/img2.jpg'),
          name: '公園示意圖',
        },
        {
          img: require('./s4/img3.jpg'),
          name: '台灣⼤學',
        },
      ],
      slideListM: [
        {
          img: require('./s4/mo/img1.jpg'),
          name: '中正紀念堂',
        },
        {
          img: require('./s4/mo/img2.jpg'),
          name: '公園示意圖',
        },
        {
          img: require('./s4/mo/img3.jpg'),
          name: '台灣⼤學',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },

  mounted() {},

  computed: {},
}
</script>
