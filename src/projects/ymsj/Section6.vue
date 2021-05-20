<template>
  <div class="section6">
    <div class="title">
      因為稀有所以珍貴
    </div>
    <div class="subtitle">
      陽明山保護區限建規範<br />
      住戶更惜售
    </div>
    <img src="./s6/style_1.png" :alt="`${info.caseName}_img`" class="style1">
    <img src="./s6/t_style.png" :alt="`${info.caseName}_img`" class="t_style">
    <img src="./s6/bird.png" :alt="`${info.caseName}_img`" class="bird">

    <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-600" @slideChangeTransitionEnd="slideChanged" v-if="isMobile">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide + index" class="item">
        <img :src="slide.img" :class="`item-img`" />
        <p v-html="slide.p"></p>
      </swiper-slide>

      <div class="swiper-button-prev prev-btn" slot="button-prev" v-if="isMobile">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next" v-if="isMobile">
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <img src="./s6/leaf.png" :alt="`${info.caseName}_img`" class="leaf">
    <img src="./s6/img_1.png" :alt="`${info.caseName}_img`" class="img1">
    <img src="./s6/img_2.png" :alt="`${info.caseName}_img`" class="img2">
    <img src="./s6/style_2.png" :alt="`${info.caseName}_img`" class="style2">
    <div class="cloud-bg">
      <img src="./s6/style_3.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
    </div>
    <div class="desc desc1">
      「富貴山頭」陽明山豪墅交易連年創天價，美景讓許多富豪趨之若鶩<br />
      因受國家森林公園保護區管制，無法改建及擴建<br />
      造成陽明山的土地稀有，住戶都相當惜售<br />
      可開發土地與房屋稀少，造成一宅難求的現象<br />
      陽明山別墅價值因此居高不下
    </div>
    <div class="desc desc2">
      連原本有望開發的<br />
      「陽明山保變住六之六」開發案都充滿變數<br />
      (此案初估每坪上看200萬元)<br />
      讓陽明山因土地與住宅的稀有性更顯珍貴
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  width: 100%;
  height: auto;
  min-height: size(1163 + 205);
  max-height: auto;
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
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
}

.title {
  @include img_l_pc(356, 236, 165);
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
  @include img_l_pc(356, 306, 165);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: left;
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
  @include img_l_pc(658, 453, 174);
}

.desc2 {
  @include img_l_pc(416, 747, 174);
}
.style1 {
  @include img_r_pc(434, 142, 610);
}

.style2 {
  @include img_r_pc(243, 311, 40);
}

.img1 {
  @include img_r_pc(843, 296, 0);
}
.img2 {
  @include img_r_pc(843, 769, 0);
}

.t_style {
  @include img_l_pc(578, 43, 0);
  animation: strech 5s ease-in-out alternate infinite;
}
.bird {
  @include img_r_pc(389, 841, 838);
}
.leaf {
  @include img_l_pc(251, 913, -70);
}

@keyframes strech {
  to {
    transform: skewX(10deg);
  }
}

.cloud-bg {
  .cloud {
    animation: cloud 5s ease-in-out alternate infinite;
  }

  .cloud1 {
    @include img_r_pc(745, 80, -150);
    top: auto;
    bottom: size(30);
    transform: translateX(-10%);
  }
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section6 {
    width: 100vw;
    min-height: sizem(752);
    max-height: sizem(752);
    height: sizem(752);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .title {
    @include img_l_m(178, 30, 30);
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
    @include img_l_m(223, 60, 30);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: left;
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
    text-align: left;
    color: #4d4d4d;
    white-space: normal;
  }

  .desc1 {
    @include img_l_m(315, 140, 30);
  }

  .desc2 {
    @include img_l_m(315, 337, 30);
  }
  .style1 {
    @include img_r_m(158, 385, 0);
  }

  .style2 {
    display: none;
  }

  .img1 {
    @include img_r_m(843, 296, 0);
    display: none;
  }
  .img2 {
    @include img_r_m(843, 769, 0);
    display: none;
  }

  .t_style {
    @include img_l_m(578, 43, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }
  .bird {
    @include img_r_m(117, 0, 0);
  }
  .leaf {
    @include img_l_m(88, 440, -20);
  }

  @keyframes strech {
    to {
      transform: skewX(10deg);
    }
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_r_m(745, 80, -150);
      top: auto;
      bottom: size(30);
      transform: translateX(-10%);
      display: none;
    }
  }

  .prev-btn,
  .next-btn {
    height: 100%;
    width: 10em;
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

  .swiper-container {
    @include img_c_m(315, 472);
    overflow: visible;
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
    bottom: -12%;
    left: sizem(0 / 2);
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
  name: 'section6',
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
      // blockIndex: 0,
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
      slideList: [
        {
          img: require('./s6/img_1.png'),
        },
        {
          img: require('./s6/img_2.png'),
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

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
