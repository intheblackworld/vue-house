<template>
  <div class="section1">
    <img src="../shin-lan/abont/1/topbg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../shin-lan/mo/abont/1/topbg.jpg" alt="" class="bg-img" v-else>
    <div class="shin-lan-title-v shin-lan-title-v-m title gold" data-aos="fade">
      關於<span data-aos="flip-right"></span>我們
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: 100vh;
  min-height: calc(900 * 100vw / 1920);
  max-height: calc(1080 * 100vw / 1920);
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
  object-fit: cover;
  top: 0;
}

.title {
  @include img_l_pc(67, 362, 341);

  @include md {
    @include img_l_m(40, 120, 33);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
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
