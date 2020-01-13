<template>
  <div class="section6">
    <div class="bg">
      <div v-if="!isMobile">
        <div class="content">
          <img src="./s6/icon.png" alt class="title-logo" />
          <div class="title">
            矩形方格語彙
            <br />跳躍天際線上
          </div>
          <div
            class="desc"
          >天天公園前，一座動感又童趣的建築坐地而生。【京城鳳翔】使用深灰及白色的線條與方格，搭配植栽陽台來營造出建築立面層次感，輕快而不沉重，加上半透光的玻璃，引進自然風光，讓窗外自然環境和建築內的生活搭起對話橋梁。</div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.img" :class="`item-img`" />
            <div class="item-title" v-html="slide.title"></div>
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>-->
        </swiper>
        <img src="./s6/bg.jpg" alt class="bg-img" />
      </div>
      <div v-else>
        <img src="./s6/icon_m.png" alt class="title-logo" />
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.img" :class="`item-img`" />
            <div class="item-title" v-html="slide.title"></div>
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>-->
        </swiper>
        <div class="content">
          <div class="title">
            矩形方格語彙
            <br />跳躍天際線上
          </div>
          <div
            class="desc"
          >天天公園前，一座動感又童趣的建築坐地而生。【京城鳳翔】使用深灰及白色的線條與方格，搭配植栽陽台來營造出建築立面層次感，輕快而不沉重，加上半透光的玻璃，引進自然風光，讓窗外自然環境和建築內的生活搭起對話橋梁。</div>
        </div>
        <img src="./s6/bg_m.jpg" alt class="bg-img" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  height: calc(100vw * 1000 / 1920);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
}

.bg-img {
  width: 100vw;
  height: calc(100vw * 1000 / 1920);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  mix-blend-mode: screen;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}

.swiper-container {
  width: 50vw;
  position: relative;
  z-index: 5;

  .item-img {
    &:nth-child(1) {
      position: relative;
    }
    width: 100%;
    position: absolute;
    display: block;
  }
}

.content {
  width: 50vw;
  height: 100%;
}

.title-logo {
  position: absolute;
  left: 0;
  top: 0;
  width: 50vw;
}

.title {
  font-size: calc(100vw * 60 / 1920);
  width: calc(100vw * 427 / 1920);
  margin: 0 auto;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 30px;
}

.desc {
  font-size: calc(100vw * 24 / 1920);
  width: calc(100vw * 677 / 1920);
  margin: 0 auto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: left;
  color: #cccccc;
  width: calc(100vw * (741 / 1920));
}

.item-title {
  font-size: calc(100vw * 24 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  z-index: 10;
}

.swiper-button-next,
.swiper-button-prev {
  // animation: arrow  linear 1s alternate infinite;
}
.swiper-button-next {
  // animation-delay:1s;
}

@keyframes arrow {
  to {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
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
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;

    > div {
      display: block;
    }
  }

  .swiper-container {
    width: 100vw;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 3;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .content {
    width: 90vw;
    padding-left: 0;
    margin: 0 auto;
  }

  .title-logo {
    width: 100vw;
    z-index: 10;
  }

  .title {
    font-size: calc(100vw * 29 / 375);
    width: calc(100vw * 214 / 375);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: 2.32px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 45 / 375);
    margin-bottom: calc(100vw * 17 / 375);
  }

  .subtitle {
    font-size: calc(100vw * 24 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 17 / 375);
    margin-bottom: calc(100vw * 30 / 375);
  }

  .desc {
    font-size: calc(100vw * 14 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #cccccc;
    width: 100%;
    padding-bottom:31vw;
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
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
  name: 'section6',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isHide: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
         // img: require('./s6/1.jpg'),
          title: '3Ｄ外觀示意圖',
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
}
</script>
