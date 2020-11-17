<template>
  <div class="section6">
    <img src="./s6/bg.jpg" alt="" class="bg-img">
    <h3 class="label flex-c">
      漾建築
    </h3>
    <h3 class="title1">
      純粹49戶豪宅規格
    </h3>
    <h3 class="title2">
      新手成家輕價格
    </h3>
    <hr>
    <h3 class="desc">
      石材氣派基座、挑高6米大廳，精品旅店式休閒設施--健身房、空中花園、親子遊戲室…，全棟僅精選49戶優質好鄰，與億元豪宅同享尊榮居住禮遇。
    </h3>
    <h3 class="txt">
      3D參考示意圖
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
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

.label {
  @include div_l_pc(184, 81, 67 + 90, 191);
  border: solid 1.2px #6e3a1d;
  font-size: size(45);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #6e3a1d;
  border-radius: 40px / 40px;
}

.title1 {
  @include img_l_pc(440, 171 + 90, 880);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title2 {
  @include img_l_pc(440, 233 + 90, 1055);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

hr {
  @include img_r_pc(687, 396, 444);
  border: solid 2px #ffffff;
}

.desc {
  @include img_r_pc(581, 330 + 90, 460);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(28);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.66;
  letter-spacing: size(3.53);
  text-align: left;
  color: #ffffff;
}

.txt {
  @include img_r_pc(187, 980, 25);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.61);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
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
  .section6 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: sizem(700);
    max-height: sizem(812);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }
  .txt {
    width: sizem(310);
    top: sizem(30);
    right: sizem(33);
    left: auto;
    font-size: sizem(15);
    z-index: 2;
  }

  .title {
    font-size: sizem(25);
  }

  .hr {
    height: sizem(2);
  }

  .desc {
    font-size: sizem(15);
    letter-spacing: 0.05em;
  }

  .art {
    font-size: sizem(35.2);
    text-align: center;
    letter-spacing: -0.01em;
  }

  .btn-group {
    /*
   width: sizem(303 + 8);
    top: sizem(396);
    right: sizem(33);
    z-index: 6; */
    z-index: 4;
    justify-content: space-between;
    margin-top: 0.6em;

    .btn {
      width: sizem(150);
      height: sizem(35);
      font-size: sizem(16);
      letter-spacing: 0.1em;
      margin: 0;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    //height: sizem(750);
    // min-height: sizem(750);
    top: sizem(0);
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
    z-index: 0;
    height: sizem(750);
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: sizem(750);
      bottom: 0;
      left: 0;
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
    z-index: 1;

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
  name: 'section6',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: isMobile ? require('./mo/6/bg.jpg') : require('./s6/1.jpg'),
      //     mode: 'dark',
      //     // name: '成功大學',
      //   },
      //   {
      //     img: isMobile ? require('./mo/6/bg2.jpg') : require('./s6/2.jpg'),
      //     mode: 'light',
      //     // name: '崑山科技大學',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
