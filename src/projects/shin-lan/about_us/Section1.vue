<template>
  <div class="section1">
    <img src="../shin-lan/abont/1/topbg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="../shin-lan/mo/abont/1/topbg.jpg" alt="" class="bg-img" v-else>
    
    <div class="box">
    <div class="shin-lan-title-v shin-lan-title-v-m title gold" data-aos="fade">
      關於<span data-aos="flip-right"></span>我們
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: calc(1085 * 100vw / 1920);
  position: relative;
  margin:56px 0 0 0;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
   margin:60px 0 0 0;
   height: sizem(607);
  }
  .box{
    width: 100%;
    height: 100vh;
    min-height: calc(900 * 100vw / 1920);
    max-height: calc(1080 * 100vw / 1920);
    position: relative;
  
    @include md {
      height: 100%;
      min-height:0;
      max-height: initial;
    }
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
}

.title {
  @include img_l_pc(67, 362, 341);
  top: calc(50% + (362 - 1080 * .5) * 100vw / 1920);

  @include md {
    @include img_l_m(40, 150, 56);
    font-size: sizem(28);
    font-weight: 700;
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
