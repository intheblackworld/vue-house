<template>
  <div class="section7">
    <img src="./m/7/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-tt" v-if="isMobile">
    <img src="./s7/bg_t.jpg" :alt="`${info.caseName}_img`" class="bg-img bg-tt" v-if="isPC">
    <img src="./m/8/bg_t.jpg" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="isMobile">
    <img src="./s7/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-b">
      <img src="./s6/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="isPC">
    <img src="./m/8/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isMobile">
    <img src="./s7/img.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
    <img src="./m/8/img.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
    <div class="hr" data-aos="zoom-in-down" data-aos-delay="0"></div>
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">建材一品</h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height:auto;
  //overflow: hidden;
  position: relative;
  background-color: #fff;
  background-size: cover;
  z-index: 3;
  // margin: 0 0 size(400) 0;
}

.bg-img {
  width: 100%;
  height: auto;
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

.bg-b {
  top: auto;
  bottom: 0;
  transform: translateY(100%);
}

.img {
  @include img_r_pc(773, 183, 306);
}

.hr {
  @include img_l_pc(4, 180, 746);
  height: size(127);
  background: #000;
}

.title {
  @include img_l_pc(35, 177, 757);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section7 {
    width: 100%;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    margin: 0 0 0vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
  }

  .bg-tt {
    width:100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 2;
  }
.bg-b{ top: sizem(648);
transform: translateY(0);
bottom: auto;
}
  .img {
    @include img_c_m(348, 130);
  }

  .hr {
    @include img_l_m(4, 24 + 50, 40);
    height: sizem(23);
    background: #000;
  }

  .title {
    @include img_l_m(84, 20 + 50, 50);
    width: auto;
    font-size: sizem(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section7',

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
