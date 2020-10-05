<template>
  <div>
    <div class="section6">
      <h3
        class="title absolute"
        data-aos="fade-top"
        data-aos-delay="200"
      >精耕台北市中心精品建築<br />堅持不做產品 只做作品</h3>
      <h3
        class="desc absolute"
        data-aos="fade-top"
        data-aos-delay="400"
      >
        <span>2007</span> 展宜麗水 / 大安區麗水街<br />
        <span>2008</span> 展宜浦城 / 大安區浦城街<br />
        <span>2009</span> 展宜臨沂 / 中正區臨沂街<br />
        <span>2010</span> 展宜仁愛 / 中正區仁愛路<br />
        <span>2011</span> 展宜仁沂 / 中正區仁愛路<br />
        <span>2012</span> 展宜有一個園 / 中正區同安街<br />
        <span>2013</span> 展宜時間之外 / 內湖區內湖路<br />
        <span>2014</span> 展宜拿雲 / 中正區新生南路<br />
        <span>2015</span> 阿都蘭A’tolan house / 台東<br />
        <span>2018</span> 展宜摘月 / 中正區臨沂街<br />
        <span>2019</span> 元氣御守 / 中正區福州街
      </h3>
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
      <div
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
          <h3 class="block-title">建築哲人</h3>
        </div>
      </div>
      <div class="text absolute">{{slideList[slideIndex].text}}</div>
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

.section6 {
  width: 100vw;
  height: size(720 + 306);
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

.float-block {
  width: size(150);
  height: size(393);
  top: size(-1020);
  left: size(289);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  z-index: 3;
  .block-icon {
    width: size(40);
    margin-bottom: size(28);
  }
  .block-title {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: size(36);
    font-weight: normal;
    color: #c1724b;
  }
}

.title {
  top: size(50);
  right: size(293);
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
  width: size(442);
  top: size(200);
  right: size(182);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  span {
    display: inline-block;
    color: #c1724b;
    margin-right: 15px;
  }
}

.swipe {
  width: size(1040);
  height: size(720);
  top: 0;
  left: size(183);
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

.text {
  width: size(84);
  top: size(643);
  right: size(773);
  font-size: size(21);
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
  .section6 {
    width: 100vw;
    height: size-m(340 + 484);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .float-block {
    width: size-m(50);
    height: size-m(131);
    top: size-m(-600);
    left: size-m(42);
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    z-index: 3;
    .block-icon {
      width: size-m(15);
      margin-bottom: size-m(5);
    }
    .block-title {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: size-m(13);
      font-weight: normal;
      color: #c1724b;
    }
  }

  .title {
    top: size-m(364);
    right: auto;
    left: size-m(40);
    font-size: size-m(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #004980;
  }

  .desc {
    width: size-m(295);
    top: size-m(445);
    right: auto;
    left: size-m(41);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .swipe {
    width: 100vw;
    height: size-m(340);
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

  .text {
    width: size-m(50);
    top: size-m(30);
    right: size-m(30);
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
  name: 'section6',

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
          img: isMobile ? require('./mo/6/1.jpg') :require('./s6/1.jpg'),
          text: '展宜麗水',
        },
        {
          img: isMobile ? require('./mo/6/2.jpg') :require('./s6/2.jpg'),
          text: '展宜浦城',
        },
        {
          img: isMobile ? require('./mo/6/3.jpg') :require('./s6/3.jpg'),
          text: '展宜仁沂',
        },
        {
          img: isMobile ? require('./mo/6/4.jpg') :require('./s6/4.jpg'),
          text: '展宜仁愛',
        },
        {
          img: isMobile ? require('./mo/6/5.jpg') :require('./s6/5.jpg'),
          text: '展宜臨沂',
        },

        {
          img: isMobile ? require('./mo/6/6.jpg') :require('./s6/6.jpg'),
          text: '展宜有一個園',
        },
        {
          img: isMobile ? require('./mo/6/7.jpg') :require('./s6/7.jpg'),
          text: '展宜拿雲',
        },
        {
          img: isMobile ? require('./mo/6/8.jpg') :require('./s6/8.jpg'),
          text: '展宜時間之外',
        },
        {
          img: isMobile ? require('./mo/6/9.jpg') :require('./s6/9.jpg'),
          text: '阿都蘭A’tolan house',
        },
        {
          img: isMobile ? require('./mo/6/10.jpg') :require('./s6/10.jpg'),
          text: '展宜摘月',
        },
        {
          img: isMobile ? require('./mo/6/11.jpg') :require('./s6/11.jpg'),
          text: '元氣御守',
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
