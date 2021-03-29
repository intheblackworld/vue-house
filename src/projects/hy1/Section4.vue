<template>
  <div class="section4">
    <div class="border-frame"></div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img  + i" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
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
    <img src="./s3/icon.png" :alt="`${info.caseName}_img`" class="icon">
    <h1 class="label">
      Traffic
    </h1>
    <h1 class="title">
      交通匯聚 四方通行
    </h1>
    <!-- <h3 class="subtitle">
      以純住唯一 伴綠意而居
    </h3> -->
    <h3 class="desc">
      國道1、2、3號，約20分鐘直達桃園機場，桃園雙鐵車站，捷運綠\棕線即將開通。
    </h3>
    <img src="./s4/img2.png" :alt="`${info.caseName}_img`" class="arrow2" data-aos="fade-right" data-aos-delay="800">
    <img src="./s4/img1.png" :alt="`${info.caseName}_img`" class="arrow1" data-aos="fade-right" data-aos-delay="600">

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.icon {
  @include img_l_pc(68, 328, 157);
}

.label {
  @include img_l_pc(227, 371, 225);
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: size(2.8);
  text-align: left;
  color: #666666;
  white-space: nowrap;
}

.title {
  @include img_l_pc(286, 424, 149);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: size(2.75);
  text-align: left;
  color: #6e0000;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(331, 510, 153);
  font-size: size(30.8);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: size(1.54);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(456, 523, 152);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(0.95);
  text-align: left;
  color: #000000;
}

.arrow1 {
  @include img_l_pc(190, 0, 0);
  top: auto;
  bottom: size(45);
}

.arrow2 {
  @include img_l_pc(135, 0, 0);
  top: auto;
  bottom: size(0);
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

.border-frame {
  @include div_r_pc(1200, 830, 142, 30);
  border: solid 1px #aa915e;

  &::after {
    content: '';
    @include div_r_pc(78, 78, 893 - 142, 1153 - 32);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(78) 0 0 size(78);
    border-color: transparent transparent transparent #aa915e;
    z-index: 2;
  }
}

/* Swipe */
.swipe {
  width: size(1200);
  height: size(830);
  top: size(112);
  right: size(0);
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
  .section4 {
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
  name: 'section4',

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
          img: require('./s3/1.jpg'),
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
