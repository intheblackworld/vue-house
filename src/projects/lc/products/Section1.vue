<template>
  <div class="section1">
    <img src="./s1/top.jpg" alt="" class="bg-img" v-if="isPC">
    <img src="./s1/top_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <!-- <img src="./s1/2.png" alt="" class="bg-img"> -->
    <h1 class="subtitle">Products</h1>
    <h1 class="title">真心構築</h1>
    <h1 class="desc">
      真正的建築，以人為本<br />真正的用心，將心匠情
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: size(1920);
  height: size(750);
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
  @include div_l_pc(347, 112, 187, 640);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(15.02);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(160, 55, 150, 740);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.desc {
  @include div_l_pc(522, 143, 290, 648);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(6.97);
  text-align: left;
  color: #ff8200;
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
    height:sizem(400);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    position: absolute;
    top: auto;
    left: 0;bottom: 0;
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
    @include div_l_m(375, 51, 240, 0);
    font-size: sizem(17);
    text-align: center;
    color: #ff8200;
    white-space: nowrap;

    span {
      color: #fff;
    }
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
