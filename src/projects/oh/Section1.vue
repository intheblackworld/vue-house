<template>
  <div class="section1">
    <div class="animate-bg">
      <div class="bg1">
      </div>
      <div class="bg2">
      </div>
      <div class="bg3">
      </div>
    </div>
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/t1.png" :alt="`${info.caseName}_img`" class="t1" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/t2.png" :alt="`${info.caseName}_img`" class="t2" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/img_b.png" :alt="`${info.caseName}_img`" class="img-b" v-if="isPC"  data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/img_b_mo.png" :alt="`${info.caseName}_img`" class="img-b" v-if="isMobile"   data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/img_ct.png" :alt="`${info.caseName}_img`" class="img-ct"   data-aos="zoom-in" data-aos-delay="600">
    <img src="./s1/img_lt.png" :alt="`${info.caseName}_img`" class="img-lt"   data-aos="zoom-in" data-aos-delay="800">

    <!-- <div class="hr1" v-if="isMobile"></div>
    <div class="hr2" v-if="isMobile"></div>
    <h3 class="btn flex-c" v-scroll-to="{ element: `#contact` }">
      搶先預約
    </h3> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  z-index: 3;
  // margin: 0 0 size(400) 0;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_c_pc(457, 133);
}

.t1 {
  @include img_c_pc(538, 584);
}

.t2 {
  @include img_c_pc(538, 805);
}

.img-b {
  @include img_l_pc(1899, -250, -50);
  top: auto;
  bottom: size(-250);
}

.img-ct {
  @include img_r_pc(226, 326, 404);
}

.img-lt {
  @include img_l_pc(360, -30, -60);
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    margin: 0 0 0vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
  }

  .logo {
    @include img_c_m(274, 65);
  }

  .t1 {
    @include img_c_m(272, 330);
  }

  .t2 {
    @include img_c_m(272, 441);
  }

  .img-b {
    @include img_l_m(375, -250, 0);
    top: auto;
    bottom: sizem(-120);
  }

  .img-ct {
    @include img_r_m(100, 105, -50);
  }

  .img-lt {
    @include img_l_m(150, -30, -60);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
