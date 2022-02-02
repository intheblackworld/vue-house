<template>
  <div class="section1">
    <img src="../shin-lan/video/topbg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../shin-lan/mo/video/topbg.jpg" alt="" class="bg-img" v-else>
    <div class="shin-lan-title-v shin-lan-title-v-m title" data-aos="fade">
      影音<span data-aos="flip-right"></span>專區
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
  top: size(60);
  left: 0;

  @include md {
    top: 0;
  }
}

.logo {
  @include img_l_pc(563, 790, 341);
}

.title {
  @include img_l_pc(60, 362, 341);
  color: #000;

  @include md {
    @include img_l_m(40, 177, 56);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #000;
  }
}

.type-tab {
  @include img_l_pc(520, 0, 341);
  top: auto;
  bottom: size(75);

  .tab {
    font-size: size(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: size(1.4);
    text-align: left;
    color: #808080;
    border-bottom: 1px solid #808080;
    cursor: pointer;

    &.active {
      color: #000;
      border-bottom: 1px solid #000;
    }
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
