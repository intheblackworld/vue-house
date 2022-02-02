<template>
  <div class="section6">
    <img src="./shin-lan/index/6/bg.png" :alt="info.caseName" class="bg-img">
    <div class="shin-lan-title-h title" data-aos="fade">
      影音<span data-aos="flip-right"></span>專區
    </div>
    <div class="container">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800">
        <div class="slide-title" v-html="slideList[slideIndex].title"></div>
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" @click="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + i" :class="`swipe-item flex absolute`">
              <div>
                <img :src="slide.img" :alt="info.caseName" class="">
                <div class="slide-title" v-html="slide.title1"></div>
                <hr class="slide-hr">
                <div class="slide-desc" v-html="slide.desc1"></div>
              </div>
              <div>
                <img :src="slide.img" :alt="info.caseName" class="">
                <div class="slide-title" v-html="slide.title2"></div>
                <hr class="slide-hr">
                <div class="slide-desc" v-html="slide.desc2"></div>
              </div>
            </div>
          </transition-group>
        </div>
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
      <div class="pagination absolute flex-ac" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
    <div class="btn-more flex-c">
      更多影音
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  width: 100%;
  height: size(750 + 74);
  min-height: size(750 + 74);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;

  @include md {
    width: 100vw;
    height: sizem(763);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: size(750);
  object-fit: cover;
}

.shin-lan-title {
  color: #000; // 顏色
  font-size: size(47); // size(47)
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: 0.06em;
  text-align: left;
  span {
    display: inline-block;
    width: size(1);
    height: 1em;
    background: currentColor;
    margin: -0.1em 0.15em 0.1em 0.1em;
    transform-origin: 50% 50%;
    vertical-align: middle;
  }
}

.container {
  width: size(1240);
  margin: 0 auto size(76);
  position: relative;
}

.logo {
  @include img_l_pc(111, 248, 185);

  @include md {
    @include img_l_m(69, 60, 28);
  }
}

.title {
  @include img_c_pc(604, 60);
  text-align: center;

  @include md {
    @include img_l_m(209, 140, 28);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: left;
    color: #3e3a39;
  }
}

.desc {
  @include img_l_pc(660, 476, 185);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: 0.05em;
  text-align: justify;
  color: #3e3a39;

  @include md {
    @include img_l_m(320, 210, 28);
    font-size: sizem(13);
    line-height: 2;
  }
}

.btn-more {
  @include img_c_pc(158, 0);
  top: auto;
  bottom: size(55 + 74);
  height: size(40);
  border: solid 1px #707070;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

/* Swipe */
.swipe {
  @include div_c_pc(1240, 482, 152);
  object-fit: cover;

  @include md {
    @include div_c_m(320, 213, 420);
  }
}

.slide-title {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-top: 0.5rem;
}
.slide-hr {
  width: 10%;
  margin-left: 0;
}
.slide-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  width: 80%;
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  > div {
    width: 50%;
  }

  img {
    width: 100%;
    height: size(330);
    object-fit: cover;
  }

  .slide-name {
    right: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
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
  top: size(115);
  left: auto;
  right: size(0);
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 0px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #c9a063;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
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
        background: #c9a063;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #c9a063;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

// .swipe-btns {
// width: 100%;
// height: 100%;
// padding: 0 0;
// z-index: 3;
// overflow: hidden;
// position: absolute;
// top: 0;
// left: 0;

.prev-btn {
  top: 0;
  left: 0;
}

.next-btn {
  top: 0;
  right: 0;
}
.prev-btn,
.next-btn {
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 2em;
  font-size: size(20);
  cursor: pointer;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   transform: translateX(100%);
  //   background-color: #0004;
  //   transition: all 0.3s;
  // }
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
// }
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
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
      bottom: 0.8em;
      right: 0.8em;
      font-size: sizem(12);
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

  .prev-btn,
  .next-btn {
    width: 2em;
    font-size: sizem(15);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      width: 1em;
      height: 1em;
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
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
  name: 'section6',

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
          img: require('./s6/1情境示意圖.jpg'),
          title1: '東園綻',
          title2: '幸福好境',
          desc1:
            '民國107年由欣聯建設開發投資興建，近華江高中及西園國小，生活機能方便。',
          desc2: '50米微距離<br />萬坪公園深呼吸',
          img1: require('./shin-lan/video/東園綻.jpg'),
          img2: require('./shin-lan/video/幸福好境.jpg'),
          video1: '',
          video2: '',
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
