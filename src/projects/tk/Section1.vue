<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <!-- <img src="./s1/背景亮亮.gif" :alt="`${info.caseName}_img`" class="bg-img mix"> -->
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade" data-aos-delay="200">
    <div class="title" data-aos="fade" data-aos-delay="400" v-if="isPC">
      發現 東京地標宅 起漲 高雄雙捷運
    </div>
    <div class="title" data-aos="fade" data-aos-delay="400" v-if="isMobile">
      發現 東京地標宅<br />起漲 高雄雙捷運
    </div>
    <div class="subtitle" data-aos="fade" data-aos-delay="600">
      總價<span>588</span>萬起 全新落成 優雅入住
    </div>
    <div class="line line-bottom" data-aos="fade-right" data-aos-delay="600" v-if="isMobile"><span></span></div>
    <div class="line line-left" data-aos="fade-right" data-aos-delay="600" v-if="isPC"><span></span></div>
    <div class="line line-right" data-aos="fade-left" data-aos-delay="600" v-if="isPC"><span></span></div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';

.section1 {
  background-size: cover;
  position: relative;
  overflow: visible;
  width: 100%;
  height: size(1080);
  // background: linear-gradient(
  //   to bottom,
  //   rgba(0, 131, 190, 0) 13%,
  //   rgba(0, 131, 190, 0.66) 42%,
  //   #0083be 57%
  // );
  // background-size: cover;
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

.mix {
  mix-blend-mode: multiply;
}

.logo {
  @include img_c_pc(560, 322);
}

.title {
  @include img_c_pc(818, 791);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.96;
  letter-spacing: size(5);
  text-align: right;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(582, 857);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
  font-size: size(36);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: size(1.8);
  text-align: right;
  color: #fff;
}

.line-left {
  @include img_l_pc(275, 885, 378);
}

.line-right {
  @include img_r_pc(275, 885, 358);
  &::before {
    animation: hrr 3s linear infinite;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    background-size: cover;
    margin: 0;
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    position: relative;
    z-index: 2;
    // overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .mix {
    mix-blend-mode: multiply;
  }

  .logo {
    @include img_c_m(313, 141);
  }

  .title {
    @include img_c_m(231, 335);
    text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
    font-size: sizem(29);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.34;
    letter-spacing: sizem(2.9);
    text-align: right;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(307, 469);
    text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.75);
    font-size: sizem(19);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: 0.95px;
    text-align: right;
    color: #fff;

    span {
      font-family: 'Noto Serif TC', serif;
      font-size: sizem(29);
      color: #c8a064;
    }
  }

  .line-bottom {
    @include img_c_m(314, 457);
  }
}
</style>

<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
// import 'swiper/dist/css/swiper.css'
// import Parallax from '@/components/Parallax.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section1',

  // mixins: [slider],
  components: {
    // swiper,
    // swiperSlide,
    // Parallax,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      // swiperOption: {
      //   slidesPerView: isMobile ? 1.4 : 1,
      //   centeredSlides: true,
      //   spaceBetween: isMobile ? -10 : 30,
      //   slidesPerColumn: isMobile ? 1 : 1,
      //   effect: isMobile ? '' : 'fade',

      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true,
      //   },
      //   loop: true,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      //   },
      // },

      // slideList: [
      //   {
      //     src: require('./s6/1.png'),
      //     title: 'INTERIOR SPACE',
      //     subtitle: '國際一線美學，名門傲氣優雅',
      //     desc: '代表作品∣頤海大院．台中帝寶．開璽吾界． SKY1',
      //   },
      //   {
      //     src: require('./s6/2.png'),
      //     title: 'ARCHITECTURE',
      //     subtitle: '動感琴鍵協奏，定義奢華高度',
      //     desc: '代表作品∣波爾多．江翠ONE．金城舞2',
      //   },
      //   {
      //     src: require('./s6/3.png'),
      //     title: 'LANDSCAPE',
      //     subtitle: '環境人文思考，都會繁花盛放',
      //     desc: '代表作品∣維多利亞酒店．碧波白',
      //   },
      // ],

      // imgIndex: 0,
      // isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  created() {},
  mounted() {},
}
</script>
