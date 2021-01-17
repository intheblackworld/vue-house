<template>
  <div class="section8">
    <img src="./s8/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img">
    <div class="title">
      公設王牌
    </div>
    <h1 class="subtitle">
      頂尖世代層峰會所
    </h1>
    <div class="desc flex-c">
      罕見天際私人會所，近760坪花園會館<br />
      25項頂級休閒公設．3層名流社交場域<br />
      雲頂層峰視野．凌空百米俯覽城市<br />
      飯店式管理．盡享大牌隱私尊榮
    </div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
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

.section8 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_l_pc(180, 334, 118);
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.36;
  letter-spacing: normal;
  text-align: left;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(384, 417, 118);
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #685335;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(501, 487, 118);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.15;
  letter-spacing: normal;
  text-align: left;
  color: #284e62;
  white-space: nowrap;
}

/* Swipe */
.swipe {
  width: size(1110);
  height: size(625);
  top: size(221);
  right: size(118);
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
  width: auto;
  right: 0;
  left: 0;
  bottom: 12px;
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
    background-color: rgba(255, 255, 255, 0.38);
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
  .section8 {
    width: 100vw;
    height: sizem(1050);
    min-height: sizem(1050);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }
  .btns {
    @include img_l_m(204, 115, 85);
    .btn {
      width: sizem(204);
      height: sizem(52);
      background-color: #ffffff;
      border-radius: 35px / 35px;
      margin: 0;
      margin-bottom: 0;
      font-size: sizem(24);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: sizem(0.94);
      text-align: left;
      color: #000;
      cursor: pointer;
      display: none;
      &.active {
        display: flex;
        color: #fff;
        background-color: #6e3a1d;
      }
    }
  }

  .label {
    @include div_r_m(145, 64, 30, 30);
    border: solid 1.2px #6e3a1d;
    font-size: sizem(34);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #6e3a1d;
    border-radius: 40px / 40px;
  }
  .title1 {
    @include img_r_m(138, 635, 129);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(138, 672, 129);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  hr {
    @include img_r_m(280, 710, 43);
    border: solid sizem(1) #f6ab00;
  }

  .desc {
    @include img_r_m(250, 730, 71);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: sizem(0.61);
    text-align: j;
    color: #231815;
  }

  .txt {
    @include img_r_m(87, 512, 20);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.61);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(300, 538, 39);
    font-size: sizem(18);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-0.8);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .logobg {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(352, 380, 591, 4);
    // background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .b1 {
    @include img_l_m(130, -20, -20);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_l_m(300, 570, -52);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(300, 700, 350);
    animation: an 2.5s infinite alternate;
  }

  .b4 {
    @include img_r_m(62, 880, 80);
    animation: an 4.5s infinite alternate;
  }

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(548, 1250, -280);
    animation: an 2.5s infinite alternate;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(330);
    // min-height: sizem(750);
    top: sizem(188);
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
    z-index: 0;
    height: sizem(330);
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: sizem(330);
      bottom: 0;
      left: 0;
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
    top: sizem(115);

    .prev-btn,
    .next-btn {
      width: sizem(46);
      height: sizem(87);
      cursor: pointer;
      background-color: #ec6300;
      img {
        width: 10px;
      }
    }

    .prev-btn {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .next-btn {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
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

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/1.jpg'),
        },
        {
          img: require('./s8/2.jpg'),
        },
        {
          img: require('./s8/3.jpg'),
        },
        {
          img: require('./s8/4.jpg'),
        },
        {
          img: require('./s8/5.jpg'),
        },
        {
          img: require('./s8/6.jpg'),
        },
        {
          img: require('./s8/7.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
