<template>
  <div class="section1" v-touch:swipe.left="() => this.pageIndex = this.pageIndex === 1 ? 2 : 1" v-touch:swipe.right="() => this.pageIndex = this.pageIndex === 1 ? 2 : 1">
    <img src="./s1/bg.jpg" alt="" class="bg" v-if="isPC">
    <!-- <img src="./s1/bg_m.jpg" alt="" class="bg" v-if="isMobile"> -->
    <img src="./s1/img1.png" alt="" class="tree" v-if="isPC">
    <transition-group name="swipe-fade">
      <div v-if="pageIndex === 1" key="page1">
        <img src="./s1/logot1.png" alt="" class="logo">
        <img src="./s1/img2.png" alt="" :class="`img2 ${pageIndex === 1 ? 'moving' : ''}`">
        <img src="./s1/img1.png" alt="" class="tree" v-if="isMobile">
      </div>
      <div v-if="pageIndex === 2" key="page2">
        <img src="./s1/t2.png" alt="" class="t2" v-if="isPC">
        <img src="./s1/t2_m.png" alt="" class="t2" v-if="isMobile">
        <img src="./s1/img3.png" alt="" :class="`img3 ${pageIndex === 2 ? 'moving' : ''}`">
        <img src="./s1/img4.png" alt="" class="img4">
        <img src="./s1/mrt.png" alt="" class="mrt">
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background: #552e70 fixed;
  background-size: auto;
  z-index: 23;
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
  @include img_c_pc(720, 406);
}

.bg {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-275);
}

.tree {
  @include img_r_pc(643, 0, -200);
  top: auto;
  bottom: 0;
}

.img2 {
  @include img_l_pc(235, 0, 315);
  top: auto;
  bottom: 0;
}

.img3 {
  @include img_l_pc(188, 857, 109);
}

.img4 {
  @include img_l_pc(194, 0, 1126);
  top: auto;
  bottom: 0;
}

.t2 {
  @include img_c_pc(997, 459);
}

.mrt {
  @include img_l_pc(229, 0, 0);
}

.moving {
  animation: moving 0.7s linear forwards;
}

@keyframes moving {
  0% {
    transform: translateY(0px);
  }

  10% {
    transform: translateY(-10px);
  }

  20% {
    transform: translateY(0px);
  }

  30% {
    transform: translateY(7px);
  }

  40% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }

  60% {
    transform: translateY(0px);
  }

  70% {
    transform: translateY(3px);
  }

  80% {
    transform: translateY(0px);
  }

  90% {
    transform: translateY(-1px);
  }

  100% {
    transform: translateY(0px);
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
    min-height: sizem(415 + 189);
    max-height: sizem(415 + 189);
    height: sizem(415 + 189);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .logo {
    @include img_c_m(320, 190);
  }

  .bg {
    @include img_c_m(375, 0);
    top: auto;
    bottom: sizem(-275);
  }

  .tree {
    @include img_r_m(206, 0, -70);
    top: auto;
    bottom: 0;
  }

  .img2 {
    @include img_l_m(135, 0, 26);
    top: auto;
    bottom: 0;
  }

  .img3 {
    @include img_l_m(110, 496, 40);
  }

  .img4 {
    @include img_l_m(113, 0, 206);
    top: auto;
    bottom: 0;
  }

  .t2 {
    @include img_c_m(310, 121);
  }

  .mrt {
    @include img_l_m(114, 0, 0);
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
      pageIndex: 1,
      interval: null,
    }
  },

  methods: {},

  mounted() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.pageIndex = this.pageIndex === 1 ? 2 : 1
    }, 5000)
  },

  created() {},

  computed: {},
}
</script>
