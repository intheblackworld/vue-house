<template>
  <div class="section11">
    <div class="bg">
      <div v-if="!isMobile">
        <img
          src="./s11/gif.gif"
          alt="東方美學 樸質雅砌"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <img
          src="./s11/1t.png"
          alt="精巧規劃別具心裁，讓家人都愛窩在一起"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <!-- <img
          src="./s11/2t.png"
          alt="大砌玄關，明亮廳堂，樹海窗景就在眼前"
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800"
        /> -->
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div> -->
        </swiper>
      </div>
      <div v-else>
        <img
          src="./s11/mo/bg.gif"
          alt="精巧規劃別具心裁，讓家人都愛窩在一起"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="600"
        />
        <img
          src="./s11/mo/t1.png"
          alt="精巧規劃別具心裁，讓家人都愛窩在一起"
          class="bg-img"
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade-down" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.src" :class="`item-img`" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./arrow-left.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./arrow-right.png" alt />
          </div>
        </swiper>
        <!-- <img src="./s5/mo/bg.jpg" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s5/mo/logo.png" alt="" class="logo" data-aos="fade" data-aos-delay="1200">-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s5/bg.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}

.swiper-container {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  .item-img {
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background: #fff;
    height: 100%;
    height: calc(100vw * 1208 / 750) !important;
  }

  .item-img {
    width: 100%;
  }

  .title {
    border-left: 2px solid #02121c;
    padding-left: 10px;
    height: calc(100vw * 30 / 375);
    line-height: calc(100vw * 30 / 375);
    font-size: calc(100vw * 22 / 375);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.2px;
    text-align: left;
    color: #02121c;
    width: calc(100vw * 310 / 375);
    position: relative;
    z-index: 2;
    margin: 0 auto;
    margin-top: calc(100vw * 30 / 375);
    margin-bottom: calc(100vw * 20 / 375);
  }

  .desc {
    width: calc(100vw * 310 / 375);
    font-size: calc(100vw * 17 / 375);
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: calc(100vw * 24 / 375);
    letter-spacing: 1.5px;
    text-align: left;
    color: #3e3a39;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    margin-bottom: calc(100vw * 20 / 375);
    white-space: nowrap;
  }

  .dropdown {
    margin-bottom: 30px;
    .item {
      height: 45px;
      overflow: hidden;
      border-bottom: solid 0.5px #595757;
      width: calc(100vw * 645 / 750);
      margin: 0 auto;
      transition: all 0.5s;

      &.open {
        height: auto;
      }
    }
    .head {
      font-size: calc(100vw * 17 / 375);
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 45px;
      letter-spacing: 1.6px;
      text-align: left;
      color: #595757;
      white-space: nowrap;
    }

    .btn {
      width: 18px;
    }

    .content {
      padding-top: 0px;
      padding-bottom: 10px;
      font-size: calc(100vw * 14 / 375);
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.61;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
    }
  }

  .img {
    width: 100vw;
    margin-top: 20px;
    display: block;
  }

  .logo {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
  }

  .swiper-container {
    top: 40%;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-bottom: 30px;
    width: 90vw;
    position: absolute;
  }

  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 1vw;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 1vw;
  }

  // .bg-img {
  //   position: absolute !important;
  // }
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
      toggleList: [
        {
          title: '下樓 走進一座綠色花園',
          desc:
            '佔地約萬坪的七號公園，就在「耘萃」社區門口，轉個彎就是截然不同的生態綠意，調整呼吸走進自然美景，呼吸可以很放鬆、視野可以很寬裕，這一切近在咫尺完美零距離。',
          open: false,
        },
        {
          title: '散步 遇見輕軌的美好距離',
          desc:
            '走出社區約5分鐘，漫步就抵達輕軌／濱海沙崙站，未來將銜接輕軌藍海線，成為雙輕軌站。一路跟著幾米的浪漫繪畫，從紅樹林接軌北捷，悠遊士林圓山、台北城中、大安信義。',
          open: false,
        },
        {
          title: '轉彎 公司田溪腳踏車自由行',
          desc:
            '公七公園對面就是公司田溪水岸綠帶，是城市優雅的一抹綠岸，也棲息了眾多生態，喜鵲、白頭翁、白鷺鷥、水鳥徜徉其中；沿著旁邊的自行車道，可以悠遊淡水單車路網，輕鬆自在。',
          open: false,
        },
      ],
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        allowSlidePrev: true,
        allowSlideNext: true,
        // centeredSlides: true,
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // loop: isMobile,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          src: isMobile ? require('./s11/mo/1.jpg') : require('./s11/1.jpg'),
          alt: '耘悅圖書室'
        },
        {
          src: isMobile ? require('./s11/mo/2.jpg') : require('./s11/2.jpg'),
          alt: '耘享多功能教室'
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      if (this.toggleList[index].open) {
        this.toggleList[index].open = false
      } else {
        this.toggleList.forEach(item => (item.open = false))
        this.toggleList[index].open = !this.toggleList[index].open
      }
    },
  },
}
</script>
