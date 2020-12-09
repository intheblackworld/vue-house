<template>
  <div class="section4">
    <img src="./s4/bg.jpg" alt="" class="bg-img">
    <div class="title">以人出發 精心琢磨</div>
    <div class="subtitle">
      「人」是建築的起點，思考以人為本的設計語彙，落成的建築才顯得經典雋永。<br />
      以「確實」不馬虎的心，結合「創新」建築技術，「執行」建設工程，<br />
      三大核心價值，貫穿從無到有的建案發展，對於「家」只求完美，絕不懈怠。
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(595);
  overflow: hidden;
  position: relative;
  background-image: #fff;
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
  @include div_l_pc(1285, 112, 200, 320);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(3.4);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(1285, 54, 260, 320);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(4.78);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
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
  .section4 {
    width: 100vw;
    min-height: sizem(595);
    max-height: sizem(812);
    height: sizem(595);
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
    @include div_l_m(310, 41, 166, 29);
    font-size: sizem(28);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1.4);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(310, 267, 220, 29);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(2.58);
    text-align: left;
    color: #ffffff;
    white-space: normal;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
