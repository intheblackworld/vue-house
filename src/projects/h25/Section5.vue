<template>
  <div class="section5 flex-ac">
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
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="content"></div>
    <div class="border1"></div>
    <div class="border2"></div>
    <div class="desc" v-html="slideList[slideIndex].desc"></div>
    <div class="hr"></div>
    <div class="title" v-html="slideList[slideIndex].title"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  background-image: url('~@/projects/hg1/s3/technology_bg.png');
  background-size: cover;
  background-position: 100%;
  // min-height: size(1080);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.content {
  @include div_l_pc(443, 234, 0, 168);
  top: 0;
  min-height: size(1080);
  height: 100vh;
  background-color: rgba(16, 11, 9, 0.8);
  z-index: 1;
}

.border1 {
  @include img_c_pc(1839, 65);
  height: size(930);
  border: 2px solid #866231;
}

.border2 {
  @include img_c_pc(1853, 65);
  height: size(930);
  border: 2px solid #866231;
}

.title {
  @include img_l_pc(373, 0, 223);
  top: auto;
  bottom: size(65);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 1;
}

.desc {
  @include img_l_pc(559, 0, 226);
  top: auto;
  bottom: size(216);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: size(3.36);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 1;
}

.hr {
  @include img_l_pc(340, 0, 226);
  top: auto;
  bottom: size(197);
  border-top: 2px solid #c3985b;
  z-index: 1;
}

/* Swipe */
.swipe {
  @include img_l_pc(1920, 0, 0);
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
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
    right: 20px;
    bottom: 0px;
    color: #fff;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    font-size: 22px;
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
  top: size(50);
  left: size(195);
  z-index: 2;
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
      background: #c3985b;
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
        background: #c3985b;
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
  .section5 {
    width: 100vw;
    height: sizem(250 + 248);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .content {
    @include div_l_m(375, 248, 250, 0);
    min-height: auto;
    background-color: #000;
    z-index: 1;
  }

  .border1 {
    display: none;
  }

  .border2 {
    display: none;
  }

  .desc {
    @include img_l_m(219, 285, 35);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.87;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 1;
  }

  .title {
    @include img_l_m(233, 250 + 134, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 1;
  }

  .hr {
    @include img_l_m(306, 250 + 126, 35.6);
    border-top: 2px solid #c3985b;
    z-index: 1;
  }
  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(250);
    max-height: sizem(250);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
    z-index: 50 !important;
    opacity: 1 !important;
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
    overflow: visible;
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
      font-size: sizem(16);
    }
  }

  .pagination {
    width: auto;
    height: sizem(40);
    top: auto;
    bottom: sizem(-40) !important;
    left: 0;
    right: auto;
    margin: auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: #fff;
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #d66655;
        border-radius: 12px;
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
          background: #d66655;
          border-radius: 12px;
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
    z-index: 30;

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

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/1.jpg'),
          desc:
            '漫步齊東公園、幸安市場，<br />穿梭SOGO商圈、格調餐酒館<br />動、靜、日、夜，',
          title: '從未結束過的故事，<br />豈止精采24小時？',
        },
        {
          img: require('./s4/2.jpg'),
          desc:
            '漫步齊東公園、幸安市場，<br />穿梭SOGO商圈、格調餐酒館<br />動、靜、日、夜，',
          title: '從未結束過的故事，<br />豈止精采24小時？',
        },
        {
          img: require('./s4/3.jpg'),
          desc:
            '漫步齊東公園、幸安市場，<br />穿梭SOGO商圈、格調餐酒館<br />動、靜、日、夜，',
          title: '從未結束過的故事，<br />豈止精采24小時？',
        },
        {
          img: require('./s4/4.jpg'),
          desc:
            '漫步齊東公園、幸安市場，<br />穿梭SOGO商圈、格調餐酒館<br />動、靜、日、夜，',
          title: '從未結束過的故事，<br />豈止精采24小時？',
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
