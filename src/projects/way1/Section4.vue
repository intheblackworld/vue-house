<template>
  <div class="section4">
    <img src="./s4/04_green_style.png" :alt="`${info.caseName}_grass`" class="grass">
    <h1 class="label"><span>尋味</span>宜居優境</h1>
    <h1 class="title">Taste Of City Feng Ming</h1>
    <h1 class="subtitle">鳳鳴站350米</h1>
    <div class="hr"></div>
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          <div class="order-index">{{slideIndex + 1}}/{{slideList.length}}</div>
        </div>
      </div>
    </div>
    <div class="content-block flex-c wrap">
    </div>
    <div class="block-hr"></div>
    <div class="block-title">
      卡位鳳鳴站前第一排<br />搶佔軌道增值第一站
    </div>
    <div class="block-desc">
      買房跟著交通建設走就對了，［立瑾Way］距鳳鳴正式站約350公尺，臨時站約650公尺，現在進駐正是時候。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100vw;
  height: size(1410);
  max-height: size(1410);
  min-height: size(1410);
  position: relative;
  background-color: #fff;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.grass {
  @include img_l_pc(838, 886, 439);

  animation: grass 2s 0s ease-in-out alternate-reverse infinite;
}

@keyframes grass {
  to {
    transform: skew(5deg);
  }
}

.label {
  @include img_l_pc(400, 0 + 153, 104);
  font-size: size(46);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.76);
  text-align: left;
  color: #5e5d5e;
  white-space: nowrap;
  span {
    font-weight: normal;
  }
}

.title {
  @include img_l_pc(731, 64 + 153, 105);
  font-size: size(71.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(-5.01);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}
.subtitle {
  @include img_l_pc(731, 68 + 127 + 153, 468);
  font-size: size(75.2);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: size(4.51);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}

.hr {
  @include img_l_pc(102, 180 + 68 + 153, 338);
  border-bottom: solid size(5) #009fb1;
}

.content-block {
  @include div_r_pc(1062, 940, 565, 9);
  background-image: url('./s4/04_font_box.png');
  background-size: cover;
}

.block-hr {
  @include img_r_pc(53, 888, 657);
  border-bottom: solid size(4) #009fb1;
}

.block-title {
  @include img_r_pc(384, 856, 244);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.block-desc {
  @include img_r_pc(498, 996, 215);
  font-size: size(26);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: left;
  color: #2f2c2c;
}

/* Swipe */
.swipe {
  width: size(998);
  height: size(646);
  top: size(517);
  left: size(104);
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

  .slide-name {
    left: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
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
  bottom: size(188);
  left: calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
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
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: #000;
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
      }
    }
  }
}

.swipe-btns {
  width: 20%;
  height: size(50);
  padding: 0;
  z-index: 3;
  left: 0;
  bottom: size(-60);
  
  .prev-btn,
  .next-btn {
    width: size(50);
    margin-right: 10px;
    cursor: pointer;
  }

  .order-index {
    font-size: size(26);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: size(3.67);
    text-align: left;
    color: #070304;
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
    min-height: auto;
    max-height: initial;
    height: sizem(438);
  }

  .title {
    @include img_c_m(206, 40);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: sizem(0.96);
    text-align: center;
    color: #008796;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(360, 148);
    font-size: sizem(21);
  }

  .btn {
    @include div_l_m(266, 98, 25, 55);
    background: linear-gradient(to right, #008796 5px, transparent 5px) 0 0,
      linear-gradient(to right, #008796 5px, transparent 5px) 0 100%,
      linear-gradient(to left, #008796 5px, transparent 5px) 100% 0,
      linear-gradient(to left, #008796 5px, transparent 5px) 100% 100%,
      linear-gradient(to bottom, #008796 5px, transparent 5px) 0 0,
      linear-gradient(to bottom, #008796 5px, transparent 5px) 100% 0,
      linear-gradient(to top, #008796 5px, transparent 5px) 0 100%,
      linear-gradient(to top, #008796 5px, transparent 5px) 100% 100%;

    background-repeat: no-repeat;
    background-size: sizem(14) sizem(21);
  }

  /* Swipe */
  .swipe {
    width: sizem(249);
    height: sizem(174);
    min-height: auto;
    top: sizem(232);
    left: sizem(66);
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
    .slide-name {
      right: 1em;
      font-size: sizem(13);
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
  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/04_slider_01.jpg'),
          name: '台鐵鳳鳴站示意圖（截取自新北市政府施政成果網）',
        },
        {
          img: require('./s4/04_slider_02.jpg'),
          name: '台鐵鳳鳴站示意圖（截取自新北市政府施政成果網）',
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
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>