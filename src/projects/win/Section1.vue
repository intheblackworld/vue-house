<template>
  <div class="relative">
    <div
      class="modal"
      v-if="modal"
    >
      <div
        class="mask"
        @click="modal = false"
      ></div>
      <div>
        <img
          src="./s1/w.jpg"
          alt
          v-if="!isMobile"
        />

        <img
          src="./s1/mo.jpg"
          alt
          v-else
        />
        <img
          src="@/projects/jh/s4/close.png"
          alt
          class="close"
          @click="modal = false"
        />
      </div>
    </div>
    <div v-if="!isMobile">
      <img
        src="./s1/1.jpg"
        alt=""
        class="bg-img"
      >
      <img
        src="./s1/2.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="400"
      >
      <img
        src="./s1/3.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="600"
      >
      <img
        src="./s1/4.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="800"
      >
      <img
        src="./s1/5.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <img
        src="./s1/bottom.png"
        alt=""
        class="b-img"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <img
        src="./s1/right.png"
        alt=""
        class="btn absolute"
        data-aos="fade"
        data-aos-delay="1000"
        @click="showDialog"
      >
    </div>
    <div v-else>
      <img
        src="./s1/m/1.jpg"
        alt=""
        class="bg-img"
      >
      <img
        src="./s1/m/2.png"
        alt=""
        class="bg-img bottom"
        data-aos="fade"
        data-aos-delay="400"
      >
      <img
        src="./s1/m/3.png"
        alt=""
        class="bg-img bottom"
        data-aos="fade"
        data-aos-delay="600"
      >
      <img
        src="./s1/m/4.png"
        alt=""
        class="bg-img bottom"
        data-aos="fade"
        data-aos-delay="800"
      >
      <img
        src="./s1/m/5.png"
        alt=""
        class="bg-img bottom"
        data-aos="fade"
        data-aos-delay="1000"
      >

      <img
        src="./s1/right.png"
        alt=""
        class="btn absolute"
        data-aos="fade"
        data-aos-delay="1000"
        @click="showDialog"
      >

      <!-- <img
        src="./s1/bottom.png"
        alt=""
        class="b-img"
        data-aos="fade"
        data-aos-delay="400"
      > -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: auto;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: auto;
  // height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;

  &:nth-child(1) {
    position: relative;
  }
}

.b-img {
  width: 100%;
  height: 7vh;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
}

.btn {
  width: size(200);
  top: 70%;
  right: 0;
  cursor: pointer;
}

.fix-group {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 63px;

  .button {
    font-size: 18px;
    color: #fff;
    width: 150px;
    height: 150px;
    border-radius: 999px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed !important;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .mask {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
  }

  > div {
    position: relative;
  }

  img {
    position: relative;
    z-index: 122;
    max-width: calc(100vw - 140px);
    max-height: calc(100vh - 220px);
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(130%, 0%);
    cursor: pointer;
    width: 30px;
  }
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
  .relative {
    height: auto;
  }
  .bg-img {
    height: calc(100vh - 63px - 60px) !important;

    &.bottom {
      object-position: bottom;
    }
  }

  .btn {
    top: 50%;
  }

  .modal {
    width: 100vw;
    height: 100vh;
    z-index: 200;
    position: fixed !important;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .mask {
      background: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100vh !important;
      position: absolute;
      z-index: 110;
    }

    > div {
      position: relative;
    }

    img {
      position: relative;
      z-index: 122;
      max-width: calc(100vw - 20px);
    }

    .close {
      width: 40px;
      position: absolute;
      top: -50px;
      right: 50px;
      cursor: pointer;
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
      modal: true,
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

    showDialog() {
      this.modal = true
    },

    closeDialog() {
      this.modal = false
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
