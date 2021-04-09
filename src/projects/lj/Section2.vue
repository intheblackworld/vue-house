<template>
  <div>
    <div class="section2">
      <div class="swiper-frame">
          <swiper
            :options="swiperOption"
            ref="mySwiper"
            data-aos="fade"
            data-aos-delay="1000"
          >
            <swiper-slide
              v-for="(slide, index) in slideList"
              :index="index"
              :key="slide.img"
              class="item"
            >
              <img
                :src="slide.img"
                :class="`item-img`"
              />
              <div
                class="text"
                v-html="slide.name"
              ></div>
            </swiper-slide>
          </swiper>
      </div>
      <h1 class="title" data-aos="flip-up" data-aos-delay="1200">
        睽違十年，用心如初。
      </h1>
      <div class="hr" data-aos="zoom-in-right" data-aos-delay="1400"></div>
      <h1 class="desc" data-aos="fade-up" data-aos-delay="1600">
        繼2012推出金獎名宅〔靜心連雲〕<br />
        睽違十年，連雲建築回到人文景美<br />
        精選仙岩公園首排稀珍美地<br />
        攜手日本職人<br />
        再創靜心學域完美經典
      </h1>
      <div class="more flex-ac flex-jb" data-aos="fade-right" data-aos-delay="1800" @click="isDialog = true">
        8B NICEHOMES More
        <img src="./s2/more.png" alt="">
      </div>
      <transition name="swipe-fade" mode="out-in">
        <div class="dialog" v-if="isDialog">
          <div class="dialog-bg">
            <img src="./s2/5.jpg" alt="" class="dialog-img" v-if="isPC">
            <h3 class="dialog-name" v-if="isPC">
              從規劃設計到營建施工，連雲以一條龍專業團隊實踐建築最高品質
            </h3>
            <h3 class="dialog-name" v-if="isMobile">
              從規劃設計到營建施工，<br />
              連雲以一條龍專業團隊實踐建築最高品質
            </h3>
            <img src="./s2/5_m.jpg" alt="" class="dialog-img" v-if="isMobile">
            <div class="dialog-title">
              8B NICEHOMES® 好宅指標
            </div>
            <div class="dialog-close flex-c" @click="isDialog = false">
              <img src="../../assets/img/close.png" alt="">
            </div>
            <div class="dialog-desc">
              連雲建築領先業界提出「8B好宅」<br />
              建築規範<br />
              融合文化、自然、健康、科技、安全、<br />
              便利、環保、美感等要素整合工程<br />
              數百項準則精細規範，並逐一檢核落實<br />
              打造全方位臻至完美的高品質好房子<br />
              N自然環保建築Natural & Environmental Protection Building<br />
              I 智慧建築 Intelligent Building<br />
              C社區建築Community Building<br />
              E雅致建築Elegant Building<br />
              H健康建築Healthy Building<br />
              O長效建築Open & Lifetime Building<br />
              M維護建築Maintainable Excellence Building<br />
              ES安心安全建築Easy & Safe Building
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  // position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.title {
  @include img_r_pc(360, 328, 144);
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  @include img_r_pc(316, 393, 187);
  height: 35px;
  border-top: size(0.5) solid  #fff9;
}

