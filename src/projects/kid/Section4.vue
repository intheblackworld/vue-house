<template>
  <div class="section4">
    <div class="bg-img"></div>
    <img src="./s2/o.png" :alt="`${info.
    caseName}_o`" class="o">
    <img src="./s4/title.png" :alt="`${info.caseName}_title`" class="title-img">
    <!-- <img src="./s4/title_m.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isMobile"> -->
    <img src="./s4/logo.png" :alt="`${info.
    caseName}_logo`" class="logo">
    <h1 class="title">
      國語日報 千書牆
    </h1>
    <div class="desc">
      以書香與自然為主題，<br />
      結合溫暖燈光及舒適閱讀空間，<br />
      讓大小讀者都能自在閱讀。<br />
      來這裡尋找喜歡的書籍，<br />
      悠閒的享受閱讀時光吧！
    </div>
    <div class="animate-bg">
      <img src="./s4/bubb (11).png" :alt="`${info.caseName}_bubble4`" class="bubble4">
      <!-- <img src="./s1/bubb (6).png" :alt="`${info.caseName}_bubble6`" class="bubble6"> -->
    </div>
    <div class="child-jump">
      <img src="./s4/p3.png" :alt="`${info.caseName}_p1`" class="p1">
    </div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + i" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" data-aos-offset="-400" v-if="isPC">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div>
    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
      <div class="prev-btn flex-c">
        <img src="./all/prev-btn.png" alt="" @click="decIndex">
      </div>
      <div class="next-btn flex-c">
        <img src="./all/next-btn.png" alt="" @click="addIndex">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  //  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  // background-color: #f5f0ec;
}

.title-img {
  @include img_l_pc(112, 126, 362);
  top: calc(50% + 100vw * (126 - 540) / 1920);
}

.o {
  @include img_r_pc(620, -22, -10);
  top: calc(50% + 100vw * (-22 - 540) / 1920); 
  z-index: 2;
}

.title {
  @include img_l_pc(452, 97, 533);
  top: calc(50% + 100vw * (147 - 540) / 1920);
  font-size: size(37);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(552, 163, 532);
  top: calc(50% + 100vw * (227 - 540) / 1920);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: left;
  color: #606060;
}

.logo {
  @include img_r_pc(462, 80, 582);
  top: calc(50% + 100vw * (140 - 540) / 1920); 
}

.p1 {
  @include img_r_pc(217, 0, -223);
  top: calc(50% + 100vw * (-20 - 540) / 1920);
  z-index:3;
    animation: jump1 5s 0s linear  infinite;
    font-size: size(19.2); 
}

.p2 {
  @include img_r_pc(211, 516, 445);
  top: auto;
}
@keyframes jump1{
  0%{transform: translateY(0px) rotate(80deg);}
  12.5%{transform: translate(-7em,1em) rotate(62.5deg);}
  25%{transform: translate(-13em,3em) rotate(45deg);}
  37.5%{transform: translate(-20em,7vw) rotate(17.5deg);}
  50%{transform: translate(-23em,12em) rotate(0deg);}
  70%{transform: translate(-23em,25em) rotate(-0deg);}
  80%{transform: translate(-20em,31em) rotate(-25deg);}
  90%{transform: translate(-10em,37.5em) rotate(-52.5deg);}
  100%{transform: translate(3em,40em) rotate(-80deg);}
}

@keyframes jump {
  to {
    margin-top: -20px;
    // transform: translateY(-30px);
  }
}
.animate-bg {
  .bubble4 {
    @include img_l_pc(333, 821, 152);
  top: calc(50% + 100vw * (851 - 540) / 1920); 
    animation: jump 1s 0s ease-in-out alternate-reverse infinite;
    z-index: 5;
  }

  .bubble6 {
    @include img_l_pc(481, 465, 178);
  top: calc(50% + 100vw * (495 - 540) / 1920); 
    animation: jump 2s 0s ease-in-out alternate-reverse infinite;
  }
}

.child-jump {
  width: size(1920);
  height:100%;
 // overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
}

/* Swipe */
.swipe {
  width: size(754);
  height: size(500);
  top: calc(50% + 100vw * (432 - 540) / 1920);
  right: size(633);
  object-fit: cover;
  border: 3px solid #e32372;
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
  height: calc(100% + 1px);
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

  .name {
    right: 1.5em;
    bottom: 1em;
    font-size: 0.78125vw;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #fff;
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
  @include img_l_pc(754, 956, 516);
  top: calc(50% + 100vw * (950 - 540) / 1920); 
  margin: 0 auto;
  justify-content: flex-start;
}

.pagination-dot {
  padding: 5px;
  margin: 0 10px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #e32372;
    position: relative;
    background-color: rgba(255, 255, 255, 0.38);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #e32372;
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
        background: #e32372;
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
    width: size(46);
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
  .section4 {
    width: 100vw;
    height: sizem(665);
    min-height: sizem(665);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
    position: relative;
    z-index: 2;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title-img {
    @include img_l_m(58, 52, 33);
  }

  .o {
    @include img_r_m(163, 440, 0);
  }

  .title {
    @include img_l_m(173, 112, 113);
    font-size: sizem(24);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(230, 163, 113);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
  }

  .logo {
    @include img_r_m(216, 54, 45);
  }

  .p1 {
    @include img_r_m(90, 400, -80);
    font-size: sizem(5.2); 
  }

  .p2 {
    @include img_r_m(87, 697, 186);
    top: auto;
  }

  @keyframes jump {
    to {
      margin-top: -20px;
      // transform: translateY(-30px);
    }
  }
  .animate-bg {
    .bubble4 {
      @include img_l_m(134, 482, -30);
      animation: jump 1s 0s ease-in-out alternate-reverse infinite;
      z-index: 10;
    }

    .bubble6 {
      @include img_r_m(190, 195, -150);
      animation: jump 2s 0s ease-in-out alternate-reverse infinite;
    }
  }

  .child-jump {
    width: sizem(375);
    height: sizem(923);
    min-height: sizem(923);
    max-height: sizem(923);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  /* Swipe */
  .swipe {
    width: sizem(310);
    height: sizem(205);
    // min-height: sizem(750);
    top: sizem(353);
    left: 0;
    right: 0;
    margin: 0 auto;
    object-fit: cover;
    z-index: 5;
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
    z-index: 0;
    height: sizem(205);
    bottom: 0;
    left: 0;

    img {
      width: sizem(310);
      height: sizem(205);
      // height: sizem(330);
      bottom: 0;
      left: 0;
    }

    .name {
      // right: 0;
      // left: 0;
      // margin: 0 auto;
      right: 0.5em;
      bottom: 0.5em;
      font-size: sizem(14);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: sizem(0.72);
      text-align: center;
      color: #ffffff;
      white-space: nowrap;
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
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
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
          background: #bd2b27;
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
    height: sizem(52);
    padding: 0px;
    z-index: 1;
    position: absolute;
    top: sizem(435);

    .prev-btn,
    .next-btn {
      width: sizem(26);
      height: sizem(52);
      cursor: pointer;
      // background-color: #ec6300;
      img {
        width: 100%;
      }
    }

    // .prev-btn {
    //   border-top-right-radius: 25px;
    //   border-bottom-right-radius: 25px;
    // }

    // .next-btn {
    //   border-top-left-radius: 25px;
    //   border-bottom-left-radius: 25px;
    // }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import info from '@/info'

export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,

      slideList: [
        {
          img: require('./s4/1.jpg'),
          name: '情境示意圖',
        },
        {
          img: require('./s4/1.jpg'),
          name: '情境示意圖',
        },
        {
          img: require('./s4/1.jpg'),
          name: '情境示意圖',
        },
      /*  {
          img: require('./s2/資產 55@2x-80.jpg'),
        },
        {
          img: require('./s2/資產 55@2x-80.jpg'),
        },*/
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
