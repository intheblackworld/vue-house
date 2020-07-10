<template>
  <div class="section7">
    <div class="container">
      <div class="title-block">
        <img
          v-lazy="require('./s2/logo.png')"
          alt=""
          class="logo"
        >
        <div class="flex-ac flex-jb t-block">
          <div class="left-border"></div>
          <div class="title">完美格局 不浪費每一寸的幸福</div>
          <div class="right-border"></div>
        </div>
        <div class="desc">
          太子建設用心規劃,讓小坪數的空間潛力發揮到極致,居住品質絲毫不妥協
        </div>
      </div>
      <div class="relative">
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class="relative"
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
          >
            <img
              :src="slide.img"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>
        <div
          v-html="slideList[slideIndex].title"
          class="slide-title flex-c"
        ></div>
      </div>
      <img
        src="./s7/img.jpg"
        alt=""
        class="img"
        v-if="!isMobile"
      >

      <div
        class="animate-slide"
        v-if="isMobile"
      >
        <div class="item">
          <img
            src="./s7/img.jpg"
            alt=""
          >
        </div>
        <div class="item">
          <img
            src="./s7/img.jpg"
            alt=""
          >
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
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23fff'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E")
      no-repeat center center;
    content: '';
    background-size: contain;
  }
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
  margin-top: 40px;
  margin-bottom: 40px;
}

.slide-title {
  font-size: 34px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 0.68px;
  text-align: center;
  color: #fff;
  height: 70px;
  background-color: #da007f;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
}

.item-img {
  width: 100%;
  height: auto;
  position: relative;
}

.slide {
  overflow: initial;
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
      margin: 20px 30px;
    }
  }

  .slide-title {
    font-size: size-m(17);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 0.64px;
    text-align: center;
    color: #fff;
    width: 100%;
    text-align: center;
    height: 30px;
  }

  // .swiper-button-prev,
  // .swiper-button-next {
  //   width: auto;
  //   height: size-m(300);
  //   padding: 0 size-m(5);
  //   cursor: none;
  // }

  .animate-slide {
    display: flex;
    position: relative;
    width: 400vw;
    z-index: 4;
    // height: size-m(125);
    left: 0;
    animation: moving 15s linear infinite;
    margin-top: 30px;
    margin-bottom: 30px;
    transform: translateX(0vw);
    .item {
      min-width: calc(100vw / 2.5);
      padding: 0 1px;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }

      .item-title {
        font-size: calc(100vw * (19 / 1920));
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        text-shadow: 0 0 3px #000;
      }
    }
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes moving {
    to {
      transform: translateX(-50%);
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
          img: require('./s7/1.jpg'),
          title: '優雅起居,完美家居生活',
        },
        {
          img: require('./s7/2.jpg'),
          title: '寫意早晨,坐享公園景觀',
        },
        {
          img: require('./s7/3.jpg'),
          title: '雙面探光,讓陽光瀟進來',
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
