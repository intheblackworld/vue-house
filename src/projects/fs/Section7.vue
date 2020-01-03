<template>
  <div class="section7">
    <div class="bg">
      <div v-if="!isMobile">
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
            共築開心弧線
            <br />由此開展笑顏
          </div>
          <div class="subtitle">甜蜜2房</div>
          <div class="desc">房間都開窗，才是真正適合生活的臥室，享受每天早上把陽光當鬧鐘的小確幸，更配備有雙衛浴，客人主人分開用，掌握全家生活自主權！</div>
          <div class="subtitle">幸福３房</div>
          <div class="desc">3間房都有窗，格局方方正正好規劃，盡情大展身手的小天地！客廳旁就是落地窗，直接連接大露臺，搭起與自然風光連結的舞台。</div>
        </div>
        <img src="./s7/bg.jpg" alt class="bg-img" />
      </div>
      <div v-else>
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
            共築開心弧線
            <br />由此開展笑顏
          </div>
          <div class="subtitle">甜蜜2房</div>
          <div class="desc">房間都開窗，才是真正適合生活的臥室，享受每天早上把陽光當鬧鐘的小確幸，更配備有雙衛浴，客人主人分開用，掌握全家生活自主權！</div>
          <div class="subtitle">幸福３房</div>
          <div class="desc nth2">3間房都有窗，格局方方正正好規劃，盡情大展身手的小天地！客廳旁就是落地窗，直接連接大露臺，搭起與自然風光連結的舞台。</div>
        </div>
        <img src="./s7/bg_m.jpg" alt class="bg-img" />
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
  height: calc(100vw * 800 / 1920);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
}

.bg-img {
  width: 100vw;
  height: calc(100vw * 800 / 1920);
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
  padding-left: calc(100vw * 100/ 1920);
}

.title {
  font-size: calc(100vw * 60 / 1920);
  width: calc(100vw * 427 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 40px;
}

.subtitle {
  font-size: calc(100vw * 24 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: left;
  color: #fff;
}

.desc {
  font-size: calc(100vw * 24 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: left;
  color: #cccccc;
  width: calc(100vw * (768 / 1920));
  margin-bottom: 20px;
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
    font-size: calc(100vw * 15 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 18 / 375);
    margin-bottom: calc(100vw * 2 / 375);
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
    padding-bottom:1em;
     &.nth2{
    padding-bottom:24vw;

     }
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
  name: 'section7',
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
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: true,
        // },
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s7/1.jpg'),
          title: '示意圖',
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
