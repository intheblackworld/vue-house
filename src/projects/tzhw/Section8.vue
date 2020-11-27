<template>
  <div class="section8">
    <div class="bg relative">
      <swiper
        class="bg-img"
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src"
          class="item-img"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
          v-if="!isMobile"
        ></div>
        <div
          class="swiper-button-prev"
          slot="button-prev"
          v-if="isMobile"
        >
          <img
            src="./arrow-left.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
          v-if="isMobile"
        >
          <img
            src="./arrow-right.png"
            alt
          />
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  height: calc(100vh - 50px);overflow: hidden;
  overflow: hidden;
}

.section8 {
  &::v-deep {
    .swiper-pagination {
      // display: none;
      width: 100vw;
      text-align: right;
      left: 0;
      bottom: size(20);
      right:0;
      padding: 0 size(60) 0 0;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 6px !important;
      background-color: transparent;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #004ea2;
    }
  }
}

.bg-img {
  position: absolute;
  z-index: 2;
  height:100%;
}

.item-img {
  width: 100vw;
  height:100%;
  object-fit: cover;
}

.full-img {
  width: 100vw;
  height:100%;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: size-m(281);
  }
  .full-img,
  .bg-img {
    width: 100vw;
    height: size-m(281);
  }

  .item-img {
    width: 100vw;
    height: size-m(281);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'section8',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 10 : 30,
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

      slideList: [
        {
          src: require('./s8/1.jpg'),
        },
        {
          src: require('./s8/2.jpg'),
        },
        {
          src: require('./s8/3.jpg'),
        },
        {
          src: require('./s8/4.jpg'),
        },
        {
          src: require('./s8/5.jpg'),
        },
        {
          src: require('./s8/6.jpg'),
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
