<template>
  <div class="section8">
    <div class="swiper">
      <swiper
        :navigation="true"
        :options="swiperOption"
        ref="mySwiper"
        class="item-list flex-jb flex-as"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index" :key="slide.img"
          :class="`swipe-item`"
        >
        <div class="pic">
          <img :src="slide.img" :alt="slide.name">
          <div class="slide-name absolute" v-html="slide.name"></div>
        </div>
        <div class="txt">
          <div class="subtitle" data-aos="fade" data-aos-delay="200" >
            <span v-html="slide.title"></span>
            <img loading="lazy" :src="slide.icon" :alt="slide.title">
          </div>
        </div>
        </swiper-slide>
      </swiper>
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
        <img src="./all/prev-btn.png" alt="prev" class="prev-btn" slot="button-prev">
        <img src="./all/next-btn.png" alt="next" class="next-btn" slot="button-next">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section8 {
  width: 100%;
  height: auto;
  position: relative;
  margin: 10vw auto 0;
}
.txt{
  position: relative;
  margin: 0em auto 0em auto;
  z-index: 2;
  @include txt(size(18));
  .subtitle {
    position: relative;
    font-size: size(23);
    margin:0em auto 0em;
    width: 100%;
    display: flex;
    justify-content:space-between;align-items:center;
    letter-spacing:0.04em;
    color:#FFF;
    font-weight: 800;
    transform: scale(1.2);
    img{height:3.4em;width: auto;}
    i{font-style:normal;}
  }
}
.pic{
width:100%;
height: size(380);
position: relative;

}

/* Swipe */
.swiper {
  width: size(1500);
  height: auto;
  margin: auto;
  position: relative;
}
@include swipe();

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
  .section8 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  padding:10vw 0;
  }

  /* Swipe */
.swiper {
width:100%;
  }
.pic{
width: sizem(310);
height: sizem(260);
margin: auto;
}
.txt{
    width: sizem(310);
  .subtitle {
    font-size: sizem(15);
    width: 100%;
    display: flex;
    justify-content:space-between;align-items:center;
    letter-spacing:0.04em;
    color:#FFF;
    font-weight: 800;
    transform: scale(1.2);
    img{height:3.4em;width: auto;}
    i{font-style:normal;}
  }
  }
    .swipe-btns {
    height: 80%;
    }
.item {
    .slide-name {
      font-size: sizem(12);
    padding: 1em 1.3em;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import info from "@/info";
//import slider from "@/mixins/slider.js";
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section8',

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isAnimateBg: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween:30,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        loop: isMobile ? true : false,
        autoplay: {
          delay: 5000,
          disableOnInteraction:isMobile ? false : true,
        },
         /*
        slidesPerColumn: isMobile ? 1 : 1,
       centeredSlides: isMobile ? true : false,

        slideToClickedSlide: isMobile ? true : false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        */
        navigation: {
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        },
      },
      slideList: [
        {
          img: require("./s8/1.jpg"),
          name: "此為示意圖僅供參考",
          icon: require("./s8/1.png"),
          title: "Rinnai廚具",
        },
        {
          img: require("./s8/2.jpg"),
          name: "此為示意圖僅供參考",
          icon: require("./s8/2.png"),
          title: "英國原裝進口 Doulton 陶瓷蕊心",
        },
        {
          img: require("./s8/3.jpg"),
          name: "此為示意圖僅供參考",
          icon: require("./s8/3.png"),
          title: "耶魯三合一電子鎖",
        },
      ],
    }
  },

  methods: {
  },

  mounted() {
    if (this.isMobile) {
      this.toggleTimer = false
    }
  },

  created() {},

  computed: {
    // isCurrent() {
    //   return this.slideIndex
    // },
  },
}
</script>
