<template>
  <div class="section2">
    <img src="./s2/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="!isMobile">
    <div class="map"></div>
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">
      桃園豪宅品牌．嘉璟機構
    </h3>
    <h3 class="subtitle" data-aos="fade-up" data-aos-delay="100">
      中路特區｜領空鉅作
    </h3>
    <Map :tagList="tagList" :bgSrc="isMobile ? bgmSrc: bgSrc" :hand="hand">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: auto;
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  &::before{content: "";width: 100%;height:3vw;background: #fff;position: absolute;bottom: 100%;left: 0;
  box-shadow: 0 0 2vw 1vw #fff,0 0 2vw #fff;z-index: 2;
  }
}

.bg-img {
  width: 100%;
  height: auto;
  position: relative;
  bottom:0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
  /*
  &:nth-child(1) {
    position: relative;
  }*/
}

.title {
  @include img_c_pc(444, 105);
  font-size: size(40);
  width: auto;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.4);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(446, 167);
  font-size: size(49);
  width: auto;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: size(0.69);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}
.map {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
// .more {
//   @include img_r_pc(309 + 20 + 63, 685, 110);
//   font-size: size(24);
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.04;
//   letter-spacing: size(2.8);
//   text-align: left;
//   color: #ffffff;
//   cursor: pointer;
//   white-space: nowrap;

//   img {
//     width: size(63);
//   }
// }

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
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  &::before{content: "";width: 100%;height:10vw;background: #fff;position: absolute;bottom: 100%;left: 0;
  box-shadow: 0 0 10vw 5vw #fff,0 0 10vw #fff
  }
  }

  .title {
    @include img_c_m(234, 78);
  width: auto;
    font-size: sizem(21);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: sizem(0.21);
    text-align: center;
    color: #000000;
    white-space: nowrap;
    z-index: 10;
  }

  .subtitle {
    @include img_c_m(236, 115);
  width: auto;
    font-size: sizem(26);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: sizem(0.36);
    text-align: center;
    color: #000000;
    z-index: 10;
    white-space: nowrap;
  }
.map {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    width:auto;
    height: auto;
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      tagList: [require('./s2/3.png'),require('./s2/2.png'),require('./s2/1.png'),],
      bgmSrc: require('./s2/bg.jpg'),
      hand: require('./s2/hand.png'),
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
