<template>
  <div class="section10">
    <img src="./s10/team_bg.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s10/team_style_1.png" :alt="`${info.caseName}_cloud`" class="cloud c1">
    <img src="./s10/team_style_2.png" :alt="`${info.caseName}_cloud`" class="cloud c2">
    <img src="./s10/team_style_3.png" :alt="`${info.caseName}_cloud`" class="cloud c3">
    <img src="./s10/team_style_4.png" :alt="`${info.caseName}_cloud`" class="cloud c4">
    <h3 class="title">
      國際建築菁英群
    </h3>
    <h3 class="subtitle">
      打造最美天空
    </h3>
    <div class="desc">
      「天空之邑」雙塔地標定義洲子洋天際線，簡約、對稱的建築語彙，國際精品、奢華飯店級享受，領先國際建築趨勢，邀集GERMAN DESIGN AWARD、義大利A'DESIGN、園冶獎等建築金獎菁英群，以頂級飯店、豪宅設計經驗，深切置入建築設計脈絡中，為洲子洋生活美學揭開新頁。
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" key="swipe-0">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <img src="./s10/team_mask.png" alt="" class="slide-mask" v-if="isPC">
            <img src="./s10/team_mask_m.png" alt="" class="slide-mask" v-if="isMobile">
            <h3 class="slide-name absolute" v-html="slide.text"></h3>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./s10/public_left.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./s10/public_right.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="pagination absolute flex-ac" v-if="isPC">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div>
    <transition-group name="fade-up" mode="out-in">
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
    </transition-group>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.content-name {
  @include img_l_pc(400, 575, 342);
  font-size: size(32.9);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.29);
  text-align: left;
  font-family: 'Noto Sans TC', sans-serif;
  color: #636363;

  span {
    font-size: size(50);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: size(5);
    text-align: left;
    color: #2e2e2e;
    font-family: 'Noto Serif TC', serif;
  }
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
  height: size(978);
  min-height: size(978);
  max-height: size(978);
  margin-top: size(120);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
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

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_l_pc(380, 186, 342);
  font-size: size(50);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(5);
  text-align: left;
  color: #2e2e2e;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(228, 202, 743);
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(3.5);
  text-align: left;
  color: #d38700;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(633, 300, 336);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: left;
  color: #7a7a7a;
}

.content {
  top: 0;
  left: 0;
}

.content-company {
  @include img_l_pc(600, 495, 345);
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.5);
  text-align: left;
  color: #d38700;
}

.content-hr {
  @include img_l_pc(330, 518, 733);
  border-bottom: size(1) solid #d38700;
}
.content-work {
  @include img_l_pc(600, 693, 345);
  font-size: size(22);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: size(4.4);
  text-align: left;
  color: #7a7a7a;

  .content-row {
    margin-bottom: size(33);

    img {
      width: size(41);
    }
  }
}

.slide-mask {
  @include img_r_pc(802, 439, 10);
  width: size(802) !important;
  height: auto !important;
  top: size(439) !important;
  right: size(0) !important;
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
  @include img_l_pc(493, 0, 0);
  transform: translateX(-10%);
  z-index: 2;
}
.c2 {
  @include img_l_pc(301, 193, 10);
  transform: translateX(-8%);
  z-index: 2;
}
.c3 {
  @include img_r_pc(393, 726, -30);
  transform: translateX(30%);
  animation-direction: alternate-reverse;
  z-index: 2;
}
.c4 {
  @include img_r_pc(301, 841, 183);
  transform: translateX(5%);
  animation-direction: alternate-reverse;
  z-index: 2;
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
      slideList: [
        {
          img: isMobile
            ? require('./s10/team_p1_m.jpg')
            : require('./s10/team_p1.png'),
          text: isMobile ? '北台灣精品 名宅推手' : '北台灣精品<br />名宅推手',
          company: 'A8聯合建築師事務所',
          name: '<span>陳朝雄</span> 建築師',
          work1: isMobile
            ? '<span>新店央北重劃區：</span>波爾多一期、波爾多二期'
            : '新店央北重劃區：波爾多一期、波爾多二期',
          work2: isMobile
            ? '<span>板橋江子翠重劃區：</span>江翠ONE、江翠PARK'
            : '板橋江子翠重劃區：江翠ONE、江翠PARK',
        },
        {
          img: isMobile
            ? require('./s10/team_p2_m.jpg')
            : require('./s10/team_p2.png'),
          text: isMobile ? '國際空間 設計金獎' : '國際空間<br />設計金獎',
          company: '呈境室內設計',
          name: '<span>袁世賢</span> 設計師',
          work1: 'IF DESIGN AWARD–最佳餐飲、住宅空間',
          work2: `義大利A'DESIGN 設計大獎-銀獎`,
        },
        {
          img: isMobile
            ? require('./s10/team_p3_m.jpg')
            : require('./s10/team_p3.png'),
          text: isMobile
            ? '飯店、豪宅 御用造景團隊'
            : '飯店、豪宅<br />御用造景團隊',
          company: '大漢設計工程',
          name: '<span>徐世萃</span> 設計師',
          work1: '台北大直維多麗亞酒店 庭園設計',
          work2: '台北大直ATT百貨 庭園設計',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 7) {
        this.slideIndex = 0
      }
    },
  },
}
</script>
