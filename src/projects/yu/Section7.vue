<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="title absolute">
        這麼小又高坪效 真的很少見！ 戶數不多 入席信義商圈別錯過
      </div>
      <img
        src="./s7/logoall.png"
        alt=""
        class="img absolute"
      >
      <div class="white-line absolute"></div>
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-right absolute"></div>
      <div class="line-bottom absolute"></div>

      <div class="slide absolute">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s7-slide-${index}`"
          :src="slide.src"
          alt
        />
      </div>
      <div class="desc absolute">
        搶先預約 留下資料由專人為您服務
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <div class="slide absolute">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s7-slide-${index}`"
          :src="slide.src"
          alt
        />
      </div>
      <div class="indigator absolute flex-c">
        <div
          v-for="(slide, index) in slideList"
          @click="setIndex(index)"
          :class="`item ${slideIndex === index ? 'active' : ''}`"
          :key="`indi-${index}`"
        ></div>
      </div>
      <div class="line-top absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="hint absolute">
        樣品屋裝潢風格參考示意圖，實際依合約書為準
      </div>
      <div class="title absolute">
        這麼小又高坪效 真的很少見！ 戶數不多 入席信義商圈別錯過
      </div>
      <div class="desc absolute">
        搶先預約 留下資料由專人為您服務
      </div>
      <div class="line-bottom absolute"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(1594);
  overflow: hidden;
}

.img {
  top: 0;
  left: size(115);
  width: size(1690);
  z-index: 1;
}

.white-line {
  width: 100vw;
  height: size(20);
  background-color: #fff;
  top: size(285);
}

.line-top {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  top: size(383);
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: size(1690);
  height: 1px;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: 0;
}

.line-right {
  background-color: #bf1b12;
  z-index: 1;
  top: 0;
  right: size(115);
  width: 1px;
  height: size(1592);
}

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left: size(115);
  top: size(383);
  width: 1px;
  height: size(1210);
}

.slide {
  width: size(1690);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(383);
}

.title {
  width: size(1104);
  top: size(1402);
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: center;
  color: #bb1a12;
}

.desc {
  width: size(458);
  top: size(1473);
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #1a1311;
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(314.5);
  }

  .slide {
    width: 100vw;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
  }

  .line-top {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    top: size-m(184.5);
  }

  .line-top2 {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    top: size-m(205.5);
  }

  .hint {
    top: size-m(187);
    font-size: size-m(10.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: center;
    color: #1a1311;
    right: size-m(5.6);
  }

  .title {
    width: size-m(186);
    top: size-m(226);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: center;
    color: #bb1a12;
  }

  .desc {
    width: size-m(190);
    top: size-m(278);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: size-m(11.4);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #1a1311;
  }

  .indigator {
    top: size-m(192);
    left: size-m(10);
    > div {
      border: 1px solid #bb1a12;
      background: transparent;
      width: size-m(9.9);
      height: size-m(9.9);
      margin-right: 10px;

      &.active {
        background: #bb1a12;
      }
    }
  }

  .line-bottom {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section7',
  mixins: [slider],

  components: {},
  data() {
    return {
      isMobile,
      slideIndex: 0,
      slideList: [
        {
          src: isMobile ? require('./s7/1_m.jpg') : require('./s7/1.jpg'),
        },
        {
          src: isMobile ? require('./s7/2_m.jpg') : require('./s7/2.jpg'),
        },
        {
          src: isMobile ? require('./s7/3_m.jpg') : require('./s7/3.jpg'),
        },
        {
          src: isMobile ? require('./s7/4_m.jpg') : require('./s7/4.jpg'),
        },
      ],
    }
  },

  methods: {
    setIndex(index) {
      this.slideIndex = index
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
