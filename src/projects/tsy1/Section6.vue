<template>
  <div class="section6">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="balloon-bg" v-if="isPC">
      <img src="./s5/06_balloon_1.png" :alt="`${info.caseName}_bg`" class="balloon1">
      <img src="./s5/06_balloon_2.png" :alt="`${info.caseName}_bg`" class="balloon2">
    </div>
    <img src="./s5/06_child_1.png" :alt="`${info.caseName}_bg`" class="child1" v-if="isPC" >
    <img src="./s5/06_child_2.png" :alt="`${info.caseName}_bg`" class="child2" v-if="isPC" >
    <img src="./s5/06_img_1.jpg" :alt="`${info.caseName}_bg`" class="img1" v-if="isPC">
    <img src="./s5/06_img_2.jpg" :alt="`${info.caseName}_bg`" class="img2" v-if="isPC">
    <div class="title" v-if="isPC"  data-aos="fade-up" data-aos-delay="200">
      青潭國小旁 校園水岸 便利悠居
    </div>
    <div class="title" v-if="isMobile"  data-aos="fade-up" data-aos-delay="200">
      青潭國小旁 校園水岸<br />便利悠居
    </div>
    <div class="desc"  data-aos="fade-up" data-aos-delay="400">
      「翠松園｣座落青潭溪畔青潭國小旁，水岸芬多精健康純境，校園操場作前院，附設公托雙薪小家庭最愛！巷口公車站、UBIKE、全聯、美廉社、農會、7-11、全家、郵局、幼稚園、餐飲…坐享寧靜美地兼得機能便利。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-image: url('~@/projects/tsy1/s5/0506_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.img1 {
  @include img_l_pc(855, 75, 82);
  top: auto;
  bottom: 3%;
  height: calc(70% - 6vw);
  object-fit: cover;
}

.img2 {
  @include img_r_pc(855, 75, 82);
  top: auto;
  bottom: 3%;
  height: calc(70% - 6vw);
  object-fit: cover;
}

.title {
  @include img_c_pc(740, 97);
  font-size: size(52);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(950, 192);
  font-size: size(28);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: size(0.28);
  text-align: justify;
  color: #ffffff;
}

.child1 {
  @include img_r_pc(400, 70, 42);
      transform: skew(5deg);
      transform-origin: 50% 100%;
      animation: an 2.5s linear infinite alternate;
}

.child2 {
  @include img_l_pc(130, 244, 180);
      transform: skew(3deg);
      transform-origin: 50% 100%;
      animation: an 2.5s -2.5s linear infinite alternate;
}

.balloon1 {
  @include img_l_pc(65, 100, 383);
      transform: translateY(10%);
      animation: an 2.5s infinite alternate;
}

.balloon2 {
  @include img_r_pc(52, 42, 408);
      transform: translateY(10%);
      animation: an 2s -0.5s infinite alternate;

}

.balloon-bg {
  @for $i from 1 through 10 {
    $randomNum: random(2) + 1;
    > img:nth-child(#{$i}) {
      transform: translateY((random(10) - 30) + px);
      animation: an ($randomNum + s) 1s infinite alternate-reverse;
    }
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

// /* Swipe */
// .swipe {
//   width: size(1296);
//   height: 100vh;
//   min-height: size(900);
//   top: 0;
//   left: 0;
// }

// // begin
// .swipe-fade-leave-to {
//   opacity: 0;
//   z-index: 0;
// }
// // end
// .swipe-fade-enter {
//   opacity: 0;
//   z-index: 1;
// }

// .swipe-fade-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-fade-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

// // begin
// // .swipe-left-leave-to {
// //   margin-left: -100vw;
// //   z-index: 0;
// // }
// // // end
// // .swipe-left-enter {
// //   opacity: 0.5;
// //   margin-left: 0;
// //   z-index: 1;
// // }

// // .swipe-left-enter-active {
// //   transition: all 0.5s ease;
// // }

// // .swipe-left-leave-active {
// //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// // }

// .swipe-wrap {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }

// .swipe-item {
//   width: 100%;
//   height: 100%;
//   z-index: 0;

//   img {
//     width: 100%;
//     object-fit: cover;
//   }

//   .slide-name {
//     left: 20px;
//     bottom: 20px;
//     color: #fff;
//     font-size: 15px;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 3.11;
//     letter-spacing: 0.89px;
//     text-align: left;
//     color: #ffffff;
//   }

//   // &:nth-child(1) {
//   //   z-index: 1;
//   //   // opacity: 1;
//   // }

//   // &.base {
//   //   z-index: 1;
//   //   opacity: 1;
//   // }
//   // &.active {
//   //   z-index: 2;
//   //   // opacity: 1;
//   // }
// }

// .pagination {
//   width: 30%;
//   bottom: size(20);
//   right: 0;
//   left: 0;
//   margin: 0 auto;
//   justify-content: center;
// }

// .pagination-dot {
//   padding: 5px;
//   margin: 0 5px;
//   cursor: pointer;
//   z-index: 6;

//   span {
//     display: block;
//     width: size(17);
//     height: size(17);
//     border-radius: size(17);
//     box-shadow: inset 0 0 0 1px #fff;
//     position: relative;
//     background-color: #fff;
//     transition: all 0.5s;

//     &::before {
//       content: '';
//       width: 100%;
//       height: 100%;
//       display: block;
//       background: #fff100;
//       border-radius: 20px;
//       opacity: 1;
//       position: absolute;
//       top: 0%;
//       // transform: translateY(-50%);
//       left: 0%;
//       transition: all 0.3s;
//       transform-origin: center;
//       transform: scale(0);
//     }
//     &.active {
//       box-shadow: none;
//       &::before {
//         content: '';
//         width: 100%;
//         height: 100%;
//         display: block;
//         background: #fff100;
//         border-radius: 20px;
//         opacity: 1;
//         position: absolute;
//         top: 0%;
//         // transform: translateY(-50%);
//         left: 0%;
//         transform: scale(1);
//       }
//     }
//   }
// }

// .swipe-btns {
//   width: 100%;
//   height: 100%;
//   padding: 0 15px;
//   z-index: 3;

//   .prev-btn,
//   .next-btn {
//     width: size(20);
//     cursor: pointer;
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
  .section6 {
    width: 100vw;
    height: sizem(576);
    min-height: auto;
    max-height: initial;
    background-image: url('./bg_m.png');
    background-size: cover;
    background-attachment: initial;
    overflow: hidden;
  }

  .title {
    @include img_r_m(276, 264, 50);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(335, 370, 20);
    font-size: sizem(16);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: sizem(-0.32);
    text-align: justify;
    color: #ffffff;
  }

  /* Swipe */
  .swipe {
    width: sizem(335);
    height: sizem(224);
    min-height: auto;
    top: sizem(0);
    left: sizem(20);
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
    bottom: sizem(11);
    left: 0;
    right: 0;
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
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff100;
        border-radius: 10px;
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
          background: #fff100;
          border-radius: 10px;
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
  name: 'section6',

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
          img: require('./s5/06_img_1.jpg'),
        },
        {
          img: require('./s5/06_img_2.jpg'),
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
      if (this.viewIndex === 6) {
        this.slideIndex = 0
      }
    },
  },
}
</script>
