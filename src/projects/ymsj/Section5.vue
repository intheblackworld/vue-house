<template>
  <div class="section5">
    <div class="title">
      自然景觀豐富稀有
    </div>
    <div class="subtitle">
      名人政要別墅聚落
    </div>
    <div class="desc desc1">
      陽明山自然森林資源豐富，四季色彩繽紛<br />
      居高臨下，更可看到美麗的大台北景色<br />
      居住在山林之間，不僅有清新的空氣，還有滿山的綠意<br />
      瞬間所有的煩惱與壓力全都消散
    </div>
    <div class="desc desc2">
      正因為陽明山擁有獨特的自然環境與景觀、隱密性又佳<br />
      這裡的景觀別墅，更吸引企業名人爭相置產與收藏
    </div>
    <img src="./s5/style.png" :alt="`${info.caseName}_img`" class="style_l">
    <img src="./s5/style.png" :alt="`${info.caseName}_img`" class="style_r">
    <img src="./s5/t_style_l.png" :alt="`${info.caseName}_img`" class="t_style_l">
    <img src="./s5/t_style_r.png" :alt="`${info.caseName}_img`" class="t_style_r">
    <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <!-- <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div> -->
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
  background-color: #fff;
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
  @include img_l_pc(80, 167, 600);
}

.t_style_r {
  @include img_r_pc(80, 167, 600);
}

.style_l {
  @include img_l_pc(665, 0, 0);
}

.style_r {
  @include img_r_pc(648, 314, 0);
}

.title {
  @include img_c_pc(356, 114);
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
  @include img_c_pc(356, 185);
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
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc1 {
  @include img_c_pc(526, 290);
}

.desc2 {
  @include img_c_pc(526, 516);
}

.swiper-container {
  @include img_l_pc(1920 + 550, 712, -550);
  overflow: visible;
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
}

.swiper-pagination {
  transform: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: -7%;
  left: size(550 / 2)
}

.prev-btn,
.next-btn {
  height: 100%;
  width: 2em;
  font-size: size(20);
  right: 1em;
  top: 0;
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
    background-color: #df6c0088;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
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
    height: sizem(898);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .grass {
    @include img_r_m(173, -100, 0);
    // top: auto;
    // bottom: sizem(-80);
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }

  // begin
  .trans-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .trans-enter {
    opacity: 0;
    z-index: 1;
  }

  .trans-enter-active {
    transition: all 1.8s ease;
  }

  .trans-leave-active {
    transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .line {
    @include div_l_m(7, 177, 39, 33);
    background-color: #00808e;
  }
  .label {
    @include img_l_m(116, 39, 55);
    font-size: sizem(17);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(2.72);
    text-align: left;
    color: #595757;
    white-space: nowrap;
    z-index: 2;
  }
  .title {
    @include img_l_m(250, 72, 55);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #595757;
    white-space: nowrap;
    z-index: 2;
  }

  .subtitle {
    @include img_l_m(300, 156, 55);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.96);
    text-align: left;
    color: #595757;
    white-space: normal;
    z-index: 3;
  }

  .list-info {
    @include img_c_m(310, 233);
    img {
      width: sizem(245);
      margin: 0 auto sizem(17);
    }
    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: sizem(310);
      padding: 0;
    }

    .info-title {
      width: sizem(310);
      font-size: sizem(22);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.18;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-bottom: sizem(15);
    }

    .info-desc {
      width: sizem(310);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.53;
      letter-spacing: sizem(0.6);
      text-align: left;
      color: #595757;
    }
  }

  .swiper-container {
    @include img_c_m(375, 577);
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

  .btn {
    position: absolute;
    top: sizem(250);
    width: 100%;
    left: 0;
    .btn_l,
    .btn_r {
      position: absolute;
      top: sizem(0);
      border-radius: sizem(50);
      background: #0001;
      transition: all 0.3s;
      padding: 3vw;
      transform: translateX(3%);
      &:hover {
        background: #0003;
      }
    }
    .btn_l {
      right: sizem(327);
      animation: btn1 0.6s ease-in-out infinite alternate-reverse;
    }
    .btn_r {
      left: sizem(327);
      animation: btn1 0.6s ease-in-out infinite alternate;
    }
    img {
      height: sizem(80);
    }
  }
  @keyframes btn1 {
    to {
      transform: translateX(-3%);
    }
  }
  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(259);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

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

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .prev-btn,
  .next-btn {
    font-size: sizem(15);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
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
        slidesPerView: isMobile ? 1 : 2.42,
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
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
      slideList: isMobile
        ? []
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

    addBlockIndex() {
      this.blockIndex = this.nextIndex
    },

    decBlockIndex() {
      this.blockIndex = this.prevIndex
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
