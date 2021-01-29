<template>
  <div class="section3 relative">
    <div class="bg">
      <div
        class="full-img bg-img"
        v-lazy:background-image="require('./s3/bg.jpg')"
      ></div>
      <div class="box">
        <div class="content">
          <div class="border flex">
            <div class="txt">
              <h3 class="title">
                稀世尊藏無價山水<br />頂尖團隊聯手雙鉅著
              </h3>
              <img
                v-lazy="require('./s3/hr.png')"
                alt=""
                class="hr"
                data-aos="grow"
                data-aos-delay="400"
                data-aos-duration="600"
              >
              <h3 class="desc">
                因為土地難得，堅持盡善盡美！<br />
                太子華威兩大建築龍頭攜手<br />
                PGA周夢龍、聯邦結構、大成工程境業設計、瀚翔景觀、藍克斯燈光太子物業，頂尖建築團隊匯聚，精鑄絕美雙鉅著磅礡落成。
              </h3>
            </div>
            <img
              v-lazy="require('./s3/float4.png')"
              alt=""
              class="flower absolute"
            >
            <img
              v-lazy="require('./s3/float5.png')"
              alt=""
              class="flower5 absolute"
            >
            <img
              v-lazy="require('./s3/float6.png')"
              alt=""
              class="flower6 absolute"
            >
            <img
              v-lazy="require('./s3/float7.png')"
              alt=""
              class="flower7 absolute"
            >

            <img
              v-lazy="require('./s1/float.png')"
              v-if="!isMobile"
              alt=""
              data-aos="fade-down-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              class="float1 absolute"
            >
            <img
              v-lazy="require('./s1/float.png')"
              v-if="!isMobile"
              alt=""
              data-aos="fade-down-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              class="float2 absolute"
            >
            <img
              v-lazy="require('./s1/float2.png')"
              v-if="!isMobile"
              alt=""
              data-aos="float3"
              data-aos-delay="500"
              data-aos-duration="1100"
              class="float3 absolute"
            >
          </div>
        </div>
        <img
          v-lazy="require('./s7/img.png')"
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
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: calc(100vh - 50px);
  overflow: hidden;
}

.section3 {
  z-index: 4;

  &::v-deep {
    .swiper-pagination {
      // display: none;
      width:auto;
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
  position: absolute;
  background-attachment: fixed;
}
.box {
  width: calc((100vh - 50px) * 1920 / 1080);
  height: 94%;
  margin: 1% auto auto;
  position: relative;
  z-index: 6;
}

.content {
  width: 32%;
  display: inline-block;
  height: 100%;
  margin: 0 1.5% 0 0;
  padding: size(18);
  float: left;
  position: relative;
  background-color: #fff;

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #004ea2;
    justify-content: center;
    align-items: center;
  }
}
.txt {
  font-size: calc(12px + 1vh);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
}
.title {
  font-size: 1.65em;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.15em;
  text-align: center;
  color: #004ea2;
}

.hr {
  width: 44vh;
  height: auto;
  margin: 1.1vh auto;
}

.desc {
  width: 80%;
  margin: auto;
  text-align: justify;
  line-height: 2.05;
  font-weight: normal;
  color: #04040c;
}

.full-img {height: 100%;}
.main-img {
  width: auto;
  margin: 0 1.5% 0 0;
  height: 100%;
  left: auto;
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
@keyframes flower5 {
  to {
    transform: rotate(0deg);
  }
}

.flower {
  width: 50vh;
  bottom: 0;
  right: -7vh;
  transform-origin: bottom;
  animation: flower 3s ease-in-out 0s infinite alternate;
}

.float1 {
  width: size(57);
  top: size(10);
  right: size(10);
  z-index: 4;
}

.float2 {
  width: size(49);
  top: size(66);
  right: size(0);
  z-index: 4;
}

.float3 {
  width: size(43);
  top: size(97);
  right: size(81);
  z-index: 4;
}
.flower5,
.flower6,
.flower7 {
  width: 50vh;
  bottom: 0;
  right: -7vh;
  transform: rotate(-10deg);
  transform-origin: bottom;
  animation: flower5 3s ease-in-out 0s infinite alternate;
}
.flower6 {
  transform: rotate(-15deg);
  animation-delay: 0.5s;
}
.flower7 {
  transform: rotate(-12deg);
  animation-delay: 1s;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: auto;
  }
  .bg-img {
    height: size-m(835);
  }
  .box {
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
  }
  .img3 {
    width: 100%;
    height: auto;
  }
  .content {
    order: 2;
    width: 100%;
    margin: size-m(10) 0 size-m(10) 0;
    float: none;
  }

  .txt {
    margin: size-m(30) auto size-m(150);
  }
  .desc {
    font-size: calc(12px + 0.3vh);
  }

  .main-img {
    order: 1;
    width: 100%;
    height: size-m(297);
    .item-img {
      width: 100%;
      height: size-m(297);
      // height: size-m(310);
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
  .flower5,
  .flower6,
  .flower7 {
    width: 100vw;
    right: 0;
    bottom: 0;
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
