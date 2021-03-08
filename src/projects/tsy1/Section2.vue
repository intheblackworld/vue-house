<template>
  <div class="section2">
    <div v-if="!isMobile">
      <img src="./s2/02_img.png" :alt="`${info.caseName}_bg`" class="bg-img">
      <img src="./s2/02_text.png" :alt="`${info.caseName}_text`" class="text">
    </div>
    <div v-else>
      <Map :bgSrc="bgSrc" :hand="hand">
    </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background-size: auto;
}

.bg-img {
  width:100%;
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
  @include img_l_pc(733, 87,79);
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
    max-height: sizem(1337);
    height: sizem(1337);
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
  .f3 {
    @include img_r_m(233, 418, 0);
  transform-origin:100% 90%;
    transform: skewY(2deg);
    animation: flow1 3s 0s ease-in-out infinite alternate-reverse;
    z-index: 3;
  }

  .f4 {
    @include img_l_m(250, 0, 0);
    top: auto;
    bottom: sizem(-30);
  transform-origin:0% 90%;
    animation: flow1 2.3s 0s ease-in-out infinite alternate;
    transform: skewY(2deg);
    z-index: 3;
  }
  .f5 {
    @include img_r_m(160, 0, 0);
    top: auto;
    bottom: sizem(-780);
  transform-origin:100% 90%;
    animation: flow1 2.3s 0s ease-in-out infinite alternate;
    transform: skewY(3deg);
    z-index: 3;
    img{width: 100%;transform: scaleY(-1)}
  }

  .t1 {
    @include img_r_m(21.2, 70, 90);
  }
  .t2 {
    @include img_r_m(10.1, 305, 66);
  }
  .t3 {
    @include img_r_m(292, 934, 38);
  }
  .t4 {
    @include img_r_m(298, 610, 34);
    top: auto;
    bottom: sizem(185);
  }

  // .logo {
  //   @include img_r_m(479, 707, 310);
  // }

  .st1 {
    @include img_l_m(17, 128, 157);
  }

  .st2 {
    @include img_l_m(16, 128, 128);
  }

  .st3 {
    @include img_l_m(17, 128, 97);
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
      bgSrc: '',
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: '',
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
