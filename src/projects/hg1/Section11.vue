<template>
  <div class="section11">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s11/漂浮物件_分層/10_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img src="./s11/漂浮物件_分層/10_class_2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
      <img src="./s1/mo1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
    <img src="./s11/masterteam_bg.png" :alt="`${info.caseName}_masterteam_bg`" class="bg-img" data-aos="fade-up" data-aos-delay="0">
    <div class="bg-img blue"></div>
    <div class="title" data-aos="fade" data-aos-delay="400">
      大師團隊<br />四強聯手
    </div>
    <div class="subtitle" data-aos="fade" data-aos-delay="600">
      MASTER<br />TEAM
    </div>
    <img src="./s11/style_arrow_7.png" :alt="`${info.caseName}_style_arrow`" class="arrow" data-aos="fade-up" data-aos-delay="200">
    <div class="item-list">
      <img :src="item.img" :alt="`${info.caseName}_item`" data-aos="fade-up" :data-aos-delay="200 + index * 50" v-for="(item, index) in item_list" :key="item.img + index" @click="showDialog(index)">
    </div>
    <div :class="`dialog ${isDialog ? 'show' : ''}`">
      <!-- <img :src="slideList[imgIndex].img" alt="" class="dialog-img absolute"> -->
      <img src="./s11/masterteam_bg.png" :alt="`${info.caseName}_masterteam_bg`" class="bg-img dialog-bg" data-aos="fade-up" data-aos-delay="0">
      <div class="bg-img blue light"></div>
      <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
      <transition-group name="swipe-fade" mode="out-in">
        <div class="dialog-content" v-if="isDialog1" key="dialog-1">
          <div class="dialog-slogan dialog-slogan1">
            MASTER<br />TEAM
          </div>
          <div class="dialog-title dialog-title1">
            築億建設 訂製經典
          </div>
          <div class="dialog-desc dialog-desc1">
            以觀念決定態度，品質決定價值的信念，打造每一棟帶領風潮的建築，「築億建設」以不斷創新的思維及高標準的要求，為每一位住戶打造藝極經典！
          </div>
          <div class="dialog-works dialog-works1">
            經典作品／<br />
            築億丰盛、築億築藝、大樹小墅、時上逸品、曉學堂
          </div>
          <img class="dialog-img dialog-img1" src="./s11/masterteam_man1.png" :alt="`${info.caseName}_dialog_img`">
        </div>
        <div class="dialog-content" v-if="isDialog2" key="dialog-2">
          <div class="dialog-slogan dialog-slogan2">
            MASTER<br />TEAM
          </div>
          <div class="dialog-title dialog-title2">
            空間美學推手
          </div>
          <div class="dialog-desc dialog-desc2">
            以精湛的手法將簡約藝術與人文氣息融合，以人為本，細心設計生活空間，塑造穩重卻令人放鬆的氛圍，用心實踐品味之美，體現愜意生活的無上享受！
          </div>
          <div class="dialog-works dialog-works2">
            獲獎紀錄／<br />
            義大利 A’Design Award<br />
            美國 IDA Design Award<br />
            中國 Idea-Tops Award<br />
            日本 Good-design Award
          </div>
          <img class="dialog-img dialog-img2" src="./s11/masterteam_man2.png" :alt="`${info.caseName}_dialog_img`">
        </div>
        <div class="dialog-content" v-if="isDialog3" key="dialog-3">
          <div class="dialog-slogan dialog-slogan3">
            MASTER<br />TEAM
          </div>
          <div class="dialog-title dialog-title3">
            安居結構權威
          </div>
          <div class="dialog-desc dialog-desc3">
            採用「Alfa Safe柱中柱」世界專利技術，經由國家地震工程研究中心實驗證明，耐震韌性較傳統柱提升近100%，給您安全耐震好宅！
          </div>
          <div class="dialog-works dialog-works3">
            代表作品／<br />
            築億築藝<br />
            達永秋鄉<br />
            昭揚君璽
          </div>
          <img class="dialog-img dialog-img3" src="./s11/masterteam_man3.png" :alt="`${info.caseName}_dialog_img`">
        </div>
        <div class="dialog-content" v-if="isDialog4" key="dialog-4">
          <div class="dialog-slogan dialog-slogan4">
            MASTER<br />TEAM
          </div>
          <div class="dialog-title dialog-title4">
            豪宅建築巨擘
          </div>
          <div class="dialog-desc dialog-desc4">
            豪宅御用建築師 林永發，將藝術放入生活，將溫度帶進建築，經典代表作中悦建設、葛里法系列等，本案為近年來首發的小坪數作品，是第一也是唯一的珍貴！
          </div>
          <div class="dialog-works dialog-works4">
            經典業績／<br />
            中悦美樹花園、中悦國寶、葛里法系列
          </div>
          <img class="dialog-img dialog-img4" src="./s11/masterteam_man4.png" :alt="`${info.caseName}_dialog_img`">
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 彈窗效果
.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(45, 115, 171, 1);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.5s;
  display: block;
  overflow: auto;
  left: 100vw;
  transition: all 0.5s;
  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
    left: 0;
  }

  .dialog-bg {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 1 !important;
    mix-blend-mode: overlay;
  }

  .dialog-img {
    &.dialog-img1 {
      @include img_l_pc(280, 65, 700);
    }
  }

  .dialog-slogan {
    font-size: size(159);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: size(6.84);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    &.dialog-slogan1 {
      @include img_l_pc(649, 493, 165);
    }
  }

  .dialog-title {
    font-size: size(53.4);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(-0.91);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    &.dialog-title1 {
      @include img_l_pc(316, 426, 1173);
    }
  }

  .dialog-desc {
    &.dialog-desc1 {
    }
  }

  .dialog-works {
    &.dialog-works1 {
    }
  }

  .close {
    position: fixed;
    cursor: pointer;
    right: size(60);
    top: size(70);
    width: size(56);
    // background-color: #9d0c1a;
  }
}

