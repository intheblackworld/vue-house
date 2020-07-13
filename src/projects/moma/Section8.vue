<template>
  <div class="relative">
    <div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: 100vh;
  margin: 0;
  background: #fff;
  background-image: url('./s2/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  padding-top: size(102);
  margin-bottom: size(250);
}

.swiper-container {
  width: size(961);
  margin: 0 auto;
}

.text-row {
  width: size(970);
  margin: 30px auto 0;
}

.title {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 4.85px;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  letter-spacing: 8.28px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  text-align: left;
  color: #000000;
}

.desc {
  width: size(520);
  font-size: size(17);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.02;
  letter-spacing: 1.36px;
  text-align: left;
  color: #4d4d4d;
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .swiper-container {
    width: 100vw;
    margin: 0 auto;

    .item-img {
      width: 100%;
    }
  }

  .text-row {
    width: size-m(305);
    margin: 30px auto 0;
  }

  .title-block {
    border-left: 3px solid #000;
    padding-left: size-m(15);
    padding-bottom: size-m(10);
    margin-bottom: 25px;
  }

  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2.5px;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    font-size: size-m(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2.5px;
    text-align: left;
    color: #000000;
  }

  .desc {
    width: size-m(305);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.02;
    letter-spacing: 1.36px;
    text-align: left;
    color: #4d4d4d;
    margin-bottom: 25px;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'section9',
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
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      imgList: [require('./s8/img1.jpg')],
    }
  },

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>