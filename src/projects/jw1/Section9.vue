<template>
  <div>
    <div class="section4">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="tabIndex == 1">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div>
        </div>
      </div>
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="tabIndex == 2">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
          </div>
        </div>
      </div>
      <h3 :class="`btn btn1 flex-c ${tabIndex === 1 ? 'active' : ''}`" @click="tabIndex = 1">
        兩房戶型
      </h3>
      <div class="desc desc1">
        <li>雙面採光、挑高3.6米，寬容大亮</li>
        <li>大面寬客廳，媲美35坪以上產品</li>
        <li>大兩房規劃，可擺梳妝臺、收納櫃</li>
        <li>二字型廚房，可規劃前後工作檯面</li>
        <li>2.75米大陽台，做起家事不卡卡</li>
        <li>無雨遮登記，坪數實在</li>
        <li>珍稀超高得房率</li>
      </div>
      <div class="desc desc2">
        <li>正面公園，客廳、臥室享舒心綠景</li>
        <li>雙面採光、挑高3.6米，寬容大亮</li>
        <li>大三房規劃，可擺梳妝臺、收納櫃</li>
        <li>二字型廚房,可規劃前後工作檯面</li>
        <li>4.2米大陽台，做起家事不卡卡</li>
        <li>無雨遮登記，坪數實在</li>
        <li>珍稀超高得房率</li>
      </div>
      <h3 :class="`btn btn2 flex-c ${tabIndex === 2 ? 'active' : ''}`" @click="tabIndex = 2">
        兩房戶型
      </h3>
      <!-- <h1 class="s-title" data-aos="fade" data-aos-delay="200">
        Overture
      </h1>
      <h1 class="title" data-aos="fade" data-aos-delay="400">
        雙園合奏生活主閑綠
      </h1>
      <h1 class="subtitle" data-aos="fade" data-aos-delay="600">
        千坪綠意神農公園<span></span>少棒名校興穀國小
      </h1>
      <h1 class="desc" data-aos="fade" data-aos-delay="800">
        門前正臨1,390坪神農公園，伸手擁抱全齡守護興穀國小。百米永恆棟距舒心視野，翠綠家景蔚然而生。
      </h1> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.btn {
  width: size(316);
  height: size(54);
  border-top: 2px solid #248184;
  border-bottom: 2px solid #248184;
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.2;
  letter-spacing: size(1.48);
  text-align: left;
  color: #248284;
  cursor: pointer;
  transition: all 0.3s;
  &.active {
    color: #fff;
    background-color: #248284;
  }
}

.btn1 {
  @include div_r_pc(315, 54, 220, 236);
}

.btn2 {
  @include div_r_pc(315, 54, 700, 236);
}

.desc {
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(0.57);
  text-align: left;
  color: #221815;
  white-space: nowrap;

  li {
    list-style-type: disc;
  }
}

.desc1 {
  @include div_r_pc(315, 338, 300, 236);
}

.desc2 {
  @include div_r_pc(315, 338, 780, 236);
}
/* Swipe */
.swipe {
  width: size(1198);
  height: size(850);
  bottom: 0;
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
    height: size(850);
  }

  .slide-name {
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 15px;
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
  bottom: size(44);
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
    height: sizem(681);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .s-title {
    @include img_r_m(222, 58, 114);
    font-size: sizem(58);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-1.1);
    text-align: left;
    color: #e7ecec;
    white-space: nowrap;
  }

  .title {
    @include img_r_m(183, 130, 40);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #248184;
    white-space: nowrap;
  }

  .subtitle {
    @include img_r_m(271, 193, 64);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: sizem(1.24);
    text-align: left;
    color: #221815;
    white-space: nowrap;

    span {
      width: 1.2em;
      height: 1.2em;
      position: relative;
      display: inline-block;
      text-align: center;
    }

    span:before,
    span:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #248184;
      top: 0.2em;
    }

    span:before {
      transform: rotate(45deg) translateX(-50%);
    }
    span:after {
      transform: rotate(-45deg) translateX(-50%);
    }
  }

  .desc {
    @include img_r_m(300, 222, 34);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: sizem(0.72);
    text-align: left;
    color: #221815;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(330);
    min-height: auto;
    top: sizem(351);
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
      height: sizem(300);
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
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      tabIndex: 1,
      slideIndex1: 0,
      slideIndex2: 0,
      slideList1: [
        {
          img: require('./s9/2-1.jpg'),
          name: ' ',
        },
        {
          img: require('./s9/2-2.jpg'),
          name: ' ',
        },
        {
          img: require('./s9/2-3.jpg'),
          name: ' ',
        },
      ],

      slideList2: [
        {
          img: require('./s9/3-1.jpg'),
          name: ' ',
        },
        {
          img: require('./s9/3-2.jpg'),
          name: ' ',
        },
        {
          img: require('./s9/3-3.jpg'),
          name: ' ',
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
      if (this.viewIndex === 5) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
