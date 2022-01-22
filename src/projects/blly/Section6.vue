<template>
  <div>
    <div class="section6">
      <img v-if="isPC" class="bg-img" src="./newspc/6.jpg" alt="八里龍躍_1">
      <img v-if="isMobile" class="img absolute" src="./s6/img.jpg" alt="八里龍躍_1" data-aos="fade" data-aos-delay="200">

      <h3 class="title absolute">
        至此境 得從容 享自在
      </h3>
      <div class="desc absolute">
        大台北盆地外唯一能深呼的環境
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
.section6 {
  width: size(1920);
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

.title {
  width: size(700);
  top: size(70);
  right: size(10);
  font-size: size(60);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.31);
  text-align: left;
  color: #fe0000;
  white-space: nowrap;
  text-shadow: 0 0 0.2em #FFF, 0 0 0.7em #FFF;
  
}
.desc {
  width: size(700);
  top: size(160);
  right: size(10);
  font-size: size(38);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.15em;
  text-align: justify;
  color: #000;
  text-shadow: 0 0 0.2em #FFF, 0 0 0.7em #FFF;
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
  .section6 {
    width: 100vw;
    min-height: sizem(0);
    max-height: sizem(812);
    height: sizem(400);
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

  .img {
    width: sizem(355);
    top: sizem(160);
    left: sizem(10);
  }


  .title {
    width: sizem(310);
    top: sizem(50);
    left: sizem(32);
    font-size: sizem(28.5);
    line-height: 1.44;
    letter-spacing: sizem(1.8);
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: sizem(90);
    left: sizem(32);
    font-size: sizem(18);
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
  name: 'section6',

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
