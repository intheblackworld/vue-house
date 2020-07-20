<template>
  <div class="section3">
    <div
      v-if="!isMobile"
      class="relative"
    >
      <img
        src="./s2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./s2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">在央北用<span>超規格</span>標準，展現國際視野</div>
      <div class="relative">
        <div class="bg-color"></div>
        <div class="content absolute">
          <div class="content-label">Our Way</div>
          <div class="content-title">
            WORLD VISION,<br />LOCAL HEARTS.
          </div>
          <div class="content-desc">
            鑫建築團隊深信台灣土地上的情感故事，啟發我們追尋建築與人居的核心價值，預計取得罕見的鑽石級綠建築、黃金級智慧建築與SGS建築履歷，超越央北標準僅是我們的標準配備，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
          </div>
          <img src="./s3/logoall.png" alt="" class="logoall">
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="1000"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <img
        src="./mo/2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./mo/2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">在央北用<span>超規格</span>標準<br>展現國際視野</div>
      <div class="relative">
        <div class="content">
          <div class="content-label">Our Brand</div>
          <div class="content-title">
            WORLD VISION,<br />LOCAL HEARTS.
          </div>
          <div class="content-desc">
            鑫建築團隊深信台灣土地上的情感故事，啟發我們追尋建築與人居的核心價值，預計取得罕見的鑽石級綠建築、黃金級智慧建築與SGS建築履歷，超越央北標準僅是我們的標準配備，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
          </div>
          <img src="./s3/logoall.png" alt="" class="logoall">
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="1000"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
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
  // position: relative;
  // z-index: 5;
  min-height: 100vh;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    position: relative;
  }
}
.bg-color{margin: 0 0 0 auto;width: size(1020);height:size(1056);background:linear-gradient(to right, rgba(235,85,0,1) 0%,rgba(215,0,50,1) 100%);}

.title {
  font-size: size(110);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.55;
  letter-spacing: 0.02em;
  text-align: right;
  color: #242424;
  top: size(236);
  left: size(388);
}

.subtitle {
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 0.02em;
  text-align: left;
  color: #242424;
  top: size(400);
  left: size(846);

  span {
    color: #eb5500;
  }

  .number {
    font-size: size(100);
    letter-spacing: -5.4px;
  }
}

.content {
  width: size(580);
  top: size(161);
  right: size(240);
  text-align: center;
}

.content-label {
  font-size: size(27);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.content-title {
  font-size: size(75);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: 0.05em;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
  font-family: futurabq;
}

.content-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 0.1em;
  text-align: justify;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.logoall {
  width: size(583);
  cursor: pointer;
}

.swiper-container {
  position: absolute;
  width: size(900);
  height: size(1056);
  top: 0;
  left: 0;
  img {
    width: 100%;
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

  .title {
    font-size: size-m(38);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    text-align: right;
    color: #242424;
    top: size-m(98);
    left: size-m(40);
  }

  .subtitle {
    font-size: size-m(17);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    text-align: left;
    color: #242424;
    top: size-m(155);
    left: size-m(189);
    transform: scaleX(0.95);
    transform-origin: 0 0;

    span {
      color: #eb5500;
    }

    .number {
      font-size: size-m(38);
      letter-spacing: -2.4px;
    }
  }

  .content {
    width: 100vw;
    height: size-m(451);
    top: 0;
    left: 0;
    padding: 35px 25px;
    background: linear-gradient(to right, #d80033, #ea5400);
  }

  .content-label {
    font-size: size-m(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .content-title {
    font-size: size-m(34);
    line-height: 0.94;
    margin-bottom: size-m(15);
  }

  .content-desc {
    font-size: size-m(13);
    line-height: 1.56;
    margin-bottom: size-m(15);
  }

  .swiper-container {
    position: relative;
    width: 100vw;
    height: size-m(440);
    top: 0;
    right: 0;

    img {
      width: 100%;
    }
  }
  .logoall {
    width: size-m(295);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section3',

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
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 1,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        { src: require('./s3/1.jpg') },
        { src: require('./s3/2.jpg') },
        { src: require('./s3/3.jpg') },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
