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
    height: calc(100vh - 123px);
  }
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(50);
    top: size-m(119);
    left: size-m(31);
  }

  .desc {
    font-size: size-m(21);
    top: size-m(200);
    left: size-m(31);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],

  components: {},
  data() {
    return {
      isMobile,
      slideIndex: 0,
      slideList: [
        {
          src: require('./s7/1.jpg'),
        },
        {
          src: require('./s7/2.jpg'),
        },
        {
          src: require('./s7/3.jpg'),
        },
        {
          src: require('./s7/4.jpg'),
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
