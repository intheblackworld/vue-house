<template>
  <div class="section1">
    <div class="o"></div>
    <img src="./s1/bg.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
    <img src="./s1/logo_m.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
    <div class="title" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
      10-27坪｜金融聚富核心 潮流居所｜行天宮站200米
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
      <b>10-27坪｜行天宮站200米</b><br />金融聚富核心 潮流居所
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
  height: calc(100vh - 4.1666666667vw);
  margin: 4.1666666667vw 0 0 0;
  min-height: size(820);
  max-height: size(1000);
  position: relative;
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
  opacity: 1;

  &:nth-child(1) {
    position: relative;
  }
}
.o{
  @include img_l_pc(430, 102, 222);
  top: calc(50% + 100vw * (102 - 540) / 1920);
  height:size(430);
  background-color: #fffbf0;
  border-radius: 50%;
  transform-origin: 50% 50%;
  transform:scale(3)translateX(300%);
  animation: move 5s forwards;
}
@keyframes move {
    0% {
  transform:scale(3)translateX(300%);
    }

    40% {
  transform:scale(2) translateX(-100%);
    }

    75% {
  transform:scale(2) translateX(250%);
    }

    90% {
  transform:scale(2) translateX(0%);
    }

    100% {
  transform:scale(1) translateX(0%);
    }
}

.logo {
  @include img_r_pc(766, 330, 272);
  top: calc(50% + 100vw * (280 - 540) / 1920);
}

.title {
  @include img_r_pc(992, 705, 152);
  top: calc(50% + 100vw * (655 - 540) / 1920);
  font-size: size(46);
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
  top: calc(50% + 100vw * (724 - 540) / 1920);
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
  top: calc(50% + 100vw * (737 - 540) / 1920);
  border: 1px solid #fff;
  font-size: size(41);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: size(4.07);
  text-align: center;
  color: #ffffff;
  background-color: #fffbf000;
  cursor: pointer;
  transition: all 0.5s;
  &:hover{
    background-color: #fffbf0;
    color:#c82514;
  }
}

.logos {
  @include img_r_pc(160, 787, 156);
  top: calc(50% + 100vw * (737 - 540) / 1920);
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
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
  }

.bg-img {
  object-fit: contain;
}
.o{
  @include img_l_m(103, 42, 71);
  top: calc(50% + 100vw * (42 - 302) / 375);
  height:sizem(103);
}

  .logo {
    @include img_r_m(79.5, 44, 79.5);
  top: calc(50% + 100vw * (44 - 302) / 375);
  }

  .title {
    @include img_c_m(330, 345);
  top: calc(50% + 100vw * (345 - 302) / 375);
    font-size: sizem(25.4);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    // white-space: nowrap;
    b{font-size: 0.903em}
  }

  .phone {
    @include img_c_m(260, 430);
  top: calc(50% + 100vw * (430 - 302) / 375);
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
    @include div_r_m(150, 40, 509,57.5);
  top: calc(50% + 100vw * (509 - 302) / 375);
    border: 1px solid #fff;
    font-size: sizem(18);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: 0.1em;
    text-align: center;
    color: #ffffff;
  }

  .logos {
    @include img_l_m(80, 510, 57.5);
  top: calc(50% + 100vw * (510 - 302) / 375);
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
