<template>
  <div class="section5">
    <img src="./s5/bg.png" alt="" class="img">
    <!-- <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div> -->
    <div class="txt txt1" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title title1" data-aos="fade-up" data-aos-delay="400">
        超級玩家．百變樂園
      </h3>
      <div class="hr" data-aos="zoom-in-right" data-aos-delay="600"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="800">
        在大基地、低建蔽條件下，讓建築融入環境之中，彷彿蓋在公園裡的綠色城堡奇蹟，感受四季變化之美；現代簡約風格、立體框架美學，充滿時尚新穎的天際風采，垂直綠化減碳思維，讓自然、藝術及建築三者融合為一，開闊舒適的超大棟距視野，開啟生活新眼界！
      </div>
    </div>
    <div class="slogan">
      Ocean Resort
    </div>
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
}

.txt {
  @include div_r_pc(557, 460, 170, 130);
  background-image: transparent;
  padding: 0;
}
.title {
  width: 100%;
  margin: 0 auto;
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.7);
  text-align: center;
  color: #fff000;
  white-space: nowrap;
}

.title1 {
}

.title2 {
  text-align: right;
}

.hr {
  width: 100%;
  // height: 35px;
  border-top: size(1) solid #fff;
  margin: size(15) auto;
}

.desc {
  // text-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
  width: 100%;
  margin: 0 auto;
  margin-left: 0;
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  // white-space: nowrap;
}

.txt2 {
  padding: size(20) size(30);
  @include div_l_pc(540, 351, 648, 280);
  background-image: linear-gradient(
    to right,
    rgba(184, 28, 34, 0.9),
    rgba(233, 85, 4, 0.9)
  );
  .title {
    font-size: size(40);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .title1 {
    text-align: left;
  }

  .title2 {
    text-align: right;
  }

  .desc {
    width: 100%;
    font-size: size(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}

.slogan {
  @include img_r_pc(669, 0, 69);
  top: auto;
  bottom: size(212);
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
  position: absolute;
  width: 100vw;
  top: auto;
  left: 0;
  bottom: 0;
  // animation: swing 4.5s ease-in-out 0s infinite alternate-reverse;
}

/* Swipe */
.swipe {
  width: size(1105);
  height: size(745);
  top: size(167);
  right: size(63);
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
  .section5 {
    width: 100vw;
    height: sizem(670);
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
    @include img_l_m(320, 25, 25);
    height: auto;
    // filter: drop-shadow(0 0 5px #036);
    display: block;
  }
  .title {
    // @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    letter-spacing: normal;
    line-height: 2;
    text-align: left;
    span {
      display: block;
      font-size: sizem(20);
      letter-spacing: 0.01em;
    }
  }

  .hr {
    //  @include img_r_m(230, 458, 102);
    height: sizem(1);
    margin: sizem(12) 0;
  }

  .desc {
    // @include img_r_m(292, 474, 40);
    font-size: sizem(15);
    font-weight: normal;
    letter-spacing: normal;
    white-space: normal;
    line-height: 1.73;
    margin: 0 0 1.5em 0;
  }
  .slogan {
    display: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s4/1漁人碼頭、情人橋.jpg'),
      //     name: '漁人碼頭、情人橋',
      //   },
      //   {
      //     img: require('./s4/2美麗新淡海影城.jpg'),
      //     name: '美麗新淡海影城',
      //   },
      //   {
      //     img: require('./s4/3淡水紅毛城.jpg'),
      //     name: '淡水紅毛城',
      //   },
      //   {
      //     img: require('./s4/4淡水老街(中正路).jpg'),
      //     name: '淡水老街(中正路)',
      //   },
      //   {
      //     img: require('./s4/5紅樹林自然保留區.jpg'),
      //     name: '紅樹林自然保留區',
      //   },
      // ],
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
