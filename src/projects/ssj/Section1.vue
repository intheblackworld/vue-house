<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s1/bg.png" alt="" class="bg-img">
      <img src="./s1/logo.png" alt="" class="logo absolute">
      <img src="./s1/re.png" alt="" class="img absolute">
    </div>
    <div
      v-else
      class="fullscreen"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #3B5662;
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
    position: relative;
  }
}

.logo {
  width: size(1412);
  position: absolute;
  top: size(386);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.img {
  width: size(204);
  margin: 0 auto;
  top: size(915);
  left: 0;
  right: 0;
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
    height:auto;
    top:auto;
    bottom: 0;
  &:nth-child(1) {
    position: absolute;
  }
  }
  .title {
    width: size-m(289);
    right: size-m(43);
    top:calc(32vh - 20vw);
  }

  .mt {
    margin-top: 60px;
  }
.cloud1 {
  height: size-m(604);
  left: 50%;
    top:auto;
    bottom: 0;
  width:auto;
    transform: translateX(-55%);
}
.cloud2 {
  height: size-m(604);
  left: 50%;
    top:auto;
    bottom: 0;
  width:auto;
    transform: translateX(-60%);
}

@keyframes clouda {

  to{
    transform: translateX(-45%);
  }
}
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  components: {
  },
  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },

  created() {
  },

  mounted() {},

  computed: {},
}
</script>
