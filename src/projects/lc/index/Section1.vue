<template>
  <div class="section1">
    <img src="./s1/bg.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <img src="./s1/2.png" alt="" class="bg-img">
    <h1 class="title">立瑾建築機構</h1>
    <h1 class="desc">
      百年建築 將心構築<br /><br />

      以人為本，用心建設。<br />
      致力打造百年穩固、永世怡居的好建築。
    </h1>
    <div class="bottom"></div>
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

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(230) size(1920);
  border-color: transparent transparent #fff transparent;
}

.title {
  @include div_r_pc(490, 103, 187, 402);
  font-size: size(70.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(13.94);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include div_r_pc(570, 192, 332, 355);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.78);
  text-align: center;
  color: #ffffff;
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
    min-height: sizem(700);
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

  .bottom {
    @include div_r_m(375, 44, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 sizem(44) sizem(375);
    border-color: transparent transparent #fff transparent;
  }

  .title {
    @include div_r_m(196, 41, 40, 90);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.57);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_r_m(325, 192, 93, 27);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3);
    text-align: center;
    color: #ffffff;
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
