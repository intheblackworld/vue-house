<template>
  <div class="section5">
    <div class="title">熱銷建案</div>
    <div class="subtitle">
      Hot Case
    </div>
    <img src="./s1/top.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s1/top_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? false : false" :border="0" :display="isMobile ? 3 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange"
    v-if="isPC"
    >
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        <div class="mask">
          <div class="border flex-c">
            {{slide.name}}
          </div>
        </div>
      </slide>
    </carousel-3d>
    <img src="../index/s5/s.png" alt="" class="shadow" v-if="shadow">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(1250);
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
  z-index: 10 !important;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(700) !important;
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
  @include img_l_pc(1388, 1080, 266);
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

  .title {
    @include div_l_m(147, 47, 417, 114);
    font-size: sizem(32);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.02);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(64, 22, 400, 156);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .desc {
    @include div_l_m(200, 51, 490, 88);
    font-size: sizem(17);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.38);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;

    span {
      color: #fff;
    }
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(280) !important;
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
          img: require('../index/s5/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
        },
        {
          img: require('../index/s5/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
        },
        {
          img: require('../index/s5/1.jpg'),
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
