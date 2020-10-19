<template>
  <div class="section4">
    <div v-if="!isMobile" class="relative">
      <div class="content">
        <div class="title">職人團隊</div>
        <div class="swiper-frame">
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
              <div
                class="text"
                v-html="slide.text"
              ></div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="desc">
          回首過往，雖然不斷快速演進的知識和科技成為現代建築進步的要素，但使我們持續前進和銘感五內的仍是【堅持誠實蓋好宅】的誠摯本心。台灣土地上的情感故事，啟發我們追尋物質以外的核心價值，以揉合國際思維與在地精神的美學挑起建築脈動，正等待您親眼所見。
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="relative">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  // min-height: 100vh;
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

.content {
  margin: 0 auto;
  padding-top: size(180);
}

.title {
  width: size(260);
  font-size: size(48);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: size(4.8);
  text-align: center;
  color: #242424;
  white-space: nowrap;
  position: relative;
  &::after,
  &::before {
    content: '';
    width: size(510);
    height: 2px;
    background-color: #242424;
    display: block;
  }

  &::before {
    position: absolute;
    left: size(-550);
    top: size(30);
  }

  &::after {
    position: absolute;
    right: size(-550);
    top: size(30);
  }
  margin: 0 auto;
  margin-bottom: size(70);
}

.imgs {
  width: size(910);
  height: size(302);

  .icon-img {
    width: size(910);
    height: size(302);
    border-radius: 999px;
  }
  
  margin: 0 auto;
  margin-bottom: size(58);
}

.desc {
  width: size(1080);
  font-size: size(30);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(1.5);
  text-align: left;
  color: #ffffff;

  margin: 0 auto;
  padding-bottom: size(130);
}

.swiper-frame {
  // position: absolute;
  width:100%;
  height: size(900);
  // top: size(-150);
  left: size(0);
  overflow: hidden;
}

.swiper-container {
  // position: absolute;
  width: size(2600);
  height: size(900);
  // top: size(50);
  left: size(179);
  margin-left: size(-790);

  img,
  .text {
    width: size(550);
  }

  .text {
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.63px;
    text-align: left;
    color: #ffffff;
    margin: 0 auto;
    span {
      color: #242424;
    }
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
  .link-g {
    p {
      font-size: size-m(14);
    }
  }
  .fb-link {
    width: size-m(29);
    cursor: pointer;
  }

  .item-title {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    text-shadow: 0 0 4px #000;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 10px;
    line-height: 1.6;
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
  name: 'section4',

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
        slidesPerView: isMobile ? 1.4 : 4.2,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 0,
        slidesPerColumn: isMobile ? 1 : 1,

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
        { src: require('./s4/1.jpg'), text: '建築規劃 | <span>張維哲</span>' },
        { src: require('./s4/2.jpg'), text: '景觀設計 | <span>吳書原</span>' },
        { src: require('./s4/3.jpg'), text: '燈光設計 | <span>朱文英</span>' },
        { src: require('./s4/6.jpg'), text: '公設規劃 | <span>林馬克</span>' },
        { src: require('./s4/4.jpg'), text: '結構設計 | <span>陳村林</span>' },
        { src: require('./s4/5.jpg'), text: '綠建築顧問 | <span>楊謙柔</span>' },
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
