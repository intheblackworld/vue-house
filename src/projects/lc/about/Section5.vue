<template>
  <div class="section5">
    <div class="img relative">
      <img src="./s5/I.jpg" alt="">
      <div class="border absolute-c"></div>
    </div>
    <div class="title1">
      對於「家」<br />只求完美，絕不懈怠。
    </div>
    <div class="title2">
      細節精究 打造經典
    </div>
    <div class="subtitle">
      從選定基地、團隊組成、設計規劃、建材選定，
      關於建設的全部流程，立瑾對於任何細節，
      都以極高標準看待，成就一個經典不容易，
      但我們以打造經典為使命。
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(675);
  overflow: hidden;
  position: relative;
  background-color: #fff;
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

.img {
  @include div_l_pc(753, 487, 85, 914);
  img {
    width: 100%;
  }

  .border {
    width: 95%;
    height: 90%;
    border: 3px solid #ff8200;
  }
}

.title1 {
  @include div_l_pc(371, 142, 120, 300);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: size(3.4);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.title2 {
  @include div_l_pc(614, 142, 278, 300);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: size(3.4);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(614, 142, 330, 300);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(4.78);
  text-align: left;
  color: #606060;
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

  .img {
    @include div_r_m(342, 221, 389, 0);
    img {
      width: 100%;
    }

    .border {
      width: 95%;
      height: 90%;
      border: 3px solid #ff8200;
    }
  }

  .title1 {
    @include div_l_m(305, 113, 60, 32);
    font-size: sizem(28);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
  }

  .title2 {
    @include div_l_m(305, 113, 158, 32);
    font-size: sizem(28);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(305, 113, 212, 32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: sizem(1.78);
    text-align: left;
    color: #606060;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

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
