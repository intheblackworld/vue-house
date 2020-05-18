<template>
  <div class="section2">
    <div class="bg relative">
      <img
        :src="`${isMobile ? require('./s2/txt_m.png') : require('./s2/txt.png')}`"
        alt=""
        class="txt"
        data-aos="fade"
        data-aos-delay="300"
      >
      <div class="relative ball-container">
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball1"
        >

        <img
          src="./s1/ball/ball.png"
          alt=""
          class="ball ball2"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball3"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball4"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball5"
        >
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class="swiper"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide"
            class="item"
          >
            <img
              :src="slide"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background-color: #fddb3e;
}

.txt {
  position: relative;
  width: size(1580);
  margin: 0 auto;
  z-index: 2;
}

.ball {
  position: absolute;
  animation: an 2s infinite alternate;
}

.ball1 {
  left: size(80);
  top: size(-180);
  height: size(513);
  transform: translateY(-15%);
}

.ball2 {
  left: size(20);
  top: size(430);
  height: size(240);
  transform: translateY(-15%);
}

.ball3 {
  right: size(80);
  top: size(-310);
  height: size(730);
  transform: translateY(-5%);
}

.ball4 {
  right: size(580);
  top: size(410);
  height: size(95);
  transform: translateY(-15%);
}

.ball5 {
  right: size(80);
  top: size(510);
  height: size(280);
  transform: translateY(-8%);
}

.ball-container {
  min-height: size(400);
}
.swiper {
  width: size(1200);
  margin: size(100) auto 0;   border-radius: 9vw;
}
.item-img {
  width: size(330);
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    min-height: auto;
  }

  .swiper {
    width: 90vw;
    margin: size-m(30) auto 0; 
  }

  .item-img {
    width: size-m(100);
  }

  .ball1 {
    left: size-m(80);
    top: size-m(-180);
    height: size-m(143);
    transform: translateY(-15%);
  }

  .ball2 {
    left: size-m(0);
    top: size-m(80);
    height: size-m(50);
    transform: translateY(-15%);
  }

  .ball3 {
    left: size-m(40);
    top: size-m(-40);
    height: size-m(90);
    transform: translateY(-5%);
  }

  .ball4 {
    right: size-m(0);
    top: size-m(-50);
    height: size-m(130);
    transform: translateY(-15%);
  }

  .ball5 {
    right: size-m(100);
    top: size-m(110);
    height: size-m(180);
    transform: translateY(-8%);
    z-index: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    Parallax,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        require('./s2/1.png'),
        require('./s2/2.png'),
        require('./s2/3.png'),
        require('./s2/4.png'),
        require('./s2/5.png'),
        require('./s2/6.png'),
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
