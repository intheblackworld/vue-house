<template>
  <div class="section5">
    <img src="./s5/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <img src="./s5/title.png" :alt="`${info.caseName}_title`" class="title-img">
    <div class="title flex-ac" @click="$router.push('/news')">房產資訊</div>
    <img src="./s2/more.png" :alt="`${info.caseName}_more`" class="btn" @click="$router.push('/news')">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(900);
  // overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
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

.title {
  @include div_r_pc(520, 73, 709, 176);
  font-size: size(58);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: size(10.44);
  text-align: left;
  color: #000000;
  white-space: nowrap;
  cursor: pointer;
  background-color: #ffe900;
  padding-left: size(15);
}

.subtitle {
  @include div_l_pc(160, 55, 190, 370);
  font-size: size(37.3);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.title-img {
  @include img_l_pc(517, 632, 178);
}

.btn {
  @include img_r_pc(217, 746, 175);
  cursor: pointer;
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
  .section5 {
    width: 100vw;
    min-height: sizem(822);
    // max-height: sizem(812);
    // height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(402); 
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

  .title {
    @include div_l_m(375, 22, 161, 0);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_l_m(375, 22, 139, 0);
    font-size: sizem(15);
    text-align: center;
  }

  .s-bg {
    width: 100vw;
    margin-top: sizem(-160);
    z-index: 3;
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto !important;
    top: sizem(280) !important;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: sizem(20);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: sizem(51.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(10.32);
    text-align: center;
    color: #ffffff;
  }

  .shadow {
    @include img_l_m(1388, 900, 266);
  }

  .info {
    width: sizem(310);
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(554);
    border-top: 1px solid #ff8200;
    border-bottom: 1px solid #ff8200;
    padding: 20px 0;
    .info-item {
      width: 100%;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.65;
      letter-spacing: sizem(1);
      text-align: center;
      color: #ff8200;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    .info-title {
      font-weight: bold;
      &.full {
        width: 100%;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info  from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {
  },

  mounted() {
  },

  created() {},

  computed: {},
}
</script>
