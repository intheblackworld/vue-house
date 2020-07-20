<template>
  <div class="section2">
    <div
      v-if="!isMobile"
      class="relative"
    >
      <img
        src="./s2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./s2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">深耕中永和<span class="number">43</span>年，幾近<span>零負評</span></div>
      <div class="relative">
        <div class="bg-color"></div>
        <div class="content absolute">
          <div class="content-label">Our Brand</div>
          <div class="content-title">
            THINK<br />
            GLOBALLY,<br />
            ACT<br />
            LOCALLY.
          </div>
          <div class="content-desc">
            鑫建築團隊珍視和努力保留每一片土地上既有的人文財富，以純粹與國際觀點的審美趣味引領時代潮流，讓我們深信不移和堅持守則的仍是【建築是道德良心事業】的座右銘，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
          </div>
          <a
            href="https://www.facebook.com/ShinYiCostructionCo/"
            target="_blank"
          >
            <img
              src="./s2/fb.png"
              alt=""
              class="fb-link"
            >
          </a>
        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="1000"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <img
        src="./mo/2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./mo/2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">深耕中永和<span class="number">43</span>年<br />幾近<span>零負評</span></div>
      <div class="relative">
        <div class="content">
          <div class="content-label">Our Brand</div>
          <div class="content-title">
            THINK<br />
            GLOBALLY,<br />
            ACT<br />
            LOCALLY.
          </div>
          <div class="content-desc">
            鑫建築團隊珍視和努力保留每一片土地上既有的人文財富，以純粹與國際觀點的審美趣味引領時代潮流，讓我們深信不移和堅持守則的仍是【建築是道德良心事業】的座右銘，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
          </div>
          <a
            href="https://www.facebook.com/ShinYiCostructionCo/"
            target="_blank"
          >
            <img
              src="./s2/fb.png"
              alt=""
              class="fb-link"
            >
          </a>

        </div>
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          data-aos="fade"
          data-aos-delay="1000"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.img"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img`"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  min-height: 100vh;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.bg-color{width: size(1120);height:size(1067);background:linear-gradient(to right, rgba(215,0,50,1) 0%,rgba(235,85,0,1) 100%);}
.title {
  font-size: size(110);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.55;
  letter-spacing: 0.02em;
  text-align: right;
  color: #242424;
  top: size(236);
  left: size(388);
}

.subtitle {
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 0.02em;
  text-align: left;
  color: #242424;
  top: size(350);
  left: size(846);

  span {
    color: #eb5500;
    }

  .number {
    font-size: size(100);
    letter-spacing: -5.4px;
  }
}

.content {
  width: size(600);
  top: size(150);
  left: size(220);
  text-align: left;
}

.content-label {
  font-size: size(27);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.content-title {
  font-size: size(90);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: 0.05em;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
  font-family: futurabq;
}

.content-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.1em;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.fb-link {
  width: size(60);
  cursor: pointer;
}

.swiper-container {
  position: absolute;
  width: size(800);
  height: size(1067);
  top: 0;
  right: 0;
  img {
    width: 100%;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    min-height: auto;
  }

  .title {
    font-size: size-m(38);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    text-align: right;
    color: #242424;
    top: size-m(98);
    left: size-m(40);
  }

  .subtitle {
    font-size: size-m(17);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    text-align: left;
    color: #242424;
    top: size-m(135);
    left: size-m(189);

    span {
      color: #eb5500;
    }

    .number {
      font-size: size-m(38);
      letter-spacing: -2.4px;
    }
  }

  .content {
    width: 100vw;
    height: size-m(437);
    top: 0;
    left: 0;
    padding: 35px 40px;
    background: linear-gradient(to right, #d80033, #ea5400);
  }

  .content-label {
    font-size: size-m(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .content-title {
    font-size: size-m(40);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .content-desc {
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .swiper-container {
    position: relative;
    width: 100vw;
    height: size-m(500);
    top: 0;
    right: 0;

    img {
      width: 100%;
    }
  }
  .fb-link {
    width: size-m(29);
    cursor: pointer;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 1,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        { src: require('./s2/1.jpg') },
       // { src: require('./s2/2.jpg') },
        { src: require('./s2/3.jpg') },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
