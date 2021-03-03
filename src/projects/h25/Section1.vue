<template>
  <div class="section1">
    <img src="./s1/bg.gif" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/1.png" :alt="`${info.caseName}_img`" class="img1">
    <img src="./s1/2.png" :alt="`${info.caseName}_img`" class="img2">
    <img src="./s1/3.png" :alt="`${info.caseName}_img`" class="img3">
    <img src="./s1/4.png" :alt="`${info.caseName}_img`" class="img4">
    <img src="./s1/logo宜娟要補svg動畫.png" :alt="`${info.caseName}_logo`" class="logo">
    <img src="./s1/t.png" :alt="`${info.caseName}_logo`" class="t">
    <!-- <div class="animate-slide" v-if="isPC">
      <img src="./s1/漂浮物件_分層/class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img src="./s1/漂浮物件_分層/class_2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="3">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img src="./mo/s1/漂浮物件_分層/m_1_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="3">
      <img src="./mo/s1/漂浮物件_分層/m_1_class_2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
    </div> -->
    <!-- <h1 class="title">
      G12幸福到站 <span>|</span> 26-40坪 <span v-if="isPC">|</span> <div v-if="isPC">(03) 325-7555</div>
    </h1>
    <h1 class="subtitle">
      新潮生活 登入經國
    </h1> -->
    <!-- <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="logo">
    <img src="./s1/btn.png" :alt="`${info.caseName}_bg`" class="order-btn flex-c" v-scroll-to="{element: '#contact'}"> -->
  </div>
</template>
<style lang="scss">
// .Masthead,
// .Masthead__image {
//   height: auto;
//   min-height: 73.875rem;
//   z-index: 3;
// }
// .Masthead__image > img {
//   height: auto;
//   min-height: auto;
//   object-fit: contain;
// }

// .Masthead__image.is-parallax > img {
//   height: auto;
//   min-height: auto;
// }
// .is-parallax {
//   transition: all 0.3s;
// }

// @media (max-width: 768px) {
//   .Masthead,
//   .Masthead__image {
//     height: auto !important;
//     min-height: 152vw;
//   }
// }
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.section1 {
  background-size: cover;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
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
  height: size(1080 + 605);
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

.img1 {
  @include img_l_pc(507, -50, 552);
}
.img2 {
  @include img_r_pc(280, 20, 593);
}
.img3 {
  @include img_l_pc(404, 279, 589);
}
.img4 {
  @include img_r_pc(523, 164, 574);
}

.logo {
  @include img_c_pc(752, 0);
}
.t {
  @include img_c_pc(553, 737);
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

  .img1 {
    @include img_l_m(231, -50, 12);
  }
  .img2 {
    @include img_r_m(128, 43, 39);
  }
  .img3 {
    @include img_l_m(183, 165, 23);
  }
  .img4 {
    @include img_r_m(238, 143, 17);
  }

  .logo {
    @include img_c_m(337, 0);
  }
  .t {
    @include img_c_m(310, 420);
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
