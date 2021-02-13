<template>
  <div class="section7">
    <img src="./s7/07_img.jpg" :alt="`${info.caseName}_img`" class="img">
    <div class="title">
      空間很有味<br />
      好宅一次到位
    </div>
    <div class="hr"></div>
    <div class="subtitle">
      北歐風格美學<br />
      簡潔框景建築
    </div>
    <div class="desc">
      以北歐風格簡潔美學營造建築大器立面，水平橫幅延伸視野，流動著晨昏的光影與季節的變換大地色系交織白色框景，俐落身段雋永耐看。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(1130);
  max-height: size(1130);
  position: relative;
  background: #545454;
  z-index: 2;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
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
.img {
  @include img_l_pc(986, 0, 0);
  height: size(1130);
  object-fit: cover;
}

.title {
  @include img_r_pc(338, 285, 298);
  font-size: size(53.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(3.22);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(256, 524, 338);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(438, 691, 238);
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 2.08px;
  text-align: left;
  color: #ffffff;
}
.hr {
  @include img_r_pc(46, 489, 442);
  border-bottom: solid size(5) #009fb1;
}

// /* Swipe */
// .swipe {
//   width: size(830);
//   height: size(560);
//   top: size(229);
//   left: size(210);
//   object-fit: cover;
//   z-index: 2;
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
//     height: 100%;
//     object-fit: cover;
//   }

//   .slide-name {
//     right: 1.5em;
//     bottom: 1em;
//     color: #fff;
//     font-size: size(15);
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1;
//     letter-spacing: 0.89px;
//     text-align: left;
//     color: #ffffff;
//     text-shadow: 0 0.1em 0.3em #000;
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
//   width: auto;
//   bottom: size(248);
//   left: calc(50% + 6.95vw);
//   justify-content: center;
// }

// .pagination-dot {
//   padding: 5px;
//   margin: 0 5px;
//   cursor: pointer;
//   z-index: 4;

//   span {
//     display: block;
//     width: 15px;
//     height: 15px;
//     border-radius: 0px;
//     box-shadow: 0 0 0 5px #ccc;
//     border-radius: 15px;
//     position: relative;
//     // background-color: #ccc;
//     transition: all 0.5s;

//     &::before {
//       content: '';
//       width: 60%;
//       height: 60%;
//       display: block;
//       background: transparent;
//       // border-radius: 20px;
//       opacity: 1;
//       position: absolute;
//       top: 20%;
//       // transform: translateY(-50%);
//       left: 20%;
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
//         box-shadow: 0 0 0 5px #000;
//         border-radius: 15px;
//         background-image: #000;
//         background-size: 70% 70%;
//         background-position: center;
//         background-repeat: no-repeat;
//         // border-radius: 20px;
//         opacity: 1;
//         position: absolute;
//         top: 0%;
//         // transform: translateY(-50%);
//         left: 0%;
//         transform: scale(1.1);
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
  .section7 {
    width: 100vw;
    height: sizem(722);
    min-height: auto;
    max-height: initial;
    background-color: #fff;
  }

  .logo {
    @include img_r_m(310, 67, 18);
  }

  .title {
    @include img_r_m(189, 437, 152);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.25);
    text-align: left;
    color: #055e9b;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(310, 538, 32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #666666;
    // white-space: nowrap;
  }
  .line {
    @include img_r_m(310, 522, 32);
    background-color: #888;
    height: sizem(2);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(250);
    min-height: auto;
    top: sizem(150);
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
    .slide-name {
      right: 1em;
      font-size: sizem(13);
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
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

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
      //     img: require('./s7/1.jpg'),
      //     name: '室內裝修參考示意圖',
      //   },
      //   {
      //     img: require('./s7/2.jpg'),
      //     name: '室內裝修參考示意圖',
      //   },
      //   {
      //     img: require('./s7/3.jpg'),
      //     name: '室內裝修參考示意圖',
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
