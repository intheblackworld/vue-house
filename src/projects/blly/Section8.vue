<template>
  <div>
    <div class="section8">
      <div class="btn-group flex-c absolute" v-if="isPC">
        <div
          :class="`btn ${slideIndex === index ? 'active' : ''}`"
          v-for="(slide, index) in slideList"
          :key="slide.img"
        >
          <div
            class="btn-inner"
            v-html="slide.title"
            @click="goTo(index)"
          ></div>
        </div>
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-up"
        data-aos-delay="600"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div
          class="swipe-wrap relative"
          v-touch:swipe.left="decIndex"
          v-touch:swipe.right="addIndex"
        >
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
      <div
        class="title absolute"
        v-html="slide.title"
      ></div>
      <div
        class="desc absolute"
        v-html="slide.desc"
      ></div>
            </div>
          </transition-group>
          <div
            class="pagination absolute flex-ac"
            data-aos="fade-up"
            data-aos-delay="200"
            v-if="isPC"
          >
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .title {
  b{text-orientation: initial;}
  }
  
  </style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(825);
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

.title {
  writing-mode: vertical-lr;
  text-orientation: upright;
  // width: size(419);
  top: size(90);
  right: size(85);
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

.desc {
  width: size(240);
  top: size(500);
  right: size(20);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.92px;
  text-align: justify;
  color: #4d4d4d;
}

.icon {
  width: size(76);
  bottom: size(54);
  right: size(307);
  transform: rotate(180deg);
}

.img {
  width: size(216);
  bottom: size(44);
  right: size(-108);
}

.btn-group {
  // width: size();
  top: size(0);
  left: size(303);
}
.btn {
  position: relative;
  width: size(227);
  height: size(63);
  font-size: size(21);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: size(1.87);
  text-align: center;
  color: #717071;
  margin-right: size(30);
  cursor: pointer;

  &:before {
    z-index: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #cb0012;
    // border: 2px solid #000;
  }

  .btn-inner {
    width: size(227);
    //height:
    z-index: 1;
    position: relative;
    padding: 0.35em 0 ;
    background-color: #d2d1ce;
    border: 2px solid #717071;
    transition: transform 0.4s ease;
  }

  &:hover,
  &.active {
    .btn-inner {
      transform: translate(-6px, -6px);
    }
  }
}

/* Swipe */
.swipe {
  width: size(1300);// size(1024);
  height: size(675);
  min-height: size(675);
  top: size(102);
  left: size(301);
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
    width:78.6%;
    float: left;
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
  bottom: size(10);
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
  .section8 {
    width: 100vw;
    height: sizem(476);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .swipe {
    width: 100vw;
    height: sizem(476);
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
    transition: opacity 1s ease-in-out;
    object-fit: cover;

    img {top: sizem(229);
      width: 100%;
      position: relative;
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
    height: 30%;
    padding: 0 10px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: size-m(15);
      cursor: pointer;
    }
  }

  .title {
    width: sizem(184);
    top: sizem(37);
    left: sizem(35);
    right: auto;
    writing-mode: initial;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
    margin-top: 0;
    margin-left: 0;
  }

  .desc {
    width: sizem(312);
    top: sizem(115);
    right: auto;
    left: sizem(36);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: justify;
    color: #4d4d4d;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],

  data() {
    return {
      isPC, 
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/1.jpg'),
          title: '德國第一品牌<br />太格精工木地板',
          desc: '擁有120年歷史，全球最大木業集團生產商，榮獲綠建材標章，耐磨、防滑、隔音佳，德國精工高品質生產製造',
        },
        {
          img: require('./s8/2.jpg'),
          title: '德國原裝進口<br /><b>impuls</b>精品廚具',
          desc: '成立於1990年，產品遍佈全球50個國家和地區，堅持德國工藝精神，榮獲德國golden M、GS等多項認證，結合天然環保無毒板材，打造健康空間',
        },
        {
          img: require('./s8/3.jpg'),
          title: '飯店級高雅享受<br />德國<b>Innoci</b>時尚衛浴',
          desc: '融合國際輕奢年輕的設計概念，德國釉料配方，易潔、抑菌、質感細膩柔滑，讓浴室空間更為時尚高雅',
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
