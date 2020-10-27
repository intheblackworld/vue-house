<template>
  <div class="section3">
    <div class="relative">
      <div class="content">
        <div class="title">三大認證</div>
        <div class="imgs flex-ac flex-jb">
          <img src="./s3/icon.png" alt="" class="icon-img">
        </div>
        <div class="desc">
          鑫建築團隊深信台灣土地上的情感故事，啟發我們追尋建築與人居的核心價值，預計取得罕見的鑽石級綠建築、黃金級智慧建築與SGS建築履歷，超越央北標準僅是我們的標準配備，以人性關懷為出發點的本意傳遞屬於鑫建築團隊的起心動念，正等待您親眼所見。
        </div>
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
  //  border-radius: 999px;
  }

  margin: 0 auto;
  margin-bottom: size(58);
}

.desc {
  width: size(1080);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing:0.08em;
  text-align: justify;
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

  .content {
    margin: 0 auto;
    padding-top: size(180);
  }

  .title {
    width: size-m(98);
    font-size: size-m(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: size-m(1.8);
    text-align: center;
    color: #242424;
    white-space: nowrap;
    position: relative;
    &::after,
    &::before {
      content: '';
      width: size-m(90);
      height: size-m(1);
      background-color: #242424;
      display: block;
    }

    &::before {
      position: absolute;
      left: size-m(-100);
      top: size-m(8);
    }

    &::after {
      position: absolute;
      right: size-m(-100);
      top: size-m(8);
    }
    margin: 0 auto;
    margin-bottom: size(78);
  }

  .imgs {
    width: size-m(330);
    height: size-m(180);
    flex-wrap: wrap;
    justify-content: center;

    .icon-img {
      width: size-m(290);
      height: auto;
//border-radius: 999px;
    }

    margin: 0 auto;
    margin-bottom: size-m(0);
  }

  .desc {
    width: size-m(280);
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: size-m(0.65);
    text-align: left;
    color: #ffffff;

    margin: 0 auto;
    margin-bottom: size-m(30);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
// // import Parallax from '@/components/Parallax.vue'
// import 'swiper/dist/css/swiper.css'

// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section3',

  // mixins: [slider],
  // components: {
  //   swiper,
  //   swiperSlide,
  //   // Parallax,
  // },

  data() {
    return {
      isMobile,
      // swiperOption: {
      //   slidesPerView: isMobile ? 1 : 1,
      //   centeredSlides: true,
      //   spaceBetween: isMobile ? 15 : 30,
      //   slidesPerColumn: isMobile ? 1 : 1,

      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true,
      //   },
      //   loop: true,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      // },

      // slideList: [
      //   { src: require('./s2/3.jpg'), title: '鑫建築團隊 許慶鐘董事長' },
      //   {
      //     src: require('./s2/1.jpg'),
      //     title: '鑫建築團隊 許峻豪執行長與各部門同仁',
      //   },
      //   { src: require('./s2/2.jpg'), title: '鑫建築團隊各部門同仁' },
      // ],

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
