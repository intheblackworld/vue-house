<template>
  <div class="section8">
    <div class="border">
      <div class="label">
        景觀二房 頂規配備好入住
      </div>
    </div>

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div> -->
        <!-- <img src="./s5/n.png" alt="" class="slide-btn" v-if="slideIndex1 === 0" @click="goTo(1)">
        <img src="./s5/s.png" alt="" class="slide-btn"  v-if="slideIndex1 === 1"  @click="goTo(0)"> -->
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>

    <div class="slide-content" v-if="isMobile">
      <div class="slide-title" v-html="slideList[slideIndex].title"></div>
      <div class="slide-line"></div>
      <div class="slide-subtitle" v-html="slideList[slideIndex].subtitle"></div>
      <div class="slide-more" @click="addIndex">
        More
      </div>
    </div>

    <div class="swipe1 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isPC">
      <div class="swipe-wrap relative">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
        <div class="slide-content">
          <div class="slide-title" v-html="slideList1[slideIndex1].title"></div>
          <div class="slide-line"></div>
          <div class="slide-subtitle" v-html="slideList1[slideIndex1].subtitle"></div>
          <div class="slide-more" @click="addMultiIndex(1)">
            More
          </div>
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div> -->
        <!-- <img src="./s5/n.png" alt="" class="slide-btn" v-if="slideIndex1 === 0" @click="goTo(1)">
        <img src="./s5/s.png" alt="" class="slide-btn"  v-if="slideIndex1 === 1"  @click="goTo(0)"> -->
        <!-- <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>

    <div class="swipe2 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isPC">
      <div class="swipe-wrap relative">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
        </div> -->
        <div class="slide-content">
          <div class="slide-title" v-html="slideList2[slideIndex2].title"></div>
          <div class="slide-line"></div>
          <div class="slide-subtitle" v-html="slideList2[slideIndex2].subtitle"></div>
          <div class="slide-more" @click="addMultiIndex(2)">
            More
          </div>
        </div>
        <!-- <img src="./s5/n.png" alt="" class="slide-btn" v-if="slideIndex === 0" @click="goTo(1)">
        <img src="./s5/s.png" alt="" class="slide-btn"  v-if="slideIndex === 1"  @click="goTo(0)"> -->
        <!-- <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <!-- <div class="title">
      20項豐富公設 24小時飯店管理<br />尊榮感提升儀式感 讓生活 回家就開始
    </div> -->
    <!-- <div class="line"></div> -->
    <!-- <h3 class="subtitle">
      樂部規劃！鋼琴lounge bar、TV沙發區…享樂，不同以往。
    </h3> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section8 {
  width: 100%;
  height: size(1325);
  position: relative;
  background-color: #3e2855;
  background-image: url('./s7/bg.png');
  background-size: cover;
  background-attachment: fixed;
  // background-size: cover;
  // background-position: 100%;
  // min-height: size(900);
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
}

.border {
  @include div_c_pc(695, 143, 120);
  border: 2px solid #c9a063;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(34) size(34) 0 0;
    border-color: #c9a063 transparent transparent transparent;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 size(34) size(34);
    border-color: transparent transparent #c9a063 transparent;
  }
}

.border-top {
  @include img_c_pc(1190, 73);
  border: 2px solid #c9a063;
}

.line {
  @include img_l_pc(128, 50, 848);
  transform: rotate(90deg);
}

.label {
  @include img_c_pc(507, 48);
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.15);
  text-align: center;
  color: #fff;
  white-space: nowrap;
}

.title {
  @include img_c_pc(874, 274);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: size(4.8);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(668, 432);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(1.2);
  text-align: right;
  color: #fff;
  white-space: nowrap;
}

/* Swipe */
.swipe1 {
  @include div_l_pc(775, 797, 323, 160);
}

.swipe2 {
  @include div_r_pc(775, 797, 323, 160);
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

.slide-content {
  @include div_l_pc(318, 207, 0, 24);
  top: auto;
  bottom: size(25);
  border-radius: 22.2px;
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: size(15);

  .slide-title {
    font-size: size(22);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #c8a064;
  }

  .slide-line {
    width: size(282);
    margin: 15px auto;
    border-top: 1px solid #fff;
  }

  .slide-subtitle {
    width: size(282);
    margin: 0 auto;
    font-size: size(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.8px;
    text-align: center;
    color: #fff;
  }

  .slide-more {
    width: size(112);
    height: size(45);
    border-radius: 16px;
    margin: 15px auto;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
  }
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}

.slide-btn {
  @include img_r_pc(100, 30, 30);
  cursor: pointer;
  z-index: 10;
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
  top: auto;
  left: 0;
  right: 0;
  bottom: size(-60);
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
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #fff;
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
      box-shadow: 0 0 0 1px #fff;
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
    width: size(72);
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
    height: sizem(578 + 100);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .border {
    @include div_c_m(335, 100, 30);
    border: 2px solid #c9a063;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: sizem(34) sizem(34) 0 0;
      border-color: #c9a063 transparent transparent transparent;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 sizem(34) sizem(34);
      border-color: transparent transparent #c9a063 transparent;
    }
  }

  .line {
    @include img_c_m(306, 157);
  }

  .label {
    @include img_c_m(341, 18);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: sizem(1.88);
    text-align: center;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 143);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(0.45);
    text-align: center;
    color: #fff;
    white-space: normal;
  }

  /* Swipe */
  .swipe {
    @include div_c_m(335, 344, 140);
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

  .slide-content {
    @include div_c_m(335, 153, 0);
    top: auto;
    bottom: sizem(25);
    border-radius: 22.2px;
    background-color: rgba(0, 0, 0, 0.75);
    padding-top: sizem(15);

    .slide-title {
      font-size: sizem(16);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: sizem(0.8);
      text-align: center;
      color: #c8a064;
    }

    .slide-line {
      width: sizem(330);
      margin: 15px auto;
      border-top: 1px solid #fff;
    }

    .slide-subtitle {
      width: sizem(291);
      margin: 0 auto;
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.78;
      letter-spacing: sizem(0.75);
      text-align: center;
      color: #fff;
    }

    .slide-more {
      display: none;
    }
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    // overflow: hidden;
  }

  .slide-btn {
    @include img_r_pc(100, 30, 30);
    cursor: pointer;
    z-index: 10;
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
    top: auto;
    left: 0;
    right: 0;
    bottom: size(-60);
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
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
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
        box-shadow: 0 0 0 1px #fff;
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
    width: 120%;
    left: -10%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(37);
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

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      slideIndex1: 0,
      slideIndex2: 0,
      slideList: [
        {
          img: require('./s8/1-1.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-2.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-3.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-4.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/2-1.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-2.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-3.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-4.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
      ],
      slideList1: [
        {
          img: require('./s8/1-1.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-2.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-3.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
        {
          img: require('./s8/1-4.jpg'),
          title: '時尚開放 客餐整合',
          subtitle: '釋放空間的最舒適！收納、配備巧思，簡單家庭正合心意',
        },
      ],
      slideList2: [
        {
          img: require('./s8/2-1.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-2.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-3.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
        {
          img: require('./s8/2-4.jpg'),
          title: '廚房衛浴 配備到位',
          subtitle: '一卡皮箱好入住！廚房電器一應俱全，清爽衛浴乾溼分離',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {
    if (this.isMobile) {
      this.toggleTimer = true
    } else {
      this.toggleTimer = false
    }
  },

  computed: {},

  watch: {},
}
</script>
