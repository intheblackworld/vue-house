<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s1/1.png" alt="" class="bg-img cloud" data-aos="fade" data-aos-delay="400">
      <img src="./s1/2.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="300">
      <img src="./s1/3.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="500">
      <img src="./s1/4.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="600">
      <img src="./s1/空間大寬敞.png" alt="" class="absolute left1" data-aos="zoom-in-up" data-aos-delay="700">
      <img src="./s1/生活大悠閒.png" alt="" class="absolute left2" data-aos="zoom-in-up" data-aos-delay="800">
      <img src="./s1/房價大輕鬆.png" alt="" class="absolute left3" data-aos="zoom-in-up" data-aos-delay="900">
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4" data-aos="zoom-in-up" data-aos-delay="1000">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5" data-aos="zoom-in-up" data-aos-delay="1100">
      <img src="./s1/豐郡大景讓你勇敢成家.png" alt="" class="absolute title" data-aos="zoom-in-up" data-aos-delay="1200">
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
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.left1 {
  left: size(96);
  top: size(434);
  width: size(198);
}

.left2 {
  left: size(325);
  top: size(530);
  width: size(142);
}

.left3 {
  left: size(492);
  top: size(337);
  width: size(154);
}

.left4 {
  left: size(635);
  top: size(431);
  width: size(230);
}

.left5 {
  left: size(854);
  top: size(222);
  width: size(209);
}

.title {
  right: size(118);
  top: size(242);
  width: size(607);
}

.cloud {
  animation: clouda 2.5s ease-in-out infinite;
}

@keyframes clouda {
  0% {
    left: 0px;
  }

  50% {
    left: 15px;
  }

  100% {
    left: 0px;
  }
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
  .logo {
    width: 80%;
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    height: auto;
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
