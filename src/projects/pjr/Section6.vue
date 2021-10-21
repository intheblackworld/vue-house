<template>
  <div class="section6">
    <picture>
      <source srcset="./webp/s6/1_logo.webp" type="image/webp" />
      <source srcset="./s6/1_logo.png" type="image/jpeg" />
      <img src="./s6/1_logo.png" alt="1" class="logo" data-aos="fade" data-aos-delay="0">
    </picture>
    <div class="label" data-aos="fade" data-aos-delay="200">
      勤美集團
    </div>
    <div class="title" data-aos="fade" data-aos-delay="400">
      亞洲第一專業鑄造集團<br />
      職人精神 專心做好一件事
    </div>

    <h3 class="desc" data-aos="fade" data-aos-delay="600">
      勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，獲亞洲第一專業鑄造廠之美譽，今為台灣（勤美，股票代號TW1532）大型上市集團、大中華地區最大民營鑄造集團。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。
    </h3>

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" @click="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + i" :class="`swipe-item absolute`">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <source media="(max-width: 767px)" :srcset="slide.webpm" type="image/webp" />
              <source media="(max-width: 767px)" :srcset="slide.imgm" type="image/webp" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
      </div>
      <div class="prev-btn" @click="decIndex"></div>
      <div class="next-btn" @click="addIndex"></div>
      <!-- <div class="swipe-btns absolute flex-ac flex-jb">
      </div> -->
      <div class="slide-title" v-html="slideList[slideIndex].title"></div>
      <div class="slide-label" v-html="slideList[slideIndex].label"></div>
      <div class="slide-desc" v-html="slideList[slideIndex].desc"></div>
      <picture>
        <source :srcset="slideList[slideIndex].logo" type="image/jpeg" />
        <source :srcset="slideList[slideIndex].logowebp" type="image/webp" />
        <img :src="slideList[slideIndex].logo" :alt="info.caseName" class="slide-logo">
      </picture>
    </div>
    <div class="pagination absolute flex-ac" v-if="isPC">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(763);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.logo {
  @include img_l_pc(111, 248, 185);

  @include md {
    @include img_l_m(69, 60, 28);
  }
}
.label {
  @include img_l_pc(373, 310, 185);
  font-size: size(29);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.45);
  text-align: left;
  color: #c9a063;
  white-space: nowrap;
  @include md {
    @include img_l_m(206, 101, 28);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.8);
    text-align: left;
    color: #c9a063;
  }
}
.title {
  @include img_l_pc(604, 374, 185);
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;

  @include md {
    @include img_l_m(209, 140, 28);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: left;
    color: #3e3a39;
  }
}

.desc {
  @include img_l_pc(660, 476, 185);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: 0.05em;
  text-align: justify;
  color: #3e3a39;

  @include md {
    @include img_l_m(320, 210, 28);
    font-size: sizem(13);
    line-height: 2;
  }
}

/* Swipe */
.swipe {
  @include div_r_pc(660, 440, 195, 185);
  object-fit: cover;

  @include md {
    @include div_c_m(320, 213, 420);
  }
}

.slide-title {
  @include img_l_pc(660, 120 - 195, 0);
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;

  @include md {
    @include img_l_m(320, -23, 0);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(1.63);
    text-align: left;
    color: #3e3a39;
  }
}
.slide-label {
  @include img_r_pc(660, 654 - 195, 0);
  font-size: size(24);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #c9a063;
  @include md {
    @include img_l_m(320, 235, 0);
    font-size: sizem(13);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: sizem(0.65);
    text-align: left;
    color: #c9a063;
  }
}

