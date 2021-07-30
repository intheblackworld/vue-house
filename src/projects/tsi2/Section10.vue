<template>
  <div class="section10">
    <img src="./s10/bg1.png" :alt="`${info.caseName}_img`" class="bgimg">
    <img src="./s10/bg2.png" :alt="`${info.caseName}_img`" class="bgimg">
    <div class="title">
      天空御選
    </div>
    <img src="./s3/line.png" :alt="`${info.caseName}_img`" class="title-line">
    <div v-if="isPC">
      <div class="item-list flex-ac flex-jb wrap">
        <div class="item" v-for="(slide, index) in slideList" :key="slide.img" @click="showDialog(index)">
          <img :src="slide.img" alt="">
          <div class="item-text" v-html="slide.text"></div>
          <div class="item-name" v-html="slide.name"></div>
          <div class="item-company" v-html="slide.company"></div>
          <div class="item-line"></div>
        </div>
      </div>
    </div>
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog">
        <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
        <img :src="current.avatar" alt="" class="dialog-avatar">
        <div class="dialog-text" v-html="current.text"></div>
        <h3 class="dialog-desc" v-html="current.desc"></h3>
        <div class="dialog-company" v-html="current.company"></div>
        <div class="dialog-name" v-html="current.name"></div>
        <h3 class="dialog-work1" v-html="current.work1"></h3>
        <h3 class="dialog-work2" v-html="current.work2"></h3>
        <img :src="current.img2" alt="" class="dialog-work-img">
      </div>
    </transition>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" key="swipe-0" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.text"></h3>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb pc-displaynone">
          <img src="./s10/public_left.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./s10/public_right.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="pagination absolute flex-ac" v-if="isMobile">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div>
    <!-- <transition-group name="fade-up" mode="out-in">
      <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`content absolute`">
        <h3 class="content-company" v-html="slide.company"></h3>
        <div class="content-hr"></div>
        <h3 class="content-name" v-html="slide.name"></h3>
        <div class="content-work">
          <div class="content-row flex-ac">
            <img src="./s10/team_list_style.png" alt="">
            <div class="content-desc" v-html="slide.work1"></div>
          </div>
          <div class="content-row flex-ac">
            <img src="./s10/team_list_style.png" alt="">
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
  font-family: 'Noto Sans TC', sans-serif;
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
    font-family: 'Noto Serif TC', serif;
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
  font-family: 'Noto Sans TC', sans-serif;
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
    font-family: 'Noto Serif TC', serif;
  }
}

@media screen and (min-width: 767px) {
  .pc-displaynone{display: none !important;}
}

