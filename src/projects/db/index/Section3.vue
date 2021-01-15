<template>
  <div class="section3">
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img an" v-if="isPC">
    <img src="./s3/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <h1 class="title" data-aos="fade" data-aos-delay="400">熱銷建案</h1>
    <h1 class="subtitle" data-aos="fade" data-aos-delay="600">
      好的建築　真心推薦
    </h1>
    <img src="./s3/title.png" :alt="`${info.caseName}_title`" class="title-img" data-aos="fade-right" data-aos-delay="100">
    <img src="./s2/more.png" :alt="`${info.caseName}_more`" class="btn" @click="$router.push('/hot')" data-aos="fade" data-aos-delay="600">
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
.an{
  animation:oxxo 40s linear infinite;
}
@keyframes oxxo{
    90%{transform: scale(1.2);opacity: 1;
    }
    100%{transform: scale(1.22);opacity: 0;
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
  text-shadow: 0 0 0.3em #0009;
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
  text-shadow: 0 0 0.3em #0006;

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
  box-shadow: 0 0 0.5em #0006;
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
    min-height: sizem(404);
    max-height: sizem(812);
    height: sizem(490);
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
    @include div_r_m(149, 45, 390, 191);
    font-size: sizem(28);
    text-align: center;
  }

  .subtitle {
    @include div_r_m(145, 34, 435, 194);
    font-size: sizem(15);
    text-align: center;
  }

  .title-img {
    @include img_l_m(288, 308, 54);
  }

  .btn {
    @include img_r_m(151, 434, 32);
    cursor: pointer;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

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
