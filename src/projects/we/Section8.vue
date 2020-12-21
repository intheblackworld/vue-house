<template>
  <div>
    <div class="section8">
      <img src="./s8/logo.png" alt="" class="logo">
      <div class="title">
        威地段，輕首付，訂製宅，幸福住
      </div>
      <div class="subtitle">
        悅峰WE時代，我們的威時代
      </div>
      <div class="g-block"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(900);
  max-height: size(900);
  position: relative;
  background: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
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
  @include img_c_pc(482, 112);
}

.title {
  @include img_c_pc(824, 636);
  font-size: size(56);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: size(-1.12);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(830, 720);
  font-size: size(66);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
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
  .section8 {
    width: 100vw;
    height: sizem(394 + 45);
    min-height: auto;
    max-height: initial;
    overflow: hidden;
  }

  .g-block {
    @include div_l_m(375, 45, 0, 0);
    background-color: #318d92;
  }

  .logo {
    @include img_c_m(238, 81);
  }

  .title {
    @include img_c_m(310, 333);
    font-size: sizem(21);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: sizem(-0.42);
    text-align: center;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 364);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/1景觀戲水池.jpg'),
          name: '景觀戲水池 3D情境示意圖',
        },
        {
          img: require('./s8/2頂樓星空bar.jpg'),
          name: '頂樓星空bar 3D情境示意圖',
        },
        {
          img: require('./s8/3CASA迎賓大廳.jpg'),
          name: 'CASA迎賓大廳 3D情境示意圖',
        },
        {
          img: require('./s8/4人文交誼廳.jpg'),
          name: '人文交誼廳 3D情境示意圖',
        },
        {
          img: require('./s8/5地下停車場.jpg'),
          name: '社區出入空間 3D情境示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 8) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
