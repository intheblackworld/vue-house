<template>
  <div class="section8">
    <picture>
      <source media="(max-width: 767px)" srcset="./webp/m/s8/sty_3.webp" type="image/webp" />
      <source media="(max-width: 767px)" srcset="./m/s8/sty_3.png" type="image/jpeg" />
      <img src="./m/s8/sty_3.png" :alt="`${info.caseName}`" class="sty_1">
    </picture>
    <div class="title" data-aos="fade" data-aos-delay="200">豪宅精工堅實後盾</div>
    <div class="border" data-aos="fade-left" data-aos-delay="400"></div>
    <div class="title-bg flex-c" data-aos="fade" data-aos-delay="600">
      東和鋼鐵<br />
      ╳<br />
      力泰混凝土
    </div>
    <h3 class="desc" data-aos="fade" data-aos-delay="800">
      特選用指標豪宅御用指定品牌，「東和鋼鐵」、「力泰一級廠預拌混凝土」雙強聯手變身全家的守護者，從內到外安心把關。
    </h3>
    <img src="./pc/s8/01.jpg" :alt="`${info.caseName}`" class="img1" data-aos="fade" data-aos-delay="1000">
    <img src="./pc/s8/01_logo.png" :alt="`${info.caseName}`" class="logo1" data-aos="fade" data-aos-delay="1100">
    <img src="./pc/s8/02.jpg" :alt="`${info.caseName}`" class="img2" data-aos="fade" data-aos-delay="1200">
    <img src="./pc/s8/02_logo.png" :alt="`${info.caseName}`" class="logo2" data-aos="fade" data-aos-delay="1300">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section8 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(134 + 278 + 164);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
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
  // opacity: 0.5;
}

.title {
  @include img_l(490, 40, 715, 218, 463, 30);
  font-size: size(57);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #00422d;
  white-space: nowrap;

  @include md {
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #00422d;
  }
}

.border {
  @include div_l(1668, 1, 135, 126, 333, 89, 216, 12);
  border-bottom: 2px solid #00422d;
  @include md {
    display: none;
  }
}

.title-bg {
  @include div_l(355, 355, 294, 210, 164, 164, 0, 30);
  background-image: url('./pc/s8/title_bg.jpg');
  background-size: 100% 100%;

  font-size: size(57);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.56);
  text-align: center;
  color: #ffd58c;
  white-space: nowrap;

  @include md {
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: sizem(1.5);
    text-align: center;
    color: #ffd58c;
  }
}

.desc {
  @include img_l(361, 679, 212, 314, 202, 30);
  font-size: size(30);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: left;
  color: #000;

  @include md {
    font-size: sizem(14);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.img1 {
  @include img_r(1107, 210, 157, 375, 298, 0);
}

.logo1 {
  @include img_r(248, 305, 967, 100, 158 + 164, 245);
}

.img2 {
  @include img_r(1107, 634, 157, 375, 278 + 164, 0);
}

.logo2 {
  @include img_r(291, 731, 209, 116, 306 + 164, 30);
}

.sty_1 {
  @include img_r_m(160, 0, -40);
  transform: skewY(5deg);
  transform-origin: 50% 0%;
  animation: leaf 5s ease-in-out alternate infinite;
  z-index: 5;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section8',

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
