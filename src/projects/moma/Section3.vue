<template>
  <div class="relative">
    <div class="flex wrap">
      <div class="content">
        <img
          src="./s3/bg.png"
          alt=""
          class="bg-img absolute"
        >
        <img
          src="./s3/logo.png"
          alt=""
          class="logo absolute"
        >
        <img
          src="./s3/hr.png"
          alt=""
          class="hr-img absolute"
        >
        <h3 class="title absolute">
          夜火藝術<br />向20世紀色彩建構大師致敬！
        </h3>
        <div class="desc absolute">
          「京城美術皇居」閃耀繽紛的藝術建築外觀，高雄最醒目的大型藝術地標，顏色總數多達20種左右，經由精密計算與美感色彩配置，調配出最完美的建築外觀，並採用高難度的玻璃帷幕施工，雖施工難度大幅提升，更能詮釋PAUL KLEE保羅•克利大師的夜火名畫色彩，跨世紀重現經典名畫，成為城市最優雅美麗的百年裝置藝術。
        </div>
      </div>
      <swiper
        class="swiper-container"
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
  width: size(1235);
  right: 0;
  top: 0;
  position: absolute;
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
  left:50%;transform: translateX(-50%);
}

.title {
  width:100%;
  margin: 0 auto;
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  top: size(263);
  white-space: nowrap;
  transform: scaleX(0.9);
  transform-origin: center;
}

.desc {
  width: size(510);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.17;
  letter-spacing: 0.72px;
  text-align: left;
  color: #ffffff;
  top: size(459);
  left: size(82);
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
  .relative {
    position: relative;
    height: auto;
  }
  .swiper-container {
    width: 100vw;
    margin: 0 auto;
    position: relative !important;

    .item-img {
      width: 100%;
    }
  }

  .content {
    width: 100vw;
    height: size-m(500);
    position: relative;
  }

  .bg-img {
    width: 100%;
    left: 0;
  }

  .logo {
    width: size-m(180);
    top: size-m(30);
    left: size-m(88);
  }

  .hr-img {
    width: 100vw;
    top: size-m(203);
    //left: size-m(0);
  }

  .title {
    width: 100vw;
    margin: 0 auto;
    font-size: size-m(23);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: 1.38px;
    text-align: center;
    color: #ffffff;
    top: size-m(116);
    white-space: nowrap;
  }

  .desc {
    width: size-m(305);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.45px;
    text-align: left;
    color: #ffffff;
    top: size-m(232);
    left: 50%;transform: translateX(-50%);
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
        require('./s3/1.jpg'),
        require('./s3/2.jpg'),
        require('./s3/3.jpg'),
        require('./s3/4.jpg'),
        require('./s3/5.jpg'),
      ],
    }
  },

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>