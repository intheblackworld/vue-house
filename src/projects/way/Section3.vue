<template>
  <div>
    <div class="section3">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div> -->
        </div>
      </div>
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400">
        對味的好生活<br />
        <span>Coming soon!</span>
      </div>
      <!-- <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isMobile">
      </div> -->
      <div class="btn" data-aos="fade-down" data-aos-delay="200"></div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="400">
        <span class="big">2-3</span> <span>房 新登場</span><span class="border">|</span> <span>早預約 享優惠</span><br />
        <span class="small">預約專線</span> <span class="number">02.2670-7777</span>
      </div>
      <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  max-height: size(1080);
  position: relative;
  background: transparent;
  min-height: size(1080);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
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
  @include img_l_pc(700, 273, 117);
  font-size: size(62);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: size(-0.62);
  text-align: center;
  color: #008796;
  white-space: nowrap;

  span {
    font-weight: 500;  font-family: KhmerMN;
    font-size: 1.387em;
  }
}

.subtitle {
  @include img_l_pc(700, 547, 117);
  font-size: size(53);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height:1.3;
  letter-spacing:-0.03em;
  text-align: center;
  color: #008796;
  white-space: nowrap;
  > * {
    height:1.472em;
    //line-height: size(78);
    vertical-align: middle;
  //  display: inline-block;
  }

  .big {
    font-size:1.28em;
    font-weight: 700;
    // line-height: 1.79;
    letter-spacing: 0;
  }
  .border {
    font-size:0.453em;
    text-align: center;
    margin: 0 0.5em;
  }

  .small {
    font-size: 0.85em;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    letter-spacing:0.01em;
    text-align: center;
  }

  .number {
    font-weight: 700;
    margin-left:0.28em;
  }
}

.btn {
  @include div_l_pc(700, 110 + 135, 240, 117);
  background: linear-gradient(to right, #008796 size(15), transparent size(15)) 0 0,
    linear-gradient(to right, #008796 size(15), transparent size(15)) 0 100%,
    linear-gradient(to left, #008796 size(15), transparent size(15)) 100% 0,
    linear-gradient(to left, #008796 size(15), transparent size(15)) 100% 100%,
    linear-gradient(to bottom, #008796 size(15), transparent size(15)) 0 0,
    linear-gradient(to bottom, #008796 size(15), transparent size(15)) 100% 0,
    linear-gradient(to top, #008796 size(15), transparent size(15)) 0 100%,
    linear-gradient(to top, #008796 size(15), transparent size(15)) 100% 100%;

  background-repeat: no-repeat;
  background-size: size(37) size(55);
}
/* Swipe */
.swipe {
  width: size(950);
  height: size(666);
  top: size(216);
  right: size(74);
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
  top: size(1120);
  right: size(200);
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
    box-shadow: 0 0 0 5px #fff;
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
        // background-image: url('./s2/dot.png');
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
  .section3 {
    min-height: auto;
    max-height: initial;
    height: sizem(438);
  }

  .title {
    @include img_c_m(206, 40);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: sizem(0.96);
    text-align: center;
    color: #008796;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(360, 148);
    font-size: sizem(21);

  }

  .btn {
    @include div_l_m(266, 98, 25, 55);
    background: linear-gradient(to right, #008796 5px, transparent 5px) 0 0,
      linear-gradient(to right, #008796 5px, transparent 5px) 0 100%,
      linear-gradient(to left, #008796 5px, transparent 5px) 100% 0,
      linear-gradient(to left, #008796 5px, transparent 5px) 100% 100%,
      linear-gradient(to bottom, #008796 5px, transparent 5px) 0 0,
      linear-gradient(to bottom, #008796 5px, transparent 5px) 100% 0,
      linear-gradient(to top, #008796 5px, transparent 5px) 0 100%,
      linear-gradient(to top, #008796 5px, transparent 5px) 100% 100%;

    background-repeat: no-repeat;
    background-size: sizem(14) sizem(21);
  }

  /* Swipe */
  .swipe {
    width: sizem(249);
    height: sizem(174);
    min-height: auto;
    top: sizem(232);
    left: sizem(66);
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
  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s3/img.png'),
          // name: 'WE機能圖',
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
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>