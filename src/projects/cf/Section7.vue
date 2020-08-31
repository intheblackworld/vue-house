<template>
  <div>
    <div class="section7">
      <!-- <img
        src="./s1/資產 2914.png"
        alt=""
        class="img absolute"
      > -->
      <!-- <img
        src="./s2/icon.png"
        alt=""
        class="icon absolute"
        data-aos="fade-left-up"
        data-aos-delay="800"
      > -->
      <div
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="0"
      >18-22坪‧德國精品家</div>
      <div
        class="subtitle absolute"
        data-aos="fade-right"
        data-aos-delay="200"
      >全能智慧宅｜建材優勢全面躍昇</div>
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >「一筆箍」柱結構工法、戴雲發AlfaSafe柱中柱、工研院研發抗壓耐震防火輕質系統磚、世界第一大品牌RAK磁磚、5合1AI智慧門鎖、林內三機、德國精品內裝，盡享安全穩固、時尚精品居家質地。</div>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(968);
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
  width: size(419);
  top: size(112);
  left: size(371);
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

.subtitle {
  width: size(519);
  top: size(182);
  left: size(376);
  font-size: size(32);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 5.17px;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;
}

.desc {
  width: size(650);
  top: size(127);
  left: size(959);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.32;
  letter-spacing: 1.6px;
  text-align: left;
  color: #4d4d4d;
}

.icon {
  width: size(76);
  top: size(95);
  left: size(314);
}

.img {
  width: size(216);
  top: size(23);
  left: size(-108);
}

/* Swipe */
.swipe {
  width: size(1292);
  height: size(542);
  min-height: size(542);
  top: size(299);
  left: size(314);
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
  bottom: size(107);
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
  .section7 {
    width: 100vw;
    height: sizem(464 + 286);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    width: sizem(260);
    top: sizem(61);
    left: sizem(54);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    width: sizem(309);
    top: sizem(101);
    left: sizem(34);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: 2.2px;
    text-align: left;
    color: #3e3a39;
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: sizem(149);
    left: sizem(34);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: left;
    color: #4d4d4d;
  }

  .icon {
    width: sizem(73);
    top: sizem(31);
    left: sizem(23);
  }

  .img {
    width: size(216);
    top: size(23);
    left: size(-108);
    display: none;
  }
  .swipe {
    width: 100vw;
    height: sizem(464);
    top: sizem(286);
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

    img {
      width: 100%;
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      slideList: [
        {
          img: isPC ? require('./s7/1.jpg') : require('./s7/1_m.jpg'),
        },
        {
          img: isPC ? require('./s7/2.jpg') : require('./s7/2_m.jpg'),
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
