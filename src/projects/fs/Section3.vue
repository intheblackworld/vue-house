<template>
  <div class="section3">
    <div class="bg">
      <div v-if="!isMobile">
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.img" :class="`item-img`" />
            <div class="item-title" v-html="slide.title"></div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>
        </swiper>
        <div class="content">
          <div class="stitle">增值起步走！起漲向東看！</div>
          <div class="title">再造高雄新東區</div>
          <div class="desc">
            紐約、新加坡等國際城市都呈現「向東發展」趨勢，鳳山位高雄都會核心東側，同時也是高雄行政區人口數第一名，不僅人口潛力持續攀升，建設實力也不容小覷。
            <br />
            <br />南台灣最大兩座藝術殿堂衛武營國家文化藝術中心、大東藝術中心座落於此，曹公圳親水計畫、環城自行車道、國道7號計畫等共10大建設共投入超過千億資金，有效提升了居住機能品質，連帶帶動鳳山身價，大大推動城市位階，高雄新東區未來可看性無可限量！
          </div>
        </div>
        <img src="./s3/bg_01.jpg" alt class="bg-img" />
      </div>
      <div v-else>
        <swiper :options="swiperOption" ref="mySwiper" data-aos="fade" data-aos-delay="200">
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img :src="slide.img" :class="`item-img`" />
            <div class="item-title" v-html="slide.title"></div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="./all/箭頭.png" alt />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="./all/箭頭2.png" alt />
          </div>
        </swiper>
        <div class="content" data-aos="fade-down" data-aos-delay="200">
          <div class="stitle">增值起步走！起漲向東看！</div>
          <div class="title">再造高雄新東區</div>
          <div class="desc">
            紐約、新加坡等國際城市都呈現「向東發展」趨勢，鳳山位高雄都會核心東側，同時也是高雄行政區人口數第一名，不僅人口潛力持續攀升，建設實力也不容小覷。
            <br />
            <br />南台灣最大兩座藝術殿堂衛武營國家文化藝術中心、大東藝術中心座落於此，曹公圳親水計畫、環城自行車道、國道7號計畫等共10大建設共投入超過千億資金，有效提升了居住機能品質，連帶帶動鳳山身價，大大推動城市位階，高雄新東區未來可看性無可限量！
          </div>
        </div>
        <img src="./s3/bg_m.jpg" alt class="bg-img" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  height: calc(100vw * 800 / 1920);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
}

.bg-img {
  width: 100vw;
  height: calc(100vw * 800 / 1920);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  mix-blend-mode: screen;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}

.swiper-container {
  width: 50vw;
  position: relative;
  z-index: 5;

  .item-img {
    &:nth-child(1) {
      position: relative;
    }
    width: 100%;
    position: absolute;
    display: block;
  }
}

.content {
  width: 50vw;
  padding-left: calc(100vw * (100 / 1920));
}

.stitle {
  background-image: url('./all/stitle.jpg');
  background-size: cover;
  background-position: center;
  width: calc(100vw * (430 / 1920));
  height: calc(100vw * (54 / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(100vw * 30 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-align: center;
  color: #5d4400;
}

.title {
  font-size: calc(100vw * 60 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: 2.4px;
  text-align: left;
  color: #ffffff;
  margin-top: calc(100vw * 17 / 1920);
  margin-bottom: calc(100vw * 30 / 1920);
}

.desc {
  font-size: calc(100vw * 24 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: left;
  color: #cccccc;
  width: calc(100vw * (741 / 1920));
}

.item-title {
  font-size: calc(100vw * 24 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  z-index: 10;
}

.swiper-button-next,
.swiper-button-prev {
  // animation: arrow  linear 1s alternate infinite;
}
.swiper-button-next {
  // animation-delay:1s;
}

@keyframes arrow {
  to {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
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
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;

    > div {
      display: block;
    }
  }

  .swiper-container {
    width: 100vw;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 3;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .content {
    width: 90vw;
    padding-left: 0;
    margin: 0 auto;
  }

  .stitle {
    background-image: url('./all/stitle.jpg');
    background-size: cover;
    background-position: center;
    width: calc(100vw * (215 / 375));
    height: calc(100vw * (27 / 375));
    font-size: calc(100vw * 15 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.6px;
    text-align: center;
    color: #5d4400;
    margin-top: 33px;
  }

  .title {
    font-size: calc(100vw * 29 / 375);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: 2.32px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 17 / 375);
    margin-bottom: calc(100vw * 17 / 375);
  }

  .desc {
    font-size: calc(100vw * 14 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #cccccc;
    width: 100%;
    padding-bottom:31vw;
  }

  .item-title {
    font-size: calc(100vw * 14 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
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
  name: 'section3',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isHide: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          img: require('./s3/1衛武營.jpg'),
          title: '衛武營',
        },
        {
          img: require('./s3/2大東藝文中心.jpg'),
          title: '大東藝文中心',
        },
        {
          img: require('./s3/3享溫馨.jpg'),
          title: '享溫馨',
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
}
</script>
