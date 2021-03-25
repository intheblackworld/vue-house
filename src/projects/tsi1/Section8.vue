<template>
  <div class="section8">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img  + i" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div>
      <img src="./s8/08_tag_box.png" :alt="`${info.caseName}_img`" class="img">
      <h3 class="label-name" v-html="slideList[slideIndex].label"></h3>
      <div class="hr"></div>
      <h3 class="title1" v-if="isMobile">樣品屋主標<span>樣品屋小標題文字</span></h3>
      <img src="./s8/08_title_1.png" v-if="!isMobile" :alt="`${info.caseName}_img`" class="title1">
      <img src="./s8/08_title_2.png" v-if="!isMobile" :alt="`${info.caseName}_img`" class="title2">
      <div class="desc">
        樣品屋這一ＰＡＲＴ的內文樣品屋<br v-if="!isMobile" />
        樣品屋這一ＰＡＲＴ的內文樣品屋這<br v-if="!isMobile" />
        樣品屋這樣品屋這一ＰＡＲＴ的內文
      </div>
      <h3 class="slide-desc" v-if="isMobile" v-html="slideList[slideIndex].desc"></h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(896);
  min-height: size(896);
  max-height: size(896);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.img {
  @include img_r_pc(60, 100, 733);
}

.label-name {
  @include img_r_pc(60, 140, 733);
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: 1em;
  text-align: left;
  color: #ffffff;
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.hr {
  @include div_r_pc(1, 455, 100, 513);
  background-color: #000;
}

.title1 {
  @include img_r_pc(128, 100, 345);
}

.title2 {
  @include img_r_pc(21, 100, 561);
}

.desc {
  @include img_r_pc(301, 620, 290);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.btns {
  @include img_l_pc(176 * 2 + 24, 701, 325);
}

.btn {
  box-shadow: inset 0 0 0 1px #000000;
  width: size(176);
  height: size(30);
  cursor: pointer;
  color: #000;

  &.active {
    background-image: url('./all/acitve_btn.png');
    background-size: cover;
    box-shadow: none;
    color: #fff;
  }
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
  width: size(860);
  height: size(550);
  top: size(127);
  left: size(369);
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
  // overflow: hidden;
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
    right: 1.2em;
    bottom: 0.5em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.1em 0.5em #000;
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
  bottom: size(-34);
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
  .section8 {
    width: 100vw;
    height: sizem(573);
    min-height: auto;
    max-height: initial;
    background-image: url('./all/section_bg.jpg');
    background-attachment: scroll;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title1 {
    @include img_l_m(325, 34, 25);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    white-space: nowrap;
    color: #fff;
    span {
      display: block;
      font-size: 0.666em;
    }
  }

  .hr {
    @include img_l_m(142, 124, 25);
    height: sizem(1);
    background: #333;
  }

  .title2 {
    @include img_l_m(325, 17, 25);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.05;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
    white-space: nowrap;
    color: #fff;
  }

  .desc {
    @include img_l_m(292, 141, 25);
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
  }

  .slide-desc {
    @include img_l_m(196, 243, 27);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: sizem(1.8);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }
  .btns {
    @include img_c_m(325, 305);
  }
  .img {
    @include img_r_m(41, 264, 25);
  }

  .label-name {
    @include img_r_m(41, 264, 25);
    font-size: 4vw;
    height: sizem(144);
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    width: sizem(152);
    height: sizem(27);

    &.active {
      background-image: url('./all/acitve_btn.png');
      background-size: cover;
      box-shadow: none;
      color: #fff;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(259);
    min-height: auto;
    top: auto;
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
    // overflow: hidden;
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
  name: 'section8',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      blockIndex: 0,
      slideIndex1: 0,
      slideList: [
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
        },
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
        },
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
        },
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
        },
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
        },
        {
          img: require('./s8/08_slider_1.jpg'),
          name: '情境示意圖',
          label: '客廳',
          desc: '樣品屋說明文ＯＯＸＸＯ'
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
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
