<template>
  <div class="section3">
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
          <div class="title">北新路重畫區 現代完美住宅典範</div>
          <div class="right-border"></div>
        </div>
        <!-- <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div> -->
      </div>
      <div class="c-block">
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

        <div class="content">
          位於北新重劃區首排「Win太子」面萬坪綠帶公園，臨近新店區公所捷運站2號出口，同時具備優越的現代化機能及純粹自然的綠意環境，行政、商業、交通、休閒一應俱全，珍稀價值不言而喻。
          在生活機能方面，捷運新店區公所站近在咫尺，鄰近中正路商圈及傳統市場，已是企業主、醫生等金字塔頂端住戶之首選，歡迎親臨樹海豪宅的臨場實境感受！
        </div>
      </div>

      <img
        src="./s3/2.jpg"
        alt=""
        class="img"
      >
    </div>
    <div
      v-else
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
          <div class="title">北新路重畫區 現代完美住宅典範</div>
          <div class="right-border"></div>
        </div>
        <!-- <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div> -->
      </div>
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
          <!-- <div v-html="slide.name"></div> -->
        </swiper-slide>
        <!-- <div
          class="swiper-pagination"
          slot="pagination"
        ></div> -->
      </swiper>
      <div class="content">
        位於北新重劃區首排「Win太子」面萬坪綠帶公園，臨近新店區公所捷運站2號出口，同時具備優越的現代化機能及純粹自然的綠意環境，行政、商業、交通、休閒一應俱全，珍稀價值不言而喻。<br />在生活機能方面，捷運新店區公所站近在咫尺，鄰近中正路商圈及傳統市場，已是企業主、醫生等金字塔頂端住戶之首選，歡迎親臨樹海豪宅的臨場實境感受！
      </div>
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
  position: absolute;
  left: 0;
  width: 623px;
  overflow: hidden;
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

.swiper-slide {
  overflow: hidden;
}
.swiper-slide-active {
  overflow: initial;
}

.slide {
  position: relative;
}

.item-img {
  width: 100%;
  height: auto;
}

.c-block {
  width: 100%;
  position: relative;
  height: 652px;
  margin-top: 68px;
}

.content {
  width: 549px;
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: normal;
  text-align: left;
  color: #808080;
}

.img {
  width: 100%;
  margin-top: 60px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
  .container {
    width: 1080px;
  }

  .swiper-container {
    width: 550px;
  }

  .item-img {
    width: 100%;
    height: auto;
    position: relative;
  }

  .swiper-button-next {
    right: 12px;
  }

  .content {
    width: 450px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
  }
  .title-block {
    margin-top: 60px;
    .logo {
      width: 72px;
      height: auto;
      margin-bottom: 15px;
    }

    .left-border,
    .right-border {
      width: 14px;
      height: 6px;
      background: #d8007c;
      opacity: 0.5;
    }
    .t-block {
      width: 100vw;
      margin: 0 auto;
    }
    .title {
      font-size: size-m(21);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: 0.76px;
      text-align: center;
      color: #da007f;
    }

    .desc {
      font-size: size-m(13);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;
      letter-spacing: 0.46px;
      text-align: left;
      color: #808080;
      margin-top: 20px;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  .swiper-container {
    position: relative;
    left: 0;
    width: size-m(318);
    margin: 20px auto;
    overflow: hidden;
  }

  .content {
    width: size-m(318);
    margin: 0 auto;
    position: relative;
    right: 0;
    top: auto;
    transform: none;
    font-size: size-m(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: normal;
    text-align: left;
    color: #808080;
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
          img: require('./s3/1-1.png'),
          name: '中正紀念堂',
        },
        {
          img: require('./s3/1-2.png'),
          name: '公園示意圖',
        },
      ],
      slideListM: [
        {
          img: require('./s3/mo/1-1.png'),
          name: '中正紀念堂',
        },
        {
          img: require('./s3/mo/1-2.png'),
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
