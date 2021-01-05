<template>
  <div class="section4">
    <!-- <div class="title">經典建案</div> -->
    <img src="./s4/i.jpg" alt="" class="img">
    <img src="./s4/title.png" alt="" class="title-img">
    <img src="./s4/more.png" alt="" class="btn" @click="$router.push('/products')">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(900);
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

.img {
  @include img_l_pc(1224, 82, 0);
}

.title-img {
  @include img_r_pc(725, 561, 180);
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

.btn {
  @include img_r_pc(217, 777, 175);
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
  .section4 {
    width: 100vw;
    min-height: sizem(1000);
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
    @include div_l_m(375, 40, 96, 0);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_l_m(375, 21, 141, 0);
    font-size: sizem(15);
    text-align: center;
  }

  .img1 {
    @include img_l_m(156, 218, 22);
  }

  .img2 {
    @include img_l_m(156, 218, 197);
  }

  .img3 {
    @include img_r_m(367, 640, 4);
  }

  .btn {
    display: none;
    // @include div_l_pc(182, 46, 1114, 310);
    // background-color: rgba(255, 130, 0, 0.7);
    // cursor: pointer;
    // text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    // font-size: size(23.8);
    // font-weight: normal;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.2;
    // letter-spacing: size(3.74);
    // text-align: center;
    // color: #fffcfd;
    // border-radius: 5px;
    // transition: all 0.3s;
    // z-index: 5;
    // position: absolute;
    // &:hover {
    //   background-color: rgba(255, 130, 0, 1);
    // }
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
