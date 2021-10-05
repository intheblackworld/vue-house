<template>
  <div class="section5">
    <img loading="lazy" src="./s5/bg.png" :alt="`${info.caseName}_img`" class="img">
    <transition-group name="fade-up" mode="out-in">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 0" key="swipe-0">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 1" key="swipe-1">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 1)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div> -->
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div>
        </div>
      </div>
    </transition-group>
    <transition-group name="fade-up" mode="out-in">
      <div v-if="blockIndex === 0" key="block0">
        <div class="title1">六感花園</div>
        <h3 class="title2">五股洲子洋 不用等放假</h3>
        <h3 class="desc">
          以東京御苑源於自然，「四時有花，六感有意，八節有景」匠心獨具的設計完美呼應觀音山、微風運河，以「園中有園，景中有景」設計手法打造，對應人之六感：視覺、聽覺、嗅覺、味覺、觸覺、心覺，以不同的方式療癒您身心。
        </h3>
      </div>
      <div v-if="blockIndex === 1" key="block1">
        <div class="title1">舒心饗宴</div>
        <h3 class="title2">極致生活美學<br />享生活不用等放假</h3>
        <h3 class="desc">
          在這裡，生活就是渡假。<br />
          「天空之邑」打造最舒心的公設饗宴，<br />
          熱情款待每個熱愛享受生活的住戶。
        </h3>
      </div>
    </transition-group>
    <img loading="lazy" src="./s4/img.png" :alt="`${info.caseName}_img`" class="circle">
    <div class="btns flex-ac flex-jb">
      <h3 :class="`btn flex-c ${blockIndex === 0 ? 'active' : ''}`" @click="blockIndex = 0">
        六感花園
      </h3>
      <h3 :class="`btn flex-c ${blockIndex === 1 ? 'active' : ''}`" @click="blockIndex = 1">
        舒心饗宴
      </h3>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.slide-name {
  .slide-name-big {
    font-size: size(22);

    .sep {
      color: #d38700;
    }

    .small {
      font-size: size(12);
    }
  }
}

