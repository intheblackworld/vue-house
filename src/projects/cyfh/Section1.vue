<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s1/bg1.png" alt="" class="bg-img bg1">
      <img src="./s1/title.png" alt="" class="title absolute">
      <img src="./s1/bg2.png" alt="" class="bg-img bg2">
      <img src="./s1/logo.png" alt="" class="logo absolute">
    </div>
    <div v-if="isMobile">
      <img src="./mo/1/1.png" alt="" class="bg-img bg1">
      <img src="./s1/title.png" alt="" class="title absolute">
      <img src="./mo/1/2.png" alt="" class="bg-img bg2">
      <img src="./s1/logo.png" alt="" class="logo absolute">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child {
    position: relative;
  }
}

.title {
  width: size(866);
  top: size(270);
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  animation: an2 10s 6s ease-in-out infinite;
}

.logo {
  width: size(426);
  top: size(280);
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  animation: an2 10s .5s ease-in-out infinite;
}

.bg2 {
  animation: an1 10s 0s ease-in-out infinite;
  opacity: 0;
}

// .bg1 {
//   animation: an1 8s 4s ease-in-out infinite;
//   opacity: 0;
// }

@keyframes an2 {
  0% {
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  55% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes an1 {
  0% {
    opacity: 0;
    transform: scaleY(2);
  }

  5% {
    opacity: 1;
    transform: scaleY(1);
  }

  50% {
    opacity: 1;
    transform: scaleY(1);
  }

  55% {
    opacity: 0;
    transform: scaleY(2);
  }

  100% {
    opacity: 0;
  }
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

export default {
  name: 'section1',
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
