<template>
  <div class="section1">
    <div class="cloud absolute flex">
      <img src="./s1/bg.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
      <img src="./s1/bg.jpg" :alt="`${info.caseName}_cloud`" class="cloud-item">
    </div>
    <img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <div class="logo absolute">
      <img src="./s1/logo.png" :alt="`${info.caseName}_img`">
    </div>
    <h1 class="title">
      以中路之名 於風禾屏息
    </h1>
    <div class="hr"></div>
    <h1 class="desc">
      26層ARTDECO摩天地標 55 •62• 69坪 菁英專屬
    </h1>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
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
  &:nth-child(1) {
    position: relative;
  }
}

.cloud {
  animation: move 50s 0s linear infinite;
  top: 0;
  left: 0;
  height: 100%;
}

.cloud-item {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

@keyframes move {
  to {
    transform: translateX(-50%);
  }
}

.logo {
  @include img_r_pc(252, 300, 274);
  img {
    width: 100%;
  }
}

.title {
  @include img_r_pc(442, 510, 182);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.98;
  letter-spacing: size(3.2);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.hr {
  @include div_r_pc(540, 1, 591, 133);
  background-color: #77623c;
}

.desc {
  @include img_r_pc(534, 610, 137);
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.59;
  letter-spacing: size(0.23);
  text-align: center;
  color: #000000;
}
/*
.logo2 {
  width: size(483);
  left: size(134);
  top: size(462);
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
  .section1 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(230);
    height: sizem(177);
    max-height: 26%;
    left: sizem(40);
    top: calc(70% - 30vw);
    svg {
      height: 100%;
    }
  }
  .cloud-item {
    width: auto;
    height: 120%;
    // height:auto;
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
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
