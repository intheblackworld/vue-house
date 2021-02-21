<template>
  <div class="bg">
    <img src="./s1/pc_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s1/m_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">

    <img src="./s1/logo_icon.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/logo_title.png" :alt="`${info.caseName}_title`" class="title" data-aos="fade-up" data-aos-delay="200">

    <a href="#" class="btn1">
      <img src="./s1/btn_1.png" :alt="`${info.caseName}_btn1`" data-aos="fade-up" data-aos-delay="400">
    </a>
    <a href="#" class="btn2">
      <img src="./s1/btn_2.png" :alt="`${info.caseName}_btn2`" data-aos="fade-up" data-aos-delay="600">
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // z-index: 5;
  height: 100vh;
  min-height: size(1080);
  background: #2d73ab;
  // background-size: cover;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
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

.logo {
  @include img_c_pc(396, 147);
}

.title {
  @include img_c_pc(396, 547);
}

.btn1 {
  @include img_l_pc(453, 754, 293);
  img {
    width: 100%;
  }
}

.btn2 {
  @include img_r_pc(453, 754, 293);
  img {
    width: 100%;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    background-size: cover;
    margin: 0;
    height: 100vh;
    position: relative;
    z-index: 2;
    // overflow: hidden;
  }

  .bg-img {
    width: sizem(375);
    height: 100vh;
    min-height: sizem(667);
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

  .logo {
    @include img_c_m(185, 94);
  }

  .title {
    @include img_c_m(185, 283);
  }

  .btn1 {
    @include img_c_m(270, 378);
    img {
      width: 100%;
    }
  }

  .btn2 {
    @include img_c_m(270, 490);
    img {
      width: 100%;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import info from '@/info'
import { isMobile, isPC } from '@/utils'

export default {
  name: 'section1',

  components: {},

  data() {
    return {
      info,
      isMobile,
      isPC,
    }
  },

  computed: {},

  methods: {
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

  created() {},
  mounted() {},
}
</script>
