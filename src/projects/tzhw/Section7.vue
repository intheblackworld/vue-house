<template>
  <div class="section3 relative">
    <div class="full-bg">
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s3/bg.jpg')"
      ></div>
      <div class="content absolute">
        <div class="border"></div>
      </div>
      <h3 class="title absolute">
        稀世尊藏無價山水<br />頂尖團隊聯手雙鉅著
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
        因為土地難得，堅持盡善盡美！<br />
        太子華威兩大建築龍頭攜手<br />
        PGA周夢龍、聯邦結構、大成工程境業設計、瀚翔景觀、藍克思燈光太子物業，頂尖建築團隊匯聚<br />
        精鑄絕美雙鉅著磅礡落成。
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
      <img
        src="./s7/img.png"
        alt=""
        class="main-img"
      >
      <!-- <swiper
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
        ></div>
      </swiper> -->
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

.section3 {
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
    height: size-m(835);
  }
  .bg-img {
    background: #fff !important;
  }

  .main-img {
    width: 100vw;
    height: size-m(310);
    top: 0;
    right: 0;
    left: auto;
    position: absolute;
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
    top: size-m(371);
    left: size-m(66);
  }

  .content {
    background-color: #fff;
    display: none;

    .border {
      display: none;
    }
  }

  .hr {
    width: size-m(305);
    height: size-m(11);
    top: size-m(482);
    right: size-m(32);
  }

  .desc {
    width: size-m(312);
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    text-align: center;
    color: #04040c;
    top: size-m(509);
    right: size-m(32);
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

export default {
  name: 'section7',
  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
