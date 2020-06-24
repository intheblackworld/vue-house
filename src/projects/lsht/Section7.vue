<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s7/1.jpg"
        alt=""
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
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img + index"
          class="absolute"
        >
          <img
            :src="slide.img"
            :class="`item-img absolute`"
          />
        </swiper-slide>
        <div class="slide-content absolute">
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
      <!-- <div class="flex animate-row">
        <img
          src="./s3/wave.png"
          alt=""
          class="wave"
        >
        <img
          src="./s3/wave.png"
          alt=""
          class="wave"
        >
      </div> -->
      <!-- <div class="flex animate-row animate-row2">
        <img src="./s2/wave_l.png" alt="" class="wave">
        <img src="./s2/wave_l.png" alt="" class="wave">
      </div> -->
    </div>
    <div v-if="isMobile">
      <img
        src="./s7/1.jpg"
        alt=""
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
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img + index"
          class="absolute"
        >
          <img
            :src="slide.img"
            :class="`item-img absolute ${slideIndex === index ? 'active' : ''}`"
          />
        </swiper-slide>
      </swiper>
      <div class="slide-content absolute">
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
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(919);
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: blur(3px);

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.slide-container {
  width: 100vw;
  height: 100vh;
}

.slide-content {
  width: size(390);
  // height: size(201);
  background-color: rgba(0, 0, 0, 0.65);
  right: size(285);
  top: size(680);
  z-index: 5;
  padding: size(20) 0 size(20) size(20);
}

.item-title {
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  transform: scaleX(0.95);
  margin-bottom: size(15);
}

// .item-subtitle {
//   font-size: size(21);
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.2;
//   letter-spacing: 1.05px;
//   text-align: left;
//   color: #007eca;
//   transform: scaleX(0.95);
//   white-space: nowrap;
//   margin-bottom: size(15);
// }

.item-desc {
  font-size: size(12);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: 0.6px;
  text-align: left;
  color: #fff;
  transform: scaleX(0.95);
}

.item-img {
  width: size(1378);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
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
    // height: 100vh;
    overflow: hidden;
    position: relative;
    height: size-m(606);
  }
  .bg-img {
    height: size-m(606);
  }

  .slide-container {
    width: 100vw;
    height: size-m(250);
    z-index: 2;
  }
  .slide-content {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: auto;
    bottom: 0;
    width: 100vw;
    height: size-m(356);
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }

  // .relative {
  //   > div {
  //     display: flex;
  //     justify-content: center;
  //   }
  // }

  .item-title {
    width: 100vw;
    font-size: size-m(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    transform: scaleX(0.95);
    margin-left: size-m(5);
    margin-bottom: size-m(15);
  }

  .item-desc {
    font-size: size-m(12);
    height: size-m(100);
    overflow: hidden;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.36px;
    text-align: justify;
    color: #fff;
    width: size-m(292);
    transform: scaleX(0.95);
    margin-left: size-m(15);
  }

  .item-img {
    width: 100%;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: 0;
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
  name: 'section7',
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
          disableOnInteraction: true,
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
          title: '【大廳‧似水年華】',
          subtitle: '',
          desc:
            '華人講究天圓地方的宇宙觀，也同時代表動與靜，大廳頂天立柱的兩根柱子，特別採用兩種不同方式的材質表達裡外，以藝術家徐永旭的藝術作品表現海棠為構想的藝術品，宛如在這就看到一幅山水畫。',
          img: require('./s7/1.jpg'),
        },
        {
          title: '【大廳‧似水年華】',
          subtitle: '',
          desc:
            '華人講究天圓地方的宇宙觀，也同時代表動與靜，大廳頂天立柱的兩根柱子，特別採用兩種不同方式的材質表達裡外，以藝術家徐永旭的藝術作品表現海棠為構想的藝術品，宛如在這就看到一幅山水畫。',
          img: require('./s7/1.jpg'),
        },
        {
          title: '【大廳‧似水年華】',
          subtitle: '',
          desc:
            '華人講究天圓地方的宇宙觀，也同時代表動與靜，大廳頂天立柱的兩根柱子，特別採用兩種不同方式的材質表達裡外，以藝術家徐永旭的藝術作品表現海棠為構想的藝術品，宛如在這就看到一幅山水畫。',
          img: require('./s7/1.jpg'),
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
