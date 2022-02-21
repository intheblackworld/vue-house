<template>
  <div class="section2">
    <div class="container">
      <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200" class @slideChangeTransitionEnd="slideChanged">
        <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="card">
          <div class="card-img" @click="$router.push(slide.link)">
            <img :src="slide.img" :class="`item-img`" />
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="slide.title" @click="$router.push(slide.link)"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev">
          <img src="./all/箭頭2.png" alt />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <img src="./all/箭頭1.png" alt />
        </div> -->
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
  </div>
</template>
<style lang="scss">
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

.container {
  width: size(1240);
  margin: size(53) auto;

  @include md {
    width: sizem(310);
    margin: sizem(80) auto;
  }
}

.desc {
  @include img_c_pc(1234, 170);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: center;
  color: #000;
}

.img {
  @include img_c_pc(1234, 321);
}

.type-tab {
  margin: sizem(50) auto;
  .tab {
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: sizem(1.4);
    text-align: left;
    color: #808080;
    border-bottom: 1px solid #808080;
    cursor: pointer;

    &.active {
      color: #000;
      border-bottom: 1px solid #000;
    }
  }
}

.current-tab {
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #fff;
  background-color: #000;
  padding: 0.3rem 0.5rem;
  margin-bottom: size(45);

  @include md {
    width: 100%;
    font-size: sizem(20);
    margin-bottom: sizem(60);
  }
}

.card {
  width: size(370);
  margin-bottom: size(78);
  cursor: pointer;

  @include md {
    width: 100%;
    margin-bottom: sizem(60);
  }
}

.card-img {
  position: relative;
  width: 100%;
  height: size(370);

  @include md {
    height: sizem(310);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
  }
  .add-btn {
    position: absolute;
    font-size: size(42);
    font-weight: 300;
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
    width: size(45);
    height: size(45);
    right: size(10);
    bottom: size(10);

    @include md {
      font-size: sizem(42);
      width: sizem(45);
      height: sizem(45);
      right: sizem(10);
      bottom: sizem(10);
    }
  }
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
    margin-top: sizem(15);
    font-size: sizem(23);
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
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
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
      slideList: [
        ...hot_case
      ],
      // blockIndex: 0,
    }
  },
  computed: {},

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

  watch: {},

  created() {},
}
</script>
