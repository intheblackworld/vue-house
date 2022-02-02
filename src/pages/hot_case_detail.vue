<template>
  <div class="section2">
    <div class="container flex flex-jb wrap">
      <div class="side-bar">
        <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged">
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img">
            <img :src="slide.img" :class="`item-img`" />
            <div class="card-content" v-html="slide.title"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination" v-if="isPC"></div>
          <div class="swiper-button-prev" slot="button-prev" v-if="isMobile">
            <img src="../projects/shin-lan/shin-lan/all/arrow-left.png" alt="" class="arrow-left">
          </div>
          <div class="swiper-button-next" slot="button-next" v-if="isMobile">
            <img src="../projects/shin-lan/shin-lan/all/arrow-right.png" alt="" class="arrow-next">
          </div>
        </swiper>
        <!-- <transition-group class="flex-ac flex-jb wrap" name="slide-fade" mode="out-in">
        <div class="card" v-for="(hot_item, index) in hot_list" :key="hot_item.title + index">
          <div class="card-img">
            <img :src="hot_item.img" alt="">
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="hot_item.title"></div>
        </div>
      </transition-group> -->
      </div>
      <div class="content">
        <img :src="slideList[slideIndex].img" alt="" class="main-img" v-if="isPC">
        <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" v-if="isPC">
          熱銷<span data-aos="flip-right"></span>個案
        </div>
        <div class="case-title" v-html="current_case.title"></div>
        <hr>
        <div class="case-desc" v-html="current_case.desc"></div>
        <div class="back-btn flex-c" @click="$router.push('/hot_case')">回到上一頁</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-container-vertical > .swiper-pagination-bullets {
  top: 10px;
  left: -10px;
  display: flex;
}
.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet,
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  margin: 0 10px;
  background: #333;
  opacity: 1;
  position: relative;
  border-radius: 0;
  z-index: 2;

  &.swiper-pagination-bullet-active {
    background: #b18863;
  }
}

.swiper-button-prev, .swiper-button-next {
  top: 100%;
  height: 25px;
  background-color: rgba(0, 0, 0, .5);
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.side-bar {
  width: size(333);
  // height: 100%;

  @include md {
    width: 100%;
  }
}

.swiper-container {
  max-height: size(1440);
  padding-top: size(30);
  margin-top: size(-30);
}

.container {
  width: size(1240);
  // max-height: size(1440);
  overflow: hidden;
  position: relative;
  margin: size(120) auto;
  padding-top: size(30);

  @include md {
    width: sizem(310);
    margin: sizem(80) auto;
  }
}

.content {
  width: size(875);

  @include md {
    width: 100%;
  }
}

.item-img {
  width: 100%;
  // height: size(333);
}

.card-content {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  border-bottom: solid 1px #4d4d4d;

  @include md {
    font-size: sizem(23);
    border-bottom: none;
    text-align: center;
  }
}

.main-img {
  width: 100%;
  // height: size(780);
  margin-bottom: size(30);
}

.case-title {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-top: size(30);

  @include md {
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    // border-bottom: 1px solid #000;
  }
}

.case-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;

  @include md {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.back-btn {
  width: size(160);
  height: size(41);
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: left;
  color: #000;
  cursor: pointer;
  border: solid 1px #707070;
  transition: all 0.3s;
  position: relative;
  margin: size(20) auto;
  z-index: 3;

  &:hover {
    background-color: #000009;
    color: #fff;
  }

  @include md {
    width: sizem(160);
    height: sizem(41);
  }
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
  color: #333;

  @include md {
    display: none;
  }

  .page-btn {
    width: size(40);
    text-align: center;
    border-right: 1px solid #c59c63;
    cursor: pointer;

    &:nth-last-child(1) {
      border-right: none;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { hot_case } from '@/info/shin-lan'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      slideIndex: 0,
      swiperOption: {
        direction: isMobile ? 'horizontal' : 'vertical',
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 0,
        slidesPerColumn: isMobile ? 1 : 1,
        // allowSlidePrev: isMobile ? true : true,
        // allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
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
      slideList: [...hot_case],
      // blockIndex: 0,
      current_case: {},
    }
  },
  computed: {},

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(swiper.activeIndex, swiper.slides.length, 'eeee')
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else {
        this.slideIndex =
          (swiper.activeIndex % this.current_case.imgs.length) + 1
      }
    },
  },

  mounted() {
    if (this.$route.params.id) {
      let id = this.$route.params.id
      this.current_case = hot_case[id - 1]
      this.slideList = this.current_case.imgs
    }
  },

  watch: {},

  created() {},
}
</script>
