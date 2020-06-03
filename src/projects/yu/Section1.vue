<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="c-content"></div>
      <img src="./s1/logo.png" alt="" class="img">
      <img src="./s1/tl.png" alt="" class="logo">
      <img src="./s1/tl2.png" alt="" class="desc">
      <div class="line-in"></div>
      <div class="line-top"></div>
      <div class="line-bottom"></div>
      <div class="line-left"></div>
      <div class="line-right"></div>
    </div>
    <div
      v-else
      class="fullscreen"
    >
    </div>
    <!--
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4" data-aos="zoom-in-up" data-aos-delay="1000">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5" data-aos="zoom-in-up" data-aos-delay="1100">
      -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: size(965);
  overflow: hidden;
}
.img {
  width: size(1690);
  position: absolute;
  display: block;
  top: size(115);
  left: size(115);
  object-fit: cover;
}

.logo {
  width: size(130);
  left: size(115);
  top: size(115);
  position: absolute;
}

.desc {
  width: size(400);
  left: size(245);
  top: size(115);
  position: absolute;
}

.c-content {
  background-color: #fff;
  width: size(1690);
  height: size(852);
  left: size(115);
  top: size(115);
  position: absolute;
}

.line-in {
  position: absolute;
  background-color: #bf1b12;
  left: size(245);
  width: 1px;
  height: size(851);
  top: size(115);
}

.line-top {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  top: size(115);
}

.line-bottom {
  position: absolute;
  background-color: #bf1b12;
  width: 100vw;
  height: 1px;
  bottom: 0;
}

.line-left {
  position: absolute;
  background-color: #bf1b12;
  left: size(115);
  width: 1px;
  height: size(965);
}

.line-right {
  position: absolute;
  background-color: #bf1b12;
  right: size(115);
  width: 1px;
  height: size(965);
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
  .img {
    height: auto;
    top: auto;
    bottom: 0;
    &:nth-child(1) {
      position: absolute;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

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
