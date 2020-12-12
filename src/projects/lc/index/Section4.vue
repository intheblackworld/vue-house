<template>
  <div class="section4">
    <div class="title">熱銷建案</div>
    <h3 class="subtitle">
      Hot Case
    </h3>
    <img src="./s4/1.jpg" alt="" class="img1" @click="$router.push('/hot?index=1')">
    <img src="./s4/2.jpg" alt="" class="img2" @click="$router.push('/hot?index=2')">
    <img src="./s4/bg.png" alt="" class="img3">
    <div class="btn flex-c" @click="$router.push('/hot')">瞭解更多</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(1400);
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #f8f8f8 19%,
    #dbe5c9 48%,
    #99b568
  );
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
  @include div_l_pc(346, 112, 234, 307);
  font-size: size(75.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(160, 54, 270, 667);
  font-size: size(37.3);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.img1 {
  @include img_l_pc(276, 411, 206);
  cursor: pointer;
}

.img2 {
  @include img_l_pc(276, 411, 515);
  cursor: pointer;
}

.img3 {
  @include img_r_pc(1135, -50, 15);
}

.btn {
  @include div_l_pc(182, 46, 1114, 310);
  background-color: rgba(255, 130, 0, 0.7);
  cursor: pointer;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: size(23.8);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.74);
  text-align: center;
  color: #fffcfd;
  border-radius: 5px;
  transition: all 0.3s;
  z-index: 5;
  position: absolute;
  &:hover {
    background-color: rgba(255, 130, 0, 1);
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
  .section4 {
    width: 100vw;
    min-height: sizem(1124);
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
    @include div_l_m(130, 40, 96, 123);
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.02);
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(64, 21, 141, 155);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #ff8200;
    white-space: nowrap;
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
