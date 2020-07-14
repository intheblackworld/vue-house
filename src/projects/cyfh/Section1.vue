<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="bg1"><img src="./s1/bg1.png" alt="" class="bg-img">
      <img src="./s1/bg1.gif" alt="" class="bg-img gif"></div>
      <img src="./s1/title.png" alt="" class="title absolute">
      <img src="./s1/bg2.png" alt="" class="bg-img bg2">
      <img src="./s1/logo.png" alt="" class="logo absolute">
    </div>
    <div v-if="isMobile">
      <div class="bg1">
      <img src="./mo/1/1.png" alt="" class="bg-img">
      <img src="./mo/1/bg1.gif" alt="" class="bg-img gif">
      </div>
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
 // &:first-child {
//   position: relative;
 // }
  opacity: 0;
}

.title {
  width: size(866);
  top: size(230);
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  animation: an1 2s 4s ease-in-out  forwards;
}

.logo {
  width: size(426);
  top: size(280);
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  animation: logo 6s 2s ease-in-out  forwards;
}

.bg1 {
  animation: an1 1s 3s linear  forwards;
    opacity: 0;
    position: relative;
    transform: scaleY(0.8);
  transform-origin: 50% 0;
  transform: scaleY(0.8);
  .bg-img:first-child{position: relative;
    opacity: 1;}
  .gif{
  top: size(290); opacity: 1;}
}
.bg2 {
  animation: an2 10s 1s linear  forwards;
  opacity: 0;
  transform-origin: 50% 0;
  transform: scaleY(0.8);
}
@keyframes an1 {
 /* 0% {
    opacity: 0;
    transform: scaleY(0.8);
  }*/

  to {
    opacity: 1;
    transform:  scaleY(1);
  }

/*
  60% {
    opacity: 0;
    transform: scaleY(1);
  }

  100% {
    opacity: 0;
  }*/
}
@keyframes an2 {
  0% {
    opacity: 0;
    transform: scaleY(0.7);
  }

  5% {
    opacity: 1;
    transform:  scaleY(0.8);
  }

  20% {
    opacity: 1;
    transform:  scaleY(0.8);
  }

  30% {
    opacity: 0;
    transform: scaleY(1);
  }

  100% {
    opacity: 0;
  }
}

// .bg1 {
//   animation: an1 8s 4s ease-in-out infinite;
//   opacity: 0;
// }

@keyframes logo {
  0% {
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes title {
  0% {
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  45% {
    opacity: 0;
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

.bg1 {
  .gif{
  top:0;}
}
  .title {
    width: size-m(354);
    top: size-m(180);
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
