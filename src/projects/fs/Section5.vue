<template>
  <div class="section5">
    <div class="bg">
      <img src="./s5/bg.jpg" alt class="bg-img" v-if="!isMobile" />
      <div v-if="!isMobile">
        <div class="img-container" data-aos="fade" data-aos-delay="200">
          <img :src="imgList[imgIndex].img" alt />
          <div class="item-title">{{imgList[imgIndex].title}}</div>
        </div>
        <div class="content">
          <div class="title">
            京城集團邁步卓越
            <br />金獎冠冕 實力之作
          </div>
          <div
            class="desc"
          >京城集團創立於1982年，為目前台灣數一數二的企業集團，跨足建設、營造、飯店產業：京城建設、京城飯店、H2O水京棧國際酒店，整合了近40年經驗，以堅強實力造就每件精彩作品，其中「京城京城」、「京城美術皇居」更開啟了高雄豪宅的新眼界，同時也是國際建築獎項常勝軍，包含「京城樂活、「京城鉅誕」、「京城凱悅」等案，業績閃耀南台灣！</div>
          <div class="img-list">
            <div v-for="(img, index) in imgList" @click="imgIndex = index" :key="`img-${index}`">
              <img src="./s5/b.png" alt class="b" />
              <img :src="img.img" alt />
              <div class="border"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <img src="./s5/bg_m.jpg" alt class="bg-img" />
        <div class="img-container" data-aos="fade" data-aos-delay="200">
          <img :src="imgList[imgIndex].img" alt />
          <div class="item-title">{{imgList[imgIndex].title}}</div>
        </div>
        <div class="img-list" data-aos="fade" data-aos-delay="400">
          <div v-for="(img, index) in imgList" @click="imgIndex = index" :key="`img-${index}`" :class="imgIndex == index ? 'active' : ''">
            <img src="./s5/b.png" alt class="b" />
            <img :src="img.img" alt />
            <div class="border"></div>
          </div>
        </div>
        <div class="title">
          京城集團邁步卓越
          <br />金獎冠冕 實力之作
        </div>
        <div
          class="desc"
        >京城集團創立於1982年，為目前台灣數一數二的企業集團，跨足建設、營造、飯店產業：京城建設、京城飯店、H2O水京棧國際酒店，整合了近40年經驗，以堅強實力造就每件精彩作品，其中「京城京城」、「京城美術皇居」更開啟了高雄豪宅的新眼界，同時也是國際建築獎項常勝軍，包含「京城樂活、「京城鉅誕」、「京城凱悅」等案，業績閃耀南台灣！</div>
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
  border: 1px solid #fff5cc;

  > div {
    display: flex;
    align-items: flex-end;
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
  // mix-blend-mode: screen;
  z-index: 0;

  &:nth-child(1) {
    // position: relative;
  }
}

.img-container {
  width: 50vw;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    display: block;
  }
}

.img-list {
  width: 98%;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-left: 2%;
  div {
    width: 25%;
    cursor: pointer;
    position: relative;

    &:hover, &.active {
      .border {
        opacity: 1;
      }
    }
  }

  .border {
    width: 100%;
    height: 107%;
    border: 1px solid #fff;
    transform: translate(-5px, -5px);
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.3s;
  }

  img {
    width: 100%;
    position: absolute;
    left: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .b {
    z-index: 1;
  }
}

.content {
  width: 50vw;
  z-index: 1;
}

.title {
  font-size: calc(100vw * 60 / 1920);
  // width: calc(100vw * 427 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 40px;
  margin-left: calc(100vw * 100 / 1920);
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
  width: calc(100vw * (752 / 1920));
  margin-bottom: 20px;
  margin-left: calc(100vw * 100 / 1920);
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
    border: none;

    > div {
      display: block;
    }
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
    z-index: 0;
    mix-blend-mode: screen;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .img-container {
    width: 100vw;
  }

  .img-list {
    margin-top: 0;
    margin-left: 0;
    z-index: 5;
    position: relative;
  }

  .content {
    width: 90vw;
    padding-left: 0;
    margin: 0 auto;
  }

  .title-logo {
    width: 100vw;
    z-index: 10;
  }

  .title {
    font-size: calc(100vw * 29 / 375);
    width: 90vw;
    margin: 0 auto;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: 2.32px;
    text-align: left;
    color: #ffffff;
    margin-top: calc(100vw * 45 / 375);
    margin-bottom: calc(100vw * 17 / 375);
  }

  .desc {
    font-size: calc(100vw * 12 / 375);
    width: 90vw;
    margin: 0 auto;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: left;
    color: #cccccc;
    padding-bottom:31vw;
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
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
// import slider from '@/mixins/slider.js'
// import 'swiper/dist/css/swiper.css'

// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section5',
  // mixins: [slider],
  components: {
    // swiper,
    // swiperSlide,
  },

  data() {
    return {
      isMobile,
      isHide: true,
      // swiperOption: {
      //   slidesPerView: isMobile ? 1 : 1,
      //   spaceBetween: isTablet ? 20 : 30,
      //   slidesPerColumn: isMobile ? 1 : 1,
      //   allowSlidePrev: isMobile ? true : true,
      //   allowSlideNext: isMobile ? true : true,
      //   // centeredSlides: true,
      //   // autoplay: {
      //   //   delay: 4000,
      //   //   disableOnInteraction: true,
      //   // },
      //   loop: true,
      //   effect: 'fade',
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      // },
      imgIndex: 0,
      imgList: [
        {
          img: require('./s5/1.jpg'),
          title: '京城King park',
        },
        {
          img: require('./s5/2.jpg'),
          title: '京城鉅誕',
        },
        {
          img: require('./s5/3.jpg'),
          title: 'H2O水京棧國際酒店',
        },
        {
          img: require('./s5/4.jpg'),
          title: '京城美術皇居',
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
