<template>
  <div class="section6">
    <img src="./s6/1.jpg" :alt="`${info.caseName}_img`" class="bg">
    <img src="./s6/img.png" :alt="`${info.caseName}_img`" class="img" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
    <img src="./s6/img_m.png" :alt="`${info.caseName}_img`" class="img" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
    <img src="./s3/icon.png" :alt="`${info.caseName}_img`" class="icon" data-aos="fade-up" data-aos-delay="200">
    <h1 class="label" data-aos="fade-up" data-aos-delay="200">
      ARTDECO
    </h1>
    <h1 class="title" data-aos="fade-up" data-aos-delay="400">
      26層凌空美學
    </h1>
    <h3 class="subtitle" data-aos="fade-up" data-aos-delay="600">
      凌空住宅美學 再造經典
    </h3>
    <h3 class="desc" data-aos="fade-up" data-aos-delay="800">
      以古典融會現代的「ARTDECO」裝飾風藝術設計，選用頂級石材建構外觀，以精工裝飾雕琢，成就公園首排最美城市天際線。
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(800);
  min-height: size(800);
  max-height: size(800);
  position: relative;
  background: radial-gradient(
    ellipse at 50%,
    rgb(164, 31, 50) 9%,
    rgb(13, 22, 21) 100%
  );
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after,
  // &::before {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.bg {
  @include img_l_pc(830, 0, 0);
}

.img {
  @include img_r_pc(363, 128, 77);
}

.icon {
  @include img_l_pc(68, 222, 923);
}

.label {
  @include img_l_pc(286, 222, 1006);
  font-size: size(53.1);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ba9f70;
  white-space: nowrap;
}

.title {
  @include img_l_pc(388, 298, 923);
  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: size(3);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(388, 400, 923);
  font-size: size(30.8);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: size(4.31);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(463, 471, 923);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(0.95);
  text-align: left;
  color: #cccccc;
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
    width: 100vw;
    height: sizem(361 + 489);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    // overflow: hidden;
    // &::after,
    // &::before {
    //   display: none;
    // }
  }

  .bg {
    @include img_l_m(375, 0, 0);
  }

  .img {
    @include img_c_m(350, 128);
    top: auto;
    bottom: sizem(28.7);
  }

  .icon {
    @include img_l_m(45.5, 361 + 34, 32);
  }

  .label {
    @include img_l_m(188, 361 + 38, 87.8);
    font-size: sizem(35);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #ba9f70;
    white-space: nowrap;
  }

  .title {
    @include img_l_m(239, 361 + 88, 32.3);
    font-size: sizem(37);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(1.85);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(245, 361 + 152, 33.7);
    font-size: sizem(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: sizem(2.94);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 361 + 201, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #cccccc;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
