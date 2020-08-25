<template>
  <div>
    <div class="section4">
      <img
        src="./s4/資產 1914.png"
        alt=""
        class="img absolute"
        data-aos="fade-right"
        data-aos-delay="0"
      >
      <img
        src="./s4/資產 2014.png"
        alt=""
        class="tree absolute"
        data-aos="fade-right"
        data-aos-delay="600"
      >
      <div class="title absolute" data-aos="fade-right"
        data-aos-delay="400">6分鐘 生活圈全滿足</div>
      <div
        class="swipe absolute"
        data-aos="fade-up"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <transition-group
            name="swipe-fade"
            mode="out-in"
          >
            <div
              v-for="(slide, i) in slideList"
              v-show="slideIndex === i"
              :key="slide.img"
              :class="`swipe-item absolute`"
            >
              <img
                :src="slide.img"
                alt=""
              >
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
          </div> -->
        </div>
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up"
        data-aos-delay="200">
        <div
          :class="`pagination-dot`"
          v-for="(slide, index) in slideList"
          :key="slide.img + '-dot'"
          @click="goTo(index)"
        ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(971);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
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
  width: size(582);
  top: size(75);
  right: size(169);
}

.tree {
  width: size(534);
  top: size(525);
  left: size(0);
  z-index: 1;
}

.title {
  width: size(399);
  top: size(98);
  right: size(191);
  font-size: size(42);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 2.54px;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

/* Swipe */
.swipe {
  width: size(889);
  height: size(751);
  min-height: size(751);
  top: size(87);
  left: size(178);
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
    height: sizem(300 + 303);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .swipe {
    width: 100vw;
    height: sizem(300);
    top: sizem(0);
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;
    object-fit: cover;

    img {
      width: 100%;
    }

    &.base {
      z-index: 1;
      left: 0;
      opacity: 1;
    }
    &.active {
      z-index: 2;
      left: 0;
      opacity: 1;
    }
  }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
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
          width: 60%;
          height: 60%;
          display: block;
          background: #fff;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 20%;
          // transform: translateY(-50%);
          left: 23%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: size-m(15);
      cursor: pointer;
    }
  }

  .name {
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: 3.12px;
    text-align: left;
    color: #ffffff;
    z-index: 5;
  }

  .title {
    writing-mode: initial;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-top: sizem(32 + 300);
    margin-left: sizem(56);
  }

  .toggle-list {
    width: sizem(324);
    margin: 0 auto;
    margin-top: sizem(10);
  }

  .toggle-item {
    width: 100%;
    height: sizem(90);
    border-top: solid 1px rgba(142, 138, 116, 0.5);
    border-bottom: solid 1px rgba(142, 138, 116, 0.5);

    // &:nth-last-child(1) {
    //   border-top: none;
    // }
  }

  .toggle-title {
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.09;
    letter-spacing: 0.4px;
    text-align: left;
    color: #333333;
  }

  .toggle-btn {
    background-color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    &:before {
      content: '';
      background: #707070;
      width: 1px;
      height: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &:after {
      content: '';
      background: #707070;
      width: 14px;
      height: 1px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  .butterfly {
    width: sizem(52);
    top: sizem(307);
    right: auto;
    left: 0;
  }
  .line {
    width: sizem(330);
    top: auto;
    bottom: sizem(10);
    right: auto;
    left: 0;
  }
  .leaf {
    width: sizem(163);
    top: auto;
    bottom: sizem(-90);
    right: sizem(-20);
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .dialog-content {
      width: sizem(340);
      height: sizem(556);
      background-color: #fff;
      border-radius: 20px;
      padding: sizem(15);
      overflow: scroll;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: absolute;
      right: sizem(30);
      top: sizem(68);
    }

    .dialog-title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-top: sizem(45);
    }
    .dialog-subtitle {
      font-size: sizem(20);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.09;
      letter-spacing: 1.6px;
      text-align: left;
      color: #333333;
      margin-top: sizem(10);
    }
    .dialog-smalltitle {
      font-size: sizem(18);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.33;
      letter-spacing: 3.24px;
      text-align: left;
      color: #8e8a74;
    }
    .dialog-desc {
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.17;
      letter-spacing: normal;
      text-align: left;
      color: #8e8a74;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/資產 1414.jpg'),
        },
        {
          img: require('./s4/資產 1614.jpg'),
        },
        {
          img: require('./s4/資產 1714.jpg'),
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
