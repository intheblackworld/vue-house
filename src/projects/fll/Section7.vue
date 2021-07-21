<template>
  <div>
    <div class="section7">
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
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
      <div class="content" data-aos="fade" data-aos-delay="0">
        <h1 class="title" data-aos="flip-up" data-aos-delay="200" v-if="isPC">
          辦公新亮點！ 智慧潮流拼上國際
        </h1>
        <h1 class="title" data-aos="flip-up" data-aos-delay="200" v-if="isMobile">
          辦公新亮點！<br />智慧潮流拼上國際
        </h1>
        <div class="subtitle" data-aos="flip-up" data-aos-delay="400">
          科技5G×AI新境界Ｘ新觀點進駐
        </div>
        <h1 class="desc" data-aos="fade-up" data-aos-delay="600" v-html="slideList[slideIndex].area"></h1>
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
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(1005);
  min-height: size(1005);
  max-height: size(1005);
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
  @include div_l_pc(648, 287, 47, 162);
  background-color: rgba(54, 54, 54, 0.8);
}

.title {
  @include img_l_pc(360, 46, 37);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(575, 122, 43);
  font-family: 'Noto Sans TC';
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #00afd5;
}

.desc {
  @include img_l_pc(717, 204, 34);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

/* Swipe */
.swipe {
  width: size(1920);
  height: size(865);
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
    height: size(865);
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
  @include img_l_pc(296, 155, 522);
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
  .section7 {
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
      transition: opacity .5s;
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
  name: 'section7',

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
            : require('./s7/slider_1.jpg'),
          full: require('./mobile/07/slider_1_full.jpg'),
          name: '3D景觀示意圖',
          area: '大廳',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_2.jpg')
            : require('./s7/slider_2.jpg'),
          full: require('./mobile/07/slider_2_full.jpg'),
          name: '3D景觀示意圖',
          area: '健身房',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_3.jpg')
            : require('./s7/slider_3.jpg'),
          full: require('./mobile/07/slider_3_full.jpg'),
          name: '3D景觀示意圖',
          area: '空中花園',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_4.jpg')
            : require('./s7/slider_4.jpg'),
          full: require('./mobile/07/slider_4_full.jpg'),
          name: '3D景觀示意圖',
          area: '會議室',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_5.jpg')
            : require('./s7/slider_5.jpg'),
          full: require('./mobile/07/slider_5_full.jpg'),
          name: '3D景觀示意圖',
          area: '輕食區',
        },
        {
          img: isMobile
            ? require('./mobile/07/slider_6.jpg')
            : require('./s7/slider_6.jpg'),
          full: require('./mobile/07/slider_6_full.jpg'),
          name: '3D景觀示意圖',
          area: '戶外空間',
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
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
