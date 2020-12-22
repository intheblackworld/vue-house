<template>
  <div class="section1">
    <!-- <img src="./s1/bg.jpg" alt="" class="bg-img"> -->
    <img src="./s1/i1.png" alt="" class="i1">
    <img src="./s1/i2.png" alt="" class="i2">
    <img src="./s1/i3.png" alt="" class="i3">
    <img src="./s1/b.png" alt="" class="b" @click="moveT">
    <!-- <img src="./s1/b1.png" alt="" class="b1">
    <img src="./s1/b2.png" alt="" class="b2"> -->
    <img src="./s1/logo.png" alt="" class="logo">
    <img src="./s1/t.png" alt="" :class="`t ${isMove ? 'moving' : ''}`">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") fixed ;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_l_pc(611, 285, 225);
}

.b {
  @include img_r_pc(664, 535, 554);
  cursor: pointer;
}

// .b1 {
//   @include img_l_pc(712, 383, 214);
// }

// .b2 {
//   @include img_l_pc(720, 768, 210);
// }

.i1 {
  @include img_l_pc(933, 596, 186);
}

.i2 {
  @include img_r_pc(678, 181, 182);
}

.i3 {
  @include img_r_pc(419, 540, 306);
}

.t {
  @include img_r_pc(67, 614, 441);
  transform-origin: center;

  &.moving {
    animation: swing 1s 0s ease-in-out infinite;
  }
}

@keyframes swing {
  0% {
    transform: scale(0.8), rotate(0deg);
  }

  10% {
    transform: rotate(5deg);
  }

  30% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }

  70% {
    transform: rotate(-5deg);
  }

  90% {
    transform: rotate(5deg);
  }

  100% {
    transform: scale(0.8), rotate(0deg);
  }
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section1 {
    width: 100vw;
    min-height: sizem(725);
    max-height: sizem(725);
    height: sizem(725);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    @include img_c_m(180, 63);
  }

  .b {
    @include img_r_m(270, 492, 0);
    cursor: pointer;
  }

  // .b1 {
  //   @include img_l_m(712, 383, 214);
  // }

  // .b2 {
  //   @include img_l_m(720, 768, 210);
  // }

  .i1 {
    @include img_l_m(288, 603, 0);
  }

  .i2 {
    @include img_c_m(244, 188);
  }

  .i3 {
    @include img_c_m(259, 323);
  }

  .t {
    @include img_r_m(42, 371, 140);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isMove: false,
    }
  },

  methods: {
    moveT() {
      this.isMove = true
      setTimeout(() => {
        this.isMove = false
      }, 1000)
    },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
