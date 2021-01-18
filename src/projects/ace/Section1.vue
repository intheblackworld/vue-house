<template>
  <div>
    <div class="section1">
      <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
      <img src="./mo/1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade-down">
      <img src="./s1/p2.png" :alt="`${info.caseName}_p2`" class="p2" v-if="isPC" data-aos="zoom-in">
      <img src="./s1/p12.png" :alt="`${info.caseName}_p12`" class="p12" v-if="isPC" data-aos="fade-up">
      <img src="./mo/1/p2.png" :alt="`${info.caseName}_bg`" class="p2" v-if="isMobile" data-aos="zoom-in">
      <img src="./mo/1/p1.png" :alt="`${info.caseName}_bg`" class="p12" v-if="isMobile" data-aos="fade-up">
      <img src="./s1/預約紐.png" :alt="`${info.caseName}_order_btn`" class="order-btn" v-scroll-to="{ element: `#contact` }">
      <h1 class="title" data-aos="fade-up">
        不是王牌不出手<br />
        唯有贏家能擁有
      </h1>
      <!-- <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800"> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// 新增 mixin 代表意義：
// @mixin img_r_pc($width, $top, $right) {
//   position: absolute;
//   width: size($width);
//   top: size($top);
//   right: size($right);
// }

// @mixin img_r_m($width, $top, $right) {
//   position: absolute;
//   width: sizem($width);
//   top: sizem($top);
//   right: sizem($right);
// }

// @mixin img_l_pc($width, $top, $left) {
//   position: absolute;
//   width: size($width);
//   top: size($top);
//   left: size($left);
// }

// @mixin img_l_m($width, $top, $left) {
//   position: absolute;
//   width: sizem($width);
//   top: sizem($top);
//   left: sizem($left);
// }

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // background-color:#d1c6b7;
  // background-size: cover;
  // background-attachment: fixed;
  overflow: hidden;
  //animation: bg 5s 0s linear infinite alternate-reverse;
}

.bg-img {
  width: size(1920);
  height: 100%;
  //min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_r_pc(331, 227, 317);
  top:calc(50% - 15vw);
}

.p2 {
  @include img_r_pc(202, 113, 806);
  top:calc(50% - 21vw);
}

.p12 {
  @include img_l_pc(528, 113, 116);
  top:calc(50% - 19vw);
}

.order-btn {
  @include img_r_pc(45, 803, 69);
  cursor: pointer;
  top: auto;
  bottom:1vw;
  opacity: 0.6;
  transition: all 0.5s;
  &:hover{ opacity: 0.8;}
}
  .title {
    @include img_r_pc(338, 336, 315);
    top:calc(50% + 9vw);
    font-size: size(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: center;
    color: #685335;
    white-space: nowrap;
  }

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
    min-height: auto;
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    //min-height: 900px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .logo {
    @include img_r_m(163, 111, 116);
    top:calc(50% + ((111 - 302) * 0.266666vw));
  }

  .p2 {
    @include img_r_m(91, 143, 0);
    top:calc(50% + ((100 - 302) * 0.266666vw));
  }

  .p12 {
    @include img_r_m(129, 333, 240);
    top: auto;
    bottom: 0;
  width: auto;
  height:calc(50% - 20vw);
  }

  .order-btn {
    display: none;
  }

  .title {
    @include img_l_m(166, 336, 94);
    top:calc(50% + ((336 - 302) * 0.266666vw));
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: center;
    color: #685335;
    white-space: nowrap;
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
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
