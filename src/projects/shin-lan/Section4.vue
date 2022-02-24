<template>
  <div class="section4">
    <img src="./shin-lan/index/4/img.png" alt="" class="dec-img">
    <div class="container">
      <div v-if="isMobile" class="shin-lan-title-h title" data-aos="fade">
        經典<span data-aos="flip-right"></span>案例
      </div>
      <div class="case-info">
        <div class="case-card">
          <div v-if="isPC" class="shin-lan-title-h title" data-aos="fade">
            經典<span data-aos="flip-right"></span>案例
          </div>
          <div class="flex-ac flex-jb">
            <div class="case-title" v-html="current_case.title"></div>
          </div>
          <div class="case-desc" v-html="current_case.desc"></div>
          <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged" v-if="isMobile">
            <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img + index">
              <img :src="slide.img" :class="`item-img`" />
              <div class="card-content"></div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev" v-if="isMobile"></div>
            <div class="swiper-button-next" slot="button-next" v-if="isMobile"></div>
          </swiper>
          <div class="case-btns flex-ac flex-js">
            <div @click="$router.push('/classic_case?type=1')">欣聯建設Shin-Lan</div>
            <div @click="$router.push('/classic_case?type=2')">合聯營造Heran</div>
          </div>
          <div class="case-more flex-c" @click="$router.push('/classic_case')">了解更多</div>
        </div>
        <img :src="current_case.img" alt="" class="case-thumb" v-if="isPC">
      </div>
    </div>
  </div>
</template>

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

.section4 {
  width: 100%;
  height: size(630 + 270 + 127);
  min-height: size(630 + 270 + 127);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  // background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(879);
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
  span {
    display: inline-block;
    width: size(1);
    height: 1em;
    background: currentColor;
    margin: -0.1em 0.15em 0.1em 0.1em;
    transform-origin: 50% 50%;
    vertical-align: middle;
  }
}

.case-info {
  width: size(1330);
  height: size(630);
  position: absolute;
  right: 0;
  top: size(270);
  @include md {
    width: sizem(355);
    left: sizem(15);
    top: sizem(160);
  }
}

.case-card {
  width: size(1330 - 723);
  height: size(630);
  padding: 6rem 0.2rem 2rem 4.8rem;
  background-color: #fff;
  @include md {
    width: 100%;
    height: auto;
    padding: sizem(20);
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
  border-bottom: solid 1px #707070;
  @include md {
    width: 100%;
    margin: sizem(40) 0 sizem(20);
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
  height: size(200);
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
    height: auto;
  }
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
  cursor: pointer;
  border: solid 1px #707070;
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
  width: 100%;
  margin-bottom: size(20);
  @include md {
    width: auto;
    margin-top: sizem(20);
  }
  > div {
    width: 40%;
    margin-right: 1.5rem;
    font-size: size(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: size(1.44);
    text-align: center;
    color: #000;
    cursor: pointer;
    border-bottom: solid 1.1px #4d4d4d;
    text-decoration: none;
    transition: all 0.3s;
    display: block;
    position: relative;
    z-index: 3;
    white-space: nowrap;
    &:hover {
      color: #b18863;
    }

    @include md {
      width: 48%;
      margin: 0 auto;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: sizem(1.2);
      text-align: center;
      color: #000;
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
  width: size(220);
  // @include img_l_pc(220, 514, 342);

  @include md {
    @include img_r_m(126, 103, 50);
    font-size: sizem(28);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: center;
    color: #3e3a39;
  }
}

.dec-img {
  @include img_l_pc(820, 250, 0);
  z-index: 2;
  @include md {
    @include img_l_m(240, 3, 0);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { case_list_1 } from '@/info/shin-lan'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { get_category } from '@/http/api'

export default {
  name: 'section4',
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
        ...case_list_1[0],
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
          (swiper.activeIndex - 1) % this.current_case.imgs.length
      }
    },
  },

  mounted() {
    this.current_case = case_list_1[0]
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
