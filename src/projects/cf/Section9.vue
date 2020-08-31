<template>
  <div>
    <div class="section9">
      <div
        class="pagination absolute flex-ac"
        data-aos="fade-left"
        data-aos-delay="800"
        v-if="isPC"
      >
        <div
          :class="`pagination-dot`"
          v-for="(slide, index) in slideList[tabIndex]"
          :key="slide.img + '-dot' + tabIndex"
          @click="goTo(index)"
        ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
      <div class="tab-groups absolute flex-ac flex-jb">
        <div class="tab" @click="tabIndex = 0">
          <div>2房2衛</div>
          <span>A1/A7/B1/B7</span>
        </div>
        <div class="tab" @click="tabIndex = 1">
          <div>2房</div>
          <span>A3/A5/B3/B5</span>
        </div>
        <div class="tab" @click="tabIndex = 2">
          <div>3房</div>
          <span>
            A2/B2
            <span>A6/B6<br />
              <!-- <span>格局略有不同</span> -->
            </span>
          </span>
        </div>
      </div>
      <transition-group
        name="swipe-fade"
        mode="out-in"
      >
        <img
          v-for="(tabImg, i) in tabList"
          :key="'tabImg' + i"
          :src="tabImg"
          v-show="tabIndex === i"
          class="tab-img absolute"
        >
      </transition-group>
        <div
          class="swipe absolute"
          data-aos="fade-up"
          data-aos-delay="200"
          @mouseenter.stop="toggleTimer = false"
          @mouseleave.stop="toggleTimer = true"
        >
          <!-- v-touch:swipe.left="decIndex(tabIndex)"
        v-touch:swipe.right="addIndex(tabIndex)" -->
          <div class="swipe-wrap relative">
            <transition-group
              name="swipe-fade"
              mode="out-in"
            >
              <div
                v-for="(slide, i) in slideList[tabIndex]"
                v-show="slideIndex === i"
                :key="slide.img"
                :class="`swipe-item absolute`"
              >
                <img
                  :src="slide.img"
                  alt=""
                >
                <div
                  class="name absolute"
                  v-html="slide.name"
                ></div>
              </div>
            </transition-group>
            <div
              class="swipe-btns absolute flex-ac flex-jb"
              v-if="isMobile"
            >
              <img
                src="./all/prev-btn.png"
                alt=""
                class="prev-btn"
                @click="decIndex(tabIndex)"
              >
              <img
                src="./all/next-btn.png"
                alt=""
                class="next-btn"
                @click="addIndex(tabIndex)"
              >
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  height: size(971);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
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

.tab-groups {
  width: size(152 * 3 + 28);
  top: size(118);
  right: size(178);

  .tab {
    width: size(152.8);
    height: size(75.8);
    border: solid 2px #c9ac94;
    padding-top: size(5);
    cursor: pointer;

    &:hover, &:active {
      background-color: #c9ac94;
      div, span {
        color: #fff;
      }
    }

    div {
      font-size: size(30);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: size(2.4);
      text-align: center;
      color: #d6aa99;
    }

    span {
      font-size: size(20.6);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: size(-0.41);
      text-align: left;
      color: #c9ac94;

      span {
        font-size: size(13.7);
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: size(-0.27);
        text-align: left;
        color: #c9ac94;

        // span {
        //   font-size: size(6.1);
        //   font-weight: normal;
        //   font-stretch: normal;
        //   font-style: normal;
        //   line-height: 1.2;
        //   letter-spacing: size(1.23);
        //   text-align: left;
        //   color: #717071;
        // }
      }
    }
  }
}

.tab-img {
  width: size(500);
  top: size(207);
  right: size(178);
}

/* Swipe */
.swipe {
  width: size(1030);
  top: size(117);
  left: size(179);
  height: size(674);
  min-height: size(674);
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

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(14.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
    text-align: center;
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
  top: size(837);
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
    box-shadow: 0 0 0 1px #d6aa99;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #d6aa99;
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
        background: #d6aa99;
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
    height: sizem(279 + 382);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img {
    width: sizem(283);
    top: sizem(14.5);
    left: sizem(24);
    z-index: 1;
  }

  .red {
    width: sizem(108);
    top: sizem(181);
    right: sizem(-50);
    z-index: 1;
  }

  .title {
    width: sizem(238);
    top: sizem(21);
    left: sizem(105);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
  }

  .tree {
    width: sizem(202);
    top: sizem(287);
    left: sizem(0);
    z-index: 0;
  }

  /* Swipe */
  .swipe {
    width: sizem(330);
    height: sizem(279);
    min-height: sizem(279);
    top: sizem(382);
    left: sizem(23);
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
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

  // mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      toggleTimer: true,
      tabIndex: 0,
      tabList: [
        require('./s9/1_t.jpg'),
        require('./s9/2_t.jpg'),
        require('./s9/3_t.jpg'),
      ],
      slideIndex: 0,
      slideList: [
        [
          {
            img: require('./s9/1-1.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-2.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-3.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-4.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-5.jpg'),
            name: '',
          },
        ],
        [
          {
            img: require('./s9/1-1.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-2.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-3.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-4.jpg'),
            name: '',
          },
          {
            img: require('./s9/1-5.jpg'),
            name: '',
          },
        ],
        [
          {
            img: require('./s9/3-1.jpg'),
            name: '',
          },
          {
            img: require('./s9/3-2.jpg'),
            name: '',
          },
          {
            img: require('./s9/3-3.jpg'),
            name: '',
          },
          {
            img: require('./s9/3-4.jpg'),
            name: '',
          },
          {
            img: require('./s9/3-5.jpg'),
            name: '',
          },
          {
            img: require('./s9/3-6.jpg'),
            name: '',
          },
        ],
      ],
    }
  },

  methods: {
    goTo(index) {
      this.slideIndex = index
    },
    addIndex(tabIndex) {
      this.slideIndex =
        this.slideIndex === this.slideList[tabIndex].length - 1
          ? 0
          : this.slideIndex + 1
    },

    decIndex(tabIndex) {
      this.slideIndex =
        this.slideIndex === 0
          ? this.slideList[tabIndex].length - 1
          : this.slideIndex - 1
    },
  },

  created() {
    // setInterval(() => {
    //   if(this.toggleTimer) {
    //     if (this.slideList) {
    //       this.addIndex(this.tabIndex)
    //     }
    //   }
    // }, 5000)
  },

  mounted() {},

  computed: {},
}
</script>
