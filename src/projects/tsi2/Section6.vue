<template>
  <div class="section6">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" v-if="isPC">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.hint"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <h3 :class="`pagination-dot flex-c ${slideIndex === index ? 'active': ''}`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)" v-html="slide.name">
          </h3>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <swiper v-if="isMobile" :options="swiperOption2" data-aos="fade" data-aos-delay="200" class="swipe absolute">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img">
        <img :src="slide.img" alt="" class="swipe-img">
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="./all/prev-btn.png" alt="" class="prev-btn">
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="./all/next-btn.png" alt="" class="next-btn">
      </div>
    </swiper>
    <swiper v-if="isMobile" :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200" @slideChangeTransitionStart="slideChanged" class="swipe-pagi">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img">
        <div :class="`pagination-dot flex-c ${slideIndex === index ? 'active': ''}`" v-html="slide.name"></div>
      </swiper-slide>
    </swiper>
    <div class="title">天空美學</div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
    z-index: 2;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.title {
  @include div_r_pc(70, 332, 119, 278);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #ffffff;
  background-color: #003177;
  box-shadow: -5px -5px 0 0px #fff;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* Swipe */
.swipe {
  width: 100%;
  height: 100%;
  bottom: size(0);
  left: 0;
  object-fit: cover;
  // background:#0344;
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-name {
    right: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }

  // &:nth-child(1) {
  //   z-index: 1;
  //   // opacity: 1;
  // }

  // &.base {
  //   z-index: 1;
  //   opacity: 1;
  // }
  // &.active {
  //   z-index: 2;
  //   // opacity: 1;
  // }
}

.pagination {
  width: auto;
  bottom: size(52);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;
  width: size(120);
  height: size(120);
  border: 3px solid #ffff;
  box-shadow: inset 0 0 6px 0 rgba(79, 55, 7, 0.85);
  font-size: size(21);
  font-weight: bold;
  text-align: center;
  color: #ffff;
  white-space: nowrap;
  text-shadow: 0 0 1px #000;
  border-radius: 999px;

  &.active {
    font-weight: bold;
    color: #d38700;
    background-color: #fff;
    text-shadow: none;
    box-shadow: 0 0 6px 0 rgba(79, 55, 7, 0.85);
  }

  // span {
  //   display: block;
  //   width: 10px;
  //   height: 10px;
  //   border-radius: 10px;
  //   box-shadow: 0 0 0 1px #fff;
  //   position: relative;
  //   background-color: transparent;
  //   transition: all 0.5s;

  //   &::before {
  //     content: '';
  //     width: 60%;
  //     height: 60%;
  //     display: block;
  //     background: #fff;
  //     border-radius: 20px;
  //     opacity: 1;
  //     position: absolute;
  //     top: 20%;
  //     // transform: translateY(-50%);
  //     left: 20%;
  //     transition: all 0.3s;
  //     transform-origin: center;
  //     transform: scale(0);
  //   }
  //   &.active {
  //     box-shadow: none;
  //     &::before {
  //       content: '';
  //       width: 100%;
  //       height: 100%;
  //       display: block;
  //       background: #fff;
  //       border-radius: 20px;
  //       opacity: 1;
  //       position: absolute;
  //       top: 0%;
  //       // transform: translateY(-50%);
  //       left: 0%;
  //       transform: scale(1);
  //     }
  //   }
  // }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section6 {
    width: 100vw;
    height: sizem(604);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    &::after{
      content: "";
      position: absolute;
      top: 0;left: 0;z-index: 2;
      width: sizem(375);
  height: sizem(331);
      display: block; background-image: linear-gradient(to bottom, #958e81, #ccb895 86%, rgba(204, 184, 149, 0));
    }
  }

  .title {
    @include div_l_m(184, 41, 58, 34);
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.96;
    letter-spacing: sizem(2.3);
    text-align: center;
    color: #ffffff;
    background-color: #003177;
    padding-top: 0;
    box-shadow: 5px 5px 0 0px #fff;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    z-index: 10;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(325);
    min-height: auto;
    top: sizem(280);
    left: 0;
    object-fit: cover;
  }

  .swipe-pagi {
    position: relative;
    top: sizem(143);
    height: sizem(95);
    z-index: 3;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .swipe-slide {
    width: 100%;
    height: 100%;
    z-index: 0;

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      left: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
    }
  }

  .pagination {
    width: sizem(93 * 8 + 21 * 8);
    bottom: auto;
    top: sizem(143);
    right: 0;
    left: sizem(-(912 - 375) / 2);
    margin: 0 auto;
    justify-content: space-between;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;
    width: sizem(93);
    height: sizem(93);
    border: 3px solid #ffff;
    box-shadow: inset 0 0 6px 0 rgba(79, 55, 7, 0.85);
    font-size: sizem(14);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    text-shadow: 0 0 1px #000;
    border-radius: 999px;

    &.active {
      font-weight: bold;
      color: #d38700;
      background-color: #fff;
      text-shadow: none;
      box-shadow: 0 0 6px 0 rgba(79, 55, 7, 0.85);
    }
  }

  .swipe-btns {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: sizem(370);
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section6',

  mixins: [slider],
  props: ['viewIndex'],
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
      isDialog: false,
      swiperOption: {
        slidesPerView: isMobile ? 3.3 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: true,
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOption2: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 0,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
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
          img: require('./s6/1.jpg'),
          name: '美式<br />風格客廳',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/2.jpg'),
          name: '北歐風<br />紓壓臥室',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/3.jpg'),
          name: '夢想<br />明亮臥室',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/4.jpg'),
          name: '飯店式<br />精品臥室',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/5.jpg'),
          name: '奢華<br />精品空間',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/6.jpg'),
          name: '輕奢華<br />機能玄關',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/7.jpg'),
          name: '輕食<br />料理廚房',
          hint: '樣品屋實景拍攝',
        },
        {
          img: require('./s6/8.jpg'),
          name: '五星級<br />飯店式衛浴',
          hint: '樣品屋實景拍攝',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      // console.log(swiper.activeIndex, swiper.isBeginning, swiper.isEnd, this.slideIndex)
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 7
      } else {
        this.slideIndex = swiper.activeIndex - 3
      }
    },
  },

  created() {},

  mounted() {
    if (this.isMobile) {
      this.toggleTimer = false
    }
  },

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
