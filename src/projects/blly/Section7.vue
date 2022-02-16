<template>
    <div class="section7">
      <img v-if="isPC" class="bg-img" src="./newspc/7.jpg" alt="八里龍躍_1">
      <img v-if="isMobile" class="bg-img" src="./newsmo/7.jpg" alt="八里龍躍_1">
<div class="txt absolute">
      <h3 class="title">
        靈魂之窗的饗宴
      </h3>
      <h3 class="subtitle">
        28.51.62.141坪 戶戶超級景觀
      </h3>
      <span class="desc">
        買屋最擔心的就是室內閣局不符合使用需求，「八里龍躍」所提供的半客製化服務，包括選擇磁磚、室內隔間裝潢都可以依照你的需求跟設計師一對一溝通選擇您想要的樣式與風格，堪稱最溫馨的住宅服務。
      </span>
      <div class="b-txt">
        購屋前一定要來八里龍躍看一看
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.cls-1 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2.01px;
  width: size(199);
  height: size(211);
  left: size(652);
  bottom: size(0);
  animation: letterDraw1 0.5s linear 1s forwards;
  stroke-dasharray: 1536;
  stroke-dashoffset: 1536;
}
@keyframes letterDraw1 {
  to {
    stroke-dashoffset: 0;
  }
}
.section7 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
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

  &:nth-child(1) {
    position: relative;
  }
}
.txt{
  width: size(635);
  font-stretch: normal;
  font-style: normal;
  bottom: size(240);
  left: size(80);
  text-align: justify;}

.title {
  font-size: size(55.1);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: size(3.31);
  color: #FFF;
  background: #ff0000;
 // white-space: nowrap;text-shadow: 0 0 0.2em #FFF, 0 0 0.7em #FFF;
}
.subtitle {
  color: #FFF;
  background: #ff0000;
}
.desc {
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.06em;
  text-align: justify;
  color: #FFF;
  background: #ff0000;
  //text-shadow: 0 0 0.2em #FFF, 0 0 0.7em #FFF;
}

/* Swipe */
.swipe {
  width: 100%;
  height: 100%;
  top: 0;
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
}

.pagination {
  width: auto;
  bottom: size(42);
  right: size(40);
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
  .section7 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height:  sizem(607);
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .dark-block {
    display: block;
    width: 100%;
    height: 100%;
    bottom: auto;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  .title {
    width: sizem(218);
    top: sizem(57);
    top: calc(50% + (57 - 604 * .5) * 100vw / 375);
    left: sizem(32);
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing: sizem(1.5);
    text-align: left;
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: calc(50% + (121 - 604 * .5) * 100vw / 375);
    left: sizem(32);
    font-size: sizem(15);
  }

  .hr {
    width: sizem(310);
    height: 1px;
    background-color: #fff;
    top: sizem(106);
    right: auto;
    left: sizem(32);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: 100%;
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
    height: 100%;
    z-index: 0;

    .img1 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img2 {
      width: 100vw;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 5;
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
  name: 'section7',

  mixins: [slider],
  props: ['viewIndex'],
  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile ? require('./m/4/1.jpg') : require('./s4/1.jpg'),
        },
        {
          img: isMobile ? require('./m/4/2.jpg') : require('./s4/2.jpg'),
        },
        {
          img: isMobile ? require('./m/4/3.jpg') : require('./s4/3.jpg'),
        },
        {
          img: isMobile ? require('./m/4/4.jpg') : require('./s4/4.jpg'),
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
