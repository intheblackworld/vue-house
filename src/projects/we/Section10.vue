<template>
  <div>
    <div class="section10">
     <img src="./s2/hr.png" alt="" class="hr absolute">
      <div class="title-d absolute-jc" data-aos="fade-down" data-aos-delay="200">嚴選建材</div>
      <div class="mask absolute" data-aos="fade-down-left" data-aos-delay="200"></div>
      <div class="border absolute" data-aos="fade-up-right" data-aos-delay="200"></div>
      <div class="swipe absolute" data-aos="fade" data-aos-delay="400" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
      <div class="en absolute" v-html="slideList[slideIndex].en" data-aos="fade-down" data-aos-delay="600"></div>
      <div class="name absolute" v-html="slideList[slideIndex].name" data-aos="fade-up" data-aos-delay="800"></div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: size(1920);
  height: size(900);
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100vw;
  height: 100vh;
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

.hr {
  width: 100vw;
  top: size(-1);
  left: 0;
  transform: scaleY(-1);
  opacity: 1;
}
.title-d {
  width: size(160);
  top: size(90);
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #fff;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: size(-60);
    width: size(36);
    height: size(36);
    background-image: url('./s6/title.png');
    background-size: cover;
    transform: rotate(180deg);
    top: size(8);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: size(-60);
    top: size(8);
    width: size(36);
    height: size(36);
    background-image: url('./s6/title.png');
    background-size: cover;
  }
}

.en {
  top: size(437);
  left: size(1213);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #eee93a;
}

.name {
  top: size(471);
  left: size(1213);
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
  color: #ffffff;
}

.border {
  width: size(840);
  height: size(560);
  top: size(254);
  left: size(230);
  border: 2px solid #fff;
}

.mask {
  width: size(692);
  height: size(560);
  top: size(214);
  right: size(210);
  background-color: rgba(0, 63, 68, 0.5);
}

/* Swipe */
.swipe {
  width: size(840);
  height: size(560);
  top: size(236);
  left: size(210);
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
  }

  .slide-name {
    right: 20px;
    bottom: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
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
  bottom: size(150);
  left: size(1115);
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
    box-shadow: 0 0 0 1px #ccc;
    position: relative;
    background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #eee93a;
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
        background: #eee93a;
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
  .section10 {
    width: 100vw;
    height: sizem(550);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .hr {
    width: auto;
    height: sizem(10);
    top: sizem(-1);
    left: 0;
    opacity: 1;
  }

  .title-d {
    width: sizem(120);
    top: sizem(51);
    font-size: sizem(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: #fff;

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: sizem(4);
      background-image: url('./s6/title.png');
      background-size: cover;
      transform: rotate(180deg);
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: size(8);
      background-image: url('./s6/title.png');
      background-size: cover;
    }
  }

  .en {
    top: sizem(403);
    left: sizem(0);
    width:100%;
    font-size: sizem(15);
    line-height: 1.92;
    letter-spacing: sizem(0.75);
    text-align: center;
  }

  .name {
    top: sizem(425);
    width:100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: sizem(25);
    line-height: 1.92;
    text-align: center;
  }

  .border {
    display: none;
  }

  .mask {
    width: sizem(360);
    height: sizem(110);
    top: sizem(386);
    right: sizem(8);
    background-color: rgba(0, 63, 68, 0.5);
  }
  /* Swipe */
  .swipe {
    width: sizem(360);
    height: sizem(240);
    min-height: auto;
    top: sizem(140);
    left: sizem(8);
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section10',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s10/1INNOCI-SQUARE單孔檯面盆.jpg'),
          en: 'KOHLER UNDEERSCORE',
          name: '多功能浴室淨暖機',
        },
        {
          img: require('./s10/2INNOCI-SQUARE單孔檯面盆.jpg'),
          en: 'INNOCI SQUARE',
          name: '單孔檯面盆',
        },
        {
          img: require('./s10/3.jpg'),
          en: 'KOHLER INNATE',
          name: '全自動智慧馬桶',
        },
        {
          img: require('./s10/4.jpg'),
          en: 'INNOCI SQUARE',
          name: '臉盆龍頭',
        },
        {
          img: require('./s10/5.jpg'),
          en: ' ',
          name: '多功能浴室淨暖機',
        },
        {
          img: require('./s10/6.jpg'),
          en: 'INNOCI  LUXURY',
          name: '平台式兩用花灑淋浴柱',
        },
        {
          img: require('./s10/7.jpg'),
          en: ' ',
          name: '冷熱生飲設備',
        },
        {
          img: require('./s10/8.jpg'),
          en: '櫻花SAKURA',
          name: '櫻花單口IH感應爐',
        },
        {
          img: require('./s10/10.jpg'),
          en: ' ',
          name: '德國進口超耐磨木地板',
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
      if (this.viewIndex === 10) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
