<template>
  <div class="section10">
    <iframe src="https://www.h35.banner.tw/hy/" frameborder="0"></iframe>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100vw;
  height: 100vh;
  // min-height: size(1080);
  // max-height: size(1080);
  position: relative;
}
iframe {
  width: 100%;
  height: 100%;
}
.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: size(153);
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
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
  .section10 {
    width: 100vw;
    height: sizem(604);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'


export default {
  name: 'section10',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {
  },

  created() {},

  mounted() {
  },

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
