<template>
  <div class="relative">
    <div v-if="!isMobile">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <swiper-slide
          v-for="(slide, index) in imgList"
          :index="index"
          :key="slide"
          class="item-img"
        >
          <img
            :src="slide"
            :class="`item-img`"
          />
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./箭頭1.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./箭頭2.png"
            alt
          />
        </div>
      </swiper>
      <div class="text-row flex-ac flex-jb">
        <div>
          <h3 class="title">
            飯店風格精品生活
          </h3>
          <h3 class="subtitle">內蘊優雅美學品味</h3>
        </div>
        <div class="desc">
          挑高門廳以簡潔斂達的手法，傳遞光影表現下的空間層次，交誼廳結合lounge bar、閱讀室、多功能教室、健身房、音樂琴房；空中花園休憩茶席融入雙溪最美的一方山水，享受城市農夫之樂。
        </div>
      </div>
    </div>
    <div v-if="isMobile">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: 100vh;
  margin: 0;
  background: #fff;
  background-image: url('./s2/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  padding-top: size(102);
  margin-bottom: size(250);
}

.swiper-container {
  width: size(961);
  margin: 0 auto;
}

.text-row {
  width: size(970);
  margin: 30px auto 0;
}

.title {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 4.85px;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  letter-spacing: 8.28px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  text-align: left;
  color: #000000;
}

.desc {
  width: size(520);
  font-size: size(17);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.02;
  letter-spacing: 1.36px;
  text-align: left;
  color: #4d4d4d;
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(400);
    margin: 30vw 0 10vw;
  }

  .animate-row,
  .animate-row1 {
    bottom: 10vh;
  }

  .item-img {
    height: size-m(267);
    width: 100%;
    object-fit: cover;

    &.height {
      height: size-m(459);
    }
  }

  .img {
    width: size-m(300);
  }

  @keyframes moveImg {
    0% {
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(0);
      transform: translateX(-25%);
    }

    to {
      -webkit-transform: translateX(-100vw);
      transform: translateX(-50%);
    }
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
  name: 'section9',
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
        slidesPerView: isMobile ? 2.2 : 1,
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
      imgList: [require('./s8/img1.jpg')],
    }
  },

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>