<template>
  <div class="section8">
    <img src="./s8/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade" data-aos-delay="0">
    <div class="desc-t" data-aos="fade-up" data-aos-delay="200">
      建築的質感，影響一個城市的景觀甚鉅<br />
      作為一個有理想的建築事業體<br />
      構築城市美麗的天際線<br />
      與滿足消費者的居住需求<br />
      我們有著義不容辭的使命感
    </div>
    <div class="content">
      <div class="desc">
        京城集團以『立足台灣、放眼世界』為目標，為南台灣最知名與最受信賴的建築品牌。以精準獵地與打造超豪宅標準聞名的蔡天贊董事長，對每⼀次新開發案投入，只有⼀個期許-「以最⾼標準，再次超越自我」。<br /><br />
        京城在農16區域打造「K計畫」，致⼒提升⾼雄的國際能見度與吸引力，現已有數十座豪宅作品、五星級酒店H2O、以及京城建設總部。 此次京城IFC的登場，不僅僅是進入商辦市場的宣示，再次自我超越的證明，更是為台灣引入國際CPBD的概念創舉！
      </div>
    </div>
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" @click="decIndex"></div>
          <div class="next-btn" @click="addIndex"></div>
        </div>
      </div>
    </div>
    <div class="content-w">
      <h1 class="title" data-aos="flip-up" data-aos-delay="200" v-html="slideList[slideIndex].title">
      </h1>
      <div class="subtitle" data-aos="flip-up" data-aos-delay="400" v-html="slideList[slideIndex].name"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(1085);
  min-height: size(1085);
  max-height: size(1085);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.logo {
  @include img_c_pc(350, 57);
}

.desc-t {
  @include img_c_pc(458, 176);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(2.47);
  text-align: center;
  color: #00609c;
}

.content {
  @include div_l_pc(1920, 618, 0, 0);
  top: auto;
  bottom: 0;
  background-color: #808080;
}

.content-w {
  @include div_l_pc(372, 154, 0, 634);
  top: auto;
  bottom: 0;
  background-color: #d9d9d9;
  z-index: 12;
}

.title {
  @include img_l_pc(360, 20, 34);
  font-size: size(26.3);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: size(1.16);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(575, 70, 40);
  font-size: size(32.9);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(1.45);
  text-align: right;
  color: #000000;
}

.desc {
  @include img_r_pc(784, 155, 152);
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
}

/* Swipe */
.swipe {
  width: size(750);
  height: size(503);
  bottom: size(58);
  left: size(160);
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
    height: size(503);
  }

  .slide-name {
    font-family: 'Noto Sans TC';
    right: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #0003;
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
  @include img_l_pc(296, 365, 522);
  // width: auto;
  // bottom: size(44);
  // right: 0;
  // left: 0;
  // margin: 0 auto;
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
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
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
}

@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
  .section8 {
    width: 100vw;
    height: sizem(784);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .logo {
    @include img_c_m(177, 26);
  }

  .desc-t {
    @include img_c_m(270, 75);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.4);
    text-align: center;
    color: #00609c;
  }

  .content {
    @include div_l_m(375, 252, 233, 0);
    background-color: #808080;
  }

  .content-w {
    @include div_l_m(375, 47, 0, 0);
    top: auto;
    bottom: 0;
    background-color: #d9d9d9;
  }

  .title {
    @include img_r_m(360, 10, 182);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.79;
    letter-spacing: sizem(0.62);
    text-align: right;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(575, 10, 207);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.9;
    letter-spacing: sizem(0.88);
    text-align: left;
    color: #000000;
  }

  .desc {
    @include img_c_m(320, 24);
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    font-size: sizem(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #ffffff;
  }
  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(252);
    min-height: auto;
    top: sizem(485);
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
      height: sizem(277);
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
    left: 0%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      background-color: rgba(0, 0, 0, 0.34);
      &::before {
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import info from '@/info'

export default {
  name: 'section8',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/slider_1.jpg'),
          name: '張文明',
          title: '國際建築大師',
        },
        {
          img: require('./s8/slider_2.jpg'),
          name: '日光設計',
          title: '大師級燈光藝術導演',
        },
        {
          img: require('./s8/slider_3.jpg'),
          name: '蕥園景觀',
          title: '豪宅御用景觀師',
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
