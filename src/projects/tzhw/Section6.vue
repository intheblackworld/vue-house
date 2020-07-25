<template>
  <div class="section6">
    <div class="bg">
      <swiper
        class="full-img bg-img"
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.src"
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
      <div class="mask absolute">
      <h3 class="title">龍隱沉潛 千坪莊園<br />質擘內斂 壯闊盡收</h3>
      <img
        src="./s2/hr.png"
        alt=""
        class="hr"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >
      <h3 class="desc">真正的富裕，不高調卻堅持品味格調！<br />
        「太子華威」以私秘莊園為主軸，將喧囂隔絕於外<br />
        生活細節禮遇倍至，禮賓大廳、宴會廳、交誼廳、健身房<br />
        無論尺度與陳列，美輪美奐精采迷人。</h3></div>

      <!-- <div class="float absolute">
        <img
          src="./s1/float.png"
          alt=""
          class="float1"
        >
        <img
          src="./s1/float2.png"
          alt=""
          class="float2"
        >
        <img
          src="./s1/float.png"
          alt=""
          class="float3"
        >
        <img
          src="./s1/float2.png"
          alt=""
          class="float4"
        >
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: calc(100vh - 50px);overflow: hidden;
}

.section6 {
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

// .bg-img {
//   background-attachment: fixed;
// }

.bg-img {
  position: absolute;
  z-index: 2;
  // &:first-child {
  //   position: relative;
  // }
}

.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: size(846);
  height:45%;
  top: 13%;
  right: 0;
  z-index: 2;
  font-size:calc(12px + 1vh);
  color: #ffffff;
  font-weight:initial;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    align-content:center;

}
.title {
  font-size:2.1em;
  font-weight: bold;
  letter-spacing:0.1em;
}

.desc {
  font-size:1em;
  font-weight: normal;
  line-height: 1.81;
}

.hr {
    width: 25em;
    margin: 0.5em auto;
    height: auto;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: size-m(353 + 317);
    background-color: #fff;
  }
  .full-img {
    width: 100vw;
    min-height: auto;
    height: size-m(317);
  }
  .river {
    position: absolute;
    right: 0;
    bottom: size-m(287);
    width: 100vw;
    z-index: 1;
    div {
      width: 100%;
      height: 13px;
      // margin-left: calc((1920px - 2600px) / 2);
      // position: absolute;
      background-size: cover;
      background-position: 100%;
    }
  }

  .title {
    width: size-m(260);
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    top: size-m(349);
    right: size-m(60);
    z-index: 3;
  }

  .desc {
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    top: size-m(472);
    right: size-m(18);
    z-index: 3;
  }

  .hr {
    width: size-m(323);
    height: size-m(13);
    top: size-m(438);
    right: size-m(26);
    z-index: 3;
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: size-m(353);
    top: size-m(317);
    right: 0;
    z-index: 2;
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
  name: 'section6',
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
          src: require('./s6/1Lounge Bar實景.jpg'),
        },
        {
          src: require('./s6/2迎賓大廳實景.jpg'),
        },
        {
          src: require('./s6/3健身房.jpg'),
        },
        {
          src: require('./s6/4交誼廳實景.jpg'),
        },
        {
          src: require('./s6/5宴會廳實景.jpg'),
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
