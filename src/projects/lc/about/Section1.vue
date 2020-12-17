<template>
  <div class="section1">
    <img src="./s1/1.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s1/1_m.png" alt="" class="bg-img" v-if="isMobile">
    <!-- <img src="./s1/2.png" alt="" class="bg-img"> -->
    <h1 class="title">關於立瑾</h1>
    <h1 class="desc">
      堅持<span>「 確實、創新、執行 」</span>三大使命
    </h1>
    <div class="ball1 flex-c">確實</div>
    <div class="ball2 flex-c">創新</div>
    <div class="ball3 flex-c">執行</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  overflow: hidden;
  position: relative;
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
  @include div_l_pc(347, 112, 187, 305);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include div_l_pc(570, 192, 290, 308);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #5d5d5d;

  span {
    color: #fff;
  }
}
.ball1,
.ball2,
.ball3{
  font-size: size(40);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  border-radius:100%;
  text-align: center;
  color: #ff8200;
  background-color: #fff;
  @include div_l_pc(160, 160, 370, 304);
}

.ball2 {
  left: size(495);
}

.ball3 {
  left: size(683);
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
    min-height: sizem(600);
    height: sizem(600);
    // max-height: sizem(812);
    // height: 100vh;
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
    @include div_l_m(147, 47, 63, 43);
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

  .desc {
    @include div_l_m(287, 25, 123, 46);
    font-size: sizem(17);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #5d5d5d;

    span {
      color: #fff;
    }
  }

  .ball1 {
    @include div_l_m(86, 86, 198, 35);
    border-radius: 999px;
    background-color: #fff;
    font-size: sizem(27);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    // letter-spacing: sizem(10.32);
    text-align: center;
    color: #ff8200;
  }

  .ball2 {
    @include div_l_m(86, 86, 198, 144);
    border-radius: 999px;
    background-color: #fff;
    font-size: sizem(27);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    // letter-spacing: sizem(10.32);
    text-align: center;
    color: #ff8200;
  }

  .ball3 {
    @include div_l_m(86, 86, 198, 254);
    border-radius: 999px;
    background-color: #fff;
    font-size: sizem(27);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    // letter-spacing: sizem(10.32);
    text-align: center;
    color: #ff8200;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

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
