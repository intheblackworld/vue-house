<template>
  <div>
    <div class="section8">
     <!--  <img src="./s8/logo2.png" alt="" class="logo">
     <div class="title">
        威地段&emsp;輕首付&emsp;訂製宅&emsp;幸福住
      </div>
      <div class="subtitle">
        <span>悅峰WE時代&ensp;</span>我們的威時代
      </div>
      <div class="g-block"></div>  -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(900);
  max-height: size(900);
  //background: url("./s8/bg.jpg") cover;
  background-image: url('./s8/bg.jpg');
  background-size: 100% 100%;
  background-position: 0 0;
  position: relative;
  //background: #fff;
  font-size: size(56);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  text-align: center;
  color: #000000;
  white-space: nowrap;
  letter-spacing:-0.015em;
}

.bg-img {
  width: 100vw;
  height: size(900);
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_c_pc(760, 112);
}

.title {
  @include img_c_pc(824, 636);
}

.subtitle {
  @include img_c_pc(1000, 720);
  font-size:1.17em;
  span{letter-spacing:0.06em;margin:0 0.18em 0 -0.01em;}
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
  .section8 {
    width: 100vw;
    height: sizem(394 + 45);
    min-height: auto;
    max-height: initial;
    overflow: hidden;
    font-size: sizem(21);
    background-image: url('./s8/bg_m.jpg');
  }

  .g-block {
    @include div_l_m(375, 45, 0, 0);
    background-color: #318d92;
  }

  .logo {
    @include img_c_m(238, 81);
  }

  .title {
    @include img_c_m(375, 333);
  }

  .subtitle {
    @include img_c_m(375, 364);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
  },
}
</script>
