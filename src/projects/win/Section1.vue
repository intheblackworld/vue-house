<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s1/bg.jpg" alt="" class="bg-img">
      <img v-lazy="require('./s1/logo.png')" alt="" class="bg-img" data-aos="fade" data-aos-delay="200">
      <img src="./s1/bottom.png" alt="" class="b-img" data-aos="fade" data-aos-delay="400">
    </div>
    <div v-else class="fullscreen">
      <img src="./s1/mo/bg.jpg" alt="" class="bg-img">
      <img v-lazy="require('./s1/mo/logo.png')" alt="" class="bg-img" data-aos="fade" data-aos-delay="200">
      <img src="./s1/bottom.png" alt="" class="b-img" data-aos="fade" data-aos-delay="400">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.b-img {
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
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
  .logo {
    width: 80%;
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    height: auto;
  }

  .swiper-fullscreen {
    width: auto;
    height:100%;
    img {
      width: 100%;
      height: 100%;
    }
  .item .item-img{width: 100%;height: 100%;object-fit: cover;}

    .item-img.btn {
      width: size-m(183);
      height: auto;
      top: 47vh;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
.swiper-fullscreen {
    height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  .logo-swiper {
    width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    transform: none;
  .item::before{display:none;
  }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section1',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        direction: 'vertical',
        // effect: 'fade',
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
      //     img: require('./s1/t1.png'),
      //   },
      //   {
      //     img: require('./s1/t2.png'),
      //   },
      //   {
      //     img: require('./s1/t3.png'),
      //   },
      // ],

      // slideListM: [
      //   {
      //     img: require('./s1/mo/t1.png'),
      //   },
      //   {
      //     img: require('./s1/mo/t2.png'),
      //   },
      //   {
      //     img: require('./s1/mo/t3.png'),
      //   },
      // ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },

  created() {
    if (this.isMobile) {
      this.swiperOption.direction = 'horizontal'
    } else {
      this.swiperOption.direction = 'horizontal'
    }
  },

  mounted() {},

  computed: {},
}
</script>
