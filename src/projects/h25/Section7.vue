<template>
  <div class="section7">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <transition-group name="swipe-fade" mode="out-in">
      <img v-if="slideIndex === 0" :src="slideList[slideIndex].person" alt="" class="person1" key="img1">
      <div v-if="slideIndex === 0" key="name1" :class="`name1`" v-html="slideList[slideIndex].name"></div>
      <div v-if="slideIndex === 0" key="title1" :class="`title1`" v-html="slideList[slideIndex].title"></div>
      <div v-if="slideIndex === 0" key="desc1" :class="`desc1`" v-html="slideList[slideIndex].desc"></div>
    </transition-group>

    <transition-group name="swipe-fade" mode="out-in">
      <img v-if="slideIndex === 1" :src="slideList[slideIndex].person" alt="" class="person1" key="img2">
      <div v-if="slideIndex === 1" key="name2" :class="`name2`" v-html="slideList[slideIndex].name"></div>
      <div v-if="slideIndex === 1" key="title2" :class="`title2`" v-html="slideList[slideIndex].title"></div>
      <div v-if="slideIndex === 1" key="desc2" :class="`desc2`" v-html="slideList[slideIndex].desc"></div>
    </transition-group>
    <transition-group name="swipe-fade" mode="out-in">
      <img v-if="slideIndex === 2" :src="slideList[slideIndex].person" alt="" class="person1" key="img3">
      <div v-if="slideIndex === 2" key="name3" :class="`name3`" v-html="slideList[slideIndex].name"></div>
      <div v-if="slideIndex === 2" key="title3" :class="`title3`" v-html="slideList[slideIndex].title"></div>
      <div v-if="slideIndex === 2" key="desc3" :class="`desc3`" v-html="slideList[slideIndex].desc"></div>
    </transition-group>

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(548 + 321);
  min-height: size(548 + 321);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.person1 {
  @include img_l_pc(564, 79, 177);
}
.name1 {
  @include img_l_pc(428, 604, 733);
  font-size: size(46.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(7.44);
  text-align: left;
  color: #c3985b;
  white-space: nowrap;
}

.title1 {
  @include img_r_pc(370, 610, 331);
  font-size: size(40.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(6.5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc1 {
  @include img_r_pc(879, 673, 307);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: size(1.8);
  text-align: left;
  color: #ffffff;
}

.person2 {
  @include img_l_pc(564, 79, 177);
}
.name2 {
  @include img_l_pc(428, 604, 733);
  font-size: size(46.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(7.44);
  text-align: left;
  color: #c3985b;
  white-space: nowrap;
}

.title2 {
  @include img_r_pc(370, 610, 331);
  font-size: size(40.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(6.5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc2 {
  @include img_r_pc(879, 673, 307);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: size(1.8);
  text-align: left;
  color: #ffffff;
}

.person3 {
  @include img_l_pc(564, 79, 177);
}
.name3 {
  @include img_l_pc(428, 604, 733);
  font-size: size(46.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(7.44);
  text-align: left;
  color: #c3985b;
  white-space: nowrap;
}

.title3 {
  @include img_r_pc(370, 610, 331);
  font-size: size(40.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: size(6.5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc3 {
  @include img_r_pc(879, 673, 307);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: size(1.8);
  text-align: left;
  color: #ffffff;
}

/* Swipe */
.swipe {
  width: size(880);
  height: size(485);
  top: size(110);
  right: size(305);
  left: auto;
  margin: 0 auto;
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
  }

  .slide-name {
    right: 20px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    top: 0px;
    color: #fff;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.11;
    letter-spacing: 0.89px;
    text-align: left;
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
  top: size(20);
  left: size(20);
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
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #d66655;
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
        background: #d66655;
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
  .section7 {
    width: 100vw;
    height: sizem(766);
    min-height: auto;
    max-height: initial;
    background-color: #000;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: visible;
  }
  .person1, .person2, .person3 {
    @include img_r_m(201, 391, 0);
  }
  .name1, .name2, .name3 {
    @include img_l_m(230, 263, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(4);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }

  .title1, .title2, .title3 {
    @include img_l_m(182, 308, 33);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.22;
    letter-spacing: sizem(3.2);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc1, .desc2, .desc3 {
    @include img_l_m(182, 358, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: sizem(1.8);
    text-align: left;
    color: #ffffff;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(250);
    max-height: auto;
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
    z-index: 3 !important;
    opacity: 1 !important;
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
    overflow: visible;
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
      font-size: sizem(16);
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
    height: sizem(40);
    top: sizem(-40);
    bottom: auto !important;
    left: auto;
    right: 0;
    margin: auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: transparent;
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: transparent;
        border-radius: 12px;
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
          background: #fff;
          border-radius: 12px;
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
    z-index: 30;

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

export default {
  name: 'section7',

  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isDialog: false,
      slideList: [
        {
          img: require('./s7/1.jpg'),
          name: '許華山 X 力天開發',
          title: '一次最精彩的轉譯',
          desc:
            '建築不只是存在，而是一場行動，其創造環境、更樹立影響力。<br />在富含價值的歷史與新創文化中，力天開發與呂大吉、許華山建築師事務所共讀區域紋理，尊重人文、轉譯設計、進而發酵於生活，讓建築與區域一同精彩，更像你的樣。',
          person: require('./s7/資產 17.png'),
        },
        {
          img: require('./s7/2.jpg'),
          name: '許華山 X 力天開發',
          title: '一次最精彩的轉譯',
          desc:
            '建築不只是存在，而是一場行動，其創造環境、更樹立影響力。<br />在富含價值的歷史與新創文化中，力天開發與呂大吉、許華山建築師事務所共讀區域紋理，尊重人文、轉譯設計、進而發酵於生活，讓建築與區域一同精彩，更像你的樣。',
          person: require('./s7/資產 17.png'),
        },
        {
          img: require('./s7/3.jpg'),
          name: '許華山 X 力天開發',
          title: '一次最精彩的轉譯',
          desc:
            '建築不只是存在，而是一場行動，其創造環境、更樹立影響力。<br />在富含價值的歷史與新創文化中，力天開發與呂大吉、許華山建築師事務所共讀區域紋理，尊重人文、轉譯設計、進而發酵於生活，讓建築與區域一同精彩，更像你的樣。',
          person: require('./s7/資產 17.png'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
