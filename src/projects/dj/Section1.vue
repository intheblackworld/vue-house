<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s1/1.png" alt="" class="bg-img cloud1">
      <img src="./s1/2.png" alt="" class="bg-img cloud2">
      <img src="./s1/3.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="500">
      <img src="./s1/4.png" alt="" class="bg-img" data-aos="fade-right" data-aos-delay="600">
      <img src="./s1/豐郡大景讓你勇敢成家.png" alt="" class="absolute title" data-aos="zoom-in-up" data-aos-delay="1200">
    </div>
    <div
      v-else
      class="fullscreen"
    >
      <img src="./mo/1/1.png" alt="" class="bg-img cloud1">
      <img src="./mo/1/2.png" alt="" class="bg-img cloud2">
      <img src="./mo/1/3.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="500">
      <img src="./mo/1/4.png" alt="" class="bg-img" data-aos="fade" data-aos-delay="600">
      <img src="./mo/1/logo.png" alt="" class="absolute title" data-aos="zoom-in-up" data-aos-delay="1200">
    </div>
      <img src="./s1/空間大寬敞.png" alt="" class="absolute left1">
      <img src="./s1/生活大悠閒.png" alt="" class="absolute left2">
      <img src="./s1/房價大輕鬆.png" alt="" class="absolute left3">
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5">
      <!--
      <img src="./s1/空間大寬敞.png" alt="" class="absolute left1" data-aos="zoom-in-up" data-aos-delay="700">
      <img src="./s1/生活大悠閒.png" alt="" class="absolute left2" data-aos="zoom-in-up" data-aos-delay="800">
      <img src="./s1/房價大輕鬆.png" alt="" class="absolute left3" data-aos="zoom-in-up" data-aos-delay="900">
      <img src="./s1/視野大寬闊.png" alt="" class="absolute left4" data-aos="zoom-in-up" data-aos-delay="1000">
      <img src="./s1/交通大方便.png" alt="" class="absolute left5" data-aos="zoom-in-up" data-aos-delay="1100">
      -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #eee4cb;
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
  left:calc(50% - 78vmin);
  bottom:38vh;
  width: 18vmin;
  animation: bubble 8s ease-in-out infinite;
  transform-origin: 60% 100%;
}

.left2 {
  left:calc(50% - 57vmin);
  bottom:37vh;
  width: 13vmin;
  animation: bubble 8s 1.6s ease-in-out infinite;
  transform-origin: 0% 100%;
}

.left3 {
  left:calc(50% - 43vmin);
  bottom:53vh;
  width: 14vmin;
  animation: bubble 8s 3.2s ease-in-out infinite;
  transform-origin: 90% 100%;
}

.left4 {
  left:calc(50% - 29vmin);
  bottom:43vh;
  width: 21vmin;
  animation: bubble 8s 4.8s ease-in-out infinite;
  transform-origin: 0% 70%;
}

.left5 {
  left:calc(50% - 9vmin);
  bottom:56vh;
  width: 19vmin;
  animation: bubble 8s 6.4s ease-in-out infinite;
  transform-origin: 70% 100%;
}

.title {
  right: size(118);
  bottom:56vh;
  width: size(607);
}

.cloud1 {
  animation: clouda 5s ease-in-out alternate infinite;
    transform: translateX(-3%);
}
.cloud2 {
  animation: clouda 5s 0.5s ease-in-out alternate infinite;
    transform: translateX(-6%);
}

@keyframes clouda {

  to{
    transform: translateX(0);
  }
}
@keyframes bubble {
  0%{
    transform: scale(0);
    opacity: 0;
  }
  10%{
    transform: scale(1);
    opacity: 1;
  }
  95%{
    transform: scale(1);
    opacity: 1;
  }
  100%{
    transform: scale(1);
    opacity: 0;
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
  .left1 {
  left:size-m(30);
  bottom:size-m(94);
  width: size-m(60);
}

.left2 {
  left:size-m(85);
  bottom:size-m(94);
  width: size-m(50);
}

.left3 {
  left:size-m(114);
  bottom:size-m(135);
  width: size-m(60);
}

.left4 {
  left:size-m(170);
  bottom:size-m(107);
  width: size-m(60);
}

.left5 {
  left:size-m(223);
  bottom:size-m(138);
  width: size-m(87);
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
