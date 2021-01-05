<template>
  <div class="section7">
    <div class="bg relative">
      <!-- <div class="bg-color"></div> -->
      <div class="content absolute">
        <div class="content-title">
          坪效美學
        </div>
        <div class="content-items">
          <li :class="`${tabIndex == (1 - 1) ? 'active' : ''}`" @click="changeTab(0)">24坪</li>
          <li :class="`${tabIndex == (2 - 1) ? 'active' : ''}`" @click="changeTab(1)">28坪</li>
          <li :class="`${tabIndex == (3 - 1) ? 'active' : ''}`" @click="changeTab(2)">35坪</li>
          <li :class="`${tabIndex == (4 - 1) ? 'active' : ''}`" @click="changeTab(3)">38坪</li>
        </div>
        <div class="content-label">[央北鑫建築] 裝潢風格情境參考示意圖，實際坪數，格局尺度，依銷售買賣合約書為準，建設公司保有修正之權利</div>
      </div>
      <swiper :options="swiperOption" ref="mySwiper8" data-aos="fade" data-aos-delay="1000" @slideChange="slideChanged">
        <swiper-slide v-for="(slide, index) in slideList[tabIndex]" :index="index" :key="slide.img" class="item">
          <img :src="slide.src" :class="`item-img`" /><span class="item-txt">裝潢風格情境參考示意圖</span>
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
        <swiper :options="swiperOption" ref="mySwiper8" data-aos="fade" data-aos-delay="1000">
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
  top: 5%;
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
    5.5vw 100%,
    0% calc(100% - 5.5vw)
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
  margin-bottom: size(50);
  white-space: nowrap;

  span {
    font-size: size(33);
    letter-spacing: size(0.99);
  }
}

.content-items {
  // width: 449.9px;
  // height: 54px;

  font-size: size(48);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.44);
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: size(40);
  li {
    border-radius: size(24.8);
    margin-bottom: size(20);
    padding: 0 30px;
    &:hover,
    &.active {
      color: #ff5f00;
      background-color: #ffffff;
    }
  }
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
  margin-bottom: size(60);
}

.swiper-container {
  position: absolute;
  width: size(1350);
  height: 90%;
  top: 0;
  right: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-txt{
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: #FFF;
  font-size: size(15);
  text-shadow: 0 0 0.5em #000;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    height: size-m(620);
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
    text-align: center;
    color: #000000;
    margin-bottom: size-m(15);
  }

  .content-items {
    margin-bottom: size-m(10);
    font-size: size-m(22);
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
      tabIndex: 0,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 1,

        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: true,
        // },
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
        [{ src: require('./s8/24-1.jpg') },
        { src: require('./s8/24-2.jpg') },
        { src: require('./s8/24-3.jpg') },
        { src: require('./s8/24-4.jpg') },
        { src: require('./s8/24-5.jpg') },],

        [{ src: require('./s8/28-1.jpg') },
        { src: require('./s8/28-2.jpg') },
        { src: require('./s8/28-3.jpg') },
        { src: require('./s8/28-4.jpg') },
        { src: require('./s8/28-5.jpg') },
        { src: require('./s8/28-6.jpg') },
        { src: require('./s8/28-7.jpg') },],

        [{ src: require('./s8/35-1.jpg') },
        { src: require('./s8/35-2.jpg') },
        { src: require('./s8/35-3.jpg') },
        { src: require('./s8/35-4.jpg') },],
        
        [{ src: require('./s8/38-1.jpg') },
        { src: require('./s8/38-2.jpg') },
        { src: require('./s8/38-3.jpg') },
        { src: require('./s8/38-4.jpg') },
        { src: require('./s8/38-5.jpg') },
        { src: require('./s8/38-6.jpg') },]
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    changeTab(index) {
      this.goTo(1)
      this.tabIndex = index
    },
    goTo(index) {
      const swiper = this.$refs.mySwiper8.swiper
      swiper.slideTo(index)
    },

    slideChanged(e) {
      const swiper = this.$refs.mySwiper8.swiper
      if (swiper.activeIndex <= swiper.slides.length - 2) {
        this.slideIndex = swiper.activeIndex - 1
      } else {
        this.slideIndex = 0
      }
      // if (swiper.isEnd) {
      //   this.slideIndex = 0
      // } else if (swiper.isBeginning) {
      //   this.slideIndex = swiper.slides.length - 3
      // } else {
      //   this.slideIndex = swiper.activeIndex - 1
      // }
    },
  },

  created() {},
  mounted() {},
}
</script>
