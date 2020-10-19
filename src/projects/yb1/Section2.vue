<template>
  <div class="section2">
    <div v-if="!isMobile" class="relative">
      <div class="content">
        <div class="title">鑫建築團隊</div>
        <div class="imgs flex-ac flex-jb">
          <img src="./s2/shin1.jpg" alt="" class="round-img">
          <img src="./s2/shin2.jpg" alt="" class="round-img">
          <img src="./s2/shin3.jpg" alt="" class="round-img">
          <img src="./s2/shin4.jpg" alt="" class="round-img">
          <img src="./s2/shin5.jpg" alt="" class="round-img">
        </div>
        <div class="desc">
          鑫建築團隊珍視和努力保留每一片土地上既有的人文財富，以純粹與國際觀點的審美趣味引領時代潮流，讓我們深信不疑和堅持守則的仍是【建築是道德良心事業】的座右銘，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
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
  margin-bottom: size(78);
}

.imgs {
  width: size(1320);
  height: size(241);

  .round-img {
    width: size(241);
    height: size(241);
    border-radius: 999px;
  }
  
  margin: 0 auto;
  margin-bottom: size(68);
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
  margin-bottom: size(30);
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
        { src: require('./s2/3.jpg'), title: '鑫建築團隊 許慶鐘董事長' },
        {
          src: require('./s2/1.jpg'),
          title: '鑫建築團隊 許峻豪執行長與各部門同仁',
        },
        { src: require('./s2/2.jpg'), title: '鑫建築團隊各部門同仁' },
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
