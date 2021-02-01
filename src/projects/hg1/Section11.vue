<template>
  <div class="section11">
    <div :class="`dialog ${isDialog ? 'show' : ''}`">
      <!-- <img :src="slideList[imgIndex].img" alt="" class="dialog-img absolute"> -->
      <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
      <!-- <img src="./s7/img.png" alt="" class="dialog-ink absolute"> -->
      <!-- <div class="dialog-text absolute">{{slideList[imgIndex].name}}</div>
        <div class="dialog-title absolute">文創新鮮度 永遠逛不膩</div>
        <div class="dialog-subtitle absolute">
          台北光點為軸，品味生活比想像更簡單
        </div> -->
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
  background: url('./s1/bg.png') repeat;
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
  width: size(1920);
  height: size(900);
  position: relative;
  background-color: #b01f24;
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
}

.img-list {
  width: 100vw;
  height: size(590);
  top: 0;
  left: 0;
}

.img-item {
  width: 25%;
  height: size(590);
  img {
    width: 100%;
    height: 100%;
  }
}

.img-text {
  width: size(452.6);
  height: size(44.6);
  bottom: size(20);
  padding-right: 10px;
  border-right: solid 1px #af1f24;
  border-bottom: solid 1px #af1f24;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  font-size: size(16);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(0.62);
  text-align: right;
  color: #ffffff;
}

.title {
  width: size(530);
  top: size(702);
  left: size(354);
  font-size: size(55.7);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.74);
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
  span {
    font-size: size(55.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .number {
    font-size: size(69);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }
}

.subtitle {
  width: size(530);
  top: size(660);
  left: size(354);
  font-size: size(25.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.99);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(695);
  top: size(655);
  right: size(262);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: size(0.92);
  text-align: left;
  color: #ffffff;
  padding: 0 0 0 size(50);
  border-left: size(3) solid #fff;
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section11',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s11/1.jpg'),
          text: '《墨濤院》<br />2017年國家建築金質獎',
        },
        {
          img: require('./s11/2.jpg'),
          text: '《十三行博物館休閒教育園區》<br />2020年國家卓越建設獎金質獎',
        },
        {
          img: require('./s11/3.jpg'),
          text:
            '《實踐大學圖書館及體育館-清水混凝土結構工程》<br />2012年台北市都市景觀首獎',
        },
        {
          img: require('./s11/4.jpg'),
          text: '《法鼓山人文社會學院》<br />2015年台灣建築獎佳作獎 ',
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
      if (this.viewIndex === 5) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
