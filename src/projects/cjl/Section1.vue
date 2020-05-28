<template>
  <div class="relative">
    <div v-if="!isMobile" class="flex-c">
      <img
        src="./img/bg.jpg"
        alt=""
        class="bg-img"
      >
      <img
        src="./img/logo.png"
        alt=""
        class="logo"
      >
      <div class="txt">
        即將登場
      </div>
    </div>
    <div
      v-else
      class="fullscreen"
    >
      <img
        src="./img/bg_m.jpg"
        alt=""
        class="bg-img"
      >
      <img
        src="./img/logo.png"
        alt=""
        class="logo absolute"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #3b5662;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: absolute;
  }
}

.logo {
  width: size(559);
  margin: 0 auto;
}

.txt {
  width: size(527);
  height: size(79);
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
  .bg-img {
    height: auto;
    top: 0;
    bottom: 0;
    &:nth-child(1) {
      position: absolute;
    }
  }

  .logo {
    top: size-m(197);
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
