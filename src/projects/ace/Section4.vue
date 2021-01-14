<template>
  <div class="section4">
    <img src="./s4/bg.jpg" :alt="`${info.caseName}_bgimg`" class="bg-img">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
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
    min-height: sizem(1791);
    height: sizem(1791);
  }
  .logobg1 {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(352,  380, 294,  0);
    // background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .logobg2 {
    @include div_r_m(352,  380, 832,  0);
    // background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .logobg3 {
    @include div_r_m(352,  380, 1373, 0);
    // background-image: url('./s1/logobg.png');
    background-size: cover;
  }
  .label {
    @include div_r_m(145, 64, 30, 30);
    border: solid 1.2px #6e3a1d;
    font-size: sizem(34);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #6e3a1d;
    border-radius: 40px / 40px;
  }

  .title {
    margin-top: sizem(66);
    font-size: sizem(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.08);
    text-align: center;
    color: #ec6300;
    margin-left: sizem(-20);
    white-space: nowrap;
  }

  hr {
    width: sizem(269);
    height: 0;
    border: solid 2px #f6ab00;
    margin: 15px;
    margin-left: sizem(30);
  }

  .desc {
    width: sizem(250);
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.89);
    text-align: justify;
    color: #231815;
  }

  .b1 {
    @include img_l_m(132, 60, -20);
  }

  .b2 {
    @include img_l_m(134, 560, 25);
  }

  .b3 {
    @include img_l_m(62, 548, 270);
  }

  .b4 {
    @include img_l_m(62 , 1117, 63);
    z-index: 3;
  }
.img {
    @include img_l_m(450 , 1000, 250);
}

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(250, 1500, 10);
    animation: an 2.5s infinite alternate;
  }

  /* Swipe */
  .swipe {
    width: sizem(355);
    height: sizem(222);
    top: 0;
    right: sizem(0);
    object-fit: cover;
    z-index: 1;

    &.swipe1 {
      top: sizem(115);
      left: sizem(10);
    }

    &.swipe2 {
      top: sizem(652);
      right: auto;
      left: sizem(10);
    }
    &.swipe3 {
      top: sizem(1193);
      left: sizem(10);
    }
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
    }
    .name {
      right: 1.5em;
      bottom: 1em;
      font-size: sizem(12);
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 0.89px;
      text-align: left;
      color: #fff;
      text-shadow: 0 0.1em 0.3em #000;
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
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
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
          background: #bd2b27;
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
  name: 'section4',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        // {
        //   img: require('./s4/1-4.jpg'),
        //   name: '全聯',
        // },
        // {
        //   img: require('./s4/1-5.jpg'),
        //   name: '愛買',
        // },
        // {
        //   img: require('./s4/1-2.jpg'),
        //   name: '力行市場',
        // },
        // {
        //   img: require('./s4/1-1.jpg'),
        //   name: 'IKEA宜家家具',
        // },
        // {
        //   img: require('./s4/1-3.jpg'),
        //   name: '家樂福',
        // },
      ],

      slideList2: [
        // {
        //   img: require('./s4/2-1.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-5.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-4.jpg'),
        //   name: '大台北都會公園',
        // },
        // {
        //   img: require('./s4/2-2.jpg'),
        //   name: '穀保家商',
        // },
        // {
        //   img: require('./s4/2-3.jpg'),
        //   name: '二重國小',
        // },
      ],

      slideList3: [
        // {
        //   img: require('./s4/3-1.jpg'),
        //   name: '捷運三重站',
        // },
        // {
        //   img: require('./s4/3-3.jpg'),
        //   name: '機捷三重站',
        // },
        // {
        //   img: require('./s4/3-4.jpg'),
        //   name: 'U-bike站',
        // },
        // {
        //   img: require('./s4/3-2.jpg'),
        //   name: '新北環快',
        // },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
