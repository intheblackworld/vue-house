<template>
  <div class="section2">
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isPC">捷運紅線 最美好的期待</div>
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">捷運紅線<br />最美好的期待</div>
    <img src="./s2/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash">
    <Map :bgSrc="bgSrc" v-if="isMobile" :hand="hand">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow-x: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
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
  z-index: 2;
}

.flash {
  @include img_r_pc(1000, -45, -238);
  z-index: 3;
}

.title {
  @include img_c_pc(854, 80);
  top:calc(40% + ( 80 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(75);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
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
    min-height: sizem(604);
    max-height: sizem(760);
    height: sizem(604);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    overflow: visible;
    overflow-x: hidden;
  }
  .bg-img {
    top: auto;
    height: auto;
    min-height: 100%;
    width: 108%;
    left: -4%;
    bottom: 0;
  }

  .flash {
    @include img_r_m(1000, -45, -438);
    z-index: 3;
  }

  .title {
    @include img_c_m(250, 42);
    font-size: sizem(41.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    z-index: 3;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'

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
      isShow: true,
      bgSrc: require('./mobile/02/bg.jpg'),
      hand: require('./mobile/02/swipe-here.png'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
