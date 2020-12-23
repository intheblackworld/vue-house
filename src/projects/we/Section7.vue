<template>
  <div class="section7">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="w-block"></div>
    <img src="./s7/最WE Style的家.png" alt="最WE Style的家" class="logo">
    <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isPC">
      1-2-3自由配 量身訂製你的家
    </div>
    <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isMobile">
      1-2-3自由配<br />量身訂製你的家
    </div>
    <div class="line absolute" data-aos="fade" data-aos-delay="200"></div>
    <div class="desc absolute" data-aos="fade-up" data-aos-delay="300">
      住宅內裝客製化，從大門到地坪，從臥室到衛浴，建材隨你自由配，
      打造出最有型有款的訂製宅，讓家有自己的STYLE，有開心的玩法。
    </div>
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(900 + 120);
  max-height: size(1080);
  position: relative;
  // background: #fff;
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
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.w-block {
	background-color: #fff;
	@include div_l_pc(1874, 900, 0, 0);
}

.logo {
  @include img_r_pc(677, 90, 209);
}

.title {
  @include img_r_pc(404, 332 + 50, 416);
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.5);
  text-align: left;
  color: #055e9b;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(610, 420 + 50, 210);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(0.9);
  text-align: left;
  color: #666666;
  // white-space: nowrap;
}
.line {
  @include img_r_pc(610, 398 + 50, 210);
  background-color: #888;
  height: size(2);
}

/* Swipe */
.swipe {
  width: size(830);
  height: size(560);
  top: size(229);
  left: size(210);
  object-fit: cover;
  z-index: 2;
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

  .slide-name {
    right: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
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
  bottom: size(248);
  left: calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
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
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: url('./s2/dot.png');
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
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
          img: require('./s7/1.jpg'),
          name: '室內裝修參考示意圖',
        },
        {
          img: require('./s7/2.jpg'),
          name: '室內裝修參考示意圖',
        },
        {
          img: require('./s7/3.jpg'),
          name: '室內裝修參考示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 5) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
