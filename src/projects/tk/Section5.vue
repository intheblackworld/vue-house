<template>
  <div class="section5">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
        <img src="./s5/n.png" alt="" class="slide-btn" v-if="slideIndex === 0" @click="goTo(1)">
        <img src="./s5/s.png" alt="" class="slide-btn" v-if="slideIndex === 1" @click="goTo(0)">
        <!-- <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="border">
    </div>
    <div class="title" v-if="isPC">
      高雄晴空地標 東京時尚天際
    </div>
    <div class="title" v-if="isMobile">
      高雄晴空地標<br />東京時尚天際
    </div>
    <div class="line"></div>
    <h3 class="subtitle">
      全新落成、高雄市中心頂級視野，超高精品地標展魅力！<br />
      俐落風格、簡約時尚，城市、行人、居住者視角全方位！<br />
      高雄稀有蛋黃，頂尖景觀生活，現在馬上入住、馬上起漲！
    </h3>
    <div class="border-bottom">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section5 {
  width: 100%;
  height: size(1165);
  position: relative;
  background-image: url('./s3/bg.jpg');
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

.img-content {
  @include img_l_pc(1215, 54, 0);
  height: size(417 + 515 + 10);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img1 {
  width: 100%;
  margin-bottom: 15px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img2 {
  width: 60%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img3 {
  width: 38%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img-name {
  position: absolute;
  right: size(18);
  bottom: size(16);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #fff;
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

.border-bottom {
  @include img_c_pc(1190, 0);
  top: auto;
  bottom: size(40);
  border: 2px solid #c9a063;
}

.line {
  @include img_l_pc(128, 50, 848);
  transform: rotate(90deg);
}

.title {
  @include img_l_pc(566, 25, 322);
  font-size: size(42);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(3);
  text-align: center;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(927, 0, 322);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(1.2);
  text-align: right;
  color: #fff;
}

/* Swipe */
.swipe {
  @include div_c_pc(1600, 940, 130);
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
  bottom: size(-60);
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
  .section5 {
    width: 100vw;
    height: sizem(578 + 100);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
  }

  .border {
    @include div_c_m(335, 602, 30);
    border: 2px solid #c9a063;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: sizem(34) sizem(34) 0 0;
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
      border-width: 0 0 sizem(34) sizem(34);
      border-color: transparent transparent #c9a063 transparent;
    }
  }

  .border-bottom {
    @include img_c_m(335, 0);
    top: auto;
    bottom: size(20);
    border: 1px solid #c9a063;
  }

  .line {
    @include img_c_m(306, 157);
    transform: rotate(0);
  }

  .title {
    @include img_l_m(268, 59, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.88);
    text-align: left;
    color: #c8a064;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 164);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(0.45);
    text-align: left;
    color: #fff;
    white-space: normal;
  }

  /* Swipe */
  .swipe {
    @include div_c_m(355, 250, 390);
    z-index: 2;
  }

  .slide-btn {
    @include img_r_m(50, -30, 30);
    cursor: pointer;
    z-index: 10;
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
      font-size: 14px;
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
    bottom: size(-60);
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
      width: sizem(37);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      slideList: [
        {
          img: require('./s5/1.jpg'),
          name: '3D外觀合成模擬圖',
        },
        {
          img: require('./s5/2.jpg'),
          name: '3D外觀合成模擬圖',
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
