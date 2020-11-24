<template>
  <div class="section1">
    <div class="bg-img">
    <img src="./s1/bg.jpg" alt="bg" v-if="isPC">
    <img src="./s1/bg.jpg" alt="bg" v-if="isPC">
    <img src="./s1/bg_m.jpg" alt="bg" v-if="isMobile">
    <img src="./s1/bg_m.jpg" alt="bg" v-if="isMobile">
    <img src="./s1/bg_m.jpg" alt="bg" v-if="isMobile"></div>
    <img src="./s1/img.png" alt="" class="img" data-aos="fade" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/img_m.png" alt="" class="img" data-aos="fade" data-aos-delay="0" v-else>
    <img src="./s1/logo.png" alt="" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
    <img src="./s1/logo_m.png" alt="" class="logo" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">

    <img src="./s1/logo2.png" alt="" class="logo2" data-aos="fade" data-aos-delay="1000">
    <h1 class="title1" data-aos="fade" data-aos-delay="400">
      先嗇宮站2~3房
    </h1>
    <h1 class="title2" data-aos="fade" data-aos-delay="600">
      公園校園 即將成雙
    </h1>
    <h1 class="phone" data-aos="fade" data-aos-delay="800">
      8985-6888
    </h1>
    <h1 class="btn flex-c" v-scroll-to="{element: `#contact`}" data-aos="fade" data-aos-delay="1000">
      立即預約
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background: url('./s1/bg.png') fixed;
  background-size: auto;
}

.bg-img {
  width: 100%;
  height: 100%;overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &::after{content: "";width: 100%;height: 30%;
  position: absolute;
  bottom: 0;left: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);}

  &:nth-child(1) {
    position: relative;
  }
  img{width: 100%;position: relative;float: left;
    animation: tr 30s linear infinite;
    transform: translate(0%, -100%);}
}
@keyframes tr {
  to {
    transform: translate(0%, 0%);
  }
}

.img {
 // @include img_l_pc(722, 0, 0);
  @include img_c(700, calc(50% - 33vw), 0);
}

.logo {
 // @include img_r_pc(605, 304, 157);
  @include img_c(605, calc(50% - 13vw),size(1158));
}

.logo2 {
  //@include img_r_pc(163, 866, 155);
  
  @include img_c(163, calc(50% + 16vw),size(1602));
}

.title1 {
  //@include img_r_pc(433, 752, 709);
  @include img_c(433, calc(50% + 10vw),size(778));
  font-size: size(58);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.8);
  text-align: left;
  color: #248184;
  white-space: nowrap;
}

.title2 {
  @include img_c(512, calc(50% + 10vw),size(1254));
  font-size: size(58);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.3);
  text-align: left;
  color: #000;
  white-space: nowrap;
}

.phone {
  //@include img_r_pc(451, 823, 691);
  @include img_c(451, calc(50% + 14.5vw),size(778));
  font-size: size(102);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: size(-3.98);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.btn {
 // @include div_r_pc(280, 77, 863, 375);
  @include img_c(280, calc(50% + 16vw),size(1264));
  height:size(77);
  border: 2px solid #248184;
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: size(3.69);
  text-align: left;
  color: #248184;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #248184;
    color: #fff;
  }
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
    min-height:calc(161vw + 80vw);
    max-height: sizem(812);
    height: calc(100vh - 63px + 80vw);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }


  .img {
    @include img_l_m(201, 0, 0);
  }

  .logo {
    @include img_r_m(95, 47, 73);
  }

  .logo2 {
    @include img_l_m(65, 515, 69);
  }

  .title1 {
    @include img_r_m(239, 348, 72);
    font-size: sizem(32);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.2);
    text-align: left;
    color: #248184;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(239, 391, 71);
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .phone {
    @include img_r_m(239, 428, 71);
    font-size: sizem(54);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: sizem(-2.11);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .btn {
    @include div_r_m(114, 31, 513, 78);
    border: 1px solid #248184;
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(1.44);
    text-align: left;
    color: #248184;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #248184;
      color: #fff;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
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
