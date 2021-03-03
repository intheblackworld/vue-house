<template>
  <div class="section6 flex-ac">
    <img src="./s6/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  background-size: cover;
  background-position: 100%;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width:100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
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
  .section6 {
    width: 100vw;
    height: sizem(420);
    min-height: auto;
    max-height: initial;
    background-color: #fff;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  // mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s6/slider_3-1.jpg'),
      //     name: '家樂福商圈',
      //   },
      //   {
      //     img: require('./s6/slider_3-2.jpg'),
      //     name: '桃園藝文展演中心',
      //   },
      //   {
      //     img: require('./s6/slider_3-3.jpg'),
      //     name: '南崁COSTCO',
      //   },
      //   {
      //     img: require('./s6/slider_3-4.jpg'),
      //     name: '特力屋',
      //   },
      //   {
      //     img: require('./s6/slider_3-5.jpg'),
      //     name: '台茂購物中心',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
