<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="border absolute"></div>
      <img
        src="./s9/資產 16-801.png"
        alt=""
        class="logo-b absolute"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="slide-container absolute"
        @slideChangeTransitionStart="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.desc + index"
        >
          <img
            :src="slide.img"
            alt=""
            class="item-img"
          >
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./s9/資產 14-801.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./s9/資產 13-801.png"
            alt
          />
        </div>
        <!-- <div
          class="swiper-pagination"
          slot="pagination"
        ></div> -->
      </swiper>
      <img
        :src="slideList[slideIndex].icon"
        alt=""
        class="icon absolute"
      >
      <h3
        class="absolute title"
        v-html="slideList[slideIndex].title"
      ></h3>
      <h3
        class="subtitle absolute"
        v-html="slideList[slideIndex].subtitle"
      ></h3>
      <div class="hr absolute"></div>
      <div
        class="desc absolute"
        v-html="slideList[slideIndex].desc"
      ></div>
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
  height: size(1080);
  margin: 0;
  background-color: transparent;
  // background-image: url('./s9/bg.jpg');
  // background-attachment: fixed;
}

.swiper-container {
  width: size(1000);
  height: size(600);
  top: size(260);
  right: size(83);
}

.item-img {
  width: 100%;
}
.border {
  width: size(1000);
  height: size(600);
  top: size(300);
  right: size(43);
  box-shadow: inset 0 0 0 3px #68361a;
}

.icon {
  width: size(208);
  top: size(174);
  left: size(358);
}

.title {
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 12.1px;
  text-align: center;
  color: #68361a;
  top: size(396);
  left: size(180);
}

.desc {
  width: size(456);
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.42;
  letter-spacing: 1.52px;
  text-align: left;
  color: #3e3a39;
  top: size(597);
  left: size(232);
}

.hr {
  background-color: #68361a;
  width: size(677);
  height: 1px;
  top: size(580);
  left: size(121);
}

.subtitle {
  font-size: size(59);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 8.28px;
  text-align: left;
  color: #68361a;
  top: size(158);
  right: size(308);
}

.logo-b {
  height: size(627);
  top: size(771);
  left: size(340 - 627);
}

.swiper-button-next {
  right: 0 !important;
  bottom: 0 !important;
  top: auto !important;
  height: auto !important;
}

.swiper-button-prev {
  left: auto !important;
  right: 28px !important;
  bottom: 0 !important;
  top: auto !important;
  height: auto !important;
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
    height: auto;
    margin: 0;
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
      slideList: [
        {
          img: require('./s9/01.png'),
          icon: require('./s9/icon (1).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具専家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
        {
          img: require('./s9/02.png'),
          icon: require('./s9/icon (2).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具専家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
        {
          img: require('./s9/03.png'),
          icon: require('./s9/icon (3).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具専家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
        {
          img: require('./s9/04.png'),
          icon: require('./s9/icon (4).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具専家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
        {
          img: require('./s9/05.png'),
          icon: require('./s9/icon (5).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具専家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },
  },
  created() {},

  mounted() {},

  computed: {},
}
</script>