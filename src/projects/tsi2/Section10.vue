<template>
  <div class="section10">
  <!--  <img loading="lazy" src="./s10/bg1.png" :alt="`${info.caseName}_img`" class="bgimg"> -->
    <div class="title" data-aos="fade" data-aos-delay="0">
      天空之藝
    </div>
    <img loading="lazy" src="./s3/line.png" :alt="`${info.caseName}_img`" class="title-line" data-aos="zoom-in-right" data-aos-delay="100">
    <div v-if="isPC">
      <div class="item-list flex-ac flex-jb wrap">
        <div class="item" v-for="(slide, index) in slideList" :key="slide.img" @click="showDialog(index)">
          <img loading="lazy" :src="slide.img" alt="">
          <div class="item-text" v-html="slide.text"></div>
          <div class="item-name" v-html="slide.name"></div>
          <div class="item-company" v-html="slide.company"></div>
          <div class="item-line"></div>
        </div>
      </div>
    </div>
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog">
        <div>
       <!--   <img loading="lazy" src="./s10/bg2.png" :alt="`${info.caseName}_img`" class="bgimg" v-if="isPC"> -->
          <img loading="lazy" src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
          <img loading="lazy" :src="current.avatar" alt="" class="dialog-avatar">
          <div class="dialog-text" v-html="current.text"></div>
          <h3 class="dialog-desc" v-html="current.desc"></h3>
          <div class="dialog-company" v-html="current.company"></div>
          <div class="dialog-name" v-html="current.name"></div>
          <h3 class="dialog-work1" v-html="current.work1"></h3>
          <h3 class="dialog-work2" v-html="current.work2"></h3>
          <img loading="lazy" :src="current.img2" alt="" class="dialog-work-img">
        </div>
      </div>
    </transition>
    <swiper v-if="isMobile" :options="swiperOption" data-aos="fade" data-aos-delay="200" class="swipe absolute">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img">
        <div @click="showDialog(index)">
          <img loading="lazy" :src="slide.img" alt="" class="item-img">
          <div class="item-text" v-html="slide.text"></div>
          <div class="item-name" v-html="slide.name"></div>
          <div class="item-company" v-html="slide.company"></div>
          <div class="item-line"></div>
          <div class="item-btn flex-c" @click="showDialog(index)">名師介紹</div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
      </div>
      <div class="swiper-button-next" slot="button-next">
      </div>
    </swiper>
    <!-- <div class="pagination absolute flex-ac" v-if="isMobile">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div> -->
    <!-- <transition-group name="fade-up" mode="out-in">
      <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`content absolute`">
        <h3 class="content-company" v-html="slide.company"></h3>
        <div class="content-hr"></div>
        <h3 class="content-name" v-html="slide.name"></h3>
        <div class="content-work">
          <div class="content-row flex-ac">
            <img loading="lazy" src="./s10/team_list_style.png" alt="">
            <div class="content-desc" v-html="slide.work1"></div>
          </div>
          <div class="content-row flex-ac">
            <img loading="lazy" src="./s10/team_list_style.png" alt="">
            <div class="content-desc" v-html="slide.work2"></div>
          </div>
        </div>
      </div>
    </transition-group> -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.item-name {
  @include img_l_pc(400, 0, 30);
  top: auto;
  bottom: size(30);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.29);
  text-align: left;
  color: #fff;

  span {
    font-size: size(61);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: size(5);
    text-align: left;
    color: #fff;
  }
}

.dialog-name {
  @include img_l_pc(400, 0, 30);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.29);
  text-align: left;
  color: #fff;

  span {
    font-size: size(61);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: size(5);
    text-align: left;
    color: #fff;
  }
}

@media screen and (min-width: 767px) {
  .pc-displaynone {
    display: none !important;
  }
}

