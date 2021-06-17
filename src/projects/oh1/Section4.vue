<template>
  <div class="section4">
    <img src="./s4/bg.png" alt="" class="img">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23338000'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E" alt="">
          </div>
          <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.28 28.67' preserveAspectRatio='xMidyMid' fill='%23338000'%3E%3Cpolygon points='14.33 28.67 16.28 26.72 3.79 14.23 16.18 1.84 14.33 0 0 14.33 14.33 28.67'/%3E%3C/svg%3E" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="txt txt1" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title title1" data-aos="fade-up" data-aos-delay="200">
        時尚樂活．玩美人生
      </h3>
      <div class="hr" data-aos="zoom-in-right" data-aos-delay="500"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="200">
        淡水，擁有豐富的自然景觀及全球最美的七星級夕陽，集古蹟、老街、人文、藝術、美食、生態等休閒元素於一身。<br />
        車行至淡海新市鎮，彷彿進入了另一個新國度，主幹道40米以上的大型街廓，臨路建築皆退縮12米以上，看不到礙眼的電線桿，瓦斯、管線、網路都已地下化，優質生活拉升幸福指數，造就花園城市新典範。
      </div>
      <div class="txt2" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title title1" data-aos="fade-up" data-aos-delay="200">
          2024淡海大不同
        </h3>
        <h3 class="title title2" data-aos="fade-up" data-aos-delay="200">
          精彩未來可期
        </h3>
        <div class="hr" data-aos="zoom-in-right" data-aos-delay="500"></div>
        <div class="desc" data-aos="fade-up" data-aos-delay="200">
          淡江大橋、淡北快速道路預計2024年完工通車，南山水公園、科技園區、醫療專用園區等建設百花齊放，「職、住、遊、憩」海灣城市成型，即將華麗變身！<br />
          捷運、影城、藝文、公園、商場、親水休閒一次滿足，卡位房市起漲點、輕鬆坐享未來，就趁現在！
        </div>
      </div>
    </div>
    <div class="slogan">
      Wonderful Life
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.txt {
  @include img_r_pc(479, 156, 1296);
  top: calc(50% + (156 - 540) * 100vw / 1920);
  background-image: transparent;
  padding: 0;
  width:20em;
  font-size:size(23);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing: normal;
  text-align: justify;
}
.title {
  font-size:2.17em;
  font-weight: bold;
  line-height: 1.2;
  color: #fff000;
  white-space: nowrap;
}

.title2 {
  text-align: right;
}

.hr {
  width: 100%;
  border-top: 1px solid #fff;
  margin: 0.65em 0;
}

.desc {
  //width: 93%;
  margin: 0 auto;
  margin-left: 0;
  font-weight: 500;
  color: #ffffff;
}

.txt2 {
  padding: size(20) size(30);
  @include img_l_pc(540, 648, 124);
  top:calc(100% + 2em);
  background-image: linear-gradient(
    to right,
    rgba(184, 28, 34, 0.9),
    rgba(233, 85, 4, 0.9)
  );
  width:27em;
  font-size:size(20);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing: normal;
  text-align: justify;
    color: #ffffff;
  .title {
    font-size:2em;
    font-weight: bold;
    line-height: 1.2;
  }

  .title1 {
    text-align: left;
  }

  .title2 {
    text-align: right;
  }

  .desc {
    width: 100%;
    font-weight: 500;
    line-height: 1.94;
  }
}

.slogan {
  @include img_r_pc(669, 0, 69);
  top: calc(50% + (947 - 540) * 100vw / 1920);
  font-family: Arial;
  font-size: size(100);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.img {
  @include img_r_pc(662, 0, 0);
  animation: swing 4.5s ease-in-out 0s infinite alternate-reverse;
}

@keyframes swing {
  to {
    transform: translateX(15%);
  }
}

/* Swipe */
.swipe {
  width: size(1105);
  height: size(745);
  top: calc(50% + (166 - 540) * 100vw / 1920);
  left: size(752);
  object-fit: cover;
  // background:#0344;
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
    left: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
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
  bottom: size(18);
  right: size(18);
  left: auto;
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
    width: size(25);
    height: size(25);
    border-radius: size(25);
    // box-shadow: 0 0 0 1px #fff;
    // background: #fff;
    position: relative;
    background-color: #fff;
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
        background: #fff000;
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
    height: sizem(536 + 287);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .txt {
    @include div_r_m(375, 334, 0, 0);
    background-image: transparent;
    padding: sizem(30) sizem(30);
  }
  .title {
    width: sizem(320);
    margin: 0 auto 0;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #fff000;
    white-space: nowrap;
  }

  .title2 {
    text-align: left;
    padding-left: sizem(70);
  }

  .hr {
    width: sizem(320);
    // height: 35px;
    border-top: size(1) solid #fff;
    margin: sizem(10) auto;
  }

  .desc {
    // text-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
    width: sizem(320);
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    // white-space: nowrap;
  }

  .txt2 {
    padding: sizem(15) sizem(30);
    @include div_l_m(347, 287, 536, 0);
    background-image: linear-gradient(
      to right,
      rgba(184, 28, 34, 0.9),
      rgba(233, 85, 4, 0.9)
    );
    .title {
      font-size: sizem(22);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.38;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    .title1 {
      text-align: left;
    }

    .title2 {
      text-align: left;
      padding-left: sizem(130);
    }

    .hr {
      display: none;
    }

    .desc {
      width: 100%;
      font-size: sizem(14);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.84;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }
  }

  .slogan {
    @include img_r_m(201, 499, 30);
    top: sizem(499);
    bottom: auto;
    font-family: Arial;
    font-size: sizem(30);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(0.6);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(234);
    min-height: auto;
    top: sizem(326);
    bottom: auto;
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
      height: auto;
      object-fit: cover;
      position: absolute;
      left: 0;
      bottom: 0;
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
      left: 1.2rem;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: sizem(270);
    padding: 0;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(50);
      height: sizem(50);
      border-radius: 999px;
      background-color: #fff000;
      cursor: pointer;
      img {
        width: sizem(10);
      }
    }

    .prev-btn {
      margin-left: sizem(-25);
      img {
        margin-top: 30%;
        margin-left: 35%;
      }
    }

    .next-btn {
      margin-right: sizem(-25);
      img {
        margin-top: 30%;
        margin-right: 35%;
        transform: rotate(180deg);
      }
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
      slideList: [
        {
          img: require('./s4/1漁人碼頭、情人橋.jpg'),
          name: '漁人碼頭、情人橋',
        },
        {
          img: require('./s4/2美麗新淡海影城.jpg'),
          name: '美麗新淡海影城',
        },
        {
          img: require('./s4/3淡水紅毛城.jpg'),
          name: '淡水紅毛城',
        },
        {
          img: require('./s4/4淡水老街(中正路).jpg'),
          name: '淡水老街(中正路)',
        },
        {
          img: require('./s4/5紅樹林自然保留區.jpg'),
          name: '紅樹林自然保留區',
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
