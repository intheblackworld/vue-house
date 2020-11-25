<template>
  <div class="section1">
    <div class="bg absolute"></div>
    <img src="./s1/0.jpg" alt="" class="img0" data-aos="fade" data-aos-delay="0">
    <div v-if="isPC" class="img">
      <div class="img1" data-aos="fade-down" data-aos-delay="200"><img src="./s1/1.jpg" alt=""></div>
      <div class="img2" data-aos="fade-down" data-aos-delay="400"><img src="./s1/2.jpg" alt=""></div>
      <div class="img3" data-aos="fade-down" data-aos-delay="600"><img src="./s1/3.jpg" alt=""></div>
      <div class="img4" data-aos="fade-down" data-aos-delay="800"><img src="./s1/4.jpg" alt=""></div>
    </div>
    <div v-if="isMobile" class="m-container">
      <swiper :options="swiperOption" ref="mySwiper" class>
        <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
          <img :src="slide.img" :class="`item-img`" />
        </swiper-slide>
      </swiper>
    </div>
    <img src="./s1/lt.png" alt="" class="lt">
    <h1 class="title" data-aos="fade-down" data-aos-delay="0">台北新東區樹海市心</h1>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="0">聚富公園金店面</h1>
    <h1 class="label flex-c" v-if="isPC" data-aos="fade-up" data-aos-delay="1000">公園特區金店面｜65坪｜2692-1155</h1>
    <h1 class="label flex-c" v-if="isMobile" data-aos="fade-up" data-aos-delay="1000">公園特區金店面<br />65坪｜2692-1155</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.bg {
  width: size(1887);
  height: auto;
  left: 0;
  top: size(80);
  bottom: size(60);
  background-image: url('./s1/bg.png');
  background-attachment: fixed;
}

.img0 {
  @include img_l_pc(843, 0, 0);
}

.img{img{width: 100%;transform: translateY(-10%);}}
.img1 {
 // @include img_l_pc(322, 437, 553);
  @include img_c_p(300, 65%, 270, 340, 1920);
  img{animation: an 4s 0s linear infinite alternate;}  
}

.img2 {
 // @include img_l_pc(322, 308, 902);
  @include img_c_p(300, 65%, 270, 10, 1920);
  img{animation: an 4s -4s linear infinite alternate;}  
}

.img3 {
//  @include img_l_pc(322, 407, 1251);
  @include img_c_p(300, 65%, 270, -320, 1920);
  img{animation: an 4s 0s linear infinite alternate;}  
}

.img4 {
// @include img_r_pc(320, 308, 0);
  @include img_c_p(300, 65%, 270, -650, 1920);
  img{animation: an 4s -4s linear infinite alternate;}  
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

.lt {
  @include img_l_pc(260, 80, 0);
 // @include img_c_p(300, 67%, 270, 380, 1920);
}

.label {
  @include div_r_pc(753, 78, 0, 0);
 // @include img_c_p(300, 67%, 270, 380, 1920);
  top: auto;
  bottom: 0;
  background-color: #000000;
  font-size: size(36.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.7);
  text-align: left;
  color: #ffffff;
}

.title {
  @include div_l_pc(984, 154, 140, 85);
  text-shadow: 0 0 12px #000000;
  font-size: size(95);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.24);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(536, 113, 260, 88);
  text-shadow: 0 0 12px #000000;
  font-size: size(70);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height:sizem(604);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .bg {
  width: sizem(350);
  top: sizem(60);
  bottom: sizem(63);
    background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .img0 {
    @include div_l_m(284, 667, 0, 0);
    object-fit: cover;
  }

  .lt {
    @include img_l_m(135, 60, 0);
  }

  .label {
    @include div_r_m(277, 100, 0, 0);
    top: auto;
    bottom: sizem(82);
    background-color: #000000;
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(1.24);
    text-align: left;
    color: #ffffff;
    z-index: 3;
  }

  .title {
    @include div_r_m(329, 52, 104, 0);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(35);
    letter-spacing: sizem(1.3);
  }

  .subtitle {
    @include div_l_m(182, 38, 154, 46);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(26);
  }

  .m-container {
    margin-top: sizem(190);
    .swiper-container {height:sizem(660);}
  }

  .item-img {
    width: sizem(152);transform: translateY(10%);
  }
  .item {transform: translateY(8%);animation: an 5s  linear infinite alternate;
    &:nth-child(odd) {animation: an 5s -5s linear infinite alternate;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,

      swiperOption: {
        slidesPerView: isMobile ? 2 : 1,
        spaceBetween: isTablet ? 20 : -30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: true,
        effect: 'slide',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // observer: true, //修改swiper自己或子元素時，自動初始化swiper
        // observeParents: true, //修改swiper的父元素時，自動初始化swiper
      },

      slideList: [
        {
          img: require('./s1/1.jpg'),
        },
        {
          img: require('./s1/2.jpg'),
        },
        {
          img: require('./s1/3.jpg'),
        },
        {
          img: require('./s1/4.jpg'),
        },
      ],
    }
  },

  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
