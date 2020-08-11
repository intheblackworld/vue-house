<template>
  <div class="section11">
    <div v-if="!isMobile">
      <h3 class="title absolute" data-aos="fade-down"
        data-aos-delay="400">
        集建築與藝術發想 文學派的大師陣容
      </h3>
      <div class="border absolute" data-aos="fade-right"
        data-aos-delay="600">
        <h3 class="subtitle">
          國家金質獎 常勝軍/邱垂睿
        </h3>
        <p class="desc">
          視家為內心停泊的港灣。以美學到機能再三推敲，細細梳理住宅的高感動<br />
          代表作 台大敦品、東騰千里、麗水白在、東煒泰和
        </p>
      </div>
      <img
        src="./s11/1l.jpg"
        alt=""
        class="main-img absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >

      <div class="img-list flex-ac flex-jb absolute">
        <div
          class="img-item"
          v-for="(slide, index) in slideList1"
          :key="slide.img"
          data-aos="fade-down"
          :data-aos-delay="800 + (index * 100)"
        >
          <h3
            class="img-title"
            v-html="slide.title"
          ></h3>
          <img
            :src="slide.img"
            alt=""
            class="img-item"
          >
        </div>
      </div>
    </div>
    <div
      v-else
      class="container"
    >
      <div class="slide">
        <div class="slide-content">
          <div class="slide-subtitle">
            {{slideList1[slideIndex].subtitle}}
          </div>
          <div
            class="slide-title"
            v-html="slideList1[slideIndex].title"
          >
          </div>
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class=""
          @slideChangeTransitionStart="slideChanged"
        >
          <div
            class="swiper-button-prev"
            slot="button-prev"
          >
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
          </div>
          <swiper-slide
            v-for="(slide, index) in slideList2"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.img"
              :class="`item-img`"
            />
            <!-- <div v-html="slide.name"></div> -->
          </swiper-slide>
          <!-- <div
            class="swiper-pagination"
            slot="pagination"
          ></div> -->
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-pagination-bullet {
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #c0c1c1;
  width: 15px;
  height: 15px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #c0c1c1;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section11 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  width: size(1390);
  top: size(40);
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: size(79);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: 6.34px;
  text-align: center;
  color: #a38057;
  white-space: nowrap;
}

.main-img {
  width: size(536);
  top: size(180);
  left: size(311);
}

.border {
  width: size(790);
  height: size(322);
  top: size(240);
  right: size(301);
  border: 1px solid #000;
  padding: 30px;
}

.subtitle {
  color: #000;
  font-size: size(50);
  margin-bottom: 15px;
}

.desc {
  color: #000;
  font-size: size(32);
  line-height: 2;
  text-align: left;
}

.img-list {
  width: size(220 * 2 + 1195);
  bottom: size(30);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.img-item {
  width: size(220);
}

.img-title {
  font-size: size(28);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: 2.24px;
  text-align: center;
  color: #000000;
  margin-bottom: size(15);
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 100vw;
  }

  .swiper-pagination {
    // transform: none;
    // width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // top: auto;
    bottom: 5%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: auto;
    height: size-m(300);
    padding: 0 size-m(5);
    cursor: none;
  }

  .dialog {
    display: none;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;

    .dialog-content {
      width: 100vw;
      height: auto;
    }

    &.show {
      display: flex;
    }

    .close {
      position: absolute;
      width: 40px;
      right: 10px;
      top: 20vh;
      cursor: pointer;
    }
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
  name: 'section11',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 2.2 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
        // effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList1: [
        {
          img: require('./s11/1.jpg'),
          title: '【建築設計】',
        },
        {
          img: require('./s11/2.jpg'),
          title: '【藝術創作】',
        },
        {
          img: require('./s11/3.jpg'),
          title: '【公設美學】',
        },
        {
          img: require('./s11/4.jpg'),
          title: '【空間藝術】',
        },
        {
          img: require('./s11/5.jpg'),
          title: '【結構工程】',
        },
        {
          img: require('./s11/6.jpg'),
          title: '【景觀園藝】',
        },
        // {
        //   img: require('./s5/img2-1.jpg'),
        //   title: '公設規劃<br />專業物管 盡享飯店體驗',
        // },
        // {
        //   img: require('./s5/img2-2.jpg'),
        //   title: '公設規劃<br />花園健身 百萬美景盡收眼底',
        // },
        // {
        //   img: require('./s5/img2-3.jpg'),
        //   title: '公設規劃<br />華美空間 也是專屬私人招待所',
        // },
      ],
      slideList2: [
        // {
        //   img: require('./s5/img2-1.jpg'),
        //   title: '公設規劃<br />專業物管 盡享飯店體驗',
        // },
        // {
        //   img: require('./s5/img2-2.jpg'),
        //   title: '公設規劃<br />花園健身 百萬美景盡收眼底',
        // },
        // {
        //   img: require('./s5/img2-3.jpg'),
        //   title: '公設規劃<br />華美空間 也是專屬私人招待所',
        // },
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

    showDialog(index) {
      this.isShowDialog = true
      this.dialogImg = this.dialogImgList[index]
    },
  },

  mounted() {},

  computed: {},
}
</script>
