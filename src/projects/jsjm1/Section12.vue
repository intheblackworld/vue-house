<template>
  <div>
    <div class="section12">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="mask" v-if="isMobile"></div>
          <div class="btn flex-c" v-if="isMobile" @click="isDialog = true" v-html="slideList[slideIndex].btn"></div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <!--  <div v-if="!isMobile">
        <img src="./s8/img.png" alt="" class="img absolute">
        <img src="./s8/t.png" alt="" class="t absolute">
      </div>  -->
      <div class="txt absolute">
        <div class="t1" v-html="slideList[slideIndex].t1"></div>
        <div class="t2" v-html="slideList[slideIndex].t2"></div>
        <!-- <div class="hr"></div> -->
        <div class="t3" v-html="slideList[slideIndex].t3"></div>
        <!-- <div class="hr"></div> -->
        <div class="t4" v-html="slideList[slideIndex].t4"></div>
        <!-- <div class="subtitle">
          活在城市的焦距裡，優雅加分很正常
        </div>
        <div class="title">
          南西時尚力<span></span>貼身輕風格
        </div> -->
        <!-- <div class="hr"></div> -->
        <!-- <div class="desc">
          <span>徜徉生活時序、社交、採買，</span>
          <span class="p">環遊於城市的光環。</span>
          <span>青春白領購物指標-南西三越，信手捻來！</span>
          <span>欣欣秀泰影城、南京東路日式条通，</span>
          <span>一如住家後院，無拘穿著夾腳拖，</span>
          <span class="p">無壓邁入夜生活！</span>
          <span>瀟灑與內斂，就是如此恰如其分，</span>
          <span>毫不違和，寫出愜意自由。</span>
        </div> -->
        <img src="./s1/img.png" alt="" class="img">
      </div>
      <div class="dialog" v-show="isDialog">
        <img class="close" @click="isDialog = false" src="./all/close.png" alt="close">
        <img :src="slideList[slideIndex].img" alt="" class="dialog-img">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section12 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
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
.txt {
  width: size(356);
  top: calc(50% - 18.2vw);
  left: size(190);
  display: flex;
  flex-direction: row-reverse;
  padding: 0 0 0 0;
}
// .title {
//   width: 1.2em;
//   font-size: size(44);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: 0.06em;
//   text-align: left;
//   color: #af1f24;
//   position: relative;
//   right: 0;
//   top: -0.2em;
//   span {
//     display: block;
//     width: 0.5em;
//     height: 0.5em;
//   }
//   //white-space: nowrap;
// }
// .subtitle {
//   width: 1.2em;
//   font-size: size(25);
//   font-weight: bold;
//   letter-spacing: 0.07em;
//   text-align: left;
//   position: relative;
//   right: size(-6);
//   color: #323333;
//   word-break: break-all;
//   flex-direction: row-reverse;
//   word-wrap: break-word;
// }
// .desc {
//   font-size: size(21);
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: 0.1em;
//   text-align: left;
//   color: #323333;
//   position: relative;
//   margin: size(48) size(21) 0 size(-10);
//   display: flex;
//   align-items: flex-start;
//   word-break: break-all;
//   flex-direction: row-reverse;
//   word-wrap: break-word;
//   //white-space: nowrap;
//   span {
//     writing-mode: vertical-rl;
//     width: 1.4em;
//     margin: 0 0 0 0em;
//     &.p {
//       margin: 0 0 0 0.8em;
//     }
//   }
// }
// .t {
//   width: size(332);
//   top: size(105);
//   left: size(214);
// }

.t1 {
  width: size(30);
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: size(1.48);
  text-align: left;
  color: #323333;
  margin-left: size(10);
  word-break: break-all;
  flex-direction: row-reverse;
  word-wrap: break-word;
}

.t2 {
  width: size(69);
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: size(2.6);
  text-align: center;
  color: #af1f24;
  word-break: break-all;
  flex-direction: row-reverse;
  word-wrap: break-word;
}

.t3 {
  width: size(80);
  font-size: size(44);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: size(4.4);
  text-align: center;
  color: #323333;
  margin: 0 size(15);
  padding: 0 size(15);
  border-left: size(3) solid #af1f24;
  border-right: size(3) solid #af1f24;
  word-break: break-all;
  flex-direction: row-reverse;
  word-wrap: break-word;
}

.t4 {
  width: size(30);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: size(2.1);
  text-align: center;
  color: #323333;
  word-break: break-all;
  flex-direction: row-reverse;
  word-wrap: break-word;
}

