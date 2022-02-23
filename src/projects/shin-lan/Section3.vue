<template>
  <div class="section3">
    <img src="./shin-lan/index/3/img.png" alt="" class="dec-img">
    <div class="container">
      <div class="shin-lan-title-v shin-lan-title-h-m title gold" data-aos="fade">
        熱銷<span data-aos="flip-right"></span>個案
      </div>
      <div class="case-info">
        <div class="case-card">
          <div class="flex-ac flex-jb" v-if="isPC">
            <img :src="current_case.imgs[1].img" alt="" class="case-img">
            <img :src="current_case.imgs[2].img" alt="" class="case-img">
            <img :src="current_case.imgs[3].img" alt="" class="case-img">
          </div>
          <div class="flex-ac flex-jb case-head">
            <div class="case-title" v-html="current_case.title"></div>
            <div class="case-btns">
              <span v-show="current_case.link" @click="$router.push(current_case.link)">個案介紹</span>
              <span v-show="current_case.media_link" @click="$router.push(current_case.media_link)">個案影片</span>
            </div>
          </div>
          <div class="case-desc" v-html="current_case.desc_home" v-if="isPC"></div>
          <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged" v-if="isMobile">
            <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img + index">
              <img :src="slide.img" :class="`item-img`" />
              <div class="card-content"></div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev" v-if="isMobile">
              <img src="../shin-lan/shin-lan/all/arrow-left.png" alt="" class="arrow-left">
            </div>
            <div class="swiper-button-next" slot="button-next" v-if="isMobile">
              <img src="../shin-lan/shin-lan/all/arrow-right.png" alt="" class="arrow-next">
            </div>
          </swiper>
          <div class="case-more flex-c" @click="$router.push('/hot_case')">更多精彩個案</div>
        </div>
        <img :src="current_case.imgs[0].img" alt="" class="case-thumb" v-if="isPC">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-container-vertical > .swiper-pagination-bullets {
  display: flex;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  top: auto;
  bottom: 15px;
  left: -10px;
  width: auto;
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

.swiper-button-prev,
.swiper-button-next {
  top: 100%;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.5);
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

.swiper-container {
  width: size(370);
  margin-right: size(20);
  margin-top: size(20);
  @include md {
    width: 100%;
    margin: 0 auto;
  }
}

.item-img {
  width: size(370);
  height: size(370);
  object-fit: cover;
  // height: size(333);

  @include md {
    width: 100%;
    height: sizem(286);
  }
}

.card-content {
  @include md {
    height: sizem(30);
  }
}

.section3 {
  width: 100%;
  height: size(630 + 144);
  min-height: size(630 + 144);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  // background-color: #fff;

  @include md {
    width: 100vw;
    height: 176vw;
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.shin-lan-title {
  color: #000; // 顏色
  font-size: size(47); // size(47)
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: 0.06em;
  text-align: left;
  width: 1.2em;
  span {
    display: block;
    width: 3em;
    height: size(1);
    background: currentColor;
    margin: 0.2em 0 0.1em 0;
    transform-origin: 0 0;
  }

  &.gold {
    color: #b18863;
  }
}

.case-info {
  width: size(1330);
  height: size(630);
  position: absolute;
  right: 0;
  top: size(144);

  @include md {
    width: sizem(355);
    left: sizem(15);
    top: sizem(160);
  }
}

.case-card {
  width: size(1330 - 723);
  height: size(630);
  padding: 2rem 1.5rem 2rem 2.5rem;
  background-color: #fff;

  @include md {
    width: 100%;
    height: auto;
    padding: sizem(24) 0;
  }
}
.case-head {
  @include md {
    padding: 0 sizem(24);
  }
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
  margin: size(20) 0;
  @include md {
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #000;
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
  margin-bottom: size(15);
}

.case-more {
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
  border: solid 1px #707070;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  z-index: 3;

  @include md {
    width: sizem(160);
    height: sizem(40);
    margin: sizem(15) auto;
    font-size: sizem(15);
  }

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.case-btns {
  width:auto;

  @include md {
    width: auto;
  }

  > span {
    display: inline-block;
    width:4.5em;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: size(1.44);
    text-align: center;
    color: #000;
    cursor: pointer;
    border-bottom: solid 1.1px #4d4d4d;
    transition: all 0.3s;
    margin: 0 0 0 0.5em;

    @include md {
      font-size: sizem(15);
    }

    &:hover {
      color: #b18863;
    }
  }
}

.case-img {
  width: 32%;
}

.case-thumb {
  @include img_r_pc(723, 0, 0);
  height: 100%;
  object-fit: cover;
}

.title {
  @include img_l_pc(60, 514, 342);

  @include md {
    @include img_l_m(167, 112, 22);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #b18863;
  }
}

.btn-more {
  @include img_r_pc(158, 151, 0);
  height: size(40);
  border: solid 1px #707070;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.dec-img {
  @include img_l_pc(520, 60, 0);
  @include md {
    @include img_r_m(176, 3, 0);
    transform: rotateY(180deg);
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
// import { get_category } from '@/http/api'

export default {
  name: 'section3',
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
      // blockIndex: 0,
      current_case: {
        ...hot_case[0],
      },

      swiperOption: {
        // direction: isMobile ? 'horizontal' : 'vertical',
        slidesPerView: isMobile ? 1 : 1,
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
      slideList: [],
      // blockIndex: 0,
      current_case: {},
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      console.log(swiper.activeIndex, swiper.slides.length, 'eeee')
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else {
        this.slideIndex =
          ((swiper.activeIndex - 1) % this.current_case.imgs.length)
      }
    },
  },

  mounted() {
    this.current_case = hot_case[4]
    this.slideList = this.current_case.imgs
    // get_category().then((res) => {
    //   console.log(res, 'get_category')
    //   if (res.data.categories) {
    //     this.current_case = {
    //       ...this.current_case,
    //       ...res.data.categories.slice(0, 1),
    //     }
    //   }
    // })
  },

  created() {},

  computed: {},
}
</script>
