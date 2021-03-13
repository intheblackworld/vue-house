<template>
  <div class="section1">
    <img src="./s1/bg.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
    <img src="./s1/logo_m.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
    <div class="title" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
      10-27坪｜金融聚富核心 潮流居所｜行天宮站200米
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
      10-27坪｜行天宮站200米<br />金融聚富核心 潮流居所
    </div>
    <div class="phone" data-aos="fade-up" data-aos-delay="600">
      2966-8888
    </div>
    <div class="btn flex-c" data-aos="fade-up" data-aos-delay="700" v-scroll-to="{ element: `#contact` }">
      即刻預約
    </div>
    <img src="./s1/logos.png" :alt="`${info.caseName}_img`" class="logos" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-200">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background: url('./s1/bg.png') fixed;
  background-size: auto;
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
  opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_r_pc(766, 330, 272);
}

.title {
  @include img_r_pc(992, 705, 154);
  font-size: size(45.5);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: size(-1.87);
  text-align: left;
  color: #ffffff;
}

.phone {
  @include img_r_pc(479, 774, 667);
  font-size: size(103.6);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.92;
  letter-spacing: size(-3.11);
  text-align: left;
  color: #ffffff;
}

.btn {
  @include div_r_pc(280, 77.3, 787, 358);
  border: 1px solid #fff;
  font-size: size(40.7);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: size(4.07);
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}

.logos {
  @include img_r_pc(160, 787, 156);
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
    min-height: sizem(665);
    max-height: sizem(812);
    height: sizem(665);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .logo {
    @include img_r_m(79.5, 44, 79.5);
  }

  .title {
    @include img_c_m(330, 345);
    font-size: sizem(25.4);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    // white-space: nowrap;
  }

  .phone {
    @include img_c_m(260, 430);
    font-size: sizem(55);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: sizem(-0.55);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .btn {
    @include div_r_m(113, 31.3, 509, 77.7);
    border: 1px solid #fff;
    font-size: sizem(16.5);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.65);
    text-align: left;
    color: #ffffff;
  }

  .logos {
    @include img_l_m(60, 510, 74);
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

  mounted() {},

  created() {},

  computed: {},
}
</script>
