<template>
  <div class="section3">
    <img src="./s3/03_img.jpg" :alt="`${info.caseName}_img`" class="img">
    <img src="./s3/03_logo.png" :alt="`${info.caseName}_logo`" class="logo">
    <h1 class="title">
      30年貴族血脈　新藝術精工建築
    </h1>
    <h1 class="desc">
      國際企業九揚環球集團，30年城堡建築第一品牌，提供領先業界—結構體15年、防水5年、固定建材設備3年的完美保固，並且由自營的甲級營造廠「昇北營造」給買家最貼心的全客製化客變服務。名聲遠逐海內外，人生第一宅當然選擇九揚名宅！
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(1168);
  // min-height: size(900);
  // max-height: size(1080);
  // overflow: hidden;
  position: relative;
  // background: #552e70 fixed;
  background-size: auto;
  // z-index: 23;
}

.bg-img {
  width: size(1920);
  // height: 100%;
  // min-height: size(900);
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}
.img {
  @include img_c_pc(1283, 83);
}
.logo {
  @include img_c_pc(371, 733);
}

.title {
  @include img_c_pc(830, 848);
  font-size: size(30);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.6;
  letter-spacing: normal;
  text-align: center;
  color: #542e71;
}

.desc {
  @include img_c_pc(830, 928);
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.6;
  letter-spacing: normal;
  text-align: center;
  color: #fbfbfb;
  // top: calc(50% - 9vw);
}
@keyframes tree {
  to {
    transform: skewX(-2deg);
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
  .section3 {
    width: 100vw;
    height: sizem(526);
    min-height: sizem(526);
    max-height: sizem(750);
    background-color: #542e71;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    // background: transparent;
  }
  .img {
    @include img_c_m(375, 22);
  }
  .logo {
    @include img_c_m(211, 233);
  }

  .title {
    @include img_c_m(325, 338);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.95;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .desc {
    @include img_c_m(325, 381);
    font-size: sizem(13);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    // top: calc(50% - 9vw);
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