.section11 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  // position: relative;
  z-index: 10;
  // background-color: #b01f24;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }

  &.blue {
    background-color: rgba(45, 115, 171, 0.77);

    &.light {
      background-color: rgba(45, 115, 171, 0.57);
    }
  }
}

.title {
  @include img_l_pc(340, 183, 170);
  font-size: size(82.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(3.53);
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(333, 406, 172);
  font-size: size(85.9);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: size(0.26);
  text-align: left;
  color: #df9529;
  white-space: nowrap;
}

.arrow {
  @include img_l_pc(50, 541, 430);
}

.item-list {
  @include img_r_pc(1192, 125, 151);
  img {
    cursor: pointer !important;
    position: absolute;
    top: 0;
    z-index: 3;
    opacity: 0.85 !important;
    transition: all 0.3s !important;

    &:hover {
      opacity: 1 !important;
      transform: scale(1.1) !important;
    }
    &:nth-child(1) {
      width: size(280);
      left: 0;
    }

    &:nth-child(2) {
      width: size(505);
      left: size(200);
    }

    &:nth-child(3) {
      width: size(505);
      left: size(500);
    }

    &:nth-child(4) {
      width: size(400);
      left: size(830);
      top: size(45);
    }
    // margin: size(10) size(20);
  }
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(300, 300, -40);
    z-index: 1;
  }

  .pc2 {
    @include img_l_pc(260, -40, 0);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

/* Swipe */
.swipe {
  width: size(1310);
  height: size(703);
  top: size(99);
  left: 0;
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
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 15px;
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
  bottom: size(20);
  right: size(20);
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
      background: #b50005;
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
        background: #b50005;
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
  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    // background: url('./s1/bg.png') repeat;
    background-size: auto;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
    display: block;
    overflow: auto;
    left: 100vw;
    transition: all 0.5s;
    &.show {
      display: block;
      z-index: 210;
      opacity: 1;
      left: 0;
    }

    .dialog-img {
      width: size(1160);
      top: calc(50% - 18.75vw);
      left: size(176);
      object-fit: cover;
      height: auto;
      z-index: 2;
    }

    .dialog-ink {
      width: size(250);
      top: calc(50% + 2vw);
      right: size(172);
    }

    .dialog-text {
      width: size(800);
      height: size(32.4);
      top: calc(50% + 17.1vw);
      right: size(177);
      border-bottom: solid 1px #9d0c1a;
      border-right: solid 1px #9d0c1a;
      text-align: right;
      font-size: size(23.6);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: size(5.66);
      padding: 0 5px;
      color: #262626;
    }

    .dialog-title {
      top: calc(50% - 18.75vw);
      right: size(423);
      font-size: size(44);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.06;
      letter-spacing: size(2.6);
      text-align: left;
      color: #af1f24;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }

    .dialog-subtitle {
      top: calc(50% - 18.75vw);
      right: size(388);
      font-size: size(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.1;
      letter-spacing: size(1.48);
      text-align: left;
      color: #323333;
      writing-mode: vertical-rl;
      text-orientation: upright;
      white-space: nowrap;
    }

    .close {
      position: fixed;
      cursor: pointer;
      right: size(186);
      top: calc(50% - 18.75vw);
      width: size(56);
      background-color: #9d0c1a;
    }
  }
  .section11 {
    width: 100vw;
    height: sizem(790);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img-text {
    width: sizem(280);
    min-height: sizem(44.6);
    height: auto;
    bottom: sizem(20);
    padding-right: 10px;
    border-right: solid 1px #af1f24;
    border-bottom: solid 1px #af1f24;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: sizem(0.62);
    text-align: right;
    color: #ffffff;
  }

  .title {
    width: sizem(308);
    top: sizem(430);
    left: sizem(31.5);
    font-size: sizem(32);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: sizem(4.45);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(31);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.19;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    .number {
      font-size: sizem(42);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: sizem(4.2);
      text-align: left;
      color: #ffffff;
    }
  }

  .subtitle {
    width: sizem(310);
    top: sizem(397);
    left: sizem(31.7);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.04;
    letter-spacing: sizem(0.6);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: sizem(538);
    right: sizem(32);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: justify;
    color: #ffffff;
    padding: sizem(20) 0 0 0;
    border-left: size(0) solid #fff;
    border-top: sizem(2) solid #fff;
  }

  /* Swipe */
  .swipe {
    width: sizem(308);
    height: sizem(366);
    min-height: auto;
    top: sizem(16);
    left: sizem(34);
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
      height: sizem(366);
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section11',

  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      isDialog1: false,
      isDialog2: false,
      isDialog3: false,
      isDialog4: false,
      info,
      item_list: [
        {
          img: require('./s11/masterteam_man1.png'),
        },
        {
          img: require('./s11/masterteam_man2.png'),
        },
        {
          img: require('./s11/masterteam_man3.png'),
        },
        {
          img: require('./s11/masterteam_man4.png'),
        },
      ],
      slideList: [
        // {
        //   img: require('./s11/1.jpg'),
        //   text: '《墨濤院》<br />2017年國家建築金質獎',
        // },
        // {
        //   img: require('./s11/2.jpg'),
        //   text: '《十三行博物館休閒教育園區》<br />2020年國家卓越建設獎金質獎',
        // },
        // {
        //   img: require('./s11/3.jpg'),
        //   text:
        //     '《實踐大學圖書館及體育館-清水混凝土結構工程》<br />2012年台北市都市景觀首獎',
        // },
        // {
        //   img: require('./s11/4.jpg'),
        //   text: '《法鼓山人文社會學院》<br />2015年台灣建築獎佳作獎 ',
        // },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.isDialog = true
      this[`isDialog${index + 1}`] = true
    },
    closeDialog() {
      this.isDialog = false
      // this[`isDialog$${index + 1}`] = false
    },
  },

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
