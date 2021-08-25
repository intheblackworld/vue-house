<template>
  <div class="section5">
    <div class="title">歷年業績</div>
    <div class="subtitle">
      Products
    </div>
    <img src="./s5/bg.png" alt="" class="bg-img s-bg">
    <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="false" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? false : false" :border="0" :display="isMobile ? 3 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="carousel-3d-item">
        <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        <div class="mask" @click="$router.push(`/past?index=${index + 1}`)">
          <div class="border flex-c">
            {{slide.name}}
          </div>
        </div>
      </slide>
    </carousel-3d>
    <img src="./s5/s.png" alt="" class="shadow">
    <div class="info">
      <div class="info-item">
        <div class="info-desc" v-html="slideList[currentIndex].desc"></div>
        <!-- <div class="info-title">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: auto;
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
  //position: absolute;
  margin: 0 auto size(500) !important;
  top: size(500);
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
  height: 100%;
  object-fit: cover;
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
  cursor: pointer;
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
  //@include img_l_pc(1388, 770, 266);
  width: size(1380);
  margin: size(-70) auto size(30);
}

.info {
  width: size(1244);
  //height: 276px;
  // position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto size(50);
  top: size(950);
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  padding: 20px 0;
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: 0.05em;
  color: #ff8200;
  text-align: center;
  .info-item {
    width: 100%;
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
    min-height: sizem(822);
    // max-height: sizem(812);
    // height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(402);
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
    @include div_l_m(375, 22, 161, 0);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_l_m(375, 22, 139, 0);
    font-size: sizem(15);
    text-align: center;
  }

  .s-bg {
    width: 100vw;
    margin-top: sizem(-160);
    z-index: 3;
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto !important;
    top: sizem(280) !important;
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
    font-size: sizem(51.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(10.32);
    text-align: center;
    color: #ffffff;
  }

  .shadow {
    @include img_l_m(1388, 900, 266);
  }

  .info {
    width: sizem(310);
    height: auto;
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
      imgWidth: 360,
      imgHeight: 300,
      slideList: [
        {
          img: require('../works/1/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
          desc: '<b>基地位置：</b>三重區神農街433號～439號<br><b>完工時間：</b>2020年<br><b>規劃樓層：</b>地上12層，地下2層<br><b>個案特色：</b><br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
        {
          img: require('../works/2/1.jpg'),
          alt: '',
          name: ' 立瑾Way',
          desc: '鶯歌鳳鳴 立瑾Way<br />2020年11月<br>延續著住戶的期盼<br>今年11月19日於鶯歌鳳鳴重劃區<br>辦理開工動土祈福典禮<br>並秉持著給予住戶最好的期盼<br>於2021年3月份公開<br>即在一個月內創造完銷的佳績',
        },
        {
          img: require('../works/1/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
          desc: '<b>基地位置：</b>三重區神農街433號～439號<br><b>完工時間：</b>2020年<br><b>規劃樓層：</b>地上12層，地下2層<br><b>個案特色：</b><br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
        {
          img: require('../works/2/1.jpg'),
          alt: '',
          name: ' 立瑾Way',
          desc: '鶯歌鳳鳴 立瑾Way<br />2020年11月<br>延續著住戶的期盼<br>今年11月19日於鶯歌鳳鳴重劃區<br>辦理開工動土祈福典禮<br>並秉持著給予住戶最好的期盼<br>於2021年3月份公開<br>即在一個月內創造完銷的佳績',
        },
        /*{
          img: require('../works/3/1.jpg'),
          alt: '',
          name: ' 鳳福段',
          desc:'<b>基地位置：</b>三重區神農街433號～439號<br>完工時間： 2020年<br>規劃樓層： 地上12層，地下2層<br>個案特色：<br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
        */
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
      this.imgWidth = window.screen.width * 0.75
      this.imgHeight = window.screen.width * 0.75 * (272 / 312)
    }
  },

  created() {},

  computed: {},
}
</script>
