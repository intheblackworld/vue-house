<template>
  <div class="relative">
    <!-- https://codepen.io/ciprian/pen/WqLwvE -->
    <!-- https://codepen.io/dudleystorey/pen/PZyMrd -->
    <div v-if="!isMobile">
      <iframe
        class="video-bg"
        src="https://www.youtube.com/embed/eflYegCFh4M?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=eflYegCFh4M"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <img src="./s1/logo.png" alt="" class="logo absolute">
      <img src="./s1/txt.png" alt="" class="txt absolute">
      <!-- <video-bg
        autoplay="autoplay"
        :sources="['https://youtu.be/eflYegCFh4M']"
        img="./s1/bg_video.jpg"
        isFix
      >
        <div class="mask"></div>
      </video-bg> -->
    </div>
    <div v-if="isMobile">

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(1080);
}

.video-bg {
  width: 100vw;
  height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.logo {
  width: size(318);
  left: size(58);
  top: size(64);
}

.txt {
  width: size(525);
  top: size(396);
  right: size(113);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
    overflow: hidden;
  }

  .title {
    width: size-m(354);
    top: size-m(220);
  }

  .logo {
    width: size-m(214);
    top: size-m(210);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import VideoBg from '@/components/VideoBg.vue'

export default {
  name: 'section1',
  data() {
    return {
      isMobile,
    }
  },

  components: {
    VideoBg,
  },

  //   影片1
  // https://youtu.be/eflYegCFh4M
  // 影片2
  // https://youtu.be/pagQjsWtntM

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
