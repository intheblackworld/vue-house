<template>
  <div class="section2">
    <img src="./s2/o1.png" :alt="`${info.caseName}_img`" class="o1">
    <img src="./s2/o2.png" :alt="`${info.caseName}_img`" class="o2">
    <div class="content" data-aos="fade-down" data-aos-delay="0">
      <div class="desc" data-aos="fade-right" data-aos-delay="200">他傳統又時髦，</div>
      <div class="desc" data-aos="fade-right" data-aos-delay="300">繁華而文雅，濃郁而生動。</div>
      <div class="desc" data-aos="fade-right" data-aos-delay="400">他的魅力成冊，總讓你印象深刻，</div>
      <div class="desc" data-aos="fade-right" data-aos-delay="500">總是想再來一遍，不如住在裡面。</div>
      <div class="title" data-aos="fade-right" data-aos-delay="600">
        收藏忠孝，風格新生。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: size(605);
  min-height: size(605);
  max-height: size(1080);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  // overflow: hidden;
  // background-color: #fff;
  // position: relative;
}

.bg-img {
  width: size(1920);
  height: size(938);
  // border-top: 1px solid red;
  margin-top: -1px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  // object-fit: cover;
  // margin-top: 0;
}

.content {
  @include img_c_pc(544.5, 96);
  padding: size(15) size(51) size(15) size(82);
  border-left: 2px solid #c3985b;
  border-right: 2px solid #c3985b;
  z-index: 2;

  .desc {
    font-size: size(22.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: size(4.57);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title {
    font-size: size(39);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: size(2.34);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }
}

.o1 {
  @include img_l_pc(508, 332, -240);
}

.o2 {
  @include img_r_pc(212, 132, -40);
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
    width: 100vw;
    min-height: sizem(386);
    max-height: sizem(386);
    height: sizem(386);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .content {
    @include img_c_m(310, 45);
    padding: sizem(15) sizem(25) sizem(15) sizem(18);
    border-left: 2px solid #c3985b;
    border-right: 2px solid #c3985b;
    z-index: 2;

    .desc {
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.2;
      letter-spacing: sizem(3);
      text-align: left;
      color: #ffffff;
      white-space: nowrap;
    }

    .title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(2.5);
      text-align: left;
      color: #c3985b;
      white-space: nowrap;
    }
  }

  .o1 {
    @include img_l_m(121, 321, -40);
  }

  .o2 {
    @include img_l_m(100, 358, 40);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'
import info from '@/info'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      // tagList: [],
      // bgSrc: require('./s2/2_bg_m.jpg'),
      // hand: require('./mo/s2/m_2_mobile_hand.png'),
    }
  },

  methods: {},

  mounted() {},
  created() {},

  computed: {},
}
</script>
