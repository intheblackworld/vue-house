<template>
  <div class="section1">
    <img src="./s1/t0.png" class="t1" alt="麗昇陽_終於等到"
          data-aos="fade"
          data-aos-delay="0">
          <div class="t2">爭藏中壢的第一次</div>
    <img src="./s1/t2.png" class="t3" alt="中壢國小30-47坪昇陽建設"
          data-aos="fade"
          data-aos-delay="0">
    <img src="./s1/logo.png" class="logo" alt="麗昇陽_終於等到，爭藏中壢的第一次"
          data-aos="fade"
          data-aos-delay="0">


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
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  z-index: 3;
  margin: 0 0 size(800) 0;
}

.t1 {
  @include img_r_pc(687, 244,205);
top:calc(50% + 100vw * (244 - 540) / 1920);
}

.t2{font-size: size(75);
font-weight: 500;
letter-spacing: 0.15em;
color: #fff;
  @include img_l_pc(976, 485, 55);
top:calc(50% + 100vw * (485 - 540) / 1920);
}
.t3{
  @include img_l_pc(658, 690, 210);
top:calc(50% + 100vw * (690 - 540) / 1920);
}
.logo {
  @include img_c_pc(410, 1330);
top:calc(50% + 100vw * (1230 - 540) / 1920);
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
  margin: 0 0 sizem(450) 0;
  }
.t1 {
  @include img_c_m(264, 75);
  top:calc(50% + 100vw * (75 - 667 * .5) / 375);
}
.t2{
  @include img_c_m(375, 485);
  font-size: sizem(29.5);
top:calc(50% + 100vw * (485 - 540) / 1920);
}
.t3 {
  @include img_c_m(254, 462);
top:calc(50% + 100vw * (462 - 667 * .5) / 375);
}

.logo {
  @include img_c_m(158, 750);
top:calc(50% + 100vw * (750 - 667 * .5) / 375);
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
