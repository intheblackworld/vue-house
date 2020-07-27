<template>
  <div class="section4 relative">
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
          四方層峰畔水而居<br />
          雙溪首席富詠山河
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
          不只景觀傲人，源源不絕的自然綠蔭環繞更具收藏價值。3400萬坪陽明山國家公園與九座公園提供市區最難得的天然綠景，健行踏青，隨性出發；忠誠路、文林商圈與天母SOGO讓繁華便利生活垂手可得。
        </h3>
      </div>
        <img
          v-lazy="require('./s3/float4.png')"
          alt=""
          class="flower absolute"
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
        ></div>
      </div>

      <swiper
        class="main-img"
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
    </div>
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
  position: absolute;
  background-attachment: fixed;
}
.box{width: calc((100vh - 50px) * 1920 / 1080);
height:94%;margin: 1% auto  auto;
  position: relative;z-index: 6;}


.content {width: 32%;display:inline-block;height: 100%;margin: 0 1.5% 0 0;
  padding: size(18);float: left;position: relative;
  background-color: #fff;

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #004ea2;
    justify-content: center;
    align-items: center;
  }
}
.txt{
  font-size:calc(12px + 1vh);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;}
.title {
  font-size:1.65em;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.15em;
  text-align: center;
  color: #004ea2;
}

.hr {
  width:44vh;
  height:auto;
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

.main-img {width: auto;margin: 0 1.5% 0 0;
  height:100%;
  left: auto;
  .item-img {
    width: size(1180);
    height: size(974);
  }
}

@keyframes flower {
  from {
    transform: skewX(3deg);
  }
  to {
    transform: skewX(-3deg);
  }
}

.flower {
  width: 50vh;
  bottom: 0;
  right: -7vh;
  transform-origin: bottom;
  animation: flower 3s linear 0s infinite alternate;
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
  .bg{height:auto;}
  .bg-img {
    height: size-m(835);
  }
  .bg-img {
   // background: #fff !important;
  }

.box{width: 96%;display:flex;
    flex-wrap:wrap;
height: auto;}
.img3{width: 100%;
  height: auto;
}

.content{
      order:2;
    width: 100%;margin:size-m(10) 0 size-m(10) 0;float:none;}

.txt{
  margin:  size-m(30) auto  size-m(150);
} 
.desc {
  font-size:calc(12px + 0.3vh);
}

  .main-img {
      order:1;
      width: 100%;
      height:auto;
    .item-img {
      width: 100%;
      height:auto;
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
