<template>
  <div class="section3">
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <h1 class="title">熱銷建案</h1>
    <h1 class="subtitle">
      以真心，推薦好建築
    </h1>
    <img src="./s3/title.png" :alt="`${info.caseName}_title`" class="title-img">
    <img src="./s2/more.png" :alt="`${info.caseName}_more`" class="btn" @click="$router.push('/hot')">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(960);
  overflow: hidden;
  position: relative;
  background-image: #008fbb;
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
  @include div_r_pc(288, 86, 748, 397);
  font-size: size(58);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(18.54);
  text-align: left;
  color: #ffe900;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(284, 49, 826, 400);
  font-size: size(33);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: size(-1.64);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(27);
    color: #ff8200;
  }
}

.title-img {
  @include img_l_pc(732, 699, 177);
}

.btn {
  @include img_r_pc(217, 835, 175);
  cursor: pointer;
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
  .section3 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height:sizem(660);
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
    @include div_r_m(375, 41, 23, 0);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_r_m(375, 74, 70, 0);
    font-size: sizem(15);
    text-align: center;
  }

  .imgs {
    width: sizem(375);
    top: sizem(146);
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    display: block !important;
    .img {
      width: sizem(150);
      height: sizem(150);
      &:nth-child(1) {
        display: inline-block;
        margin: 0 sizem(15);
      }
      &:nth-child(2), &:nth-child(4), &:nth-child(5) {
        display: inline-block;
        margin: 0 sizem(15);
      }

      &:nth-child(3) {
        margin: sizem(15) auto;
      }
      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        .mask {
          opacity: 0;
        }
      }
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.7);
    }

    .border {
      width: 100%;
      height: 100%;
    //  box-shadow: inset 0 0 0 10px #fff;
     // border-radius: 999px;
      font-size: sizem(26);
      border: sizem(7) solid #FFF;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.34;
      letter-spacing: normal;
      text-align: left;
      color: #ff8200;
    }

    .border-orange {
    border: sizem(7) solid #fe8100;
    }
  }

  .bottom {
    @include div_r_m(375, 173, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: sizem(173) 0 0 sizem(375);
    border-color: transparent transparent transparent #fff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info  from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
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