.desc {
  @include img_r_pc(368, 436, 133);
  font-size: size(21);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.more {
  @include img_r_pc(309 + 20 + 63, 705, 110);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: size(2.8);
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;

  img {
    width: size(63);
  }
}

.swiper-frame {
  position: absolute;
  width: size(1350);
  height: size(820);
  bottom: size(136);
  left: size(0);
  overflow: hidden;
}

.swiper-container {
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left: 0;
  margin-left:0;
.item{
  width:size(560);
  margin-right: size(30);
}
  img{width:100%;
  height:100%;}

  .text {
  position: absolute;
    right:1.5em;
    bottom:1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
    span {
      color: #242424;
    }
  }
}

/* Swipe */
.swipe {
  width: size(1350);
  height: size(820);
  bottom: size(136);
  left: 0;
  object-fit: cover;
  background:#0344;
 // background-image: url('./s2/bg_noise_bk.gif');
  background-size: cover;
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
  }

  .slide-name {
    left:2em;
    bottom:1.2em;
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
  bottom: size(44);
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

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
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
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
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

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #004471 80%, #094b76 100%);
  z-index: 1000;

  .dialog-bg {
    width: 100%;
    height:  100%;
    background-image: url('~@/projects/lj/s1/bg.png');
    // padding-top: $nav_pc_height;
    background-attachment: fixed;
    background-size: auto;
    background-position: center center;
    background-repeat: repeat;
  }

  .dialog-img {
    position: absolute;
    width: size(1350);
    height:auto;
    top: calc(50% - 21.35vw);
    left: 0;
  }

  .dialog-title {
    @include img_r_pc(325, 0, 179);
    top: calc(50% - 22vw);
    font-size: size(36);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-decoration: underline;
  }

  .dialog-close {
    @include div_r_pc(42, 42, 130, 94);
    top: calc(50% - 22vw);
    border: 1px solid #fff;
    cursor: pointer;

    img {
      width: 90%;
    }
  }
 .dialog-name{
   position: absolute;
    left:2em;
    bottom:calc(50% - 21.35vw + 1.2em);
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.2em 1em #000;}

  .dialog-desc {
    @include img_r_pc(448, 303, 52);
    top:auto;
    bottom: calc(50% - 22vw);
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.39;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin: 0 0 ;
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
  .section2 {
    width: 100vw;
    height: sizem(715);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr {
    @include img_r_m(230, 458, 102);
    height: sizem(0.5);
    background: #fff;
  }

  .desc {
    @include img_r_m(292, 474, 40);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }

  .swiper-frame {
    width: 100%;
    height: sizem(333);
    min-height: auto;
    top: sizem(50);
    left: sizem(0);bottom: auto;
}

.swiper-container {
  width:100%;
  height:100%;
  top: size(0);
  left: size(0);
  margin-left: size(0);
.item{
  width:sizem(228);
  margin-right: sizem(6);
}

  .text {
      font-size: sizem(15);
  }
}

  /* Swipe */
  .swipe {
    width: sizem(333);
    height: sizem(333);
    min-height: auto;
    top: sizem(50);
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    .slide-name {
      right: auto;
      bottom: auto;
      top: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
    }
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

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #004471 80%, #3780b1 100%);
    z-index: 1000;
    overflow-y: scroll;

    .dialog-bg {
      width: 100%;
      height: 112%;
      background-image: url('~@/projects/lj/s1/bg_m.png');
      // padding-top: $nav_pc_height;
      background-attachment: fixed;
      background-size: auto;
      background-position: center center;
      background-repeat: repeat;
    }

    .dialog-img {
      position: absolute;
      width: sizem(333);
      height: sizem(333);
      top: sizem(57);
      left: 0;
    }

    .dialog-title {
      @include img_r_m(302, 405, 34);
      font-size: sizem(22);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.81;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      text-decoration: underline;
    }

    .dialog-close {
      @include div_r_m(31, 32, 10, 10);
      border: 1px solid #fff;
      cursor: pointer;

      img {
        width: 90%;
      }
    }
 .dialog-name{
      right: auto;
      bottom: auto;
      top: calc(15.2vw + 1.2rem);
      left: 1.2rem;
      font-size: sizem(15);
      z-index: 2;
      }

    .dialog-desc {
      @include img_r_m(313, 454, 18);
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.39;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      height: auto;
      margin: 0 0 5em;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
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
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween:  0,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: isMobile ? true : false ,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        /* slidesPerColumn: isMobile ? 1 : 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }, */
      },
      slideList: [
        {
          img: require('./s2/1.jpg'),
          name: '泰安連雲-連峰樓',
        },
        {
          img: require('./s2/2.jpg'),
          name: '泰安連雲-接雲樓',
        },
        {
          img: require('./s2/3.jpg'),
          name: '靜心連雲',
        },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
