<template>
  <div class="section9">
    <h3 class="title">
      跨足國際品牌<br />達麗建設堅實未來
    </h3>
    <div class="line"></div>
    <p class="subtitle">
      股票上市品牌達麗建設（代號6177）佈局北中南豪宅地標！<br />
      近年更跨足了美國西雅圖、舊金山不動產，商場經營投資！<br />
      多角經營彰顯實力品牌典範，為您的生活，迎接安心未來！
    </p>
    <div class="border">
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="`slide-9-${index}`" class="item">
        <img :src="slide.img" :class="`item-img`" />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next">
      <img src="./all/arrow-next.png" alt="">
    </div>
    <div class="swiper-button-prev">
      <img src="./all/arrow-prev.png" alt="">
    </div>
    <h3 class="bottom-title">
      總價 <span class="color">638</span> 萬起 <br />
      <span>全新完工 國際飯店宅即刻 Check in</span>
    </h3>
    <div class="line_c bottom-line"></div>
    <p class="bottom-subtitle">
      美麗島雙捷運線生活圈│高雄新站門戶未來│起漲蛋黃金區|空中泳池會館│20項豐富公設<br />
      <span>配備到位 一卡皮箱就入住</span>
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section9 {
  width: 100%;
  height: size(1065);
  position: relative;
  background-color: #3e2855;
  background-image: url('./s7/bg.png');
  background-size: cover;
  background-attachment: fixed;
  // background-size: cover;
  // background-position: 100%;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
}


.border {
  @include div_c_pc(1276, 188, 0);
  border: 2px solid #c9a063;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 size(34) size(34) 0;
    border-color: transparent #c9a063 transparent transparent;
  }
}

.border-bottom {
  @include img_c_pc(1190, 0);
  top: auto;
  bottom: size(40);
  border: 2px solid #c9a063;
}

.line {
  @include img_l_pc(128, 90, 818);
  transform: rotate(90deg);z-index: 3;
}

.title {
  @include img_l_pc(566, 25, 302);
  font-size: size(42);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(3);
  text-align: right;
  color: #c8a064;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(927, 30, 342);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(1.2);
  text-align: right;
  color: #fff;
}

.swiper {
  @include img_c_pc(1276, 225);
}
// .swiper-slide {
//   width: calc(33.33% - 10px);
// }
.item-img {
  width: size(415);
  cursor: pointer;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background: transparent;
}

.swiper-button-prev,
.swiper-button-next {
  width: size(72);
  top: size(405);
  img {
    width: 100%;
  }
}

.swiper-button-prev {
  left: size(220);
}

.swiper-button-next {
  right: size(220);
}

.bottom-title {
  @include img_c_pc(716, 0);
  top: auto;
  bottom: size(163);
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.75);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(5.5);
  text-align: center;
  color: #fff;
  white-space: nowrap;

  span {
    font-size: size(40);
    letter-spacing: size(4);
    white-space: nowrap;
  }

  .color {
    font-size: size(80);
    font-weight: 900;
    letter-spacing: normal;
    color: #c8a064;
    white-space: nowrap;
  }
}

.bottom-line {
  @include img_c_pc(1103, 0);
  transform: rotate(0deg);
  top: auto;
  bottom: size(143);
}

.bottom-subtitle {
  @include img_c_pc(994, 0);
  top: auto;
  bottom: 0;
  text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.9);
  font-family: NotoSansCJKtc;
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.21;
  letter-spacing: size(1.2);
  text-align: center;
  color: #fff;
  white-space: nowrap;

  span {
    font-size: size(36);
    letter-spacing: size(1.8);
    font-family: 'Noto Sans TC', serif;
    white-space: nowrap;
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
  .section9 {
    width: 100vw;
    height: sizem(578 + 280);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .border {
    @include div_c_m(335, 572, 30);
    border: 2px solid #c9a063;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: sizem(34) sizem(34) 0 0;
      border-color: #c9a063 transparent transparent transparent;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 sizem(34) sizem(34);
      border-color: transparent transparent #c9a063 transparent;
    }
  }

  .border-bottom {
    @include img_c_m(335, 0);
    top: auto;
    bottom: size(20);
    border: 2px solid #c9a063;
  }

  .line {
    @include img_c_m(306, 147);
  transform: rotate(0deg);
  }

  .title {
    @include img_l_m(268, 59, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.88);
    text-align: left;
    color: #c8a064;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(310, 164);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(0.45);
    text-align: left;
    color: #fff;
    white-space: normal;
  }

  .swiper {
    @include img_c_m(375, 345);
  }
  // .swiper-slide {
  //   width: calc(33.33% - 10px);
  // }
  .item-img {
    width: sizem(225);
    cursor: pointer;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next,
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background: transparent;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-button-prev {
    left: size(220);
  }

  .swiper-button-next {
    right: size(220);
  }

  .bottom-title {
    @include img_c_m(340, 0);
    top: auto;
    bottom: sizem(130);
    text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.75);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(2.5);
    text-align: center;
    color: #fff;
    white-space: nowrap;

    span {
      font-size: sizem(19);
      letter-spacing: sizem(2);
      white-space: nowrap;
    }

    .color {
      font-size: sizem(42);
      font-weight: 900;
      letter-spacing: normal;
      color: #c8a064;
      white-space: nowrap;
    }
  }

  .bottom-line {
    @include img_c_m(320, 0);
    top: auto;
    bottom: sizem(110);
  }

  .bottom-subtitle {
    @include img_c_m(330, 0);
    top: auto;
    bottom: 0;
    text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.9);
    font-family: NotoSansCJKtc;
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.21;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #fff;
    white-space: normal;

    span {
      font-size: sizem(16);
      letter-spacing: sizem(1.8);
      font-family: 'Noto Sans TC', serif;
      white-space: nowrap;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section9',

  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      swiperOption: {
        slidesPerView: isMobile ? 1.7 : 3,
        centeredSlides: true,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,

        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        {
          img: require('./s9/1.jpg'),
        },
        {
          img: require('./s9/2.jpg'),
        },
        {
          img: require('./s9/3.jpg'),
        },
        {
          img: require('./s9/4.jpg'),
        },
        {
          img: require('./s9/5.jpg'),
        },
        {
          img: require('./s9/6.jpg'),
        },
        {
          img: require('./s9/7.jpg'),
        },
        {
          img: require('./s9/8.jpg'),
        },
        {
          img: require('./s9/9.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