@media screen and (max-width: 767px) {
  .content-name {
    @include img_l_m(350, 544, 25);
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(1.6);
    text-align: left;
    font-family: 'Noto Sans TC', sans-serif;
    color: #636363;

    span {
      font-size: sizem(24);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: sizem(2.4);
      text-align: left;
      color: #2e2e2e;
      font-family: 'Noto Serif TC', serif;
    }
  }

  .content-work {
    @include img_l_m(320, 620, 25);
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #7a7a7a;

    span {
      font-weight: 500;
      color: #000000;
    }

    .content-row {
      margin-bottom: sizem(10);

      img {
        width: sizem(22);
      }
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
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bgimg {
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
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
  color: #003177;
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
  background-color: #F1E8DD;
  cursor: pointer;

  img {
    width: 100%;
    mix-blend-mode: luminosity;
    transition: all .5s;
  }

  .item-text, .item-company, .item-name, .item-line {
    margin-top: 30px;
    opacity: 0;
    transition: all .5s;
  }

  &:hover {
    img {
      mix-blend-mode: normal;
    }
    .item-text, .item-company, .item-name, .item-line {
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-image: url('./s1/test.jpg');
  background-size: cover;
  background-position: center bottom;

  .close {
    position: absolute;
    top: 2em;
    right: 2em;
    cursor: pointer;
  }

  .dialog-avatar {
    @include img_l_pc(315, 246, 129);
    border-radius: 999px;
  }

  .dialog-text {
    @include img_l_pc(480, 279, 485);
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
    font-size: size(20);
    font-weight: 600;
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
  }

  .dialog-work1 {
    @include img_l_pc(480, 676, 485);
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
  }
  .dialog-work2 {
    @include img_l_pc(480, 720, 485);
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
  }
  .dialog-work-img {
    @include img_r_pc(712, 279, 200);
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
    height: sizem(667);
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
    @include img_c_m(228, 25);
    font-size: sizem(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(3);
    text-align: left;
    color: #2e2e2e;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(163, 77);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.68;
    letter-spacing: sizem(2.5);
    text-align: left;
    color: #d38700;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(325, 114);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: sizem(0.7);
    text-align: left;
    color: #7a7a7a;
  }

  .content {
    top: 0;
    left: 0;
  }

  .content-company {
    @include img_l_m(355, 509, 25);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: sizem(2);
    text-align: left;
    color: #d38700;
  }

  .content-hr {
    @include img_r_m(108, 523, 24);
    border-bottom: 1px solid #d38700;
  }
  .content-work {
    @include img_l_m(320, 590, 25);
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #7a7a7a;

    span {
      font-weight: 500;
      color: #000000;
    }

    .content-row {
      margin-bottom: sizem(10);

      img {
        width: sizem(22);
        margin-right: 8px;
      }
    }
  }

  .slide-mask {
    @include img_r_m(375, 150, 0);
    width: sizem(375) !important;
    height: auto !important;
    top: sizem(150) !important;
    right: sizem(0) !important;
  }

  .cloud {
    position: absolute;
    animation: cloud 5s ease-in-out alternate infinite;
  }

  @keyframes cloud {
    to {
      transform: translateX(0);
    }
  }

  .c1 {
    @include img_l_m(140, 0, 0);
    transform: translateX(-10%);
    z-index: 2;
  }
  .c2 {
    @include img_l_m(77, 58, -30);
    transform: translateX(-8%);
    z-index: 2;
  }
  .c3 {
    @include img_r_m(127, 525, -30);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
    z-index: 2;
  }
  .c4 {
    @include img_r_m(109, 561, 40);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
    z-index: 2;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(210);
    min-height: auto;
    top: sizem(279);
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
      width: sizem(300);
      bottom: sizem(15);
      right: 0;
      left: 0;
      margin: 0 auto;
      font-size: sizem(20);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.45;
      letter-spacing: sizem(2);
      text-align: center;
      color: #ffffff;
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
    padding: 0px;
    z-index: 3;
    .prev-btn {
      left: 0;
    }

    .next-btn {
      right: 0;
    }
    .prev-btn,
    .next-btn {
      width: sizem(43);
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
  name: 'section10',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      current: {
        img: require('./s10/1.jpg'),
        avatar: require('./s10/1s.jpg'),
        text: isPC ? '國際空間設計金獎' : '國際空間<br />設計金獎',
        company: '呈境室內設計',
        name: '<span>袁世賢</span> /設計師',
        work1: 'IF DESIGN AWARD–最佳餐飲、住宅空間',
        work2: `義大利A'DESIGN 設計大獎-銀獎`,
        desc: '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
        img2: require('./s10/1.png')
      },
      slideList: [
        {
          img: require('./s10/1.jpg'),
          avatar: require('./s10/1s.jpg'),
          text: isPC ? '國際空間設計金獎' : '國際空間<br />設計金獎',
          company: '呈境室內設計',
          name: '<span>袁世賢</span> /設計師',
          work1: 'IF DESIGN AWARD–最佳餐飲、住宅空間',
          work2: `義大利A'DESIGN 設計大獎-銀獎`,
          desc: '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/1.png')
        },
        {
          img: require('./s10/2.jpg'),
          avatar: require('./s10/2s.jpg'),
          text: isPC ? '北台灣精品名宅推手' : '北台灣精品<br />名宅推手',
          company: 'A8聯合建築師事務所',
          name: '<span>陳朝雄</span> /建築師',
          work1: isMobile
            ? '<span>新店央北重劃區：</span>波爾多一期、波爾多二期'
            : '新店央北重劃區：波爾多一期、波爾多二期',
          work2: isMobile
            ? '<span>板橋江子翠重劃區：</span>江翠ONE、江翠PARK'
            : '板橋江子翠重劃區：江翠ONE、江翠PARK',
          desc: '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，<br />領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/2.png')
        },
        {
          img: require('./s10/3.jpg'),
          avatar: require('./s10/3s.jpg'),
          text: isPC
            ? '飯店、豪宅御用造景團隊'
            : '飯店、豪宅<br />御用造景團隊',
          company: '大漢設計工程',
          name: '<span>徐世萃</span> /設計師',
          work1: '台北大直維多麗亞酒店 庭園設計',
          work2: '台北大直ATT百貨 庭園設計',
          desc: '「天空之邑」以雙塔地標，重新定義洲子洋天際線，<br />簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，以頂級飯店、豪宅設計語彙，<br />融入建築設計脈絡中，為您的幸福生活揭開新頁。',
          img2: require('./s10/2.png')
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
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {
  },
}
</script>
