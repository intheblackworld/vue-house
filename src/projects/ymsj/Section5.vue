<template>
  <div class="section5">
    <div :class="`dialog ${isShow ? 'show' : ''}`">
      <img :src="dialogImg" alt class="dialog-img" />
      <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="200">
      自然景觀豐富稀有
    </div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
      名人政要別墅聚落
    </div>
    <div class="desc desc1" v-if="isPC" data-aos="fade-up" data-aos-delay="600">
      陽明山自然森林資源豐富<br />
      居高臨下，更可看到美麗的大台北景色<br />
    </div>
    <div class="desc desc2" v-if="isPC" data-aos="fade-up" data-aos-delay="800">
      正因為陽明山擁有獨特的自然環境與景觀、隱密性又佳<br />
      這裡的景觀別墅，更吸引企業名人爭相置產與收藏
    </div>
    <div class="desc desc1" v-if="isMobile" data-aos="fade-up" data-aos-delay="600">
      陽明山自然森林資源豐富<br />
      居高臨下，更可看到美麗的大台北景色<br />
    </div>
    <div class="desc desc2" v-if="isMobile" data-aos="fade-up" data-aos-delay="800">
      正因為陽明山擁有獨特的自然環境與景觀、隱密性又佳，這裡的景觀別墅，更吸引企業名人爭相置產與收藏
    </div>
    <img src="./s5/style.png" :alt="`${info.caseName}_img`" class="style_l" data-aos="fade-up" data-aos-delay="200">
    <img src="./s5/style.png" :alt="`${info.caseName}_img`" class="style_r" data-aos="fade-up" data-aos-delay="200">
    <img src="./s5/t_style_l.png" :alt="`${info.caseName}_img`" class="t_style_l" data-aos="fade-right" data-aos-delay="400">
    <img src="./s5/t_style_r.png" :alt="`${info.caseName}_img`" class="t_style_r" data-aos="fade-left" data-aos-delay="400">
    <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" @click="showDialog(index)" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev" v-if="isMobile">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next" v-if="isMobile">
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- <div class="btn" v-if="isMobile">
      <div class="btn_l" @click="blockIndex = prevIndex"><img :src="list[prevIndex].img" alt=""></div>
      <div class="btn_r" @click="blockIndex = nextIndex"><img :src="list[nextIndex].img" alt=""></div>
    </div> -->
  </div>
</template>
<style lang="scss">
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background: #000;
  box-shadow: inset 0 0 0 0px #000;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #fff;
  box-shadow: inset 0 0 0 1px #000;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100%;
  height: size(1320);
  min-height: size(1320);
  max-height: size(1320);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}
.t_style_l {
  @include img_l_pc(80, 267, 600);
}

.t_style_r {
  @include img_r_pc(80, 267, 600);
}

.style_l {
  @include img_l_pc(665, 0, 0);
}

.style_r {
  @include img_r_pc(648, 314, 0);
}

.title {
  @include img_c_pc(356, 214);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(356, 285);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: center;
  color: #cc8b00;
  white-space: nowrap;
}
.desc {
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.65;
  letter-spacing: size(2);
  text-align: center;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc1 {
  @include img_c_pc(526, 380);
}

.desc2 {
  @include img_c_pc(526, 516);
}

.swiper-container {
  @include img_l_pc(1920 + 920, 712, 0 - 460);
  height: size(576)
  // overflow: visible;
}

.item {
  p {
    position: absolute;
    bottom: 0.5em;
    right: 2em;
    color: #fff;
    text-align: right;
    font-size: size(15);
  }
}
.item-img {
  width: 100%;
  height: size(546);
  object-fit: cover;
  margin: 0 auto;
  cursor: pointer;
}

.swiper-pagination {
  transform: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: 0%;
  left: size(0 / 2);
}

.prev-btn,
.next-btn {
  height: 100%;
  width: 10em;
  font-size: size(20);
  right: 1em;
  top: -5%;
  margin: 0;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(200%);
    // background-color: #df6c0088;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    width: 5em;
    height: 5em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.75em);
    border: solid #fff;
    border-width: 0.1em 0.1em 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }
}
.prev-btn {
  transform: scaleX(-1);
  right: auto;
  left: 1em;
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-img {
    width: calc(90vh * 1920 / 1080 - 80px);
    height: calc(90vh - 70px);
    max-width: calc(90vw - 70px);
    max-height: calc(90vw * 1080 / 1920 - 70px);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
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
    height: sizem(510);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .t_style_l {
    @include img_l_m(39, 24, 30);
  }

  .t_style_r {
    @include img_r_m(39, 24, 30);
  }

  .style_l {
    // @include img_l_m(665, 0, 0);
    display: none;
  }

  .style_r {
    @include img_r_m(262, 104, 0);
  }

  .title {
    @include img_c_m(178, 0);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(178, 32);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .desc {
    font-size: sizem(14);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.7);
    text-align: center;
    color: #4d4d4d;
    white-space: normal;
  }

  .desc1 {
    @include img_c_m(315, 82);
  }

  .desc2 {
    @include img_c_m(315, 150);
  }

  .swiper-container {
    @include img_c_m(315, 254);
    height: sizem(217);
    // overflow: visible;
  }

  .item {
    p {
      font-size: sizem(12);
    }
  }
  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
    }
  }

  .item-img {
    width: 100%;
    height: sizem(187);
    object-fit: cover;
    margin: 0 auto;
  }

  .swiper-pagination {
    transform: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: auto;
    bottom: 0%;
    left: sizem(0 / 2);
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s;
    display: none;
    overflow: scroll;

    &.show {
      display: block;
      z-index: 210;
      opacity: 1;
    }

    .dialog-img {
      width: auto;
      height: 90vh;
      max-width: none;
      max-height: none;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }

    .close {
      position: fixed;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.6);
      right: 0px;
      top: 0px;
      width: 40px;
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
import info from '@/info'

export default {
  name: 'section5',
  mixins: [slider],
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
      isDialog: false,
      blockIndex: 0,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        slidesPerGroup: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // effect : 'fade',
        /*   fadeEffect: {
    crossFade: true,
  },*/
        // centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: isMobile
        ? [
            {
              img: require('./s5/slider_1.png'),
            },
            {
              img: require('./s5/slider_2.png'),
            },
            {
              img: require('./s5/slider_3.png'),
            },
          ]
        : [
            {
              img: require('./s5/slider_1.png'),
            },
            {
              img: require('./s5/slider_2.png'),
            },
            {
              img: require('./s5/slider_3.png'),
            },
          ],
      dialogImg: '',
      isShow: false,
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

    showDialog(index) {
      this.dialogImg = this.slideList[index].img
      this.isShow = true
    },
    closeDialog() {
      this.isShow = false
    },
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
