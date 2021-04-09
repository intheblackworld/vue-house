<template>
  <div class="section4">
    <!-- <div class="title">經典建案</div> -->
    <img src="./s4/i.jpg" :alt="`${info.caseName}_i`" class="img" v-if="isPC" data-aos="fade" data-aos-delay="100">
    <img src="./s4/i_m.jpg" :alt="`${info.caseName}_i`" class="img" v-if="isMobile" data-aos="fade" data-aos-delay="100">
    <img src="./s4/title.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isPC" data-aos="fade-down" data-aos-delay="600">
    <img src="./s4/title_m.png" :alt="`${info.caseName}_title`" class="title-img" v-if="isMobile">
    <div class="btn" @click="$router.push('/products')" data-aos="fade" data-aos-delay="600">LEARN MORE</div>
    <h1 class="title" data-aos="fade" data-aos-delay="400" v-if="isMobile">經典建案</h1>
    <h1 class="subtitle" data-aos="fade" data-aos-delay="600">
      以經典　再造風華
    </h1>
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
  font-family: "gothic";
  font-size: size(25);
  color: #fff;
  line-height: 1.3;
  z-index:2;
  &::before{content: "";
  background:#008FBB;
  position: absolute;
  transition:all 0.2s;
  top: 0;left: 0;width: 100%;height: 100%;
  transform-origin: 50% 50%;
  animation: btn 0.5s ease-in-out infinite alternate;
  z-index: -1;}
  &:hover:before{
    transform: scaleY(1.3);
  }
}
@keyframes btn {
  to {
  background:#005c79;
  }
}

.btn1 {
  @include img_r_pc(217, 677, 175);
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
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
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


  .img {
    @include img_l_m(353, 33, 0);
    height: calc(100% - 65vw);
    object-fit: cover;
  }
  .title {
    @include div_l_m(149, 45, 415, 32);
    font-size: sizem(30);
    text-align: left;
  letter-spacing:0.251em;
    top:auto;
    height: auto;
    bottom:sizem(85);
    color: #008FBB;
  }

  .subtitle {
    @include div_l_m(145, 34, 460, 32);
    font-size: sizem(16);
    text-align: left;
    top:auto;
    height: auto;
    bottom:sizem(56);
    color: #666666;
  }

  .title-img {
    @include img_l_m(209, 474, 32);
    top:auto;
    height: auto;
    bottom:sizem(135);
  }

  .btn {
    @include img_r_m(151, 456, 32);
    cursor: pointer;
    top:auto;
    bottom:sizem(60);
    font-size: sizem(18);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section4',

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
