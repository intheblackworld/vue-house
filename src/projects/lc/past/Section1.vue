<template>
  <div class="section1">
    <div class="title">完銷建案</div>
    <div class="subtitle">
      Past Results
    </div>
    <img src="./s1/top.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s1/top_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="false" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? false : false" :border="0" :display="isMobile ? 3 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        <div class="mask">
          <div class="border flex-c">
            {{slide.name}}
          </div>
        </div>
      </slide>
    </carousel-3d>
    <img src="../index/s5/s.png" alt="" class="shadow" v-if="isPC">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(800);
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
  @include div_l_pc(346, 112, 187, 370);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.1em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.subtitle {
  @include div_l_pc(346, 55, 150, 370);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
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
  top: size(450) !important;
}

.carousel-3d-item {
  // position: relative;

  &.current {
      .mask {
        opacity: 1;
      }
    &:hover {
      .mask {
        opacity: 0;
      }
   }
  }
  }
.carousel-3d-img {
  height: 100%;object-fit: cover;
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
  @include img_l_pc(1100, 680,410);
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
  .section1 {
    width: 100vw;
    min-height: sizem(400);
    max-height: sizem(812);
    height:sizem(550);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    position: absolute;
    top: auto;
    left: 0;bottom: sizem(150);
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: absolute;
    }
  }

  .title {
    @include div_l_m(147, 47, 180, 114);
    font-size: sizem(32);
  }

  .subtitle {
    @include div_l_m(64, 22, 160, 156);
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
    top: sizem(340) !important;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: sizem(20);
    opacity: 0;
    transition: all 0.3s;
  }

  
  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: sizem(34);
    letter-spacing: 0.05em;
  }
  .info {
    width: sizem(310);
    height: sizem(247);
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(554);
    border-top: 1px solid #ff8200;
    border-bottom: 1px solid #ff8200;
    padding: 20px 0;
    .info-item {
      width: 100%;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.65;
      letter-spacing: sizem(1);
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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section1',
  mixins: [slider],

  props: ['contentIndex'],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      imgWidth: window.innerWidth * 0.187,
      imgHeight: window.innerWidth * 0.156,
      slideList: [
        {
          img: require('../works/4/01.jpg'),
          name: '琢壹',
        },
        {
          img: require('../works/3/1.jpg'),
          name: '立瑾綻',
        },
        {
          img: require('../works/1/1.jpg'),
          name: ' 立瑾醞',
        },
        {
          img: require('../works/2/1.jpg'),
          name: ' 立瑾Way',
        },
        /*
        {
          img: require('../works/3/1.jpg'),
          alt: '',
          name: ' 鳳福段',
          desc:'<b>基地位置：</b>三重區神農街433號～439號<br>完工時間： 2020年<br>規劃樓層： 地上12層，地下2層<br>個案特色：<br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },*/
      ],
    }
  },

  methods: {
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.$emit('changeContentIndex', index)
    },
  },

  mounted() {
    if (this.isMobile) {
      this.imgWidth = window.screen.width * 0.6
      this.imgHeight = window.screen.width * 0.6 * (272 / 312)
    }

    if (this.$route.query.index == 1 || this.$route.query.index == 3) {
      this.goToSlide(0)
    }

    if (this.$route.query.index == 2 || this.$route.query.index == 4) {
      this.goToSlide(1)
    }
  },

  created() {},

  computed: {},
}
</script>
