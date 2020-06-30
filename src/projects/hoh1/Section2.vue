<template>
  <div class="section2">
    <div v-if="!isMobile">
      <div class="container flex">
        <img
          src="./s2/1-1.jpg"
          alt=""
          class="thumb"
        >
        <div class="content">
          <div class="title">
            公園 校園 花園<br />誠徵有園人
          </div>
          <div class="desc">
            踏出家門就在公園裡！15萬坪高綠覆洲子洋重劃區<br />
            擁抱128萬坪大台北都會公園，家就在樹海鮮氧裡無限延伸<br />
            公園裡的家，健康佳、保值佳，「健康就是財富」在這裡你會得到驗證
          </div>
          <div class="flex wrap">
            <img src="./s2/2-1.jpg" alt="" class="imgs">
            <img src="./s2/2-2.jpg" alt="" class="imgs">
            <img src="./s2/2-3.jpg" alt="" class="imgs">
            <div class="context">
              <div class="context-title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile">

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
  background-color: #fddb3e;
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-img {
    //width: 50vw;
    height: auto;
    width: auto;
    max-height: 96vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
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
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,

        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        require('./s2/1.png'),
        require('./s2/2.png'),
        require('./s2/3.png'),
        require('./s2/4.png'),
        require('./s2/5.png'),
        require('./s2/6.png'),
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    showDialog(index) {
      this.imgIndex = index
      this.isShowDialog = true
    },
    closeDialog() {
      this.isShowDialog = false
    },
  },

  created() {},
  mounted() {},
}
</script>