@media screen and (max-width: 767px) {
  .slide-name {
    .slide-name-big {
      font-size: sizem(16);

      .sep {
        color: #d38700;
      }

      .small {
        font-size: sizem(12);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100%;
  height: size(1046);
  min-height: size(1046);
  max-height: size(1046);
  position: relative;
  z-index: 2;
    background: #fff;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}
.img {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: 0;
  animation: an_x 4s 0s ease-in-out infinite alternate-reverse;
}

@keyframes an_x {
  to {
    transform: scaleX(1.03);
  }
}

.title1 {
  @include div_l_pc(70, 254, 180, 362);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #ffffff;
  background-color: #003177;
  writing-mode: vertical-rl;
  text-orientation: upright;
    z-index: 2;
}

.title2 {
  @include div_l_pc(70, 550, 447, 362);
  font-size: size(25);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(5);
  text-align: left;
  color: #003177;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.desc {
  @include div_l_pc(123, 566, 230, 502);
  font-size: size(16);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: left;
  color: #606060;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.btns {
  @include img_l_pc(174 * 2 + 71, 166, 670);
}

.btn {
  width: size(174);
  height: size(28);
  cursor: pointer;
  background: #fff;
  transition: all 0.3s;
  font-weight: bold;
  font-size: size(18);
  // animation:btn 0.5s infinite alternate ;
  color: #606060;

  &.active,
  &:hover {
    box-shadow: -2px 2px 0 0 #003177;
    background: #fff;
    color: #003177;
  }
}
.circle {
  @include img_r_pc(197, 137, 124);
  animation: circle 20s linear 0s infinite;
}

@keyframes circle {
  to {
    transform: rotate(360deg);
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
  @include div_r_pc(1026, 586, 228, 224);
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

    .slide-name-big {
      font-size: size(22);

      .sep {
        color: #d38700;
      }

      .small {
        font-size: size(12);
      }
    }
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
  bottom: size(24);
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
  .section5 {
    width: 100vw;
    height: sizem(682);
    min-height: auto;
    max-height: initial;
    //  background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .img {
    @include img_r_m(375, 0, -260);
    width: auto;
    height: sizem(275);
    top: auto;
    bottom: 0;
  }

  .title1 {
    @include div_l_m(178, 41, 294, 43);
    font-size: sizem(23);
    height: auto;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.3);
    text-align: left;
    color: #ffffff;
    background-color: #003177;
    padding-top: 0;
    padding-left: 0.5em;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .title2 {
    @include div_l_m(228, 27, 312 + 28, 43);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(3.6);
    text-align: left;
    color: #003177;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .desc {
    @include div_l_m(310, 238, 355 + 35, 43);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .btns {
    @include img_c_m(140 * 2 + 11, 0);
  }

  .btn {
    width: sizem(140);
    height: sizem(30);
    cursor: pointer;
    background: #fff;
    transition: all 0.3s;
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: sizem(1.9);
    text-align: left;
    color: #606060;

    &.active,
    &:hover {
      box-shadow: -2px 2px 0 0 #003177;
      background: #fff;
      color: #003177;
    }
  }
  .circle {
    @include img_r_m(71, 250, 32);
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(214);
    min-height: auto;
    top: sizem(54);
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
      width: auto;
      top: auto;
      bottom: 1.2em;
      right: 0.5em;
      text-align: right;
      font-size: sizem(12);
      font-family: "Noto Sans TC", serif;
      font-weight: 400;
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
  name: 'section5',

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
          img: require('./s5/1-1.jpg'),
          name: '六感庭園情境示意圖',
        },
        {
          img: require('./s5/1-2.jpg'),
          name: '六感庭園情境示意圖',
        },
      ],
      slideList1: [
        {
          img: require('./s5/2-1.jpg'),
          name: '<div class="slide-name-big">迎賓門廳<span class="sep">｜</span>挑高時尚設計，優質生活從進門就開始 <span class="small">3D示意</span></div>',
        },
        {
          img: require('./s5/2-2.jpg'),
          name: '<div class="slide-name-big">空中花園<span class="sep">｜</span>用自然香味，讓身心靈就此沉澱寧靜 <span class="small">3D示意</span></div>',
        },
        {
          img: require('./s5/2-3.jpg'),
          name: '<div class="slide-name-big">健身房<span class="sep">｜</span>用汗水淬練身體完美線條，紓壓不二法門 <span class="small">3D示意</span></div>',
        },
        {
          img: require('./s5/2-4.jpg'),
          name: '<div class="slide-name-big">拳擊區<span class="sep">｜</span>正拳、鉤拳用痛快揮擊，把負能量都趕走 <span class="small">3D示意</span></div>',
        },
        {
          img: require('./s5/2-5.jpg'),
          name: '<div class="slide-name-big">媽媽教室<span class="sep">｜</span>寵愛家人，用香味與美味攏絡家人的胃 <span class="small">3D示意</span></div>',
        },
        {
          img: require('./s5/2-6.jpg'),
          name: '<div class="slide-name-big">兒童遊戲區<span class="sep">｜</span>把歡樂與笑聲裝滿孩子幸福的童年 <span class="small">3D示意</span></div>',
        },
        // {
        //   img: require('./s5/05-2_img.jpg'),
        //   name: '捷運示意',
        // },
        // {
        //   img: require('./s4/04-2_slider_2.jpg'),
        //   name: '新北大都會公園',
        // },
        // {
        //   img: require('./s4/04-2_slider_3.jpg'),
        //   name: '芳洲公園',
        // },
        // {
        //   img: require('./s4/04-2_slider_4.jpg'),
        //   name: '新北大都會公園',
        // },
        // {
        //   img: require('./s4/04-2_slider_5.jpg'),
        //   name: '新北大都會公園',
        // },
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
