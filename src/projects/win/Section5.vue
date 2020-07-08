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
          <div class="title">凝聚幸福生活最佳場域</div>
          <div class="right-border"></div>
        </div>
        <!-- div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div -->
      </div>
      <img
        src="./s5/img1.jpg"
        alt=""
        class="img"
      >
      <div class="slide">
        <div class="slide-content">
          <div
            class="slide-title"
            v-html="slideList[slideIndex].title"
          ></div>
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
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
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
        <div
          class="block-item"
          @click="showDialog(0)"
        >
          <img
            src="./s5/img3-1.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
        <div
          class="block-item"
          @click="showDialog(1)"
        >
          <img
            src="./s5/img3-2.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
        <div
          class="block-item"
          @click="showDialog(2)"
        >
          <img
            src="./s5/img3-3.jpg"
            alt=""
          >
          <div class="item-title">實品屋實景</div>
        </div>
      </div>
      <div :class="`dialog ${isShowDialog ? 'show' : ''}`">
        <img
          :src="dialogImg"
          alt=""
          class="dialog-content"
        >
        <img
          src="@/projects/jh/s4/close.png"
          class="close"
          alt
          @click="isShowDialog = false"
        />
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
          <div class="title">凝聚幸福生活最佳場域</div>
          <div class="right-border"></div>
        </div>
        <!-- div class="desc">太子建設蓋房子，秉持集團「三好一公道」的企業精神，講求地段好、設計好、施工好、價格公道。</div -->
      </div>
      <img
        src="./s5/mo/img1.jpg"
        alt=""
        class="img"
      >
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
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
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
              @click="showDialog(index)"
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
        <div :class="`dialog ${isShowDialog ? 'show' : ''}`">
          <img
            :src="dialogImg"
            alt=""
            class="dialog-content"
          >
          <img
            src="@/projects/jh/s4/close.png"
            class="close"
            alt
            @click="isShowDialog = false"
          />
        </div>
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
    width: 200px;
    height: 6px;
    background: #d8007c;
    opacity: 0.5;
  }
  .t-block {
    width: 946px;
    margin: 0 auto;
    margin-bottom: 50px;
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
  bottom: -20px;
}

.swiper-button-prev,
.swiper-button-next {
  border: 0px none #0000 !important;
  width: size(50);
  height: 100%;
  top: 0;
  padding: 0 size(10);
  display: flex;
  align-items: center;
  margin: 0;
  z-index: 3;
  &::before {
    width: 1em;
    height: 2em;
    display: block;
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23fff'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E") no-repeat center center;
    content:"";
    background-size: contain;}
}

.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  transform: rotate(180deg);
  right: 0;
}

.swiper-container {
  overflow: visible;
}

.swiper-container {
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
  overflow: initial;
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
  cursor: pointer;
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

.dialog {
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  .dialog-content {
    width: 1080px;
    height: auto;
  }

  &.show {
    display: flex;
  }

  .close {
    position: absolute;
    right: 10vw;
    top: 10vh;
    cursor: pointer;
  }
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
      margin-bottom: 20px;
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
    background-color: #e6e6e6;
    width: size-m(330);
    height: size-m(127);
    position: absolute;
    top: size-m(240);
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
      color: #595757;
      width: 100%;
      text-align: center;
      margin-top: -20px;
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
      color: #595757;
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
    margin-top: 120px;
    width: 200vw;
    margin-left: -50vw;
    margin-bottom: 50px;
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

  .dialog {
    display: none;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;

    .dialog-content {
      width: 100vw;
      height: auto;
    }

    &.show {
      display: flex;
    }

    .close {
      position: absolute;
      width: 40px;
      right: 10px;
      top: 20vh;
      cursor: pointer;
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
      isShowDialog: false,
      dialogImg: '',
      dialogImgList: [
        require('./s5/img3-1.jpg'),
        require('./s5/img3-2.jpg'),
        require('./s5/img3-3.jpg'),
      ],
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
          img: require('./s5/img2-0.jpg'),
          title: '公設規劃<br />專業物管 盡享飯店體驗',
        },
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
          img: require('./s5/img2-0.jpg'),
          title: '公設規劃<br />專業物管 盡享飯店體驗',
        },
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
      slideListM2: [
        {
          img: require('./s5/img3-1.jpg'),
          title: '實品屋實景',
        },
        {
          img: require('./s5/img3-2.jpg'),
          title: '實品屋實景',
        },
        {
          img: require('./s5/img3-3.jpg'),
          title: '實品屋實景',
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

    showDialog(index) {
      this.isShowDialog = true
      this.dialogImg = this.dialogImgList[index]
    },
  },

  mounted() {},

  computed: {},
}
</script>
