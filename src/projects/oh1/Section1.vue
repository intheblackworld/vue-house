<template>
  <div class="section1">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/0.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s1/0_m.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s1/1.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/2.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/3.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/4.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/5.png" :alt="`${info.caseName}_img`" class="img-train">
    <h3 class="title">
      海灣新樂園 城市心天地
    </h3>
    <h3 class="subtitle">
      淡海最大6000坪俱樂部宅
    </h3>
    <h3 class="btn flex-c" v-scroll-to="{ element: `#contact` }">
      搶先預約
    </h3>
    <!-- <div class="hr1" v-if="isMobile"></div>
    <div class="hr2" v-if="isMobile"></div> -->
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
  @include img_l_pc(363, 190, 306);
}

.img1 {
  @include img_r_pc(363, 190, 306);
}

.img-train {
  @include img_r_pc(436, 0, 600);
  top: auto;
  bottom: 0;
}

.subtitle {
  @include img_l_pc(545, 532, 222);
  padding: size(10) size(15);
  font-size: size(38.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.41);
  text-align: left;
  color: #fff000;
  border: solid 2px #fff000;
}

.title {
  @include img_r_pc(550, 310, 620);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.7);
  text-align: left;
  color: #ffffff;
  white-space: nowrap
}

.btn {
  @include div_l_pc(240, 63.6, 622, 364);
  background-image: linear-gradient(to right, #b81c22 0%, #e95504 100%);
  font-size: size(38.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.41);
  text-align: left;
  color: #ffffff;
  border-radius: 8px;
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
    top: calc(50% + 100vw * (15 - 604 * 0.5) / 375);
  }

  .t1 {
    @include img_c_m(272, 330);
    top: calc(50% + 100vw * (280 - 604 * 0.5) / 375);
  }

  .t2 {
    @include img_c_m(272, 441);
    top: calc(50% + 100vw * (390 - 604 * 0.5) / 375);
  }

  .img-b {
    @include img_l_m(454, -250, -40);
    top: auto;
    bottom: sizem(-140);
  }

  .img-ct {
    @include img_r_m(100, 105, -50);
    top: calc(50% + 100vw * (55 - 604 * 0.5) / 375);
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
