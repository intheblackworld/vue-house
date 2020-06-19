<template>
  <div class="section11">
    <div class="bg">
      <div v-if="!isMobile">
        <div class="box box1"></div>
        <div
          class="box box2"
          data-aos="fade-right"
          data-aos-delay="400"
        ></div>
        <div
          class="box box3"
          data-aos="fade-left"
          data-aos-delay="300"
        ></div>
        <div class="relative">
          <img
            v-lazy="require('./s11/鳥.png')"
            alt="大寮站"
            class="bird"
            data-aos="fade"
            data-aos-delay="700"
          />
          <div
            class="content-t"
            data-aos="fade"
            data-aos-delay="900"
          >
            <div class="title">2-3房雙捷校園宅</div>
            <div
              class="block"
              @click="tabIndex = 0"
            >
              <div :class="`${tabIndex === 0 ? 'black' : 'white'} flex-c`">
                開箱!!京城鳳翔<br />熱銷幸福3房
              </div>
            </div>
            <div
              class="block"
              @click="tabIndex = 1 "
            >
              <div :class="`${tabIndex === 1 ? 'black' : 'white'} flex-c`">
                地段選得好<br />多姿生活沒煩惱
              </div>
            </div>
          </div>
          <div
            class="video flex-ac"
            data-aos="fade-left"
            data-aos-delay="1100"
          >
            <iframe
              :src="videos[tabIndex]"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="box box2"
          data-aos="fade-right"
          data-aos-delay="400"
        ></div>
        <div class="content-m">
          <div class="title">2-3房雙捷校園宅</div>
          <div
            class="video"
            data-aos="fade-left"
            data-aos-delay="1100"
          >
            <iframe
              :src="videos[tabIndex]"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div class="panel flex">
            <div
              class="content flex-c"
              v-if="tabIndex === 0"
            >開箱!!京城鳳翔<br />熱銷幸福3房</div>
            <div
              class="content flex-c"
              v-else
            >地段選得好<br />多姿生活沒煩惱</div>
            <div class="btn flex-c" @click="tabIndex === 0 ? (tabIndex = 1) : (tabIndex = 0)">
              <img
                src="./s11/arrow-right.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  height: size(1080);
  z-index: 3;
  background: #0e585b url('./s6/bgimg.png') fixed;
  background-size: cover;
  margin: 0 0 size(-200) 0;
}
.box {
  position: absolute;
}
.box1 {
  background: #fff;
  top: size(0);
  right: 0;
  width: 100%;
  height: size(1080);
}
.box2 {
  background: #20969b;
  top: size(50);
  left: size(37);
  width: size(1513);
  height: size(980);
  z-index: 2;
  position: absolute;
}
.box3 {
  background: #fff;
  top: 0;
  right: 0;
  width: 50%;
  height: size(590);
}
.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
}
.img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
    z-index: 2;
  }
  + div {
    position: absolute;
    color: #fffc;
    left: calc(100vw * 1900 / 1920 - 5.5em - 20px);
    top: calc(100vw * 785 / 1920 - 1.5em);
    z-index: 3;
    font-size: 13px;
  }
}

.bird {
  position: absolute;
  z-index: 2;
  height: size(980);
  top: size(50);
  left: size(37);
}

.l-img {
  position: absolute;
  width: calc(100vw * 1130 / 1920);
  height: auto;
  left: calc(100vw * 32 / 1920);
  top: calc(100vw * 80 / 1920);
  + div {
    position: absolute;
    color: #fffc;
    left: calc(100vw * 1162 / 1920 - 4em);
    top: calc(100vw * 714 / 1920 - 1.5em);
    font-size: 13px;
  }
}

.r-img {
  position: absolute;
  width: calc(100vw * 960 / 1920);
  height: auto;
  right: calc(100vw * 0 / 1920);
  top: calc(100vw * -100 / 1920);
  z-index: 1;
  + div {
    position: absolute;
    color: #fffc;
    left: calc(100vw * 1900 / 1920 - 5.5em - 20px);
    top: calc(100vw * 520 / 1920 - 1.5em);
    font-size: 13px;
    z-index: 2;
  }
}

.content-t {
  position: absolute;
  top: size(283);
  left: size(188);
  width: size(396);
  z-index: 3;

  .block {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 0;
    cursor: pointer;

    .black {
      height: size(166);
      background: rgba(0, 0, 0, 0.45);
      color: #fff;
      font-size: size(40);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }

    .white {
      height: size(166);
      background: rgba(0, 0, 0, 0);
      color: #ccc;
      font-size: size(40);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: center;
    }
  }
}

.title {
  width: 100%;
  height: 70px;
  font-size: size(52);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: justify;
  color: #ffe09f;
  margin-bottom: size(70);
}

.video {
  position: absolute;
  width: size(1080);
  height: size(1080);
  right: size(204);
  // transform: translateY(-50%);
  z-index: 2;

  iframe {
    width: 100%;
    height: size(610);
  }
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
  .bg {
    position: relative;
    overflow: hidden;
    position: relative;
    display: block;
    height: size-m(500);
    background: #fff;
    background-size: cover;

    > div {
      display: block;
    }
  }

  .box2 {
    width: 100vw;
    left: 0;
    top: 0;
    height: size-m(540);
  }

  .content-m {
    position: relative;
    z-index: 3;
  }

  .title {
    font-size: size-m(37.2);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffe09f;
    margin-top: size-m(70);
    margin-bottom: size-m(45);
  }

  .video {
    position: relative;
    width: 100vw;
    height: auto;
    right: 0;
    // transform: translateY(-50%);
    z-index: 2;

    iframe {
      width: 100%;
      height: size-m(210);
    }
  }

  .panel {
    width: 100vw;
    height: size-m(70);
    background: rgba(255, 255, 255, 0.1);
    .content {
      width: size-m(320);
      color: #fff;
      padding-left: size-m(40);
      font-size: size-m(18);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }

    .btn {
      width: size-m(55);
      background: rgba(255, 255, 255, 0.1);
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
  name: 'section3',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      isTablet,
      tabIndex: 0,
      videos: [
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F111948606978067%2Fvideos%2F152189282893449%2F&show_text=0&width=560',
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F111948606978067%2Fvideos%2F569627123691109%2F&show_text=0&width=560',
      ],
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
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
          img: require('./mo/3/img3.jpg'),
          name: '大東藝文中心',
        },
        {
          img: require('./mo/3/4-1.jpg'),
          name: '衛武營',
        },
        {
          img: require('./mo/3/4-2.jpg'),
          name: '鳳山車站',
        },
        {
          img: require('./mo/3/4-3.jpg'),
          name: '鳳山中正國民小學',
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
