<template>
  <div class="section5">
    <h1 class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">鳳鳴好感生活圈 繁華同步宜居環境</h1>
    <h1 class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">鳳鳴好感生活圈<br />繁華同步宜居環境</h1>
    <h1 class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="400">繁華時尚、綠意文風、美食饗宴、生活步調，由你決定</h1>
    <h1 class="subtitle" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">繁華時尚、綠意文風、美食饗宴<br />生活步調，由你決定</h1>
    <div class="hr" data-aos="fade-down" data-aos-delay="0"></div>
    <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200" class @slideChangeTransitionEnd="slideChanged" v-if="isPC">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <div class="item-title" v-html="slide.name"></div>
      </swiper-slide>
    </swiper>
    <div :class="`swipe-btns absolute flex-ac ${isMobile ? 'flex-jb' : ''}`" v-if="isPC">
      <img src="./all/prev-btn.png" alt="" class="swiper-button-prev prev-btn" @click="prev">
      <img src="./all/next-btn.png" alt="" class="swiper-button-next next-btn" @click="next">
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div :class="`swipe-btns absolute flex-ac ${isMobile ? 'flex-jb' : ''}`">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          <div class="order-index" v-if="isPC">{{slideIndex + 1}}/{{slideList.length}}</div>
        </div>
      </div>
    </div>
    <div class="content flex-ac flex-jb">
      <div class="content-block flex-c wrap">
        <img src="./s5/05_icon_01.png" :alt="`${info.caseName}_mrt_icon`" class="mrt_icon">
        <div class="block-title" data-aos="fade-up" data-aos-delay="200">
          雙繁華
        </div>
        <div class="block-desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
          鶯桃路商圈、桃園新站商圈，全聯即將進駐，機能豐足、繁華到位。
        </div>
      </div>
      <div class="content-block flex-c wrap">
        <img src="./s5/05_icon_02.png" :alt="`${info.caseName}_tra_icon`" class="tra_icon">
        <div class="block-title" data-aos="fade-up" data-aos-delay="200">
          雙綠意
        </div>
        <div class="block-desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
          鳳福公園綠意近鄰，鳳鳴公園休憩樂活，享受市心健康綠意
        </div>
      </div>
      <div class="content-block flex-c wrap">
        <img src="./s5/05_icon_03.png" :alt="`${info.caseName}_tra_icon`" class="tra_icon">
        <div class="block-title" data-aos="fade-up" data-aos-delay="200">
          雙學區
        </div>
        <div class="block-desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
          鳳鳴國小、鳳鳴國中完整學區，涵養優質文教氣息。
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100vw;
  height: size(1479 + 225);
  max-height: size(1479 + 225);
  min-height: size(1479 + 225);
  position: relative;
  background-color: #fff;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_c_pc(864, 41 + 225);
  font-size: size(53.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(3.22);
  text-align: center;
  color: #2f2c2c;
  white-space: nowrap;
}
.subtitle {
  @include img_c_pc(1028, 130 + 225);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #2f2c2c;
  white-space: nowrap;
}

.hr {
  @include img_c_pc(0, 0);
  height: size(225);
  border-right: solid size(4) #009fb1;
}

.content {
  @include img_c_pc(1025, 210 + 225);
}

.content-block {
  width: calc(100% / 3);
  height: size(440);
  background-color: #d1d2d3;
  padding: 40px 40px;
}

.mrt_icon {
  width: size(137);
}

.tra_icon {
  width: size(137);
}

.block-title {
  width: 100%;
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.block-desc {
  width: size(250);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: size(0.65);
  text-align: justify;
  color: #009fb1;
}

.swiper-container {
  width: size(1920 - 107 - 96);
  height: size(468);
  top: size(749 + 225);
  left: size(0);

  .item-img {
    width: size(562);
    height: size(469);
    object-fit: cover;
  }

  .item-title {
    position: absolute;
    text-shadow: 0 0.1em 0.3em #000;
    right: 10px;
    bottom: 10px;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: size(0.94);
    text-align: left;
    color: #ffffff;
  }
}

/* Swipe */
.swipe {
  width: size(1920 - 107 - 96);
  height: size(468);
  top: size(749 + 225);
  left: size(107);
  object-fit: cover;
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
  // overflow: hidden;
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
    right: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0.1em 0.3em #000;
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
  bottom: size(188);
  left: calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: #000;
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
      }
    }
  }
}

.swipe-btns {
  width: auto;
  height: size(50);
  padding: 0;
  z-index: 3;
  right: size(100);
  bottom: size(200);
}
.prev-btn,
.next-btn {
  width: size(50);
  margin-right: 10px;
  left: 0;
  right: 0;
  position: relative;
  cursor: pointer;
}

.order-index {
  font-size: size(26);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: size(3.67);
  text-align: left;
  color: #070304;
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
  .section5 {
    min-height: auto;
    max-height: initial;
    height: sizem(418 + 243);
  }

  .grass {
    display: none;
  }

  .title {
    @include img_c_m(196, 47);
    font-size: sizem(23.2);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: sizem(1.39);
    text-align: center;
    color: #302d2c;
    white-space: nowrap;

    span {
      font-size: sizem(30);
    }
  }

  .subtitle {
    @include img_c_m(262, 171);
    font-size: sizem(17.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1.06);
    text-align: center;
    color: #009fb1;
    white-space: nowrap;
  }

  .hr {
    @include img_c_m(32, 141);
    height: auto;
    border-bottom: solid sizem(3) #009fb1;
  }

  .desc {
    @include img_l_m(317, 218, 31);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: sizem(0.86);
    text-align: justify;
    color: #302d2c;
  }

  .content {
    @include img_l_m(101 * 3 + 12, 246, 30);
  }

  .content-block {
    width: sizem(101);
    height: sizem(119);
    border-radius: sizem(10);
    background-color: #d1d2d3;
    padding: 20px;
  }

  .mrt_icon {
    width: sizem(57);
  }

  .tra_icon {
    width: sizem(57);
  }

  .block-title {
    font-size: sizem(16.1);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: sizem(0.32);
    text-align: center;
    color: #009fb1;
    white-space: nowrap;
  }

  .block-desc {
    font-size: sizem(11.1);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(0.66);
    text-align: center;
    color: #009fb1;
    white-space: normal;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(243);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(0);
    object-fit: cover;
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
    .slide-name {
      right: 1em;
      font-size: sizem(13);
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
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;
    bottom: 0;
    right: 0;

    .prev-btn,
    .next-btn {
      width: sizem(30);
      background-color: #fff;
      border-radius: 999px;
      margin-right: 0;

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
  mixins: [slider],
  // props: ['viewIndex'],

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
      },
      slideList: [
        {
          img: require('./s5/05_slider_01.jpg'),
          name: '鶯桃路商圈情境示意',
        },
        {
          img: require('./s5/05_slider_02.jpg'),
          name: '鳳福公園情境示意',
        },
        {
          img: require('./s5/05_slider_03.jpg'),
          name: '鳳鳴國中情境示意',
        },
        {
          img: require('./s5/05_slider_04.jpg'),
          name: '鳳鳴國中情境示意',
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

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>