<template>
  <div class="section5">
    <picture>
      <source media="(max-width: 767px)" srcset="./webp/m/s5/sty_1.webp" type="image/webp" />
      <source media="(max-width: 767px)" srcset="./m/s5/sty_1.png" type="image/jpeg" />
      <img src="./m/s5/sty_1.png" :alt="`${info.caseName}`" class="sty_1">
    </picture>
    <picture>
      <source media="(min-width: 767px)" srcset="./webp/s5/bg.webp" type="image/webp" />
      <source media="(min-width: 767px)" srcset="./pc/s5/bg.jpg" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./webp/m/s5/bg.webp" type="image/webp" />
      <source media="(max-width: 767px)" srcset="./m/s5/bg.jpg" type="image/jpeg" />
      <img src="./pc/s5/bg.jpg" :alt="`${info.caseName}`" class="bg">
    </picture>
    <!-- <picture>
      <source srcset="./webp/s2/sty_2.webp" type="image/webp" />
      <source srcset="./pc/s2/sty_2.jpg" type="image/jpeg" />
      <img src="./pc/s2/sty_2.jpg" :alt="`${info.caseName}`" class="sty_2" data-aos="fade" data-aos-delay="800">
    </picture> -->
    <div class="title-bg">
    </div>
    <div class="title" data-aos="fade" data-aos-delay="200" v-if="isPC">
      全棟崗石<br />霸氣經典
    </div>
    <div class="title" data-aos="fade" data-aos-delay="200" v-if="isMobile">
      全棟崗石 霸氣經典
    </div>
    <div class="border" data-aos="fade-right" data-aos-delay="400"></div>
    <h3 class="desc" data-aos="fade" data-aos-delay="600">
      大器簡約的建築線條，勾勒不凡的地標氣勢，外觀承襲國際建築立面造型，全棟崗石外觀設計，三面環景搭配跳層陽台，更貼近自然景觀的律動，自然寫意出陽明山下最美的生活原型，成就北投新富地標。
    </h3>
    <div class="bg-name">
      3D外觀參考示意圖
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section5 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(380 + 256);
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

.bg-name {
  position: absolute;
  right: 1em;
  bottom: 1em;

  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #fff;

  @include md {
    right: 1em;
    bottom: auto;
    top: sizem(350);

    font-size: sizem(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #fff;
  }
}

.title-bg {
  @include div_l(531, 1080, 0, 200, 375, 256, 380, 0);
  background-image: url('./pc/s5/contant_bg.jpg');
  background-size: 100% 100%;

  @include md {
    background-image: url('./m/s5/contant_bg.jpg');
    top: auto;
    bottom: 0;
  }
}

.title {
  @include img_l(244, 216, 342, 218, 385, 30);
  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #ffd58c;
  white-space: nowrap;

  @include md {
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #ffd58c;
  }
}

.border {
  @include img_l(379, 380, 276, 315, 459, 30);
  border-bottom: 2px solid #fff;

  @include md {
    border-bottom: 1px solid #fff;
  }
}

.desc {
  @include img_l(378, 398, 276, 315, 474, 30);
  font-size: size(30);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: left;
  color: #fff;

  @include md {
    font-size: sizem(14);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
}

@keyframes leaf {
  to {
    transform: skew(0) rotate(0deg);
  }
}

.sty_1 {
  @include img_l_m(160, 273, -80);
  transform: skewY(5deg);
  transform-origin: 50% 0%;
  animation: leaf 5s ease-in-out alternate infinite;
  z-index: 5;
}

.btn-title {
  @include div_r(83, 552, 119, 104, 276, 41.5, 40, 57.5);
  background-image: url('./pc/s4/title_bg.jpg');
  background-size: 100% 100%;

  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.6);
  text-align: left;
  color: #ffd58c;
  white-space: nowrap;
  writing-mode: vertical-rl;
  text-orientation: upright;

  @include md {
    background-image: url('./m/s4/title_bg.jpg');
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #ffd58c;
  }
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: size(1080);
  min-height: size(1080);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(380);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
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
  name: 'section5',

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
