<template>
  <div class="relative">
    <div
      v-if="!isMobile"
      class="flex"
    >
      <swiper
        class="swiper-container absolute"
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in imgList"
          :index="index"
          :key="slide"
        >
          <img
            :src="slide"
            :class="`item-img`"
          />
        </swiper-slide>
      </swiper>
      <div class="content">
        <h3 class="title absolute">
          大師藝術彩繪日常生活時光
        </h3>
        <div class="hr absolute"></div>
        <div class="desc absolute">
          以「藝術」貫穿全棟會館設計風格，從17.18世紀的古典主義與印象主義，到19世紀的超現實主義，結合現代的藝術設計，形成「京城美術皇居」全棟公設會館的一致風格，成為台灣獨一無二、硬體與軟體同步到位的藝術建築。
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
  position: relative;
  height: size(1080);
}

.swiper-container {
  width: 100vw;
  height: size(1080);
  top: 0;
  left: 0;
}

.content {
  width: size(1256);
  height: size(293);
  background-color: rgba(27, 19, 17, 0.4);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3px;
  text-align: center;
  color: #ffffff;
  left: size(330);
  bottom: size(200);
}

.hr {
  width: size(567);
  height: 1px;
  background-color: #fff;
  bottom: size(190);
  left: size(330);
}

.desc {
  width: size(876);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: 1.44px;
  text-align: left;
  color: #ffffff;
  bottom: size(40);
  left: size(330);
}

.item-img {
  width: 100%;
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
  .swiper-container {
    width: 100vw;
    margin: 0 auto;

    .item-img {
      width: 100%;
    }
  }

  .swiper-container {
    width: size(1235);
    right: 0;
    top: 0;
  }

  .content {
    width: size(689);
    position: relative;
  }

  .bg-img {
    width: 100%;
    left: 0;
  }

  .logo {
    width: size(356);
    top: size(111);
    left: size(169);
  }

  .hr-img {
    width: size(509);
    top: size(419);
    left: size(92);
  }

  .title {
    width: 98%;
    margin: 0 auto;
    font-size: size(50);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    top: size(263);
    white-space: nowrap;
  }

  .desc {
    width: size(410);
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: 0.72px;
    text-align: left;
    color: #ffffff;
    top: size(459);
    left: size(152);
  }

  .item-img {
    width: 100%;
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
      imgList: [
        require('./s5/1.jpg'),
        require('./s5/2.jpg'),
        require('./s5/3.jpg'),
        require('./s5/4.jpg'),
      ],
    }
  },

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>