// .hr {
//   width: size(3);
//   height: size(410);
//   background-color: #af1f24;
// }

.img {
  width: size(263);
  top: size(534 - 105);
  left: size(34 - 172);
  position: absolute;
}

/* Swipe */
.swipe {
  width: size(1310);
  height: size(900);
  top: calc(50% - 25.3vw);
  right: 0;
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
  bottom: size(-20);
  left: size(305);
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
  .section12 {
    width: 100vw;
    height: sizem(697);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .txt {
    width: sizem(310);
    top: sizem(320);
    left: sizem(32.5);
    display: block;
  }

  .t1 {
    width: 100%;
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.44);
    text-align: left;
    color: #323333;
    margin-left: size(0);
    white-space: nowrap;
    // word-break: break-all;
    // flex-direction: row-reverse;
    // word-wrap: break-word;
  }

  .t2 {
    width: 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: sizem(1.48);
    text-align: left;
    color: #af1f24;
    white-space: nowrap;
  }

  .t3 {
    width: 100%;
    font-size: sizem(17);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.9;
    letter-spacing: sizem(1.51);
    text-align: left;
    color: #323333;
    margin: sizem(15) 0;
    padding: sizem(15) 0;
    border: none;
    border-top: sizem(2) solid #af1f24;
    border-bottom: sizem(2) solid #af1f24;
    white-space: nowrap;
    // word-break: break-all;
    // flex-direction: row-reverse;
    // word-wrap: break-word;
  }

  .t4 {
    width: 100%;
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(1.39);
    text-align: left;
    color: #323333;
    white-space: nowrap;
    // word-break: break-all;
    // flex-direction: row-reverse;
    // word-wrap: break-word;
  }

  // .hr {
  //   width: size(3);
  //   height: size(410);
  //   background-color: #af1f24;
  // }

  .img {
    width: sizem(125);
    top: auto;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: sizem(-205);
    position: absolute;
  }

  .mask {
    position: absolute;
    width: 100vw;
    height: sizem(288);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
    background-color: #b01f24;
    opacity: 0.46;
  }

  .btn {
    position: absolute;
    z-index: 10;
    width: sizem(150);
    height: sizem(81);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #af1f24;
    font-size: sizem(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: sizem(2.31);
    text-align: center;
    color: #ffffff;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(288);
    min-height: auto;
    top: sizem(0);
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
    // overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: sizem(288);
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

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .slide-content {
      left: 0;
    }

    .dialog-img {
      width: auto;
      height: 100vh;
      background-color: #fff;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section12',

  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s12/1.png'),
          t1: '格局更更靈靈活，尺度更更擴張',
          t2: '精質23坪 夢幻⼤大2房',
          t3: '唯美⾼高坪效！ 豪華大主臥',
          t4: '動線超流暢！ 忍不不住想跳起華爾滋！',
          btn: '5F/B戶<br />點圖放大',
          // name: '中山站商圈',
        },
        {
          img: require('./s12/2.png'),
          t1: '顛覆⽅方正主流，導⼊入世界潮流',
          t2: '珍稀28坪 重隱私特仕款',
          t3: '二房雙衛浴 邊間雙陽台',
          t4: '設計師特愛！ ⾵風靡歐美L型⾵風格居所！',
          btn: '5F/C戶<br />點圖放大',
          // name: '欣欣秀泰影城',
        },
        {
          img: require('./s12/3.png'),
          t1: '坪數數不不是重點，坪效才是關鍵',
          t2: '完勝26坪 ⾃自由⼤大3房',
          t3: '空間⼤大尺度！ ⼩小宅⼤大尊嚴',
          t4: '新⼿手爸媽⼼心動！ 家族成⻑⾧長⼤大有容！',
          btn: '5F/D戶<br />點圖放大',
          // name: '南京東路、新生北商圈',
        },
        {
          img: require('./s12/4.png'),
          t1: '自住投資看俏，⾸首購真心推薦',
          t2: '邊間24坪 雍容⼤大2房',
          t3: '大容量量⽞玄關 全能收納宅',
          t4: '包租置產行情優！ 單身已婚都實住！',
          btn: '5F/E戶<br />點圖放大',
          // name: '南京商圈、商業大樓',
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
    //   if (this.viewIndex === 6) {
    //     this.slideIndex = 0
    //   }
    // },
  },
}
</script>