@media screen and (max-width: 767px) {
  .item-name {
    @include img_l_m(375, 0, 15);
    top: auto;
    bottom: sizem(70);
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #fff;

    span {
      font-size: sizem(33);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
  .dialog-name {
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(3.29);
    text-align: left;
    color: #fff;

    span {
      font-size: sizem(30);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(5);
      text-align: left;
      color: #fff;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: size(902);
  min-height: size(902);
  max-height: size(902);
  position: relative;
  background: #fff;
  z-index: 9;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bgimg {
  width: 102vw;
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: 50% 100%;
  animation: img 5s -0.5s ease-in-out infinite alternate;
}
@keyframes img {
  to {
    transform: scaleX(1.1) translate(0%, 0%);
  }
}

.title {
  @include img_c_pc(216, 67);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(5);
  text-align: center;
  color: #036EB7;
  white-space: nowrap;
}

.title-line {
  @include img_c_pc(450, 154);
}

.item-list {
  @include img_c_pc(1920 - 560, 210);
}

.item {
  width: size(430);
  position: relative;
  background-color: #f1e8dd;
  cursor: pointer;

  img {
    width: 100%;
    mix-blend-mode: luminosity;
    transition: all 0.5s;
  }

  .item-text,
  .item-company,
  .item-name,
  .item-line {
    margin-top: 30px;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    img {
      mix-blend-mode: normal;
    }
    .item-text,
    .item-company,
    .item-name,
    .item-line {
      margin-top: 0px;
      opacity: 1;
    }
  }
}

.item-text {
  @include img_r_pc(60, 16, 16);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.item-company {
  @include img_l_pc(450, 0, 30);
  top: auto;
  bottom: size(110);
  font-size: size(30);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
}

.item-line {
  width: 100%;
  height: size(20);
  background: #d38700;
  position: absolute;
  bottom: 0;
  left: 0;
}
.dialog {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: #036EB7;
  overflow-y: auto;
  overflow-x: hidden;
  //background-image: url('./s1/test.jpg');   ./s10/bg2.png
  background-size: cover;
  background-position: center bottom;
  > div {
    width: 100%;
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    position: relative;
  }

  .close {
    position: absolute;
    top: 2em;
    right: 2em;
    cursor: pointer;
  }

  .dialog-avatar {
    @include img_l_pc(315, 246, 129);
    top: calc(50% + (246 - 540) * 100vw / 1920);
    border-radius: 50%;
  }

  .dialog-text {
    @include img_l_pc(480, 279, 485);
    top: calc(50% + (279 - 540) * 100vw / 1920);
    font-size: size(35);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(2);
    text-align: left;
    color: #d38700;
  }
  .dialog-desc {
    @include img_l_pc(480, 329, 485);
    top: calc(50% + (329 - 540) * 100vw / 1920);
    font-size: size(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: size(1.2);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }
  .dialog-company {
    @include img_l_pc(480, 542, 485);
    top: calc(50% + (542 - 540) * 100vw / 1920);
    font-size: size(35);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(2);
    text-align: left;
    color: #d38700;
  }

  .dialog-name {
    @include img_l_pc(480, 586, 485);
    top: calc(50% + (586 - 540) * 100vw / 1920);
  }

  .dialog-work1 {
    @include img_l_pc(480, 676, 485);
    top: calc(50% + (676 - 540) * 100vw / 1920);
    font-size: size(22);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: size(1.2);
    text-align: left;
    color: #fff;
    border-left: 5px solid #d38700;
    padding-left: 10px;
    font-weight: 400;
  }
  .dialog-work2 {
    @include img_l_pc(480, 720, 485);
    top: calc(50% + (720 - 540) * 100vw / 1920);
    font-size: size(22);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: size(1.2);
    text-align: left;
    color: #fff;
    border-left: 5px solid #d38700;
    padding-left: 10px;
    font-weight: 400;
  }
  .dialog-work-img {
    @include img_r_pc(712, 279, 200);
    top: calc(50% + (279 - 540) * 100vw / 1920);
  }
}

// begin
.fade-up-leave-to {
  transform: translateY(15px);
  opacity: 0;
  z-index: 0;
}
// end
.fade-up-enter {
  transform: translateY(55px);
  opacity: 0;
  z-index: 1;
}

.fade-up-enter-active {
  transition: all 0.5s ease;
}

.fade-up-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

/* Swipe */
.swipe {
  width: size(831);
  height: size(602);
  top: size(200);
  right: size(8);
  object-fit: cover;
  // background: #0344;
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
  transition: all 0.3s ease;
}

.swipe-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
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
    right: size(356);
    bottom: size(13);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.57);
    font-size: size(47.1);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: size(4.71);
    text-align: right;
    color: #ffffff;
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
  bottom: size(148);
  left: size(1081);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #c9c9c9;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #c9c9c9;
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
      box-shadow: 0 0 0 1px #c9c9c9;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #c9c9c9;
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
  .section10 {
    width: 100vw;
    height: sizem(537);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .title {
    @include img_c_m(108, 50);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(2.5);
    text-align: center;
    color: #036EB7;
    white-space: nowrap;
  }
  .title-line {
    @include img_c_m(225, 98);
  }

  .swipe {
    @include div_l_m(675, 370, 124, -150);
  }

  .swiper-slide {
  }

  .item-img {
    width: 100%;
    height: auto;
  }

  .item {
    width: sizem(430);
    position: relative;
    background-color: #f1e8dd;
    cursor: pointer;

    img {
      width: 100%;
      mix-blend-mode: luminosity;
      transition: all 0.5s;
    }

    .item-text,
    .item-company,
    .item-name,
    .item-line {
      margin-top: 30px;
      opacity: 0;
      transition: all 0.5s;
    }

    &.swiper-slide-active,
    &:hover {
      img {
        mix-blend-mode: normal;
      }
      .item-text,
      .item-company,
      .item-name,
      .item-line {
        margin-top: 0px;
        opacity: 1;
      }
    }
  }

  .item-text {
    @include img_r_m(23, 8, 9);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ffffff;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .item-company {
    @include img_l_m(238, 0, 15);
    top: auto;
    bottom: sizem(110);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.19;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .item-line {
    width: 100%;
    height: sizem(11);
    background: #d38700;
    position: absolute;
    bottom: sizem(49);
    left: 0;
  }

  .item-btn {
    @include div_c_m(158, 45, 0);
    top: auto;
    bottom: 0;
    border-radius: 25px / 25px;
    background-color: #d38700;
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.89;
    letter-spacing: sizem(1.8);
    text-align: left;
    color: #ffffff;
  }
  .swiper-slide {
    &::before {
      content: '';
      display: block;
      z-index: 1;
      background-color: #f1e8dd;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: sizem(320);
    }
    img {
      width: 100%;
      mix-blend-mode: luminosity;
      position: relative;
      transition: all 0.5s;
      z-index: 2;
    }
    .item-text,
    .item-company,
    .item-name,
    .item-line,
    .item-btn {
      z-index: 3;
      opacity: 0;
      transition: all 0.5s;
    }
    &.swiper-slide-active {
      img {
        mix-blend-mode: normal;
      }

      .item-text,
      .item-company,
      .item-name,
      .item-line,
      .item-btn {
        opacity: 1;
      }
    }
  }
  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
   /* background-image: url('./s1/test.jpg');
    background-size: cover;
    background-position: center bottom; */
    overflow-y: scroll;

    > div {
      height: sizem(934 + 50);
      min-height: auto;
      max-height:sizem(934 + 50);
    }

    .close {
      position: absolute;
      top: 2em;
      right: 2em;
      cursor: pointer;
      z-index: 3;
    }

    .dialog-avatar {
      @include img_r_m(196, 216, 16);
      border-radius: 999px;
    }

    .dialog-text {
      @include img_l_m(310, 43, 38);
      font-size: sizem(23);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #d38700;
    }
    .dialog-desc {
      @include img_l_m(310, 85, 39);
      font-size: sizem(15);
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      white-space: normal;
    }
    .dialog-company {
      @include img_l_m(310, 413, 39);
      font-size: sizem(19);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.2;
      letter-spacing: normal;
      text-align: left;
      color: #d38700;
    }

    .dialog-name {
      @include img_l_m(310, 440, 39);
    }

    .dialog-work1 {
      @include img_l_m(310, 495, 39);
      font-size: sizem(13.5);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: sizem(1.2);
      text-align: left;
      color: #fff;
      border-left: 5px solid #d38700;
      padding-left: 10px;
    }
    .dialog-work2 {
      @include img_l_m(310, 523, 39);
      font-size: sizem(13.5);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: sizem(1.2);
      text-align: left;
      color: #fff;
      border-left: 5px solid #d38700;
      padding-left: 10px;
    }
    .dialog-work-img {
      @include img_r_m(365, 585, 10);
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
  name: 'section10',

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
        slidesPerView: isMobile ? 3 : 1,
        spaceBetween: isTablet ? 20 : 15,
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
      current: {
        img: require('./s10/1.jpg'),
        avatar: require('./s10/1s.jpg'),
        text: '國際空間設計金獎',
        company: '呈境室內設計',
        name: '<span>袁世賢</span> /設計師',
        work1: 'IF DESIGN AWARD–最佳餐飲、住宅空間',
        work2: `義大利A'DESIGN 設計大獎-銀獎`,
        desc: isMobile
          ? '「天空之邑」以雙塔地標，重新定義洲子洋天際線，簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，融入建築設計脈絡中，為您的幸福生活揭開新頁。'
          : '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
        img2: require('./s10/1.png'),
      },
      slideList: [
        {
          img: require('./s10/1.jpg'),
          avatar: require('./s10/1s.jpg'),
          text: '國際空間設計金獎',
          company: '呈境室內設計',
          name: '<span>袁世賢</span> /設計師',
          work1: 'IF DESIGN AWARD–最佳餐飲、住宅空間',
          work2: `義大利A'DESIGN 設計大獎-銀獎`,
          desc: isMobile
            ? '「天空之邑」以雙塔地標，重新定義洲子洋天際線，簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，融入建築設計脈絡中，為您的幸福生活揭開新頁。'
            : '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/1.png'),
        },
        {
          img: require('./s10/2.jpg'),
          avatar: require('./s10/2s.jpg'),
          text: '北台灣精品名宅推手',
          company: 'A8聯合建築師事務所',
          name: '<span>陳朝雄</span> /建築師',
          work1: isMobile
            ? '<span>新店央北重劃區：</span>波爾多一期、波爾多二期'
            : '新店央北重劃區：波爾多一期、波爾多二期',
          work2: isMobile
            ? '<span>板橋江子翠重劃區：</span>江翠ONE、江翠PARK'
            : '板橋江子翠重劃區：江翠ONE、江翠PARK',
          desc: isMobile
            ? '「天空之邑」以雙塔地標，重新定義洲子洋天際線，簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，融入建築設計脈絡中，為您的幸福生活揭開新頁。'
            : '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/2.png'),
        },
        {
          img: require('./s10/3.jpg'),
          avatar: require('./s10/3s.jpg'),
          text: '飯店、豪宅御用造景團隊',
          company: '大漢設計工程',
          name: '<span>徐世萃</span> /設計師',
          work1: '台北大直維多麗亞酒店 庭園設計',
          work2: '台北大直ATT百貨 庭園設計',
          desc: isMobile
            ? '「天空之邑」以雙塔地標，重新定義洲子洋天際線，簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，融入建築設計脈絡中，為您的幸福生活揭開新頁。'
            : '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/3.png'),
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.isDialog = true
      this.current = this.slideList[index]
    },
    closeDialog() {
      this.isDialog = false
    },
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
