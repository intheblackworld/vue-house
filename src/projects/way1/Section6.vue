<template>
  <div class="section6">
    <h1 class="label"><span>對味</span>建築詠賦</h1>
    <h1 class="title">Taste Of Building Art</h1>
    <h1 class="subtitle">建築很有料</h1>
    <div class="hr"></div>
    <img src="./s6/06_img.jpg" :alt="`${info.caseName}_img`" class="img">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100vw;
  height: size(1129 + 358);
  max-height: size(1129 + 358);
  min-height: size(1129 + 358);
  position: relative;
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
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

.label {
  @include img_l_pc(400, 0, 104);
  top: auto;
  bottom: size(293);
  font-size: size(46);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.76);
  text-align: left;
  color: #5e5d5e;
  white-space: nowrap;
  span {
    font-weight: normal;
  }
}

.title {
  @include img_l_pc(731, 64, 105);
  top: auto;
  bottom: size(190);
  font-size: size(71.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(-5.01);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}
.subtitle {
  @include img_l_pc(731, 68 + 127, 468);
  top: auto;
  bottom: size(62);
  font-size: size(75.2);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: size(4.51);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}

.hr {
  @include img_l_pc(102, 180 + 68, 338);
  top: auto;
  bottom: size(113);
  border-bottom: solid size(5) #009fb1;
}

.img {
  @include img_l_pc(1712, 104, 104);
  height: size(871);
  object-fit: cover;
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
  .section6 {
    min-height: auto;
    max-height: initial;
    height: sizem(892);
  }

  .title {
    @include img_c_m(224, 40);
    font-size: sizem(24);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: sizem(0.96);
    text-align: center;
    color: #444444;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(318, 156);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #444444;
    white-space: nowrap;
  }

  .btn {
    @include div_l_m(266, 98, 25, 55);
    background: linear-gradient(to right, #3e3a39 5px, transparent 5px) 0 0,
      linear-gradient(to right, #3e3a39 5px, transparent 5px) 0 100%,
      linear-gradient(to left, #3e3a39 5px, transparent 5px) 100% 0,
      linear-gradient(to left, #3e3a39 5px, transparent 5px) 100% 100%,
      linear-gradient(to bottom, #3e3a39 5px, transparent 5px) 0 0,
      linear-gradient(to bottom, #3e3a39 5px, transparent 5px) 100% 0,
      linear-gradient(to top, #3e3a39 5px, transparent 5px) 0 100%,
      linear-gradient(to top, #3e3a39 5px, transparent 5px) 100% 100%;

    background-repeat: no-repeat;
    background-size: sizem(14) sizem(21);
  }

  .img-list {
    position: relative;
    width: sizem(342);
    margin: 0 auto;
    top: sizem(187);

    img {
      width: 100%;
      // height: sizem(230);
      object-fit: cover;
      margin-bottom: sizem(4);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
import info from '@/info'
export default {
  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s2/1.jpg'),
      //     // name: 'WE機能圖',
      //   },
      //   {
      //     img: require('./s2/2.jpg'),
      //     // name: 'WE機能圖',
      //   },
      //   {
      //     img: require('./s2/3.jpg'),
      //     // name: 'WE機能圖',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>