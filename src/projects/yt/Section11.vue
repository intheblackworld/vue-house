<template>
  <div class="section11">
    <div class="bg">
      <div v-if="!isMobile">
        <img
          src="./s11/gif.gif"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="600"
        />
        <img
          :src="slideList[slideIndex].text"
          :alt="slideList[slideIndex].alt"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200" @slideChangeTransitionEnd="slideChanged">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div> -->
        </swiper>
      </div>
      <div v-else>
        <img
          src="./s11/mo/bg.gif"
          alt="精巧規劃別具心裁，讓家人都愛窩在一起"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="600"
        />
        <img
          :src="slideList[slideIndex].text"
          :alt="slideList[slideIndex].alt"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200" @slideChangeTransitionEnd="slideChanged">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div>
        </swiper>
        <!-- <img src="./s5/mo/bg.jpg" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s5/mo/logo.png" alt="" class="logo" data-aos="fade" data-aos-delay="1200">-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s5/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}

.swiper-container {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  .item-img {
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
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
    background: #fff;
    height: 100%;
    height: calc(100vw * 1208 / 750) !important;
  }

  .item-img {
    width: 100%;
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 10px;
    height: calc(100vw * 30 / 375);
    line-height: calc(100vw * 30 / 375);
    font-size: calc(100vw * 22 / 375);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.2px;
    text-align: left;
    color: #02121c;
    width: calc(100vw * 310 / 375);
    position: relative;
    z-index: 2;
    margin: 0 auto;
    margin-top: calc(100vw * 30 / 375);
    margin-bottom: calc(100vw * 20 / 375);
  }

  .desc {
    width: calc(100vw * 310 / 375);
    font-size: calc(100vw * 17 / 375);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: calc(100vw * 24 / 375);
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    margin-bottom: calc(100vw * 20 / 375);
    white-space: nowrap;
  }

  .dropdown {
    margin-bottom: 30px;
    .item {
      height: 45px;
      overflow: hidden;
      border-bottom: solid 0.5px #595757;
      width: calc(100vw * 645 / 750);
      margin: 0 auto;
      transition: all 0.5s;

      &.open {
        height: auto;
      }
    }
    .head {
      font-size: calc(100vw * 17 / 375);
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 1.6px;
      text-align: left;
      color: #595757;
      white-space: nowrap;
    }

    .btn {
      width: 18px;
    }

    .content {
      padding-top: 0px;
      padding-bottom: 10px;
      font-size: calc(100vw * 14 / 375);
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.61;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
    }
  }

  .img {
    width: 100vw;
    margin-top: 20px;
    display: block;
  }

  .logo {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
  }

  .swiper-container {
    top: 40%;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-bottom: 30px;
    width: 90vw;
    position: absolute;
    z-index: 3;
  }

  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 1vw;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 1vw;
  }

  // .bg-img {
  //   position: absolute !important;
  // }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section11',
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
        slidesPerColumn: isMobile ? 1 : 2,
        allowSlidePrev: true,
        allowSlideNext: true,
        // centeredSlides: true,
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          src: isMobile ? require('./s11/mo/1.jpg') : require('./s11/1.jpg'),
          text: isMobile ? require('./s11/mo/t1.png') : require('./s11/1t.png'),
          alt: '耘悅圖書室'
        },
        {
          src: isMobile ? require('./s11/mo/2.jpg') : require('./s11/2.jpg'),
          text: isMobile ? require('./s11/mo/t2.png') : require('./s11/2t.png'),
          alt: '耘享多功能教室'
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(this.slideIndex)
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
