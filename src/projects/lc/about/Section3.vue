<template>
  <div class="section3">
    <h1 class="title">金獎建築師團隊</h1>
    <h1 class="subtitle">
      劉錦鐘建築師事務所、詹健鴻建築師事務所、蔡廷芳建築師事務所
    </h1>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
        <img :src="slide.img" :class="`item-img`" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="./s3/l.png" alt />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="./s3/r.png" alt />
      </div>
    </swiper>
    <div class="title2">
      銷售團隊
    </div>
    <div class="subtitle2">
      鈞驛廣告
    </div>
    <div class="desc">
      對於建築的堅持，成就「立瑾建築機構」對於城市的絕對責任<br />
      對客戶用心呵護，讓家成為每個人最精實且最舒適的穩固堡壘
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(1150);
  overflow: hidden;
  position: relative;
  background-color: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
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

.title {
  @include div_l_pc(1321, 121, 0, 302);
  font-size: size(42.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(6.77);
  text-align: center;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(1321, 121, 70, 302);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(6.77);
  text-align: center;
  color: #ff8200;
  white-space: nowrap;
}

.swiper-container {
  width: size(1250);
  top: size(160);
}

.item-img {width:100%;
 // width: size(431);
}

.title2 {
  @include div_l_pc(1321, 121, 790, 302);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(6.77);
  text-align: center;
  color: #606060;
  white-space: nowrap;
}

.subtitle2 {
  @include div_l_pc(1321, 121, 840, 302);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ff8200;
  white-space: nowrap;
}

.desc {
  @include div_l_pc(1250, 121, 900, 335);

  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  padding-top: 1.3em;
  letter-spacing:0.2em;
  text-align: center;
  color: #606060;
  white-space: nowrap;
  &::before{content: "";width: 100%; height: 1px;background: #ff8200;position: absolute;top: 0;left: 0;}
}
.swiper-container{overflow: initial;position: relative;
&::after,
&::before{content: "";height: 100%;width: 100%;background: #fff;position: absolute;top:0;z-index:5;}
&::after{left: 100%;}
&::before{right: 100%;}
}
.swiper-button-prev{left: 0px;transform: translateX(-150%);}
.swiper-button-next{right: 0px;transform: translateX(150%);}
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
  .section3 {
    width: 100vw;
    min-height:  sizem(850);
    max-height: sizem(850);
    height:sizem(850);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
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

  .title {
    @include div_l_m(375, 41, 0, 0);
    font-size: sizem(28);
  }

  .subtitle {
    @include div_l_m(310, 121, 60, 33);
    font-size: sizem(15);
    white-space: normal;
  }

  .swiper-container {
    width: sizem(290);
    top: sizem(140);
  }

  .item-img {
    width: sizem(290);
    height: sizem(430);
  }

  .title2 {
    @include div_l_m(124, 41, 586, 125);
    font-size: sizem(28);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1.77);
    text-align: center;
    color: #606060;
    white-space: nowrap;
  }

  .subtitle2 {
    @include div_l_m(68, 22, 626, 154);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.77);
    text-align: center;
    color: #ff8200;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 144, 665, 32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(2.77);
    text-align: justify;
    color: #606060;
    white-space: normal;
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
  name: 'section3',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: true,
        allowSlideNext: true,
        centeredSlides: true,
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
          img: require('./s3/1.jpg'),
        },
        {
          img: require('./s3/2.jpg'),
        },
        {
          img: require('./s3/3.jpg'),
        },
      ],
    }
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
