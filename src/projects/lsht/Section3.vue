<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s3/bg.jpg')"
        alt="bg"
        class="bg-img"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="slide-container absolute"
        @slideChangeTransitionEnd="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="absolute"
        >
          <img
            :src="slide.img"
            :class="`item-img absolute ${slideIndex === index ? 'active' : ''}`"
          />
        </swiper-slide>

        <div
          class="slide-content absolute"
          data-aos="fade"
          data-aos-delay="400"
        >
          <transition-group
            name="slide-fade"
            mode="out-in"
          >
            <div
              v-show="slideIndex === index"
              v-for="(slide, index) in slideList"
              :key="slide.img +index + 'content'"
            >
              <h3
                class="item-title"
                v-html="slide.title"
              ></h3>
              <h3
                class="item-subtitle"
                v-html="slide.subtitle"
              ></h3>
              <h3
                class="item-desc"
                v-html="slide.desc"
              ></h3>
            </div>
          </transition-group>
        </div>
      </swiper>
      <div class="flex animate-row">
        <img
          v-lazy="require('./s3/wave.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s3/wave.png')"
          alt="wave"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <img
        v-lazy="require('./mo/3/bg.jpg')"
        alt="聯上海棠"
        class="bg-img"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="slide-container absolute"
        @slideChangeTransitionEnd="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="absolute"
        >
          <img
            :src="slide.img"
            :class="`item-img absolute ${slideIndex === index ? 'active' : ''}`"
          />
        </swiper-slide>
      </swiper>
      <div
        class="slide-content absolute"
        data-aos="fade"
        data-aos-delay="400"
      >
        <transition-group
          name="slide-fade"
          mode="out-in"
        >
          <div
            v-show="slideIndex === index"
            v-for="(slide, index) in slideList"
            :key="slide.img +index + 'content'"
          >
            <h3
              class="item-title"
              v-html="slide.title"
            ></h3>
            <h3
              class="item-subtitle"
              v-html="slide.subtitle"
            ></h3>
            <h3
              class="item-desc"
              v-html="slide.desc"
            ></h3>
            <div
              class="add"
              @click="isDialog = true"
            ><img
                src="./mo/plus.png"
                alt="plus"
              ></div>
          </div>
        </transition-group>
      </div>
      <div
        class="dialog"
        v-show="isDialog"
        @click="isDialog = false"
      >
        <div class="dialog-content">
          <img
            class="close"
            @click="isDialog = false"
            src="./mo/close.png"
            alt="close"
          >
          <transition-group
            name="slide-fade"
            mode="out-in"
          >
            <div
              class="slide-content absolute"
              v-show="slideIndex === index"
              v-for="(slide, index) in slideList"
              :key="slide.img"
            >
              <div
                class="item-title"
                v-html="slide.title"
              ></div>
              <div
                class="item-subtitle"
                v-html="slide.subtitle"
              ></div>
              <div
                class="item-desc"
                v-html="slide.desc"
              ></div>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="flex animate-row">
        <img
          v-lazy="require('./s2/wave.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: 100vh;
  margin: 8vw 0 0 0;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(-200);

  img {
    width: 100%;
    height: size(413);

    &:nth-child(2) {
      margin-left: -0.1%;
    }
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }
}

.slide-container {
  width: 100vw;
  height: 100vh;
}

.item-title {
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
  white-space: nowrap;
  margin-bottom: size(30);
  transform: scaleX(0.93);
  transform-origin: 0 0;
}

.item-subtitle {
  font-size: size(21);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 1.05px;
  text-align: left;
  color: #007eca;
  transform: scaleX(0.93);
  white-space: nowrap;
  margin-bottom: size(15);
}

.item-desc {
  font-size: size(12);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.1;
  letter-spacing: 0.36px;
  text-align: justify;
  color: #595757;
  transform: scaleX(0.93);
}

.slide-content {
  left: size(314);
  top: size(52);
  width: size(525);
}

