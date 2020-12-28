<template>
  <div class="section1">
    <!-- <img src="./s1/bg.jpg" alt="" class="bg-img"> -->
    <img src="./s1/i1.png" alt="" class="i1" data-aos="fade" data-aos-delay="200">
    <img src="./s1/i2.png" alt="" class="i2" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/i3.png" alt="" class="i3" data-aos="fade" data-aos-delay="400">
   <!--<img src="./s1/b.png" alt="" class="b" @click="moveT"> -->
    <div class="b" data-aos="fade" data-aos-delay="800">
    <div class="bimg">
      <img src="./s1/b1.png" alt=""><img src="./s1/b2.png" alt="">
      </div>
      </div>
    <!-- <img src="./s1/b1.png" alt="" class="b1">
    <img src="./s1/b2.png" alt="" class="b2"> -->
    <img src="./s1/logo.png" alt="" class="logo" data-aos="fade-down" data-aos-delay="400">
    <div class="t" data-aos="fade" data-aos-delay="800">
    <img src="./s1/t.png" alt="" >
      </div>
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
  @include img_c(611, 255, -735, 1920);
}

.b {
  @include img_c(664, 5, -255, 1920);
  img{width: 100%;position: absolute;top: 0;left: 0;
  &:last-child{transform: rotate(0deg);
  transform-origin: 59% 58%;
  animation:tr1 2s infinite alternate;
  }
  }
}
@keyframes tr1{
    90%{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(10deg);
    }
}

// .b1 {
//   @include img_l_pc(712, 383, 214);
// }

// .b2 {
//   @include img_l_pc(720, 768, 210);
// }

.i1 {
  @include img_c(933, -55, -775, 1920);
}

.i2 {
  @include img_c(678, 360, 100, 1920);
}

.i3 {
  @include img_c(419, 0, 235, 1920);
}

.t {
  @include img_c(67, -74, 452, 1920);
  transform-origin: center;
  img{width: 100%;  animation:tr2 2s 0.4s ease-out infinite alternate;
}

  /*&.moving {
    animation: swing 1s 0s ease-in-out infinite;
  }*/
}
@keyframes tr2{
    93%{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(10deg);
    }
}
/*
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
}*/

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
    @include img_c_m(200, 55);
  }

  .b {
    @include img_r_m(300, 495, -35);
    .bimg{transform: scaleX(-1)}
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
