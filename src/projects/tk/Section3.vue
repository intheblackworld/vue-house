<template>
  <div class="section3">
    <div class="img-content" v-if="isPC">
      <div class="img1">
        <img src="./s3/1.jpg" alt="">
        <h3 class="img-name">
          美麗島捷運站空拍圖
        </h3>
      </div>
      <div class="img2">
        <img src="./s3/2.jpg" alt="">
        <h3 class="img-name">
          捷運市議會站
        </h3>
      </div>
      <div class="img3">
        <img src="./s3/3.jpg" alt="">
        <h3 class="img-name">
          中央公園
        </h3>
      </div>
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
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
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/arrow-prev.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/arrow-next.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="border">
      <h3 class="title">
        步行美麗島 / 市議會站<br />
        捷奏生活無往不利
      </h3>
      <div class="line"></div>
      <h3 class="subtitle" v-if="isPC">
        【達麗東京】步行近距離雙線捷運生活圈！<br />
        未來輕軌綠線、捷運黃線，串聯城市全錄網！<br />
        即刻把握軌道經濟學，投資、起漲攻守兼備！
      </h3>
      <h3 class="subtitle" v-if="isMobile">
        【達麗東京】步行近距離雙線捷運生活圈！
        未來輕軌綠線、捷運黃線，串聯城市全錄網！
        即刻把握軌道經濟學，投資、起漲攻守兼備！
      </h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: size(1135);
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
  @include div_r_pc(484, 650, 154, 160);
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

.line {
  @include img_l_pc(427, 320, 19);
}

.title {
  @include img_r_pc(430, 162, 15);
  font-size: size(40);
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
  @include img_r_pc(484, 342, 0);
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: size(1);
  text-align: center;
  color: #fff;
  white-space: nowrap;
}

/* Swipe */
.swipe {
  @include div_r_pc(1160, 800, 0, 0);
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
    left: 20px;
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
  .section3 {
    width: 100vw;
    height: sizem(576);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
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
    @include div_c_m(335, 508, 30);
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

  .line {
    @include img_c_m(306, 157);
  }

  .title {
    @include img_l_m(268, 59, 15);
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
    @include img_c_m(310, 184);
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
    @include div_c_m(355, 250, 326);
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
  name: 'section3',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      slideList: [
        {
          img: require('./s3/1.jpg'),
          name: '美麗島捷運站空拍圖',
        },
        {
          img: require('./s3/2.jpg'),
          name: '捷運市議會站',
        },
        {
          img: require('./s3/3.jpg'),
          name: '中央公園',
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
