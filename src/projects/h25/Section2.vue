<template>
  <div class="section2">
    <img src="./s2/o1.png" :alt="`${info.caseName}_img`" class="o1">
    <img src="./s2/o2.png" :alt="`${info.caseName}_img`" class="o2">
    <div class="content">
      <div class="desc">他傳統又時髦，</div>
      <div class="desc">繁華而文雅，濃郁而生動。</div>
      <div class="desc">他的魅力成冊，總讓你印象深刻，</div>
      <div class="desc">總是想再來一遍，不如住在裡面。</div>
      <div class="title">
        收藏忠孝，風格新生。
      </div>
    </div>
    <!-- <div class="animate-slide" v-if="!isMobile">
      <img src="./s2/漂浮物件_分層/2_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div> -->
    <!-- <div class="animate-slide" v-if="isMobile">
      <img src="./mo/s2/漂浮物件_分層/m_2_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div> -->
    <!-- <img src="./s2/2_bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC"> -->
    <!-- <h1 class="title">
      桃園新都心
    </h1> -->
    <!-- <h1 class="subtitle" v-if="isMobile">
      LOCATION
    </h1> -->
    <!-- <img src="./s2/02_title_m.png" alt="" class="title-img">
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand" v-if="isMobile"> -->
    <!-- <div class="text">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">國際線上 雙北暢遊</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div
          class="desc"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >International Flight</div>
      </div> -->
    <!-- </Map> -->
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
    min-height: sizem(583);
    max-height: sizem(812);
    height: sizem(583);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .bg-img {
    width: sizem(375);
    height: 100%;
    min-height: sizem(667);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include img_c_m(296, 340);
    text-shadow: 3px 3px 5px rgba(4, 0, 0, 0.75);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(2.37);
    text-align: right;
    color: #ffffff;
    z-index: 10;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(296, 360);
    font-size: sizem(54);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(4.48);
    text-align: center;
    z-index: 10;
    color: #ffffff;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    .mo1 {
      @include img_c_m(405, 80);
    }

    .mo2 {
      @include img_c_m(375, -20);
    }
  }

  .title-img {
    @include img_c_m(324, 33);
    z-index: 10;
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
