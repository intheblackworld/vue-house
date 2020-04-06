<template>
  <div class="section5">
    <div
      v-if="!isMobile"
      class="container"
    >
      <div class="title-block">
        <img
          v-lazy="require('./s2/logo.png')"
          alt=""
          class="logo"
        >
        <div class="flex-ac flex-jb t-block">
          <div class="left-border"></div>
          <div class="title">磐石陣容 來自超越半甲子的累積</div>
          <div class="right-border"></div>
        </div>
        <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div>
      </div>
      <img
        src="./s5/img1.jpg"
        alt=""
        class="img"
      >
      <div class="slide">
        <div class="slide-content">
          <div class="slide-title" v-html="slideList[slideIndex].title"></div>
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class=""
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
            <!-- <div v-html="slide.name"></div> -->
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>

      <div class="block-img">
        <div class="block-item">
          <img
            src="./s5/img3-1.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
        <div class="block-item">
          <img
            src="./s5/img3-2.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
        <div class="block-item">
          <img
            src="./s5/img3-3.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="container"
    >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        class="left"
        @slideChangeTransitionStart="slideChanged"
      >
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
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-pagination-bullet {
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #c0c1c1;
  width: 15px;
  height: 15px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #c0c1c1;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.container {
  width: 1380px;
  margin: 0 auto;
  position: relative;
}

.title-block {
  margin-top: 230px;
  .logo {
    width: 130px;
    height: auto;
    margin-bottom: 25px;
  }

  .left-border,
  .right-border {
    width: 127px;
    height: 6px;
    background: #d8007c;
    opacity: 0.5;
  }
  .t-block {
    width: 946px;
    margin: 0 auto;
  }
  .title {
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: 0.76px;
    text-align: center;
    color: #da007f;
  }

  .desc {
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: 0.46px;
    text-align: left;
    color: #808080;
    margin-top: 38px;
    margin-bottom: 66px;
    text-align: center;
  }
}

.swiper-container {
  position: static;
}

.swiper-pagination {
  transform: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: 10px;
}

.swiper-button-prev,
.swiper-button-next {
  border: 0px none #0000 !important;
  width: size(50);
  height: 100%;
  top: 0;
  padding: 0 size(10);
  display: flex;
  margin: 0;
  z-index: 3;
  img {
    object-fit: contain;
    height: auto;
  }
}

.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}

.swiper-container {
  overflow: visible;
}
.swiper-slide {
  overflow: hidden;
}
.swiper-slide-active {
  overflow: initial;
}

.slide {
  position: relative;
}

.img {
  width: 100%;
  margin-bottom: 10px;
}

.slide-content {
  background-color: #e6e6e6;
  width: 620px;
  height: 546px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  .slide-title {
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: 0.68px;
    text-align: center;
    color: #595757;
  }
}

.item-img {
  width: 760px;
  height: 546px;
  position: relative;
  left: -310px;
}

.slide {
  overflow-x: hidden;
  overflow-y: visible;
}

.block-img {
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 230px;
}

.block-item {
  width: 30%;
  img {
    width: 100%;
  }
}

.item-title {
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.54;
  letter-spacing: 0.42px;
  text-align: center;
  color: #595757;
}

.item-desc {
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.3px;
  text-align: center;
  color: #595757;
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
  .container {
    width: 1080px;
  }

  .slide-content {
    background-color: #da007f;
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .item-img {
    width: 780px;
    height: auto;
    position: relative;
    left: 150px;
    object-fit: cover;
  }

  .swiper-button-next {
    right: 12px;
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
    position: relative;
    overflow: hidden;
  }
  .left {
    width: size-m(330);
    height: auto;
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
    bottom: 0;
    z-index: 2;
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
    padding: 0 size-m(5);
    cursor: none;
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
          delay: 400000,
          // disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
        // effect: 'fade',
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
          img: require('./s5/img2-1.jpg'),
          title: '公設規劃<br />專業物管 盡享飯店體驗',
        },
        {
          img: require('./s5/img2-2.jpg'),
          title: '公設規劃<br />花園健身 百萬美景盡收眼底',
        },
        {
          img: require('./s5/img2-3.jpg'),
          title: '公設規劃<br />華美空間 也是專屬私人招待所',
        },
      ],
      slideListM: [
        {
          img: require('./s2/img1-1.jpg'),
          name: '中正紀念堂',
        },
        {
          img: require('./s2/img1-2.jpg'),
          name: '公園示意圖',
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
