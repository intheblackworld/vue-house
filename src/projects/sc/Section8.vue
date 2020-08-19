<template>
  <div>
    <div class="section8">
      <h3
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="200"
      >好的房子<br />蓋給懂的生活的大人</h3>
      <h3
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >坪數不過量，高坪效美學新品種，挑本喜歡的書，坐上舒服的沙發，享受閱讀時光，LOFT美學3米6自由空間，落地大面開窗好採光，燦燦陽光曬進生活，這就是理想中的家!</h3>
      <div
        class="swipe absolute"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
          <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
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
      <!-- <div
        class="float-block flex-c absolute"
        v-rellax="{
          // Rellax Options
          // See: https://github.com/dixonandmoe/rellax#features
          speed: -1.5,
        }"
      >
        <div>
          <img
            src="./s2/icon.png"
            alt=""
            class="block-icon"
          >
          <h3 class="block-title">城南豐穰</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss">
.Masthead {
  overflow: visible !important;
  z-index: 1 !important;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100vw;
  height: size(720 + 194);
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

// .float-block {
//   width: size(150);
//   height: size(393);
//   top: size(-1180);
//   left: size(289);
//   box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
//   background-color: #ffffff;
//   z-index: 3;
//   .block-icon {
//     width: size(40);
//     margin-bottom: size(28);
//   }
//   .block-title {
//     writing-mode: vertical-rl;
//     text-orientation: upright;
//     font-size: size(36);
//     font-weight: normal;
//     color: #c1724b;
//   }
// }

.title {
  top: size(150);
  right: size(338);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #004980;
}

.desc {
  width: size(389);
  top: size(340);
  right: size(188);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: justify;
  color: #000000;
}

.swipe {
  width: size(1040);
  height: size(720);
  top: 0;
  left: size(183);
  object-fit: cover;
}
/*
.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  left: 100%;
  transition: left 1s ease-in-out;
  z-index: 0;

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
}

.pagination {
  width: auto;
  bottom: 20px;
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
*/
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
    height: size-m(340 + 305);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  // .float-block {
  //   width: size-m(50);
  //   height: size-m(131);
  //   top: size-m(-950);
  //   right: size-m(42);
  //   left: auto;
  //   box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  //   background-color: #ffffff;
  //   z-index: 3;
  //   .block-icon {
  //     width: size-m(15);
  //     margin-bottom: size-m(5);
  //   }
  //   .block-title {
  //     writing-mode: vertical-rl;
  //     text-orientation: upright;
  //     font-size: size-m(13);
  //     font-weight: normal;
  //     color: #c1724b;
  //   }
  // }

  .title {
    top: size-m(340 + 30);
    right: auto;
    left: size-m(40);
    font-size: size-m(20);
  }

  .desc {
    width: size-m(295);
    top: size-m(340 + 110);
    right: auto;
    left: size-m(41);
    font-size: size-m(14.8);
    line-height:1.8;
  }

  .swipe {
    width: 100vw;
    height: size-m(340);
    top: 0;
    left: 0;
    object-fit: cover;
  }
/*
  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    left: 100%;
    transition: left 1s ease-in-out;
    z-index: 0;

    &.base {
      z-index: 1;
      left: 0;
    }
    &.active {
      z-index: 2;
      left: 0;
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
*/
  .text {
    width: size-m(50);
    top: size-m(20);
    right: auto;
    left: size-m(10);
    font-size: size-m(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: isMobile ? require('./mo/7/1.jpg') : require('./s8/1.jpg'),
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
