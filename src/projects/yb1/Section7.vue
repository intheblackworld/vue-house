<template>
  <div class="section7">
    <div class="bg relative">
      <!-- <div class="bg-color"></div> -->
      <div class="content absolute">
        <div class="content-title">
          里仁之美
        </div>
        <div class="content-items">
          <li :class="`${slideIndex == (1 - 1) ? 'active' : ''}`" @click="goTo(1)">1F 門廳 (物管區)</li>
          <li :class="`${slideIndex == (2 - 1) ? 'active' : ''}`" @click="goTo(2)">A棟 門廳 (圖書區)</li>
          <li :class="`${slideIndex == (3 - 1) ? 'active' : ''}`" @click="goTo(3)">B棟 門廳 (多功能教室)</li>
          <li :class="`${slideIndex == (4 - 1) ? 'active' : ''}`" @click="goTo(4)">健身房+兒童遊戲區</li>
          <li :class="`${slideIndex == (5 - 1) ? 'active' : ''}`" @click="goTo(5)">社區入口</li>
          <li :class="`${slideIndex == (6 - 1) ? 'active' : ''}`" @click="goTo(6)">1F景觀</li>
          <li :class="`${slideIndex == (7 - 1) ? 'active' : ''}`" @click="goTo(7)">RF景觀</li>
          <li :class="`${slideIndex == (8 - 1) ? 'active' : ''}`" @click="goTo(8)">第二門廳</li>
        </div>
        <div class="content-label">
          此為廣告效果示意，為單一建物電腦3D
          透視表現，周遭環境係電腦合成
          建設公司保有建物外觀修正之權利
        </div>
      </div>
      <swiper :options="swiperOption" ref="mySwiper7" data-aos="fade" data-aos-delay="1000" @slideChange="slideChanged">
        <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
          <img :src="slide.src" :class="`item-img`" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-if="!isMobile"></div>
        <div class="swiper-button-prev" slot="button-prev" v-if="isMobile">
          <img src="./prev-btn.png" alt />
        </div>
        <div class="swiper-button-next" slot="button-next" v-if="isMobile">
          <img src="./next-btn.png" alt />
        </div>
      </swiper>
    </div>

    <!-- <div v-if="isMobile" class="relative">
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
          <img src="./s3/logoall.png" alt="" class="logoall">
        </div>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="1000">
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  height: calc(100vh - 70px);
  min-height: size(900);
  max-height: size(1080);
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
  height: 80%;
  top: 10%;
  left: size(120);
  text-align: center;
  padding: size(34) size(50) 0 size(77);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  &::after{content:"";position: absolute;top:0;left: 0;width: 100%;
  height: 100%;clip-path: polygon(
    0 0,
    100% 0%,
    100% 100%,
    6.4vw 100%,
    0% calc(100% - 6.4vw)
  );
  opacity: 0.9;z-index: -1;
  background-image: linear-gradient(to bottom, #ff5f00 0%, #fa0032 100%);
  }
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
  margin-bottom: 0.5em;
  white-space: nowrap;

  span {
    font-size: size(33);
    letter-spacing: size(0.99);
  }
}

.content-items {
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(0.99);
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: size(10);
  li {
    border-radius: size(24.8);
    margin-bottom: size(15);
    &:hover, &.active {
      color: #ff5f00;
      background-color: #ffffff;
    }
  }
}

.content-desc {
  font-size: size(25);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.08em;
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
  margin-bottom: size(40);
}

.swiper-container {
  position: absolute;
  width: size(1350);
  height: 100%;
  top: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    height: size-m(670);
    min-height: size-m(0);
    max-height: size-m(812);
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
    width: size-m(295);
    height: auto;
    top: size-m(270);
    left: 0;
    right: 0;
    margin: 0 auto;
    padding:size-m(30) size-m(25);
   
  }

  .content-label {
    font-size: size-m(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: size-m(0);
  }

  .content-items {
    margin-bottom: size-m(10);
    font-size: size-m(13);
  }

  .content-title {
    font-size: size-m(20);
    line-height: 0.94;
    margin-bottom: size-m(15);
    white-space: nowrap;
    span {
      font-size: size-m(15);
    }
  }

  .content-desc {
    font-size: size-m(13);
    line-height: 1.56;
    margin-bottom: size-m(15);
  }

  .swiper-container {
    position: relative;
    width: 100vw;
    height: size-m(281);
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
  name: 'section7',

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
          disableOnInteraction: false,
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
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
        { src: require('./s7/1.jpg') },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    goTo(index) {
      const swiper = this.$refs.mySwiper7.swiper
      swiper.slideTo(index)
      this.slideIndex = index - 1
    },

    slideChanged(e) {
      const swiper = this.$refs.mySwiper7.swiper
      // console.log(swiper.activeIndex, swiper.slides.length)
      if (swiper.activeIndex <= swiper.slides.length - 2) {
         this.slideIndex = swiper.activeIndex - 1
      } else {
        this.slideIndex = 0
      }
      // 1 - 9, 2
      // 0 - 8, 2
    },
  },

  created() {},
  mounted() {},
}
</script>
