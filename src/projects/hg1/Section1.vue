<template>
  <div class="section1">
    <div class="animate-slide" v-if="isPC">
      <img src="./s1/漂浮物件_分層/class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img src="./s1/漂浮物件_分層/class_2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="3">
      <!-- <img src="./s1/pc2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="2">
      <img src="./s1/pc1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="1"> -->
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img src="./mo/s1/漂浮物件_分層/m_1_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="3">
      <img src="./mo/s1/漂浮物件_分層/m_1_class_2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
    </div>
    <h1 class="title">
      G12幸福到站 <span>|</span> 26-40坪 <span v-if="isPC">|</span> <div v-if="isPC">(03) 325-7555</div>
    </h1>
    <h1 class="subtitle">
      新潮生活 登入經國
    </h1>
    <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="logo">
    <img src="./s1/btn.png" :alt="`${info.caseName}_bg`" class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto;
  min-height: 73.875rem;
  z-index: 3;
}
.Masthead__image > img {
  height: auto;
  min-height: auto;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto;
  min-height: auto;
}
.is-parallax {
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 152vw;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.section1 {
  background-size: cover;
  position: relative;
  z-index: 3;
  overflow: visible;
  width: 100vw;
  min-height: size(1080);
  height: size(1080);
  background: linear-gradient(
    to bottom,
    rgba(0, 131, 190, 0) 13%,
    rgba(0, 131, 190, 0.66) 42%,
    #0083be 57%
  );
  // background-size: cover;
}

.logo {
  @include img_c_pc(779, 353);
  top: calc(50% - 14.5vw);
}

.order-btn {
  @include img_c_pc(171, 688);
  // top: calc(50% + 12.3vw);
  z-index: 10;
  cursor: pointer;
  &:hover {
    animation: an4 3s infinite;
  }
}

.title {
  @include img_c_pc(772, 530);
  font-size: size(42);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: size(0.29);
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #df9529;
    font-size: size(30);
    line-height: 1.24;
  }
}

.subtitle {
  @include img_c_pc(772, 591);
  font-size: size(55.9);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(37.98);
  text-align: left;
  color: #df982a;
  white-space: nowrap;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .left1 {
    @include img_l_pc(314, 417, 0);
  }

  .left2 {
    @include img_l_pc(240, -150, 220);
    transform: rotate(30deg) !important;
    animation: none !important;
  }

  .left3 {
    @include img_l_pc(18, 654, 235);
  }

  .pc1 {
    @include img_r_pc(1920, 0, 0);
  }

  .pc2 {
    @include img_r_pc(1920, 0, 0);
  }

  // .pc3 {
  //   @include img_r_pc(1994, 400, -44);
  // }

  // .pc4 {
  //   @include img_r_pc(1700, 630, 200);
  // }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an3 {
  to {
    transform: rotate(5deg);
  }
}
@keyframes an4 {
  80% {
    transform: scale(1.2) rotate(5deg);
  }
  85% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
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
    height: sizem(705);
    position: relative;
    z-index: 2;
    // overflow: hidden;
  }

  .logo {
    @include img_c_m(310, 160);
    // top: calc(50% - 14.5vw);
  }

  .order-btn {
    @include img_c_m(80, 385);
    // top: calc(50% + 12.3vw);
    z-index: 10;
    cursor: pointer;
    &:hover {
      animation: an4 3s infinite;
    }
  }

  .title {
    @include img_c_m(310, 271);
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: sizem(0.2);
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    span {
      color: #df9529;
      font-size: sizem(20);
      line-height: 1.24;
    }
  }

  .subtitle {
    @include img_c_m(260, 321);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(13);
    text-align: left;
    color: #df982a;
    white-space: nowrap;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    // .left1 {
    //   // @include img_l_pc(314, 417, 0);
    //   display: none;
    // }

    // .left2 {
    //   // @include img_l_pc(240, -150, 220);
    //   // transform: rotate(30deg) !important;
    //   // animation: none !important;
    //   display: none;
    // }

    // .left3 {
    //   // @include img_l_pc(18, 654, 235);
    //   display: none;
    // }

    .mo1 {
      @include img_c_m(405, 80);
    }

    .mo2 {
      @include img_c_m(375, -20);
    }
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
import Parallax from '@/components/Parallax.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section7',

  // mixins: [slider],
  components: {
    // swiper,
    // swiperSlide,
    Parallax,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1.4 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? -10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

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

      imgIndex: 0,
      isShowDialog: false,
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
