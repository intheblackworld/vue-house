<template>
  <div class="section6">
    <div v-if="!isMobile" class="bg">
      <div class="relative">
        <!-- <div class="bg-color"></div> -->
        <div class="content absolute">
          <div class="content-title">
            建築表情<br />
            <span>立面與燈光3D透視</span>
          </div>
          <div class="content-desc">
            輕盈飛揚的建築語彙是央北鑫建築為年輕世代打造的獨特意象，側邊的堅實量體與斜向大牆穩重平衡，搭配水平線條與跳層玻璃的律動感。親近自然與大地的的清水混凝土語彙，用低調卻也醒目的方式與居者對話。
          </div>
          <div class="content-label">此為廣告效果示意，為單一建物電腦3D
            透視表現，周遭環境係電腦合成
            建設公司保有建物外觀修正之權利</div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="1000">
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div v-if="isMobile" class="relative">
      <img src="./mo/2/bg_txt.png" alt="" class="bg-img">
      <img src="./mo/2/l.png" alt="" class="bg-img">
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">在央北用<span>超規格</span>標準<br>展現國際視野</div>
      <div class="relative">
        <div class="content">
          <div class="content-label">Our Way</div>
          <div class="content-title">
            WORLD VISION,<br />LOCAL HEARTS.
          </div>
          <div class="content-desc">
            鑫建築團隊深信台灣土地上的情感故事，啟發我們追尋建築與人居的核心價值，預計取得罕見的鑽石級綠建築、黃金級智慧建築與SGS建築履歷，超越央北標準僅是我們的標準配備，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
          </div>
          <!-- <img src="./s3/logoall.png" alt="" class="logoall"> -->
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="1000">
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
            <img :src="slide.src" :class="`item-img`" />
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
  height: 100vh;
  min-height: size(1080);
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
.bg-color {
  margin: 0 0 0 auto;
  width: size(1020);
  height: size(1056);
  background: linear-gradient(
    to right,
    rgba(235, 85, 0, 1) 0%,
    rgba(215, 0, 50, 1) 100%
  );
}

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
  width: size(524);
  height: size(780);
  top: size(120);
  left: size(120);
  text-align: center;
  padding: size(34) size(50) 0 size(77);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%, 0% 90%);
  background-image: linear-gradient(to bottom, #ff5f00 0%, #fa0032 100%);
  z-index: 10;
}

.content-title {
  font-size: size(48);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.44);
  text-align: center;
  color: #242424;
  margin-bottom: size(40);
  white-space: nowrap;

  span {
    font-size: size(33);
    letter-spacing: size(0.99);
  }
}

.content-desc {
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(0.9);
  text-align: left;
  color: #ffffff;

  margin-bottom: size(40);
}

.content-label {
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(0.63);
  text-align: center;
  color: #000000;
}

.swiper-container {
  position: absolute;
  width: size(1440);
  height: size(1080);
  top: 0;
  right: 0;
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
    font-size: size-m(37);
    line-height: 0.94;
    margin-bottom: size-m(15);
    white-space: nowrap;
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
  name: 'section6',

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
        { src: require('./s6/1.jpg') },
        { src: require('./s6/1.jpg') },
        { src: require('./s6/1.jpg') },
        { src: require('./s6/1.jpg') },
        { src: require('./s6/1.jpg') },
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
