<template>
  <div class="section2">
    <div v-if="!isMobile">
      <img src="./s2/02_img.png" :alt="`${info.caseName}_bg`" class="bg-img">
      <img src="./s2/02_text.png" :alt="`${info.caseName}_text`" class="text"  data-aos="fade-up" data-aos-delay="200">
    </div>
    <div v-else>
      <Map :bgSrc="bgSrc" :hand="hand">
      </Map>
      <img src="./s2/02_text.png" :alt="`${info.caseName}_text`" class="text"  data-aos="fade-up" data-aos-delay="200">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background-size: auto;
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

  &:nth-child(1) {
    //  position: relative;
  }
}

.text {
  @include img_l_pc(700, 87, 79);
   top: calc(50% + 100vw * (140 - 1080 * .5) / 1920);
  
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
    min-height: sizem(470);
    max-height: sizem(605);
    height: sizem(605);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    min-height: size(900);
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
  .text {
    @include img_c_m(335, 37);
    z-index: 10;
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

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      bgSrc: require('./mobile/s2/02_img_m.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('./mobile/s2/02_hand_m.png'),
    }
  },

  components: {
    Map,
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
