<template>
  <div class="section5">
    <div class="bg">
      <img src="./s6/txt1.png" alt="" class="img1">
      <img src="./s6/txt2.png" alt="" class="img2">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  //background-color: #fff;
  //height: size(1420);
  padding:0;
}

.img1 {
  width: size(826);
  margin:size(400) auto 0 auto;
  display: block;
}

.img2 {
  width: size(706);
  margin: 0 auto  size(80) auto ;
  display: block;
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    min-height: auto;
  //height: size(1420);
  }
.img1 {
  width: size_m(313);
  margin:size_m(99) auto 0  auto;
  display: block;
}

.img2 {
  width: size_m(262);
  margin: size_m(77) auto size_m(25) ;
  display: block;
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isMobile,
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