.item-img {
  width: size(626);
  right: size(188);
  left: auto;
  top: 0;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 8s ease infinite;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    opacity: 1;
  }
}

@keyframes border-radius {
  0% {
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  }

  50% {
    border-radius: 40% 55% 60% 45% / 45% 50% 50% 55%;
  }

  100% {
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
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
    margin: 0;
  }
  .slide-content {
    left: 3vw;
    right: auto;
    margin: 0 auto;
    top: size-m(40);
    width: 90vw;
    transform: scaleX(0.93);
  }

  // .relative {
  //   > div {
  //     display: flex;
  //     justify-content: center;
  //   }
  // }

  .item-title {
    font-size: size-m(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    white-space: nowrap;
    margin: 0 0 size-m(11) size-m(8);
  }

  .item-subtitle {
    font-size: size-m(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0;
    text-align: left;
    color: #007eca;
    white-space: nowrap;
    margin: 0 0 size-m(5) size-m(-9);
  }

  .item-desc {
    font-size: size-m(12);
    height: size-m(112);
    overflow: hidden;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.36px;
    text-align: justify;
    color: #595757;
    margin: 0 0 size-m(5) size-m(-3);
  }

  .add {
    width: 100%;
    text-align: center;
    // padding: 20px;
    margin-top: 0;
    position: absolute;
    z-index: 3;
    bottom: 0;
    background: linear-gradient(to bottom, #fff0 0%, #ffff 100%);
    img {
      height: size-m(20);
      margin: size-m(50) 0 0 0;
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-content {
      left: 0;
    }

    .dialog-content {
      background-color: #fff;
      width: size-m(313);
      height: size-m(516);
      position: relative;

      .item-title,
      .item-subtitle,
      .item-desc {
        white-space: normal;
        width: 90%;
        height: auto;
      }
    }

    .close {
      width: 16px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  .item-img {
    width: size-m(256);
    right: 0;
    left: 0;
    margin: 0 auto;
    top: size-m(266);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section3',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      isDialog: false,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: false,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          title: '億萬打造南臺灣的「市政新灣區」',
          subtitle: '',
          desc:
            '「市政新灣區」是臺南市現階段發展的重點，近年臺南的重大建設幾乎集中在這裡，隨著政治、經濟、生活、觀光等建設的移轉，「市政新灣區」無疑是南臺灣最適合移居的地方，它不但有國際的遠景，更有地方的加持，和民間的持續投入，所以「市政新灣區」是南臺灣最閃亮的未來。',
          img: require('./s3/img1.jpg'),
        },
        {
          title: '億萬打造南臺灣的「市政新灣區」',
          subtitle: '「市政新灣區」─安平自由貿易港區，南臺灣的黃金灣區',
          desc:
            '安平港歷史風貌園區觀光發展以及漁光大橋落成通車，健康路成為安平港區與市中心間重要的活動軸線，凝聚該區域內部商業氛圍，國際遊憩碼頭、濱海遊憩園區、郵輪碼頭區等，形塑南臺灣的黃金灣區。安平港鄰近安平工業區、南部科學園區及臺南科工區；且雲嘉南地區是農漁產業重鎮，後續可透過示範區的連線運作，與周邊產業供應鏈整合，並與對岸相關產業發展跨境合作。目前安平港已與潛在業者接洽，涵蓋業別包括石化產品、非鐵金屬、體育休閒用品、空調設備、汽車零組件、農產品、中藥食材加工等農工產業。',
          img: require('./s3/img2.jpg'),
        },
        {
          title: '億萬打造南臺灣的「市政新灣區」',
          subtitle: '「市政新灣區」─漁光島灘岸旅遊區，開發國際渡假村',
          desc:
            '將以國際渡假村模式引入國際休閒住宿會議中心、濱海商店街、生態展示、海濱遊樂、休閒商業購物中心與海景旅館等。',
          img: require('./s3/img3.jpg'),
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
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
