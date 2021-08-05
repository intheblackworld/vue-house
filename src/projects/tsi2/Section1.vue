<template>
  <div class="section1">
    <!-- 藍色那張 -->
    <transition-group name="slide-fade" mode="out-in">
      <div v-if="isAnimateBg" class="animate-bg" key="animate-bg">
        <img src="./s1/bgimg2.png" :alt="`${info.caseName}_cloud`" class="img2" v-if="isPC">
        <img src="./s1/bgimg2m.png" :alt="`${info.caseName}_cloud`" class="img2" v-if="isMobile">
        <img src="./s1/bgimg1.png" :alt="`${info.caseName}_cloud`" class="img1" v-if="isPC">
        <img src="./s1/bgimg1m.png" :alt="`${info.caseName}_cloud`" class="img1" v-if="isMobile">

        <img src="./s1/logo.png" :alt="`${info.caseName}_cloud`" class="logo">
        <div class="t1 flex-c">
          <img src="./s1/t1.png" :alt="`${info.caseName}_cloud`">
        </div>
      </div>
      <div key="default-bg">
        <img src="./s1/map_bg.jpg" :alt="`${info.caseName}_cloud`" class="map-img" v-if="isPC">
        <div class="map-bg-frame">
          <Map v-if="isMobile" :bgSrc="bgmSrc" :hand="hand">
          </Map>
        </div>
        <img src="./s1/map_t.png" :alt="`${info.caseName}_cloud`" class="map-t"  data-aos="fade" data-aos-delay="200">
        <div class="title1 title" data-aos="fade" data-aos-delay="0">
          洲子洋天空再進化
        </div>
        <div class="title2 title" data-aos="fade" data-aos-delay="100">
          讓雙北人都羨慕
        </div>
        <h3 class="desc" data-aos="fade" data-aos-delay="300">
          15萬坪寬闊樹海濃蔭，128萬坪大臺北都會水岸公園，藍天綠邑絕美生活別說你不羨慕！這就是洲子洋，宜居大城持續進化，讓雙北人一眼愛上。
        </h3>
      </div>
    </transition-group>
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
  // position: relative;
    z-index:2;
    background: #fff;
  //z-index: 3;
  // margin: 0 0 size(400) 0;
}

.animate-bg {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: fixed;
  background:#003176;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.3s;
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

.img1,
.img2 {
  position: absolute;
  width:size(2561);
  left: 50%;
  bottom: 0;
  animation: img 3s 0s ease-in-out infinite alternate;
  transform-origin: 20% 100%;
    transform: scaleY(0.96) translate(-50%, 0);
}
.img2 {
  animation: img 3s -0.5s ease-in-out infinite alternate;}

@keyframes img {
  to {
    transform: scaleX(0.96) translate(-50%, 5%);
  }
}

.logo {
  @include img_l_pc(336, 245, 478);
  top: calc(50% + (245 - 1080 * .5) * 100vw / 1920);
}

.t1 {
  @include div_r_pc(714, 350, 273, 356);
  top: calc(50% + (273 - 1080 * .5) * 100vw / 1920);
  border: 1px solid #fff;
  img {
    width: size(554);
  }
}

.map-img,
.map-t {
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
  transform: translateY(-5%);
}

.title2 {
  @include div_l_pc(70, 440, 73, 233);
  transform: translateY(-5%);
}

.desc {
  @include img_l_pc(476, 96, 353);
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
  text-shadow: 0 0 0.5em #008ed4;
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
    min-height: sizem(667);
    max-height: sizem(812);
    height:100vh;
    margin:0;
  }

  .animate-bg {
    width: 100vw;
    height: 100vh;
    min-height: auto;
    max-height: 100vh;
    transition: all 0.3s;
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

  .img1,
  .img2 {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }

  .logo {
    @include img_c_m(184, 95);
  }

  .t1 {
    @include div_c_m(228, 112, 356);
    border: 1px solid #fff;
    img {
      width: sizem(176);
    }
  }

  .map-img,
  .map-t {
    display: none;
  }

  .map-bg-frame {
    @include img_l_m(375, 137, 0);
  }

  .title {
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: sizem(2.3);
    text-align: left;
    color: #ffffff;
    background-color: #003177;
    padding-left: sizem(16);
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    z-index: 20;
  }

  .title1 {
    @include div_l_m(310, 42, 57, 40);
  transform: translateX(-5%);
  }

  .title2 {
    @include div_l_m(264, 42, 107, 40);
  transform: translateX(-5%);
  }

  .desc {
    @include img_l_m(310, 170, 40);
    text-shadow: 0 0 3px rgba(22, 29, 45, 0.85);
    font-size: sizem(15);
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    z-index: 1;
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
    }, 4000)//6000
  },

  created() {},

  computed: {},
}
</script>
