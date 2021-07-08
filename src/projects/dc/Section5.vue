<template>
  <div>
    <div class="section5">
      <div v-if="isMobile">
        <img src="./s5/lt.png" alt="" class="lt"  data-aos="fade" data-aos-delay="0">
        <h1 class="title"  data-aos="fade" data-aos-delay="0">商機核心</h1>
        <h1 class="subtitle"  data-aos="fade" data-aos-delay="200">饗樂生活 近擁機能零距離</h1>
        <div class="desc"  data-aos="fade" data-aos-delay="400">搶佔繁華商圈一席之地，鄰近康寧街商圈、明峰街商圈、中興街商圈，繁華金三角吸納萬戶消費力，百工百業開店即獲利，商機錢景在手！</div>
        <div class="m-container">
          <swiper :options="swiperOption" ref="mySwiper" class @slideChangeTransitionEnd="slideChanged">
            <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
              <img :src="slide.img" :class="`item-img`" />
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="flex wrap flex-jb" v-if="isPC">
        <div class="txt block relative" v-for="slide in blockList" :key="slide.name">
          <h1 class="title" v-show="!slide.img"  data-aos="fade" data-aos-delay="0">商機核心</h1>
          <h1 class="subtitle" v-show="!slide.img"  data-aos="fade" data-aos-delay="0">饗樂生活 近擁機能零距離</h1>
          <div class="desc" v-show="!slide.img"  data-aos="fade" data-aos-delay="0">搶佔繁華商圈一席之地，鄰近康寧街商圈、明峰街商圈、中興街商圈，繁華金三角吸納萬戶消費力，百工百業開店即獲利，商機錢景在手！</div>
          <img src="./s5/lt.png" alt="" class="lt" v-show="!slide.img"  data-aos="fade" data-aos-delay="0">
          <img :src="slide.img" alt="" :class="`block-img ${fadeIndex === slide.fadeIndex ? 'pale' : ''}`" v-show="slide.img">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  .flex{
  width: 100%;
  height: 100%;
  position: relative;}
}

.bg-img {
  width: 100%;
  width: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.block {
  width: calc(100% / 3);
  height: calc(100% / 3);
  min-height: size(300);
}

.block-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: opacity 0.5s;

  &.pale {
    opacity: 0.2;
  }
}

.lt {
  @include img_l_pc(400, 0, 0);
}

.txt{
  //@include div_l_pc(450, 119, 40, 132);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing:0.1em;
  color: #000;
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: size(15) 0 0 0 ;

.title {
  font-size: size(67);
  font-weight: 900;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}

.subtitle {
  font-size: size(22.5);
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
  margin: 0 0 size(25) 0;
}

.desc {
  width: size(430);
  font-size: size(17);
  text-align: justify;
}
  
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
  .section5 {
    width: 100vw;
    height: sizem(588);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .lt {
    @include img_l_m(205, 72, 0);
  }

  .title {
    @include div_l_m(194, 66, 98, 30);
    font-size: sizem(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(4.5);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(222, 27, 166, 30);
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.7);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 218, 30);
    font-size: sizem(14.4);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(0.36);
    text-align: justify;
    color: #000;
  }

  .m-container {
    margin-top: sizem(326);
    .swiper-container{height:sizem(326);}
  }

  .item-img {
    width: sizem(310);
  }
  .item {
     transform: translateY(10%);
     transition:all 0.3s;opacity: 0.5;
    &.swiper-slide-active {
     transform: translateY(0%);
     z-index: 2;opacity: 1;
    }
  }
/*
  .item {
    &:nth-child(even) {
      margin-top: sizem(45);
    }
  }*/
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section5',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      fadeIndex: 0,
      swiperOption: {
        slidesPerView: isMobile ? 1.2 : 1,
        spaceBetween: isTablet ? 20 : -50,
	  centeredSlides: true,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        effect: 'slide',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s5/1.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/2.jpg'),
          fadeIndex: 1,
        },
        {
          img: require('./s5/3.jpg'),
          fadeIndex: 2,
        },
        {
          img: require('./s5/4.jpg'),
          fadeIndex: 1,
        },
        {
          img: require('./s5/6.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/7.jpg'),
          fadeIndex: 2,
        },
        {
          img: require('./s5/8.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/9.jpg'),
          fadeIndex: 1,
        },
      ],
      blockList: [
        {
          img: require('./s5/1.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/2.jpg'),
          fadeIndex: 1,
        },
        {
          img: require('./s5/3.jpg'),
          fadeIndex: 2,
        },
        {
          img: require('./s5/4.jpg'),
          fadeIndex: 1,
        },
        {
          img: '',
        },
        {
          img: require('./s5/6.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/7.jpg'),
          fadeIndex: 2,
        },
        {
          img: require('./s5/8.jpg'),
          fadeIndex: 0,
        },
        {
          img: require('./s5/9.jpg'),
          fadeIndex: 1,
        },
      ],
    }
  },

  components: {
    swiper,
    swiperSlide,
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

  mounted() {
    setInterval(() => {
      this.fadeIndex = this.fadeIndex === 3 - 1 ? 0 : this.fadeIndex + 1
    }, 5000)
  },

  computed: {},

  watch: {},
}
</script>