.slide-desc {
  @include img_r_pc(660, 708 - 195, 0);
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: size(1);
  text-align: left;
  color: #727171;

  @include md {
    @include img_l_m(320, 260, 0);
    font-size: sizem(12);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: sizem(0.6);
    text-align: left;
    color: #727171;
  }
}
.slide-logo {
  position: absolute;
  top: size(700 - 195);
  width: size(120);
  right: 0;
  @include md {
    position: absolute;
    top: sizem(270);
    width: sizem(47);
    right: 0;
  }
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

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
    right: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
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
  bottom: size(238);
  left: auto;
  right: size(186);
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 0px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #c9a063;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
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
        background: #c9a063;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #c9a063;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

// .swipe-btns {
// width: 100%;
// height: 100%;
// padding: 0 0;
// z-index: 3;
// overflow: hidden;
// position: absolute;
// top: 0;
// left: 0;

.prev-btn {
  top: 0;
  left: 0;
}

.next-btn {
  top: 0;
  right: 0;
}
.prev-btn,
.next-btn {
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 2em;
  font-size: size(20);
  cursor: pointer;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   transform: translateX(100%);
  //   background-color: #0004;
  //   transition: all 0.3s;
  // }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.75em);
    border: solid #fff;
    border-width: 0.1em 0.1em 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }
}
.prev-btn {
  transform: scaleX(-1);
}
// }
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
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
      top: auto;
      bottom: 0.8em;
      right: 0.8em;
      font-size: sizem(12);
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

  .prev-btn,
  .next-btn {
    width: 2em;
    font-size: sizem(15);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      width: 1em;
      height: 1em;
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s6/1情境示意圖.jpg'),
          webp: require('./webp/s6/1情境示意圖.webp'),
          logo: require('./s6/1_logo.png'),
          logowebp: require('./webp/s6/1_logo.webp'),
          name: '情境示意圖',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '金屬成型事業',
          desc: '勤美新竹、勤美楊梅、化新精密、<br />天津勤威、蘇州勤堡、武漢勤美達',
        },
        {
          img: require('./s6/2璞真建設作品 勤美璞真 碧湖畔.jpg'),
          webp: require('./webp/s6/2璞真建設作品 勤美璞真 碧湖畔.webp'),
          logo: require('./s6/2_logo.png'),
          logowebp: require('./webp/s6/2_logo.webp'),
          name: '璞真建設作品 勤美璞真 碧湖畔',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '不動產事業',
          desc: '璞真建設股份有限公司',
        },
        {
          img: require('./s6/3全國大飯店.jpg'),
          webp: require('./webp/s6/3全國大飯店.webp'),
          logo: require('./s6/3_logo.png'),
          logowebp: require('./webp/s6/3_logo.webp'),
          name: '全國大飯店',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '飯店休閒',
          desc: '全國大飯店',
        },
        {
          img: require('./s6/4日華金典國際酒店.jpg'),
          webp: require('./webp/s6/4日華金典國際酒店.webp'),
          logo: require('./s6/4_logo.png'),
          logowebp: require('./webp/s6/4_logo.webp'),
          name: '日華金典國際酒店',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '飯店休閒',
          desc: '日華金典國際酒店',
        },
        {
          img: require('./s6/5勤美學山那村.jpg'),
          webp: require('./webp/s6/5勤美學山那村.webp'),
          logo: require('./s6/5_logo.png'),
          logowebp: require('./webp/s6/5_logo.webp'),
          name: '勤美學山那村',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '藝術深耕',
          desc: '勤美學山那村',
        },
        {
          img: require('./s6/6勤美誠品綠園道.jpg'),
          webp: require('./webp/s6/6勤美誠品綠園道.webp'),
          logo: require('./s6/6_logo.png'),
          logowebp: require('./webp/s6/6_logo.webp'),
          name: '勤美誠品綠園道',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '人文商場',
          desc: '勤美誠品綠園道',
        },
        {
          img: require('./s6/7金典綠園道商場.jpg'),
          webp: require('./webp/s6/7金典綠園道商場.webp'),
          logo: require('./s6/7_logo.png'),
          logowebp: require('./webp/s6/7_logo.webp'),
          name: '金典綠園道商場',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '人文商場',
          desc: '金典綠園道商場',
        },
        {
          img: require('./s6/8台中綠園道展覽.jpg'),
          webp: require('./webp/s6/8台中綠園道展覽.webp'),
          logo: require('./s6/8_logo.png'),
          logowebp: require('./webp/s6/8_logo.webp'),
          name: '台中綠園道展覽',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '藝術深耕',
          desc: '勤美璞真文化藝術基金會',
        },
        {
          img: require('./s6/9台中勤美術館.jpg'),
          webp: require('./webp/s6/9台中勤美術館.webp'),
          logo: require('./s6/9_logo.png'),
          logowebp: require('./webp/s6/9_logo.webp'),
          name: '台中勤美術館',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '藝術深耕',
          desc: '勤美術館',
        },
        {
          img: require('./s6/10情境示意圖.jpg'),
          webp: require('./webp/s6/10情境示意圖.webp'),
          logo: require('./s6/10_logo.png'),
          logowebp: require('./webp/s6/10_logo.webp'),
          name: '情境示意圖',
          title: '翻轉傳統產業 開啟綠色生產新頁',
          label: '藝術深耕',
          desc: '森大x青鳥',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

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
