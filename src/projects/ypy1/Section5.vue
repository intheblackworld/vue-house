<template>
  <div class="section5">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
        <img :src="slide.img" :class="`item-img`" />
            <div class="slide-name absolute" v-html="slide.name"></div>
      </swiper-slide>
      <div class="swiper-button-prev prev-btn" slot="button-prev">
      </div>
      <div class="swiper-button-next next-btn" slot="button-next">
      </div>
    </swiper>
    <div class="hr" data-aos="zoom-in-down" data-aos-delay="0"></div>
    <h3 class="label" data-aos="fade-up" data-aos-delay="0">
      團隊一品
    </h3>
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">
      台灣誠信建商認證 嘉璟機構<br />
      嘉璟出品．豪宅一品
    </h3>
    <div class="desc" data-aos="fade-up" data-aos-delay="200">逾20年勤耕建築路，<br />
      嘉璟機構以精工品質贏得住戶肯定。<br />
      傳承豪邸理念，於中路特區，<br />
      以領袖豪宅思維，鉅鑄精緻名宅！</div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100%;
  height: size(875);
  min-height: size(875);
  max-height: size(875);
  position: relative;
  z-index: 1;
  // background-color: #fff;
  // min-height: size(900);
  background-image: url('./s5/bg_b.jpg');
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.hr {
  @include img_l_pc(4, 118, 1270 - 12);
  height: size(128);
  background: #fff;
}

.label {
  @include img_l_pc(120, 110, 1270);
  width: auto;
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.title {
  @include img_l_pc(437, 154, 1270);
  width: auto;
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(440, 311, 1270);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.swiper-container {
  @include img_l_pc(428 + 780, 97, 0);
}
.slide-name {
    right: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }

.item-img {
  width: 100%;
  height: size(701);
  object-fit: cover;
}

.prev-btn,
.next-btn {
  position: absolute;
  height: 100%;
  width: 3em;
  background: #0003;
  top: 0;
}

.prev-btn {
  left: 0;
}
.next-btn {
  right: 0;
  transform: scaleX(-1);
}
.prev-btn::after,
.next-btn::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 80' xml:space='preserve'%3E%3Cpolygon fill='%23FFFFFF' points='15,40 30,0 15,20 0,40 15,60 30,80 '/%3E%3C/svg%3E");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
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
    height: sizem(567);
    min-height: auto;
    max-height: initial;
    background-image: url('./m/6/bg_b.jpg');
    // background-attachment: scroll;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: visible;
  }

  .hr {
    @include img_l_m(4, 16, 33);
    height: sizem(92);
    background: #fff;
  }

  .label {
    @include img_l_m(84, 10, 41);
    width: auto;
    font-size: sizem(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .title {
    @include img_l_m(312, 42, 41);
    width: auto;
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 141, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .swiper-container {
    @include img_l_m(375, 97, 0);
    top: auto;
    bottom: 0;
  }

  .item-img {
    width: 100%;
    height: sizem(290);
    object-fit: cover;
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
      bottom: 0.8em;
      right: 1.2em;
      font-size: sizem(13);
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
    position: absolute;
    height: 100%;
    width: sizem(28);
    background: transparent;
    top: 10%;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

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
      swiperOption: {
        slidesPerView: isMobile ? 3 : 3,
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s5/1.jpg'),
          name: '臻第 實景',
        },
        {
          img: require('./s5/2.jpg'),
          name: '臻之御 實景',
        },
        {
          img: require('./s5/3.jpg'),
          name: '昭揚縱橫 實景',
        },
        {
          img: require('./s5/4.jpg'),
          name: '昭揚乾坤 實景',
        },
        {
          img: require('./s5/5.jpg'),
          name: '昭揚大器 實景',
        },
        {
          img: require('./s5/6.jpg'),
          name: '自遊人 實景',
        },
        {
          img: require('./s5/7.jpg'),
          name: '華爾道夫 實景',
        },
        {
          img: require('./s5/8.jpg'),
          name: '華爾道夫大廳 實景',
        },
        {
          img: require('./s5/9.jpg'),
          name: '華爾道夫園藝 實景',
        },
        {
          img: require('./s5/10.jpg'),
          name: '大河戀大廳 實景',
        },
      ],
    }
  },

  methods: {},

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
