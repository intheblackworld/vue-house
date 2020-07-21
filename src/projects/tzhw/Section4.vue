<template>
  <div class="section4 relative">
    <div class="full-bg">
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s3/bg.jpg')"
      ></div>
      <div class="content absolute">
        <div class="border"></div>
      </div>
      <h3 class="title absolute">
        四方層峰畔水而居<br />
        雙溪首席富詠山河
      </h3>
      <img
        src="./s3/hr.png"
        alt=""
        class="hr absolute"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >

      <h3 class="desc absolute">
        不只景觀傲人，源源不絕的自然綠蔭環繞更具收藏價值。3400萬坪陽明山國家公園與九座公園提供市區最難得的天然綠景，健行踏青，隨性出發；忠誠路、文林商圈與天母SOGO讓繁華便利生活垂手可得。
      </h3>
      <img
        src="./s3/float4.png"
        alt=""
        class="flower absolute"
      >

      <img
        src="./s1/float.png"
        v-if="!isMobile"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float1 absolute"
      >
      <img
        src="./s1/float.png"
        v-if="!isMobile"
        alt=""
        data-aos="fade-down-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="float2 absolute"
      >
      <img
        src="./s1/float2.png"
        v-if="!isMobile"
        alt=""
        data-aos="float3"
        data-aos-delay="500"
        data-aos-duration="1100"
        class="float3 absolute"
      >

      <swiper
        class="main-img"
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide"
          class="item-img"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
          v-if="!isMobile"
        ></div>
        <div
          class="swiper-button-prev"
          slot="button-prev"
          v-if="isMobile"
        >
          <img
            src="./arrow-left.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
          v-if="isMobile"
        >
          <img
            src="./arrow-right.png"
            alt
          />
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: size(1080);
}

.section4 {
  z-index: 4;

  &::v-deep {
    .swiper-pagination {
      // display: none;
      width: 200px;
      left: auto;
      bottom: 20px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 6px !important;
      background-color: transparent;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #004ea2;
    }
  }
}

.bg-img {
  background-attachment: fixed;
}

.bg-img {
  position: absolute;
  // &:first-child {
  //   position: relative;
  // }
}

.content {
  width: size(535);
  height: size(974);
  top: size(54);
  left: size(89);
  padding: size(18);
  background-color: #fff;

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #004ea2;
  }
}

.title {
  font-size: size(43);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 4.33px;
  text-align: center;
  color: #004ea2;
  top: size(240);
  left: size(168);
}

.hr {
  width: size(475);
  height: size(16);
  top: size(392);
  left: size(120);
}

.desc {
  width: size(373);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: -0.49px;
  text-align: left;
  color: #04040c;
  top: size(434);
  left: size(185);
}

.main-img {
  width: size(1180);
  height: size(974);
  top: size(54);
  right: size(88);
  left: auto;
  position: absolute;
  .item-img {
    width: size(1180);
    height: size(974);
  }
}

@keyframes flower {
  from {
    transform: skewX(5deg);
  }
  to {
    transform: skewX(-5deg);
  }
}

.flower {
  width: size(495);
  top: size(715);
  left: size(206);
  z-index: 5;
  transform-origin: bottom;
  animation: flower 5s linear 0s infinite alternate;
}

.float1 {
  width: size(57);
  top: size(82);
  left: size(545);
  z-index: 4;
}

.float2 {
  width: size(49);
  top: size(139);
  left: size(564);
  z-index: 4;
}

.float3 {
  width: size(43);
  top: size(170);
  left: size(488);
  z-index: 4;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .full-bg,
  .bg-img {
    height: size-m(779);
  }
  .bg-img {
    background: #fff !important;
  }

  .content {
    display: none;

    .border {
      display: none;
    }
  }

  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 2.5px;
    text-align: center;
    color: #004ea2;
    top: size-m(346);
    left: size-m(80);
  }

  .hr {
    width: size-m(305);
    height: size-m(11);
    top: size-m(431);
    left: size-m(38);
  }

  .desc {
    width: size-m(313);
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: 0.84px;
    text-align: left;
    color: #04040c;
    top: size-m(460);
    left: size-m(30);
  }

  .main-img {
    width: 100vw;
    height: size-m(310);
    top: size-m(0);
    right: size-m(0);
    position: absolute;
    .item-img {
      width: 100vw;
      height: size-m(310);
    }
  }

  .flower {
    width: 100vw;
    top: auto;
    left: auto;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    animation: flower 3s ease-in-out 0s infinite alternate;
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

      slideList: [
        {
          src: require('./s4/1雙溪河岸.jpg'),
        },
        {
          src: require('./s4/2士林官邸.jpg'),
        },
        {
          src: require('./s4/3士林科學園區.jpg'),
        },
        {
          src: require('./s4/4文林商圈.jpg'),
        },
        {
          src: require('./s4/5志成公園.jpg'),
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
