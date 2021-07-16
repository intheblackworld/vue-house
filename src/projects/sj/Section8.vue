<template>
  <div class="section8">
    <div class="bg"></div>
    <div class="section"><img src="./all/section.png"></div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-show="viewIndex === 0">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" data-aos="fade" data-aos-delay="1000">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + 'item' + i" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + index + 'item' + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-show="viewIndex === 1">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" data-aos="fade" data-aos-delay="1000">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img + 'item-2' + i" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + index + 'item2' + '-dot'" @click="slideIndex1 = index"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
        </div>
      </div>
    </div>
   <div class="txt">
    <h1 class="title" data-aos="fade-up" data-aos-delay="600">
      坪效美學
    </h1>
    <div data-aos="fade-up" data-aos-delay="800">
      <div :class="`btn btn1 ${viewIndex === 0 ? 'active' : ''}`" @click="viewIndex = 0">
        一房戶型
      </div>
      <div :class="`btn btn2 ${viewIndex === 1 ? 'active' : ''}`" @click="viewIndex = 1">
        兩房戶型
      </div>
    </div>

    <div class="hint" data-aos="fade-up" data-aos-delay="1200">
      裝潢風格情境參考示意圖，實際坪數，格局尺度，依銷售買賣合約書為準，建設公司保有修正之權利。
    </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(1050);
  min-height: size(1050);
  max-height: size(1050);
  // position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg {
  @include div_r_pc(1920, 850, 212, 0);
  width: 100%;
  top: auto;
  bottom: 0;
  background-color: #040000;
}
.section{
  @include img_c_pc(530, 80);
  img{width: 100%;}
}


.txt{
  @include div_l_pc(394, 850, 212, 63);
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  align-content:center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  color: #ffffff;
  line-height: 1.6;
  }

.number {
  font-size: size(118.8);
  font-family: Gadugi;
  margin: -0.3em 0 0 0;
  letter-spacing: normal;
}

.title {
  font-size: size(31.9);
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.054em;
  white-space: nowrap;
  margin: 0em 0 1.4em 0;
}

.btn {
  font-size: size(27.2);
  font-weight: 600;
  line-height: 1.73;
  letter-spacing: 0.054em;
  color: #ffffff;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: border-bottom 0.3s;
  margin: 0em 0 0.6em 0;

  &.active,
  &:hover.active {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
  &:hover{
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);}
}


.hint {
  margin: 2.8em 0 0em 0;
  font-size: size(14.2);
  font-weight: 300;
  line-height: 1.94;
  letter-spacing:0.04em;
}

/* Swipe */
.swipe {
  width: size(1373);
  height: size(850);
  bottom: size(0);
  right: 0;
  object-fit: cover;
  // background: #0344;
  // background-image: url('./s2/bg_noise_bk.gif');
  background-size: cover;
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
    right: 2em;
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
  bottom: size(28);
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
    width: size(12.5);
    height: size(12.5);
    border-radius: size(12.5);
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

// .dialog {
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background: linear-gradient(to bottom, #004471 80%, #094b76 100%);
//   z-index: 1000;

//   .dialog-bg {
//     width: 100%;
//     height: 100%;
//     background-image: url('~@/projects/lj/s1/bg.png');
//     // padding-top: $nav_pc_height;
//     background-attachment: fixed;
//     background-size: auto;
//     background-position: center center;
//     background-repeat: repeat;
//   }

//   .dialog-img {
//     position: absolute;
//     width: size(1350);
//     height: auto;
//     top: calc(50% - 21.35vw);
//     left: 0;
//   }

//   .dialog-title {
//     @include img_r_pc(325, 0, 179);
//     top: calc(50% - 22vw);
//     font-size: size(36);
//     font-weight: bold;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.81;
//     letter-spacing: normal;
//     text-align: left;
//     color: #ffffff;
//     text-decoration: underline;
//   }

//   .dialog-close {
//     @include div_r_pc(42, 42, 130, 94);
//     top: calc(50% - 22vw);
//     border: 1px solid #fff;
//     cursor: pointer;

//     img {
//       width: 90%;
//     }
//   }
//   .dialog-name {
//     position: absolute;
//     left: 2em;
//     bottom: calc(50% - 21.35vw + 1.2em);
//     color: #fff;
//     font-size: size(18);
//     font-weight: bold;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.6;
//     letter-spacing: 0.03em;
//     text-align: left;
//     text-shadow: 0 0.2em 1em #000;
//   }

//   .dialog-desc {
//     @include img_r_pc(448, 303, 52);
//     top: auto;
//     bottom: calc(50% - 22vw);
//     font-size: size(18);
//     font-weight: bold;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 2.39;
//     letter-spacing: normal;
//     text-align: left;
//     color: #ffffff;
//     margin: 0 0;
//   }
// }

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
    height: sizem(950 + 56);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg {
    @include div_r_m(375, 380, 56, 0);
    bottom: auto;
    background-color: #040000;
  }
.txt{
    @include div_l_m(250, 380, 56, 62.5);
  }
.section{
  @include img_c_m(170, 20);
}

  .number {
    font-size: sizem(59.4);
  }

  .title {
    font-size: sizem(19.8);
  }

  .desc {
    font-size: sizem(14.2);
  }


  .hint {
    font-size: sizem(12);
    line-height: 1.42;
  }
  .btn {
    font-size: sizem(17);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(570);
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
      text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.73);
      left: auto;
      bottom: auto;
      bottom: 0.8rem;
      right: 1.2rem;
      font-size: sizem(12);
    }
  }

  .pagination {
    width: auto;
    bottom: sizem(15);
    left: sizem(22);
    right: auto;
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
      width: sizem(12.5);
      height: sizem(12.5);
      border-radius: sizem(12.5);
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: sizem(12.5);
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
          border-radius: sizem(12.5);
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
  name: 'section8',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      viewIndex: 0,
      slideIndex1: 0,
      slideList: [
        {
          img: isMobile ? require('./s8/1-1m.jpg') : require('./s8/1-1.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: isMobile ? require('./s8/1-2m.jpg') : require('./s8/1-2.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: isMobile ? require('./s8/1-3m.jpg') : require('./s8/1-3.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
      ],
      slideList1: [
        {
          img: isMobile ? require('./s8/2-1m.jpg') : require('./s8/2-1.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: isMobile ? require('./s8/2-2m.jpg') : require('./s8/2-2.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
        },
        {
          img: isMobile ? require('./s8/2-3m.jpg') : require('./s8/2-3.jpg'),
          name: '樣品屋裝潢風格情境參考示意圖',
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
