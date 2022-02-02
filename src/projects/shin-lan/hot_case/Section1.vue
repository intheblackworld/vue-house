<template>
  <div class="section1">
    <img src="../shin-lan/hot/topbg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../shin-lan/mo/hot/topbg.jpg" alt="" class="bg-img" v-else>
    <img src="../shin-lan/all/logo.png" alt="" class="logo">
    <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade">
      熱銷<span data-aos="flip-right"></span>個案
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: size(1085);
  // min-height: calc(900 * 100vw / 1920);
  // max-height: calc(1080 * 100vw / 1920);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
    // height: 100vh;
    height: size(604);
    min-height: calc(604 * 100vw / 375);
    max-height: calc(812 * 100vw / 375);
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.logo {
  @include img_l_pc(563, 790, 341);
  @include md {
    @include img_c_m(310, 0);
    top: auto;
    bottom: sizem(30);
  }
}

.title {
  @include img_r_pc(240, 727, 412);

  @include md {
    @include img_r_m(160, 400, 40);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #b18863;
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
