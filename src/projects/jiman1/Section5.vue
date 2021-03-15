<template>
  <div class="section5">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="swipe-btns absolute flex-ac flex-jb">
      <img src="./all/slider_left.png" alt="" class="prev-btn" @click="decIndex">
      <img src="./all/slider_right.png" alt="" class="next-btn" @click="addIndex">
    </div>
    <img src="./s5/05_flower.png" :alt="`${info.caseName}_f`" class="f6">
    <img src="./s4/04_title.png" :alt="`${info.caseName}_f`" class="title-img">
    <div class="content">
      <div class="content-desc">
        涵養放眼國際的識見，培植台灣第一的胸襟，昂首漫步台灣最高學府蔥蔥椰林，猶記得青青學子時的嚮往，也是所有老台北人，乃至整個時代，對完美人生起點的想望。慢渡荏苒時光，如今的你，恣意徜徉台大椰林師大樹海，沐浴獨一無二人文學養，曾深藏心中的夙願已不再只是想像。信手翻閱台大風華，引以自慢的無價收藏。
      </div>
      <div class="content-title">
        名校雲集 養浩瀚眼界
      </div>
      <div class="content-desc">
        台灣大學、師大公館校區、台灣科技大學、中國科技大學、世新大學、靜心高中、<br />
        景美女中、景美國中、民族國中
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(1085);
  min-height: size(1085);
  max-height: size(1085);
  position: relative;
  background-color: #c07f76;
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
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.f6 {
  @include img_r_pc(815, 669, -380);
  transform-origin: 100% 80%;
  transform: skewY(2deg);
  animation: flow1 3s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.title-img {
  @include img_r_pc(127, 76, 146);
}

.content {
  @include div_r_pc(473, 907, 85, 361);
}

.content-desc {
  font-size: size(23);
  line-height: size(48);
  letter-spacing: size(0.53);
  text-align: left;
  font-weight: 400;
  color: #000;
  margin-bottom: size(55);
}

.content-title {
  font-size: size(30);
  line-height: size(48);
  letter-spacing: size(0.7);
  text-align: left;
  font-weight: 500;
  color: #000;
  margin-bottom: size(10);
}

/* Swipe */
.swipe {
  width: size(1013);
  height: size(851);
  top: size(85);
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
    height: 100%;
    object-fit: cover;
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
  width: 50%;
  bottom: size(20);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: size(17);
    height: size(17);
    border-radius: size(17);
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
        width: 110%;
        height: 110%;
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
  @include img_r_pc(185, 858, 660);
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(80);
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
    height: sizem(790);
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

  .title {
    width: 100%;
    line-height: 1.6;
    font-size: sizem(25);
    span {
      display: inline-block;
    }
  }

  .hr {
    height: sizem(2);
    position: relative;
    right: size(0);
    margin: sizem(12) 0;
  }

  .s-title {
    top: sizem(2);
    left: sizem(0);
    width: sizem(279);
  }

  .subtitle {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(2.09);
    text-align: left;
    color: #323333;
    white-space: nowrap;
  }

  .desc {
    font-size: sizem(15);
    line-height: 1.6;
    letter-spacing: sizem(2.09);
    white-space: nowrap;
    display: block;
    span {
      writing-mode: initial;
      display: block;
      width: auto;
      margin: 0 0 0em;
      &.p {
        margin: 0 0 0.8em;
      }
      &.p2 {
        margin: 0 0 0.8em -0.5em;
      }
    }
  }

  .img {
    width: sizem(142);
    top: sizem(30);
    left: sizem(0);
    position: relative;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(300);
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
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: sizem(300);
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
    bottom: sizem(13);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: sizem(8);
      height: sizem(8);
      border-radius: sizem(8);
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
          width: 110%;
          height: 110%;
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
  name: 'section5',

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
          img: require('./s5/05_slider_1.jpg'),
        },
        {
          img: require('./s5/05_slider_2.jpg'),
        },
        {
          img: require('./s5/05_slider_3.jpg'),
        },
        {
          img: require('./s5/05_slider_4.jpg'),
        },
        {
          img: require('./s5/05_slider_5.jpg'),
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
      if (this.viewIndex === 4) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
