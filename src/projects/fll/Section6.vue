<template>
  <div class="section6">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./s6/arrow_l.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./s6/arrow_r.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="content" data-aos="fade" data-aos-delay="0">
      <h1 class="desc" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].area"></h1>
    </div>
    <img src="./mobile/07/touch.png" :alt="`${info.caseName}_img`" class="touch" v-if="isMobile" @click="showDialog">
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog" @scroll="handleScroll">
        <div class="dialog-bg">
          <div class="dialog-close flex-c" @click="isDialog = false">
            <img src="../../assets/img/close.png" alt="">
          </div>
          <img :src="dialogImg" alt="" class="dialog-img">
          <img src="./mobile/07/swipe-here.png" alt="" :class="`dialog-hand ${showMask ? 'active' : ''}`">
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.content {
  @include div_l_pc(572, 76, 139, 0);
  background: linear-gradient(to right, #dfdd00 50%, transparent);
}

.desc {
  @include img_l_pc(572, 12, 0);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: center;
  color: #cf0065;
}

/* Swipe */
.swipe {
  width: size(1920);
  height: size(1080);
  bottom: 0;
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
    height: size(1080);
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
  // @include img_l_pc(296, 155, 522);
  position: absolute;
  width: auto;
  bottom: size(44);
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
      background: #cf0065;
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
      box-shadow: 0 0 0 1px #cf0065;
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
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(130);
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
  .section6 {
    width: 100vw;
    height: sizem(601);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .content {
    @include div_l_m(345, 192, 34, 0);
    background-color: rgba(54, 54, 54, 0.8);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    @include img_l_m(225, 14, 30);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(250, 91, 30);
    font-family: 'Noto Sans TC';
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: #33cfff;
  }

  .desc {
    @include img_l_m(320, 124, 30);
    font-family: 'Noto Serif TC';
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .touch {
    @include img_c_m(102, 367);
    cursor: pointer;
    z-index: 12;
    opacity: 0.5;
    animation: showHide 1s ease-in-out 0s infinite alternate-reverse;
  }

  @keyframes showHide {
    to {
      opacity: 1;
    }
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(375);
    min-height: auto;
    top: sizem(226);
    bottom: auto;
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
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
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

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.34);
    z-index: 1000;
    overflow-y: scroll;

    .dialog-bg {
      width: 100%;
      height: 100%;
      // padding-top: $nav_pc_height;
      background-attachment: fixed;
      background-size: auto;
      background-position: center center;
      background-repeat: repeat;
    }

    .dialog-img {
      position: absolute;
      width: auto;
      height: 100vh;
      top: 0;
      left: 0;
    }

    .dialog-close {
      @include div_r_m(31, 32, 10, 10);
      // border: 1px solid #fff;
      position: fixed;
      cursor: pointer;
      background-color: rgba(54, 54, 54, 0.8);
      z-index: 2;

      img {
        width: 90%;
      }
    }

    .dialog-hand {
      @include img_l_m(80, 334, 148);
      opacity: 0;
      transition: opacity 0.5s;
      &.active {
        opacity: 1;
      }
      animation: swing 1.5s ease-in-out 0s infinite alternate-reverse;
    }

    @keyframes swing {
      to {
        transform: translateX(-25%);
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
  name: 'section6',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
      slideList: [
        {
          img: isMobile
            ? require('./mobile/07/slider_1.jpg')
            : require('./s6/slider_1.jpg'),
          full: require('./mobile/07/slider_1_full.jpg'),
          name: '3D景觀示意圖',
          area: '雅砌悦賓大廳',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_2.jpg')
            : require('./s6/slider_2.jpg'),
          full: require('./mobile/07/slider_2_full.jpg'),
          name: '3D景觀示意圖',
          area: '雅砌悦賓大廳',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_3.jpg')
            : require('./s6/slider_3.jpg'),
          full: require('./mobile/07/slider_3_full.jpg'),
          name: '3D景觀示意圖',
          area: '雅砌悦賓大廳',
        },
      ],
    }
  },

  methods: {
    showDialog() {
      this.isDialog = true
      this.showMask = true
      this.dialogImg = this.slideList[this.slideIndex].full
    },

    handleScroll() {
      this.showMask = false
    },
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
