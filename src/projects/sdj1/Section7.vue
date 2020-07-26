<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="frame1">
        <img
          src="./s7/1.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./s7/2.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./s7/3.png"
          alt=""
          class="bg-img"
        >
      </div>
      <div class="frame2">
        <img
          src="./s7/4.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./s7/5.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./s7/6.png"
          alt=""
          class="bg-img"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <div class="frame1">
        <img
          src="./mo/6/img.png"
          alt=""
          class="bg-img"
        >
      </div>
      <div class="frame2">
        <img
          src="./mo/7/1.png"
          alt=""
          class="bg-img"
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #fff;
}

.frame1 {
  position: relative;
  width: size(1562);
  height: size(642);
  margin: 0 auto;
  margin-top: size(130);
  margin-bottom: size(127);
}

.frame2 {
  position: relative;
  width: size(1563);
  height: size(791);
  margin: 0 auto;
  margin-bottom: size(184);
}
.bg-img {
  width: 100%;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .relative {
    // height: 100vh;
    overflow: hidden;
    background: #004a7f;
  }
  .frame1 {
    position: relative;
    width: size-m(317);
    height: size-m(678);
    margin: 0 auto;
    margin-top: size-m(40);
    margin-bottom: size-m(28);
  }

  .frame2 {
    position: relative;
    width: size-m(324);
    height: auto;
    margin: 0 auto;
    margin-bottom: size-m(50);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section7',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
