<template>
  <div class="relative">
    <img
      v-if="!isMobile"
      v-lazy="require('./s4/bg.jpg')"
      alt="聯上海棠"
      class="bg-img"
    >
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      data-aos="fade"
      data-aos-delay="200"
      class="slide-container absolute"
      @slideChangeTransitionEnd="slideChanged1"
    >

      <div class="slide-content absolute">
        <transition-group
          name="slide-fade"
          mode="out-in"
        >
          <swiper-slide
            v-for="(slide, index) in slideList1"
            v-show="slideIndex1 === index"
            :index="index"
            :key="slide.desc + index"
            class="absolute"
          >
            <div class="item">
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
          </swiper-slide>
        </transition-group>
      </div>
    </swiper>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      data-aos="fade"
      data-aos-delay="200"
      class="slide-container absolute"
      @slideChangeTransitionEnd="slideChanged2"
    >
      <swiper-slide
        v-for="(slide, index) in slideList2"
        :index="index"
        :key="slide.img + index"
        class="absolute"
      >
        <img
          :src="slide.img"
          :class="`item-img absolute ${slideIndex2 === index ? 'active' : ''}`"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss">
.item-title {
    font-size: size(55);
  span {
    color: #0c3e7b !important;
    font-size:1.4em;
    font-family: 'Noto Serif TC' !important;
  }
}

@media screen and (max-width: 767px) {
  .item-title {
    span {
      color: #0c3e7b !important;
      font-size: size-m(31);
      font-family: 'Noto Serif TC' !important;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: 100vh;
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

.slide-container {
  width: 100vw;
  height: 100vh;
}

.slide-content {
  right: size(231);
  top: size(161);
  width: size(810);
  height: size(294);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;

  .border {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 25px;
    border: 1px solid #fff;
    transform: translate(-10px, 10px);
  }

  .item {
    padding: size(30) size(50) 0 size(45);
  }
}

.item-title {
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
  white-space: nowrap;
  margin-bottom: size(18);

  span {
    color: #0c3e7b !important;
    font-size: size(55);
    font-family: 'Noto Serif TC' !important;
  }
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

.item-img {
  width: size(566);
  left: size(188);
  top: size(102);
  opacity: 0;
  transition: all .3s;
  &.active {
    opacity: 1;
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
    background: #fff;
  height: size-m(750);
  }
  .slide-content {
    left: 0;
    right: auto;
    margin: 0 auto;
    top: size-m(40);
    width: 90vw;
  }
.slide-container{    height:size-m(750);}
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
    transform: scaleX(0.93);
    white-space: normal;
    margin-bottom: size-m(11);
  }

  .item-subtitle {
    font-size: size-m(14);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 1.05px;
    text-align: left;
    color: #007eca;
    transform: scaleX(0.93);
    white-space: normal;
    margin-bottom: size-m(5);
  }

  .item-desc {
    font-size: size-m(12);
    height: auto;
    overflow: hidden;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.36px;
    text-align: justify;
    color: #595757;
    transform: scaleX(0.93);
  }

  .item-img {
    width: 100vw;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: auto;
    bottom: 0;
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
  name: 'section4',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      isDialog: false,
      slideIndex1: 0,
      slideIndex2: 1,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: false,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList2: isMobile
        ? [
            {
              img: require('./mo/4/1.jpg'),
            },
            {
              img: require('./mo/4/2.jpg'),
            },
            {
              img: require('./mo/4/3.jpg'),
            },
          ]
        : [
            {
              img: require('./s4/img1.png'),
            },
            {
              img: require('./s4/img2.png'),
            },
          ],
      slideList1: [
        {
          title: '臺南<span>最適合移居</span>的地方-市政新灣區',
          subtitle: '',
          desc:
            '五期重劃區有很多適合居住的環境與條件，是臺南市所有重劃區唯一臨海景的，棋盤式的道路、加上住宅區、商業區規畫完整，區內尤其有很多大型公共設施，市政府、市議會、生活美學館等便民機構進駐，生活機能佳，又靠近臺南市最夯的觀光休閒區，環境優美，因此也吸引外地建商紛紛進入插旗。',
        },
        {
          title: '臺南<span>最適合移居</span>的地方-市政新灣區',
          subtitle: '「市政新灣區」─五期重劃區，媲美臺中七期重劃區',
          desc:
            '市政府、市議會、地方法院等政府機關陸續進駐五期重劃區內，更有家樂福、大潤發、慈濟中學、誠品書局、知名連鎖餐廳、百貨超商、運動品牌或小吃店等在此，可提供居民優質生活和休閒機能，並擁有全臺南密度最高的公園綠地，為大臺南政經首善之區，逐漸帶動五期重劃區內商圈的崛起，造就地方建設、上班人潮、地價穩定、未來發展等，使其成為臺南市發展最快的一區，貌似臺中七期重劃區、高雄美術館特區。',
        },
        {
          title: '臺南<span>最適合移居</span>的地方-市政新灣區',
          subtitle: '「市政新灣區」─安平港歷史風貌園區，服務核心機能',
          desc:
            '積極配合安平商港等地區新興發展核心機能，提供觀光旅館、商務住宅、辦公、金融等相關支援性服務機能。',
        },
      ],
    }
  },

  methods: {
    slideChanged1(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex1 = 0
      } else {
        this.slideIndex1 = swiper.activeIndex - 1
      }
    },

    slideChanged2(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex2 = 0
      } else {
        this.slideIndex2 = swiper.activeIndex - 1
      }
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
