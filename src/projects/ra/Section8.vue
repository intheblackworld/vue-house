<template>
  <div>
    <div class="section8">
      <img
        src="./s8/bg.png"
        alt=""
        class="img absolute"
        data-aos="fade"
        data-aos-delay="200"
      >
      <div class="txt absolute">
      <h3
        class="title"
        data-aos="fade-down"
        data-aos-delay="600"
      >無虛坪公設 質勝於量<br />英國藝術家 獨家創作</h3>
      <p
        class="desc"
        data-aos="fade-down"
        data-aos-delay="700"
        v-if="!isMobile"
      >揮別飯店式浮誇排場，以功能與風雅合一，此顯 「人，才是突間的高貴主體」並盛邀作品榮登「英國蘇富比、佳士得拍賣藝術品」等級的旅台英國藝術家貝馬丁Martyn Barratt，特為大廳、公設，獨家創作木雕藝術(白在樹)、(一生一世)茶几木椅、(美麗時光)等燒窯玻璃藝術，由於每一幅作品皆未經事先繪圖塑模，全憑靈光乍現，更顯珍稀。</p>
      <p
        class="desc"
        data-aos="fade-down"
        data-aos-delay="700"
        v-if="isMobile"
      >揮別飯店式浮誇排場，以功能與風雅合一，此顯「人，才是突間的高貴主體」並盛邀作品榮登「英國蘇富比、佳士得拍賣藝術品」等級的旅台英國藝術家貝馬丁Martyn Barratt，特為大廳、公設，獨家創作木雕藝術(白在樹)、(一生一世)茶几木椅、(美麗時光)等燒窯玻璃藝術，由於每一幅作品皆未經事先繪圖塑模，全憑靈光乍現，更顯珍稀。</p>
      
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: 100vh;
  min-height: size(800);
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
  top: 0;
  left: auto;
  right: 0;
  height: auto;
  }
}

.img {
  width: 100vw;
  object-fit: cover;
  left: 0;
  bottom: 0;
}


.txt {
  width: 26%;
  height:100%;
  top:0;
  right:calc(3.5% + 50px);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000;z-index: 2;
  display: flex;align-items:center;flex-direction:column;justify-content:center;
}
.title {
  font-size:1.8em;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: 0.08em;
  text-align: center;
  color: #a68367;
  white-space: nowrap;
  margin: 0.5em 0 0.5em 0;
}

.desc {
  line-height: 2.05;
  letter-spacing: 0.04em;
  text-align: justify;
}

.swipe {
  width:calc(66vw - 50px);
  height: 100vh;
  min-height: size(900);
  top: 0;
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
  left: 100%;
  transition: left 1s ease-in-out;
  z-index: 0;

  &:nth-child(1) {
    z-index: 1;
    left: 0;
  }

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
    height: sizem(685);
    min-height: auto;
  }

  .title {
    top: size-m(38);
    left: size-m(63);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2px;
    text-align: center;
    color: #a38057;
  }

  .desc {
    width: size-m(310);
    top: size-m(137);
    left: size-m(33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.9px;
    text-align: left;
    color: #04040c;
  }

  .swipe {
    width: 100vw;
    height: size-m(310);
    top: sizem(374);
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
    display: none;

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
          img: require('./s8/1.jpg'),
        },
        {
          img: require('./s8/2.jpg'),
        },
        {
          img: require('./s8/3.jpg'),
        },
        {
          img: require('./s8/4.jpg'),
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
