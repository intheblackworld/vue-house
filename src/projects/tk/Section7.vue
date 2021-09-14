<template>
  <div class="section7">
    <div class="border-top">
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <!-- <img src="./s5/n.png" alt="" class="slide-btn" v-if="slideIndex === 0" @click="goTo(1)">
        <img src="./s5/s.png" alt="" class="slide-btn"  v-if="slideIndex === 1"  @click="goTo(0)"> -->
        <!-- <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <!-- <div class="border">
    </div> -->
    <div class="label">
      飯店公設管理
    </div>
    <div class="title">
      20項豐富公設 24小時飯店管理<br />尊榮感提升儀式感 讓生活 回家就開始
    </div>
    <!-- <div class="line"></div> -->
    <h3 class="subtitle">
      樂部規劃！鋼琴lounge bar、TV沙發區…享樂，不同以往。
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section7 {
  width: 100%;
  height: size(1125);
  position: relative;
  background-color: #3e2855;
  background-image: url('./s7/bg.png');
  background-size: cover;
  background-attachment: fixed;
  // background-size: cover;
  // background-position: 100%;
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
}

.border {
  @include div_c_pc(1450, 820, 200);
  border: 2px solid #c9a063;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(34) size(34) 0 0;
    border-color: #c9a063 transparent transparent transparent;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 size(34) size(34);
    border-color: transparent transparent #c9a063 transparent;
  }
}

.border-top {
  @include img_c_pc(1190, 73);
  border: 2px solid #c9a063;
}

.line {
  @include img_l_pc(128, 50, 848);
  transform: rotate(90deg);
}

.label {
  @include img_c_pc(297, 203);
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(16.2);
  text-align: center;
  color: #fff;
  white-space: nowrap;
}

.title {
  @include img_c_pc(874, 274);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: size(4.8);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(668, 432);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(1.2);
  text-align: right;
  color: #fff;
  white-space: nowrap;
}

/* Swipe */
.swipe {
  @include div_c_pc(1920, 560, 0);
  top: auto;
  bottom: 0;
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
  // overflow: hidden;
}

.slide-btn {
  @include img_r_pc(100, 30, 30);
  cursor: pointer;
  z-index: 10;
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

  .slide-name {
    right: 20px;
    bottom: 0px;
    color: #fff;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.11;
    letter-spacing: 0.89px;
    text-align: left;
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
  top: auto;
  left: 0;
  right: 0;
  bottom: size(20);
  z-index: 2;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
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
      box-shadow: 0 0 0 1px #fff;
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
    width: size(72);
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
    height: sizem(578 + 250);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img {
    @include img_l_m(375, 0, 0);
    height: sizem(250);
    object-fit: cover;
  }

  .content {
    @include div_l_m(346, 250, 240, 12);
    background-color: #100b09;

    .t_bg {
      @include img_r_m(220, 0, 0);
      top: auto;
      bottom: 0;
    }
  }

  .border {
    @include div_l_m(346, 250, 245, 17.8);
    border: 2px solid #866231;
  }

  .title {
    @include img_l_m(231, 265, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(310, 340, 33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #ffffff;
    white-space: normal;
  }

  .desc {
    @include img_c_m(310, 250 + 265);
    font-size: sizem(15);
    line-height: 1.98;
    letter-spacing: 0.18em;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      slideList: [
        {
          img: require('./s7/1.jpg'),
          name: '公設3D外觀合成模擬圖',
        },
        {
          img: require('./s7/2.jpg'),
          name: '公設3D外觀合成模擬圖',
        },
        {
          img: require('./s7/3.jpg'),
          name: '公設3D外觀合成模擬圖',
        },
        {
          img: require('./s7/4.jpg'),
          name: '公設3D外觀合成模擬圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
