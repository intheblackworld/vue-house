<template>
  <div class="section5">
    <div class="bg-img"></div>
    <img src="./s2/o.png" :alt="`${info.
    caseName}_o`" class="o">
    <img src="./s5/title.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isPC">
    <img src="./s5/title_m.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isMobile">
    <img src="./s5/logo.png" :alt="`${info.
    caseName}_logo`" class="logo">
    <h1 class="title">
      傑恩咖啡 冠軍享受
    </h1>
    <div class="desc">
      想喝一杯好咖啡不必遠求，<br />
      來自台中的世界咖啡結合複合Life Style概念，<br />
      打造理想空間，<br />
      拿本書，<br />
      配一杯冠軍咖啡，優雅享受美好下午。
    </div>
    <div class="animate-bg">
      <img src="./s1/bubb (4).png" :alt="`${info.caseName}_bubble4`" class="bubble4">
      <img src="./s1/bubb (6).png" :alt="`${info.caseName}_bubble6`" class="bubble6">
    </div>
    <!-- <div class="child-jump">
      <img src="./s4/p3.png" :alt="`${info.caseName}_p1`" class="p1" data-aos="child-jump" data-aos-delay="1200" data-aos-duration="3000">
    </div> -->
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
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-offset="-400" data-aos-delay="200" v-if="isPC">
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

.section5 {
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
  background-color: #f5f0ec;

  &:nth-child(1) {
    position: relative;
  }
}

.title-img {
  @include img_l_pc(112, 126, 362);
  top: calc(50% + 100vw * (126 - 540) / 1920); z-index: 6;
}

.o {
  @include img_r_pc(590, 12, -50);
  z-index: 10;
  top: auto;
  bottom:size(-70);
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
  @include img_r_pc(350, 75, 480);
  top: calc(50% + 100vw * (140 - 540) / 1920);
}

.p1 {
  @include img_r_pc(217, 235, 223);
  top: auto;
}

.p2 {
  @include img_r_pc(211, 516, 445);
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
    @include img_l_pc(333, 821, -150);
    animation: jump 1s 0s ease-in-out alternate-reverse infinite;
    z-index: 1;
  }

  .bubble6 {
    @include img_l_pc(481, 765, -340);
    animation: jump 2s 0s ease-in-out alternate-reverse infinite;
    z-index: 2;
  }
}

.child-jump {
  width: size(1920);
  height:100%;
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
  .section5 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: sizem(627);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .title-img {
    @include img_l_m(197, 46, 33);
  }

  .o {
    @include img_r_m(163, 400, 0);
    top:auto;
    bottom: sizem(604 - 400 - 270);
    z-index: 4;
  }

  .title {
    @include img_l_m(197, 177, 33);
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
    @include img_l_m(310, 233, 32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .logo {
    @include img_l_m(145, 112, 32);
  }

  .p1 {
    @include img_r_m(90, 578, 93);
    top: auto;
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
      @include img_l_m(74, 586, -22);
      animation: jump 1s 0s ease-in-out alternate-reverse infinite;
      z-index: 5;
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
    top: sizem(384);
    left: 0;
    right: 0;
    margin: 0 auto;
    object-fit: cover;
    z-index: 10;
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
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,

      slideList: [
        {
          img: require('./s5/1.jpg'),
          name: '情境示意圖',
        },
        {
          img: require('./s5/2.jpg'),
          name: '情境示意圖',
        },
        {
          img: require('./s5/3.jpg'),
          name: '情境示意圖',
        },
        // {
        //   img: require('./s5/4.jpg'),
        // },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
