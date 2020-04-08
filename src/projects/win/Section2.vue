<template>
  <div class="section2">
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
      <div class="slide">
        <div class="slide-content">
          <div class="slide-subtitle">
            {{slideList[slideIndex].subtitle}}
          </div>
          <div
            class="slide-title"
            v-html="slideList[slideIndex].title"
          >
          </div>
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
            src="./s2/2-1.jpg"
            alt=""
          >
          <div class="item-title">統一國際大樓</div>
          <div class="item-desc">（太子建設實績）</div>
        </div>
        <div class="block-item">
          <img
            src="./s2/2-2.jpg"
            alt=""
          >
          <div class="item-title">台北W飯店</div>
          <div class="item-desc">（太子建設實績）</div>
        </div>
        <div class="block-item">
          <img
            src="./s2/2-3.jpg"
            alt=""
          >
          <div class="item-title">統一時代百貨</div>
          <div class="item-desc">（太子建設實績）</div>
        </div>
      </div>
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
          <div class="title">磐石陣容 來自超越半甲子的累積</div>
          <div class="right-border"></div>
        </div>
        <div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div>
      </div>
      <div class="slide">
        <div class="slide-content">
          <div class="slide-subtitle">
            {{slideListM[slideIndex].subtitle}}
          </div>
          <div
            class="slide-title"
            v-html="slideListM[slideIndex].title"
          >
          </div>
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
        <swiper
          :options="swiperOption2"
          ref="mySwiper2"
          class="slide-b"
        >
          <swiper-slide
            v-for="(slide, index) in slideListM2"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.img"
              :class="`item-img-b`"
            />
            <div
              class="slide-b-title"
              v-html="slide.title"
            ></div>
            <div
              class="slide-b-desc"
              v-html="slide.desc"
            ></div>
          </swiper-slide>
        </swiper>
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
  margin-top: 150px;
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
    margin: 38px 5% 66px 5%;
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

.slide-content {
  background-color: #da007f;
  width: 300px;
  height: 541px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  .slide-subtitle {
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: 0.42px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .slide-title {
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 0.64px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
}

.item-img {
  width: 1080px;
  height: auto;
  position: relative;
  left: 150px;
}

.slide {
  overflow-x: hidden;
  overflow-y: visible;
}

.block-img {
  margin-top: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 200px;
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
  .container {
    width: 100vw;
  }

  .title-block {
    margin-top:size-m(40);
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

  .slide-content {
    background-color: #da007f;
    width: size-m(330);
    height: size-m(127);
    position: absolute;
    top: size-m(280);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    .slide-subtitle {
      font-size: size-m(12.5);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.24;
      letter-spacing: 0.42px;
      text-align: center;
      color: #ffffff;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }

    .slide-title {
      font-size: size-m(17);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.19;
      letter-spacing: 0.64px;
      text-align: center;
      color: #ffffff;
      width: 100%;
      text-align: center;
    }
  }

  .item-img {
    width: 100vw;
    height: auto;
    position: relative;
    left: 0px;
  }
  .slide {
    overflow: visible;
  }

  .slide-b {
    margin-top: 150px;
    width: 200vw;
    margin-left: -50vw;
  }

  .item-img-b {
    width: 100%;
  }

  .slide-b-title {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.24px;
    text-align: center;
    color: #595757;
  }

  .slide-b-desc {
    font-size: size-m(10);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.98;
    letter-spacing: 0.18px;
    text-align: center;
    color: #595757;
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
    width: auto;
    height: size-m(300);
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
  name: 'section2',
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
          img: require('./s2/img1-1.jpg'),
          subtitle: '蟬聯台灣新十大豪宅',
          title: '2012<br />信義計劃區<br />台北信義',
        },
        {
          img: require('./s2/img1-2.jpg'),
          subtitle: '移植台北信義團隊擘劃',
          title: '2017<br />新莊副都心<br />太子信義',
        },
      ],
      slideListM: [
        {
          img: require('./s2/mo/img1-1.jpg'),
          subtitle: '蟬聯台灣新十大豪宅',
          title: '2012<br />信義計劃區<br />台北信義',
        },
        {
          img: require('./s2/mo/img1-2.jpg'),
          subtitle: '移植台北信義團隊擘劃',
          title: '2017<br />新莊副都心<br />太子信義',
        },
      ],
      slideListM2: [
        {
          img: require('./s2/2-1.jpg'),
          title: '統一國際大樓',
          desc: '（太子建設實績）',
        },
        {
          img: require('./s2/2-2.jpg'),
          title: '台北W飯店',
          desc: '（太子建設實績）',
        },
        {
          img: require('./s2/2-3.jpg'),
          title: '統一時代百貨',
          desc: '（太子建設實績）',
        },
      ],
      swiperOption2: {
        slidesPerView: isMobile ? 3 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        // autoplay: {
          // delay: 4000,
          // disableOnInteraction: true,
        // },
        loop: true,
        // direction: 'vertical',
        // effect: 'fade',
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      },
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
