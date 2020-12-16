<template>
  <div>
    <div class="section9">
      <div class="swipe swipe1 absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="(isPC && tabIndex == 1) || isMobile">
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
      <div class="swipe absolute swipe2" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="(isPC && tabIndex == 2) || isMobile">
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
      <div class="txt"  v-if="isPC">
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
        <h3 :class="`btn btn2 flex-c ${tabIndex === 2 ? 'active' : ''}`" @click="tabIndex = 2">
          三房戶型
        </h3>
        <div class="desc desc2">
          <li>正面公園，客廳、臥室享舒心綠景</li>
          <li>雙面採光、挑高3.6米，寬容大亮</li>
          <li>大三房規劃，可擺梳妝臺、收納櫃</li>
          <li>二字型廚房，可規劃前後工作檯面</li>
          <li>4.2米大陽台，做起家事不卡卡</li>
          <li>無雨遮登記，坪數實在</li>
          <li>珍稀超高得房率</li>
        </div>
      </div>
      <div v-if="isMobile">
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
        <h3 :class="`btn btn2 flex-c ${tabIndex === 2 ? 'active' : ''}`" @click="tabIndex = 2">
          三房戶型
        </h3>
        <div class="desc desc2">
          <li>正面公園，客廳、臥室享舒心綠景</li>
          <li>雙面採光、挑高3.6米，寬容大亮</li>
          <li>大三房規劃，可擺梳妝臺、收納櫃</li>
          <li>二字型廚房，可規劃前後工作檯面</li>
          <li>4.2米大陽台，做起家事不卡卡</li>
          <li>無雨遮登記，坪數實在</li>
          <li>珍稀超高得房率</li>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
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
.txt{display: flex;overflow: hidden;position: relative;flex-direction:column;
   @include div_r_pc(325, 850, 0, 236);justify-content:space-between;
   top: auto;

  bottom: 0;}
.btn {
  width: size(350);
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
// @include div_r_pc(315, 54, 90, 236);
}

.btn2 {margin: size(150) 0 0 0;
//  @include div_r_pc(315, 54, 570, 236);
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
  position: relative;
}

.desc2 {
  position: relative;
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
    left:1.2em;
    bottom:1.2em;
    color: #fff;
    font-size:  size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing:0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #0003;
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
  .section9 {
    width: 100vw;
    height: sizem(1036 + 270);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .btn {
    width: sizem(316);
    height: sizem(54);
    border-top: 2px solid #248184;
    border-bottom: 2px solid #248184;
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.2;
    letter-spacing: sizem(1.18);
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
    @include div_r_m(315, 54, 28, 29);
  }

  .btn2 {
    @include div_r_m(315, 54, 686, 29);
  }

  .desc {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(0.45);
    text-align: left;
    color: #221815;
    white-space: nowrap;

    li {
      list-style-type: disc;
    }
  }

  .desc1 {
    @include div_r_m(301, 338, 102, 29);
  }

  .desc2 {
    @include div_r_m(301, 338, 771, 29);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(270);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(0);
    object-fit: cover;
  }

  .swipe1 {
    top: sizem(366);
  }

  .swipe2 {
    top: sizem(1036);
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
      height: sizem(270);
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

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
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: require('./s9/2-2.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: require('./s9/2-3.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
      ],

      slideList2: [
        {
          img: require('./s9/3-1.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: require('./s9/3-2.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: require('./s9/3-3.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
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
