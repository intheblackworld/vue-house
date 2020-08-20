<template>
  <div>
    <div class="section9">
      <div
        class="text-block absolute"
        data-aos="fade-left"
        data-aos-delay="400"
        v-if="!isMobile"
      >
        <h3
          class="title"
          data-aos="fade-left"
          data-aos-delay="600"
          v-html="slideList[slideIndex].title"
        ></h3>
        <ul
          class="desc"
          data-aos="fade-left"
          data-aos-delay="700"
        ><li>室內減少小樑、大器動線、放大空間效果。領略貴氣舒張於氣流中</li><li>享客廳，境與景的豐藏，大隱於市景觀露台。每個房間，櫃體與床自在無拘</li><li>尊榮21戶、單層雙户雙電梯、全坡平車位，更顯好人家的尊榮氣度</li>
      </ul>
      </div>
      <h3
        class="title absolute"
        data-aos="fade-left"
        data-aos-delay="600"
        v-html="slideList[slideIndex].title"
        v-if="isMobile"
      ></h3>
      <ul
        class="desc absolute"
        data-aos="fade-left"
        data-aos-delay="700"
        v-if="isMobile"
      ><li>室內減少小樑、大器動線、放大空間效果。領略貴氣舒張於氣流中</li><li>享客廳，境與景的豐藏，大隱於市景觀露台。每個房間，櫃體與床自在無拘</li><li>尊榮21戶、單層雙户雙電梯、全坡平車位，更顯好人家的尊榮氣度</li>
      </ul>
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
            :key="slide.img + i + 'slide'"
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
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
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
    position: relative;
  }
}

.text-block {
  width: size(937);
  height: size(285);
  bottom: size(121);
  right: 0;
  opacity: 0.86;
  background-color: rgba(0, 0, 0, 0.4);
  padding: size(38) size(58);
  z-index: 5;
}

.title {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: size(43);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: 3.44px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 10px;
}

.desc {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.98;
  letter-spacing: 2px;
  text-align: left;
  color: #ffffff;list-style: disc;margin: 0 0 0 0.8em;
  li{margin:0 0 0.5em 0;}
}

.swipe {
  width: 100vw;
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
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }

  &.base {
    z-index: 1;
    opacity: 1;
  }
  &.active {
    z-index: 2;
    opacity: 1;
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
  .section9 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
  }

  .title {
    text-shadow: none;
    width: sizem(224);
    top: size-m(43);
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
    text-shadow: none;
    width: size-m(310);
    top: size-m(142);
    left: size-m(33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: left;
    color: #04040c;
  }

  .swipe {
    width: 100vw;
    height: calc(100vh - 63px - 90vw);
    top: sizem(333);
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
    object-fit: cover;

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
  name: 'section9',

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
          img: require('./s9/0.jpg'),
          title: '三面6.5米深凹窗  身心徜徉綠意藍天',
        },
        {
          img: require('./s9/1.jpg'),
          title: '三面6.5米深凹窗  身心徜徉綠意藍天',
        },
        {
          img: require('./s9/2.jpg'),
          title: '三面6.5米深凹窗  身心徜徉綠意藍天',
        },
        {
          img: require('./s9/3.jpg'),
          title: '三面6.5米深凹窗  身心徜徉綠意藍天',
          
        },
        {
          img: require('./s9/4.jpg'),
          title: '三面6.5米深凹窗  身心徜徉綠意藍天',
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
