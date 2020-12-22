<template>
  <div>
    <div class="section2">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isPC">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="img-list" v-if="isMobile">
        <img src="./mo/1m.jpg" alt="">
        <img src="./mo/2m.jpg" alt="">
        <img src="./mo/3m.jpg" alt="">
      </div>
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isPC">
        鳳鳴好感生活圈<br />
        建築對味<br />
        幸福到位
      </div>
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isMobile">
        鳳鳴好感生活圈<br />建築對味．幸福到位
      </div>
      <div class="btn" data-aos="fade-down" data-aos-delay="200"></div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="600" v-if="isPC">
        立瑾建築機構<br />構築家的好品味 悅享幸福心滋味
      </div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="600" v-if="isMobile">
        立瑾建築機構 構築家的好品味 悅享幸福心滋味
      </div>
      <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  max-height: size(1080);
  position: relative;
  background: #e0eedd;
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
  @include img_l_pc(400, 382, 173);
  font-size: size(57);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: center;
  color: #444444;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(526, 701, 107);
  font-size: size(37);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: normal;
  text-align: center;
  color: #444444;
  white-space: nowrap;
}

.btn {
  @include div_l_pc(511, 255 + 68, 318, 115);
  background: linear-gradient(to right, #3e3a39 10px, transparent 10px) 0 0,
    linear-gradient(to right, #3e3a39 10px, transparent 10px) 0 100%,
    linear-gradient(to left, #3e3a39 10px, transparent 10px) 100% 0,
    linear-gradient(to left, #3e3a39 10px, transparent 10px) 100% 100%,
    linear-gradient(to bottom, #3e3a39 10px, transparent 10px) 0 0,
    linear-gradient(to bottom, #3e3a39 10px, transparent 10px) 100% 0,
    linear-gradient(to top, #3e3a39 10px, transparent 10px) 0 100%,
    linear-gradient(to top, #3e3a39 10px, transparent 10px) 100% 100%;

  background-repeat: no-repeat;
  background-size: size(50) size(34);
}
/* Swipe */
.swipe {
  width: size(1150);
  height: size(987);
  top: size(47);
  right: size(55);
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
  .section2 {
    min-height: auto;
    max-height: initial;
    height: sizem(892);
  }

  .title {
    @include img_c_m(224, 40);
    font-size: sizem(24);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: sizem(0.96);
    text-align: center;
    color: #444444;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(318, 156);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #444444;
    white-space: nowrap;
  }

  .btn {
    @include div_l_m(266, 98, 25, 55);
    background: linear-gradient(to right, #3e3a39 5px, transparent 5px) 0 0,
      linear-gradient(to right, #3e3a39 5px, transparent 5px) 0 100%,
      linear-gradient(to left, #3e3a39 5px, transparent 5px) 100% 0,
      linear-gradient(to left, #3e3a39 5px, transparent 5px) 100% 100%,
      linear-gradient(to bottom, #3e3a39 5px, transparent 5px) 0 0,
      linear-gradient(to bottom, #3e3a39 5px, transparent 5px) 100% 0,
      linear-gradient(to top, #3e3a39 5px, transparent 5px) 0 100%,
      linear-gradient(to top, #3e3a39 5px, transparent 5px) 100% 100%;

    background-repeat: no-repeat;
    background-size: sizem(14) sizem(21);
  }

  .img-list {
    position: relative;
    width: sizem(342);
    margin: 0 auto;
    top: sizem(187);

    img {
      width: 100%;
      // height: sizem(230);
      object-fit: cover;
      margin-bottom: sizem(4);
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
          img: require('./s2/1.jpg'),
          // name: 'WE機能圖',
        },
        {
          img: require('./s2/2.jpg'),
          // name: 'WE機能圖',
        },
        {
          img: require('./s2/3.jpg'),
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