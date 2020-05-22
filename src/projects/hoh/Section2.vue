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
      <img
        src="./s1/ball/r.png"
        class="ball6"
        data-aos="fade"
        data-aos-delay="600"
      >
      <div class="txt1">飛越洲子洋 看見最精彩</div>
      <div class="txt2">用台北蛋白的便利，享受洲子洋蛋黃的勝利</div>
      <div class="ball-container">
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
      </div>
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
      <div
        class="relative"
        v-if="!isMobile"
      >
        <img
          src="./event/event1.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event/event2.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event/30.png"
          alt=""
          class="red-bubble absolute"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
        <img
          src="./event/l.png"
          alt=""
          class="big-smile absolute"
        >
      </div>
      <div
        class="relative"
        v-else
      >
        <img
          src="./event_mo/event1.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event_mo/event2.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event_mo/l.png"
          alt=""
          class="big-smile absolute"
        >
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
  z-index: 3;
}
.txt1 {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  margin: 1em 0 1em 0.2em;
  color: #000;
  font-size: size(49);
  letter-spacing: 0.4em;
  font-weight: 900;
}
.txt2 {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  margin: 1em 0;
  color: #333;
  font-size: size(30);
  letter-spacing: 0.3em;
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
  animation-delay: 1s;
  transform: translateY(-15%);
}

.ball3 {
  right: size(80);
  top: size(-310);
  height: size(730);
  animation-delay: 2s;
  transform: translateY(-5%);
  opacity: 0.6;
}

.ball4 {
  right: size(580);
  top: size(410);
  height: size(95);
  animation-delay: 1s;
  transform: translateY(-15%);
}

.ball5 {
  right: size(80);
  top: size(510);
  height: size(280);
  transform: translateY(-8%);
}

.ball6 {
  position: absolute;
  height: size(222);
  left: size(365);
  top: size(15);
  transform: translateY(-5%) rotate(-5deg);
  animation: an2 1.5s infinite alternate;
  z-index: 3;
}
.ball-container {
  width: 100vw;
  height: 100vh;
  // min-height: size(400);
  top: 0;
  z-index: 1;
  position: fixed !important;
}
.swiper {
  width: size(1200);
  margin: size(100) auto 0;
  border-radius: 9vw;
}
.item-img {
  width: size(330);
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  &:nth-child(1) {
    position: relative;
  }
}

.red-bubble {
  top: size(484);
  right: size(384);
  width: size(323);
  z-index: 2;
}

.big-smile {
  top: size(874);
  right: size(382);
  width: size(390);
  animation: an 2s 1s infinite alternate;
  transform: translateY(-8%);
  z-index: 2;
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
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
    z-index: 0;
  }

  .ball4 {
    right: size-m(0);
    top: size-m(-50);
    height: size-m(130);
    transform: translateY(-15%);
    z-index: 0;
  }

  .ball5 {
    right: size-m(100);
    top: size-m(110);
    height: size-m(180);
    transform: translateY(-8%);
    z-index: 0;
  }

  .ball6 {
    left: size-m(73);
    top: size-m(0);
    height: size-m(45);
    z-index: 5;
    transform: translateY(-10%) rotate(-5deg);
  }
  .txt1 {
    font-size: size-m(18);
  }
  .txt2 {
    font-size: size-m(12);
    letter-spacing: 0.2em;
  }

  .big-smile {
    top: size-m(366);
    right: size-m(-20);
    width: size-m(140);
    z-index: 2;
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
