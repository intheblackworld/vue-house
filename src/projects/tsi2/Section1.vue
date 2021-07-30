<template>
  <div class="section1">
    <!-- 藍色那張 -->
    <transition
      name="slide-fade"
      mode="out-in"
    >
    <div v-if="isAnimateBg" class="animate-bg">
      <img src="./s1/bg1.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isPC">
      <img src="./s1/bg_m.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isMobile">
      <img src="./s1/bgimg2.png" :alt="`${info.caseName}_cloud`" class="img2" v-if="isPC">
      <img src="./s1/bgimg2m.png" :alt="`${info.caseName}_cloud`" class="img2" v-if="isMobile">
      <img src="./s1/bgimg1.png" :alt="`${info.caseName}_cloud`" class="img1" v-if="isPC">
      <img src="./s1/bgimg1m.png" :alt="`${info.caseName}_cloud`" class="img1" v-if="isMobile">

      <img src="./s1/logo.png" :alt="`${info.caseName}_cloud`" class="logo">
      <div class="t1 flex-c">
        <img src="./s1/t1.png" :alt="`${info.caseName}_cloud`">
      </div>
    </div>
    <div v-else>
      <img src="./s1/map_bg.jpg" :alt="`${info.caseName}_cloud`" class="map" v-if="isPC">
      <Map v-if="isMobile" :bgSrc="bgSrc" :hand="hand">
    </Map>
      <img src="./s1/map_t.png" :alt="`${info.caseName}_cloud`" class="map-t">
      <div class="title1 title">
        洲子洋天空再進化
      </div>
      <div class="title2 title">
        讓雙北人都羨慕
      </div>
      <h3 class="desc">
        15萬坪寬闊樹海濃蔭，128萬坪大臺北都會水岸公園，藍天綠邑絕美生活別說你不羨慕！這就是洲子洋，宜居大城持續進化，讓雙北人一眼愛上。
      </h3>
    </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  background-size: cover;
  z-index: 3;
  // margin: 0 0 size(400) 0;
}

.animate-bg {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  transition: all .3s;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.img1, .img2 {
  position: absolute;
  width: 100vw;
  left: 0;
  bottom: 0;
}

.logo {
  @include img_l_pc(336, 245, 478);
}

.t1 {
  @include img_r_pc(714, 273, 356);
  img {
    width: size(554);
  }
}

.map, .map-t {
  @include img_r_pc(1646, 0, 0);
  object-fit: cover;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  z-index: 0;
}

.title {
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #ffffff;
  background-color: #003177;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title1 {
  @include div_l_pc(70, 517, 73, 150);
}

.title2 {
  @include div_l_pc(70, 440, 73, 233);
}

.desc {
  @include img_l_pc(476, 96, 353);
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateY(50px) !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  // margin-top: 0
  // transform: translateY(0px) !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    margin: 0 0 -12vw 0;
    background-size: auto size-m(750);
  z-index:initial;
  }

  .title1 {
    @include img_c_m(313, 258);
    // top: calc(50% + 100vw * (505 - 540) / 1920);
    font-size: sizem(33);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #fff000;
    white-space: nowrap;
    span {
      font-size: sizem(38);
    }
  }

  .title2 {
    @include img_c_m(306, 310);
    // top: calc(50% + 100vw * (586 - 540) / 1920);
    font-size: sizem(26);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(29);
    }
  }

  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (70 - 302) / 375);
  }
  .c1 {
    left: 0;
    top: calc(50% - 77vw);
    width: sizem(97);
    transform: translateX(-10%);
  }
  .c2 {
    left: -6.7vw;
    top: calc(50% + 44vw);
    width: sizem(262);
    transform: translateX(-8%);
  }
  .c3 {
    right: 55vw;
    top: calc(50% + 68vw);
    width: sizem(132);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
  }
  .c4 {
    right: -1.5vw;
    top: calc(50% + 50vw);
    width: sizem(369);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
  }

  .t {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (650 - 302) / 375);
  }
  .o {
    width: sizem(40);
    right: 19.7vw;
    top: calc(50% + 100vw * (676 - 302) / 375);
  }

  .top-logo {
    @include img_c_m(315, 135);
  }

  .top-title1 {
    @include img_c_m(315, 274);
  }

  .top-title2 {
    @include img_c_m(312, 409);
  }
}
</style>
<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isAnimateBg: true,
      // blockIndex: 0,
      bgmSrc: require('./s1/map_bg_m.jpg'),
      hand: require('./s1/m_2_mobile_hand.png'),
    }
  },

  components: {
    Map,
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      this.isAnimateBg = false
    }, 0)
  },

  created() {},

  computed: {},
}
</script>
