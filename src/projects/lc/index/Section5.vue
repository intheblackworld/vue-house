<template>
  <div class="section5">
    <div class="title">歷年業績</div>
    <div class="subtitle">
      Products
    </div>
    <img src="./s5/bg.png" alt="" class="bg-img s-bg">
    <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? true : false" :border="0" :display="isMobile ? 1 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        <div class="mask">
          <div class="border flex-c">
            {{slide.name}}
          </div>
        </div>
      </slide>
    </carousel-3d>
    <img src="./s5/s.png" alt="" class="shadow">
    <div class="info">
      <div class="info-item">
        <div class="info-title">
          基地位置：
        </div>
        <div class="info-desc">
          三重區神農街433號～439號<br />
          完工時間： 2020年
        </div>
      </div>
      <div class="info-item">
        <div class="info-title">
          規劃樓層：
        </div>
        <div class="info-desc">
          地上12層，地下2層
        </div>
      </div>
      <div class="info-item">
        <div class="info-title full">
          個案特色：
        </div>
        <br />
        <div class="info-desc">
          ◆ 校園第一排、河畔第一境<br />
          ◆ 結合陽光、空氣、水的絕美建築<br />
          ◆ 低建蔽率，高公共生活空間
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(1396);
  // overflow: hidden;
  position: static;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include div_l_pc(346, 112, 237, 364);
  font-size: size(75.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.subtitle {
  @include div_l_pc(160, 55, 190, 370);
  font-size: size(37.3);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.s-bg {
  margin-top: size(-550);
  z-index: 3;
}

.carousel-3d-container {
  z-index: 3 !important;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(500) !important;
}

.carousel-3d-item {
  // position: relative;

  &:hover {
    .mask {
      opacity: 1;
    }
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 130, 0, 0.7);
  padding: size(27);
  opacity: 0;
  transition: all 0.3s;
}

.border {
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  color: #fff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: size(51.9);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(10.32);
  text-align: center;
  color: #ffffff;
}

.shadow {
  @include img_l_pc(1388, 900, 266);
}

.info {
  width: size(1244);
  height: 276px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(1050);
  border-top: 1px solid #ff8200;
  border-bottom: 1px solid #ff8200;
  padding: 20px 0;
  .info-item {
    width: 100%;
    font-size: size(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: size(1);
    text-align: center;
    color: #ff8200;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
  .info-title {
    font-weight: bold;
    &.full {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section5 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .img0 {
    @include div_l_m(284, 667, 0, 0);
    object-fit: cover;
  }

  .lt {
    @include img_l_m(135, 60, 0);
  }

  .label {
    @include div_r_m(277, 100, 0, 0);
    top: auto;
    bottom: sizem(82);
    background-color: #000000;
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(1.24);
    text-align: left;
    color: #ffffff;
    z-index: 3;
  }

  .title {
    @include div_r_m(329, 52, 104, 0);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(35);
    letter-spacing: sizem(1.3);
  }

  .subtitle {
    @include div_l_m(182, 38, 154, 46);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(26);
  }

  .m-container {
    margin-top: sizem(190);
    .swiper-container {
      height: sizem(660);
    }
  }

  .item-img {
    width: sizem(152);
    transform: translateY(10%);
  }
  .item {
    transform: translateY(8%);
    animation: an 5s linear infinite alternate;
    &:nth-child(odd) {
      animation: an 5s -5s linear infinite alternate;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section5',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      currentIndex: 0,
      imgWidth: 451,
      imgHeight: 393,
      slideList: [
        {
          img: require('./s5/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
        },
        {
          img: require('./s5/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
        },
        {
          img: require('./s5/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
        },
      ],
    }
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.currentIndex = index
    },
  },

  mounted() {
    if (this.isMobile) {
      this.imgWidth = window.screen.width
      this.imgHeight = window.screen.width * (393 / 451)
    }
  },

  created() {},

  computed: {},
}
</script>
