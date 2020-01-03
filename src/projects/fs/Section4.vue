<template>
  <div class="section4">
    <div class="bg">
      <div v-if="!isMobile">
        <div class="content">
          <div class="title">落點校園首排 舞動雙站捷奏</div>
          <div class="stitle">天天公園孵育生活美好，轉身接軌鳳山國中站、大寮站</div>
          <div class="subtitle">公園校園與捷運交手，譜寫生活與未來雙贏！</div>
          <div class="desc">
            ．享受無限棟距好視野，開窗就是天天公園&學校預定地
            <br />．跟著捷運經濟走，散步5分鐘，連接鳳山國中、大寮捷運站
            <br />．學區完整，以單車的距離，遇見中正國小、鳳山國中、新光高中
            <br />．生活機能齊全，與後庄中庄、鳳林、輔英商圈為鄰
            <br />．車行即串聯台1線、台25線，快速連通大高雄
            <br />．10分鐘內，與鳳山火車站接軌，精采生活無往不利
          </div>
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
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>
        </swiper>
        <img src="./s4/bg_02.jpg" alt class="bg-img" />
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
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>
        </swiper>
        <div class="content">
          <div class="title">落點校園首排 舞動雙站捷奏</div>
          <div class="stitle">天天公園孵育生活美好，轉身接軌鳳山國中站、大寮站</div>
          <div class="subtitle">公園校園與捷運交手，譜寫生活與未來雙贏！</div>
          <div class="desc">
            <div>．享受無限棟距好視野，開窗就是天天公園&學校預定地</div>
            <div>．跟著捷運經濟走，散步5分鐘，連接鳳山國中、大寮捷運站</div>
            <div>．學區完整，以單車的距離，遇見中正國小、鳳山國中、新光高中</div>
            <div>．生活機能齊全，與後庄中庄、鳳林、輔英商圈為鄰</div>
            <div>．車行即串聯台1線、台25線，快速連通大高雄</div>
            <div>．10分鐘內，與鳳山火車站接軌，精采生活無往不利</div>
          </div>
        </div>
        <img src="./s4/bg_m.jpg" alt class="bg-img" />
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
  padding-left: calc(100vw * (100 / 1920));
}

.stitle {
  background-image: url('./all/stitle.jpg');
  background-size: cover;
  background-position: center;
  width: calc(100vw * (765 / 1920));
  height: calc(100vw * (54 / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(100vw * 30 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-align: center;
  color: #5d4400;
}

.title {
  font-size: calc(100vw * 60 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: 2.4px;
  text-align: left;
  color: #ffffff;
  margin-top: calc(100vw * 17 / 1920);
  margin-bottom: calc(100vw * 30 / 1920);
}

.subtitle {
  font-size: calc(100vw * 24 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: left;
  color: #ffffff;
  margin-top: calc(100vw * 17 / 1920);
  margin-bottom: calc(100vw * 30 / 1920);
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

  .stitle {
    background-image: url('./all/stitle.jpg');
    background-size: cover;
    background-position: center;
    width: calc(100vw * (334 / 375));
    height: calc(100vw * (42 / 375));
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.6px;
    text-align: center;
    color: #5d4400;
    margin-top: 33px;
  }

  .title {
    font-size: calc(100vw * 25 / 375);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: 2.32px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 17 / 375);
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
    margin-top: calc(100vw * 13 / 375);
    margin-bottom: calc(100vw * 14 / 375);
  }

  .desc {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #cccccc;
    width: 100%;
    padding-bottom:31vw;
    text-indent: -.7rem;
    padding-left: .7rem;
    div{
    margin: 0.3em 0;}
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
  name: 'section4',
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
          img: require('./s4/1大寮站.jpg'),
          title: '大寮站',
        },
        {
          img: require('./s4/2鳳山車站.jpg'),
          title: '鳳山車站',
        },
        {
          img: require('./s4/3鳳山國中捷運站.jpg'),
          title: '鳳山國中捷運站',
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
