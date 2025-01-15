<template>
  <div class="bg">
    <img src="./s1/pc_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s1/m_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <div class="link">
      <a href="https://docs.google.com/presentation/d/1oECBdCmxzW2FDhR99856DyBWUE5v0HIP/edit?usp=sharing&ouid=106402782396343110158&rtpof=true&sd=true" target="_blank">
        1131209公告
      </a>
      <a href="hhttps://drive.google.com/file/d/10a08ECcj7JaruByuomLEhzfFiW2vuc-x/view?usp=drive_link" target="_blank">
        公聽會公告
      </a>
      <a href="https://drive.google.com/file/d/1cXA4naGjriggGHGwdhFAJpjPD_jJgN08/view?usp=drive_link" target="_blank">
        公聽會議程
      </a>
      <a href="https://drive.google.com/file/d/1F_ccxI3W0F_I4J2uebl87Q04EedAuLTK/view?usp=drive_link" target="_blank">
        傳單
      </a>
      <a href="https://drive.google.com/file/d/1d_OUBh97LkG8uV-MkDRfzhXBSasuVDn8/view?usp=sharing" target="_blank">
        公聽會簡報
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // z-index: 5;
  height: 100vh;
  min-height: size(900);
  //max-height: size(1080);
  background: #fff;
  // background-size: cover;
}

.bg-img {
  width: 100%;
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

.logo {
  @include img_c_pc(396, 147);
  top: calc(50% + 100vw * (150 - 504) / 1920);
}

.title {
  @include img_c_pc(396, 547);
  top: calc(50% + 100vw * (487 - 504) / 1920);
}

.link{
  position: absolute;
  left: 0;right: 0;bottom:size(50);margin:0 auto;
  width: 35em;
  font-size: size(50);display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5em;
  a{position: relative;
    display: inline-block;color: #fff;text-decoration: none;
    background: linear-gradient(90deg, #FC9412, #FF0B6B);
    width: 9em;border-radius: 1em;
  padding: .5em 0;transition: transform 0.3s;
  $m:.1em;
  &::before{content: "";position: absolute;top: $m;left: $m;right: $m;bottom: $m;
  border-radius: 1em;
  border: 2px solid #fff;}
  &:hover {
    transform: scale(1.05) translateY(-3%);
  }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    margin: 0;
    height: 100vh;
    min-height: sizem(670);
    background-image: url('./s1/m_bg.jpg');
    position: relative;
    z-index: 2;
    background-size: cover;
    // overflow: hidden;
  }

  .bg-img {
    display: none;
    // width: 100vw;
    // height: 100vh;
    // min-height: sizem(670);
    // position: absolute;
    // top: 0;
    // left: 0;
    // display: block;
    // object-fit: cover;
    // margin-top: 0;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .logo {
    @include img_c_m(185, 94);
    top: calc(50% + 100vw * (14 - 302) / 375);
  }

  .title {
    @include img_c_m(275, 283);
    top: calc(50% + 100vw * (203 - 302) / 375);
  }

  .link{bottom: 1em;
  width: 100%;
  font-size: sizem(30);
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
