<template>
  <div class="relative">
    <div class="flex wrap">
      <div
        class="content"
        v-if="isMobile"
      >
        <img
          src="./s3/bg.png"
          alt=""
          class="bg-img absolute"
        >
        <div class="content absolute">
          <h3 class="title">
            大師藝術彩繪日常生活時光
          </h3>
          <img
            src="./s3/hr.png"
            alt=""
            class="hr-img"
          >
          <div class="desc">
            以「藝術」貫穿全棟會館設計風格，從17.18世紀的古典主義與印象主義，到19世紀的超現實主義，結合現代的藝術設計，形成「京城美術皇居」全棟公設會館的一致風格，成為台灣獨一無二、硬體與軟體同步到位的藝術建築。
          </div>
        </div>
      </div>
      <swiper
        class="swiper-container"
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in imgList"
          :index="index"
          :key="slide"
        >
          <img
            :src="slide"
            :class="`item-img`"
          />
        </swiper-slide>
      </swiper>
      <div
        class="content absolute"
        v-if="!isMobile"
      >
        <h3 class="title">
          大師藝術彩繪日常生活時光
        </h3>
        <div class="desc">
          以「藝術」貫穿全棟會館設計風格，從17.18世紀的古典主義與印象主義，到19世紀的超現實主義，結合現代的藝術設計，形成「京城美術皇居」全棟公設會館的一致風格，成為台灣獨一無二、硬體與軟體同步到位的藝術建築。
        </div>
      </div>
    </div>
    <div class="box flex">
      <div :class="`box2 ${imgIndex == 0 ? 'active' : ''}`">
        <div class="txt">
          <h3 class="title">中空樓板</h3>
          <p class="desc">日本專利最新工法，高性能隔音，可隔絕上下層噪音，特殊輕量高剛性安全結構，減少地震受力情形，且具備高隔熱性，能使熱量減半進入屋內，創新寧靜美學工藝，成為國際頂級住宅配備新基準。</p>
        </div>
      </div>
      <div :class="`box3 ${imgIndex == 1 ? 'active' : ''}`">
        <div class="txt">
          <h3 class="title">EPS制震器</h3>
          <p class="desc">美國防震科技公司研發的EPS制震器，可有效減緩地震對建築的衝擊，吸收地震釋放的能量，減少結構受力程度，進而達到抗震效果，為美國國家級公共工程與台北藝術中心指定使用。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  position: relative;
}
.wrap {
  height: size(1080);
  border-bottom: 1px solid #fff;
  position: relative;
}
.box {
  height: calc(100vh - 110px);
  border-bottom: 1px solid #fff;
  position: relative;
}
.box2,
.box3 {
  flex: 1;
  background-size: cover;
  background-position: center;
  position: relative;
  .txt {
    position: absolute;
    left: 0;
    width: 100%;
    color: #000;
    text-align: justify;
    padding: size(30) size(70);
  }
}
.box2 {
  background-image: url('./s5/11_01.jpg');
  border-right: 1px solid #fff;
  .txt {
    top: 0;
  }
}
.box3 {
  background-image: url('./s5/11_02.jpg');
  .txt {
    bottom: 0;
  }
}
.swiper-container {
  width: 100vw;
  height: size(1080);
  top: 0;
  left: 0;
  position: absolute;
}

.content {
  width: size(1256);
  height: size(293);
  background-color: rgba(27, 19, 17, 0.4);
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: justify;
  z-index: 5;
  color: #ffffff;
  padding: size(30) size(70);
}

.title {
  position: relative;
  z-index: 2;
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.1em;
  padding: 0 0 0.4em 0;
  border-bottom: 1px solid currentColor;
}

.desc {
  position: relative;
  z-index: 2;
  //width: size(876);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: 0.1em;
  margin: 0.5em auto 1em auto;
}

.item-img {
  width: 100%;
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
  .relative {
    position: relative;
    height: auto;
  }
  .swiper-container {
    width: 100vw;
    margin: 0 auto;
    position: relative !important;

    .item-img {
      width: 100%;
    }
  }

  .content {
    width: 100vw;
    height: size-m(330);
    position: relative;
    padding: 0;
    overflow: hidden;
    background: #0000;
  }

  .wrap {
    height: auto;
  }
  .bg-img {
    width: 100%;
    left: 0;
    height: auto;
    object-fit: contain;
  }

  .logo {
    width: size-m(180);
    top: size-m(30);
    left: size-m(88);
  }

  .hr-img {
    width: 100vw;
    top: size-m(81);
    left: size-m(0);
  }

  .title {
    width: auto;
    margin: 1.5em auto 0em auto;
    font-size: size-m(23);
    text-align: center;
    border: 0;
    left: 0;
    white-space: nowrap;
  }

  .box {
    height: size-m(750);
    flex-direction: column;
  }
  .box2,
  .box3 {
    width: 100vw;
    height: size-m(750);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .5s;
    &.active {
      opacity: 1;
    }
  }
  .desc {
    width: size-m(305);
    font-size: size-m(15);
    line-height: 2;

    //left: size-m(30);
  }

  .item-img {
    width: 100%;
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
      imgIndex: 0,
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
      imgList: [
        require('./s5/1.jpg'),
        require('./s5/2.jpg'),
        require('./s5/3.jpg'),
        require('./s5/4.jpg'),
      ],
    }
  },

  methods: {},
  created() {},

  mounted() {
    setInterval(() => {
      if (this.imgIndex === 0) {
        this.imgIndex = 1
      } else {
        this.imgIndex = 0  
      }
      
    }, 3000);
  },

  computed: {},
}
</script>